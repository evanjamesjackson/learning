- The Microsoft Authentication Library (MSAL) can be used to provide secure access to Microsoft Graph, other Microsoft APIs, third-party web APIs or your own web API
- MSAL supports many different authentication flows, including "authorization code", "client credentials", "on-behalf-of", etc.
- MSAL supports to categories of applications:
    1. <b>Public client applications</b> that run directly on devices, or in a web browser. They are not trusted to keep application/client secrets. In the MSAL .NET library, this is instantiated using the `PublicClientApplicationBuilder` class. 
    2. **Confidential client applications** that run on servers (web apps, APIs, daemons). They are considered safe to hold application scecrets. In the MSAL .NET library, this is instantiated using the `ConfidentialClientApplicationBuilder` class. 
- MSAL.js is the one MSAL library that supports "single-page" webapps