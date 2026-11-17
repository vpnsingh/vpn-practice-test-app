export const claudeDeveloperSet1Questions = [
  {
    "id": 1,
    "question": "A developer creates an AI coding assistant for a known workflow with repeatable steps. Which design approach is appropriate?",
    "options": [
      "Use a fixed sequence of prompts",
      "Allow unlimited autonomous exploration",
      "Remove all workflow instructions",
      "Use random decision paths"
    ],
    "answer": [
      "Use a fixed sequence of prompts"
    ],
    "explanation": "For a known, repeatable workflow, a fixed sequence of prompts provides predictable and consistent execution. It guides the AI assistant through each required step in the correct order."
  },
  {
    "id": 2,
    "question": "A team wants stable automated pull request review results from Claude Code. Which method best supports automation?",
    "options": [
      "Split responses using headings",
      "Use stricter markdown parsing rules",
      "Post the entire response for manual review",
      "Use JSON output with a defined schema"
    ],
    "answer": [
      "Use JSON output with a defined schema"
    ],
    "explanation": "A defined JSON schema provides a predictable and structured output format. Automation tools can reliably parse fields such as findings, severity, file, line, and recommendations, making it well suited for consistent PR review workflows."
  },
  {
    "id": 3,
    "question": "A team needs to update every file ending with `.fixture.json` across a monorepo. Searching for the word “fixture” creates noisy results and misses sparse files. Which tool-use strategy should be adopted?",
    "options": [
      "Use Bash commands and paste the entire directory listing.",
      "Use Glob patterns like `**/*.fixture.json` and then Read matching files.",
      "Read all possible files before searching.",
      "Use Grep for \"fixture\" and infer matching files."
    ],
    "answer": [
      "Use Glob patterns like `**/*.fixture.json` and then Read matching files."
    ],
    "explanation": "Glob is designed for finding files based on filename patterns. Using **/*.fixture.json efficiently identifies all matching files across the monorepo, after which Read can inspect their contents before making updates."
  },
  {
    "id": 4,
    "question": "Scenario: Developer Productivity with Claude Your CI job invokes Claude Code successfully and posts a single pull request summary comment. The team now wants automated inline comments for each finding, but the integration frequently breaks because Claude sometimes adds prose, changes field names, or formats findings as markdown. What change best supports reliable automation?",
    "options": [
      "Parse Claude's markdown bullets with regular expressions.",
      "Strengthen the prompt to demand valid JSON only.",
      "Run Claude Code with `--output-format json` and `--json-schema`, then map validated findings to inline PR comments.",
      "Store previous comments and ask Claude to rewrite them into records."
    ],
    "answer": [
      "Run Claude Code with `--output-format json` and `--json-schema`, then map validated findings to inline PR comments."
    ],
    "explanation": "Using structured JSON output with a defined schema provides predictable field names and a machine-readable format. The CI workflow can validate the findings and reliably map each result to the appropriate inline pull request comment."
  },
  {
    "id": 5,
    "question": "Scenario: Multi-Agent Research System The document analysis subagent receives coordinator-selected PDFs and reports from an approved catalog, but it has a generic URL retrieval tool. It sometimes follows links inside documents to: blogs, login pages, and duplicate HTML summaries and then cites those pages instead of the approved sources. What change best addresses this?",
    "options": [
      "Keep fetch_url available, but add prompt instructions warning the subagent never to open links found inside documents.",
      "Replace fetch_url with a load_document tool that accepts catalog document IDs or approved URLs and validates before fetching.",
      "Give the document analysis subagent web search tools too, so it can independently confirm whether linked pages are relevant.",
      "Allow fetch_url for any link, then have synthesis discard citations whose domains are not in the approved catalog."
    ],
    "answer": [
      "Replace fetch_url with a load_document tool that accepts catalog document IDs or approved URLs and validates before fetching."
    ],
    "explanation": "A constrained load_document tool enforces the approved-source boundary at the tool level. By accepting only catalog document IDs or validated approved URLs, the subagent cannot freely follow arbitrary links found inside documents."
  },
  {
    "id": 6,
    "question": "A coordinator launches subagents to analyze API handlers, database writes, and scheduled jobs. Final architecture reports often attach claims to incorrect files or omit line ranges. What improves handoff reliability?",
    "options": [
      "Concatenate complete transcripts",
      "Use regex parsing on summaries.",
      "Ask the synthesizer to reconstruct locations.",
      "Require structured handoff records with paths, symbols, line ranges, and evidence snippets."
    ],
    "answer": [
      "Require structured handoff records with paths, symbols, line ranges, and evidence snippets."
    ],
    "explanation": "Structured handoff records preserve precise, machine-readable evidence from each subagent. Including paths, symbols, line ranges, and evidence snippets allows the synthesizer to accurately connect architectural claims to the correct source locations."
  },
  {
    "id": 7,
    "question": "Scenario: Structured Data Extraction Your QA pipeline flags mistakes in supplier contracts. Analysts accept many findings about missing renewal clauses but reject most findings involving informal pricing language. Current logs store only: l Document ID l Field name l Confidence l Finding text What change should you make first?",
    "options": [
      "Increase QA confidence threshold globally.",
      "Add a structured detected_pattern field to each QA finding, then analyze acceptance rates by pattern and document type.",
      "Store only analyst decisions.",
      "Tell Claude to report only findings analysts accept."
    ],
    "answer": [
      "Add a structured detected_pattern field to each QA finding, then analyze acceptance rates by pattern and document type."
    ],
    "explanation": "Adding a structured detected_pattern field makes findings easier to categorize and analyze. The team can determine which patterns—such as missing renewal clauses or informal pricing language—have higher or lower acceptance rates and then improve the system based on evidence."
  },
  {
    "id": 8,
    "question": "A multi-agent system uses a coordinator and specialized researchers. How should required MCP server configuration be shared across a team repository?",
    "options": [
      "Ask every user to recreate servers manually",
      "Store all servers in personal user configuration",
      "Combine all integrations into one MCP server",
      "Place required shared servers in project-scoped.mcp.json"
    ],
    "answer": [
      "Place required shared servers in project-scoped.mcp.json"
    ],
    "explanation": "A project-scoped.mcp.json allows required MCP server configuration to be stored with the repository and shared consistently across the team. This ensures the coordinator and specialized agents can use the required integrations with a standardized setup."
  },
  {
    "id": 9,
    "question": "A customer support agent alternates unpredictably between `get_customer` and `lookup_order` when handling mixed requests. The MCP tool catalog only contains short autogenerated descriptions. What change should you make first to improve tool selection reliability?",
    "options": [
      "Update the system prompt to tell Claude to think carefully before selecting tools.",
      "Add a keyword router that maps phrases like “order” or “refund” to one tool.",
      "Consolidate get_customer and lookup_order into one broad lookup tool.",
      "Rewrite each MCP tool description to specify purpose, accepted identifiers, returned fields, edge cases, and boundaries."
    ],
    "answer": [
      "Rewrite each MCP tool description to specify purpose, accepted identifiers, returned fields, edge cases, and boundaries."
    ],
    "explanation": "Detailed tool descriptions give Claude the information needed to differentiate similar tools and select the appropriate one. Clearly defining each tool's purpose, inputs, outputs, edge cases, and boundaries improves reliable tool selection."
  },
  {
    "id": 10,
    "question": "A customer support agent alternates unpredictably between `get_customer` and `lookup_order` when handling mixed requests. The MCP tool catalog only contains short autogenerated descriptions. What change should you make first to improve tool selection reliability?",
    "options": [
      "Update the system prompt to tell Claude to think carefully before selecting tools.",
      "Add a keyword router that maps phrases like “order” or “refund” to one tool.",
      "Consolidate get_customer and lookup_order into one broad lookup tool.",
      "Rewrite each MCP tool description to specify purpose, accepted identifiers, returned fields, edge cases, and boundaries."
    ],
    "answer": [
      "Rewrite each MCP tool description to specify purpose, accepted identifiers, returned fields, edge cases, and boundaries."
    ],
    "explanation": "Detailed tool descriptions give Claude the information needed to differentiate similar tools and select the appropriate one. Clearly defining each tool's purpose, inputs, outputs, edge cases, and boundaries improves reliable tool selection."
  },
  {
    "id": 11,
    "question": "A debugging agent investigates unfamiliar systems where the correct solution is unknown at the beginning. Which strategy should it use?",
    "options": [
      "Follow a completely fixed workflow",
      "Use adaptive planning based on discoveries",
      "Ignore intermediate findings",
      "Always restart from the beginning"
    ],
    "answer": [
      "Use adaptive planning based on discoveries"
    ],
    "explanation": "An unfamiliar debugging problem requires the agent to inspect findings, update its understanding, and adjust the plan dynamically. Adaptive planning allows the agent to respond to new evidence and pursue the most promising path toward a solution."
  },
  {
    "id": 12,
    "question": "An engineer asks Claude to add a caching layer around a legacy authorization module. The system has multiple tenants, audit logging, and inconsistent invalidation behavior. What should happen before modifying files?",
    "options": [
      "Implement a simple cache wrapper and iterate later.",
      "Ask targeted questions about invariants, invalidation, audit requirements, and failure modes.",
      "Provide performance goals and let Claude infer rules.",
      "Copy caching patterns from another module."
    ],
    "answer": [
      "Ask targeted questions about invariants, invalidation, audit requirements, and failure modes."
    ],
    "explanation": "Before modifying a complex legacy system, Claude should clarify the security and operational constraints. Targeted questions help identify authorization invariants, tenant boundaries, invalidation rules, audit requirements, and failure scenarios before implementation begins."
  },
  {
    "id": 13,
    "question": "A developer creates a multi-agent workflow where one agent researches documentation and another writes implementation plans. How should information flow between agents be handled?",
    "options": [
      "Assume all agents share the same conversation context",
      "Pass required findings through the coordinator",
      "Allow each agent to access every previous message",
      "Remove the coordinator role"
    ],
    "answer": [
      "Pass required findings through the coordinator"
    ],
    "explanation": "The coordinator should collect relevant findings from the research agent and pass the necessary information to the planning agent. This creates a controlled and reliable information flow between specialized agents."
  },
  {
    "id": 14,
    "question": "A structured extraction system divides documents into sections and sends them to extraction subagents. One subagent temporarily loses access to its source system. The current implementation either returns an empty successful extraction or aborts the entire document. What should you change?",
    "options": [
      "Return an empty extraction object for the failed section.",
      "Terminate the entire document workflow whenever any subagent fails.",
      "Have subagents report unresolved failures with attempted section, failure type, partial fields, and recovery suggestions.",
      "Retry the failed section until it succeeds before returning anything."
    ],
    "answer": [
      "Have subagents report unresolved failures with attempted section, failure type, partial fields, and recovery suggestions."
    ],
    "explanation": "Subagents should report the attempted section, failure type, partial fields, and recovery suggestions so the coordinator can distinguish an unresolved failure from an empty result and choose how to recover."
  },
  {
    "id": 15,
    "question": "A multi-agent research system occasionally generates reports while the synthesis agent is still incomplete, resulting in missing or unverifiable citations. What change prevents invalid reports?",
    "options": [
      "Generate reports immediately and remove invalid citations afterward.",
      "Tell the report agent to refuse incomplete synthesis.",
      "Check whether synthesis messages contain words like “complete.”",
      "Block report-generation tasks until synthesis returns a structured citation manifest and success status."
    ],
    "answer": [
      "Block report-generation tasks until synthesis returns a structured citation manifest and success status."
    ],
    "explanation": "This creates an explicit workflow gate. The report cannot start until the synthesis agent provides a structured citation manifest and confirms successful completion. This ensures the report is based on complete and verifiable evidence."
  },
  {
    "id": 16,
    "question": "A migration assistant sometimes starts dependency analysis before collecting required package manager and framework versions. What change most reliably enforces the correct first step?",
    "options": [
      "Detect whether Claude mentions metadata completion in natural language.",
      "Force the metadata extraction tool with tool_choice for the first request.",
      "Set tool_choice to any for the first request.",
      "Strengthen the system prompt requiring metadata extraction first."
    ],
    "answer": [
      "Force the metadata extraction tool with tool_choice for the first request."
    ],
    "explanation": "Using tool_choice explicitly forces the required metadata extraction tool to run first. This provides a deterministic workflow and prevents dependency analysis from starting before the required package manager and framework versions are collected."
  },
  {
    "id": 17,
    "question": "A team wants Claude-generated pull request reviews to integrate with existing development systems. What output approach should be selected?",
    "options": [
      "Free-form text responses",
      "Structured JSON with validation rules",
      "Long markdown explanations only",
      "Unformatted comments"
    ],
    "answer": [
      "Structured JSON with validation rules"
    ],
    "explanation": "Structured JSON provides a consistent, machine-readable format. Validation rules or a defined schema ensure required fields, data types, and structure remain consistent, making the output easier to integrate with existing PR and development tools."
  },
  {
    "id": 18,
    "question": "A team wants Claude-generated pull request reviews to integrate with existing development systems. What output approach should be selected?",
    "options": [
      "Free-form text responses",
      "Structured JSON with validation rules",
      "Long markdown explanations only",
      "Unformatted comments"
    ],
    "answer": [
      "Structured JSON with validation rules"
    ],
    "explanation": "Structured JSON provides a consistent, machine-readable format. Validation rules or a defined schema ensure required fields, data types, and structure remain consistent, making the output easier to integrate with existing PR and development tools."
  },
  {
    "id": 19,
    "question": "A developer wants Claude to return API responses that can be directly consumed by another application. Which technique should be used?",
    "options": [
      "Request formatted paragraphs",
      "Use structured output with defined fieldscorrect",
      "Ask Claude for longer explanations",
      "Allow unrestricted responses"
    ],
    "answer": [
      "Use structured output with defined fieldscorrect"
    ],
    "explanation": "Structured output with defined fields provides a consistent, machine-readable response format. This allows another application to reliably parse and consume the API response."
  },
  {
    "id": 20,
    "question": "Multiple backend problems are returned to an agent as the same message: “Operation failed.” Problems include invalid order IDs, temporary service timeouts, expired tokens, and policy restrictions. What change most improves recovery behavior?",
    "options": [
      "Retry every failed tool call twice before escalation.",
      "Keep generic failures and let Claude infer retryability.",
      "Map failures to customer sentiment levels.",
      "Return structured MCP errors with categories, retryability, and user-safe details."
    ],
    "answer": [
      "Return structured MCP errors with categories, retryability, and user-safe details."
    ],
    "explanation": "Structured MCP errors give the agent explicit recovery information. For example, a timeout can be marked retryable, while an invalid order ID or policy restriction can be marked non-retryable. User-safe details also allow the agent to communicate an appropriate explanation without exposing sensitive backend information."
  },
  {
    "id": 21,
    "question": "Scenario: Multi-Agent Research System You are building a multi-agent research system using the Claude Agent SDK. A coordinator agent delegates to specialized subagents: one searches the web, one analyzes documents, one synthesizes findings, and one generates reports. Your coordinator's document-analysis subagent depends on an internal library-catalog MCP server. It works in your local Claude Code session, but two teammates who cloned the repository cannot access the catalog tools, so their runs fall back to weaker web searches. Separately, one researcher is testing an experimental notes server that should not affect the team. What should you change?",
    "options": [
      "Document per-user claude mcp add commands in README, and ask each researcher to recreate both servers locally.",
      "Place both servers in each user's ~/.claude.json, and rely on onboarding scripts to synchronize changes across machines.",
      "Combine the catalog and notes integrations into one MCP server, and expose only role-specific tools to subagents.",
      "Move the required catalog server into project-scoped.mcp.json, and keep the experimental notes server in user-scoped ~/.claude.json."
    ],
    "answer": [
      "Move the required catalog server into project-scoped.mcp.json, and keep the experimental notes server in user-scoped ~/.claude.json."
    ],
    "explanation": "Project-scoped.mcp.json is appropriate for team-shared MCP configuration that should travel with the repository. This ensures teammates receive the required catalog server configuration when they clone the project. The experimental notes server is personal and should remain in ~/.claude.json, keeping it isolated from the shared team configuration."
  },
  {
    "id": 22,
    "question": "Scenario: Developer Productivity with Claude A Claude-powered helper updates legacy configuration files to a new format. Initial generations look reasonable, but repeated runs keep breaking different corner cases: l Missing optional sections l Duplicate keys l Large files with thousands of entries Developers have been sending prompts like \"fix the migration bugs\" and receiving inconsistent improvements. What refinement approach should they use next?",
    "options": [
      "Ask Claude to reread the entire legacy codebase and rewrite the migration helper from scratch after each failed run.",
      "Remove the most difficult corner-case checks temporarily so Claude can stabilize the happy-path migration behavior first.",
      "Tell Claude the output is still wrong, request a more careful implementation, and continue until reviewers approve it.",
      "Share the failing test names, inputs, expected versus actual outputs, and stack traces, then iterate on minimal fixes."
    ],
    "answer": [
      "Share the failing test names, inputs, expected versus actual outputs, and stack traces, then iterate on minimal fixes."
    ],
    "explanation": "Failing test names, inputs, expected and actual outputs, and stack traces provide actionable evidence to identify the failure and make a targeted fix. Iterating on minimal changes reduces the risk of new regressions."
  },
  {
    "id": 23,
    "question": "Supplier contract extraction returns null values for effective dates and renewal terms even though information exists in cover letters, footnotes, and table captions. What change most improves accuracy?",
    "options": [
      "Retry until all metadata fields contain values.",
      "Make fields required and non-null.",
      "Add targeted few-shot examples showing extraction from varied document sections.",
      "Tell Claude null values are unacceptable for supplier contracts."
    ],
    "answer": [
      "Add targeted few-shot examples showing extraction from varied document sections."
    ],
    "explanation": "Targeted few-shot examples demonstrate that relevant information can appear in cover letters, footnotes, table captions, and other non-standard sections. This gives Claude concrete examples of the expected extraction behavior and improves consistency across varied document layouts."
  },
  {
    "id": 24,
    "question": "A legacy subscription service has cancellation behavior distributed across command-line scripts, web handlers, and scheduled jobs. Previous direct edits often targeted the wrong abstraction. Which workflow should be recommended first?",
    "options": [
      "Read every repository file before implementing changes.",
      "Use plan mode to map relevant flows and compare implementation points before modifications.",
      "Directly edit and rely on test failures to guide corrections.",
      "Start separate direct sessions for each module and combine changes later."
    ],
    "answer": [
      "Use plan mode to map relevant flows and compare implementation points before modifications."
    ],
    "explanation": "Plan mode allows Claude to investigate the codebase, trace the cancellation behavior, identify related components, and compare possible implementation points before making changes. This is especially useful when behavior is distributed across multiple abstractions."
  },
  {
    "id": 25,
    "question": "A team builds an application where Claude must classify customer requests into predefined categories. Which approach provides the most consistent results?",
    "options": [
      "Provide examples of each category and expected classifications",
      "Ask Claude to create new categories when needed",
      "Use a random classification approach.",
      "Remove category definitions from the prompt"
    ],
    "answer": [
      "Provide examples of each category and expected classifications"
    ],
    "explanation": "Providing clear category definitions along with examples of inputs and their expected classifications helps Claude understand the intended boundaries between categories. This few-shot approach improves consistency and reduces ambiguous classifications."
  },
  {
    "id": 26,
    "question": "Scenario: Customer Support Resolution Agent You are building a customer support resolution agent using the Claude Agent SDK. The agent handles high-ambiguity requests like returns, billing disputes, and account issues. It has access to backend systems through MCP tools (get_customer, lookup_order, process_refund, escalate_to_human). Your target is 80%+ first-contact resolution while knowing when to escalate. During billing disputes, the agent creates condensed case notes before responding or escalating. Human reviewers report that notes sometimes say things like \"refund approved\" or \"customer was promised free return shipping,\" but they cannot tell whether each claim came from the customer, an order record, a policy document, or the agent's inference. In several escalations, customer allegations were treated as verified backend facts. What change would most effectively reduce this reliability risk?",
    "options": [
      "Compress each case into a shorter narrative summary and instruct reviewers to ask follow-up questions when provenance seems unclear.",
      "Store complete raw transcripts and tool outputs only, relying on human reviewers to reconstruct sources when disputes arise.",
      "Require summaries and handoffs to carry structured claim-source mappings with source type, excerpt or tool field, timestamp, and verification status.",
      "Ask the agent to include only high-confidence claims in final responses, omitting uncertain details from summaries and escalations."
    ],
    "answer": [
      "Require summaries and handoffs to carry structured claim-source mappings with source type, excerpt or tool field, timestamp, and verification status."
    ],
    "explanation": "Structured claim provenance makes it clear where every important statement originated and whether it has been verified. For example, a claim can be explicitly associated with a customer statement, backend field, policy document, or agent inference. Including the source type, evidence excerpt/tool field, timestamp, and verification status gives human reviewers enough context to distinguish customer allegations from verified system facts."
  },
  {
    "id": 27,
    "question": "A research system creates coherent reports, but coverage gaps remain. For example, AI regulation reports have strong EU coverage but weak Asia-Pacific coverage. What change improves completeness?",
    "options": [
      "Repeat broad assignments twice.",
      "Hide unsupported sections.",
      "Increase coordinator iteration count to a fixed number.",
      "Add a coordinator review loop that checks coverage, delegates follow-ups, and reruns synthesis."
    ],
    "answer": [
      "Add a coordinator review loop that checks coverage, delegates follow-ups, and reruns synthesis."
    ],
    "explanation": "A coordinator review loop can check coverage against research requirements, identify gaps such as weak Asia-Pacific coverage, delegate targeted follow-up research, and rerun synthesis."
  },
  {
    "id": 28,
    "question": "A developer wants Claude to review code and return only actionable issues. What prompt design is most effective?",
    "options": [
      "Request every possible improvement",
      "Define what qualifies as an issue and provide examples.",
      "Ask for unlimited suggestions",
      "Avoid describing expected output"
    ],
    "answer": [
      "Define what qualifies as an issue and provide examples."
    ],
    "explanation": "Clearly defining what counts as an actionable issue gives Claude precise evaluation criteria. Examples further demonstrate the expected severity, scope, and output behavior, leading to more consistent reviews."
  },
  {
    "id": 29,
    "question": "Scenario: Customer Support Resolution Agent Production logs show: l get_customer returns ISO 8601 timestamps and numeric loyalty tiers. l lookup_order returns Unix timestamps and numeric status codes. The agent sometimes miscomputes return windows or mislabels order status. You cannot modify upstream MCP servers. What change best addresses the reliability issue?",
    "options": [
      "Escalate all cases with mixed timestamp formats.",
      "Add a PostToolUse hook that converts tool results into canonical dates, status labels, and tier fields before Claude sees it.",
      "Add system instructions telling Claude to remember each tool's format",
      "Modify the final customer response parser."
    ],
    "answer": [
      "Add a PostToolUse hook that converts tool results into canonical dates, status labels, and tier fields before Claude sees it."
    ],
    "explanation": "A PostToolUse hook can normalize inconsistent tool outputs before they are processed by Claude. Converting timestamps, status codes, and tier values into consistent canonical representations reduces interpretation errors and makes downstream reasoning more reliable."
  },
  {
    "id": 30,
    "question": "A multi-agent research system assigns high confidence to most report claims, but customer audits find citation mismatches concentrated in regulatory topics and newly added source types. What review strategy should be implemented before further reducing reviewer coverage?",
    "options": [
      "Review only claims with low confidence scores.",
      "Use one aggregate accuracy metric and reduce review after reaching the target.",
      "Auto-publish high-confidence reports and investigate only customer defects.",
      "Randomly sample high-confidence claims across topic, source type, and report section, then track errors by category."
    ],
    "answer": [
      "Randomly sample high-confidence claims across topic, source type, and report section, then track errors by category."
    ],
    "explanation": "Stratified sampling helps detect hidden errors within high-confidence outputs. Sampling across topic, source type, and report section is particularly important because the existing defects are concentrated in regulatory topics and newly added sources. Tracking errors by category also reveals where additional reviewer coverage or targeted improvements are needed before reducing human review."
  },
  {
    "id": 31,
    "question": "Scenario: Structured Data Extraction A labeled validation run reports: l 97.2% aggregate extraction accuracy l coverage across NDAs, invoices, insurance forms, and purchase orders Leadership wants to bypass human review for any record where Claude returns high confidence, but pilot complaints suggest errors cluster in specific document families and fields. What should you do before reducing reviewer coverage?",
    "options": [
      "Analyze accuracy by document type and extracted field, then automate only segments meeting validated thresholds while routing others to review.",
      "Randomly review a fixed percentage of every extraction category, regardless of document type, field, or prior validation performance.",
      "Raise the global confidence threshold until the aggregate validation accuracy reaches 99%, then disable review for remaining outputs.",
      "Use the 97.2% aggregate accuracy to auto-approve all high-confidence outputs, monitoring user complaints for emerging regressions."
    ],
    "answer": [
      "Analyze accuracy by document type and extracted field, then automate only segments meeting validated thresholds while routing others to review."
    ],
    "explanation": "Aggregate accuracy can hide localized weaknesses. A 97.2% overall score may look strong while particular document types or fields have significantly higher error rates. Breaking accuracy down by document type and extracted field identifies these weak segments. Automation can then be safely applied only where validation shows acceptable performance, while higher-risk segments continue receiving human review."
  },
  {
    "id": 32,
    "question": "Scenario: Structured Data Extraction You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates output using JSON schemas, and maintains high accuracy. It must handle edge cases gracefully and integrate with downstream systems. Your QA prompt reviews a 90-page vendor onboarding packet and its extracted records in one call. It catches detailed field errors in the first few forms, but misses mismatched tax IDs in middle attachments and contradicts itself about required signatures. Which review architecture would best improve reliability?",
    "options": [
      "Run three full-packet reviews and accept only issues reported by at least two reviewers.",
      "Ask the same extraction instance to critique its own output using extended thinking before returning final records.",
      "Increase max_tokens and add stronger instructions to be exhaustive while reviewing the entire packet once.",
      "Run focused review passes on each packet section, then run a separate consistency pass across cross-section fields."
    ],
    "answer": [
      "Run focused review passes on each packet section, then run a separate consistency pass across cross-section fields."
    ],
    "explanation": "Section-level review divides the large document into focused, manageable review units, increasing the chance of detecting detailed errors throughout the packet. A separate consistency pass can then compare information across sections, catching issues such as mismatched tax IDs and contradictory signature requirements. This combines local completeness with global consistency, making the review architecture more reliable."
  },
  {
    "id": 33,
    "question": "Scenario: Structured Data Extraction You are building a structured data extraction system using Claude. The system extracts information from unstructured documents, validates output using JSON schemas, and maintains high accuracy. Production review shows inconsistent routing: documents with unreadable required values and unfamiliar layouts sometimes flow into downstream systems, while routine invoices missing optional purchase-order numbers are sent for manual review. The extraction schema already permits nullable fields for data that is absent from the source. What change would most effectively improve routing decisions?",
    "options": [
      "Require retries until all schema fields are populated, then escalate only documents still containing null values",
      "Escalate documents based on frustrated wording, urgent language, or negative sentiment detected in the source text.",
      "Add explicit human-review criteria with few-shot examples distinguishing absent optional fields, unreadable required fields, and unsupported document types.",
      "Route documents to reviewers whenever the model reports confidence below a single global threshold after extraction."
    ],
    "answer": [
      "Add explicit human-review criteria with few-shot examples distinguishing absent optional fields, unreadable required fields, and unsupported document types."
    ],
    "explanation": "Explicit criteria establish clear boundaries for routing. Few-shot examples help Claude distinguish between: Absent optional fields → normally acceptable; no escalation. Unreadable required fields → requires human review. Unsupported or unfamiliar document layouts → requires human review. This improves routing consistency while preserving legitimate nullable values."
  },
  {
    "id": 34,
    "question": "A development team uses Claude Agent SDK for different workflows. Dependency reviews follow fixed rules, while debugging unknown systems requires exploration. Which decomposition strategy is best?",
    "options": [
      "Use fixed steps for every workflow",
      "Use dynamic planning for every workflow",
      "Use prompt chains for stable tasks and adaptive planning for investigations",
      "Use one large prompt for all tasks"
    ],
    "answer": [
      "Use prompt chains for stable tasks and adaptive planning for investigations"
    ],
    "explanation": "Stable workflows with predictable steps are well suited to prompt chains, which provide consistency and repeatability. For uncertain debugging tasks, adaptive planning allows Claude to adjust its approach based on discoveries during the investigation."
  },
  {
    "id": 35,
    "question": "A development team uses Claude Agent SDK with multiple subagents to analyze a legacy payment system. How should the coordinator improve reliability when passing discovery results to a planning subagent?",
    "options": [
      "Replace specialized subagents with one general-purpose subagent",
      "Ask the planner to infer missing dependencies from file names",
      "Allow subagents to communicate directly without coordination",
      "Maintain shared state and include relevant findings in later prompts"
    ],
    "answer": [
      "Maintain shared state and include relevant findings in later prompts"
    ],
    "explanation": "Maintaining shared state allows the coordinator to preserve important discovery results and explicitly provide relevant findings to the planning subagent. This creates a reliable handoff and reduces information loss between stages."
  },
  {
    "id": 36,
    "question": "Scenario: Developer Productivity with Claude You are building developer productivity tools using the Claude Agent SDK. The agent helps engineers explore unfamiliar codebases, understand legacy systems, generate boilerplate code, and automate repetitive tasks. Dependency license reviews follow a stable rubric with known checks, while production bug investigations in unfamiliar services vary based on discovered call paths, logs, and failing tests. The current single-pass prompt misses checklist items during reviews and wastes effort during investigations. Which decomposition strategy is most appropriate?",
    "options": [
      "Use the same fixed sequential checklist for both workflows, requiring every investigation to complete every predefined step.",
      "Use dynamic task planning for every workflow, allowing the agent to redefine review criteria as it discovers code patterns.",
      "Use a fixed prompt chain for stable review rubrics, and let the agent adapt subtasks during open-ended investigations.",
      "Use one large prompt for both request types, asking the agent to reason carefully before using any tools."
    ],
    "answer": [
      "Use a fixed prompt chain for stable review rubrics, and let the agent adapt subtasks during open-ended investigations."
    ],
    "explanation": "This is the best decomposition strategy. Stable workflows such as dependency license reviews should use deterministic steps so every required check is performed consistently. For production bug investigations, the agent should use adaptive planning because the correct next step depends on discovered call paths, logs, test failures, and other evidence. This combines reliability for predictable tasks with flexibility for exploratory tasks."
  },
  {
    "id": 37,
    "question": "A CI pipeline needs Claude Code findings to create automated pull request comments. Which approach provides the most reliable integration?",
    "options": [
      "Parse markdown output with regular expressions",
      "Ask Claude to always return JSON in the prompt",
      "Use JSON output with JSON schema validation",
      "Rewrite previous comments into structured records"
    ],
    "answer": [
      "Use JSON output with JSON schema validation"
    ],
    "explanation": "A structured JSON response combined with JSON Schema validation provides predictable fields and data types. The CI pipeline can validate the response before converting findings into automated pull request comments. This makes the integration more reliable, machine-readable, and deterministic."
  },
  {
    "id": 38,
    "question": "A customer support agent using Claude Agent SDK receives multiple possible customer profiles when users provide common names and partial addresses. The agent sometimes selects a profile based on recent activity or name similarity, causing incorrect refunds and privacy disclosures. What change best improves reliability without unnecessarily routing routine cases to humans?",
    "options": [
      "Rank matching customers by recent activity and continue with the highest ranked profile when confidence exceeds a threshold.",
      "Call lookup_order for each matching customer profile, then select the account whose order details best match the message.",
      "Escalate every request with duplicate customer records to a human agent before performing any lookup_order calls.",
      "Treat multiple customer matches as unresolved identity and request a disambiguating identifier before any order or refund operations."
    ],
    "answer": [
      "Treat multiple customer matches as unresolved identity and request a disambiguating identifier before any order or refund operations."
    ],
    "explanation": "When multiple profiles match, the agent should request a reliable disambiguating identifier before accessing orders or performing sensitive actions such as refunds. This fail-safe identity resolution protects customer data and prevents incorrect account actions."
  },
  {
    "id": 39,
    "question": "A research report contains two credible studies with different productivity statistics. The synthesis agent chooses the larger number as the definitive result. What change improves reliability?",
    "options": [
      "Search until another source confirms one statistic",
      "Select the larger study and remove the smaller one.",
      "Average the two statistics.",
      "Preserve both statistics with source attribution, methodology notes, and conflict annotation"
    ],
    "answer": [
      "Preserve both statistics with source attribution, methodology notes, and conflict annotation"
    ],
    "explanation": "The agent should explicitly preserve the disagreement and explain where each statistic came from and why the results may differ. This improves reliability by preventing the synthesis agent from arbitrarily selecting one number and maintaining clear source provenance and uncertainty."
  },
  {
    "id": 40,
    "question": "A structured extraction QA system produces valid JSON, but reviewer findings are inconsistent and difficult to act on. What should improve consistency?",
    "options": [
      "Add examples showing complete actionable findings",
      "Require every schema field to be non-null",
      "Use regular expressions to repair missing details",
      "Request only concise high-confidence responses"
    ],
    "answer": [
      "Add examples showing complete actionable findings"
    ],
    "explanation": "Providing few-shot examples of complete, actionable findings shows the model exactly what a useful review should contain. This improves consistency in both the content and level of detail of QA findings."
  },
  {
    "id": 41,
    "question": "You are setting up a Claude application that requires API keys for several external services. What is the best way to store the keys?",
    "options": [
      "Email the keys to each developer as needed and have each developer paste the keys into their local environment when they begin working on the application's code.",
      "Use a single shared key across all external services, so any developer working on the application can find the keys easily during development.",
      "Store the keys in a secrets manager or environment-specific configuration that is not checked into source code, and load them at runtime.",
      "Put the keys in the application's configuration file and check the configuration file into the team's repository alongside the rest of the source code."
    ],
    "answer": [
      "Store the keys in a secrets manager or environment-specific configuration that is not checked into source code, and load them at runtime."
    ],
    "explanation": "This is the recommended approach. Secrets should be kept outside the source repository and loaded securely at runtime. A secrets manager also supports better access control, rotation, auditing, and environment separation."
  },
  {
    "id": 42,
    "question": "You are designing a Claude application that maintains user sessions across multi-turn conversations. The product team has asked how the application will handle session lifecycle: when sessions should expire, how state is reset, and how the application avoids carrying stale context into new conversations. How would you design session lifecycle?",
    "options": [
      "Define a single short session timeout that applies across all conversations and treat the timeout as the application's complete session lifecycle mechanism.",
      "Define explicit session expiration rules, state reset triggers, and rules for starting fresh sessions so stale context does not leak into new conversations.",
      "Define state reset triggers tied to specific application events but apply them across all sessions globally, with no per-session expiration rules.",
      "Define explicit session expiration rules but rely on users to start new conversations when they want fresh context, with no automatic reset triggers in the application."
    ],
    "answer": [
      "Define explicit session expiration rules, state reset triggers, and rules for starting fresh sessions so stale context does not leak into new conversations."
    ],
    "explanation": "A robust session lifecycle should explicitly define when sessions expire, when state is reset, and when a new session must begin. This prevents stale context from being unintentionally carried into a new conversation and makes session behavior predictable and reliable."
  },
  {
    "id": 43,
    "question": "You are building an MCP server that exposes several internal data sources as MCP resources. The server needs to be deployed so multiple Claude applications can integrate with it. How would you approach the build and deployment?",
    "options": [
      "Build the MCP server with resource and tool definitions scoped to the first Claude application that needs it, and extend the definitions to additional applications as each integration is requested.",
      "Author the server with clearly defined resources, tools, and prompts, choose a communication pattern, and deploy to an accessible hosting environment.",
      "Deploy the MCP server only on individual developer machines, with the Claude applications unable to reach the server outside each developer's machine.",
      "Bypass the MCP server and embed each data source directly in every Claude application that needs the data, with each application maintaining its own integration."
    ],
    "answer": [
      "Author the server with clearly defined resources, tools, and prompts, choose a communication pattern, and deploy to an accessible hosting environment."
    ],
    "explanation": "An MCP server should expose well-defined resources, tools, and prompts, use an appropriate communication/transport pattern, and be deployed where the Claude applications can access it. This makes the server reusable, maintainable, and accessible to multiple Claude applications."
  },
  {
    "id": 44,
    "question": "Your team is preparing a new Claude application for production, and the product team has asked for a cost projection. The team needs to estimate the cost based on expected request volume, average input length, and average output length. How would you build the projection?",
    "options": [
      "Build a cost model that combines expected request volume, average input tokens, average output tokens, the chosen model's pricing, and any caching benefits.",
      "Build a cost model that uses the average per-request cost from a similar Claude application the team built last year, scaling that figure by expected request volume.",
      "Build a cost model that combines expected request volume and average input tokens, treating output tokens as a small enough share of cost to leave out of the projection.",
      "Build a cost model based on expected request volume and the chosen model's pricing, treating average input and output token counts as variables to be estimated post-launch."
    ],
    "answer": [
      "Build a cost model that combines expected request volume, average input tokens, average output tokens, the chosen model's pricing, and any caching benefits."
    ],
    "explanation": "A reliable cost projection should account for all major cost drivers: request volume, input tokens, output tokens, model pricing, and applicable caching benefits. This produces a more realistic estimate and helps the team understand how usage patterns affect overall costs."
  },
  {
    "id": 45,
    "question": "Your Claude application uses structured output that is consumed by downstream code. The team wants to handle malformed or unexpected output gracefully so it does not crash downstream systems. The best choice for handling this issue would be to...",
    "options": [
      "Crash on any unexpected output and require manual recovery on affected requests the application handles during normal operation.",
      "Use the output the model produces and leave schema enforcement to a later phase of production after the application is more complete.",
      "Apply defensive parsing to handle unexpected fields, missing values, and type mismatches that the downstream code might otherwise crash on.",
      "Silently drop any output that does not match expectations so downstream systems do not see the malformed output the application receives from the model."
    ],
    "answer": [
      "Apply defensive parsing to handle unexpected fields, missing values, and type mismatches that the downstream code might otherwise crash on."
    ],
    "explanation": "Defensive parsing makes the application resilient to malformed, incomplete, or unexpected structured output. The downstream code can validate fields, handle missing values, tolerate unknown fields where appropriate, and safely handle type mismatches."
  },
  {
    "id": 46,
    "question": "Your team uses several plugins across multiple Claude applications, and a recent plugin update introduced a regression. The team had not been tracking plugin versions, so the team cannot easily identify which version was previously working. How would you address this?",
    "options": [
      "Add explicit plugin version tracking to the project's configuration so the team can identify, pin, and upgrade plugin versions deliberately.",
      "Upgrade every plugin to the latest version on a regular cadence to keep version drift small, on the grounds that drift contributes to regression risk.",
      "Stop using all plugins until the team can rebuild equivalent functionality directly into the application code, treating plugin avoidance as a way to remove version-related risk.",
      "Treat plugins as untrackable third-party code and rely on plugin authors to communicate breaking changes when they happen, with no internal version tracking."
    ],
    "answer": [
      "Add explicit plugin version tracking to the project's configuration so the team can identify, pin, and upgrade plugin versions deliberately."
    ],
    "explanation": "Explicit version tracking allows the team to identify known-good versions, pin dependencies, reproduce environments, and control upgrades. This makes troubleshooting much easier when a plugin update introduces a regression."
  },
  {
    "id": 47,
    "question": "You are deciding between deploying a Claude-powered agent on Anthropic's hosted infrastructure or self-hosting under a \"bring your own cloud\" model in your own AWS account. The agent processes customer data subject to your enterprise's data residency policies, but the team wants to ship quickly and avoid managing infrastructure. Which deployment model would you recommend?",
    "options": [
      "Deploying on Anthropic-hosted infrastructure to meet the team's shipping timeline, and flagging the data residency requirement for a follow-up compliance review after launch.",
      "Self-hosting under BYOC to satisfy the data residency requirement, while working with the infrastructure team to reduce the operational overhead of managing the deployment.",
      "Deploying on Anthropic-hosted infrastructure while the team drafts a request to update the enterprise data residency policy to accommodate hosted Al deployments.",
      "Self-hosting under BYOC for an initial pilot, then evaluating whether to migrate to Anthropic-hosted infrastructure once the agent's data-handling patterns are better understood."
    ],
    "answer": [
      "Self-hosting under BYOC to satisfy the data residency requirement, while working with the infrastructure team to reduce the operational overhead of managing the deployment."
    ],
    "explanation": "BYOC gives the organization greater control over where customer data is processed and stored, supporting data-residency requirements; infrastructure support can help manage the operational overhead."
  },
  {
    "id": 48,
    "question": "Your Claude application uses tool calling to fetch patient data and generate summary reports. The flow occasionally fails because the model returns a tool_use block that references arguments not present in the schema, and your application code does not handle this case gracefully. How would you address this?",
    "options": [
      "Stop using tool calling entirely and replace tools with prompted text generation that asks the model to describe what it would do.",
      "Validate the tool_use block's arguments against the tool schema before dispatching the tool and handle invalid arguments as a recognized error path.",
      "Retry the same request repeatedly until the model returns a valid tool_use block that matches the schema as expected.",
      "Log invalid tool_use blocks when they occur and allow the tool dispatch to proceed, relying on the tool's own error handling to surface failures back to the application."
    ],
    "answer": [
      "Validate the tool_use block's arguments against the tool schema before dispatching the tool and handle invalid arguments as a recognized error path."
    ],
    "explanation": "The application should validate the model-generated arguments against the defined tool schema before dispatching the tool. If the arguments are invalid, the application can reject the call and handle it through a defined error/recovery path. This prevents malformed requests from reaching downstream systems."
  },
  {
    "id": 49,
    "question": "Your Claude application's prompt was written months ago and has not been updated. The team has discovered through evals that the prompt produces good results on common cases but underperforms on a specific category of inputs that has grown in volume. How would you respond?",
    "options": [
      "Tell users to avoid the underperforming category by adding warnings in the application's user interface about handled inputs.",
      "Add the underperforming category to a separate Claude application with its own prompt so the original prompt does not change.",
      "Iterate on the prompt to address the underperforming category, validate the change with evals, and continue refining as needed.",
      "Replace the prompt with a new one aligned to the underperforming category, treating any common-case performance change as a known tradeoff."
    ],
    "answer": [
      "Iterate on the prompt to address the underperforming category, validate the change with evals, and continue refining as needed."
    ],
    "explanation": "The best approach is an iterative prompt optimization cycle: Identify weakness → update prompt → run evals → compare results → refine. This allows the team to improve performance on the growing input category while checking that the changes do not negatively affect the existing common cases."
  },
  {
    "id": 50,
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
  }
]
