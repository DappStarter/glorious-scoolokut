require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind hockey hunt kiwi bridge stomach'; 
let testAccounts = [
"0x1dfd45b466750b518f4431b5cd5c2fd595d48c6f08ba3c1dc78ec7301a83a54f",
"0xf303bf40f605f579d6b18aed063c444a092f64500cc9675ce4c31d5c80fa1cfd",
"0x15cf62dc747586aafecdc32a7aa977b086c2ead9f2d1c632306ee53482446033",
"0xc4c63910677742bfd1d21322a75a46eb027af9b8bb935513793fa7e56654524d",
"0x8016e9b0e4a5db1ca3e3168ccd8613d9d927a8b5003ceb086f2d440f06f5ff43",
"0x6c70ba8b4f9ba301512928b9a607a1a6680802cb131203de6c83a75bc89f1c2f",
"0xa33c246da5c49e3a12fb2dfa604e2e10ea1928cd0c290378f67ec9bfd27e9083",
"0x770024b9013263c20e88e626adfe7f6b468705d92333ff64e9409e834a799fa0",
"0xd3309a72bf29262c4810237c3a9b399169b8ddf6fbe7d4eb14465a0385fadcb6",
"0xbcd773c3e7ae9ca50fca5fd1cde636f903f58d2629ccc36ebef8c84676bf302b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
