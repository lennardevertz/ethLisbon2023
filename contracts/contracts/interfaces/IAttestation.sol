// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

interface IAttest {
    function attest(
        address _about,
        bytes32 _key,
        bytes calldata _val
    ) external;
}
