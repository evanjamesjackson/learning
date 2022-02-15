- Azure supports two types of message queue mechanisms: **Service Bus queues** and **Storage Bus queues**. The major difference between the two is that Storage Bus allows for larger messages.
- Azure Service Bus has several entities:
    - *Queues* - FIFO model (guaranteed by "message sessions"). Messages can be received in one of two ways:
        1. Receive and delete - simplest model for applications that can toerlate missing a message if a failure occurs
        2. Peek lock - similar to above, but makes the operation two-staged, so that no messages are missed (if a failure occurs, the message is simply "unlocked" and other consumers are allowed to process it)
    - *Topics and subscriptions* - pub/sub model. Allows for subscription "filtering" to determine which messages each subscriber should receive.
- messages in Service bus carry a payload as well as metadata used to route the messages (such routing properties include To, ReplyTo, ReplyToSessionId, MessageId, CorrelationId and SessionId)
- message payloads are serialized so that they are opaque during transit.
    - in .NET Framework, the `BrokeredMessage` class automatically serialized .NET objects
- **Azure Queue Storage** is a service for storing large numbers of messages, using Azure Storage accounts
