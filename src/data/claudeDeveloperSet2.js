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
    "explanation": "A. Supply chain attacks on the Claude SDK because the SDK itself is the only point of vulnerability that a Claude application introduces beyond traditional web application threats. Incorrect The SDK is not the only potential source of risk. Claude applications introduce additional model-specific threats that must be considered in the threat model. B. Prompt injection, data leakage from prompts or context, jailbreak attempts, and unsafe model output that bypasses application controls. Correct These are important AI-specific threat categories. Prompt injection can manipulate the model's behavior. Data leakage can expose sensitive information contained in prompts, context, or connected systems. Jailbreak attempts try to bypass safety or application restrictions. Unsafe model output can cause problems if downstream applications trust or execute model-generated content without appropriate validation. These threats should be considered in addition to traditional application security controls. C. Network-level denial of service and physical infrastructure attacks, because these categories cover the threats most likely to affect any Claude application in production. Incorrect Network and infrastructure threats can still matter, but they are not AI-specific threats. The question asks for threats introduced or significantly shaped by the use of Claude. D. Cross-site scripting and SQL injection, because these traditional web application threats apply with equal weight to any application that uses Claude in any way. Incorrect XSS and SQL injection remain relevant where applicable, but they are traditional application-security threats, not AI-specific categories."
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
    "explanation": "A. The Batch API, which delivers full responses after a delay suitable for non-interactive workloads. Incorrect The Batch API is designed for asynchronous, non-interactive processing. It does not provide the incremental delivery needed for a real-time user experience. B. Streaming responses, which deliver tokens incrementally as the model generates them so users see output progressively. Correct Streaming responses allow the application to receive model output incrementally as it is generated. The UI can display the response progressively instead of waiting for the complete response. This is useful for chat interfaces, interactive assistants, and other real-time experiences. C. Prompt caching, which speeds up the cost profile of future requests and does not affect the delivery timing of the first response. Incorrect Prompt caching can improve efficiency and reduce repeated processing costs, but it is not a mechanism for progressively delivering model output. D. Structured JSON output, which delivers responses only after the model has finalized the JSON shape across the entire response. Incorrect Structured output concerns the format and schema of the response, not incremental delivery to the user."
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
    "explanation": "A. Keeping the deprecated parameter in place while writing a wrapper function around it to insulate the rest of the codebase from the eventual change. Incorrect A wrapper can reduce future coupling, but it does not address the immediate need to migrate away from a deprecated API parameter. Waiting increases the risk of a rushed migration later. B. Migrating all 40 call sites in a single change near the removal date to ensure the deprecated parameter continues to work as long as possible. Incorrect Waiting until the removal date creates unnecessary risk. A large last-minute migration can introduce bugs with little time for testing and troubleshooting. C. Adding regression tests to cover the parameter's behavior, then migrating call sites in batches that you validate against regression tests. Correct This is the safest approach. Regression tests establish the expected behavior, while migrating the 40 call sites in small, validated batches makes it easier to detect semantic differences introduced by the replacement parameter and quickly isolate problems. D. Swapping all 40 call sites in a single change right away to prevent drawn-out migration work that will delay ongoing functioning. Incorrect Migrating immediately is good, but changing all 40 locations at once without first establishing regression coverage increases the blast radius. The replacement has slightly different semantics, so incremental migration and validation are safer."
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
    "explanation": "A. Truncate every conversation to the last two messages so that token usage stays low and costs remain predictable across the application's normal operation. Incorrect This reduces token usage but can remove important context from the conversation. It is a blunt solution and may significantly reduce response quality. B. Summarize each conversation after every turn and replace the full history with the summary on the next request, reducing token count at the cost of fidelity. Incorrect Summarization can reduce tokens, but it introduces information loss and additional processing. It is not the best first approach when the goal is to efficiently reuse repeated conversation context. C. Use prompt caching to reuse the static portions of the conversation context across turns instead of paying for them at the normal input-token rate on every request the application sends. Correct Prompt caching is designed for situations where the same context is repeatedly sent across requests. With multi-turn conversations, previously established context can be cached and reused, reducing the effective cost of repeatedly processing the same input context. D. Switch to the Batch API for every turn so the per-call cost is reduced, treating the batch as the team's primary cost-control mechanism for multi-turn work. Incorrect The Batch API is intended for asynchronous workloads where requests can be processed in batches. It is not an appropriate replacement for normal interactive multi-turn conversations."
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
    "explanation": "A. A system prompt embedded in every Claude Code conversation by each developer at the start of every session in the project. Incorrect A system prompt entered manually by each developer is not a reliable shared project configuration. It is repetitive, inconsistent, and does not persist automatically across the repository. B. Environment variables that each developer sets on their own machine when working with Claude Code on the project. Incorrect Environment variables are generally machine-specific. They do not provide a shared project configuration that automatically stays consistent across all developers. C. A shared spreadsheet that lists configuration values for team members to reference and update by hand as the project evolves. Incorrect A spreadsheet is manual and is not integrated with Claude Code's project configuration. It can easily become outdated or inconsistent. D. The settings.json file, scoped at the project level so the configuration applies consistently across developers and persists with the repository. Correct The project-level settings.json mechanism provides a centralized configuration for Claude Code. It can define project-specific settings such as permissions, model preferences, and other behavior, allowing the configuration to be version-controlled and shared consistently with the repository."
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
    "explanation": "A. Notify downstream system owners that a change is coming and schedule the rollout for the following week, without conducting a formal impact assessment. Incorrect Notification alone is not enough. The team needs to understand the technical and behavioral impact of the prompt changes on each dependent system before deployment. B. Document the prompt version changes in the application changelog and proceed with the rollout, treating the staging test results as sufficient evidence of impact across all downstream systems. Incorrect Staging tests do not necessarily cover every downstream integration or its expectations. Different systems may depend on specific output formats, fields, or behaviors. C. Limit the rollout to systems that were explicitly included in staging testing, and defer all other downstream systems until a later release cycle. Incorrect This avoids some risk but does not properly manage the overall change. Systems outside staging still need an impact assessment before they can safely consume the new configuration. D. Assess the configuration impact on each downstream system before rolling out, and coordinate with downstream system owners as needed. Correct Before deployment, the team should perform a downstream impact assessment to identify compatibility risks, behavioral changes, and dependencies. Coordinating with system owners ensures that affected teams understand the changes and can validate or prepare their systems."
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
    "explanation": "A. Approve the pull request and add the missing pieces yourself in a follow-up commit so the teammate can move on to other work immediately. Incorrect Approving incomplete production code creates technical debt and makes responsibility for important quality requirements unclear. The missing pieces should be addressed before approval. B. Approve the pull request as-is, on the grounds that the feature works in the happy path and the missing pieces can be added in follow-up commits. Incorrect A successful happy path is not sufficient for a Claude-powered production feature. API failures, configuration changes, and integration regressions need to be handled and tested. C. Request changes that move prompt and model configuration to a configurable location and add tests, treating the missing error handling as a follow-up release item. Incorrect Moving configuration and adding tests are good improvements, but error handling for Claude API failures is also essential. It should not be deferred when reviewing a production feature. D. Request changes that move prompt and model configuration to a configurable location, add error handling for Claude API failures, and add tests for the integration. Correct This addresses the three major concerns: Configurable prompts and models → easier maintenance, testing, and model/prompt updates. Error handling → prevents API failures from causing uncontrolled application failures. Integration tests → verify that the Claude feature works correctly and continues working as the code evolves."
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
    "explanation": "A. Document the standards in a separate wiki page maintained outside the repository so the documentation stays decoupled from the source code. Incorrect An external wiki may be useful for general documentation, but Claude Code will not automatically have the project-specific instructions available from it. Keeping the guidance outside the repository also makes it harder to version alongside the code. B. Configure Claude Code through environment variables that each developer sets on their own machine when they begin working in the repository. Incorrect Environment variables are primarily developer-or machine-specific. They do not provide a shared, repository-level source of project instructions. C. Initialize Claude Code in the repository and document the standards and project-specific context in a CLAUDE.md file at the repository root. Correct CLAUDE.md is designed to provide persistent project instructions and context to Claude Code. Placing it at the repository root allows the team to keep coding standards, preferred libraries, workflows, and project-specific guidance together with the repository. D. Add the coding standards and project context to the repository's existing README file and direct developers to reference it when starting Claude Code sessions. Incorrect The README is useful for human project documentation, but CLAUDE.md is specifically intended for Claude Code instructions and project context. Using the dedicated file makes those instructions more directly available to Claude Code."
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
    "explanation": "A. A manager and supervisor pattern with isolated context per subagent, where the top-level agent coordinates specialized subagents that each maintain their own conversation history and tool list. Correct The top-level agent acts as the manager/coordinator, routing tasks to specialized subagents such as flights, hotels, and transportation. Each subagent has its own tools and isolated context, while the manager combines their results into the final itinerary. B. A manager and supervisor pattern with shared context, where the top-level agent and the subagents all share a single conversation history that grows as the request flows through the system. Incorrect The diagram explicitly states that each subordinate component has its own conversation history that is not shared. Therefore, this is an isolated-context architecture rather than shared context. C. A pipeline pattern, where each component processes the user request in sequence and passes the full conversation history along with the request to the next component in the pipeline. Incorrect A pipeline passes work sequentially from one component to the next. Here, the top-level component coordinates specialized subagents and reconciles their results, which is characteristic of a manager/supervisor architecture. D. A retrieval-augmented pattern, where the top-level component retrieves relevant context from the subordinate components' indexed data stores before generating each response. Incorrect There is no indication that the system is retrieving information from indexed data stores. The subordinate components are specialized agents with their own tools and context, not retrieval sources."
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
    "explanation": "A. Use multi-shot prompting by including the labeled examples in the prompt so Claude can match the desired output format on each request. Correct Providing several labeled examples directly in the prompt is few-shot/multi-shot prompting. The examples demonstrate the expected input-output pattern and help Claude consistently follow the desired format without requiring model training. B. Use zero-shot prompting and rely on the model's general capability to produce the desired output format consistently across all incoming requests. Incorrect Zero-shot prompting provides no examples. Since labeled examples are already available, using them can provide stronger guidance for the desired behavior and format. C. Embed the examples in a database and retrieve them at runtime as reference material for the team. Incorrect Simply storing examples in a database does not automatically guide Claude. They would need to be retrieved and incorporated into the model's context. For a small set of well-labeled examples, including them directly in the prompt is simpler and more appropriate. D. Train a custom model on the labeled examples before deployment so that the application does not need to include the examples in any prompt during operation. Incorrect A small set of examples generally does not justify custom model training. Few-shot prompting is the appropriate approach when you have a limited number of examples and want to demonstrate the desired behavior."
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
    "explanation": "A. Duplicate CLAUDE.md and settings.json files in multiple repositories to provide redundancy, on the grounds that a single source of truth is risky for project configuration. Incorrect Duplicating configuration across repositories can create inconsistencies and configuration drift. A project should have a clear source of truth rather than maintaining multiple competing copies. B. Version-control CLAUDE.md and settings.json files in a separate repository from the project's source code, so configuration evolves independently from the application code over time. Incorrect Separating project configuration from the application code makes it harder to review configuration changes in the context of the code they affect and can cause version mismatches. C. Version-control CLAUDE.md alongside the project's source code and settings.json files in a separate repository from the project's source code. Incorrect This splits related configuration across different repositories. It reduces traceability and makes coordinated changes more difficult to review and maintain. D. Version-control CLAUDE.md and settings.json files alongside the project's source code, with changes reviewed through standard pull request workflows the team applies. Correct Keeping the configuration with the project source code provides a clear source of truth. Version control preserves the history of changes, while pull request reviews allow the team to inspect and approve configuration changes before they are merged."
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
    "explanation": "A. Increase the agent's timeout to several hours so that interruptions become rare enough to ignore in practice. Incorrect Increasing the timeout does not provide true resumability. If the process crashes or is otherwise interrupted, the agent still has no mechanism to recover its previous progress. B. Apply a checkpointing pattern that persists the agent's intermediate state and reloads that state when resuming an interrupted task. Correct A checkpointing pattern periodically saves the agent's intermediate state at defined checkpoints. If execution is interrupted, the system can reload the most recent persisted state and continue from there instead of restarting the entire task. C. Run two copies of the agent in parallel for every task and use whichever one finishes first as the source of truth. Incorrect Running duplicate agents increases resource usage and does not provide reliable state recovery. Both agents could fail or produce different results. D. Restart the task from the beginning whenever a process is interrupted. Incorrect Restarting from the beginning loses completed work and is inefficient for tasks that take 30–60 minutes. It does not provide the requested checkpoint-based recovery."
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
    "explanation": "A. Add retry logic to each subagent so that when a tool call fails, the subagent retries automatically before escalating — and configure each subagent to log its tool calls and outputs to a shared trace so the team can audit redundancy and contradictions after the fact. Incorrect Retries can help with transient failures, but they do not address the core problems of redundant calls, token-budget violations, or contradictory outputs. Logging helps with diagnosis, but the system also needs preventative controls. B. Give each subagent read access to the other subagents' outputs so they can identify and resolve contradictions without routing back through the primary agent. Incorrect This can increase coupling between subagents and make the architecture harder to control. The primary agent should remain responsible for orchestration and validation rather than allowing independent subagents to resolve conflicts arbitrarily. C. Strengthen the primary agent's management layer to enforce per-subagent tool budgets, validate outputs against a defined schema before passing them forward, and establish explicit handoff contracts between stages. Correct The management layer should provide centralized orchestration and guardrails. Per-agent tool/token budgets control resource usage, schema validation catches malformed or unexpected outputs, and explicit handoff contracts reduce ambiguity and contradictions between stages. D. Collapse the three subagents into a single large-context model call that handles retrieval, analysis, and generation in one pass. Incorrect Combining everything into one model call removes useful specialization and does not guarantee reliable tool usage or output validation. It is an architectural change that does not directly solve the observed coordination failures."
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
    "explanation": "A. Switch to a different agentic framework that advertises automatic context-window management as a built-in feature. Incorrect Changing frameworks does not directly solve the underlying context-management problem. The application still needs a strategy for keeping important information accessible as the context grows. B. Reduce the number of tool calls per task by combining several existing tools into larger, multi-purpose tools. Incorrect Combining tools may reduce the number of calls, but larger tools can introduce unnecessary complexity and do not directly address the problem of older information being buried. C. Increase the context window further so all tool outputs from every prior step remain in full detail throughout the task. Incorrect The problem is not simply the size of the context window. Even when all messages fit, important information can become less salient as the conversation grows. Increasing the window does not solve this effectively. D. Apply a context-management pattern that summarizes or prunes older tool outputs while preserving the active task state. Correct A context-management strategy keeps the information needed for the current task readily accessible. Older tool results can be summarized or pruned while important decisions, state, and active findings are retained. This reduces context clutter and helps the agent stay focused on relevant information."
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
    "explanation": "A. Tell the teammate that the variation depends on which Claude model serves the request, and recommend pinning the application to a single model version to make the output behavior consistent. Incorrect Model selection can influence output behavior, but this does not establish that the request construction is correct or explain the fundamental source of output variation. B. Explain that LLMs generate output token by token, and variation in how prompt content appears in output is a property of generation, not a bug in request construction. Correct LLMs generate responses probabilistically, token by token. Depending on the generation process and context, Claude may repeat prompt content, paraphrase it, or omit it. Such variation does not automatically indicate that the application constructed the request incorrectly. C. Confirm that the variation is a bug in the application's request construction and start investigating which part of the application is producing the inconsistent prompt text. Incorrect Output variation alone is not sufficient evidence of a request-construction bug. LLM generation is inherently capable of producing different valid outputs from the same or similar inputs. D. Tell the teammate that the variation is caused by the application sending two different prompts on different runs and propose a code change that pins the system prompt to a single version. Incorrect There is no evidence that the application is sending different prompts. The observed variation can occur naturally because of LLM generation behavior."
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
    "explanation": "A. Augmenting the context with all available content at every step so each step has access to the entire prior history of the workflow during its reasoning. Incorrect Providing the full history to every step defeats the purpose of context isolation. It can also increase context size and expose information that a particular step does not need. B. Using a single global prompt that applies to every step in the workflow no matter what each step is reasoning about during its run. Incorrect A single global prompt does not allow different workflow steps to have different, deliberately scoped context. C. Context isolation through subagents or multi-step agentic workflows that scope each step's context to only what the step needs. Correct Context isolation limits each subagent or workflow step to the information required for its specific task. This reduces unnecessary context, prevents irrelevant information from influencing reasoning, and helps maintain clearer boundaries between different stages. D. Embedding the full prior history in each step regardless of whether the step needs the prior history for its reasoning. Incorrect This is the opposite of context isolation. Passing the entire history to every step increases context clutter and exposes information that may be irrelevant to that step."
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
    "explanation": "A. Suggest replacing the descriptions with example calls embedded in the tool definition, treating example calls as a complete substitute for the prose description. Incorrect Examples can help demonstrate usage, but they are not a complete substitute for a clear tool description. The model needs explicit information about the tool's purpose, scope, inputs, outputs, and appropriate use. B. Agree with the teammate because tool names are sufficient for the model to choose the right tool on every request the agent handles. Incorrect A descriptive name alone may not provide enough information to distinguish between tools with similar purposes or determine when a particular tool should be called. C. Explain that the model uses the tool description to decide when to call the tool, and descriptions disambiguate cases where the tool name is not enough. Correct Tool descriptions provide important semantic guidance to the model. They help Claude understand the tool's purpose, appropriate use cases, expected arguments, and boundaries. Detailed descriptions are especially valuable when multiple tools have overlapping functionality. D. Suggest moving the descriptions out of the tool definition and into a separate documentation file the team maintains so the tool definitions stay short and the descriptions remain available. Incorrect Documentation may help developers, but information stored outside the tool definition is not automatically available to Claude when it needs to select a tool. The relevant description should be provided as part of the tool definition."
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
    "explanation": "A. Page on every error, on the grounds that paging guarantees that no error is missed by the team during normal operation across the application's lifecycle. Incorrect Paging on every error creates alert fatigue and can cause important incidents to be overlooked. Not every error requires immediate human intervention. B. Disable logging for any error that does not page, treating non-paging errors as not worth recording for later review either. Incorrect Non-paging errors can still provide valuable information for troubleshooting, trend analysis, and identifying recurring problems. They should remain logged even when they do not require immediate action. C. Categorize errors by severity based on impact and recoverability, then route each category to the appropriate channel for paging or logging. Correct A good error-handling strategy classifies errors based on factors such as impact, severity, and recoverability. Critical or unrecoverable failures can trigger an on-call page, while lower-severity or recoverable errors can be logged for monitoring and later investigation. D. Log every error with the same severity, on the grounds that differentiating severity adds complexity that does not pay off in most application setups over time. Incorrect Treating every error identically makes it difficult to distinguish critical incidents from routine failures and prevents the team from prioritizing responses effectively."
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
    "explanation": "A. Page on every error, on the grounds that paging guarantees that no error is missed by the team during normal operation across the application's lifecycle. Incorrect Paging on every error creates alert fatigue and can cause important incidents to be overlooked. Not every error requires immediate human intervention. B. Disable logging for any error that does not page, treating non-paging errors as not worth recording for later review either. Incorrect Non-paging errors can still provide valuable information for troubleshooting, trend analysis, and identifying recurring problems. They should remain logged even when they do not require immediate action. C. Categorize errors by severity based on impact and recoverability, then route each category to the appropriate channel for paging or logging. Correct A good error-handling strategy classifies errors based on factors such as impact, severity, and recoverability. Critical or unrecoverable failures can trigger an on-call page, while lower-severity or recoverable errors can be logged for monitoring and later investigation. D. Log every error with the same severity, on the grounds that differentiating severity adds complexity that does not pay off in most application setups over time. Incorrect Treating every error identically makes it difficult to distinguish critical incidents from routine failures and prevents the team from prioritizing responses effectively."
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
    "explanation": "A. As a custom tool embedded in this team's agent only, with other teams able to copy the implementation into their own agents when they need the capability. Incorrect Copying the implementation creates duplication and maintenance overhead. Each team would have to maintain its own version, making updates and consistency more difficult. B. As a shared library that each team imports into its own Claude application code, with each team responsible for keeping the library up to date in its integration. Incorrect A shared library can provide code reuse, but each consuming team still needs to manage integration and updates. This is less suitable when the capability should be independently invoked as an agent capability across teams. C. As a Skill or MCP server because both are purpose-built for cross-team reuse independently by each consuming team. Correct Skills and MCP servers are designed to make reusable capabilities available across different Claude applications or teams. This allows teams to consume the capability independently while avoiding duplicated implementations. D. As a wrapper around an existing built-in tool that adds the missing functionality, on the grounds that built-in tools cover the reuse pattern when extended carefully. Incorrect Wrapping a built-in tool does not inherently provide a cross-team reusable capability. It still needs an appropriate distribution and integration mechanism."
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
    "explanation": "A. STDIO and HTTP simultaneously for redundancy, with the team running two communication patterns at the same time across Claude Code sessions. Incorrect Using both communication methods adds unnecessary complexity. The communication pattern should match the deployment scenario rather than adding redundancy without a specific requirement. B. HTTP on the grounds that HTTP is preferable to STDIO in any context the application might encounter during normal operation. Incorrect HTTP is useful for network-based communication, but it is not automatically preferable in every scenario. For a locally running process, STDIO is often simpler and more appropriate. C. HTTP polling against the MCP server, treating HTTP as a substitute for the standard MCP communication patterns. Incorrect HTTP polling introduces unnecessary network communication and is not the appropriate pattern for a locally invoked process when direct process communication is available. D. STDIO because STDIO is well-suited to local process communication and avoids unnecessary network setup. Correct For a Claude Code session running locally, STDIO is a natural choice for communicating with a locally running ACP server. It provides direct process-to-process communication without requiring network configuration, ports, or HTTP infrastructure."
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
    "explanation": "A. Use distinct keys for each environment so a compromise in one environment does not affect the others during normal operation across the application's lifecycle. Correct Each environment should have its own API key. Development, staging, and production should be isolated so that if a key is exposed or compromised in one environment, the attacker cannot automatically access the others. This also improves access control, auditing, rotation, and incident response. B. Rotate the same key across environments at random intervals on the grounds that random rotation provides isolation between environments without requiring distinct keys. Incorrect Randomly rotating the same key does not provide environment isolation. If the key is compromised, changing its rotation schedule does not prevent access across environments while that key is valid. C. Use the same key across all environments for simplicity and treat the propagation of any compromise as a known operational tradeoff for the team's key management approach. Incorrect Using one key everywhere creates a large blast radius. A development compromise could potentially affect staging and production, making the security boundary between environments ineffective. D. Use a single development key everywhere on the grounds that production keys are too risky to deploy across the application's three environments during normal operation. Incorrect A development key should not be reused across environments. Production requires its own appropriately protected credentials and should have stricter access controls and isolation."
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
    "explanation": "A. Tell the stakeholder the variation is a bug that the team will fix in the next release of the application, then create a work ticket to fix the bug. Incorrect Variation between runs is not automatically a software bug. LLMs can produce different outputs from the same prompt because generation involves probabilistic sampling. B. Tell the stakeholder the variation comes from network latency and that switching to a faster network connection will produce more consistent results across runs. Incorrect Network latency affects response time, not the model's fundamental output variation. A faster network connection will not make model generation deterministic. C. Explain that LLMs are non-deterministic by default due to sampling, and describe how the application handles this through validation, retries, or temperature adjustment. Correct LLMs can generate different responses because token selection involves sampling. This is normal behavior and does not necessarily indicate an application problem. Applications can manage variation through techniques such as output validation, controlled retries, appropriate temperature settings, structured outputs, and evaluation tests. D. Tell the stakeholder the variation is caused by Claude being updated continuously by Anthropic, and that switching to a fixed model snapshot will eliminate the variation entirely. Incorrect Model updates can sometimes affect behavior, but they are not the primary explanation for variation between two consecutive requests. Even with a fixed model version, probabilistic generation can produce different outputs."
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
    "explanation": "A. Ask the product team to specify quality, latency, and cost targets, then select the model whose tradeoffs best fit those targets. Correct Model selection should be based on clear quality, latency, and cost requirements. Different Claude models offer different tradeoffs, so \"best results\" is too vague to make a sound production decision. Once the team defines measurable targets, you can evaluate models against those requirements and choose the best fit. B. Run every Claude model on a representative sample and pick whichever scores best on a generic benchmark. Incorrect A generic benchmark may not reflect the application's actual requirements. A model with the highest benchmark score may have unacceptable cost or latency for the product. C. Choose a mid-tier model and ship the feature, because mid-tier models work for most use cases without specified targets. Incorrect Choosing a model without defined requirements is arbitrary. The appropriate model depends on the feature's quality, performance, and budget constraints. D. Choose the largest, highest-capability Claude model, on the grounds that \"best results\" is most likely to mean highest quality. Incorrect The most capable model may provide higher quality, but it can also introduce higher cost or latency. Without knowing the team's targets, there is no basis for assuming maximum capability is the correct tradeoff."
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
    "explanation": "A. Use the latest available model version everywhere and stop pinning model versions, on the grounds that pinning adds maintenance overhead the team should aim to reduce. Incorrect Using the latest version everywhere can introduce unexpected behavior or regressions. Model version pinning provides reproducibility and controlled upgrades. B. Move all configuration into hardcoded application code to reduce reliance on external configuration sources that are difficult to track over time. Incorrect Hardcoding configuration makes environment-specific changes difficult to manage and review. It also increases the risk of inconsistent deployments. C. Consolidate the configuration into a version-controlled system documenting model version pinning, prompt versioning, and plugin dependencies for each environment. Correct A version-controlled configuration system provides a single, auditable source of truth. It should clearly document: Model versions Prompt versions Plugin/dependency versions Environment-specific settings This improves reproducibility, change tracking, rollback, and controlled deployments. D. Standardize all environments to use the same configuration values to eliminate the differences between development, staging, and production. Incorrect Development, staging, and production can legitimately require different configurations. The goal is not to make them identical, but to make their differences explicit, documented, and controlled."
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
    "explanation": "A. Use the latest available model version everywhere and stop pinning model versions, on the grounds that pinning adds maintenance overhead the team should aim to reduce. Incorrect Using the latest version everywhere can introduce unexpected behavior or regressions. Model version pinning provides reproducibility and controlled upgrades. B. Move all configuration into hardcoded application code to reduce reliance on external configuration sources that are difficult to track over time. Incorrect Hardcoding configuration makes environment-specific changes difficult to manage and review. It also increases the risk of inconsistent deployments. C. Consolidate the configuration into a version-controlled system documenting model version pinning, prompt versioning, and plugin dependencies for each environment. Correct A version-controlled configuration system provides a single, auditable source of truth. It should clearly document: Model versions Prompt versions Plugin/dependency versions Environment-specific settings This improves reproducibility, change tracking, rollback, and controlled deployments. D. Standardize all environments to use the same configuration values to eliminate the differences between development, staging, and production. Incorrect Development, staging, and production can legitimately require different configurations. The goal is not to make them identical, but to make their differences explicit, documented, and controlled."
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
    "explanation": "A. Use a single Claude call for triage and then use a non-Claude rule-based system for response generation, on the grounds that rule-based systems are more reliable for drafting replies. Incorrect A rule-based system may be useful for specific deterministic tasks, but there is no general reason to replace Claude for response drafting. The two stages have different requirements and can both benefit from appropriately designed Claude calls. B. Use multiple Claude calls in parallel that each draft a complete ticket reply, then have a fourth Claude call select the best one to send to the customer. Incorrect This introduces unnecessary complexity and additional model calls. The scenario does not require generating multiple independent replies and selecting among them. C. Use separate Claude calls for triage and response, because each stage has distinct inputs, outputs, and success criteria that benefit from focused prompts. Correct Triage and response generation have different objectives: Triage: classify the ticket accurately and produce structured classification information. Response: use the ticket and triage information to draft an appropriate customer-facing reply. Separating them allows each Claude call to have a focused prompt, clear output format, independent validation, and stage-specific success criteria. It also makes debugging and improving one stage easier without unnecessarily affecting the other. D. Use a single Claude call for both stages, on the grounds that a single call is cheaper than multiple calls in any production Claude application setup. Incorrect A single call is not automatically cheaper or better. Combining unrelated stages can make prompts and outputs more complex and harder to validate. Cost should be evaluated against token usage, latency, quality, and reliability, rather than assuming fewer calls always means lower cost."
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
    "explanation": "A. Switch to a deterministic workflow that handles billing, shipping, and product issues in a fixed sequence. Incorrect A fixed sequence can work for predictable workflows, but customer tickets may contain different combinations of issues. It can become rigid and does not provide specialized reasoning for each domain. B. Add detailed prompting that instructs the agent to track which sub-issues have been resolved and which remain. Incorrect Better prompting may help, but the problem is primarily architectural. Relying only on instructions to track multiple independent issues can still lead to repeated or missed work. C. Introduce an orchestrator agent that delegates billing, shipping, and product sub-issues to dedicated subagents. Correct An orchestrator-agent architecture is well suited to this scenario. The orchestrator can break the ticket into separate sub-issues and delegate them to specialized subagents: Billing subagent → handles billing questions. Shipping subagent → handles delivery/shipping issues. Product subagent → handles product-related issues. Orchestrator → tracks which issues are assigned and completed, then combines the results. This provides context isolation, specialization, clearer state tracking, and reduced duplication. D. Increase the size of the agent's context window so it can hold the full ticket history at once. Incorrect A larger context window does not inherently solve the problem of tracking task state or avoiding repeated work. The agent can still lose track of which sub-issues have been completed even when all information fits within the context."
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
    "explanation": "A. Scope hooks to only the high-risk actions, such as destructive operations or sensitive data access, and remove hooks from low-risk actions to balance safety with performance. Correct Hooks should be applied selectively to actions that actually require enforcement or additional checks. High-risk operations, such as destructive actions or sensitive-data access, benefit most from hook-based controls. Removing unnecessary hooks from low-risk actions reduces latency and overhead while maintaining important security controls. B. Disable all hooks while the team re-scopes them, treating the period of no hook enforcement as a temporary state during the re-scoping work. Incorrect Disabling all hooks creates an unnecessary security and safety gap. High-risk actions could execute without the protections that the hooks provide. C. Disable the agent during peak hours so the hook overhead does not slow the application down during the busiest periods of the day across the application's operation. Incorrect Disabling the agent is not an appropriate solution to hook performance problems. The correct approach is to scope hooks appropriately, rather than sacrifice availability. D. Replace hooks with system prompt instructions on the grounds that prompt instructions can produce the same enforcement effect that hooks produce on the agent's actions. Incorrect Prompt instructions guide model behavior but are not equivalent to programmatic enforcement hooks. High-risk actions require reliable controls that are enforced outside the model's instructions."
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
    "explanation": "The application should establish a clear data boundary before sending information to Claude. Sensitive details should be filtered, masked, or redacted before the API request; relying on prompts or post-send logging does not prevent the data from being transmitted."
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
    "explanation": "Context engineering techniques such as pruning, summarization, compaction, and preserving active task state help keep the most relevant information accessible while reducing unnecessary context. The correct approach is to reduce older tool output while preserving active task state and important constraints."
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
    "explanation": "A. A graph-based pattern that lets the agent move between subtasks based on the state of each claim, with each subtask evaluated against its own criteria. Correct A graph-based agent pattern is ideal when a workflow has multiple specialized stages and may need to branch, loop, or return to an earlier stage based on the current state. Here, the agent can move between: Fact Extraction → Eligibility Evaluation → Decision and, when necessary: Eligibility Evaluation → Fact Extraction → Eligibility Evaluation Each subtask can also have its own success criteria and validation, making the workflow more controlled and reliable. B. A streaming pattern that emits partial decisions as the agent processes each claim, refining the output until a final decision emerges from the stream. Incorrect Streaming controls how output is delivered, not how a complex workflow moves between subtasks. It does not provide the required state-based branching and iteration. C. A single tool-use loop pattern that gives one agent access to all the tools needed for fact extraction, eligibility evaluation, and decision-making. Incorrect A single tool-use loop can provide access to all capabilities, but it does not explicitly model the distinct stages, state transitions, and return paths required by this workflow. D. A linear chain pattern that processes every claim through fact extraction, then eligibility evaluation, then decision, with no return paths between subtasks. Incorrect A linear chain assumes the workflow always follows the same sequence. This scenario explicitly states that some claims require iteration between fact extraction and eligibility evaluation, so a pattern without return paths is unsuitable."
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
    "explanation": "A. Build two parallel implementations of every call, one for the direct Anthropic API and one for Bedrock, and pick the faster one at runtime. Incorrect Maintaining two implementations adds unnecessary complexity and does not address the contractual requirement. The application should use the required provider path. B. Build the application against the direct Anthropic API now and migrate to Bedrock in a follow-up release once the team has more experience with the Bedrock API. Incorrect This would initially violate the enterprise requirement. The architecture should account for the required Bedrock integration from the beginning rather than treating compliance as a later migration. C. Configure the application to invoke Claude through the Bedrock-compatible API path while keeping the application's logic provider-agnostic. Correct The application should route Claude requests through Amazon Bedrock as required by the contract while keeping business and application logic as independent from the underlying provider integration as practical. This approach satisfies the contractual constraint and makes the application easier to maintain or adapt if the underlying model provider or access path changes later. D. Build the application against the direct Anthropic API and ignore the contractual requirement to route Claude calls through Amazon Bedrock. Incorrect Ignoring a contractual requirement creates compliance, operational, and potentially legal risks. The architecture must respect the mandated API path."
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
    "explanation": "A. Increase the context window size so all turns of the conversation remain visible to the model in full detail. Incorrect A larger context window does not solve the underlying problem. Keeping more stale information available can actually make irrelevant content compete with current task information. B. Reset the conversation after every turn so the model loses all prior turns when generating a response. Incorrect Resetting after every turn removes useful context and prevents the model from maintaining necessary conversation state. C. Apply compaction to summarize older portions of the conversation so the gist remains while the specifics carry less weight. Correct Compaction reduces context drift by summarizing older conversation content while preserving its important information. This keeps the overall gist and relevant state available without allowing outdated details to dominate the active context. This is especially useful for long-running agentic conversations where context grows over many turns. D. Truncate the conversation so the model sees only the most recent turn during each subsequent response. Incorrect This is too aggressive because it discards potentially important context. The model may lose information needed to understand the current task or maintain continuity."
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
    "explanation": "A. Repeated short-lived HTTP polling requests, where the application opens a new HTTP connection each time it checks for updates. Incorrect Polling repeatedly creates separate requests and does not maintain a persistent connection. It can also introduce latency and unnecessary network overhead for real-time updates. B. A WebSocket, because WebSockets are designed for bidirectional, persistent, real-time communication between the client and the streaming service. Correct WebSockets are designed for persistent, real-time communication. Once established, the connection remains open and both the client and server can exchange messages without repeatedly creating new HTTP connections. This makes WebSockets appropriate when the application needs continuous, low-latency updates. C. A single long HTTP request the server holds open indefinitely, with no standard WebSocket framing on the connection. Incorrect A long-lived HTTP request can be used for certain streaming patterns, but it is not the general-purpose bidirectional persistent communication mechanism described in the question. WebSockets are the better fit for this requirement. D. File-based communication where the service writes new updates to disk and the application polls the file system for changes. Incorrect File polling is inefficient for real-time communication and does not provide a persistent network connection between the application and streaming service."
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
    "explanation": "A. The SDK provides default retry behavior for transient errors up to a fixed number of attempts, and this behavior is not configurable. Incorrect The SDK does provide default retry behavior, but the claim that the behavior is not configurable is incorrect. Applications can adjust retry behavior when needed. B. The SDK provides default retry behavior for network errors but surfaces rate-limit responses directly to the application code, which must implement its own retry logic for those cases. Incorrect The SDK can also provide retry handling for rate-limit responses, so application code does not necessarily need to implement separate retry logic for every transient condition. C. The SDK logs transient errors to a default error stream and continues execution without retrying, leaving the application code responsible for detecting and responding to failed calls. Incorrect The SDK does not simply log transient failures and continue without attempting recovery. It provides built-in retry behavior for many transient errors. D. The SDK provides default retry behavior for many transient errors, and the application code can configure or extend that behavior as needed. Correct The Claude SDK provides default retry behavior for many transient failures, such as temporary network problems and rate-limit responses. Developers can also configure retry behavior when the application's requirements call for different limits or handling. This reduces the amount of retry logic that application developers need to implement themselves while still allowing application-specific control."
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
    "explanation": "A. Move all prompts out of version control to a separate spreadsheet that team members can edit freely as the application evolves over time. Incorrect A spreadsheet does not provide the same level of version control, traceability, and reviewability as a source repository. It could make prompt changes harder to audit. B. Move all prompts to inline runtime construction so the team can update them quickly through a streamlined process outside the standard code review workflow. Incorrect This makes changes harder to track and intentionally bypasses the team's code-review process. Prompt changes can significantly affect application behavior and should be controlled. C. Establish a single source of truth for prompts but keep change review optional, allowing developers to update prompts directly when changes are urgent. Incorrect A single source of truth is good, but making review optional leaves room for unreviewed production behavior changes. Urgent changes should still follow an appropriate review and deployment process. D. Establish a single source of truth for prompts, version-control them alongside code, and require code review for prompt changes. Correct This provides a controlled prompt-management lifecycle. Keeping prompts version-controlled alongside the application allows the team to: Track exactly what changed. Review prompt modifications. Associate prompts with application versions. Reproduce previous behavior. Roll back problematic changes. Prompt changes can affect application behavior just like code changes, so they should go through code review and normal change-management practices."
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
    "explanation": "A. Explain that temperature controls sampling randomness and is unrelated to context capacity, then address the context issue through summarization or chunking. Correct Temperature controls the randomness of model output, not the amount of information the model can hold in its context window. If the problem is that a long transcript exceeds or puts pressure on the context window, appropriate solutions include summarization, compaction, or chunking the input into manageable sections. B. Adjust the temperature parameter together with the max_tokens parameter, treating the combined adjustment as the team's mechanism for managing context window pressure during long-transcript processing. Incorrect Temperature and max_tokens serve different purposes. Temperature controls sampling behavior, while max_tokens controls the maximum amount of output generated. Neither is a substitute for proper context management. C. Remove the system prompt entirely to make room for longer transcripts in each request, freeing up context window space the system prompt would otherwise consume. Incorrect Removing the system prompt may reduce some token usage, but it can also remove important instructions, constraints, and behavioral guidance. It is not the appropriate general solution to context-window pressure. D. Increase the temperature parameter as the junior developer suggested and observe whether the context window issue resolves over the next several runs of the application in production. Incorrect Increasing temperature changes the model's output variability, not its context capacity. It will not resolve a context-window limitation."
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
    "explanation": "A. Call the REST API directly with raw HTTP requests so the application avoids the SDK's abstraction between the application code and the API. Incorrect Direct REST calls are possible, but they unnecessarily require the application to handle details such as authentication, request construction, retries, and response handling itself when an official SDK is available. B. Use the Claude Python SDK and let it handle authentication, retries, and response parsing through its standard documented patterns for Python integrations. Correct The Claude Python SDK provides a convenient abstraction over the API. Using the SDK allows the application to follow documented integration patterns and benefit from built-in handling for common concerns such as authentication, retries, and response parsing. This generally results in cleaner, more maintainable Python application code. C. Use a different LLM provider's SDK and translate the responses into Claude's API shape so the application can switch providers in the future. Incorrect Using another provider's SDK adds unnecessary translation complexity and does not provide the intended integration with Claude. Provider abstraction can be designed separately if needed. D. Skip the SDK and embed Claude calls in shell commands invoked from Python, so that the application runs the calls outside the main Python process. Incorrect Shelling out from Python adds unnecessary process-management complexity and does not provide the benefits of the Python SDK."
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
    "explanation": "A. Add a system prompt instruction telling the model to produce schema-conforming arguments, treating the prompt instruction as the primary mechanism for keeping the agent's tool calls valid. Incorrect Prompt instructions can guide the model, but they should not be the primary enforcement mechanism for tool-call validity. Runtime validation is more reliable. B. Keep the schema strict, validate arguments before dispatching, and return a structured error so the agent can retry. Correct The tool schema should remain strict and well-defined. Before sending a tool call to the downstream service, the application should validate the arguments against that schema. If validation fails, return a structured error that clearly indicates the problem and allows the agent to correct its arguments and retry. This prevents malformed requests from reaching downstream systems and provides a controlled recovery path. C. Remove the schema entirely and rely on the downstream service to reject invalid calls, treating the downstream service as the team's primary enforcement layer. Incorrect Removing schema validation moves error detection too far downstream and increases the risk of malformed requests reaching the service. The application should validate tool calls before dispatch. D. Loosen the schema as the teammate proposed so the downstream service receives every call the agent makes during normal operation. Incorrect Loosening the schema simply to accept invalid model-generated arguments weakens the contract between the agent and tool. It can allow unexpected or unsafe arguments to reach downstream systems."
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
    "explanation": "A. Lower the model's temperature and re-run the inconsistent inputs to determine whether the parameter change reduces output variability across runs. Incorrect Lowering temperature may reduce output variability, but it does not identify the root cause of the inconsistency. It is a potential mitigation, not a systematic debugging approach. B. Retry every request that produces an unexpected output and log the results to identify whether repeated calls converge on a consistent response pattern. Incorrect Retries may provide useful information, but they do not capture enough context to determine why outputs differ. A systematic investigation requires complete request and response traces. C. Assume inconsistent outputs reflect normal LLM non-determinism and document the variability as an accepted characteristic of the application's behavior. Incorrect Some variation is normal, but assuming that all inconsistency is expected can hide configuration, prompt, input, or application-level problems. D. Capture full traces of input, system prompt, user messages, model output, and parameters, then analyze the differences between consistent and inconsistent runs. Correct This is the strongest systematic debugging approach. Capturing the complete execution context allows the team to compare runs and identify differences in: Input and user messages System prompts Model/version Temperature and other parameters Tool calls or other application state Model outputs This helps distinguish expected model variation from actual application or configuration issues."
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
    "explanation": "A. Use the SDK's tool interface and let the SDK handle the loop, dispatch, and history. Correct The Claude Agent SDK is designed to manage the agent execution loop, tool dispatch, and conversation history. The developer defines the required tools using the SDK's tool interface, while the SDK manages the execution process. B. Call the Messages API directly and let the model format its tool calls in plain text. Incorrect Plain text tool calls do not provide the structured tool execution mechanism required for reliable agent workflows. The SDK provides the appropriate tool interface and execution handling. C. Use the SDK's tool interface and loop, with conversation history stored in a separate team database. Incorrect Using a separate database for conversation history is unnecessary for the basic SDK-based agent loop. The SDK is intended to handle the relevant execution and history management. D. Use the SDK's tool interface and write the loop and history layer in the team's own code. Incorrect Writing the execution loop and history layer manually defeats the purpose of using the Claude Agent SDK. The SDK provides these capabilities so developers can focus on defining the agent and its tools."
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
    "explanation": "A. Tell the team that cost growth is unavoidable as the application scales and that no investigation will change the trajectory of the application's cost over the next several quarters. Incorrect Cost growth should not be assumed to be unavoidable. Without usage data, the team cannot determine which features are responsible or identify opportunities for optimization. B. Switch every feature to the smallest model to cut cost broadly across the application during normal operation. Incorrect Using the smallest model everywhere may reduce cost but can negatively affect quality. Model selection should be based on the requirements and actual usage patterns of each feature. C. Reduce token usage uniformly across all features by half, applying the cut evenly across the application during normal operation. Incorrect A uniform reduction is not an evidence-based approach. Different features may have very different token requirements and cost drivers. D. Add token usage tracking by feature to the application's logging so the team can identify which features drive cost before recommending changes. Correct Tracking token usage by feature provides the data needed to identify the application's major cost drivers. Once the team understands which features consume the most tokens, it can make targeted decisions about prompts, models, context, caching, and other optimization strategies."
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
    "explanation": "A. Embed the examples in a database for the model to find during inference. Incorrect Simply storing the examples in a database does not automatically teach the model how to handle the edge cases. The examples need to be provided as relevant context or used for training. B. Add the labeled edge-case examples to the prompt as few-shot examples so the model can learn the pattern. Correct Few-shot prompting provides the model with representative examples of inputs and their desired outputs. This helps Claude recognize the expected pattern and improve its handling of similar edge cases without requiring custom model training. C. Train a custom model on the edge-case examples and deploy that custom model in place of the team's current Claude integration. Incorrect Custom model training is unnecessary when a small set of labeled examples can effectively guide the model through few-shot prompting. It also introduces additional complexity and maintenance requirements. D. Tell users to avoid submitting the edge-case inputs to the application by adding warnings in the application's user interface. Incorrect Avoiding edge cases does not improve the application's ability to handle them. The existing labeled examples can be used directly to improve model behavior through few-shot prompting."
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
    "explanation": "A. Retiring the system, since shipping is the final lifecycle stage for any application that reaches production. Incorrect Shipping to production is not the final lifecycle stage. A production system still requires ongoing monitoring, maintenance, support, and improvements. B. Running a formal post-deployment review that assesses the development phase before the team does any further work on the system. Incorrect A post-deployment review can be useful, but it is not the primary next lifecycle phase. The system immediately enters ongoing operational management and maintenance. C. Operating and maintaining the system, including monitoring, responding to issues, and planning evolution. Correct After deployment, the application enters the operation and maintenance phase. The team should monitor system performance, track costs and reliability, respond to incidents, evaluate model behavior, and plan future improvements. D. Handing the system over to a separate operations team that will manage it independently of the development team going forward. Incorrect A separate operations team is not inherently required. Modern application ownership often involves continued collaboration between development and operations teams for monitoring, troubleshooting, maintenance, and evolution."
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
    "explanation": "A. Define the Skill as a long inline instruction at the top of every CLAUDE.md file in the team's repositories so Claude has access to it on every session. Incorrect CLAUDE.md is intended for persistent project instructions and context. A reusable Skill should be defined using Claude Code's recognized Skills structure rather than duplicating its instructions across CLAUDE.md files. B. Define the Skill inside the application's source code as a regular library module and call it from the application code instead of from Claude Code. Incorrect A Claude Code Skill is designed to extend Claude Code itself. Defining it as a normal application library does not make it discoverable or invokable as a Claude Code Skill. C. Define the Skill in a Skills directory recognized by Claude Code, where Claude can discover and load it during sessions for the team's repositories. Correct Claude Code Skills are defined in the appropriate Skills directory structure. This allows Claude Code to discover the Skill and load its instructions and supporting resources when needed during a session. D. Define the Skill in a personal scratch directory on each developer's machine and load it manually before each Claude Code session that needs it. Incorrect A personal scratch directory does not provide a consistent, team-reusable Skill configuration. Team Skills should be placed in a recognized Skills location so they can be discovered and used consistently."
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
    "explanation": "A. Define the Skill as a long inline instruction at the top of every CLAUDE.md file in the team's repositories so Claude has access to it on every session. Incorrect CLAUDE.md is intended for persistent project instructions and context. A reusable Skill should be defined using Claude Code's recognized Skills structure rather than duplicating its instructions across CLAUDE.md files. B. Define the Skill inside the application's source code as a regular library module and call it from the application code instead of from Claude Code. Incorrect A Claude Code Skill is designed to extend Claude Code itself. Defining it as a normal application library does not make it discoverable or invokable as a Claude Code Skill. C. Define the Skill in a Skills directory recognized by Claude Code, where Claude can discover and load it during sessions for the team's repositories. Correct Claude Code Skills are defined in the appropriate Skills directory structure. This allows Claude Code to discover the Skill and load its instructions and supporting resources when needed during a session. D. Define the Skill in a personal scratch directory on each developer's machine and load it manually before each Claude Code session that needs it. Incorrect A personal scratch directory does not provide a consistent, team-reusable Skill configuration. Team Skills should be placed in a recognized Skills location so they can be discovered and used consistently."
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
    "explanation": "A. An orchestrator and subagent pattern with specialized subagents assigned to each subtask. Correct The orchestrator and subagent pattern is well suited for complex research tasks. The main agent breaks the overall task into smaller subtasks, delegates them to specialized subagents, and then consolidates their results into a final response. B. A memory pattern that stores the entire research history in advance, before any subtask begins execution. Incorrect A memory pattern focuses on storing and retrieving information. It does not specifically provide task decomposition and delegation to specialized subagents. C. A context-window pruning pattern that drops each subtask's content after the agent moves on. Incorrect Context pruning is useful for managing large amounts of information, but it does not provide the orchestration and delegation required for this research workflow. D. A single tool-use loop that includes every tool the agent might need across all subtasks. Incorrect A single tool-use loop does not provide specialized delegation. It can also make the agent's context and tool selection more complex when different subtasks require different capabilities."
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
    "explanation": "A. Validated and sanitized before being incorporated into prompts, and treated as data the model should not interpret as instructions. Correct Untrusted input should be treated as potentially malicious or misleading. The application should validate and sanitize it before using it in prompts and clearly separate it from trusted instructions. This helps reduce risks such as prompt injection and unintended model behavior. B. Treated identically to trusted input from internal sources, on the grounds that all input the application receives can be handled the same way. Incorrect External input should not automatically receive the same level of trust as controlled internal input. Treating untrusted content as instructions can expose the application to prompt injection and other security risks. C. Routed through a separate Claude application with more lax security controls so the original application does not handle the untrusted input directly. Incorrect Moving untrusted input to an application with weaker security controls does not solve the underlying security problem. The input still needs appropriate validation, sanitization, and boundary controls. D. Blocked entirely so the application accepts only trusted input, with no path for legitimate external input the application might process. Incorrect Blocking all external input is unnecessarily restrictive. Applications can safely process legitimate untrusted input when appropriate validation, sanitization, isolation, and prompt-boundary controls are implemented."
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
    "explanation": "A. Move all instructions into the user message so the application's behavior is controlled at the input point. Incorrect Moving all instructions into user messages does not provide a consistent place for application-level behavioral and formatting requirements. It can also make instructions harder to maintain and enforce consistently. B. Consolidate behavioral and format instructions in the system prompt and keep user messages focused on the user's input. Correct Application-level behavioral and formatting instructions should be centralized in the system prompt. User messages should primarily contain the user's task or data. This creates a clear separation between stable application instructions and variable user input, improving consistency and maintainability. C. Place each instruction wherever the developer who first wrote it found most natural, retaining the original intent. Incorrect Scattering instructions across different locations makes behavior harder to understand, maintain, and troubleshoot. Centralizing stable instructions provides a more predictable configuration. D. Repeat all instructions in both the system prompt and the user message so the model sees each instruction more than once. Incorrect Duplicating instructions can create unnecessary prompt content and potentially introduce conflicting or inconsistent versions. Instructions should have a clear and consistent source of truth."
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
    "explanation": "A. Move all instructions to a separate documentation site that developers consult during Claude Code sessions across all repositories. Incorrect A documentation site is not the appropriate mechanism for automatically providing Claude Code with repository and project instructions. Developers would also need to manually consult and apply those rules. B. Use a CLAUDE.md hierarchy that scopes general standards broadly and project-specific context within each repository's local CLAUDE.md. Correct A CLAUDE.md hierarchy allows instructions to be scoped appropriately. General coding standards can apply broadly, while repository-specific instructions can remain in the local repository's CLAUDE.md file. This avoids unnecessary duplication while keeping project-specific context close to the codebase. C. Stop using CLAUDE.md altogether and ask each developer to configure Claude Code manually for each project they work on. Incorrect This removes the benefits of shared, version-controlled project instructions and creates inconsistent configurations between developers and repositories. D. Use a single repository's CLAUDE.md as the central source of truth and link to it from every other repository's CLAUDE.md file. Incorrect Using one repository as the central source does not provide the appropriate hierarchical scoping. Each repository can maintain its own project-specific context while broader instructions can be applied at the appropriate scope."
  }
]
