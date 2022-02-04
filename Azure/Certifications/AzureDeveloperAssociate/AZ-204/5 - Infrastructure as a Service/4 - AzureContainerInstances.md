- Azure Container Instances (ACI) are well-suited for simple applications, task automation, and build jobs
- the top-level resource in ACI is a "container group" - a collection of containers that are scheduled on the same host machine
- Multi-container groups can be deployed via a Resource Manager template or simple YAML file (when the configuration only contains container instance specs, YAML is preferred since it's simpler)
- Containers within a group run on a shared DNS name, with each container exposed via a port
- ACI containers are billed by the second, so its important to specify when to stop/start them. This is done by specifying one of three restart policies:
    1. Always - containers are always restarted
    2. Never - containers run at most once and are never restarted
    3. OnFailure - lcontainers are restarted only when the process within the container fails
- ACIs are stateless by default. To persist state, an external volume must be mounted (e.g. using a file share in Azure Files)