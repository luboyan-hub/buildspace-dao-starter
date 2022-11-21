import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xf2ACc78f0a3E2beC3Aa1D575a52E92DbE980C832", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "KILLyaya",
        description: "This NFT will give you access to KILLyayaDAO!",
        image: readFileSync("scripts/assets/11.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();