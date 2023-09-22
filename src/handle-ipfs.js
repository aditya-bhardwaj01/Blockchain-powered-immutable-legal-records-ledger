const pinataSDK = require("@pinata/sdk");
const fs = require("fs");

const { API_KEY, API_SECRET_KEY } = process.env;

const pinata = new pinataSDK(
  API_KEY,
  API_SECRET_KEY
);

async function uploadImageToIpfs(imagePath, name) {
  try {
    // Upload the image file.
    const imageFile = fs.createReadStream(imagePath);
    const imageOptions = {
      pinataMetadata: {
        name: name,
      },
    };
    const imgRes = await pinata.pinFileToIPFS(imageFile, imageOptions);
    // console.log("Image CID:", imgRes.IpfsHash);
    return imgRes.IpfsHash;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

async function uploadJsonToIpfs(jsonObject, name) {
  try {
    // Upload the JSON object.
    const jsonOptions = {
      pinataMetadata: {
        name: name,
      },
    };
    const jsonRes = await pinata.pinJSONToIPFS(jsonObject, jsonOptions);
    // console.log("JSON CID:", jsonRes.IpfsHash);
    return jsonRes.IpfsHash;
  } catch (error) {
    console.error("Error uploading JSON:", error);
    throw error;
  }
}

export { uploadImageToIpfs, uploadJsonToIpfs };

// Example usage:
// const imageFilePath = "./pc.jpeg";
// const jsonObject = { key: "value" };

// async function main() {
//   try {
//     const imageCid = await uploadImageToIpfs(imageFilePath);
//     const jsonCid = await uploadJsonToIpfs(jsonObject);

//     // You can use the uploaded CIDs as needed in your application.
//     console.log("Image CID:", imageCid);
//     console.log("JSON CID:", jsonCid);
//   } catch (error) {
//     console.error("Main error:", error);
//   }
// }

// main();