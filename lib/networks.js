'use strict';
var _ = require('lodash');

var BufferUtil = require('./util/buffer');

/**
 * A network is merely a map containing values that correspond to version
 * numbers for each darkcoin network. Currently only supporting "livenet"
 * (a.k.a. "mainnet") and "testnet".
 * @constructor
 */
function Network() {}

Network.prototype.toString = function toString() {
  return this.name;
};

/**
 * @instance
 * @member Network#livenet
 */
var livenet = new Network();
_.extend(livenet, {
  name: 'livenet',
  alias: 'mainnet',
  pubkeyhash: 0x4c,
  privatekey: 0xcc,
  scripthash: 0x10,
  xpubkey:  0x02fe52f8,
  xprivkey: 0x02fe52cc,
  networkMagic: BufferUtil.integerAsBuffer(0xbf0c6bbd),
  port: 9999,
  dnsSeeds: [
    'dnsseed.darkcoin.io',
    'dnsseed.darkcoin.qa',
    'dnsseed.masternode.io',
  ]
});

/**
 * @instance
 * @member Network#testnet
 */
var testnet = new Network();
_.extend(testnet, {
  name: 'testnet',
  alias: 'testnet',
  pubkeyhash: 0x8b,
  privatekey: 0xef,
  scripthash: 0x13,
  xpubkey: 0x3a8061a0,
  xprivkey: 0x3a805837,
  networkMagic: BufferUtil.integerAsBuffer(0xcee2caff),
  port: 19999,
  dnsSeeds: [
    'testnet-seed.darkcoin.io',
    'testnet-seed.darkcoin.qa',
    'test.dnsseed.masternode.io',
  ],
});

var networkMaps = {};

_.each(_.values(livenet), function(value) {
  if (!_.isObject(value)) {
    networkMaps[value] = livenet;
  }
});
_.each(_.values(testnet), function(value) {
  if (!_.isObject(value)) {
    networkMaps[value] = testnet;
  }
});

/**
 * @function
 * @member Network#getNetwork
 * Retrieves the network associated with a magic number or string.
 * @param {string|number|Network} arg
 * @param {string} key - if set, only check if the magic number associated with this name matches
 * @return Network
 */
function getNetwork(arg, key) {
  if (arg === livenet || arg === testnet) {
    return arg;
  }
  if (key) {
    var networks = [livenet, testnet];
    for (var index in networks) {
      if (networks[index][key] === arg) {
        return networks[index];
      }
    }
    return undefined;
  }
  return networkMaps[arg];
}

/**
 * @namespace Network
 */
module.exports = {
  defaultNetwork: livenet,
  livenet: livenet,
  mainnet: livenet,
  testnet: testnet,
  get: getNetwork
};
