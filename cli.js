const meow = require('meow')
const getBalance = require('.')

const cli = meow(`
    Usage
    $ eth_balance [address] --network <network>

    Options
      --address, -a Address to check balance
      --network, -n Network name or network provider URI (default "mainnet")
      --convert, -c Unit to convert to (default "ether")

    Examples
    $ eth_balance 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1 --network rinkeby

    0.297098768

    $ eth_balance 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1 --network rinkeby --convert wei

    297098768000000000
`, {
  flags: {
    address: {
      type: 'string',
      alias: 'a'
    },
    convert: {
      type: 'string',
      alias: 'c'
    },
    network: {
      type: 'string',
      alias: 'n'
    },
  }
})

let address = cli.flags.a || cli.flags.address || cli.input[0]
const network = cli.flags.n || cli.flags.network
const convert = cli.flags.c || cli.flags.convert

if (process.stdin) {
  process.stdin.setEncoding('utf8')
  process.stdin.resume()
  let content = ''
  process.stdin.on('data', (buf) => {
    content += buf.toString()
  })
  setTimeout(() => {
    content = content.trim()
    address = (content || address)

    run(address, network, convert)
  }, 10)
} else {
  run(address, network, convert)
}

async function run(address, network, convert) {
  if (address === undefined) {
    console.log('address argument is required')
    process.exit(1)
  }

  try {
    const balance = await getBalance({
      address,
      network,
      convert,
    })

    console.log(balance)

    process.exit(0)
  } catch(err) {
    console.error(err.message)
    process.exit(1)
  }
}
