# ethLisbon2023
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