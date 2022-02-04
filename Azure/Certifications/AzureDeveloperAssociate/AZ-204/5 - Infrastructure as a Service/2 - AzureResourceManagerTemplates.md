- The Azure Resource Manager receieves all requests that come from Azure tools, APIs, and SDKs, and routes them to the appropriate service (e.g. a VM, Web App, etc.)
- Azure Resource Manager templates are an Infrastructure as Code service that offer the following advantages:
    - declarative syntax
    - repeatable results
    - orchestration (i.e. Resource Manager will automatically handle the ordering of how things are deployed/configured)
- Resource Manager converts JSON templates into REST API operations
- multi-tiered applications (e.g. a VM, an App Service, and a DB) can be deployed via a single template, or via nested templates
- conditional deployment allows you to conditionally create resources (e.g. if a storage account does not exist, create it first; otherwise use the existing account)
- Resource Manager deployments are done in one of two modes:
    1. **Complete mode** - resources that exist in the resource group that are not specified in the template are deleted
    2. **Incremental mode (default)** - resources that aren't specified in the template are left unchanged
- 