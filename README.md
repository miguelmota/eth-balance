# eth-balance

> Simple way to check ether balance of an account address.

[![License](http://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/miguelmota/eth-balance/master/LICENSE)
[![NPM version](https://badge.fury.io/js/eth-balance.svg)](http://badge.fury.io/js/eth-balance)

## Install

```bash
npm install eth-balance
```

## Getting started

Check ether balance on mainnet:

```javascript
const getBalance = require('eth-balance')

const balance = await getBalance('0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1')

console.log(balance) // 0.1
```

Check ether balance on different network:

```javascript
const getBalance = require('eth-balance')

const balance = await getBalance('0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1', 'rinkeby')

console.log(balance) // 0.297098768
```

Check balance in wei output:

```javascript
const getBalance = require('eth-balance')

const balance = await getBalance({
  address: '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1',
  network: 'rinkeby',
  convert: 'wei'
})

console.log(balance) // 297098768000000000
```

[example](https://github.com/miguelmota/eth-balance/blob/master/example/example.js)

## CLI

Install:

```bash
npm install -g eth-balance
```

Check ether balance on mainnet:

```bash
$ eth_balance 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1

0.1
```

Check ether balance on different network:

```bash
$ eth_balance 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1 --network rinkeby

0.297098768
```

Check balance in wei output:

```bash
$ eth_balance 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1 --network rinkeby --convert wei

297098768000000000
```

Piping address example:

```bash
$ echo 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1 | eth_balance -n rinkeby -c wei

297098768000000000
```

Show help:

```bash
$ eth_balance --help

  Simple way to check ether balance.

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
```

## Test

```bash
npm test
```

## License

[MIT](LICENSE)
