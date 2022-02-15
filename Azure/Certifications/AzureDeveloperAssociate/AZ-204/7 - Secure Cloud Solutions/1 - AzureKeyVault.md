- The **Azure Key Vault** is a cloud service for securely storing and accessing secrets
- The Azure Key Vault service supports two types of containers:
    1. **Vaults** - support storing software and hardware security module (HSM)-backed keys
    2. **Managed HSM Pools** - only support HSM-backed keys
- Key Vault has two pricing tiers: Standard, which encrypts with a software key, and Premium, which includes HSM-protected keys
- benefits of using Key Vault:
    - centralized application secrets
    - monitor key access/usage
    - simplifies administration of application secrets
- any operations with Key Vault need to first be authenticated using one of three methods:
    1. <b>Managed identities for Azure resources</b> - best practice since Azure automatically rotates the service principal client secret associated with the identity
    2. <b>Service principal and certificate</b> - not recommended
    3. <b>Service principal and secret</b> - not recommended
- Key Vault enforces TLS protocol in all communications
- some Key Vault best practices:
    - use separate key vaults per environment
    - control/limit direct access to the vault
    - create regular backups of the vault
    - turn on soft-delete and purge protection