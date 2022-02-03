- Azure Storage offers life-cycle management of Blob storage accounts that can:
  - transition blobs to cooler access tiers
  - delete blobs at the end of their lifecycles
  - define rules that run automatically at the storage account/container/blob level
- a lifecycle management policy is a JSON file containing rule definitions
  -each rule has "filters" which define which resources to manage; and "actions" which define the actions to take, and under what circumstances (e.g. change tier to cool if a Blob account isn't modified for 30 days)
- blobs in the archive tier must be "rehydrated" before they can be read/modified. Two options:
  1. Copy the blob to a blob in an online (hot or cool) tier (recommended)
  2. Change the blob's access tier directly. Not recommended since this can be very slow.
