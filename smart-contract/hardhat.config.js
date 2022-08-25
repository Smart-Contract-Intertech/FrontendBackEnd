//https://eth-goerli.g.alchemy.com/v2/N3xPNs-lm-R8sxR119lGq8Dbc5GORXM5
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.7',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Ew1cB8192RfiWA1Y_BgUyCY5Xk0lRmX3',
      accounts: ['76fc9f28c02159e744e19e5f062c9bb34329dbb315625c03ee91c2b13950f6d0'],
    },
    rinkeby: {
      url: 'https://eth-rinkeby.g.alchemy.com/v2/r8cL9uYkeeiPKO8ADN0CTRB8152uF_0F',
      accounts: ['76fc9f28c02159e744e19e5f062c9bb34329dbb315625c03ee91c2b13950f6d0'],
    },
  },
};