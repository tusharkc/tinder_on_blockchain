const { ethers } = require("hardhat");

async function main() {
  const tinderFactory = await ethers.getContractFactory("TinderERC721");
  const TinderContract = await tinderFactory.deploy();

  console.log("TinderContract deployed to:", TinderContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
