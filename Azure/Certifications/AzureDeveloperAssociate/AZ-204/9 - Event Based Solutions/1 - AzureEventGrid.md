- **Azure Event Grid** uses the publish-subscribe model to enable event-driven, reactive programming
- Key concepts in Event Grid:
    - **Events** - the thing that occurred that we want to react to
    - **Event sources** - the location the event took place
    - **Topics** - the endpoint where publishers send events
        - *System topics* - built-in topics provided by Azure services. These can be subscribed to but not modified. 
        - *Custom topics* - application and third-party topics
    - **Event subscriptions** - mechanism that routes events
    - **Event handlers** - apps/services reacting to the event
- Events emitted from an event source use the following schema:
    ```json
    [
        {
            "topic": string, // optional: provided by Event Grid if not provided in request
            "subject": string, // required: publisher-defined path to the event subject 
            "id": string, // required: unique ID
            "eventType": string, // required: one of the registered event types for this source
            "eventTime": string, // required: the time that the event occurred
            "data": {
                object-unique-to-each-publisher // optional: the payload containing event details
            },
            "dataVersion": string, // optional
            "metadataVersion": string // optional
        }
    ]
    ```
- Event Grid provides **durable delivery** - that is, it tries to deliver each event for each matching subscription immediately, and if there is a failure will retry based on a fixed retry scheduled and retry policy 
    - note that retries do not happen when the response status code is 400, 413 (request entity too large) or 403. If Dead-Letter is not configured for the endpoint, events will be dropped in these cases.
- **Retry policies** can be configured using the following configurations:
    1. Maximum number of attempts, and
    2. Event time-to-live (TTL)
- **Output batching** can be enabled to improve performance in high-throughput scenarios
- **Delayed delivery** automatically occurs when 10 or more events in a row fail to be published. It is assumed there is some problem with the endpoint and subsequent events are delayed.
- Event Grid contains the following built-in roles:
    - *Event Grid Subscripton Reader* - lets you read event subscriptions
    - *Event Grid Subscription Contributor* - lets you manage event subscription operations
    - *Event Grid Contributor* - lets you create/manage Event Grid resources
    - *Event Grid Data Sender* - lets you send events to Event Grid topics
- Event Grid requires you to validate that you own the endpoint (topic) before it will publish events there. Some services handle this validation automatically, but others require a synchronous or asynchronous handshake
- Event subscriptions can filter events by:
    - The type of event
    - Whether the subject of the event begins with or ends with a certain string
    - Using advanced filters/operators (e.g. events where a certain attribute has a value greater than 5)