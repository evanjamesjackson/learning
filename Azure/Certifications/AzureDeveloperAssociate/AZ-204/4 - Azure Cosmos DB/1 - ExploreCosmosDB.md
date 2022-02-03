- Azure Cosmos DB is a low-latency, elastically-scalable, high-availability database
- Azure Cosmos DB supports a "multi-master replication protocol", which globally distributes the data, making it very high availability
    - regions to which the DB is replicated can be added/removed at any time
- An Azure subscription can contain multiple Cosmos accounts (soft limit of 50), and these can contain multiple databases
- An Azure Cosmos container is fundamental unit of scalability in Cosmos DB
    - containers are automatically grouped into logical partitions, distributed across physical partitions
- throughput is configured in one the following modes:
    1. dedicated provisioned throughput mode - throughput is reserved for a single container
    2. shared provisioned throughput mode - throughput is shared among other container (excluding those in "dedicated" mode)
- Cosmos has several APIs that maps internal items to other entities (e.g. a Cosmos item maps to a document in MongoDB)
    - APIs exist for MongoDB, SQL, Cassandra, Table (for Azure Table storage), Gremlin
- Comsos offers 5 consistency models. In increasing levels of consistency (with the tradeoffs being lower availability, higher latency, and lower throughput):
    1. eventual
    2. consistent prefix
    3. session
        - recommended for most situations when using SQL and Table API
    4. bounded staleness
        - guarantees that clients always read the value of a previous write, with a lag defined by a "staleness window"
    5. strong
        - as above, but without the staleness window reduced to 0 
- request units (RUs) represent the system resources required to perform DB operations and are used to calculate costs
    - a "point read" (fetching a single item by ID) for a 1KB item costs 1 RU
    - three modes for provisioning RUs:
        1. provisioned throughput mode - provision RUs on a per-second basis in increments of 100 RUs per second
        2. serverless - no provisioning, you are simply billed at the end of the cycle for the amount of RUs you use
        3. autoscale - scale RUs based on DB usage