//https://eth-goerli.g.alchemy.com/v2/N3xPNs-lm-R8sxR119lGq8Dbc5GORXM5
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.7',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/N3xPNs-lm-R8sxR119lGq8Dbc5GORXM5',
      accounts: ['4319b3b45b75377328da5c414a7b17e3d97f8d34635d3b287a7f3e184da080b2'],
    },
  },
};