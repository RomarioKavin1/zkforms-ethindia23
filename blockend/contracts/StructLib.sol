  // SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
    
    struct SismoProof{
        bytes16[] groupId;
        bytes response;
    }

    struct AnonAadharProof{
        uint[2]  a; 
        uint[2][2]  b; 
        uint[2]  c; 
        uint[34]  input;
    }


    struct Response{
        uint256 identifier; // Anon Aadhar identifier
        string encryptedResponse;
        uint256 createdTimestamp;
    }

