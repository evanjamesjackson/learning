- Blobs are best suited for storing large amounts of unstructured data, such as text or binary data, images, video/audio, log files, backups, etc.
- Blob storage is accessible via HTTPS (via REST, Azure PowerShell, Azure CLI, etc)
- An Azure Storage account is the container for Blob storage
- Storage accounts come in two performance levels:
  - standard general purpose v2 - recommended for most scenarios
  - premium - offers higher performance using SSDs. Offers 3 sub account types: block blobs, page blobs and file shares.
- Azure Storage offers three access tiers for block blob data
  - hot - optimized for frequent access. Lower costs for access, higher costs for storage.
  - cool - optimized for less frequent access. Higher costs for access, lower costs for storage
  - archive - optimized for data that can tolerate several hours of retrieval latency. Most cost effective for storage, but accessing is more expensive than cool/hot tiers.
- Blob storage offers three types of resources:
  - storage account - provides a unique namespace in Azure for your data. An example endpoint would be http://mystorageaccount.blob.core.windows.net, where mystorageaccount is the namespace of your account
  - containers - organize sets of blobs a la a file directory. Storage accounts can contain an unlimited number of containers, and containers can contain an unlimited number of blobs.
  - blobs - 3 types: - block blobs - store text/binary data - append blobs - optimized for append operations, such as logging data from VMs - page blobs - store random access files; serve as disks for Azure VMs
    -all data written to Azure Storage is encrypted using Storage Service Encryption (SSE)
- Azure AD and RBAC are supported for resource management and data operations. They can be assigned at the subscription, resource group, storage account, and individual container level.
- data in-transit can be secured with HTTPS, client-side encryption, or SMB 3.0
- data at-rest is encrypted by default - and that encryption cannot be disabled. There is no cost associated with this encryption.
- encryption can be managed by you with either <b>customer-managed</b> (encrypts/decrypts all storage account data) or <b>customer-provided</b> (included in requests to blob data to control granular access to that data) keys
  - alternatively - Azure offers Microsoft-managed keys
- Azure Storage offers the following redundancy options:
  - <b>Locally redundant storage (LRS)</b> - copies data synchronously within a single physical location in the primary region 3 times. Least expensive but not recommended for high availability requirements.
  - <b>Zone-redundant storage (ZRS)</b> - copies data synchronously across three availability zones within the primary region
  - <b>Geo-redundant storage (GRS)</b> - copies 3 times in the primary region using LRS, and 3 times in the secondary region using LRS
  - <b>Geo-zone-redundant storage (GZRS)</b> - copies 3 times in the primary region using ZRS, and 3 times in the secondary region using ZRS. Best for high availability requirements.