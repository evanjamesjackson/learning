- A shared access signature (SAS) is a URI that grants restricted access rights to Azure Storage resources
- There are 3 types of SAS's:
    1. **User delegation SAS** - secured with AD credentials and with permssions specified for the SAS. Can be applied to Blob storage only.
    2. **Service SAS** - secured with the storage account key. Delegates access to the resource in the following resources: Blob storage, Queue storage, Table storage and Azure Files.
    3. **Account SAS** - basically a combination of 1 and 2
- an SAS token within a URI will look something like `sp=r&st=2020-01-20T11:42:32Z&se=2020-01-20T19:42:32Z&spr=https&sv=2019-02-02&sr=b&sig=SrW1HZ5Nb6MbRzTbXCaPm%2BJiSEn15tC91Y4umMPwVZs%3D`, where:
    - `sp=r` controls the access rights (e.g. r = read)
    - `st=2020-01-20T11:42:32Z` specifies the datetime when access is effective
    - `se=2020-01-20T19:42:32Z` specifies the datetime when access expires
    - `sv=2019-02-02` the version of the storage API to use
    - `sr=b` the kind of storage being accessed (e.g. b = blob)
    - `sig=SrW1HZ5Nb6MbRzTbXCaPm%2BJiSEn15tC91Y4umMPwVZs%3D` the cryptographic signature
- for best results with SAS, Microsoft recommends:
    - always use HTTPS
    - prefer use user delegation SAS, since that removes the need to store the storage account key in code
    - set the expiration time to the smallest useful value
    - apply the rule of "minimum-required priveleges"
- there are two typical use cases for using an SAS:
    1. Client uploads/downloads data via a front-end proxy service, which performs SAS authentication, and delegates requests to Azure Storage. Hard to scale this use-case.
    2. A lightweight "SAS provider service" authenticates the user and generates the SAS, reads/saves user auth information with Azure Storage; after that, the client directly interfaces with Azure storage using the SAS token. Scales better because all requests don't need to be routed through the proxy service.
- A **stored access policy** provides an additional level of control over SAS. This is the most secure and flexible way to utilize SAS's.
- 