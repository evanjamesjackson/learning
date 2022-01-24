- Functions are a great solution for tasks like image/order processing, file maintenance, or any tasks that needs to run on a schedule
- "triggers" are ways to start execution of Functions code
- "bindings" are ways to simplify coding for input/output data
- contrast Functions with "Azure Logic Apps":
  - Functions are serverless compute services, while Logic Apps provide serverless workflows
  - Functions are "imperative" (code-first), while Logic Apps are "declarative" (designer-first)
  - each activity is considered its own Azure Function; while Logic Apps present a large collection of ready-made actions
- contrast Functions with App Service WebJobs:
  - Functions is serverless, has pay-per-use pricing, integration with Logic Apps and its possible to develop and test in the browser; WebJobs do not have any of these capabilities
- hosting options:
  1. Consumption plan (default) - pay only for compute resources when running
  2. Premium plan - automatically scales based on demand using pre-warmed workers (no delay)
  3. App service plan - run within an ASP. "Always on" should be enabled in the ASP if used with a Function.
- Functions require a general Azure Storage account to be attached to manage triggers and for logging executions
  - in Consumption/Premium plans, the code itself is stored in the storage account - if deleted, the code is deleted
- the "unit of scale" for Azure Functions is the app itself. When scaled out, resources are allocated to run multiple instances of the host
  - max 200 instances (unless limited by you)
  - new instances are allocated, at most, once every 30 seconds. Scaling occurs faster in the Premium plan.
  - if predictive scaling is required, it's recommended to run the Functions app in an App Service Plan and use its autoscale capabilities
