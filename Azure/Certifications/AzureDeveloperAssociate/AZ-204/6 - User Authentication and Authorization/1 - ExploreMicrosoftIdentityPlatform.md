- The Microsoft Identity Platform helps build applications users can sign into using their Microsoft identities or social accounts
- Several components make up the platform:
    - OAuth 2.0 and OpenID Connect standard-compliant authentication service
    - Open-source libraries (Microsoft Authentication Libraries - MSAL)
    - Application management portal (in the Azure portal)
    - Application configuration API
- when registering an application with Azure Active Directory (AD), you choose whether it is <b>single-tenant</b> (i.e. only accessible in your AD tenant) or <b>multi-tenant</b> (i.e. accessibly in other tenants)
- once an application is registered, an "application object" and a "service principal object" are created in the AD tenant
    - an <b>application object</b> is a globally unique instance of the app that exists within the AD tenant. It serves as a template to create one or more "service principal objects" (see below). An application object describes how a service can issue access tokens, resources the application may need to acces, and the actions the application can take.
    - a <b>service principal</b> defines the access policy and permissions for an entity (user/application) within an AD tenant. There are three types:
        1. <b>Application</b> - the default principal created when an app is registered in an AD (see above)
        2. <b>Managed identity</b> - "provide an identity for applications to use when connecting to resources that support Azure Active Directory authentication". These types of service principals can be granted access and permissions, but cannot be updated directly.
        3. <b>Legacy</b> - represents a legacy app created before app "registrations" were introduced as a concept
- an application object is the <i>global</i> representation of the application across all tenants, while service principals are the <i>local</i> representations for use in specific tenants
- The Identity Platform implements the OAuth 2.0 authorization protocol. Microsoft has several web-hosted resources through which apps can request permissions on behalf of a user (e.g. https://graph.microsoft.com/Calendars.Read can be used to request permissiont to read user's calendars in Microsoft Graph)
- The Identity Platform supports two types of permissions:
    1. **Delegated** permissions are used by apps that have a signed-in user present. The user or an administrator consents to the permissions that the app requests, and the app is then delegated with permission to act as that signed-in user when calling a resource
    2. **Application** permissions are used by apps that run without a signed-in user present (e.g. background services/daemons). On administrators can consent to these types of permissions.
- There are three types of "consent" that an application may need to gain in order to access necessary resources/APIs:
    1. **Static user consent** - all permissions required by the app must be specified in the Azure portal. The main drawback to this is that the app needs to request all permissions upon the user's first sign-in.
    2. **Incremental/dynamic user consent** - similar to above, except consent is only required when resources with a different scope are requested. Each resource needs to have this scope defined. 
    3. **Admin consent** - required when the app needs to access certain high-privelege permissions
-an app requests permissions by using the "scope" query parameter when signing a user in. At this point, the appropriate consent logic is applied - if static user consent is in place, the user is asked to consent
- **Conditional access** policies allow you to secure policies in several ways, including enforcing multifactor authentication, restricting IP ranges, etc.
