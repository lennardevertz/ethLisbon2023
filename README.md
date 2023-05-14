# Donation Station
## ETHGlobal Lisbon 2023
ETHGlobal Lisbon 2023 Hackathon project

This Repository consist of three major parts:

1) extension
   - contains a chrome browser extension that manipulates the UI of twitter
2) website
   - a blank website that is hosted through github pages and handles wallet connections
3) contracts
   - the tipping contract that is deployed as a temporary gitcoin round implementation
    

## Directory Structure

```
.
├── .github                     
├── contracts               # contract that is deployed on multiple chains
│   ├── contracts                  
│       ├── interfaces                  
│       ├── libs                  
│       ├── donate.sol               
│   ├── deploy         
│       ├── deploy.ts   
│   ├── hardhat.config.js       
│   ├── package.json       
├── extension               # extension material      
│   ├── buildResults                
│       ├── chromium        # load this folder to run extension locally       
│   ├── src                 
│       ├── chromium        # Holds chrome specific files (content scripts, manifest, service worker)        
│       ├── common          # In preparation of adding firefox support, this holds general files needed by the extension
│   ├── package.json      
│   ├── webpack.config.js      
├── website                 # simple website setup to host transaction handling
│   ├── dist     
│       ├── bundle.js     
│   ├── index.html     
│   ├── index.js     
│   ├── package.json     
│   ├── utils.js     
│   ├── webpack.config.js     
├── .gitignore             
└── README.md
```

To use the extension locally, load the `chromium` folder into your local extensions here: `brave://extensions/`
You can also build it with
```commandline
yarn
yarn build
```

The website is hosted on `https://lennardevertz.github.io/ethLisbon2023/website/`. Note that it is just a blank html that runs a script.
You can also build it with
```commandline
yarn
yarn build
```

The contract is a tipping / donations contract. It can handle Native token and ERC20 transfers.

These are contracts that are created/deployed.

| Contract                                                                                                  | Address                                    |
|-----------------------------------------------------------------------------------------------------------|--------------------------------------------|
| [Linea](https://explorer.goerli.linea.build/address/0x31A9021E79620fd95d4835b062f12c91b789A31b)           | 0x31A9021E79620fd95d4835b062f12c91b789A31b |
| [Polygon zkEVM](https://testnet-zkevm.polygonscan.com/address/0x31a9021e79620fd95d4835b062f12c91b789a31b) | 0x31A9021E79620fd95d4835b062f12c91b789A31b |
| [Optimism](https://optimistic.etherscan.io/address/0x7304b437221cc0477f805bdfb1c571e762ce528a)            | 0x7304b437221Cc0477F805Bdfb1C571e762cE528a |
| [Optimism Testnet](https://goerli-optimism.etherscan.io/address/0x31a9021e79620fd95d4835b062f12c91b789a31b)    | 0x31A9021E79620fd95d4835b062f12c91b789A31b |
| [Scroll](https://blockscout.scroll.io/address/0x31A9021E79620fd95d4835b062f12c91b789A31b)                 | 0x31A9021E79620fd95d4835b062f12c91b789A31b |
| [Mantle](https://explorer.testnet.mantle.xyz/address/0x31A9021E79620fd95d4835b062f12c91b789A31b)          | 0x31A9021E79620fd95d4835b062f12c91b789A31b |



# Tech Stack used
For contract development and deployment
- Hardhat
- Truffle Dashboard
- The Optimism contract natively integrates the [Attestation Station](https://github.com/ethereum-optimism/optimism/blob/willc/alpha-final/packages/atst/docs/sdk.md), which attest donations on-chain and fully automated
- inspiration from [IDriss open source tipping contract](https://github.com/idriss-crypto/contracts/blob/main/src/contracts/Tipping.sol)

For Website (including in the script)
- Github Pages
- webpack compiler

For Extension
- IDriss (Twitter ID lookup)
- webpack compiler

Other
- I am using [Chainlink price feeds](https://github.com/lennardevertz/ethLisbon2023/blob/main/website/index.js) to get the current price of ETH.
- Contracts deployed on Optimism Mainnet + Testnet, Polygon zkEVM testnet, Linea, Mantle and Scroll (see links in above table)
- Optimism contracts implement AttestationStation v1 contract and attests a that the donor is a public goods supporter
