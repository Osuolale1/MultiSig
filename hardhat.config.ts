require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const URL = "https://eth-sepolia.g.alchemy.com/v2/XpWuAVYcHj7J0KOpMrd-c8Zr1Tdd0YJ5"

const KEY = "8b2e54997c83fe1a298fc5b2978448a6f2b4b03ef30942279af3333e137b421c"

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia : {
      url: URL,
      accounts: [`0x${KEY}`],
    },
  },
};


/*

require("dotenv").config({ path: ".env" });

const ALCHEMY_SEPOLIA_API_KEY_URL = process.env.ALCHEMY_SEPOLIA_API_KEY_URL;
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: ALCHEMY_SEPOLIA_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    }
  },
  lockGasLimit: 200000000000,
  gasPrice: 10000000000,
};
*/