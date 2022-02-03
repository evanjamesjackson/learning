- items in a Cosmos container are divided into distinct subsets called <b>logic partitions</b>, each denoted by a partition key
- combining a partition key and an item's ID creates the item's index, which uniquely identifies the item within the database
- logic partitions are mapped to physical partitions. The number of physical partitions required by a container is determined by the required throughput (physical partitions have a limit of 10,000 RU per second) and size (each partition can only store up to 50GB)
- partition keys are made up of the key path and the key value (e.g. an item { "userId": "Andrew", "worksFor": "Microsoft" } has a partition key path "userId", and partition key value "Andrew")
- best practices for choosing a partition key:   
    1. use a property that has a value which will not change
    2. use a property with high cardinality, i.e. a wide range of possible values
    3. use a key that will spread RU consumption evenly across logical partitions 
- for read-heavy containers, choosing a partition key that appears frequenly as a filter in your queries might be best
- an item's ID is usually a good choice for a partition key
- synthetic partition keys combine several other property values to create a unique identifiable value