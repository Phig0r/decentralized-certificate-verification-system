// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./CertificateNft.sol";

/**
 * @title DemoRoleFaucet
 * @dev This is a helper contract for demonstration purposes ONLY.
 * It allows any user to grant themselves roles on the main CertificateNft contract.
 * For this to work, this Faucet's address must be granted the DEFAULT_ADMIN_ROLE
 * on the main CertificateNft contract.
*/

contract DemoRoleFaucet {
    CertificateNft public certificateNftContract;

    /**
     * @dev Sets the address of the main CertificateNft contract.
     * @param _certificateNftAddress The deployed address of your main contract.
   */
    constructor(address _certificateNftAddress) {
        certificateNftContract = CertificateNft(_certificateNftAddress);
    }

    /**
     * @notice Allows any user to request the ISSUER_ROLE for themselves.
     * @dev Revokes the ADMIN_ROLE if the user already has it before granting ISSUER_ROLE.
   */
   function requestIssuerRole() external {
      bytes32 adminRole = certificateNftContract.ADMIN_ROLE();
      bytes32 issuerRole = certificateNftContract.ISSUER_ROLE();

      if (certificateNftContract.hasRole(adminRole, msg.sender)) {
         certificateNftContract.revokeRole(adminRole, msg.sender);
      }

      certificateNftContract.grantRole(issuerRole, msg.sender);
   }

    /**
     * @notice Allows any user to request the ADMIN_ROLE for themselves.
     * @dev Revokes the ISSUER_ROLE if the user already has it before granting ADMIN_ROLE.
   */
   function requestAdminRole() external {
      bytes32 adminRole = certificateNftContract.ADMIN_ROLE();
      bytes32 issuerRole = certificateNftContract.ISSUER_ROLE();

      if (certificateNftContract.hasRole(issuerRole, msg.sender)) {
         certificateNftContract.revokeRole(issuerRole, msg.sender);
      }

      certificateNftContract.grantRole(adminRole, msg.sender);
   }

    /**
     * @notice Allows a user to revoke any special roles to become a Recipient.
     * @dev Checks if the user has either the ADMIN or ISSUER role and revokes them.
   */
   function requestRecipientRole() external {
      bytes32 adminRole = certificateNftContract.ADMIN_ROLE();
      bytes32 issuerRole = certificateNftContract.ISSUER_ROLE();
      require(
        certificateNftContract.hasRole(adminRole, msg.sender) || certificateNftContract.hasRole(issuerRole, msg.sender),
        "Faucet: User is already a Recipient."
      );

      if (certificateNftContract.hasRole(adminRole, msg.sender)) {
         certificateNftContract.revokeRole(adminRole, msg.sender);
      }

      if (certificateNftContract.hasRole(issuerRole, msg.sender)) {
         certificateNftContract.revokeRole(issuerRole, msg.sender);
      }
   }
}