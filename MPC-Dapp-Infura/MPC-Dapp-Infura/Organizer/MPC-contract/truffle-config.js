const HDWalletProvider = require('truffle-hdwallet-provider');
organizer = 'bomb speak lens inherit regret embody box sibling quote kit argue protect';

module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(organizer, 'https://ropsten.infura.io/v3/a294bcdd81964dc6a508699fa30dc92e'),
      network_id: 3,
      gas: 8000000,
      skipDryRun: false
    },
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },

  compilers: {
    solc: {
      version: "0.5.8"
    }
  }
};