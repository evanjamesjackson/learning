- Durable Functions is an extension to Azure Functions that allow you to define stateful workflows by "writing orchestrator functions" and stateful entitys by writing "entity functions"
- primary use case of Durable Functions is simplifying complex, stateful coordination requirements in serverless applications
- some patterns that can benefit from Durable Functions:
  - Function Chaining - wherein the output of one function becomes the input of another. The Durable Function would "orchestrate" the execution of each in order.
  - Fan out/Fan in - wherein multiple function execute in parallel. The Durable Function would use Tasks (C# example) to fan-out and execute the functions; and wait for them all to finish (fan in).
  - Async HTTP APIs - Durable Functions provide built-in support for polling long-running API operations
  - Monitor pattern - monitor another function's status
  - Human interaction - a Durable Function can wait for some human interation (e.g. an approval) before triggering another function
- 4 types of durable functions:
  1. Orchestrator functions - describe how actions are executed and their order
  2. Activity functions - the functions that do the actual "work"; the orchestrator orchestrates these
  3. Entity functions - define operations for reading/updating small pieces of state
  4. Client functions - essentially start orchestrator/entity functions. Interact with "task hub".
- Task hubs are logical containers for storage resources used by orchestration/entity functions
  - Consist of queues, tables, and storage container
