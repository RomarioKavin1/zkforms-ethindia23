// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./StructLib.sol";
import "@openzeppelin/contracts/utils/Create2.sol";
import "./interface/IZkForm.sol";

contract ZkFormsRegistry{
    uint256 public salt;
    mapping(address=>bool) public forms;

    address public formImplementation;
    address public vaultFactory;

    constructor(address _formImplementaion,address _vaultFactory)
    {
        formImplementation=_formImplementaion;
        vaultFactory=_vaultFactory;
    }
 

    function createForm(string memory name,string memory metadata,string memory encryptedFormData,bytes16[] memory proofRequests,uint256 amount) external returns(address form){
        require(IERC20(_zetaToken).allowance(msg.sender, address(this), amount), "Approve ZETA first");
        form=_deployProxy(formImplementation, salt);
        IZkForm(form).intialize(name,metadata,encryptedFormData,proofRequests,msg.sender,amount);
        salt++;
        forms[form]=true;
        IERC20(_zetaToken).transferFrom(msg.sender,form, amount);
    }


     function _deployProxy(
        address implementation,
        uint _salt
    ) internal returns (address _contractAddress) {
        bytes memory code = _creationCode(implementation, _salt);
        _contractAddress = Create2.computeAddress(
            bytes32(_salt),
            keccak256(code)
        );
        if (_contractAddress.code.length != 0) return _contractAddress;

        _contractAddress = Create2.deploy(0, bytes32(_salt), code);
    }

    function _creationCode(
        address implementation_,
        uint256 _salt_
    ) internal pure returns (bytes memory) {
        return
            abi.encodePacked(
                hex"3d60ad80600a3d3981f3363d3d373d3d3d363d73",
                implementation_,
                hex"5af43d82803e903d91602b57fd5bf3",
                abi.encode(_salt_)
            );
    }


  function formExists(address form) public view returns(bool){
    return forms[form];

  }
}