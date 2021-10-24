const characterNames = ["Harry", "Ron", "Hermione"];
const characterImageURIs = ["https://i.imgur.com/zkI21GG.jpeg", "https://i.imgur.com/f6eO8H7.jpeg", "https://i.imgur.com/ktmsuS7.jpg"];
const characterHp = [200, 200, 300];
const characterAttackDmg = [100, 25, 50];

const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(characterNames, characterImageURIs, characterHp, characterAttackDmg);
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();