// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 public number = 5;
    uint256 public a;

    function display() public view returns(uint256) {
        return number + 5;
    }

    function store(uint256 num) public returns(uint256){
        a = num;
        return a;
    } 
   
}