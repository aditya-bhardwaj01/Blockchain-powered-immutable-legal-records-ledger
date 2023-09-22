// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title CriminalLedger
 * @dev Implements an immutable ledger for Criminal data
 */
contract CriminalLedger {
    // EVENTS
    // Event to log police officer registration
    event PoliceOfficerRegistered(string indexed policeID);
    event CriminalRegistered(
        string indexed policeID,
        string indexed criminalID
    );
    event CriminalUpdated(string indexed policeID, string indexed criminalID);

    // DATA
    address private admin; // admin metamask address

    mapping(string => string) private policeDataMap; // (policeID => police_data_ipfs_link)
    mapping(string => address) private policeAddrMap; // (policeID => police_metamask_address)
    enum PolicePost {
        Constable,
        HeadConstable,
        ASI, // Assistant Sub-Inspector of Police
        SI, // Sub-Inspector of Police
        IP, // Inspector of Police
        ASP, // Assistant Superintendent of Police
        DSP, // Deputy Superintendent of Police
        SP, // Superintendent of Police
        DIGP, // Deputy Inspector General of Police
        IGP, // Inspector General of Police
        ADGP, // Additional Director General of Police
        DGP // Director General of Police
    }
    mapping(string => PolicePost) private policePostMap; // (policeID => policePost)

    string[] private criminalList; // store [criminal_data_ipfs_link,..]
    mapping(string => string) private criminalDataMap; // (criminalID => criminal_data_ipfs_link)

    /**
     * @dev Set the contract deployer as the admin
     */
    constructor() {
        admin = msg.sender;
    }

    // MODIFIERS
    // Modifier to restrict access to the admin only
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

    // Modifier to check access to police data
    modifier hasAccessToPoliceData(string memory _policeID) {
        // Check if the policeID exists in the policeAddrMap
        require(
            policeAddrMap[_policeID] != address(0),
            "Police officer does not exist"
        );

        // Check if either the caller matches the PoliceID's Metamask address
        // or the police officer's post is greater than or equal to SP
        require(
            msg.sender == policeAddrMap[_policeID] ||
                uint256(policePostMap[_policeID]) >= uint256(PolicePost.SP),
            "Access denied"
        );
        _;
    }

    // Modifier to check police officer's authorization to add or update a criminal's record
    modifier authorizedToAddUpdateCriminal(string memory _policeID) {
        // Check if the policeID exists in the policeAddrMap
        require(
            policeAddrMap[_policeID] != address(0),
            "Police officer does not exist"
        );

        // Check if the police officer's post is greater than or equal to SP (Superintendent of Police)
        require(
            uint256(policePostMap[_policeID]) >= uint256(PolicePost.SP),
            "Access denied: Insufficient rank"
        );

        // Check if the caller matches the PoliceID's Metamask address
        require(msg.sender == policeAddrMap[_policeID], "Access denied");
        _;
    }

    // Modifier to check police officer's authorization to search for a criminal
    modifier authorizedToSearchCriminal(string memory _policeID) {
        // Check if the policeID exists in the policeAddrMap
        require(
            policeAddrMap[_policeID] != address(0),
            "Police officer does not exist"
        );

        // Check if the police officer's post is greater than or equal to SI (Sub-Inspector of Police)
        require(
            uint256(policePostMap[_policeID]) >= uint256(PolicePost.SI),
            "Access denied: Insufficient rank"
        );

        // Check if the caller matches the PoliceID's Metamask address
        require(msg.sender == policeAddrMap[_policeID], "Access denied");
        _;
    }

    // FUNCTIONS
    /**
     * @dev Register or Update a police officer's data.
     * @param _policeID The unique police ID.
     * @param _ipfsLink The IPFS link containing police data.
     * @param _policeMetamaskAddress The Metamask address of the police officer.
     * @param _policePost The police officer's post (enum value).
     */
    function registerUpdatePolice(
        string memory _policeID,
        string memory _ipfsLink,
        address _policeMetamaskAddress,
        PolicePost _policePost
    ) public onlyAdmin {
        // Update policeDataMap with the IPFS link
        policeDataMap[_policeID] = _ipfsLink;

        // Update policeAddrMap with the police Metamask address
        policeAddrMap[_policeID] = _policeMetamaskAddress;

        // Update policePostMap with the police post
        policePostMap[_policeID] = _policePost;

        // Emit an event to log the registration
        emit PoliceOfficerRegistered(_policeID);
    }

    /**
     * @dev Get the IPFS link containing police data for a given police officer.
     * @param _policeID The unique police ID.
     * @return IPFS link containing police data.
     */
    function getPoliceData(string memory _policeID)
        public
        view
        hasAccessToPoliceData(_policeID)
        returns (string memory)
    {
        // Return the IPFS link associated with the policeID
        return policeDataMap[_policeID];
    }

    /**
     * @dev Add criminal data to the ledger.
     * @param _policeID The unique police ID.
     * @param _criminalID The unique criminal ID.
     * @param _criminalDataIpfsLink The IPFS link containing criminal data.
     */
    function addCriminal(
        string memory _policeID,
        string memory _criminalID,
        string memory _criminalDataIpfsLink
    ) public authorizedToAddUpdateCriminal(_policeID) {
        // Update the criminal list with the criminal data IPFS link
        criminalList.push(_criminalDataIpfsLink);

        // Update the criminalDataMap with the criminal data IPFS link
        criminalDataMap[_criminalID] = _criminalDataIpfsLink;

        // Emit an event to notify the frontend of the registration
        emit CriminalRegistered(_policeID, _criminalID);
    }

    /**
     * @dev Search for a criminal using CriminalID
     * @param _policeID The unique police ID.
     * @param _criminalID The unique criminal ID.
     */
    function searchCriminalUsingID(
        string memory _policeID,
        string memory _criminalID
    )
        public
        view
        authorizedToSearchCriminal(_policeID)
        returns (string memory)
    {
        // Return criminal data ipfs link using the ID
        return criminalDataMap[_criminalID];
    }

    /**
     * @dev Get the list of all criminal data ipfs links
     * @param _policeID The unique police ID for authorization purpose.
     * @return Array of criminal data IPFS links.
     */
    function getAllCriminalData(string memory _policeID)
        public
        view
        authorizedToSearchCriminal(_policeID)
        returns (string[] memory)
    {
        // Return the whole array of criminal_data_ipfs_links
        return criminalList;
    }

    /**
     * @dev Update criminal data for a specific criminal.
     * @param _policeID The unique police ID.
     * @param _criminalID The unique criminal ID.
     * @param _criminalDataNewIpfsLink The new IPFS link containing updated criminal data.
     */
    function updateCriminalData(
        string memory _policeID,
        string memory _criminalID,
        string memory _criminalDataNewIpfsLink
    ) public authorizedToAddUpdateCriminal(_policeID) {
        // Get the current criminal data IPFS link from the criminalDataMap
        string memory currentCriminalDataLink = criminalDataMap[_criminalID];

        // Remove the current criminal data IPFS link from the criminalList
        removeCriminalLink(currentCriminalDataLink);

        // Add the new criminal data IPFS link to the criminalList
        criminalList.push(_criminalDataNewIpfsLink);

        // Update the criminalDataMap with the new criminal data IPFS link
        criminalDataMap[_criminalID] = _criminalDataNewIpfsLink;

        // Emit an event to indicate the successful update
        emit CriminalUpdated(_policeID, _criminalID);
    }

    /**
     * @dev Remove a specific element from a dynamic string array.
     * @param _linkToRemove the IPFS link to remove from the criminalList
     */
    function removeCriminalLink(string memory _linkToRemove) private {
        uint256 indexToRemove = findIndex(_linkToRemove);

        // If the element to remove is not found, revert
        require(indexToRemove < criminalList.length, "Element not found");

        // Move the last element to the position of the element to remove
        criminalList[indexToRemove] = criminalList[criminalList.length - 1];

        // Remove the last element (which is now a duplicate)
        criminalList.pop();
    }

    /**
     * @dev Find the index of a specific element in a dynamic string array.
     * @param _element The particular IPFS link whose index is to be found
     * @return The index of the element, or criminalList.length if not found.
     */
    function findIndex(string memory _element) private view returns (uint256) {
        for (uint256 i = 0; i < criminalList.length; i++) {
            if (compareStrings(criminalList[i], _element)) {
                return i;
            }
        }
        return criminalList.length; // Element not found
    }

    /**
     * @dev Compare if two strings are equal
     * @param str1 string 1
     * @param str2 string 2
     * @return True if equal, else False
     */
    function compareStrings(string memory str1, string memory str2)
        private
        pure
        returns (bool)
    {
        return
            keccak256(abi.encodePacked(str1)) ==
            keccak256(abi.encodePacked(str2));
    }
    
}
