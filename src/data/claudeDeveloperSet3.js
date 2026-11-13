export const claudeDeveloperSet3Questions = [
  {
    "id": 102,
    "question": "You are writing a system prompt for a Claude application that needs to produce output in a specific JSON shape. The downstream system will reject any output that does not match the schema. Your prompt would need to...",
    "options": [
      "instruct Claude to return JSON sometimes and free text other times so the application's output captures both formats.",
      "include explicit constraints describing the required JSON schema and an instruction to produce only output matching that schema.",
      "omit any reference to the format and rely on a post-processing step in the application to reshape Claude's output.",
      "instruct Claude to use whichever output format it considers most appropriate for each request the application handles."
    ],
    "answer": [
      "include explicit constraints describing the required JSON schema and an instruction to produce only output matching that schema."
    ],
    "explanation": "Explicit schema constraints in the prompt directly guide the model to produce compliant output; the other options either introduce inconsistency, rely on fragile post-processing, or abdicate format control entirely."
  },
  {
    "id": 103,
    "question": "Your Claude application's error handling currently logs every API error with the same severity level. The team wants to differentiate between errors that should page an on-call engineer and errors that should be logged for later review. How would you structure the error handling?",
    "options": [
      "Categorize errors by severity based on impact and recoverability, then route each category to the appropriate channel for paging or logging.",
      "Page on every error, on the grounds that paging guarantees that no error is missed by the team during normal operation across the application's lifecycle.",
      "Log every error with the same severity, on the grounds that differentiating severity adds complexity that does not pay off in most application setups over time.",
      "Disable logging for any error that does not page, treating non-paging errors as not worth recording for later review either."
    ],
    "answer": [
      "Categorize errors by severity based on impact and recoverability, then route each category to the appropriate channel for paging or logging."
    ],
    "explanation": "Categorizing errors by severity and impact enables proper triage, matching the requirement to differentiate paging vs. logging; the alternatives either over-alert, under-differentiate, or lose data."
  },
  {
    "id": 104,
    "question": "Your agent makes 10 to 15 tool calls per task, and you have noticed it sometimes loses track of earlier results by the time it reaches later steps. The agent's context window is large enough to hold all the messages, but the relevant information appears to get buried as the conversation grows. How would you address this?",
    "options": [
      "Switch to a different agentic framework that advertises automatic context-window management as a built-in feature.",
      "Apply a context-management pattern that summarizes or prunes older tool outputs while preserving the active task state.",
      "Reduce the number of tool calls per task by combining several existing tools into larger, multi-purpose tools.",
      "Increase the context window further so all tool outputs from every prior step remain in full detail throughout the task."
    ],
    "answer": [
      "Apply a context-management pattern that summarizes or prunes older tool outputs while preserving the active task state."
    ],
    "explanation": "The core issue is context dilution/burying, which is directly addressed by summarization/pruning (context management), not merely by reducing tool call count or window size, which don't fix information getting buried."
  },
  {
    "id": 105,
    "question": "You are setting up Claude Code for a new project repository. Your team has shared coding standards, preferred libraries, and project-specific context that every developer working on the repository should have available when they use Claude Code. How would you set this up?",
    "options": [
      "Add the coding standards and project context to the repository's existing README file and direct developers to reference it when starting Claude Code sessions.",
      "Configure Claude Code through environment variables that each developer sets on their own machine when they begin working in the repository.",
      "Document the standards in a separate wiki page maintained outside the repository so the documentation stays decoupled from the source code.",
      "Initialize Claude Code in the repository and document the standards and project-specific context in a CLAUDE.md file at the repository root."
    ],
    "answer": [
      "Initialize Claude Code in the repository and document the standards and project-specific context in a CLAUDE.md file at the repository root."
    ],
    "explanation": "CLAUDE.md is Claude Code's designated mechanism for persistent, automatically-loaded project context and standards, ensuring consistency across all developers using the repo."
  },
  {
    "id": 106,
    "question": "You are designing a Claude application that helps medical researchers analyze differential diagnoses by considering symptom patterns, weighing evidence across competing hypotheses, and showing intermediate reasoning steps before producing a final recommendation. The team is choosing among Claude's available model options. The model option best suited to this use case is...",
    "options": [
      "extended thinking, which lets the model reason through the differential diagnosis steps before producing the final recommendation.",
      "zero-shot prompting alone with no model option adjustments, which keeps the application's configuration as simple as possible.",
      "a smaller model with a tighter context window, which encourages the model to focus its limited capacity on the task.",
      "fast mode, which prioritizes lowest possible latency at the expense of reasoning depth on complex tasks."
    ],
    "answer": [
      "extended thinking, which lets the model reason through the differential diagnosis steps before producing the final recommendation."
    ],
    "explanation": "Extended thinking is designed exactly for multi-step reasoning tasks requiring weighing evidence and showing intermediate steps, unlike the other options which sacrifice reasoning depth or simplicity at the cost of quality."
  },
  {
    "id": 107,
    "question": "Your Claude application returns confident-sounding answers, but occasionally those answers contain factual errors that downstream systems treat as ground truth. The team is concerned about the application's confidence-versus-accuracy gap. How would you address the gap?",
    "options": [
      "Reject every response the application produces until a manual accuracy review is conducted on each response by a human reviewer before any downstream system uses it.",
      "Apply skepticism toward confident output by adding validation steps, sourcing requirements, or confidence calibration before treating outputs as ground truth.",
      "Add a disclaimer to every output telling users to verify the accuracy of the output and treat the disclaimer as the primary mechanism for managing the confidence-versus-accuracy gap.",
      "Lower the model's temperature so the model's responses sound less confident and downstream systems are less likely to treat the responses as ground truth in normal operation."
    ],
    "answer": [
      "Apply skepticism toward confident output by adding validation steps, sourcing requirements, or confidence calibration before treating outputs as ground truth."
    ],
    "explanation": "Adding validation, sourcing, and confidence calibration systematically addresses the accuracy gap; manual review of everything doesn't scale, disclaimers alone don't fix the underlying gap, and temperature does not affect factual accuracy."
  },
  {
    "id": 108,
    "question": "Your Claude application has been running for several conversation turns and you notice the model occasionally references information that was discussed many turns ago but is no longer relevant. You suspect context drift is causing the model to weight stale content too heavily. How would you address the drift?",
    "options": [
      "Reset the conversation after every turn so the model loses all prior turns when generating a response.",
      "Apply compaction to summarize older portions of the conversation so the gist remains while the specifics carry less weight.",
      "Truncate the conversation so the model sees only the most recent turn during each subsequent response.",
      "Increase the context window size so all turns of the conversation remain visible to the model in full detail."
    ],
    "answer": [
      "Apply compaction to summarize older portions of the conversation so the gist remains while the specifics carry less weight."
    ],
    "explanation": "Compaction preserves useful gist while de-emphasizing stale specifics, directly countering drift, whereas resetting/truncating lose needed context and increasing window size does not fix weighting of stale info."
  },
  {
    "id": 109,
    "question": "A teammate has asked why your Claude application sometimes produces a response that includes the prompt text rephrased, and other times produces a response with the prompt text repeated back, and other times produces a response with the prompt text rephrased. They suspect a bug in the application's request construction. How would you respond?",
    "options": [
      "Tell the teammate that the variation is caused by the application sending two different prompts on different runs and propose a code change that pins the system prompt to a single version.",
      "Confirm that the variation is a bug in the application's request construction and start investigating which part of the application is producing the inconsistent prompt text.",
      "Tell the teammate that the variation depends on which Claude model serves the request, and recommend pinning the application to a single model version to make the output behavior consistent.",
      "Explain that LLMs generate output token by token, and variation in how prompt content appears in output is a property of generation, not a bug in request construction."
    ],
    "answer": [
      "Explain that LLMs generate output token by token, and variation in how prompt content appears in output is a property of generation, not a bug in request construction."
    ],
    "explanation": "Output variability across identical prompts is an inherent property of LLM sampling/token-by-token generation, not a request-construction bug or purely a model-version issue; option D correctly identifies the root cause."
  },
  {
    "id": 110,
    "question": "Your Claude agent performs database operations. A recent incident occurred where the agent ran a destructive query that affected production data. The team wants to add deterministic controls to prevent similar incidents. How would you prevent similar incidents?",
    "options": [
      "Switch to a higher-capability Claude model on the grounds that a more capable model is less likely to run destructive queries during normal operation across all requests.",
      "Add a system prompt instruction telling the agent to be careful with database operations on every request the application handles during normal operation across all incoming traffic.",
      "Add Claude hooks that intercept database operations and apply deterministic checks, such as blocking destructive queries or requiring approval, before the queries execute.",
      "Run the agent only during business hours when humans are available to monitor its activity, treating the schedule as the primary control mechanism for destructive operations."
    ],
    "answer": [
      "Add Claude hooks that intercept database operations and apply deterministic checks, such as blocking destructive queries or requiring approval, before the queries execute."
    ],
    "explanation": "Deterministic hooks that intercept and block/require approval for destructive queries provide a hard guarantee, unlike prompt instructions (probabilistic) or model choice/scheduling, which don't reliably prevent destructive actions."
  },
  {
    "id": 111,
    "question": "Your Claude application uses tool calling to fetch patient data and generate summary reports. The team occasionally sees the model returns a tool_use block that references arguments not present in the schema, and your application code does not handle this case gracefully. How would you address this?",
    "options": [
      "Retry the same request repeatedly until the model returns a valid tool_use block that matches the schema as expected.",
      "Validate the tool_use block's arguments against the tool schema before dispatching the tool and handle invalid arguments as a recognized error path.",
      "Log invalid tool_use blocks when they occur and allow the tool dispatch to proceed, relying on the tool's own error handling to surface failures.",
      "Stop using tool calling entirely and replace tools with prompted text generation that asks the model to describe what it would do."
    ],
    "answer": [
      "Validate the tool_use block's arguments against the tool schema before dispatching the tool and handle invalid arguments as a recognized error path."
    ],
    "explanation": "Explicit schema validation before dispatch with a defined error path is the robust engineering solution; blind retrying, unsafe dispatch, or abandoning tool calling are all worse approaches."
  },
  {
    "id": 112,
    "question": "You are building an agent that needs to call several internal APIs and a database in a structured, repeatable way. Your team may decide to use the Claude Agent SDK rather than build a custom loop. You are setting up the agent's tool definitions and execution loop. How would you set up the tools and execution loop?",
    "options": [
      "Use the SDK's tool interface and write the loop and history layer in the team's own code.",
      "Use the SDK's tool interface and let the SDK handle the loop, dispatch, and history.",
      "Call the Messages API directly and let the model format its tool calls in plain text.",
      "Use the SDK's tool interface and loop, with conversation history stored in a separate team database."
    ],
    "answer": [
      "Use the SDK's tool interface and let the SDK handle the loop, dispatch, and history."
    ],
    "explanation": "Using the SDK's built-in loop, dispatch, and history management avoids reinventing agentic infrastructure, which is precisely what the SDK is designed to provide."
  },
  {
    "id": 113,
    "question": "Your application uses the Messages API to handle multi-turn conversations. Each new turn resends the entire conversation history, and your token costs are growing as conversations get longer. You suspect there is a more efficient approach. How would you address this?",
    "options": [
      "Summarize each conversation after every turn and replace the full history with the summary on the next request, reducing token count at the cost of fidelity.",
      "Truncate every conversation to the last two messages so that token usage stays low and costs remain predictable across the application's normal operation.",
      "Switch to the batch API for every turn so the per-call cost is reduced, treating the batch as the team's primary cost-control mechanism for multi-turn work.",
      "Use prompt caching to reuse the static portions of the conversation context across turns instead of paying for them on every request the application sends."
    ],
    "answer": [
      "Use prompt caching to reuse the static portions of the conversation context across turns instead of paying for them on every request the application sends."
    ],
    "explanation": "Prompt caching directly reduces the token cost of resending unchanged conversation history without losing fidelity, unlike summarization (loses information), truncation (loses context), or batch API (wrong use case, not built for interactive turns)."
  },
  {
    "id": 114,
    "question": "You are designing an agent that processes vendor invoices. The work involves a small number of well-understood steps, but occasionally an invoice arrives in an unexpected format that requires the system to decide between rerouting, requesting clarification, or flagging for human review. The most appropriate architecture for this system is...",
    "options": [
      "a fully autonomous agent that handles every invoice from start to finish across all formats.",
      "a single large prompt that processes every incoming invoice, both standard and unexpected, in one model call.",
      "a workflow for the standard path with an agent invoked at the decision point for unexpected formats.",
      "a manager agent that delegates each step of standard invoice processing to a dedicated subagent, with a separate subagent handling each unexpected format."
    ],
    "answer": [
      "a workflow for the standard path with an agent invoked at the decision point for unexpected formats."
    ],
    "explanation": "Combining a deterministic workflow for the well-understood path with agent invocation only at the decision point matches the actual complexity profile; full autonomy or manager/subagent architectures are overengineered for mostly-standard work."
  },
  {
    "id": 115,
    "question": "Your team is debating how to manage the prompts used in your Claude application. Some prompts are checked into the code repository, some live in a separate configuration file, and some are constructed inline at runtime. The result is inconsistent, and a recent prompt change went out without code review. What steps would you take?",
    "options": [
      "Move all prompts to inline runtime construction so the team can update them quickly through a streamlined process outside the standard code review workflow.",
      "Establish a single source of truth for prompts, version-control them alongside code, and require code review for prompt changes.",
      "Move all prompts out of version control to a separate spreadsheet that team members can edit freely as the application evolves over time.",
      "Establish a single source of truth for prompts but keep change review optional, allowing developers to update prompts directly when changes are urgent."
    ],
    "answer": [
      "Establish a single source of truth for prompts, version-control them alongside code, and require code review for prompt changes."
    ],
    "explanation": "Version-controlling prompts with mandatory code review directly fixes the inconsistency and the unreviewed-change problem; the other options either bypass review or make prompts harder to track."
  },
  {
    "id": 116,
    "question": "Your Claude application processes 50-page legal contracts and produces summaries with citation references back to the source. The team is debating whether to send each contract whole or split into smaller pieces. The contracts fit within Claude's context window. Initial testing shows that whole-document processing produces stronger cross-section reasoning but occasionally drifts on citation accuracy in later sections. Chunked processing produces summaries with stronger citation accuracy per chunk but loses cross-section reasoning. The team has not decided which property matters more. How would you guide the team's decision?",
    "options": [
      "Assess the cost and latency implications of both approaches against the application's performance requirements before recommending which processing strategy to adopt.",
      "Review the citation accuracy results from chunked processing and determine whether the loss of cross-section reasoning produces summaries that still meet the application's quality bar.",
      "Identify which property matters more for the application's actual use case and let that decision drive the chunking approach, then validate the choice against representative contracts.",
      "Examine the use cases where cross-section reasoning failures occur and assess whether whole-document processing meets the application's accuracy requirements across a representative sample of contracts."
    ],
    "answer": [
      "Identify which property matters more for the application's actual use case and let that decision drive the chunking approach, then validate the choice against representative contracts."
    ],
    "explanation": "The team hasn't decided which quality property (citation accuracy vs. cross-section reasoning) matters most for the use case — that decision must come first, then validate with representative contracts, rather than jumping straight to validating one specific approach."
  },
  {
    "id": 117,
    "question": "You are choosing a Claude model for a high-volume classification task. Each classification is straightforward, latency requirements are tight, and per-request cost matters at scale. Which model would you choose?",
    "options": [
      "A smaller, faster Claude model, because the task is straightforward and the workload prioritizes latency and per-request cost at scale.",
      "Multiple Claude models in series, where each request runs through more than one model and the application combines the outputs into a final classification.",
      "A mid-tier Claude model selected by default, because mid-tier models balance quality and cost in a way the team can apply across most tasks.",
      "The largest, highest-capability Claude model, to maximize quality on every classification the application produces during normal operation across all requests."
    ],
    "answer": [
      "A smaller, faster Claude model, because the task is straightforward and the workload prioritizes latency and per-request cost at scale."
    ],
    "explanation": "For straightforward, high-volume, latency- and cost-sensitive tasks, a smaller/faster model is the right fit — matching model capability to task complexity is a core best practice, not defaulting to biggest or most complex options."
  },
  {
    "id": 118,
    "question": "Your team uses several plugins across multiple Claude applications, and a recent plugin update introduced a regression. The team had not been tracking plugin versions, so the team cannot easily identify which version was previously working. How would you address this?",
    "options": [
      "Add explicit plugin version tracking to the project's configuration so the team can identify, pin, and upgrade plugin versions deliberately.",
      "Treat plugins as untrackable third-party code and rely on plugin authors to communicate breaking changes when they happen, with no internal version tracking.",
      "Stop using all plugins until the team can rebuild equivalent functionality directly into the application code, treating plugin avoidance as a way to remove version-related risk.",
      "Upgrade every plugin to the latest version on a regular cadence to keep version drift small, on the grounds that drift contributes to regression risk."
    ],
    "answer": [
      "Add explicit plugin version tracking to the project's configuration so the team can identify, pin, and upgrade plugin versions deliberately."
    ],
    "explanation": "Explicit version tracking/pinning directly solves the root problem — inability to identify and roll back to a known-good version — without the cost of abandoning plugins or blindly auto-upgrading."
  },
  {
    "id": 119,
    "question": "You are building a Claude application that processes 10,000 customer emails overnight to extract structured data. The work is non-interactive, runs once daily, and has a flexible completion window of several hours. Which Claude API would you use?",
    "options": [
      "The batch API, which is designed for non-interactive workloads with flexible completion windows.",
      "The realtime Messages API with concurrent requests to process the emails as fast as possible during the overnight window.",
      "The realtime Messages API processing the emails one at a time sequentially to ensure consistent ordering of results.",
      "The streaming responses API to process each email and return partial results to a database as the model generates them."
    ],
    "answer": [
      "The batch API, which is designed for non-interactive workloads with flexible completion windows."
    ],
    "explanation": "The batch API is purpose-built for exactly this scenario — large volume, non-interactive, flexible completion window — at lower cost than realtime processing."
  },
  {
    "id": 120,
    "question": "A teammate has asked how the Claude SDK handles transient API errors, such as a temporary network issue or a brief rate-limit response. They want to know whether the application code needs to handle every transient error or whether the SDK provides any default behavior. How would you describe the SDK's default behavior?",
    "options": [
      "The SDK provides default retry behavior for many transient errors, and the application code can configure or extend that behavior as needed.",
      "The SDK logs transient errors to a default error stream and continues execution without retrying, leaving the application code responsible for detecting and responding to failed calls.",
      "The SDK provides default retry behavior for transient errors up to a fixed number of attempts and this behavior is not configurable.",
      "The SDK provides default retry behavior for network errors but surfaces rate-limit responses directly to the application code, which must implement its own retry logic for those cases."
    ],
    "answer": [
      "The SDK provides default retry behavior for many transient errors, and the application code can configure or extend that behavior as needed."
    ],
    "explanation": "The Claude SDKs provide built-in, configurable default retry behavior for transient errors including rate limits and network issues, which the application can further customize."
  },
  {
    "id": 121,
    "question": "You are designing a Claude application that will require structured JSON output for downstream processing. The output schema is well-defined, and downstream systems will reject malformed JSON. Your application design would...",
    "options": [
      "structure the prompt to request output in a schema that is described in plain English, with downstream systems parsing whatever shape Claude produces.",
      "define a clear schema, structure the prompt to request output in that schema, and validate Claude's output against the schema before passing it downstream.",
      "define a clear schema and structure the prompt to request output in that schema, with downstream systems handling any validation needed.",
      "avoid structured output and use free-form text everywhere instead, on the grounds that free-form text is more flexible and handles edge cases better than structured schemas."
    ],
    "answer": [
      "define a clear schema, structure the prompt to request output in that schema, and validate Claude's output against the schema before passing it downstream."
    ],
    "explanation": "Defining a schema, prompting for it, and validating before passing downstream provides the full closed-loop safety needed when malformed JSON is rejected — validation must happen at the source, not left entirely to downstream systems."
  },
  {
    "id": 122,
    "question": "Your team is preparing a new Claude application for production and the product team has asked for a cost projection. The team needs to estimate the cost based on expected request volume, average input length, and average output length. How would you build the projection?",
    "options": [
      "Build a cost model that combines expected request volume and average input tokens, treating output tokens as a small enough share of cost to leave out of the projection.",
      "Build a cost model that combines expected request volume, average input tokens, average output tokens, the chosen model's pricing, and any caching benefits.",
      "Build a cost model that uses the average per-request cost from a similar Claude application the team built last year, scaling that figure by expected request volume.",
      "Build a cost model based on expected request volume and the chosen model's pricing, treating average input and output token counts as variables to be estimated post-launch."
    ],
    "answer": [
      "Build a cost model that combines expected request volume, average input tokens, average output tokens, the chosen model's pricing, and any caching benefits."
    ],
    "explanation": "A proper cost projection must account for all relevant factors given (volume, input/output tokens, pricing, caching) rather than omitting output tokens, deferring token estimates, or relying on an unrelated prior application's costs."
  },
  {
    "id": 123,
    "question": "A teammate has asked how to extend Claude Code with a custom Skill that the team can invoke during sessions. The Skill consists of a set of instructions and a few support scripts the team wants Claude to be able to call when the Skill is loaded. Where is the right place to define the Skill?",
    "options": [
      "Define the Skill inside the application's source code as a regular library module and call it from the application code instead of from Claude Code.",
      "Define the Skill in a personal scratch directory on each developer's machine and load it manually before each Claude Code session that needs it.",
      "Define the Skill in a Skills directory recognized by Claude Code, where Claude can discover and load it during sessions for the team's repositories.",
      "Define the Skill as a long inline instruction at the top of every CLAUDE.md file in the team's repositories so Claude has access to it on every session."
    ],
    "answer": [
      "Define the Skill in a Skills directory recognized by Claude Code, where Claude can discover and load it during sessions for the team's repositories."
    ],
    "explanation": "Claude Code Skills are meant to live in a recognized Skills directory for automatic discovery and reuse, unlike ad hoc personal directories, source-code modules, or bloating CLAUDE.md with inline instructions."
  },
  {
    "id": 124,
    "question": "A new agent your team built handles customer support tickets, but it routinely gets confused when a single ticket spans billing, shipping, and product issues. The agent often loses track of which sub-issue it has already addressed and revisits the same one. The team is considering architectural changes. What architectural change would you recommend?",
    "options": [
      "Increase the size of the agent's context window so it can hold the full ticket history at once.",
      "Introduce a orchestrator agent that delegates billing, shipping, and product sub-issues to a dedicated subagent.",
      "Add detailed prompting that instructs the agent to track which sub-issues have been resolved and which remain.",
      "Switch to a deterministic workflow that handles billing, shipping, and product issues in a fixed sequence."
    ],
    "answer": [
      "Introduce a orchestrator agent that delegates billing, shipping, and product sub-issues to a dedicated subagent."
    ],
    "explanation": "An orchestrator delegating each independent sub-issue to a dedicated subagent cleanly separates state tracking per domain, resolving the confusion; larger context or prompting alone doesn't fix the structural issue, and a fixed sequence is too rigid for tickets that may not need every category."
  },
  {
    "id": 125,
    "question": "Your Claude application runs long agentic workflows where the agent makes many tool calls, and the conversation history grows quickly. After about 20 tool calls, you notice the agent's responses become less focused and sometimes ignore earlier task constraints. How would you address this?",
    "options": [
      "Increase the model's context window so the agent can hold every tool output at full detail across the entire workflow no matter how many tool calls it accumulates.",
      "Remove tool calling from the workflow entirely so the agent operates as a single text-generation step with no tool outputs accumulating in the context window.",
      "Restart the agent every five tool calls to prevent any drift, with the agent losing all task state at each restart point during the workflow.",
      "Apply context engineering techniques such as tool output pruning or compaction to keep the active task state visible while reducing the volume of older content."
    ],
    "answer": [
      "Apply context engineering techniques such as tool output pruning or compaction to keep the active task state visible while reducing the volume of older content."
    ],
    "explanation": "Pruning/compaction directly reduces noise while preserving essential task state, addressing focus loss without losing all history (as in restarting) or removing tool use altogether or relying on ever-larger windows."
  },
  {
    "id": 126,
    "question": "Your team uses Claude Code across multiple repositories. You want the team's rules and general coding standards to apply to all repositories, and other rules to apply only to specific repositories. The team is currently duplicating instructions across every repository's CLAUDE.md file. How would you address this?",
    "options": [
      "Stop using CLAUDE.md altogether and ask each developer to configure Claude Code manually for each project they work on.",
      "Move all instructions to a separate documentation site that developers consult during Claude Code sessions across all repositories.",
      "Use a CLAUDE.md hierarchy that scopes general standards broadly and project-specific context within each repository's local CLAUDE.md.",
      "Use a single repository's CLAUDE.md as the central source of truth and link to it from every other repository's CLAUDE.md file."
    ],
    "answer": [
      "Use a CLAUDE.md hierarchy that scopes general standards broadly and project-specific context within each repository's local CLAUDE.md."
    ],
    "explanation": "A hierarchical CLAUDE.md setup (broad/general + local/project-specific) eliminates duplication while preserving both shared standards and per-repo context, unlike abandoning CLAUDE.md or external docs or cross-linking a single repo's file."
  },
  {
    "id": 127,
    "question": "Your Claude application requests structured JSON output from the model. Most of the time the JSON is well-formed, but occasionally Claude returns malformed JSON that breaks downstream processing. How would you handle the malformed output?",
    "options": [
      "Manually inspect every response before downstream processing so a human reviewer catches any malformed JSON before the application passes the response to downstream systems.",
      "Retry the same request repeatedly until valid JSON appears in the model's response, with the retry loop adding delay to the application's response time on affected requests.",
      "Switch to free-form text output so the application no longer depends on JSON parsing for any of the responses it sends downstream during normal operation.",
      "Add output validation that parses Claude's response against the expected schema and treats malformed output as a recognized error path with retry or fallback handling."
    ],
    "answer": [
      "Add output validation that parses Claude's response against the expected schema and treats malformed output as a recognized error path with retry or fallback handling."
    ],
    "explanation": "Schema validation with defined retry/fallback error handling directly and scalably addresses occasional malformed output, unlike manual review (doesn't scale), blind retry loops (no guarantee, adds latency), or abandoning structured output entirely."
  },
  {
    "id": 128,
    "question": "Your Claude agent has too many tools, and many of them have overlapping functionality. The agent often picks an inappropriate tool when several could plausibly handle a request. How would you address the tool selection problem?",
    "options": [
      "Add more tools to cover every variation of the requests the agent handles, on the grounds that more tools give the agent more accurate options to choose from.",
      "Restructure the tool set by consolidating overlapping tools, removing unused tools, and clarifying tool descriptions so each tool has a distinct purpose.",
      "Add detailed examples to each tool's description so the agent can match incoming requests to the right tool by example, treating the examples as the team's selection mechanism.",
      "Remove all tools and rely on the agent's general capability instead, with the application losing the workflows that previously relied on tools."
    ],
    "answer": [
      "Restructure the tool set by consolidating overlapping tools, removing unused tools, and clarifying tool descriptions so each tool has a distinct purpose."
    ],
    "explanation": "Consolidating overlapping tools and clarifying distinct purposes directly reduces selection ambiguity; adding more tools worsens overlap, and removing all tools discards needed functionality."
  },
  {
    "id": 129,
    "question": "Your Claude application's outputs are inconsistent in format. The team's instructions are scattered across the system prompt and user messages, with some instructions stated only once and others repeated. How would you fix the inconsistency?",
    "options": [
      "Place each instruction wherever the developer who first wrote it found most natural, retaining the original intent.",
      "Consolidate behavioral and format instructions in the system prompt and keep user messages focused on the user's input.",
      "Repeat all instructions in both the system prompt and the user message so the model sees each instruction more than once.",
      "Move all instructions into the user message so the application's behavior is controlled at the input point."
    ],
    "answer": [
      "Consolidate behavioral and format instructions in the system prompt and keep user messages focused on the user's input."
    ],
    "explanation": "Consolidating behavioral/format instructions in the system prompt (with user messages carrying only the actual input) is standard prompt engineering practice that eliminates the scattering/duplication causing inconsistency."
  },
  {
    "id": 130,
    "question": "You are building an MCP server that exposes several internal data sources as MCP resources. The server needs to be deployed so multiple Claude applications can integrate with it. How would you approach the build and deployment?",
    "options": [
      "Deploy the MCP server only on individual developer machines, with the Claude applications unable to reach the server outside each developer's machine.",
      "Build the MCP server with resource and tool definitions scoped to the first Claude application that needs it, and extend the definitions to additional applications as each integration is requested.",
      "Bypass the MCP server and embed each data source directly in every Claude application that needs the data, with each application maintaining its own integration.",
      "Author the server with clearly defined resources, tools, and prompts, choose a communication pattern, and deploy to an accessible hosting environment."
    ],
    "answer": [
      "Author the server with clearly defined resources, tools, and prompts, choose a communication pattern, and deploy to an accessible hosting environment."
    ],
    "explanation": "Properly authoring an MCP server with well-defined resources/tools/prompts and deploying to an accessible shared environment is the correct approach for multi-application reuse, unlike per-developer-only deployment, ad hoc scoping, or bypassing MCP entirely."
  },
  {
    "id": 131,
    "question": "You have just shipped a new Claude-powered application to production. The development phase is complete, and the system is now in active use by internal teams. The next phase of work for this system is...",
    "options": [
      "operating and maintaining the system, including monitoring, responding to issues, and planning evolution.",
      "running a formal post-deployment review that assesses the development phase before the team does any further work on the system.",
      "handing the system over to a separate operations team that will manage it independently of the development team going forward.",
      "retiring the system, since shipping is the final lifecycle stage for any application that reaches production."
    ],
    "answer": [
      "operating and maintaining the system, including monitoring, responding to issues, and planning evolution."
    ],
    "explanation": "After shipping, the natural next lifecycle phase is ongoing operation and maintenance — monitoring, incident response, and iterative improvement — not a one-time review, full handoff, or retirement."
  },
  {
    "id": 132,
    "question": "Your Claude application receives untrusted input from external sources. The team is establishing how the application should treat this untrusted input. Untrusted input would be...",
    "options": [
      "validated and sanitized before being incorporated into prompts, and treated as data the model should not interpret as instructions.",
      "routed through a separate Claude application with more lax security controls so the original application does not handle the untrusted input directly.",
      "blocked entirely so the application accepts only trusted input, with no path for legitimate external input the application might process.",
      "treated identically to trusted input from internal sources, on the grounds that all input the application receives can be handled the same way."
    ],
    "answer": [
      "validated and sanitized before being incorporated into prompts, and treated as data the model should not interpret as instructions."
    ],
    "explanation": "Treating untrusted input as data (not instructions) and validating/sanitizing it is the standard security best practice against prompt injection, unlike offloading risk elsewhere, blocking all external input, or treating it as equally trusted."
  },
  {
    "id": 133,
    "question": "A Claude application that worked well in testing is now occasionally returning outputs that mention information not present in the input. The development team initially assumed the model was hallucinating so they asked you to troubleshoot. What would you do first?",
    "options": [
      "Apply a retrieval-augmented generation pattern to ground the responses in source content before any further investigation of the production traces.",
      "Examine production traces to identify whether the issue is hallucination by the model, context loss, prompt injection, or another failure mode before recommending a fix.",
      "Replace the current model with a larger one to reduce the chance of hallucination, on the grounds that larger models tend to hallucinate less in typical applications.",
      "Add a system prompt instruction telling the model not to invent information, on the grounds that prompt-level instructions are the fastest fix for hallucination concerns."
    ],
    "answer": [
      "Examine production traces to identify whether the issue is hallucination by the model, context loss, prompt injection, or another failure mode before recommending a fix."
    ],
    "explanation": "Diagnosing the actual root cause via production traces before acting is the correct debugging discipline — jumping to a fix (RAG, bigger model, prompt tweak) without confirming the failure mode risks solving the wrong problem."
  },
  {
    "id": 134,
    "question": "Your team is integrating Claude into an existing REST API service. The service handles concurrent requests, and you are deciding how to structure the Claude API calls within the existing async codebase. How would you structure the Claude calls?",
    "options": [
      "Use the Claude SDK's async client and structure Claude calls as awaitable operations alongside the rest of the service's async code.",
      "Replace the existing async REST service with a synchronous service to match the call style of synchronous Claude SDK clients.",
      "Make synchronous Claude API calls and block the async event loop until each call completes before processing the next request.",
      "Run Claude API calls in a separate thread pool isolated from the rest of the service so the main event loop is not affected."
    ],
    "answer": [
      "Use the Claude SDK's async client and structure Claude calls as awaitable operations alongside the rest of the service's async code."
    ],
    "explanation": "Using the SDK's async client keeps calls consistent with the existing async architecture without blocking the event loop, unlike synchronous blocking calls, an unnecessary rewrite, or an unneeded separate thread pool."
  },
  {
    "id": 135,
    "question": "You are designing a Claude application that processes user-submitted text. Some of that text could include sensitive information such as account numbers or passwords that the application should not send to Claude. How would you design the application?",
    "options": [
      "Apply filtering at the boundary for the most commonly observed sensitive data patterns and expand coverage to additional patterns based on findings from production monitoring.",
      "Log all user-submitted text before it is sent to Claude and review the logs periodically to identify whether sensitive information is reaching the model.",
      "Define the application boundary explicitly, identify what content can leave the boundary for Claude, and add filtering or redaction at the boundary.",
      "Add a prompt instruction in the system prompt specifying the categories of sensitive information Claude should disregard when processing user-submitted text."
    ],
    "answer": [
      "Define the application boundary explicitly, identify what content can leave the boundary for Claude, and add filtering or redaction at the boundary."
    ],
    "explanation": "Explicitly defining the trust boundary and applying filtering/redaction there prevents sensitive data from ever reaching Claude, which is more robust than reactive log review, iterative-only pattern coverage, or relying on prompt instructions (which don't prevent data transmission)."
  },
  {
    "id": 136,
    "question": "Your Claude application is deployed to development, staging, and production environments. Each environment uses a different model version, different prompt versions, and different plugin dependencies, but the configuration is currently scattered across environment variables, hardcoded values, and undocumented setup scripts. How would you manage the configuration?",
    "options": [
      "Use the latest available model version everywhere and stop pinning model versions, on the grounds that pinning adds maintenance overhead the team should aim to reduce.",
      "Consolidate the configuration into a version-controlled system documenting model version pinning, prompt versioning, and plugin dependencies for each environment.",
      "Move all configuration into hardcoded application code to reduce reliance on external configuration sources that are difficult to track over time.",
      "Standardize all environments to use the same configuration values to eliminate the differences between development, staging, and production."
    ],
    "answer": [
      "Consolidate the configuration into a version-controlled system documenting model version pinning, prompt versioning, and plugin dependencies for each environment."
    ],
    "explanation": "Consolidating scattered configuration into a documented, version-controlled system directly resolves the tracking/consistency problem, unlike unpinning versions, hardcoding, or forcing identical configs across environments with legitimately different needs."
  },
  {
    "id": 137,
    "question": "You are setting up a Claude application that requires API keys for several external services. What is the best way to store the keys?",
    "options": [
      "Use a single shared key across all external services, so any developer working on the application can find the keys easily during development.",
      "Put the keys in the application's configuration file and check the configuration file into the team's repository alongside the rest of the source code.",
      "Email the keys to each developer as needed and have each developer paste the keys into their local environment when they begin working on the application's code.",
      "Store the keys in a secrets manager or environment-specific configuration that is not checked into source code, and load them at runtime."
    ],
    "answer": [
      "Store the keys in a secrets manager or environment-specific configuration that is not checked into source code, and load them at runtime."
    ],
    "explanation": "A secrets manager or environment-based configuration kept out of source control is standard secure credential management, unlike shared keys, committing secrets to the repo, or ad hoc emailing of keys."
  },
  {
    "id": 138,
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
    "explanation": "Model selection requires clarifying the actual quality/latency/cost tradeoffs rather than guessing; the other options substitute assumptions or generic benchmarks for the missing requirements."
  },
  {
    "id": 139,
    "question": "You maintain a Claude application that uses Claude Sonnet 4.5 across several production workflows. Your evaluation suite shows Sonnet 4.7 performing 8% better on your highest-volume task. However, this version produces different output formatting on two of your structured-extraction prompts that downstream consumers parse with regex-based code. To roll out the upgrade, you would...",
    "options": [
      "adjust the prompts to constrain output format, re-run evals against the expected parsing layer schema, then roll out the model out with a feature flag and the option to revert per workflow.",
      "keep the older model in production to preserve the fragile parsing layer that may risk breaking with any model change.",
      "switch the model identifier in the application's configuration to the new model, then monitor production for parsing failures to be fixed as failures surface.",
      "rewrite the downstream parsing code to accept a wider range of output formats to ensure the application is resilient to future model upgrades without requiring prompt changes."
    ],
    "answer": [
      "adjust the prompts to constrain output format, re-run evals against the expected parsing layer schema, then roll out the model out with a feature flag and the option to revert per workflow."
    ],
    "explanation": "Proactively adjusting prompts and validating against the parsing schema before a controlled, reversible rollout addresses the known formatting risk directly, unlike never upgrading, upgrading blind and fixing reactively, or a broader rewrite that doesn't address the immediate compatibility issue."
  },
  {
    "id": 140,
    "question": "Your agent is processing tasks that take 30 to 60 minutes to complete. Each task has well-defined intermediate checkpoints, and the team wants the agent to be able to resume from the most recent checkpoint if a process is interrupted. How would you implement this resumability?",
    "options": [
      "Apply a checkpointing pattern that persists the agent's intermediate state and reloads that state when resuming an interrupted task.",
      "Increase the agent's timeout to several hours so that interruptions become rare enough to ignore in practice.",
      "Restart the task from the beginning whenever a process is interrupted.",
      "Run two copies of the agent in parallel for every task and use whichever one finishes first as the source of truth."
    ],
    "answer": [
      "Apply a checkpointing pattern that persists the agent's intermediate state and reloads that state when resuming an interrupted task."
    ],
    "explanation": "Checkpointing that persists and reloads intermediate state is the direct implementation of the requested resumability, unlike hoping interruptions won't happen, wasting all progress on restart, or costly redundant parallel runs."
  },
  {
    "id": 141,
    "question": "You are integrating Claude into an application written in Python. The Claude SDK provides a Python client that wraps the underlying REST API. How would you integrate the SDK?",
    "options": [
      "Skip the SDK and embed Claude calls in shell commands invoked from Python, so that the application runs the calls outside the main Python process.",
      "Call the REST API directly with raw HTTP requests so the application avoids the SDK's abstraction between the application code and the API.",
      "Use a different LLM provider's SDK and translate the responses into Claude's API shape so the application can switch providers in the future.",
      "Use the Claude Python SDK and let it handle authentication, retries, and response parsing through its standard documented patterns for Python integrations."
    ],
    "answer": [
      "Use the Claude Python SDK and let it handle authentication, retries, and response parsing through its standard documented patterns for Python integrations."
    ],
    "explanation": "Using the official SDK's built-in handling of auth, retries, and parsing is the standard, most maintainable approach, unlike bypassing it via shell commands, raw HTTP, or an unrelated provider's SDK with translation overhead."
  },
  {
    "id": 142,
    "question": "You are designing a Claude application that will process customer support tickets in two stages: a triage stage that classifies tickets and a response stage that drafts replies. The team is debating whether to use a single Claude call that handles both stages or separate Claude calls for each stage. How would you structure the application?",
    "options": [
      "Use multiple Claude calls in parallel that each draft a complete ticket reply, then have a fourth Claude call select the best one to send to the customer.",
      "Use a single Claude call for both stages, on the grounds that a single call is cheaper than multiple calls in any production Claude application setup.",
      "Use a single Claude call for triage and then use a non-Claude rule-based system for response generation, on the grounds that rule-based systems are more reliable for drafting replies.",
      "Use separate Claude calls for triage and response, because each stage has distinct inputs, outputs, and success criteria that benefit from focused prompts."
    ],
    "answer": [
      "Use separate Claude calls for triage and response, because each stage has distinct inputs, outputs, and success criteria that benefit from focused prompts."
    ],
    "explanation": "Separating distinct stages with different inputs/outputs/success criteria into focused calls typically improves quality and maintainability, versus forcing one call to do both, unnecessary parallel drafting/selection, or replacing generation with rigid rules unsuited to drafting replies."
  },
  {
    "id": 143,
    "question": "The product team has described a new Claude feature in business terms: \"agents should help our analysts produce client memos faster.\" You need to convert this into actionable technical requirements for the engineering team. Your first step would be to...",
    "options": [
      "assess what similar agent-based features have been built internally or in the industry and use those precedents to scope the technical approach.",
      "interpret the functional and infrastructure requirements implied by the business goal.",
      "ask the analysts about the current memo production process to see where they think Claude could be introduced as a prompt-driven drafting step.",
      "examine what model capabilities and tier options are available and determine which best supports the memo drafting workflow described by the product team."
    ],
    "answer": [
      "interpret the functional and infrastructure requirements implied by the business goal."
    ],
    "explanation": "Translating a vague business goal into functional/infrastructure requirements is the necessary first step before looking at precedents, asking users, or evaluating specific model tiers, all of which are premature without first defining the requirements."
  },
  {
    "id": 144,
    "question": "You are deciding between deploying a Claude-powered agent on Anthropic's hosted infrastructure or self-hosting under your own AWS account. The agent processes customer data subject to your enterprise's data residency policies, but the team wants to avoid managing infrastructure. Which deployment model would you recommend?",
    "options": [
      "Deploying on Anthropic-hosted infrastructure to meet the team's shipping timeline, and flagging the data residency requirement for a follow-up compliance review after launch.",
      "Self-hosting under BYOC for an initial pilot, then evaluating whether to migrate to Anthropic-hosted infrastructure once the agent's data handling patterns are better understood.",
      "Self-hosting under BYOC to satisfy the data residency requirement, while working with the infrastructure team to reduce the operational overhead of managing the deployment.",
      "Deploying on Anthropic-hosted infrastructure while the team drafts a request to update the enterprise data residency policy to accommodate hosted AI deployments."
    ],
    "answer": [
      "Self-hosting under BYOC to satisfy the data residency requirement, while working with the infrastructure team to reduce the operational overhead of managing the deployment."
    ],
    "explanation": "Data residency is a hard compliance requirement that BYOC satisfies directly; deploying on hosted infrastructure now and dealing with compliance later, or trying to change policy to avoid the requirement, both risk violating existing constraints."
  },
  {
    "id": 145,
    "question": "Your Claude application is hitting context window limits when processing long customer service transcripts. A junior developer suggests increasing the temperature parameter to fix the issue. How would you respond?",
    "options": [
      "Remove the system prompt entirely to make room for longer transcripts in each request, freeing up context window space the system prompt would otherwise consume.",
      "Adjust the temperature parameter together with the max_tokens parameter, treating the combined adjustment as the team's mechanism for managing context window pressure during long-transcript processing.",
      "Increase the temperature parameter as the junior developer suggested and observe whether the context window issue resolves over the next several runs of the application in production.",
      "Explain that temperature controls sampling randomness and is unrelated to context capacity, then address the context issue through summarization or chunking."
    ],
    "answer": [
      "Explain that temperature controls sampling randomness and is unrelated to context capacity, then address the context issue through summarization or chunking."
    ],
    "explanation": "Temperature affects output randomness, not context window capacity — the correct response corrects this misconception and points to actual context-management solutions like summarization or chunking."
  },
  {
    "id": 146,
    "question": "A Claude application is producing outputs that drift away from the expected JSON format after several conversation turns. The first few turns produce correctly formatted output, but later turns gradually lose structure. How would you address the drift?",
    "options": [
      "Switch to a smaller Claude model and re-test the application to determine whether the drift persists across conversation turns.",
      "Truncate every response to the first few characters, validate that the truncated output matches the expected JSON structure, and log any mismatches for review.",
      "Restart the application after every turn and monitor whether the format remains consistent across subsequent interactions.",
      "Identify the failure mode as format drift, examine how the conversation context evolves over turns, and address the drift through context management or output validation."
    ],
    "answer": [
      "Identify the failure mode as format drift, examine how the conversation context evolves over turns, and address the drift through context management or output validation."
    ],
    "explanation": "Correctly identifying this as format drift tied to conversation context growth, then applying context management/validation, addresses the root cause, unlike swapping models, truncating output destructively, or restarting every turn (which loses conversation continuity)."
  },
  {
    "id": 147,
    "question": "You are implementing a custom tool for your Claude agent. The tool needs to interact with an external pricing service that returns product data. Which of the following best practices would you apply as you develop this tool?",
    "options": [
      "Implement the tool with no error handling and let the agent loop catch failures whenever the pricing service returns an error during operation.",
      "Define the tool with a clear schema, write a precise description for when to call it, and handle pricing service errors explicitly.",
      "Omit the tool description and let the model infer when to use the tool based on the tool's name and the rest of the prompt context.",
      "Define the tool with a loose schema and let the model interpret the inputs flexibly on each call the agent makes."
    ],
    "answer": [
      "Define the tool with a clear schema, write a precise description for when to call it, and handle pricing service errors explicitly."
    ],
    "explanation": "Clear schemas, precise descriptions, and explicit error handling are foundational tool-design best practices; omitting error handling, descriptions, or schema precision all increase failure risk."
  },
  {
    "id": 148,
    "question": "You are setting up a CI/CD pipeline for a new Claude application. The pipeline needs to run automated checks on every pull request before code can be merged. The CI/CD checks would include...",
    "options": [
      "automated tests of the Claude integration, linting, and any other standard quality gates the team applies to its other services.",
      "automated tests of the Claude integration only, with linting handled separately during local development on each developer's machine.",
      "automated linting and security scanning, with Claude integration testing handled manually during pre-release verification by a designated reviewer.",
      "a full end-to-end production deployment on every pull request to catch all possible issues before any code is merged into the main branch."
    ],
    "answer": [
      "automated tests of the Claude integration, linting, and any other standard quality gates the team applies to its other services."
    ],
    "explanation": "Treating the Claude integration as just another component subject to the team's normal CI quality gates (tests, linting, etc.) is the standard, scalable approach, unlike omitting linting, making integration testing manual, or an excessive full production deploy per PR."
  },
  {
    "id": 149,
    "question": "You are extending a Claude agent with a capability that needs to be reusable across multiple teams in the organization, with each team able to invoke and use it independently. How would you build the capability?",
    "options": [
      "As a Skill or MCP server because both are purpose-built for cross-team reuse independently by each consuming team.",
      "As a wrapper around an existing built-in tool that adds the missing functionality, on the grounds that built-in tools cover the reuse pattern when extended carefully.",
      "As a custom tool embedded in this team's agent only, with other teams able to copy the implementation into their own agents when they need the capability.",
      "As a shared library that each team imports into their own Claude application code, with each team responsible for keeping the library up to date in their integration."
    ],
    "answer": [
      "As a Skill or MCP server because both are purpose-built for cross-team reuse independently by each consuming team."
    ],
    "explanation": "Skills and MCP servers are specifically designed for reusable, independently-invokable capabilities across teams/agents, unlike a copy-pasted embedded tool or a shared library requiring each team to manage updates."
  },
  {
    "id": 150,
    "question": "Your Claude application runs a complex research workflow. Some research steps require access to all previous findings, while others only need the current question. The current implementation passes the full conversation history to every step. How would you adjust the implementation?",
    "options": [
      "Continue passing the full conversation history to steps that require prior findings, and reduce the history passed to steps that only need the current question.",
      "Pass recent conversation history to every step and prune older turns beyond a fixed lookback window to limit token consumption across the workflow.",
      "Use subagents or multi-step workflows so each research step receives only the context it needs for its reasoning.",
      "Summarize the conversation history into a compact representation and pass the summary to each step regardless of its context requirements."
    ],
    "answer": [
      "Use subagents or multi-step workflows so each research step receives only the context it needs for its reasoning."
    ],
    "explanation": "Using subagents/multi-step workflows to give each step exactly the context it needs precisely matches the stated requirement (some steps need everything, others need only the current question) — a one-size lookback window or summary-for-everyone doesn't respect this per-step distinction."
  },
  {
    "id": 151,
    "question": "You are establishing the guardrail strategy for a Claude application. The team wants to ensure guardrail failure does not expose the application to unsafe behavior. The guardrail strategy would...",
    "options": [
      "implement a single comprehensive system prompt guardrail and validate its coverage against the application's full range of expected inputs.",
      "layer multiple guardrails so a single guardrail failure does not expose the application to unsafe behavior.",
      "apply guardrails at the application output level only and route flagged responses to a human reviewer before they are delivered to the user.",
      "apply guardrails at the model level only and rely on the model's built-in safety behaviors to handle any cases the guardrail does not explicitly cover."
    ],
    "answer": [
      "layer multiple guardrails so a single guardrail failure does not expose the application to unsafe behavior."
    ],
    "explanation": "Defense-in-depth via layered guardrails ensures no single point of failure exposes the application, directly matching the stated requirement, unlike relying on one comprehensive guardrail, one layer only (output), or model built-ins alone."
  },
  {
    "id": 152,
    "question": "Your Claude application's token costs have grown faster than expected. The team has not been tracking token usage by feature, so the team cannot identify which features are driving cost. How would you respond?",
    "options": [
      "Reduce token usage uniformly across all features by half, applying the cut evenly across the application during normal operation.",
      "Add token usage tracking by feature to the application's logging so the team can identify which features drive cost before recommending changes.",
      "Switch every feature to the smallest model to cut cost broadly across the application during normal operation.",
      "Tell the team that cost growth is unavoidable as the application scales and that no investigation will change the trajectory of the application's cost over the next several quarters."
    ],
    "answer": [
      "Add token usage tracking by feature to the application's logging so the team can identify which features drive cost before recommending changes."
    ],
    "explanation": "Adding per-feature tracking directly addresses the stated lack of visibility, enabling informed decisions, unlike blind uniform cuts, blanket model downgrades, or declaring investigation pointless."
  },
  {
    "id": 153,
    "question": "Your team is choosing how to add a capability to a Claude application. You want to apply the appropriate option, whether built-in tool, custom tool, Skill, or MCP server, based on the use case. You would choose the option that...",
    "options": [
      "is the newest available option among built-in tools, custom tools, Skills, and MCP servers.",
      "is the easiest to build given the team's current development tools and workflows.",
      "is the most familiar to the team based on prior experience with similar capabilities.",
      "matches the use case's scope, reuse needs, and integration context."
    ],
    "answer": [
      "matches the use case's scope, reuse needs, and integration context."
    ],
    "explanation": "Choosing based on the use case's actual scope, reuse needs, and integration context is the principled approach, rather than picking based on novelty, ease, or familiarity alone, which can lead to a mismatched architecture."
  },
  {
    "id": 154,
    "question": "A teammate is debugging a Claude application whose system prompt has grown to several hundred lines and now contains overlapping, contradictory, and obsolete instructions. How would you advise the teammate?",
    "options": [
      "Split the prompt across multiple system prompts so the model sees a smaller portion at any given time.",
      "Audit the prompt for overlap, contradiction, and obsolete content, then refactor so each instruction is clear, current, and non-redundant.",
      "Add more explicit instructions so the most recent rules dominate the model's interpretation of the prompt during each request.",
      "Tighten only the contradictory rules first, treating the overlap and obsolete content as lower-priority work the team can address later."
    ],
    "answer": [
      "Audit the prompt for overlap, contradiction, and obsolete content, then refactor so each instruction is clear, current, and non-redundant."
    ],
    "explanation": "A full audit and refactor to remove overlap, contradiction, and obsolete content directly fixes the root problem, unlike splitting the prompt (doesn't resolve contradictions), adding more instructions (worsens bloat), or partial fixes that leave other issues unaddressed."
  }
]
