- Azure App Configuration provides a way to store all of an application's settings, and to secure their access, in one place
- App Configuration stores configuration data as key-value pairs
    - They are also hierarchical and can be combined with the concept of a namespace (e.g. `AppName:Service1:ApiEndpoint`)
    - Key values can also have an optional label attribute, used to differentiate key values with the same key (e.g. `Key = AppName:DbEndpoint & Label = Test` and `Key = AppName:DbEndpoint & Label = Production`)
- App Configuration is a good way to implement feature management (feature flags, managers)
- App configuration data can be secured using one of three methods:
    1. **Customer-managed keys** - uses a managed identity along with Azure Key Vault
    2. **Private endpoints** - allows clients to access data over private links within a VNet
    3. **Managed identities**