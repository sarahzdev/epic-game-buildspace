const characterNames = ["Harry", "Ron", "Hermione"];
const characterImageURIs = [
  "QmcuxCThamaT8Z1a2ems3XEfEfotBZia6JK7jSSY2zUrot",
  "QmTzXoWkDARUvfmAwrfFzuPteP5A2o4h547LLDzXC34xrT",
  "QmZckQ4eNK8JrqfBCxei2y4fpmuaTipEkZup8edAd628og",
];
const characterHp = [600, 600, 800];
const characterAttackDmg = [100, 50, 50];
const bossName = "Voldemort";
const bossImageURI = "QmdgDWr4LgpfuBHBq6M46h54jV6en8KdP5KCmb3ak3WXCW";
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

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();
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
