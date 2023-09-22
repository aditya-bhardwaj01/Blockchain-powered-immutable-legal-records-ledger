import accounts from "../data/policeData";
import { uploadJsonToIpfs } from "../../../handle-ipfs";

accounts.forEach((account) => {
    const {PoliceId, Post, Metamask} = account;
    const ipfsLink = uploadJsonToIpfs(account, PoliceId);

    // call function to registerUpdatePolice
});