const HDWalletProvider = require('truffle-hdwallet-provider');
mnemonic = 'bomb speak lens inherit regret embody box sibling quote kit argue protect'
module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic,
        'https://ropsten.infura.io/v3/42047c10c1b248e39188a085f56cc8b4'),
      network_id: 3,
      gas: 1000000
    }
  },

  compilers: {
    solc: {
      version: "0.5.8"
    }
  }
};
