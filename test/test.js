const test = require('tape-await')
const getBalance = require('../')

test('balance', async t => {
  const balance = await getBalance({
    address: '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1',
    network: 'rinkeby'
  })

  console.log(balance)
  t.ok(balance)

  const balance2 = await getBalance('0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1', 'rinkeby')

  console.log(balance2)
  t.ok(balance2)

  const balance3 = await getBalance('0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1')

  console.log(balance3)
  t.equal(balance3, '0')

  const balance4 = await getBalance({
    address: '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1',
    network: 'rinkeby',
    convert: 'wei'
  })

  console.log(balance4)
  t.ok(balance4)
})
