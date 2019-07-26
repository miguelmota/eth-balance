//const getBalance = require('eth-balance')
const getBalance = require('../')

;(async () => {
  const balance = await getBalance('0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1')

  console.log(balance) // 0.1
})()

;(async () => {
  const balance = await getBalance('0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1', 'rinkeby')

  console.log(balance) // 0.297098768
})()

;(async () => {
  const balance = await getBalance({
    address: '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1',
    network: 'rinkeby',
    convert: 'wei'
  })

  console.log(balance) // 297098768000000000
})()
