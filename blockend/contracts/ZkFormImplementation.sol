// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./interface/IAnonAadhaarVerifier.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/interfaces/IERC1271.sol";
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import "@sismo-core/sismo-connect-solidity/contracts/SismoConnectLib.sol";
import "./StructLib.sol";

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@zetachain/protocol-contracts/contracts/evm/tools/ZetaInteractor.sol";
import "@zetachain/protocol-contracts/contracts/evm/interfaces/ZetaInterfaces.sol";
import "@zetachain/protocol-contracts/contracts/evm/Zeta.eth.sol";

contract ZkFormImplementation is ZetaInteractor, SismoConnect{

  using SismoConnectHelper for SismoConnectVerifiedResult;
   error ErrorTransferringZeta();

    IERC20 internal immutable _zetaToken;

    string name;
    string metadata;
    string encryptedFormData;

    bool public constant isImpersonationMode=true;
    bytes16[] public sismoProofRequests;
    mapping(address => bool) public isResponded;
    mapping(uint256=>Response) public responses;
    uint256 public responseCount;
    bytes16 public sismoAppId = 0xa393d5029d94e6f05aeebcfa940405c3;
    address public zetachainVault;
    address public creator;
    address public TSS_ADDRESSS=0x8531a5aB847ff5B22D855633C25ED1DA3255247e;

    address public anonAadharVerifierAddress=address(0);
    uint256 public anonAadharAppId;
    uint256 public rewardPerPerson;

    uint256 public SNARK_SCALAR_FIELD = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    // Production public key
    // uint[32] public ISSUER_MODULUS = [7873437550307926165, 13477973865601442634, 1458039844062964693, 7398834103216365279, 12384545621709803393, 14386943674931866539, 2263535879398593693, 3600615314669141235, 13096864295899435543, 8628516684870087465, 343547845356630073, 10551339838260165529, 10902964543149146524, 4056605863534888131, 17764439819646281378, 5137209503034180614, 2378644744463171581, 6676194234629029970, 5432490752817224179, 12846544745292400088 , 3434369281354788863, 1533621309896666264, 18225262974130476508, 10073981006187788275, 8114837903070988230, 7632965149656839367, 2714276348828835947, 615665516684210923, 1084184375765016924, 17345989530239433420, 8106155243977228977, 11705466821727348154];
    // Test PDF public key
    uint[32] public ISSUER_MODULUS = [ 14802194023203656093, 2804169383069916853, 496991132330559339, 2044134272263249048, 9625896386217978454, 10967403457044780298, 9775317524806066771, 5561505371079494480, 10560300512109825190, 16129190325487635890, 18001156251078908687, 461092412729958323, 6331149421243581141, 11783897075401707273, 15565812337639205350, 523229610772846347, 17536660578867199836, 7115144006388206192, 9426479877521167481, 916998618954199186, 16523613292178382716, 1357861234386200203, 2235444405695526401, 12616767850953148350, 2427846810430325147, 4335594182981949182, 841809897173675580, 8675485891104175248, 7117022419685452177, 14807249288786766117, 12897977216031951370, 15399447716523847189];


    constructor(
        address connectorAddress,   
        address zetaTokenAddress
    ) ZetaInteractor(connectorAddress) SismoConnect(buildConfig(sismoAppId, isImpersonationMode)){
        _zetaToken = IERC20(zetaTokenAddress);
        isImpersonationMode=true;
    }

     event ZkProofVerified(bytes16 newGroupId);

    modifier onlyOnwer() {
        require(msg.sender == creator, "ZkFormImplementation: caller is not the owner");
        _;
    }


    function intialize(string memory _name,string memory _metadata,string memory _encryptedFormData,bytes16[] memory _proofRequests,uint256 _amount) external{
        require(params.appId< SNARK_SCALAR_FIELD, "AnonAadhaarVerifier: group id must be < SNARK_SCALAR_FIELD");
        name=_name;
        metadata=_metadata;
        encryptedFormData=_encryptedFormData;
        sismoProofRequests=_proofRequests;
        rewardPerPerson=_amount;
        creator=msg.sender;
    }

    receive() external payable {


    }


    function verifyModulus(uint[] memory _inputModulus) private view returns (bool) {
        bool isValid = true;
        for (uint i = 0; i < 32; i++) {
            if (_inputModulus[i] != ISSUER_MODULUS[i]) isValid = false;
        }
        return isValid;
    }

    function slice(uint256[34] memory data, uint256 start) private pure returns (uint256[] memory) {
        uint256[] memory sliced = new uint256[](32);
        
        for (uint256 i = 0; i < 32; i++) {
            sliced[i] = data[start + i];
        }
        
        return sliced;
    }

    function verifyAnonAadharProof(AnonAadharProof calldata proof) external view returns(bool)
    {
        return _verifyAnonAadharProof(proof);
    }

    function _verifyAnonAadharProof(
        AnonAadharProof calldata proof
    ) internal view returns (bool) {
        require(proof.input[proof.input.length - 1] == anonAadharAppId, "AnonAadhaarVerifier: wrong app ID");
        uint256[] memory inputModulus = slice(proof.input, 1);
        require(verifyModulus(inputModulus) == true, "AnonAadhaarVerifier: wrong issuer public key");
        return IAnonAadhaarVerifier(verifierAddr).verifyProof(proof.a, proof.b, proof.c, proof.input);
    }


    function setImperonationMode(bool _isImpersonationMode) public {
        isImpersonationMode = _isImpersonationMode;
    }


    function verifySismoProof(SismoProof[] memory proofs) external {
        for(uint i=0;i<proofs.length;i++) _verifySismoProof(proofs[i]);
    }

    function _verifySismoProof(SismoProof memory proof) internal {
        verify({responseBytes: proof.response});
        emit ZkProofVerified(proof.groupId);
    }


    function submitResponse(AnonAadharProof calldata authProof,SismoProof memory proof,Response memory response,uint256 destinationChainId) external {
        bool result=_verifyAnonAadharProof(authProof);
        require(isResponded[msg.sender],"already filled form");
        require(sismoProofs.length==sismoProofRequests.length,"sismo proofs count mismatch");

        _verifySismoProof(proof);
        response.identifier=123;
        responses[responseCount++]=response;

        // Crosschain call
         if (!_isValidChainId(destinationChainId))
            revert InvalidDestinationChainId();
        bool success1 = _zetaToken.approve(address(connector), zetaValueAndGas);

        if (!success1) revert ErrorTransferringZeta();

        connector.send(
            ZetaInterfaces.SendInput({
                destinationChainId: destinationChainId,
                destinationAddress: msg.sender,
                destinationGasLimit: 300000,
                message: abi.encode(),
                zetaValueAndGas: zetaValueAndGas,
                zetaParams: abi.encode("")
            })
        );
    }   


    function depositRewards(uint numberOfPeople) onlyOwner external {
        require(IERC20(_zetaToken).allowance(msg.sender,address(this),amount), "ZkFormImplementation: transfer failed");
        uint256 balance = _zetaToken.balanceOf(address(this));
        _zetaToken.transferFrom(msg.sender,address(this), amount);
    }


    function getReponsesCount() public view returns(uint256){
        return responseCount;
    }

}