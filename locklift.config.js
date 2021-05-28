module.exports = {
  compiler: {
    path: '/usr/bin/solc-ton-broxus',
  },
  linker: {
    path: '/usr/bin/tvm_linker',
  },
  networks: {
    dev: {
      ton_client: {
        network: {
          server_address: 'https://net.ton.dev'
        }
      },
      giver: {
        address: '0:a7524445798ee740fdc4adb3b30e06c1e30d31d5181c23636cbb75213236c8ec',
        abi: { "ABI version": 2, "header": ["pubkey", "time", "expire"], "functions": [ { "name": "constructor", "inputs": [ ], "outputs": [ ] }, { "name": "sendGrams", "inputs": [ {"name":"dest","type":"address"}, {"name":"amount","type":"uint64"} ], "outputs": [ ] }, { "name": "owner", "inputs": [ ], "outputs": [ {"name":"owner","type":"uint256"} ] } ], "data": [ {"key":1,"name":"owner","type":"uint256"} ], "events": [ ] },
        key: process.env.GIVER_KEY,
      },
      keys: {
        phrase: '',
        amount: 20,
      }
    },
  },
};
