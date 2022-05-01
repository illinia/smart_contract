const HDWalletProvider = require('truffle-hdwallet-provider');
beneficiary = 'bomb speak lens inherit regret embody box sibling quote kit argue protect';
module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(beneficiary, 'https://ropsten.infura.io/v3/e8b8336da9bb41c6b6e2bb923a5e8bf5'),
      network_id: 3,
      gas: 5000000,
      skipDryRun: false
    }
  },

  compilers: {
    solc: {
      version: "0.5.8"
    }
  }
};