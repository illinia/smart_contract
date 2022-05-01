var MPC = artifacts.require("MPC");

module.exports = function (deployer, networks, accounts) {
  var worker = accounts[1];
  var balance = 50000000000000000000;
  if (networks == 'ropsten') {
    var worker = '0x2177B44920f1d277438f9dBF72331a56C1331F76';
    var balance = 1000000000000000000;
    deployer.deploy(MPC, worker, { value: balance });
  }

};
