export const claudeDeveloperSet2Questions = [
  {
    "id": 51,
    "question": "A teammate is reviewing the team's threat model for a Claude application and has asked you to identify the categories of AI-specific threats that the model should cover. The teammate has already listed traditional web application threats and wants to know what additional categories apply to a Claude application. Which AI-specific threat categories would you add?",
    "options": [
      "Supply chain attacks on the Claude SDK because the SDK itself is the only point of vulnerability that a Claude application introduces beyond traditional web application threats.",
      "Prompt injection, data leakage from prompts or context, jailbreak attempts, and unsafe model output that bypasses application controls.",
      "Network-level denial of service and physical infrastructure attacks, because these categories cover the threats most likely to affect any Claude application in production.",
      "Cross-site scripting and SQL injection, because these traditional web application threats apply with equal weight to any application that uses Claude in any way."
    ],
    "answer": [
      "Prompt injection, data leakage from prompts or context, jailbreak attempts, and unsafe model output that bypasses application controls."
    ],
    "explanation": "These are important AI-specific threat categories. Prompt injection can manipulate the model's behavior. Data leakage can expose sensitive information contained in prompts, context, or connected systems. Jailbreak attempts try to bypass safety or application restrictions. Unsafe model output can cause problems if downstream applications trust or execute model-generated content without appropriate validation. These threats should be considered in addition to traditional application security controls."
  },
  {
    "id": 52,
    "question": "You are building a Claude application that needs to deliver model output to end users as it is generated, instead of waiting for the full response to complete. The Claude API mechanism you would use is...",
    "options": [
      "The Batch API, which delivers full responses after a delay suitable for non-interactive workloads.",
      "Streaming responses, which deliver tokens incrementally as the model generates them so users see output progressively.",
      "Prompt caching, which speeds up the cost profile of future requests and does not affect the delivery timing of the first response.",
      "Structured JSON output, which delivers responses only after the model has finalized the JSON shape across the entire response."
    ],
    "answer": [
      "Streaming responses, which deliver tokens incrementally as the model generates them so users see output progressively."
    ],
    "explanation": "Streaming responses deliver model output incrementally, allowing the UI to display it as generated for interactive experiences."
  },
  {
    "id": 53,
    "question": "The Anthropic API deprecated a request parameter that your Claude application uses in approximately 40 places across the codebase. The deprecation notice gives a six-month window before the parameter is removed and recommends a replacement parameter with slightly different semantics. You would respond to the deprecation by...",
    "options": [
      "Keeping the deprecated parameter in place while writing a wrapper function around it to insulate the rest of the codebase from the eventual change.",
      "Migrating all 40 call sites in a single change near the removal date to ensure the deprecated parameter continues to work as long as possible.",
      "Adding regression tests to cover the parameter's behavior, then migrating call sites in batches that you validate against regression tests.",
      "Swapping all 40 call sites in a single change right away to prevent drawn-out migration work that will delay ongoing functioning."
    ],
    "answer": [
      "Adding regression tests to cover the parameter's behavior, then migrating call sites in batches that you validate against regression tests."
    ],
    "explanation": "This is the safest approach. Regression tests establish the expected behavior, while migrating the 40 call sites in small, validated batches makes it easier to detect semantic differences introduced by the replacement parameter and quickly isolate problems."
  },
  {
    "id": 54,
    "question": "Your application uses the Messages API to handle multi-turn conversations. Each new turn resends the entire conversation history, and your token costs are growing as conversations get longer. You suspect there is a more efficient approach. How would you address this?",
    "options": [
      "Truncate every conversation to the last two messages so that token usage stays low and costs remain predictable across the application's normal operation.",
      "Summarize each conversation after every turn and replace the full history with the summary on the next request, reducing token count at the cost of fidelity.",
      "Use prompt caching to reuse the static portions of the conversation context across turns instead of paying for them at the normal input-token rate on every request the application sends.",
      "Switch to the Batch API for every turn so the per-call cost is reduced, treating the batch as the team's primary cost-control mechanism for multi-turn work."
    ],
    "answer": [
      "Use prompt caching to reuse the static portions of the conversation context across turns instead of paying for them at the normal input-token rate on every request the application sends."
    ],
    "explanation": "Prompt caching is designed for situations where the same context is repeatedly sent across requests. With multi-turn conversations, previously established context can be cached and reused, reducing the effective cost of repeatedly processing the same input context."
  },
  {
    "id": 55,
    "question": "You are configuring Claude Code for a new project. The team needs to set permissions, default model selections, and environment-specific behavior at the project level so the configuration is consistent across all developers working on the repository. The Claude Code mechanism you would use is...",
    "options": [
      "A system prompt embedded in every Claude Code conversation by each developer at the start of every session in the project.",
      "Environment variables that each developer sets on their own machine when working with Claude Code on the project.",
      "A shared spreadsheet that lists configuration values for team members to reference and update by hand as the project evolves.",
      "The settings.json file, scoped at the project level so the configuration applies consistently across developers and persists with the repository."
    ],
    "answer": [
      "The settings.json file, scoped at the project level so the configuration applies consistently across developers and persists with the repository."
    ],
    "explanation": "The project-level settings.json mechanism provides a centralized configuration for Claude Code. It can define project-specific settings such as permissions, model preferences, and other behavior, allowing the configuration to be version-controlled and shared consistently with the repository."
  },
  {
    "id": 56,
    "question": "Your team is preparing to roll out a configuration change that updates several prompt versions across a Claude application used by multiple downstream systems. The change has already been tested in staging, but the team has not assessed how the prompt change will affect each downstream system that depends on the application's output. What would you do before rolling out the change?",
    "options": [
      "Notify downstream system owners that a change is coming and schedule the rollout for the following week, without conducting a formal impact assessment.",
      "Document the prompt version changes in the application changelog and proceed with the rollout, treating the staging test results as sufficient evidence of impact across all downstream systems.",
      "Limit the rollout to systems that were explicitly included in staging testing, and defer all other downstream systems until a later release cycle.",
      "Assess the configuration impact on each downstream system before rolling out, and coordinate with downstream system owners as needed."
    ],
    "answer": [
      "Assess the configuration impact on each downstream system before rolling out, and coordinate with downstream system owners as needed."
    ],
    "explanation": "Before deployment, the team should perform a downstream impact assessment to identify compatibility risks, behavioral changes, and dependencies. Coordinating with system owners ensures that affected teams understand the changes and can validate or prepare their systems."
  },
  {
    "id": 57,
    "question": "A teammate has submitted a pull request that adds a Claude-powered feature to your service. The code works, but the prompt and model selection are hard-coded inline, error handling is missing, and there are no tests for the integration. What would you request during code review?",
    "options": [
      "Approve the pull request and add the missing pieces yourself in a follow-up commit so the teammate can move on to other work immediately.",
      "Approve the pull request as-is, on the grounds that the feature works in the happy path and the missing pieces can be added in follow-up commits.",
      "Request changes that move prompt and model configuration to a configurable location and add tests, treating the missing error handling as a follow-up release item.",
      "Request changes that move prompt and model configuration to a configurable location, add error handling for Claude API failures, and add tests for the integration."
    ],
    "answer": [
      "Request changes that move prompt and model configuration to a configurable location, add error handling for Claude API failures, and add tests for the integration."
    ],
    "explanation": "This addresses the three major concerns: Configurable prompts and models → easier maintenance, testing, and model/prompt updates. Error handling → prevents API failures from causing uncontrolled application failures. Integration tests → verify that the Claude feature works correctly and continues working as the code evolves."
  },
  {
    "id": 58,
    "question": "You are setting up Claude Code for a new project repository. Your team has shared coding standards, preferred libraries, and project-specific context that every developer working on the repository should have available when they use Claude Code. How would you set this up?",
    "options": [
      "Document the standards in a separate wiki page maintained outside the repository so the documentation stays decoupled from the source code.",
      "Configure Claude Code through environment variables that each developer sets on their own machine when they begin working in the repository.",
      "Initialize Claude Code in the repository and document the standards and project-specific context in a CLAUDE.md file at the repository root.",
      "Add the coding standards and project context to the repository's existing README file and direct developers to reference it when starting Claude Code sessions."
    ],
    "answer": [
      "Initialize Claude Code in the repository and document the standards and project-specific context in a CLAUDE.md file at the repository root."
    ],
    "explanation": "CLAUDE.md is designed to provide persistent project instructions and context to Claude Code. Placing it at the repository root allows the team to keep coding standards, preferred libraries, workflows, and project-specific guidance together with the repository."
  },
  {
    "id": 59,
    "question": "You are reviewing an architectural diagram for a Claude-powered travel-booking system. The diagram shows a top-level component that interprets user requests and three subordinate components that handle flights, hotels, and ground transportation. The top-level component is responsible for routing each request, sequencing the subordinate components, and reconciling their outputs into a final itinerary. The diagram also shows that each subordinate component has its own tool list and own short conversation history that is not shared with the others. Which architectural pattern does this diagram most closely describe?",
    "options": [
      "A manager and supervisor pattern with isolated context per subagent, where the top-level agent coordinates specialized subagents that each maintain their own conversation history and tool list.",
      "A manager and supervisor pattern with shared context, where the top-level agent and the subagents all share a single conversation history that grows as the request flows through the system.",
      "A pipeline pattern, where each component processes the user request in sequence and passes the full conversation history along with the request to the next component in the pipeline.",
      "A retrieval-augmented pattern, where the top-level component retrieves relevant context from the subordinate components' indexed data stores before generating each response."
    ],
    "answer": [
      "A manager and supervisor pattern with isolated context per subagent, where the top-level agent coordinates specialized subagents that each maintain their own conversation history and tool list."
    ],
    "explanation": "The top-level agent acts as the manager/coordinator, routing tasks to specialized subagents such as flights, hotels, and transportation. Each subagent has its own tools and isolated context, while the manager combines their results into the final itinerary."
  },
  {
    "id": 60,
    "question": "You are starting a new Claude application and have a small set of well-labeled examples that demonstrate the desired output format. You want to use these examples to guide Claude's behavior. How would you guide the application's behavior?",
    "options": [
      "Use multi-shot prompting by including the labeled examples in the prompt so Claude can match the desired output format on each request.",
      "Use zero-shot prompting and rely on the model's general capability to produce the desired output format consistently across all incoming requests.",
      "Embed the examples in a database and retrieve them at runtime as reference material for the team.",
      "Train a custom model on the labeled examples before deployment so that the application does not need to include the examples in any prompt during operation."
    ],
    "answer": [
      "Use multi-shot prompting by including the labeled examples in the prompt so Claude can match the desired output format on each request."
    ],
    "explanation": "Providing several labeled examples directly in the prompt is few-shot/multi-shot prompting. The examples demonstrate the expected input-output pattern and help Claude consistently follow the desired format without requiring model training."
  },
  {
    "id": 61,
    "question": "You are setting up the configuration management approach for a new Claude Code project. Your team will use CLAUDE.md files and settings.json files to control behavior, and you want to make sure changes are tracked and reviewable. The configuration management approach would...",
    "options": [
      "Duplicate CLAUDE.md and settings.json files in multiple repositories to provide redundancy, on the grounds that a single source of truth is risky for project configuration.",
      "Version-control CLAUDE.md and settings.json files in a separate repository from the project's source code, so configuration evolves independently from the application code over time.",
      "Version-control CLAUDE.md alongside the project's source code and settings. json files in a separate repository from the project's source code.",
      "Version-control CLAUDE.md and settings.json files alongside the project's source code, with changes reviewed through standard pull request workflows the team applies."
    ],
    "answer": [
      "Version-control CLAUDE.md and settings.json files alongside the project's source code, with changes reviewed through standard pull request workflows the team applies."
    ],
    "explanation": "Keeping the configuration with the project source code provides a clear source of truth. Version control preserves the history of changes, while pull request reviews allow the team to inspect and approve configuration changes before they are merged."
  },
  {
    "id": 62,
    "question": "Your agent is processing tasks that take 30 to 60 minutes to complete. Each task has well-defined intermediate checkpoints, and the team wants the agent to be able to resume from the most recent checkpoint if a process is interrupted. How would you implement this resumability?",
    "options": [
      "Increase the agent's timeout to several hours so that interruptions become rare enough to ignore in practice.",
      "Apply a checkpointing pattern that persists the agent's intermediate state and reloads that state when resuming an interrupted task.",
      "Run two copies of the agent in parallel for every task and use whichever one finishes first as the source of truth.",
      "Restart the task from the beginning whenever a process is interrupted."
    ],
    "answer": [
      "Apply a checkpointing pattern that persists the agent's intermediate state and reloads that state when resuming an interrupted task."
    ],
    "explanation": "A checkpointing pattern periodically persists the agent?s intermediate state so an interrupted task can resume from its latest saved checkpoint."
  },
  {
    "id": 63,
    "question": "A team has deployed a multi-agent system in which a primary agent decomposes user requests and delegates subtasks to three specialized subagents: one for data retrieval, one for analysis, and one for report generation. In production, the team observes that subagents are making redundant tool calls, occasionally exceeding token budgets, and sometimes producing outputs that contradict each other - all of which the primary agent passes along without catching. What is the most appropriate way to address these failures?",
    "options": [
      "Add retry logic to each subagent so that when a tool call fails, the subagent retries automatically before escalating - and configure each subagent to log its tool calls and outputs to a shared trace so the team can audit redundancy and contradictions after the fact.",
      "Give each subagent read access to the other subagents' outputs so they can identify and resolve contradictions without routing back through the primary agent.",
      "Strengthen the primary agent's management layer to enforce per-subagent tool budgets, validate outputs against a defined schema before passing them forward, and establish explicit handoff contracts between stages.",
      "Collapse the three subagents into a single large-context model call that handles retrieval, analysis, and generation in one pass."
    ],
    "answer": [
      "Strengthen the primary agent's management layer to enforce per-subagent tool budgets, validate outputs against a defined schema before passing them forward, and establish explicit handoff contracts between stages."
    ],
    "explanation": "The management layer should provide centralized orchestration and guardrails. Per-agent tool/token budgets control resource usage, schema validation catches malformed or unexpected outputs, and explicit handoff contracts reduce ambiguity and contradictions between stages."
  },
  {
    "id": 64,
    "question": "Your agent makes 10 to 15 tool calls per task, and you have noticed it sometimes loses track of earlier results by the time it reaches later steps. The agent's context window is large enough to hold all the messages, but the relevant information appears to get buried as the conversation grows. How would you address this?",
    "options": [
      "Switch to a different agentic framework that advertises automatic context-window management as a built-in feature.",
      "Reduce the number of tool calls per task by combining several existing tools into larger, multi-purpose tools.",
      "Increase the context window further so all tool outputs from every prior step remain in full detail throughout the task.",
      "Apply a context-management pattern that summarizes or prunes older tool outputs while preserving the active task state."
    ],
    "answer": [
      "Apply a context-management pattern that summarizes or prunes older tool outputs while preserving the active task state."
    ],
    "explanation": "A context-management strategy keeps the information needed for the current task readily accessible. Older tool results can be summarized or pruned while important decisions, state, and active findings are retained. This reduces context clutter and helps the agent stay focused on relevant information."
  },
  {
    "id": 65,
    "question": "A teammate has asked why your Claude application sometimes produces a response that includes the prompt text repeated back, and other times produces a response with the prompt text rephrased. They suspect a bug in the application's request construction. How would you respond?",
    "options": [
      "Tell the teammate that the variation depends on which Claude model serves the request, and recommend pinning the application to a single model version to make the output behavior consistent.",
      "Explain that LLMs generate output token by token, and variation in how prompt content appears in output is a property of generation, not a bug in request construction.",
      "Confirm that the variation is a bug in the application's request construction and start investigating which part of the application is producing the inconsistent prompt text.",
      "Tell the teammate that the variation is caused by the application sending two different prompts on different runs and propose a code change that pins the system prompt to a single version."
    ],
    "answer": [
      "Explain that LLMs generate output token by token, and variation in how prompt content appears in output is a property of generation, not a bug in request construction."
    ],
    "explanation": "LLMs generate responses probabilistically, token by token. Depending on the generation process and context, Claude may repeat prompt content, paraphrase it, or omit it. Such variation does not automatically indicate that the application constructed the request incorrectly."
  },
  {
    "id": 66,
    "question": "You are designing a multi-step Claude workflow where some steps must reason without seeing the full prior conversation history. The team wants to keep specific context isolated to specific steps. The context engineering technique you would use is...",
    "options": [
      "Augmenting the context with all available content at every step so each step has access to the entire prior history of the workflow during its reasoning.",
      "Using a single global prompt that applies to every step in the workflow no matter what each step is reasoning about during its run.",
      "Context isolation through subagents or multi-step agentic workflows that scope each step's context to only what the step needs.",
      "Embedding the full prior history in each step regardless of whether the step needs the prior history for its reasoning."
    ],
    "answer": [
      "Context isolation through subagents or multi-step agentic workflows that scope each step's context to only what the step needs."
    ],
    "explanation": "Context isolation limits each subagent or workflow step to the information required for its specific task. This reduces unnecessary context, prevents irrelevant information from influencing reasoning, and helps maintain clearer boundaries between different stages."
  },
  {
    "id": 67,
    "question": "A teammate has asked you to explain why your Claude agent's tools include detailed descriptions in the tool definition, even when the tool name is already descriptive. The teammate suggests removing the descriptions to simplify the tool definitions. How would you respond?",
    "options": [
      "Suggest replacing the descriptions with example calls embedded in the tool definition, treating example calls as a complete substitute for the prose description.",
      "Agree with the teammate because tool names are sufficient for the model to choose the right tool on every request the agent handles.",
      "Explain that the model uses the tool description to decide when to call the tool, and descriptions disambiguate cases where the tool name is not enough.",
      "Suggest moving the descriptions out of the tool definition and into a separate documentation file the teamnaintains so the tool definitions stay short and the descriptions remain available."
    ],
    "answer": [
      "Explain that the model uses the tool description to decide when to call the tool, and descriptions disambiguate cases where the tool name is not enough."
    ],
    "explanation": "Tool descriptions provide important semantic guidance to the model. They help Claude understand the tool's purpose, appropriate use cases, expected arguments, and boundaries. Detailed descriptions are especially valuable when multiple tools have overlapping functionality."
  },
  {
    "id": 68,
    "question": "Your Claude application's error handling currently logs every API error with the same severity level. The team wants to differentiate between errors that should page an on-call engineer and errors that should be logged for later review. How would you structure the error handling?",
    "options": [
      "Page on every error, on the grounds that paging guarantees that no error is missed by the team during normal operation across the application's lifecycle.",
      "Disable logging for any error that does not page, treating non-paging errors as not worth recording for later review either.",
      "Categorize errors by severity based on impact and recoverability, then route each category to the appropriate channel for paging or logging.",
      "Log every error with the same severity, on the grounds that differentiating severity adds complexity that does not pay off in most application setups over time."
    ],
    "answer": [
      "Categorize errors by severity based on impact and recoverability, then route each category to the appropriate channel for paging or logging."
    ],
    "explanation": "A good error-handling strategy classifies errors based on factors such as impact, severity, and recoverability. Critical or unrecoverable failures can trigger an on-call page, while lower-severity or recoverable errors can be logged for monitoring and later investigation."
  },
  {
    "id": 69,
    "question": "Your Claude application's error handling currently logs every API error with the same severity level. The team wants to differentiate between errors that should page an on-call engineer and errors that should be logged for later review. How would you structure the error handling?",
    "options": [
      "Page on every error, on the grounds that paging guarantees that no error is missed by the team during normal operation across the application's lifecycle.",
      "Disable logging for any error that does not page, treating non-paging errors as not worth recording for later review either.",
      "Categorize errors by severity based on impact and recoverability, then route each category to the appropriate channel for paging or logging.",
      "Log every error with the same severity, on the grounds that differentiating severity adds complexity that does not pay off in most application setups over time."
    ],
    "answer": [
      "Categorize errors by severity based on impact and recoverability, then route each category to the appropriate channel for paging or logging."
    ],
    "explanation": "A good error-handling strategy classifies errors based on factors such as impact, severity, and recoverability. Critical or unrecoverable failures can trigger an on-call page, while lower-severity or recoverable errors can be logged for monitoring and later investigation."
  },
  {
    "id": 70,
    "question": "You are extending a Claude agent with a capability that needs to be reusable across multiple teams in the organization, with each team able to invoke and use it independently. How would you build the capability?",
    "options": [
      "As a custom tool embedded in this team's agent only, with other teams able to copy the implementation into their own agents when they need the capability.",
      "As a shared library that each team imports into its own Claude application code, with each team responsible or keeping the library up to date in its integration.",
      "As a Skill or MCP server because both are purpose-built for cross-team reuse independently by each consuming team.",
      "As a wrapper around an existing built-in tool that adds the missing functionality, on the grounds that built-in tools cover the reuse pattern when extended carefully."
    ],
    "answer": [
      "As a Skill or MCP server because both are purpose-built for cross-team reuse independently by each consuming team."
    ],
    "explanation": "Skills and MCP servers are designed to make reusable capabilities available across different Claude applications or teams. This allows teams to consume the capability independently while avoiding duplicated implementations."
  },
  {
    "id": 71,
    "question": "You are choosing between using STDIO-based communication and HTTP-based communication for an ACP server. The server will be invoked by a Claude Code session running locally. Which communication pattern would you use?",
    "options": [
      "STDIO and HTTP simultaneously for redundancy, with the team running two communication patterns at the same time across Claude Code sessions.",
      "HTTP on the grounds that HTTP is preferable to STDIO in any context the application might encounter during normal operation.",
      "HTTP polling against the MCP server, treating HTTP as a substitute for the standard MCP communication patterns.",
      "STDIO because STDIO is well-suited to local process communication and avoids unnecessary network setup."
    ],
    "answer": [
      "STDIO because STDIO is well-suited to local process communication and avoids unnecessary network setup."
    ],
    "explanation": "For a Claude Code session running locally, STDIO is a natural choice for communicating with a locally running ACP server. It provides direct process-to-process communication without requiring network configuration, ports, or HTTP infrastructure."
  },
  {
    "id": 72,
    "question": "Your Claude application's API keys are stored in a secrets manager. The team is debating whether the same key should be used in development, staging, and production environments. How would you handle the keys across environments?",
    "options": [
      "Use distinct keys for each environment so a compromise in one environment does not affect the others during normal operation across the application's lifecycle.",
      "Rotate the same key across environments at random intervals on the grounds that random rotation provides isolation between environments without requiring distinct keys.",
      "Use the same key across all environments for simplicity and treat the propagation of any compromise as a known operational tradeoff for the team's key management approach.",
      "Use a single development key everywhere on the grounds that production keys are too risky to deploy across the application's three environments during normal operation."
    ],
    "answer": [
      "Use distinct keys for each environment so a compromise in one environment does not affect the others during normal operation across the application's lifecycle."
    ],
    "explanation": "Each environment should have its own API key. Development, staging, and production should be isolated so that if a key is exposed or compromised in one environment, the attacker cannot automatically access the others. This also improves access control, auditing, rotation, and incident response."
  },
  {
    "id": 73,
    "question": "You are explaining to a stakeholder why running the same Claude prompt twice can produce slightly different results. The stakeholder is concerned this means the application is broken. How would you address the stakeholder's concern?",
    "options": [
      "Tell the stakeholder the variation is a bug that the team will fix in the next release of the application, then create a work ticket to fix the bug.",
      "Tell the stakeholder the variation comes from network latency and that switching to a faster network connection will produce more consistent results across runs.",
      "Explain that LLMs are non-deterministic by default due to sampling, and describe how the application handles this through validation, retries, or temperature adjustment.",
      "Tell the stakeholder the variation is caused by Claude being updated continuously by Anthropic, and that switching to a fixed model snapshot will eliminate the variation entirely"
    ],
    "answer": [
      "Explain that LLMs are non-deterministic by default due to sampling, and describe how the application handles this through validation, retries, or temperature adjustment."
    ],
    "explanation": "LLMs can generate different responses because token selection involves sampling. This is normal behavior and does not necessarily indicate an application problem. Applications can manage variation through techniques such as output validation, controlled retries, appropriate temperature settings, structured outputs, and evaluation tests."
  },
  {
    "id": 74,
    "question": "The product team has asked you to choose a Claude model for a new feature. The team has provided functional requirements but has not specified performance, cost, or quality targets. The team's product manager says, \"Use whatever model gives us the best results.\" How would you respond?",
    "options": [
      "Ask the product team to specify quality, latency, and cost targets, then select the model whose tradeoffs best fit those targets.",
      "Run every Claude model on a representative sample and pick whichever scores best on a generic benchmark.",
      "Choose a mid-tier model and ship the feature, because mid-tier models work for most use cases without specified targets.",
      "Choose the largest, highest-capability Claude model, on the grounds that \"best results\" is most likely to mean highest quality."
    ],
    "answer": [
      "Ask the product team to specify quality, latency, and cost targets, then select the model whose tradeoffs best fit those targets."
    ],
    "explanation": "Model selection should be based on clear quality, latency, and cost requirements. Different Claude models offer different tradeoffs, so \"best results\" is too vague to make a sound production decision. Once the team defines measurable targets, you can evaluate models against those requirements and choose the best fit."
  },
  {
    "id": 75,
    "question": "Your Claude application is deployed to development, staging, and production environments. Each environment uses a different model version, different prompt versions, and different plugin dependencies, but the configuration is currently scattered across environment variables, hardcoded values, and undocumented setup scripts. How would you manage the configuration?",
    "options": [
      "Use the latest available model version everywhere and stop pinning model versions, on the grounds that pinning adds maintenance overhead the team should aim to reduce.",
      "Move all configuration into hardcoded application code to reduce reliance on external configuration sources that are difficult to track over time.",
      "Consolidate the configuration into a version-controlled system documenting model version pinning, prompt versioning, and plugin dependencies for each environment.",
      "Standardize all environments to use the same configuration values to eliminate the differences between development, staging, and production."
    ],
    "answer": [
      "Consolidate the configuration into a version-controlled system documenting model version pinning, prompt versioning, and plugin dependencies for each environment."
    ],
    "explanation": "A version-controlled configuration system provides a single, auditable source of truth. It should clearly document: Model versions Prompt versions Plugin/dependency versions Environment-specific settings This improves reproducibility, change tracking, rollback, and controlled deployments."
  },
  {
    "id": 76,
    "question": "Your Claude application is deployed to development, staging, and production environments. Each environment uses a different model version, different prompt versions, and different plugin dependencies, but the configuration is currently scattered across environment variables, hardcoded values, and undocumented setup scripts. How would you manage the configuration?",
    "options": [
      "Use the latest available model version everywhere and stop pinning model versions, on the grounds that pinning adds maintenance overhead the team should aim to reduce.",
      "Move all configuration into hardcoded application code to reduce reliance on external configuration sources that are difficult to track over time.",
      "Consolidate the configuration into a version-controlled system documenting model version pinning, prompt versioning, and plugin dependencies for each environment.",
      "Standardize all environments to use the same configuration values to eliminate the differences between development, staging, and production."
    ],
    "answer": [
      "Consolidate the configuration into a version-controlled system documenting model version pinning, prompt versioning, and plugin dependencies for each environment."
    ],
    "explanation": "A version-controlled configuration system provides a single, auditable source of truth. It should clearly document: Model versions Prompt versions Plugin/dependency versions Environment-specific settings This improves reproducibility, change tracking, rollback, and controlled deployments."
  },
  {
    "id": 77,
    "question": "You are designing a Claude application that will process customer support tickets in two stages: a triage stage that classifies tickets and a response stage that drafts replies. The team is debating whether to use a single Claude call that handles both stages or separate Claude calls for each stage. How would you structure the application?",
    "options": [
      "Use a single Claude call for triage and then use a non-Claude rule-based system for response generation, on the grounds that rule-based systems are more reliable for drafting replies.",
      "Use multiple Claude calls in parallel that each draft a complete ticket reply, then have a fourth Claude call select the best one to send to the customer.",
      "Use separate Claude calls for triage and response, because each stage has distinct inputs, outputs, and success criteria that benefit from focused prompts.",
      "Use a single Claude call for both stages, on the grounds that a single call is cheaper than multiple calls in any production Claude application setup."
    ],
    "answer": [
      "Use separate Claude calls for triage and response, because each stage has distinct inputs, outputs, and success criteria that benefit from focused prompts."
    ],
    "explanation": "Triage and response generation have different objectives: Triage: classify the ticket accurately and produce structured classification information. Response: use the ticket and triage information to draft an appropriate customer-facing reply. Separating them allows each Claude call to have a focused prompt, clear output format, independent validation, and stage-specific success criteria. It also makes debugging and improving one stage easier without unnecessarily affecting the other."
  },
  {
    "id": 78,
    "question": "A new agent your team built handles customer support tickets, but it routinely gets confused when a single ticket spans billing, shipping, and product issues. The agent often loses track of which sub-issue it has already addressed and revisits the same one. The team is considering architectural changes. What architectural change would you recommend?",
    "options": [
      "Switch to a deterministic workflow that handles billing, shipping, and product issues in a fixed sequence.",
      "Add detailed prompting that instructs the agent to track which sub-issues have been resolved and which remain.",
      "Introduce an orchestrator agent that delegates billing, shipping, and product sub-issues to dedicated subagents.",
      "Increase the size of the agent's context window so it can hold the full ticket history at once."
    ],
    "answer": [
      "Introduce an orchestrator agent that delegates billing, shipping, and product sub-issues to dedicated subagents."
    ],
    "explanation": "An orchestrator-agent architecture is well suited to this scenario. The orchestrator can break the ticket into separate sub-issues and delegate them to specialized subagents: Billing subagent → handles billing questions. Shipping subagent → handles delivery/shipping issues. Product subagent → handles product-related issues. Orchestrator → tracks which issues are assigned and completed, then combines the results. This provides context isolation, specialization, clearer state tracking, and reduced duplication."
  },
  {
    "id": 79,
    "question": "Your Claude agent's hooks are currently triggered for every action, which slows down the agent significantly even when actions pose no risk. The team wants to scope hooks more carefully. How would you scope the hooks?",
    "options": [
      "Scope hooks to only the high-risk actions, such as destructive operations or sensitive data access, and remove hooks from low-risk actions to balance safety with performance.",
      "Disable all hooks while the team re-scopes them, treating the period of no hook enforcement as a temporary state during the re-scoping work.",
      "Disable the agent during peak hours so the hook overhead does not slow the application down during the busiest periods of the day across the application's operation.",
      "Replace hooks with system prompt instructions on the grounds that prompt instructions can produce the same enforcement effect that hooks produce on the agent's actions."
    ],
    "answer": [
      "Scope hooks to only the high-risk actions, such as destructive operations or sensitive data access, and remove hooks from low-risk actions to balance safety with performance."
    ],
    "explanation": "Hooks should be applied selectively to actions that actually require enforcement or additional checks. High-risk operations, such as destructive actions or sensitive-data access, benefit most from hook-based controls. Removing unnecessary hooks from low-risk actions reduces latency and overhead while maintaining important security controls."
  },
  {
    "id": 80,
    "question": "You are designing a Claude application that processes user-submitted text. Some of that text could include sensitive information such as account numbers or passwords that the application should not send to Claude. How would you design the application?",
    "options": [
      "Define the application boundary explicitly, identify what content can leave the boundary for Claude, and add filtering or redaction at the boundary.",
      "Add a prompt instruction in the system prompt specifying the categories of sensitive information Claude should disregard when processing user-submitted text.",
      "Log all user-submitted text before it is sent to Claude and review the logs periodically to identify whether sensitive information is reaching the model.",
      "Apply filtering at the boundary for the most commonly observed sensitive data patterns and expand coverage to additional patterns based on findings from production monitoring."
    ],
    "answer": [
      "Define the application boundary explicitly, identify what content can leave the boundary for Claude, and add filtering or redaction at the boundary."
    ],
    "explanation": "Defining a clear data boundary and filtering or redacting sensitive details before sending the request prevents those details from reaching Claude."
  },
  {
    "id": 81,
    "question": "Your Claude application runs long agentic workflows where the agent makes many tool calls, and the conversation history grows quickly. After about 20 tool calls, you notice the agent's responses become less focused and sometimes ignore earlier task constraints. How would you address this?",
    "options": [
      "Remove tool calling from the workflow entirely so the agent operates as a single text-generation step with no tool outputs accumulating in the context window.",
      "Apply context engineering techniques such as tool output pruning or compaction to keep the active task state visible while reducing the volume of older content.",
      "Increase the model's context window so the agent can hold every tool output at full detail across the entire workflow no matter how many tool calls it accumulates.",
      "Restart the agent every five tool calls to prevent any drift, with the agent losing all task state at each restart point during the workflow."
    ],
    "answer": [
      "Apply context engineering techniques such as tool output pruning or compaction to keep the active task state visible while reducing the volume of older content."
    ],
    "explanation": "Pruning or compacting older tool outputs while preserving active task state keeps relevant information and constraints accessible as the workflow grows."
  },
  {
    "id": 82,
    "question": "You are designing an agent that handles a complex claim-processing workflow. Each claim moves through fact extraction, eligibility evaluation, and a decision step. The three subtasks have distinct success criteria, and some claims require iteration between fact extraction and eligibility evaluation before a decision can be reached. Which agent pattern would you apply?",
    "options": [
      "A graph-based pattern that lets the agent move between subtasks based on the state of each claim, with each subtask evaluated against its own criteria.",
      "A streaming pattern that emits partial decisions as the agent processes each claim, refining the output until a final decision emerges from the stream.",
      "A single tool-use loop pattern that gives one agent access to all the tools needed for fact extraction, eligibility evaluation, and decision-making.",
      "A linear chain pattern that processes every claim through fact extraction, then eligibility evaluation, then decision, with no return paths between subtasks."
    ],
    "answer": [
      "A graph-based pattern that lets the agent move between subtasks based on the state of each claim, with each subtask evaluated against its own criteria."
    ],
    "explanation": "A graph-based agent pattern is ideal when a workflow has multiple specialized stages and may need to branch, loop, or return to an earlier stage based on the current state. Here, the agent can move between: Fact Extraction → Eligibility Evaluation → Decision and, when necessary: Eligibility Evaluation → Fact Extraction → Eligibility Evaluation Each subtask can also have its own success criteria and validation, making the workflow more controlled and reliable."
  },
  {
    "id": 83,
    "question": "Your enterprise has a contract with AWS that requires Claude API calls to flow through Amazon Bedrock rather lan the direct Anthropic API. Your team is building a new Claude application and is unfamiliar with this constraint. How would you build the application?",
    "options": [
      "Build two parallel implementations of every call, one for the direct Anthropic API and one for Bedrock, and pick the faster one at runtime.",
      "Build the application against the direct Anthropic API now and migrate to Bedrock in a follow-up release once the team has more experience with the Bedrock API.",
      "Configure the application to invoke Claude through the Bedrock-compatible API path while keeping the application's logic provider-agnostic.",
      "Build the application against the direct Anthropic API and ignore the contractual requirement to route Claude calls through Amazon Bedrock."
    ],
    "answer": [
      "Configure the application to invoke Claude through the Bedrock-compatible API path while keeping the application's logic provider-agnostic."
    ],
    "explanation": "The application should route Claude requests through Amazon Bedrock as required by the contract while keeping business and application logic as independent from the underlying provider integration as practical. This approach satisfies the contractual constraint and makes the application easier to maintain or adapt if the underlying model provider or access path changes later."
  },
  {
    "id": 84,
    "question": "Your Claude application has been running for several conversation turns, and you notice the model occasionally references information that was discussed many turns ago but is no longer relevant. You suspect context drift is causing the model to weight stale content too heavily. How would you address the drift?",
    "options": [
      "Increase the context window size so all turns of the conversation remain visible to the model in full detail.",
      "Reset the conversation after every turn so the model loses all prior turns when generating a response.",
      "Apply compaction to summarize older portions of the conversation so the gist remains while the specifics carry less weight.",
      "Truncate the conversation so the model sees only the most recent turn during each subsequent response."
    ],
    "answer": [
      "Apply compaction to summarize older portions of the conversation so the gist remains while the specifics carry less weight."
    ],
    "explanation": "Compaction reduces context drift by summarizing older conversation content while preserving its important information. This keeps the overall gist and relevant state available without allowing outdated details to dominate the active context. This is especially useful for long-running agentic conversations where context grows over many turns."
  },
  {
    "id": 85,
    "question": "You are building a Claude application that needs to maintain a persistent connection to a service that streams real-time updates. The team is unsure what communication pattern to use. Which communication pattern would you use?",
    "options": [
      "Repeated short-lived HTTP polling requests, where the application opens a new HTTP connection each time it checks for updates.",
      "A WebSocket, because WebSockets are designed for bidirectional, persistent, real-time communication between the client and the streaming service.",
      "A single long HTTP request the server holds open indefinitely, with no standard WebSocket framing on the connection.",
      "File-based communication where the service writes new updates to disk and the application polls the file system for changes."
    ],
    "answer": [
      "A WebSocket, because WebSockets are designed for bidirectional, persistent, real-time communication between the client and the streaming service."
    ],
    "explanation": "WebSockets are designed for persistent, real-time communication. Once established, the connection remains open and both the client and server can exchange messages without repeatedly creating new HTTP connections. This makes WebSockets appropriate when the application needs continuous, low-latency updates."
  },
  {
    "id": 86,
    "question": "A teammate has asked how the Claude SDK handles transient API errors, such as a temporary network issue or a brief rate-limit response. They want to know whether the application code needs to handle every transient error or whether the SDK provides any default behavior. How would you describe the SDK's default behavior?",
    "options": [
      "The SDK provides default retry behavior for transient errors up to a fixed number of attempts, and this behavior is not configurable.",
      "The SDK provides default retry behavior for network errors but surfaces rate-limit responses directly to the application code, which must implement its own retry logic for those cases.",
      "The SDK logs transient errors to a default error stream and continues execution without retrying, leaving the application code responsible for detecting and responding to failed calls.",
      "The SDK provides default retry behavior for many transient errors, and the application code can configure or extend that behavior as needed."
    ],
    "answer": [
      "The SDK provides default retry behavior for many transient errors, and the application code can configure or extend that behavior as needed."
    ],
    "explanation": "The Claude SDK provides default retry behavior for many transient failures, such as temporary network problems and rate-limit responses. Developers can also configure retry behavior when the application's requirements call for different limits or handling. This reduces the amount of retry logic that application developers need to implement themselves while still allowing application-specific control."
  },
  {
    "id": 87,
    "question": "Your team is debating how to manage the prompts used in your Claude application. Some prompts are checked into the code repository, some live in a separate configuration file, and some are constructed inline at runtime. The result is inconsistent, and a recent prompt change went out without code review. What steps would you take?",
    "options": [
      "Move all prompts out of version control to a separate spreadsheet that team members can edit freely as the application evolves over time.",
      "Move all prompts to inline runtime construction so the team can update them quickly through a streamlined process outside the standard code review workflow.",
      "Establish a single source of truth for prompts but keep change review optional, allowing developers to update prompts directly when changes are urgent.",
      "Establish a single source of truth for prompts, version-control them alongside code, and require code review for prompt changes."
    ],
    "answer": [
      "Establish a single source of truth for prompts, version-control them alongside code, and require code review for prompt changes."
    ],
    "explanation": "This provides a controlled prompt-management lifecycle. Keeping prompts version-controlled alongside the application allows the team to: Track exactly what changed. Review prompt modifications. Associate prompts with application versions. Reproduce previous behavior. Roll back problematic changes. Prompt changes can affect application behavior just like code changes, so they should go through code review and normal change-management practices."
  },
  {
    "id": 88,
    "question": "A junior developer suggests increasing the temperature parameter to fix the issue. How would you respond?",
    "options": [
      "Explain that temperature controls sampling randomness and is unrelated to context capacity, then address the context issue through summarization or chunking.",
      "Adjust the temperature parameter together with the max_tokens parameter, treating the combined adjustment as the team's mechanism for managing context window pressure during long-transcript processing.",
      "Remove the system prompt entirely to make room for longer transcripts in each request, freeing up context window space the system prompt would otherwise consume.",
      "Increase the temperature parameter as the junior developer suggested and observe whether the context window issue resolves over the next several runs of the application in production."
    ],
    "answer": [
      "Explain that temperature controls sampling randomness and is unrelated to context capacity, then address the context issue through summarization or chunking."
    ],
    "explanation": "Temperature controls the randomness of model output, not the amount of information the model can hold in its context window. If the problem is that a long transcript exceeds or puts pressure on the context window, appropriate solutions include summarization, compaction, or chunking the input into manageable sections."
  },
  {
    "id": 89,
    "question": "You are integrating Claude into an application written in Python. The Claude SDK provides a Python client that wraps the underlying REST API. How would you integrate the SDK?",
    "options": [
      "Call the REST API directly with raw HTTP requests so the application avoids the SDK's abstraction between the application code and the API.",
      "Use the Claude Python SDK and let it handle authentication, retries, and response parsing through its standard documented patterns for Python integrations.",
      "Use a different LLM provider's SDK and translate the responses into Claude's API shape so the application can switch providers in the future.",
      "Skip the SDK and embed Claude calls in shell commands invoked from Python, so that the application runs the calls outside the main Python process."
    ],
    "answer": [
      "Use the Claude Python SDK and let it handle authentication, retries, and response parsing through its standard documented patterns for Python integrations."
    ],
    "explanation": "The Claude Python SDK provides a convenient abstraction over the API. Using the SDK allows the application to follow documented integration patterns and benefit from built-in handling for common concerns such as authentication, retries, and response parsing. This generally results in cleaner, more maintainable Python application code."
  },
  {
    "id": 90,
    "question": "Your Claude agent has access to a tool that retrieves customer records. A teammate has noticed that the agent occasionally calls the tool with arguments the schema does not declare, and the tool's downstream service returns an error each time. The teammate proposes loosening the schema so the tool accepts whatever arguments the model produces. How would you respond?",
    "options": [
      "Add a system prompt instruction telling the model to produce schema-conforming arguments, treating the prompt instruction as the primary mechanism for keeping the agent's tool calls valid.",
      "Keep the schema strict, validate arguments before dispatching, and return a structured error so the agent can retry.",
      "Remove the schema entirely and rely on the downstream service to reject invalid calls, treating the downstream service as the team's primary enforcement layer.",
      "Loosen the schema as the teammate proposed so the downstream service receives every call the agent makes during normal operation."
    ],
    "answer": [
      "Keep the schema strict, validate arguments before dispatching, and return a structured error so the agent can retry."
    ],
    "explanation": "The tool schema should remain strict and well-defined. Before sending a tool call to the downstream service, the application should validate the arguments against that schema. If validation fails, return a structured error that clearly indicates the problem and allows the agent to correct its arguments and retry. This prevents malformed requests from reaching downstream systems and provides a controlled recovery path."
  },
  {
    "id": 91,
    "question": "Your Claude application is producing inconsistent outputs for similar inputs, even when using the same model and prompt. You want to debug the issue systematically. Your debugging approach would...",
    "options": [
      "Lower the model's temperature and re-run the inconsistent inputs to determine whether the parameter change reduces output variability across runs.",
      "Retry every request that produces an unexpected output and log the results to identify whether repeated calls converge on a consistent response pattern.",
      "Assume inconsistent outputs reflect normal LLM non-determinism and document the variability as an accepted characteristic of the application's behavior.",
      "Capture full traces of input, system prompt, user messages, model output, and parameters, then analyze the differences between consistent and inconsistent runs."
    ],
    "answer": [
      "Capture full traces of input, system prompt, user messages, model output, and parameters, then analyze the differences between consistent and inconsistent runs."
    ],
    "explanation": "This is the strongest systematic debugging approach. Capturing the complete execution context allows the team to compare runs and identify differences in: Input and user messages System prompts Model/version Temperature and other parameters Tool calls or other application state Model outputs This helps distinguish expected model variation from actual application or configuration issues."
  },
  {
    "id": 92,
    "question": "You are building an agent that needs to call several internal APIs and a database in a structured, repeatable way. Your team has decided to use the Claude Agent SDK rather than build a custom loop. You are setting up the agent's tool definitions and execution loop. How would you set up the tools and execution loop?",
    "options": [
      "Use the SDK's tool interface and let the SDK handle the loop, dispatch, and history.",
      "Call the Messages API directly and let the model format its tool calls in plain text.",
      "Use the SDK's tool interface and loop, with conversation history stored in a separate team database.",
      "Use the SDK's tool interface and write the loop and history layer in the team's own code."
    ],
    "answer": [
      "Use the SDK's tool interface and let the SDK handle the loop, dispatch, and history."
    ],
    "explanation": "The Claude Agent SDK is designed to manage the agent execution loop, tool dispatch, and conversation history. The developer defines the required tools using the SDK's tool interface, while the SDK manages the execution process."
  },
  {
    "id": 93,
    "question": "Your Claude application's token costs have grown faster than expected. The team has not been tracking token usage by feature, so the team cannot identify which features are driving cost. The team is debating how to respona. How would you respond?",
    "options": [
      "Tell the team that cost growth is unavoidable as the application scales and that no investigation will change the trajectory of the application's cost over the next several quarters.",
      "Switch every feature to the smallest model to cut cost broadly across the application during normal operation.",
      "Reduce token usage uniformly across all features by half, applying the cut evenly across the application during normal operation.",
      "Add token usage tracking by feature to the application's logging so the team can identify which features drive cost before recommending changes."
    ],
    "answer": [
      "Add token usage tracking by feature to the application's logging so the team can identify which features drive cost before recommending changes."
    ],
    "explanation": "Tracking token usage by feature provides the data needed to identify the application's major cost drivers. Once the team understands which features consume the most tokens, it can make targeted decisions about prompts, models, context, caching, and other optimization strategies."
  },
  {
    "id": 94,
    "question": "Your Claude application produces good responses for typical inputs but struggles with edge cases. You have several labeled examples of edge-case inputs and the desired response for each. You want to use these examples to improve the model's handling of edge cases. What is the best way to use these examples?",
    "options": [
      "Embed the examples in a database for the model to find during inference.",
      "Add the labeled edge-case examples to the prompt as few-shot examples so the model can learn the pattern.",
      "Train a custom model on the edge-case examples and deploy that custom model in place of the team's current Claude integration.",
      "Tell users to avoid submitting the edge-case inputs to the application by adding warnings in the application's user interface."
    ],
    "answer": [
      "Add the labeled edge-case examples to the prompt as few-shot examples so the model can learn the pattern."
    ],
    "explanation": "Few-shot prompting provides the model with representative examples of inputs and their desired outputs. This helps Claude recognize the expected pattern and improve its handling of similar edge cases without requiring custom model training."
  },
  {
    "id": 95,
    "question": "You have just shipped a new Claude-powered application to production. The development phase is complete, and the system is now in active use by internal teams. The next phase of work for this system is...",
    "options": [
      "Retiring the system, since shipping is the final lifecycle stage for any application that reaches production.",
      "Running a formal post-deployment review that assesses the development phase before the team does any further work on the system.",
      "Operating and maintaining the system, including monitoring, responding to issues, and planning evolution.",
      "Handing the system over to a separate operations team that will manage it independently of the development team going forward."
    ],
    "answer": [
      "Operating and maintaining the system, including monitoring, responding to issues, and planning evolution."
    ],
    "explanation": "After deployment, the application enters the operation and maintenance phase. The team should monitor system performance, track costs and reliability, respond to incidents, evaluate model behavior, and plan future improvements."
  },
  {
    "id": 96,
    "question": "A teammate has asked how to extend Claude Code with a custom Skill that the team can invoke during sessions. The Skill consists of a set of instructions and a few support scripts the team wants Claude to be able to call when the Skill is loaded. Where is the right place to define the Skill?",
    "options": [
      "Define the Skill as a long inline instruction at the top of every CLAUDE.md file in the team's repositories so Claude has access to it on every session.",
      "Define the Skill inside the application's source code as a regular library module and call it from the application code instead of from Claude Code.",
      "Define the Skill in a Skills directory recognized by Claude Code, where Claude can discover and load it during sessions for the team's repositories.",
      "Define the Skill in a personal scratch directory on each developer's machine and load it manually before each Claude Code session that needs it."
    ],
    "answer": [
      "Define the Skill in a Skills directory recognized by Claude Code, where Claude can discover and load it during sessions for the team's repositories."
    ],
    "explanation": "Claude Code Skills are defined in the appropriate Skills directory structure. This allows Claude Code to discover the Skill and load its instructions and supporting resources when needed during a session."
  },
  {
    "id": 97,
    "question": "A teammate has asked how to extend Claude Code with a custom Skill that the team can invoke during sessions. The Skill consists of a set of instructions and a few support scripts the team wants Claude to be able to call when the Skill is loaded. Where is the right place to define the Skill?",
    "options": [
      "Define the Skill as a long inline instruction at the top of every CLAUDE.md file in the team's repositories so claude has access to it on every session.",
      "Define the Skill inside the application's source code as a regular library module and call it from the application code instead of from Claude Code.",
      "Define the Skill in a Skills directory recognized by Claude Code, where Claude can discover and load it during sessions for the team's repositories.",
      "Define the Skill in a personal scratch directory on each developer's machine and load it manually before each Claude Code session that needs it."
    ],
    "answer": [
      "Define the Skill in a Skills directory recognized by Claude Code, where Claude can discover and load it during sessions for the team's repositories."
    ],
    "explanation": "Claude Code Skills are defined in the appropriate Skills directory structure. This allows Claude Code to discover the Skill and load its instructions and supporting resources when needed during a session."
  },
  {
    "id": 98,
    "question": "You are designing an agent that handles a multi-step research task. You want the agent to break the task into smaller pieces, hand each piece to a focused subagent, and consolidate the results. The agent pattern you would apply is...",
    "options": [
      "An orchestrator and subagent pattern with specialized subagents assigned to each subtask.",
      "A memory pattern that stores the entire research history in advance, before any subtask begins execution.",
      "A context-window pruning pattern that drops each subtask's content after the agent moves on.",
      "A single tool-use loop that includes every tool the agent might need across all subtasks."
    ],
    "answer": [
      "An orchestrator and subagent pattern with specialized subagents assigned to each subtask."
    ],
    "explanation": "The orchestrator and subagent pattern is well suited for complex research tasks. The main agent breaks the overall task into smaller subtasks, delegates them to specialized subagents, and then consolidates their results into a final response."
  },
  {
    "id": 99,
    "question": "Your Claude application receives untrusted input from external sources. The team is establishing how the application should treat this untrusted input. Untrusted input would be...",
    "options": [
      "Validated and sanitized before being incorporated into prompts, and treated as data the model should not interpret as instructions.",
      "Treated identically to trusted input from internal sources, on the grounds that all input the application receives can be handled the same way.",
      "Routed through a separate Claude application with more lax security controls so the original application does not handle the untrusted input directly.",
      "Blocked entirely so the application accepts only trusted input, with no path for legitimate external input the application might process."
    ],
    "answer": [
      "Validated and sanitized before being incorporated into prompts, and treated as data the model should not interpret as instructions."
    ],
    "explanation": "Untrusted input should be treated as potentially malicious or misleading. The application should validate and sanitize it before using it in prompts and clearly separate it from trusted instructions. This helps reduce risks such as prompt injection and unintended model behavior."
  },
  {
    "id": 100,
    "question": "Your Claude application's outputs are inconsistent in format. The team's instructions are scattered across the system prompt and user messages, with some instructions stated only once and others repeated. How would you fix the inconsistency?",
    "options": [
      "Move all instructions into the user message so the application's behavior is controlled at the input point.",
      "Consolidate behavioral and format instructions in the system prompt and keep user messages focused on the user's input.",
      "Place each instruction wherever the developer who first wrote it found most natural, retaining the original intent.",
      "Repeat all instructions in both the system prompt and the user message so the model sees each instruction more than once."
    ],
    "answer": [
      "Consolidate behavioral and format instructions in the system prompt and keep user messages focused on the user's input."
    ],
    "explanation": "Application-level behavioral and formatting instructions should be centralized in the system prompt. User messages should primarily contain the user's task or data. This creates a clear separation between stable application instructions and variable user input, improving consistency and maintainability."
  },
  {
    "id": 101,
    "question": "Your team uses Claude Code across multiple repositories. You want the team's rules and general coding standards to apply to all repositories, and other rules to apply only to specific repositories. The team is currently duplicating instructions across every repository's CLAUDE.md file. How would you address this?",
    "options": [
      "Move all instructions to a separate documentation site that developers consult during Claude Code sessions across all repositories.",
      "Use a CLAUDE.md hierarchy that scopes general standards broadly and project-specific context within each repository's local CLAUDE.md.",
      "Stop using CLAUDE.md altogether and ask each developer to configure Claude Code manually for each project they work on.",
      "Use a single repository's CLAUDE.md as the central source of truth and link to it from every other repository's CLAUDE.md file."
    ],
    "answer": [
      "Use a CLAUDE.md hierarchy that scopes general standards broadly and project-specific context within each repository's local CLAUDE.md."
    ],
    "explanation": "A CLAUDE.md hierarchy allows instructions to be scoped appropriately. General coding standards can apply broadly, while repository-specific instructions can remain in the local repository's CLAUDE.md file. This avoids unnecessary duplication while keeping project-specific context close to the codebase."
  }
]
