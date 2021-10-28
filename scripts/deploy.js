const characterNames = ["Harry", "Ron", "Hermione"];
const characterImageURIs = [
  "https://i.imgur.com/zkI21GG.jpeg",
  "https://i.imgur.com/f6eO8H7.jpeg",
  "https://i.imgur.com/ktmsuS7.jpg",
];
const characterHp = [200, 200, 300];
const characterAttackDmg = [100, 25, 50];
const bossName = "Voldemort";
const bossImageURI = "https://i.imgur.com/9aLks1K.jpeg";
const bossHP = 1000;
const bossAttackDamage = 50;

const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    characterNames,
    characterImageURIs,
    characterHp,
    characterAttackDmg,
    bossName,
    bossImageURI,
    bossHP,
    bossAttackDamage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
