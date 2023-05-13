// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

import { IDonations } from "./interfaces/IDonations.sol";
import { MultiAssetSender } from "./libs/MultiAssetSender.sol";



/**
 * @title Donation
 * @author Lennard (lennardevertz)
 */
contract Donation is Ownable, IDonations, MultiAssetSender, IERC165 {
    address public contractOwner;

    event TipMessage(
        address indexed recipientAddress,
        string message,
        address indexed sender,
        address indexed tokenAddress
    );

    constructor() {
    }

    /**
     * @notice Send donation with native currency
     */
    function sendTo(
        address _recipient,
        uint256, // amount is used only for multicall
        string memory _message
    ) external payable override {
        _sendCoin(_recipient, msg.value);

        emit TipMessage(_recipient, _message, msg.sender, address(0));
    }

    /**
     * @notice Send a donation in ERC20 token
     */
    function sendTokenTo(
        address _recipient,
        uint256 _amount,
        address _tokenContractAddr,
        string memory _message
    ) external payable override {
    
        _sendTokenAssetFrom(_amount, msg.sender, _recipient, _tokenContractAddr);

        emit TipMessage(_recipient, _message, msg.sender, _tokenContractAddr);
    }

    /*
    * @notice Always reverts. By default Ownable supports renouncing ownership, that is setting owner to address 0.
    *         However in this case it would disallow receiving payment fees by anyone.
    */
    function renounceOwnership() public override view onlyOwner {
        revert("Operation not supported");
    }

    /**
     * @notice ERC165 interface function implementation, listing all supported interfaces
     */
    function supportsInterface (bytes4 interfaceId) public pure override returns (bool) {
        return interfaceId == type(IERC165).interfaceId
         || interfaceId == type(IDonations).interfaceId;
    }
}