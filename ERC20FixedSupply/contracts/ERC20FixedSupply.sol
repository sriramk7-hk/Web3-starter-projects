// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Emboss{

    constructor(){
        _mint(msg.sender, 1000000000000);
    }

    string public name = "Emboss";
    string public symbol = "EMO";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public _balanceOf;

    mapping(address => mapping (address => uint256)) allowed;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    

    function balanceOf(address owner) public view returns
    (uint256){
        return _balanceOf[owner];
    }

    function transfer(address _to, uint256 _value) public returns 
    (bool success){
        require(_balanceOf[msg.sender] >= _value && _value>0);
        _balanceOf[msg.sender] -= _value;
        _balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function TransferFrom(address _from, address _to, uint256 _value) public returns
    (bool success){
        require(_balanceOf[_from] >= _value && allowed[_from][msg.sender] >= _value && _value >0);
        _balanceOf[_to] += _value;
        _balanceOf[_from] -= _value;
        allowed[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns
    (bool success){
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender ) public view returns
    (uint256){
        return allowed[_owner][_spender];
    }

    function _mint(address account, uint256 amount) internal {
        require( account != address(0));
        totalSupply += amount;
        _balanceOf[account] += amount;
        emit Transfer(address(0), account, amount);
    }

    function _burn(address account, uint256 amount) internal {
        require(account != address(0));
        require(amount <= _balanceOf[account]);

        totalSupply = totalSupply - amount;
        _balanceOf[account] = _balanceOf[account] - amount;
        emit Transfer(account, address(0), amount);
  }

}