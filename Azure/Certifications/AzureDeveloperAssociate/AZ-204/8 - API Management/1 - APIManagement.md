- API Management allows for direct management of an API within the Azure portal. It presents a facade that sits in front of one or more of your "backend" APIs.
- API Management consists of:
    1. The **API Gateway** - the endpoint that accepst API calls and routes them to your backend API(s), verifies keys, JWT tokens, enforces usage quotes/rate limits, caches backend responses, and logs call metadata
    2. The **Azure portal** - administrative interface where the API is managed
    3. The **Developer portal** - serves as an interface for users of the API, allowing them to read documentation and experiment with it
- Some key API Management concepts:
    - **Products** - are how APIs are "surfaced" to developers and consist of one or more APIs. Products can be open or protected based on a subscription. 
    - **Groups** - are used to manage product visibility to developers. 
    - **Developers** - represent the user accounts in an API Management instance
    - **Policies** - collections of statements executed sequentially on each request/response of an API
- API Gateways can perform the following functions:
    - **Gateway routing** - the gateway acts as a reverse proxy to route requests to one or more backend services
    - **Gateway aggregation** - multiple individual requests can be aggregated into a single request
    - **Gateway offloading** - duplicated functionality can be offloaded on the gateway itself, rather than needing to have individual services implement that functionality (e.g. logging, compression, etc)
- Policies allow API behavior to be changed through configuration. Policies are applied in the following order:
    1. Inbound - statements applied to the request before it reaches the frontend API
    2. Backend - statements applied to the request before it is forwarded to the backend services
    3. Outbound - statements applied to the response before it is returned
    4. On-error - statements applied if there is an error condition
- Examples of policies include:
    - The `choose` (aka control flow) policy includes one ore more `when` conditions, and an optional `otherwise` condition
    - The `forward-request` policy forwards the incoming request to a specified backend service
    - The `limit-concurrency` prevents enclosed policies from being executed by more than a specified number of requests at a time (clients will receive a 429 Too Many Requests status code)
    - `mock-response`, `retry`, `log-to-eventhub` are other examples
- Access to APIs can be secred using **subscription keys**, unique auto-generated keys passed through the headers of a client request or as a query parameter.
    - subscriptions give you granular control over permissions and policies, and can be applied using one of 3 scopes: *all APIs*, *single API*, or *product*. 
- TLS certificates can be used to provide authentication between clients and the API gateway