const Web3 = require('web3');
import {tokens} from './utils.js';

let params = new URL(document.location).searchParams;
let recipient = params.get("recipient");
let amount = params.get("amount");
let network = params.get("network");
let token = network == "polygon"? "MATIC" : "ETH";
let other = params.get("other")
let message = params.get("message") || "";
let provider;
let connectedAccount;
let web3;
console.log(network, token, amount)

const defaultWeb3 = new Web3(new Web3.providers.HttpProvider("https://polygon-rpc.com/"));
let oracleAddress = {
    ETH: "0xf9680d99d6c9589e2a93a78a04a279e509205945",
    WETH: "0xf9680d99d6c9589e2a93a78a04a279e509205945",
    MATIC: "0xab594600376ec9fd91f8e885dadf0ce036862de0"
};


async function init() {
    provider = window.ethereum
    web3 = new Web3(provider);
    connectedAccount = await web3.eth.getAccounts();
    console.log(connectedAccount)
}

async function sendDonation() {
    let {
        integer: amountInteger,
        normal: amountNormal
    } = await calculateAmount(token, amount)
    console.log(amountInteger, amountNormal)
}

// load oracle price data
async function loadOracle(ticker) {
        let abiOracle = [
            {
                inputs: [
                    { internalType: "address", name: "_aggregator", type: "address" },
                    { internalType: "address", name: "_accessController", type: "address" },
                ],
                stateMutability: "nonpayable",
                type: "constructor",
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, internalType: "int256", name: "current", type: "int256" },
                    { indexed: true, internalType: "uint256", name: "roundId", type: "uint256" },
                    { indexed: false, internalType: "uint256", name: "updatedAt", type: "uint256" },
                ],
                name: "AnswerUpdated",
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, internalType: "uint256", name: "roundId", type: "uint256" },
                    { indexed: true, internalType: "address", name: "startedBy", type: "address" },
                    { indexed: false, internalType: "uint256", name: "startedAt", type: "uint256" },
                ],
                name: "NewRound",
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, internalType: "address", name: "from", type: "address" },
                    { indexed: true, internalType: "address", name: "to", type: "address" },
                ],
                name: "OwnershipTransferRequested",
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, internalType: "address", name: "from", type: "address" },
                    { indexed: true, internalType: "address", name: "to", type: "address" },
                ],
                name: "OwnershipTransferred",
                type: "event",
            },
            { inputs: [], name: "acceptOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
            { inputs: [], name: "accessController", outputs: [{ internalType: "contract AccessControllerInterface", name: "", type: "address" }], stateMutability: "view", type: "function" },
            { inputs: [], name: "aggregator", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
            { inputs: [{ internalType: "address", name: "_aggregator", type: "address" }], name: "confirmAggregator", outputs: [], stateMutability: "nonpayable", type: "function" },
            { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" },
            { inputs: [], name: "description", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
            { inputs: [{ internalType: "uint256", name: "_roundId", type: "uint256" }], name: "getAnswer", outputs: [{ internalType: "int256", name: "", type: "int256" }], stateMutability: "view", type: "function" },
            {
                inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
                name: "getRoundData",
                outputs: [
                    { internalType: "uint80", name: "roundId", type: "uint80" },
                    { internalType: "int256", name: "answer", type: "int256" },
                    { internalType: "uint256", name: "startedAt", type: "uint256" },
                    { internalType: "uint256", name: "updatedAt", type: "uint256" },
                    { internalType: "uint80", name: "answeredInRound", type: "uint80" },
                ],
                stateMutability: "view",
                type: "function",
            },
            { inputs: [{ internalType: "uint256", name: "_roundId", type: "uint256" }], name: "getTimestamp", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
            { inputs: [], name: "latestAnswer", outputs: [{ internalType: "int256", name: "", type: "int256" }], stateMutability: "view", type: "function" },
            { inputs: [], name: "latestRound", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
            {
                inputs: [],
                name: "latestRoundData",
                outputs: [
                    { internalType: "uint80", name: "roundId", type: "uint80" },
                    { internalType: "int256", name: "answer", type: "int256" },
                    { internalType: "uint256", name: "startedAt", type: "uint256" },
                    { internalType: "uint256", name: "updatedAt", type: "uint256" },
                    { internalType: "uint80", name: "answeredInRound", type: "uint80" },
                ],
                stateMutability: "view",
                type: "function",
            },
            { inputs: [], name: "latestTimestamp", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
            { inputs: [], name: "owner", outputs: [{ internalType: "address payable", name: "", type: "address" }], stateMutability: "view", type: "function" },
            { inputs: [{ internalType: "uint16", name: "", type: "uint16" }], name: "phaseAggregators", outputs: [{ internalType: "contract AggregatorV2V3Interface", name: "", type: "address" }], stateMutability: "view", type: "function" },
            { inputs: [], name: "phaseId", outputs: [{ internalType: "uint16", name: "", type: "uint16" }], stateMutability: "view", type: "function" },
            { inputs: [{ internalType: "address", name: "_aggregator", type: "address" }], name: "proposeAggregator", outputs: [], stateMutability: "nonpayable", type: "function" },
            { inputs: [], name: "proposedAggregator", outputs: [{ internalType: "contract AggregatorV2V3Interface", name: "", type: "address" }], stateMutability: "view", type: "function" },
            {
                inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
                name: "proposedGetRoundData",
                outputs: [
                    { internalType: "uint80", name: "roundId", type: "uint80" },
                    { internalType: "int256", name: "answer", type: "int256" },
                    { internalType: "uint256", name: "startedAt", type: "uint256" },
                    { internalType: "uint256", name: "updatedAt", type: "uint256" },
                    { internalType: "uint80", name: "answeredInRound", type: "uint80" },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [],
                name: "proposedLatestRoundData",
                outputs: [
                    { internalType: "uint80", name: "roundId", type: "uint80" },
                    { internalType: "int256", name: "answer", type: "int256" },
                    { internalType: "uint256", name: "startedAt", type: "uint256" },
                    { internalType: "uint256", name: "updatedAt", type: "uint256" },
                    { internalType: "uint80", name: "answeredInRound", type: "uint80" },
                ],
                stateMutability: "view",
                type: "function",
            },
            { inputs: [{ internalType: "address", name: "_accessController", type: "address" }], name: "setController", outputs: [], stateMutability: "nonpayable", type: "function" },
            { inputs: [{ internalType: "address", name: "_to", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
            { inputs: [], name: "version", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        ];
        return await new defaultWeb3.eth.Contract(abiOracle, oracleAddress[ticker]);
}

async function calculateAmount(ticker, sendToAnyoneValue) {
    let priceSt;
    if (!oracleAddress[ticker]) return

    let oracle = await this.loadOracle(ticker);
    priceSt = await this.getPrice(oracle);

    let decimals = tokens.filter((x) => x.symbol == ticker)[0]?.decimals;
    priceSt = Number.parseFloat(priceSt).toFixed(decimals)

    let BN = defaultWeb3.utils.BN;
    let ten = new BN(10);
    let base = ten.pow(new BN(decimals));
    let integer = this.getAmount(sendToAnyoneValue.toString(), priceSt, decimals);
    let normal = (integer/base).toString();
    return { integer, normal };
}