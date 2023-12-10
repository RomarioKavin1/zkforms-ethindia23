// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../StructLib.sol";
interface IZkForm{
    function intialize(string name,string description,) external;
    function depositRewards(uint256 numberOfPeople) external ;
}