require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/LBpf_hQI8tJmGRorubGt93-y3LW1iuAR",
      accounts: [
        "9ddb10d00e75ef1993256ee1e6e6d8467e92d082dd0ca7867c0d5a30015096df",
      ],
    },
  },
};
