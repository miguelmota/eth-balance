const Web3 = require('web3')

async function balance (/* address, network */) {
  const args = [].slice.call(arguments)
  let config = {}
  if (typeof args[0] === 'object') {
    config = args[0]
  } else {
    if (typeof args[0] === 'string') {
      config.address = args[0]
    }

    if (typeof args[1] === 'string') {
      config.network = args[1]
    }

    if (typeof args[2] === 'string') {
      config.convert = args[2]
    }
  }

  const address = (config.address||'').trim()
  const network = (config.network || 'mainnet').trim().toLowerCase()
  const convert = (config.convert || 'ether').trim().toLowerCase()

  let providerUri = `https://${network}.infura.io/`
  if (/^(http|ws)/.test(network)) {
    providerUri = network
  } else if (network === 'local' || network === 'development') {
    providerUri = 'http://localhost:8545'
  }

  const provider = new Web3.providers.HttpProvider(providerUri)
  const web3 = new Web3(provider)

  const bal = await web3.eth.getBalance(address)

  return web3.utils.fromWei(bal, convert)
}

module.exports = balance
