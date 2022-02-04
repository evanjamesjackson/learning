- Azure Container Registry (ACR) provides the ability to manually/automatically build and store containers
- Images stored in ACR can be pulled and deployed to various targets (Kubernetes, Docker Swarm, Azure Kubernetes Service, App Service, etc.)
- ACR tiers include:
    1. Basic - lowest storage/image throughput designed for entry-point devs
    2. Standard - should satisfy most production scenarios
    3. Premium - highest storage/image throughput, and supports geo-replication
- ACR storage features:
    - Encryption-at-rest
    - Regional storage
    - Zone redundancy
    - Scalable storage
- ACR Tasks can automate builds triggered by:
    1. Source code updates
    2. Updates to a base image
    3. On scheduled timers
- The basic steps included in most Dockerfiles are:
    1. Specify the parent image
    2. Update the base OS/install additional software
    3. Build artifacts to include, such as a developed application
    4. Expose services such as storage/network configurations
    5. Run a command when the container is launched