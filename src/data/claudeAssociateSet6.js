const rawClaudeAssociateSet6 = [
  {
    "id": 1,
    "question": "You are a Claude associate running an ethics review on a Claude-assisted deliverable before publication. Which is the correct order of review steps?",
    "options": {
      "A": "Assess the output’s content, audience, and risk; then identify whether the work is suitable to publish or needs revision.",
      "B": "Determine whether the output is transparent and traceable, then compare it against policy and the user's intended audience.",
      "C": "Review the source material first, then determine whether the deliverable should be approved or revised based on the final output.",
      "D": "Inspect the draft for formatting, then verify whether the content exceeds the scope of the approved use case."
    },
    "answer": "D",
    "explanation": "The review should first assess the content and risk, identify the audience and impact, make or escalate targeted changes, confirm transparency requirements, and document the outcome."
  },
  {
    "id": 2,
    "question": "A communications manager is drafting a prompt for Claude to produce a quarterly newsletter for store managers in three regions. The agreed key messages, regional details, and a prior newsletter the team liked are all available. Which prompt approach is most likely to produce a usable first draft?",
    "options": {
      "A": "Attach the prior newsletter, and ask Claude to match its tone and structure while incorporating the new key messages for the three named regions.",
      "B": "Name the audience, the three regions, the length, the tone, and the agreed key messages, and reference the prior newsletter only as a tone example.",
      "C": "Provide the agreed key messages and the three regions, and ask Claude to choose an appropriate length and tone for store managers.",
      "D": "Attach the prior newsletter and the agreed key messages, and ask Claude to produce a similar newsletter for this quarter."
    },
    "answer": "B",
    "explanation": "Explicitly specify the audience, regions, length, tone, and required messages; use the prior newsletter as a style reference rather than relying on it to carry the full specification."
  },
  {
    "id": 3,
    "question": "Preparing an AI-assisted work product for external delivery, a senior manager is applying the AI Fluency Framework Discernment competency. Which step best reflects Discernment principles?",
    "options": {
      "A": "Identify the sections of the work product that read as inconsistent or unfamiliar and verify those sections, treating the smoothly written sections as reliable.",
      "B": "Identify the elements of the work product that must be independently verified or corrected before delivery, and take ownership of those verifications as a professional accountability obligation.",
      "C": "Place accountability for the AI-assisted work product with Claude itself, treating the tool as the responsible party for the deliverable.",
      "D": "Deliver the work product, treating the AI assistance itself as sufficient assurance of accuracy for external delivery."
    },
    "answer": "B",
    "explanation": "Discernment requires identifying what needs independent verification and taking professional responsibility for those checks."
  },
  {
    "id": 4,
    "question": "You are a knowledge worker summarizing common prompt failure patterns for the team. Which pattern most often produces vague or off-target output?",
    "options": {
      "A": "A prompt that names a topic but does not state the task, audience, or required output structure",
      "B": "A prompt that names the role, audience, and output format, but does not state the specific task",
      "C": "A prompt that names the role, task, and audience, but does not specify the required output format",
      "D": "A prompt that names the task and required output format, but does not specify the intended audience"
    },
    "answer": "A",
    "explanation": "A prompt that only names the topic leaves the task, audience, and desired structure ambiguous, making vague or off-target output more likely."
  },
  {
    "id": 5,
    "question": "A strategy manager is reviewing a Claude-generated recommendation to consolidate the company's two regional warehouses into one. The recommendation cites three source documents as the supporting evidence. Two of the source documents also contain estimates of one-time transition costs and a stakeholder concern about regional service levels, neither of which appears in the recommendation. Which concern is most warranted?",
    "options": {
      "A": "The recommendation is sound because every source it cites supports the consolidation conclusion, so no further review is needed.",
      "B": "The recommendation is acceptable for an initial round, but the missing material should be added in a separate appendix rather than re-prompting the original output.",
      "C": "The recommendation should be rejected because it relies only on four sources, which is insufficient for a decision of this size.",
      "D": "The recommendation reflects selective use of the sources and should be re-prompted to address the transition costs and service-level concern."
    },
    "answer": "D",
    "explanation": "The recommendation omits material evidence from the cited sources, so the concern is selective use of evidence and incomplete analysis."
  },
  {
    "id": 6,
    "question": "A manager is deciding what changes to make while conducting a memory maintenance review for a long-running workflow. Which two actions best support memory quality over time? (Select two.)",
    "options": {
      "A": "Delete all memories as the maintenance action to ensure a clean slate, then allow Claude to rebuild context organically through subsequent workflow runs.",
      "B": "Export the current memories as a backup before making changes, so prior context can be restored if maintenance unintentionally removes information the workflow still depends on.",
      "C": "Add new context entries as needed but leave existing entries unedited to preserve continuity.",
      "D": "Identify and edit or delete entries that are stale, inaccurate, or no longer relevant, and add context Claude has not automatically captured but the workflow continues to need.",
      "E": "Disable Memory entirely for the workflow to prevent any new entries from being created going forward."
    },
    "answer": ["B", "D"],
    "explanation": "Good memory maintenance preserves useful context while backing it up and removing or correcting stale or inaccurate entries."
  },
  {
    "id": 7,
    "question": "A marketing associate is drafting Project custom instructions for a brand-voice writing workspace. The workspace will be used by several writers, and outputs need to be consistent across chats. Which approach is most likely to produce consistent outputs across many chats?",
    "options": {
      "A": "State Claude's role and provide a sample piece of approved brand-voice writing in the custom instructions, since one strong example carries the brand voice better than written rules.",
      "B": "State Claude's role and the brand-voice attributes, let each writer specify the audience, tone constraints, and terminology requirements per chat to keep the configuration flexible.",
      "C": "State Claude's role, summarize the brand-voice attributes, name the audience, list tone constraints, and require alignment with the brand's terminology.",
      "D": "State Claude's role, the brand-voice attributes, and the audience; leave terminology to a glossary in the Project knowledge base rather than in the custom instructions."
    },
    "answer": "C",
    "explanation": "Explicit, reusable instructions about role, voice, audience, constraints, and terminology provide a stable baseline across chats and writers."
  },
  {
    "id": 8,
    "question": "A workflow analyst is designing a hand-off between Claude and a human reviewer in an existing process. The reviewer needs to know what to check and what is in scope for their review. Which hand-off design is most appropriate?",
    "options": {
      "A": "Define explicit criteria for what Claude produces and leave the reviewer's checks unspecified so the reviewer can apply judgment without constraint.",
      "B": "Define explicit criteria for what Claude produces and what the human reviewer must check before approval, documented in the workflow.",
      "C": "Use a checklist that the reviewer fills in for every output, with the checklist generated by Claude based on the specific content of each output.",
      "D": "Allow each reviewer to determine their own review criteria based on their experience, since reviewers know best what to check in their domain."
    },
    "answer": "B",
    "explanation": "Explicitly defining both the model output criteria and the human review criteria creates a reliable, auditable hand-off."
  },
  {
    "id": 9,
    "question": "A knowledge worker is preparing to use the Gmail connector with Claude for the first time. Which statement most accurately describes the connector's behavior at the user level?",
    "options": {
      "A": "Claude searches and reads emails the user has access to in a read-only mode, and the user must compose any reply manually outside the connector.",
      "B": "Claude searches and reads emails the user has access to and sends replies on the user's behalf for low-risk messages, with higher-risk messages routed to the user for approval.",
      "C": "Claude searches and reads emails the user has access to and labels them according to user-defined rules, with reply drafting handled in a separate workflow.",
      "D": "Claude searches and reads emails the user has access to and drafts replies for the user to send manually, with each action requiring explicit user approval."
    },
    "answer": "D",
    "explanation": "At the user level described, the connector can access mail and draft replies, while the user retains control over sending actions."
  },
  {
    "id": 10,
    "question": "A Claude associate is incorporating reviewer feedback that named two specific issues with a Claude-drafted brief. The rest of the brief was accepted as written. Which next step is most likely to produce a strong revision?",
    "options": {
      "A": "Address the two specific issues directly, leave unrelated parts unchanged, and document the changes for the next review.",
      "B": "Address the two specific issues and add a third improvement the associate identified, since combining reviewer feedback with self-identified improvements is more efficient.",
      "C": "Address the two specific issues and also revise unrelated sections to maintain a consistent voice across the brief after the edits.",
      "D": "Rewrite the brief from scratch incorporating the two specific issues, since starting fresh integrates the feedback more cleanly than targeted edits."
    },
    "answer": "A",
    "explanation": "Targeted revision preserves accepted material, minimizes unintended changes, and makes the requested corrections traceable."
  },
  {
    "id": 11,
    "question": "Your conversation context has grown long, and the model is producing inconsistent outputs. Which context-management step should be performed first?",
    "options": {
      "A": "Switch to a different model in the hope that the new model handles long context better.",
      "B": "Continue the existing conversation and hope the model recovers consistency.",
      "C": "Summarize the prior conversation into a concise statement of the current state.",
      "D": "Start a fresh conversation and re-paste only the essential prior context."
    },
    "answer": "C",
    "explanation": "A concise summary compresses the working state while preserving the key decisions and context needed for continuity."
  },
  {
    "id": 12,
    "question": "A customer-success associate is drafting a prompt that asks Claude to summarize a customer issue from the case file. The case file includes the customer's full identifier, home address, name, account number, and the description of the issue. The summary should be about the issue. Which approach is most appropriate?",
    "options": {
      "A": "Submit the full case file and instruct Claude not to reference the government identifier or home address in the summary.",
      "B": "Remove or redact the government identifier and the home address before submitting the prompt, since neither is necessary for a summary of the issue.",
      "C": "Submit only the description of the issue and add the customer's name for context, since the description plus a name is sufficient to produce a summary.",
      "D": "Replace the government identifier with the customer's name and the home address with the account number, since names and account numbers are less sensitive."
    },
    "answer": "B",
    "explanation": "Minimize sensitive data by removing information that is unnecessary for the requested task before submitting it."
  },
  {
    "id": 13,
    "question": "The first output from Claude is partially useful but has tone and detail issues. Which two refinement actions are most likely to produce a meaningfully better output? (Select two.)",
    "options": {
      "A": "Ask Claude to elaborate further without adding any new tone descriptor, audience, or example to the prompt.",
      "B": "Provide an example of an output that meets the desired standard.",
      "C": "Add a specific tone descriptor and a concrete audience to the prompt.",
      "D": "Resubmit the same prompt several times and select the best response.",
      "E": "Increase the temperature setting to introduce more variation without changing the tone, audience, or examples in the prompt."
    },
    "answer": ["B", "C"],
    "explanation": "A concrete example and explicit tone/audience guidance directly address the observed quality issues."
  },
  {
    "id": 14,
    "question": "You are configuring a new Claude Project for a specific recurring workload. Which Project configuration step should be performed first?",
    "options": {
      "A": "Define the purpose of the Project and the recurring tasks it must support.",
      "B": "Invite collaborators to the Project and confirm the appropriate access levels.",
      "C": "Test the configured Project on a representative request from the workload.",
      "D": "Add reference materials and instructions that the Project will rely on."
    },
    "answer": "A",
    "explanation": "Define the Project's purpose and recurring workload first so subsequent knowledge, instructions, access, and testing are aligned to that purpose."
  },
  {
    "id": 15,
    "question": "You are an operations lead sorting Claude-driven research tasks by which deliver the most value. Which two Claude-driven research tasks deliver the highest value in a typical analysis workflow? (Select two.)",
    "options": {
      "A": "Synthesizing themes across a large set of customer interview transcripts",
      "B": "Reformatting a completed research deck to adjust spacing, fonts, and slide layout",
      "C": "Transcribing a recorded interview from audio notes into a structured document format",
      "D": "Drafting a comparative summary of competing solutions from public materials",
      "E": "Asking the model to generate representative customer quotes based on general research themes"
    },
    "answer": ["A", "D"],
    "explanation": "Large-scale synthesis and comparative research are high-leverage analytical uses; formatting and fabricated customer quotes are not."
  },
  {
    "id": 16,
    "question": "You are setting up a Connector for a shared data source that several colleagues will use. Which Connector setup step should be performed first?",
    "options": {
      "A": "Document the Connector's purpose and the appropriate use cases for the team.",
      "B": "Use the Connector in a representative task to evaluate its real-world utility.",
      "C": "Connect the data source and confirm the authentication is working as expected.",
      "D": "Confirm the Connector is approved and the data classification is appropriate."
    },
    "answer": "D",
    "explanation": "Approval and data classification should be confirmed before connection or testing so the team does not introduce an unapproved or inappropriate data path."
  },
  {
    "id": 17,
    "question": "A knowledge worker notices that a Claude output may have repeated a confidential financial figure from an internal source the user was told to treat as restricted. The output has not yet been shared outside the user. Which immediate action is most appropriate?",
    "options": {
      "A": "Stop using the output, document the issue including the prompt and the source, and report it through the documented governance or incident channel.",
      "B": "Edit the output to remove the figure, save the edited version for the intended use, and document the change in a personal log without involving the governance channel.",
      "C": "Stop using the output and start a new chat with a more carefully scoped prompt, since the issue is resolved as long as the original output is not used.",
      "D": "Continue using the output for the intended internal purpose, since the figure has not left the user's possession and no external disclosure has occurred."
    },
    "answer": "A",
    "explanation": "A suspected restricted-data exposure should be stopped, documented, and escalated through the organization's approved governance or incident process."
  },
  {
    "id": 18,
    "question": "You are an operations lead sorting proposed Claude use cases by whether they are acceptable for the team to pursue with Claude. Which two proposed use cases are acceptable? (Select two.)",
    "options": {
      "A": "drafting an internal training summary from approved internal documentation",
      "B": "summarizing performance review notes to determine promotion decisions across a team",
      "C": "drafting a preliminary symptom summary to support a clinician's diagnostic review",
      "D": "synthesizing themes across approved customer feedback under aggregation rules",
      "E": "drafting a legal summary an attorney reviews before sharing with a client"
    },
    "answer": ["A", "D"],
    "explanation": "The selected uses support summarization and synthesis of approved material without delegating consequential decisions or creating a high-risk professional determination."
  },
  {
    "id": 19,
    "question": "You are a customer-success lead running an interactive workflow where each turn must respond quickly and the per-turn reasoning is light. Which selection best aligns to the requirements?",
    "options": {
      "A": "Choose Sonnet so quality headroom is available if occasional turns need deeper reasoning.",
      "B": "Choose Haiku to keep latency low and to handle a light reasoning load efficiently at scale.",
      "C": "Choose Sonnet because its balanced profile better protects response quality across turns of varying difficulty.",
      "D": "Choose Opus because maximizing reasoning depth on every turn produces the most reliable interactive workflow."
    },
    "answer": "B",
    "explanation": "For fast interactive responses with light reasoning requirements, the lightweight, low-latency model is the best fit."
  },
  {
    "id": 20,
    "question": "A knowledge worker is explaining the purpose of an organizational AI governance framework to a colleague. Which description is most accurate?",
    "options": {
      "A": "A governance framework lists the AI tools the organization licenses and the cost of each, so users can pick the most cost-effective tool for each task.",
      "B": "A governance framework defines approved tools, allowed data, required reviews, and reporting paths so AI is used consistently and accountably.",
      "C": "A governance framework defines the training every employee must complete before using AI tools, with separate requirements for each tool the organization licenses.",
      "D": "A governance framework documents the AI policies the organization is legally required to adopt, focusing on regulatory compliance rather than day-to-day use."
    },
    "answer": "B",
    "explanation": "Governance establishes the controls for approved tools, data handling, review, and accountability."
  },
  {
    "id": 21,
    "question": "A senior project coordinator has been asked to use Claude to produce an end-of-year report covering finance, operations, and customer outcomes. The three areas have separate data owners and separate source documents. Which decomposition approach is most likely to produce a strong report?",
    "options": {
      "A": "Draft the executive summary first to anchor the report's narrative, then draft each section so it supports the summary already written.",
      "B": "Draft the three sections in parallel, each using a section-specific prompt, then concatenate and lightly edit the outputs into the final report.",
      "C": "Define the report goals, gather inputs per section, draft each section in its own prompt, then synthesize the executive summary from the drafted sections.",
      "D": "Prompt Claude once with all source documents and request the full report, including the executive summary, in a single pass."
    },
    "answer": "C",
    "explanation": "Decompose by section, use the relevant source material for each, then synthesize the executive summary from the completed sections."
  },
  {
    "id": 22,
    "question": "Before sharing a Claude-generated brief, an analyst is applying the AI Fluency Framework Discernment competency to evaluate it. Which review best reflects Discernment principles?",
    "options": {
      "A": "Accept the brief on the basis that it reads fluently and the subject matter aligns with the analyst's professional knowledge of the topic.",
      "B": "Skip the source material check during review and rely on overall tone and logical flow as proxies for factual accuracy.",
      "C": "Conduct a systematic check of the brief against the task requirements, source material, and professional standards before sharing it.",
      "D": "Review the opening paragraph and the conclusion of the brief, since these sections typically reflect the quality of the full document."
    },
    "answer": "C",
    "explanation": "Discernment requires systematic evaluation against requirements, evidence, and professional standards rather than relying on fluency or selective review."
  },
  {
    "id": 23,
    "question": "You are a knowledge worker reviewing a Claude-generated brief that asserts a 'well-known industry standard' without naming any source. How should the assertion be handled?",
    "options": {
      "A": "Strengthen the assertion by adding more confident wording and presenting it as established industry consensus.",
      "B": "Flag the assertion as unverified in an internal note, but publish the brief unchanged without sourcing or removing the claim.",
      "C": "Accept the assertion because the phrase 'well-known' is reassuring, treating confident phrasing as a substitute for a cited source.",
      "D": "Treat the assertion as unverified, and either source it from an authoritative reference or remove it."
    },
    "answer": "D",
    "explanation": "A confident or familiar-sounding claim still needs evidence; source it authoritatively or remove it if it cannot be verified."
  },
  {
    "id": 24,
    "question": "You are a Claude associate assessing a proposed Claude use case before approving it for your team. Which is the correct order of assessment steps?",
    "options": {
      "A": "3, 1, 5, 4, 2",
      "B": "1, 3, 5, 4, 2",
      "C": "5, 3, 1, 4, 2",
      "D": "5, 3, 1, 4, 2"
    },
    "answer": "C",
    "explanation": "The assessment begins with the data and context involved, then considers audience/impact, policy and regulatory fit, decides the disposition, and documents the outcome."
  },
  {
    "id": 25,
    "question": "An analyst is working in a long Claude conversation. The conversation contains roughly 60 turns covering an initial requirements analysis, several rounds of data review, and a current drafting phase. Recent responses have started to drift from the agreed requirements. Which step most directly addresses the drift while preserving the analyst's progress?",
    "options": {
      "A": "Switch the conversation to a model with a larger context window so the accumulated history no longer causes drift and continue without restructuring the inputs.",
      "B": "Open a new chat and paste only the current draft, then continue refining it without the prior requirements and data-review context.",
      "C": "Move the source data and the requirements into a Project knowledge base, then continue the drafting work in a new chat inside that Project.",
      "D": "Summarize the agreed requirements, the key data findings, and the current draft state, then continue in the same chat by reasserting the summary as the working context."
    },
    "answer": "D",
    "explanation": "A concise working-state summary preserves the important progress and reduces context drift without discarding the conversation's useful history."
  },
  {
    "id": 26,
    "question": "A knowledge worker has asked Claude to produce a one-page operating procedure. The team will edit the procedure, reuse it across multiple onboarding cycles, and update it when the underlying process changes. Which output format is most appropriate?",
    "options": {
      "A": "Generate the procedure as the chat response and copy the text into the team's document store after each revision.",
      "B": "Generate the procedure as the chat response and save the entire chat transcript to the team's document store as the working reference.",
      "C": "Generate the procedure as an Artifact, which the team can open, edit, and save as a stable reference for ongoing use.",
      "D": "Generate the procedure as a series of numbered steps in the chat and keep the chat itself as the reference for future edits."
    },
    "answer": "C",
    "explanation": "An Artifact provides an editable, standalone work product that can be maintained and reused independently of the conversation."
  },
  {
    "id": 27,
    "question": "You are organizing connected data sources for a team and must complete the planning steps before authorizing connection. Which two planning steps must be completed BEFORE authorizing a new Connector? (Select two.)",
    "options": {
      "A": "Train every team member on the new Connector through formal training sessions.",
      "B": "Plan to decommission any unused legacy connectors that may still be authorized.",
      "C": "Confirm which reports the organization wants to migrate onto the new Connector.",
      "D": "Confirm the Connector is on the approved-vendor list maintained by IT.",
      "E": "Confirm the data classification of the source and the team's permission to use it."
    },
    "answer": ["D", "E"],
    "explanation": "Approval status and data classification/permission are prerequisite governance checks before authorization."
  },
  {
    "id": 28,
    "question": "You are a project manager reviewing stakeholder messages that teammates have drafted about Claude's role in a workflow. Which two messages are appropriate for stakeholder communication about Claude? (Select two.)",
    "options": {
      "A": "A description of where Claude assists and where humans retain decisions",
      "B": "A statement that Claude will handle every task without any human involvement",
      "C": "A statement of the limits and known failure modes of Claude's role in the workflow",
      "D": "A reassurance that 'the AI is taking care of it'",
      "E": "A statement that the model does not make meaningful errors and needs no quality review"
    },
    "answer": ["A", "C"],
    "explanation": "Good stakeholder communication explains the human/AI boundary and communicates relevant limitations and failure modes."
  },
  {
    "id": 29,
    "question": "You are reviewing a Claude-generated report whose tone is confident throughout. Which question best separates plausibility from verification?",
    "options": {
      "A": "Does the response use varied sentence structure across sections, independent of whether any claim in it can actually be verified?",
      "B": "Can each specific claim be traced to a credible source or to the supplied input material?",
      "C": "Does the response open with a clear, well-formed statement of the main finding?",
      "D": "Does the response cover the topic comprehensively based on its length and section count?"
    },
    "answer": "B",
    "explanation": "Traceability to credible evidence distinguishes a plausible-sounding claim from a verified one."
  },
  {
    "id": 30,
    "question": "You are a product manager asking Claude to produce an interactive prototype of a small landing-page mockup the team will iterate and share. Which Claude feature is best suited to this output?",
    "options": {
      "A": "A Research run that produces a multi-page external survey of competitor sites",
      "B": "A short conversational reply embedded inline in the chat history",
      "C": "An Artifact, which presents standalone editable content in a dedicated side panel for iteration",
      "D": "A new Project containing only the team's prior meeting notes"
    },
    "answer": "C",
    "explanation": "Artifacts are designed for standalone, editable outputs that teams can iterate on and share."
  },
  {
    "id": 31,
    "question": "You are a Claude associate troubleshooting a Claude response that introduces facts not present in the supplied source. Which root cause is most directly indicated?",
    "options": {
      "A": "The prompt asks for a comprehensive response, which leads Claude to fill perceived gaps with plausible-sounding but unverified detail.",
      "B": "The prompt asks Claude to act as a researcher rather than a writer.",
      "C": "The prompt's heading-based structure encourages Claude to generate placeholder content under each heading even when the source does not cover it.",
      "D": "The prompt does not constrain Claude to use only facts present in the supplied source."
    },
    "answer": "D",
    "explanation": "The most direct root cause is the lack of an explicit constraint limiting the response to facts supported by the supplied source."
  },
  {
    "id": 32,
    "question": "You are a knowledge worker evaluating which Claude feature matches each proposed use case. Which two feature-to-use-case matches are appropriate? (Select two.)",
    "options": {
      "A": "long-context summarization for a quarterly report distilled from many sources",
      "B": "long-context summarization for drafting a reply to a single short customer email",
      "C": "web search invocation to retrieve the established formula for calculating compound interest",
      "D": "tool use to invoke a calculator for rephrasing a product description in simpler language",
      "E": "tool use to invoke a calculator for a complex multi-step pricing calculation"
    },
    "answer": ["A", "E"],
    "explanation": "Long context is valuable for large multi-source synthesis, while calculator/tool use is appropriate for complex numerical computation."
  },
  {
    "id": 33,
    "question": "A business analyst has been asked to use Claude to extract requirements from a recorded stakeholder interview transcript. The transcript is approximately 90 minutes long and covers multiple topics. Which approach is most likely to produce a usable structured output?",
    "options": {
      "A": "Provide the transcript along with a structured prompt that requests must-haves, nice-to-haves, open questions, and conflicts as separate sections.",
      "B": "Provide the transcript and ask Claude to summarize it, then extract requirements from the summary in a second pass since two passes catch more detail.",
      "C": "Provide the transcript and ask Claude to produce a single ranked list of requirements, since a single list is easier for stakeholders to review than separate sections.",
      "D": "Provide the transcript and ask Claude to produce a chronological list of every statement that contains a verb, then classify each statement as a requirement or not."
    },
    "answer": "A",
    "explanation": "A structured output schema aligned to the desired requirement categories makes a long, multi-topic transcript more actionable."
  },
  {
    "id": 34,
    "question": "Working as a process consultant integrating a pre-built Skill into a recurring team workflow. Which two practices best support reliable integration? (Select two.)",
    "options": {
      "A": "Define the inputs the Skill expects and the outputs the team will use, so each workflow step has clear hand-offs around the Skill.",
      "B": "Apply the Skill outside its documented scope so the team can stretch its use across several unrelated workflow steps.",
      "C": "Remove all human review from steps that invoke the Skill, relying on the Skill's packaged output as final.",
      "D": "Document which workflow steps invoke the Skill and what human review remains, so accountability and quality gates stay visible to the team.",
      "E": "Bypass the published Skill version by using an unreleased build directly from outside the approved distribution channel."
    },
    "answer": ["A", "D"],
    "explanation": "Reliable integration requires clear inputs/outputs and explicit human-review boundaries around the Skill."
  },
  {
    "id": 35,
    "question": "You are an operations lead integrating Claude into a multi-person team workflow. Which integration step should be performed first?",
    "options": {
      "A": "Identify where Claude adds value and where each handoff to a human occurs.",
      "B": "Pilot the integrated workflow with a small group on representative work.",
      "C": "Document the integrated workflow and onboard the rest of the team to it.",
      "D": "Iterate the integrated workflow based on the findings from the pilot."
    },
    "answer": "A",
    "explanation": "First design the workflow boundary: identify where Claude adds value and where humans retain responsibility. Pilot and rollout follow."
  },
  {
    "id": 36,
    "question": "As part of a workflow redesign, a process analyst is applying the AI Fluency Framework Delegation competency. Which two criteria most directly inform Delegation decisions? (Select two.)",
    "options": {
      "A": "The length of time the workflow has existed in its current form, since well-established processes have been sufficiently validated for AI delegation.",
      "B": "The seniority of the team member who currently performs the step, since more senior roles typically involve higher-stakes tasks that warrant human retention.",
      "C": "The visual complexity of the workflow diagram, since steps with more connections and dependencies are more likely to require human oversight.",
      "D": "The reversibility of the task and the consequence of an error, which together indicate whether the step is safe to delegate to Claude or should be retained for human decision-making.",
      "E": "The need for human creativity, empathy, or judgment in the step, which indicates whether the task is appropriate for AI delegation or requires human capabilities Claude cannot provide."
    },
    "answer": ["D", "E"],
    "explanation": "Delegation depends on consequence/reversibility and on whether the work requires distinctly human judgment, empathy, creativity, or accountability."
  },
  {
    "id": 37,
    "question": "A project manager is defining how Claude can support requirements analysis for an upcoming engagement. Their team will conduct stakeholder interviews and review existing process documentation as part of discovery. Which activity fits this domain?",
    "options": {
      "A": "Use Claude to generate a complete requirements list from the project name and a short description, since requirements for similar engagements are largely standard.",
      "B": "Use Claude to conduct the stakeholder interviews directly, with the analyst reviewing the recordings afterward to confirm the requirements Claude extracted.",
      "C": "Use Claude to synthesize stakeholder inputs and existing process documentation into a structured list of requirements with traceability to each source.",
      "D": "Use Claude to prioritize the requirements the team has already gathered, leaving the gathering itself to manual analyst work since prioritization is more time-consuming."
    },
    "answer": "C",
    "explanation": "Claude can add value by synthesizing discovery inputs into structured, traceable requirements while humans conduct and validate the discovery."
  },
  {
    "id": 38,
    "question": "You are a knowledge manager structuring source material in the context window for a long Claude evaluation task. Which two practices produce a more effective use of the context window? (Select two.)",
    "options": {
      "A": "Repeat the same instruction at the start, middle, and end to reinforce it.",
      "B": "Place the most reference-critical material near the beginning or end of context.",
      "C": "Paste every available document into context without checking whether it is relevant to the task.",
      "D": "Mix sources together in a single block so the model can synthesize them freely.",
      "E": "Mark each source clearly with delimiters so the model can attribute claims correctly."
    },
    "answer": ["B", "E"],
    "explanation": "Clear source boundaries improve attribution, and placing critical material near the beginning or end helps keep it salient."
  },
  {
    "id": 39,
    "question": "You are an analyst reviewing a Claude response that addresses two of three required questions and skips the third. Which prompt element most likely needs strengthening?",
    "options": {
      "A": "The context provided to Claude should be expanded with additional background detail about the subject matter.",
      "B": "The role assigned to Claude should be changed to a more specialized expert persona to increase response depth.",
      "C": "The output format should be revised to allow Claude to determine the appropriate structure for each question's answer.",
      "D": "The task statement should explicitly enumerate the three required questions and require an answer to each."
    },
    "answer": "D",
    "explanation": "Explicitly enumerating all required questions and requiring an answer to each reduces omissions."
  },
  {
    "id": 40,
    "question": "You are decomposing a 'build a customer journey map' request. Which is the correct order of decomposed steps? (1) Identify the touchpoints the customer encounters during each stage. (2) Define the persona and the journey scope to be mapped. (3) Capture pain points and opportunities at each touchpoint. (4) Synthesize the findings into the final journey-map artifact. (5) Identify the major stages the persona moves through.",
    "options": {
      "A": "2, 5, 1, 3, 4",
      "B": "5, 2, 1, 3, 4",
      "C": "1, 2, 5, 3, 4",
      "D": "2, 1, 5, 3, 4"
    },
    "answer": "A",
    "explanation": "First define the persona and scope, then identify journey stages, map touchpoints, capture pain points/opportunities, and synthesize the final artifact."
  },
  {
    "id": 41,
    "question": "A knowledge worker is defining what 'workflow optimization' means at the Associate level for the team's recurring AI-supported workflows. Which description is most accurate?",
    "options": {
      "A": "Reducing the number of steps in the workflow to the smallest possible count, since fewer steps mean faster cycle time and lower error rates.",
      "B": "Reducing redundancy, removing low-value steps, and applying Claude where it adds measurable value, while keeping required reviews and quality gates.",
      "C": "Replacing manual steps with Claude-supported steps wherever possible, since each replacement adds value by reducing the time the team spends on the workflow.",
      "D": "Standardizing every step of the workflow to a fixed template so each run produces identical output, without adjusting for variation in the workflow's inputs."
    },
    "answer": "B",
    "explanation": "Optimization is about measurable value: remove waste and redundancy, add AI where useful, and retain necessary controls and quality gates."
  },
  {
    "id": 42,
    "question": "You are sorting Claude output structural defects by which most undermines clarity. Which structural defect most severely undermines the clarity of the output?",
    "options": {
      "A": "Typographic inconsistencies appear throughout multiple sections of the document.",
      "B": "The main conclusion contradicts the evidence presented in the body.",
      "C": "Two adjacent paragraphs present the same information using inconsistent terminology.",
      "D": "A single subheading is shorter than the other subheadings in the document."
    },
    "answer": "B",
    "explanation": "A conclusion that contradicts the evidence creates a fundamental logical inconsistency and most severely undermines clarity."
  },
  {
    "id": 43,
    "question": "You are a knowledge worker deciding whether to escalate a Claude-generated output. Which is the correct order of decision steps? (1) Identify the audience and the impact of the output if it is wrong. (2) Document the decision and the rationale for traceability. (3) Compare the output's risk profile to the organization's escalation criteria. (4) Decide whether to use, iterate further, or escalate. (5) Assess the output's accuracy, completeness, and any unverified claims.",
    "options": {
      "A": "3, 1, 5, 4, 2",
      "B": "1, 5, 3, 4, 2",
      "C": "1, 3, 5, 4, 2",
      "D": "5, 1, 3, 4, 2"
    },
    "answer": "B",
    "explanation": "First establish audience and impact, then assess quality and unverified claims, compare risk with escalation criteria, decide the disposition, and document it."
  },
  {
    "id": 44,
    "question": "You are prioritizing optimization actions across a recurring Claude workflow. Which optimization action typically has the highest impact in a recurring knowledge workflow?",
    "options": {
      "A": "Codifying the recurring prompt into a Project with the relevant references and instructions",
      "B": "Refining the output format template used in the team's documentation to improve readability",
      "C": "Rewriting the most recent version of the prompt to improve its clarity for the next run",
      "D": "Updating the shared folder structure where Claude outputs are saved after each workflow run"
    },
    "answer": "A",
    "explanation": "Centralizing recurring prompts, references, and instructions in a Project reduces repeated setup and improves consistency across runs."
  },
  {
    "id": 45,
    "question": "A project lead is evaluating a Claude-generated status report against the project charter. The report will be delivered to a steering committee, which expects accurate status against committed milestones. Which set of criteria provides the strongest evaluation frame?",
    "options": {
      "A": "Readability, narrative flow, and whether the report tells a coherent story about the project's progress",
      "B": "Match to the prior status reports' structure, since the steering committee expects consistent reporting from period to period",
      "C": "Accuracy of facts against the charter, completeness against required reporting fields, and relevance to the audience receiving the report",
      "D": "Length, formatting consistency, and tone appropriateness for a steering committee audience"
    },
    "answer": "C",
    "explanation": "The strongest evaluation checks factual accuracy, required completeness, and audience relevance against the actual deliverable requirements."
  },
  {
    "id": 46,
    "question": "You are an operations lead evaluating prompting strategies that teammates have proposed for various task types. Which two strategies represent appropriate matches between strategy and task type? (Select two.)",
    "options": {
      "A": "Rigid templated prompting for early-stage creative naming and tagline ideation",
      "B": "Rigid templated prompting for monthly compliance reports against a fixed schema",
      "C": "Rigid templated prompting for casual customer-feedback summarization with no schema",
      "D": "Open exploratory prompting for legal contract redlining against a clause library",
      "E": "Open exploratory prompting for early-stage strategic brainstorming on a new market"
    },
    "answer": ["B", "E"],
    "explanation": "Rigid templates fit repeatable, schema-driven compliance reporting, while open exploration fits early-stage brainstorming."
  },
  {
    "id": 47,
    "question": "You are running an optimization pass on a recurring workflow. Which is the correct order of optimization steps? (1) Apply targeted optimization to the bottleneck step. (2) Roll out the optimized workflow to the broader team and document the change. (3) Identify the bottleneck step using measured time per step and queue length. (4) Map the current workflow steps, owners, and decision points. (5) Pilot the change with a small group and measure the effect against the prior baseline.",
    "options": {
      "A": "3, 4, 1, 5, 2",
      "B": "1, 4, 3, 5, 2",
      "C": "4, 1, 3, 5, 2",
      "D": "4, 3, 1, 5, 2"
    },
    "answer": "D",
    "explanation": "First map the current workflow, identify the bottleneck with measurements, optimize that step, pilot and measure the change, then roll it out and document it."
  },
  {
    "id": 48,
    "question": "An operations assistant is redesigning a recurring data-processing workflow step to use Code Execution. Which two design choices best support reliable integration? (Select two.)",
    "options": {
      "A": "Standardize the input file format the step expects, so each run of the Code Execution step receives consistent input and produces comparable, verifiable output across recurring weekly cycles.",
      "B": "Embed the Code Execution step inside the workflow and document the fields it produces only in code comments, without a separate reference the rest of the team can consult.",
      "C": "Allow the input file format to vary from run to run based on whichever source system happens to supply the data that week, since the Code Execution step can adapt to differences automatically.",
      "D": "Reduce the human review step to a brief final glance at the output before it advances to downstream consumers, treating Code Execution's internal checks as sufficient validation.",
      "E": "Define a brief output verification step in which the human reviewer confirms the computed result against an expected range or sanity check before the output advances to downstream consumers."
    },
    "answer": ["A", "E"],
    "explanation": "Reliable integration benefits from standardized inputs and an explicit human verification/sanity-check step before downstream use."
  },
  {
    "id": 49,
    "question": "A knowledge worker is explaining the cost, speed, and quality trade-offs across Claude models to a colleague. Which generalization correctly describes the trade-off?",
    "options": {
      "A": "More capable models generally consume more of the rate limit and run more slowly, while lighter models are faster and consume less of the rate limit.",
      "B": "More capable models generally consume less of the rate limit because their reasoning is more efficient, even though they run more slowly than lighter models.",
      "C": "Speed and rate-limit consumption are independent of model capability; the difference between Haiku, Sonnet, and Opus is reasoning depth alone.",
      "D": "Lighter models consume more of the rate limit per request than more capable models, since lighter models require multiple passes to match heavier-model quality."
    },
    "answer": "A",
    "explanation": "In general, higher-capability models trade greater reasoning capability for higher latency and rate-limit consumption, while lighter models prioritize speed and efficiency."
  },
  {
    "id": 50,
    "question": "You are a project lead reviewing a teammate's habit of using the same prompt template for every task regardless of type. Which feedback is most warranted?",
    "options": {
      "A": "Task type has no effect on the appropriate prompting strategy, so a single template should perform equally well across every kind of task.",
      "B": "The prompting strategy should be adapted to each task type because one template does not produce equally strong outputs across all tasks.",
      "C": "The habit is reasonable because a proven template reduces prompt-writing time and most business tasks share the same structure.",
      "D": "The prompting strategy should change only when the desired response length needs adjusting, since other differences between tasks rarely affect the appropriate approach."
    },
    "answer": "B",
    "explanation": "Different task types benefit from different prompting strategies; adapting the approach is more effective than forcing every task into one template."
  },
  {
    "id": 51,
    "question": "A project manager is evaluating a proposal to use Claude to autonomously approve refunds above a defined threshold without human review. The volume is high, and the average refund amount is modest, but a small percentage of refunds in this workflow historically required correction. The team needs to reduce cycle time. Which response is most appropriate?",
    "options": {
      "A": "Approve the proposal but cap autonomous approvals at the threshold the team currently audits, so the existing audit sample continues to catch any errors after the fact.",
      "B": "Decline the autonomous-approval design and propose Claude triage refunds into auto-approve (low-risk), human-approve (standard), and escalate-to-supervisor (high-risk) lanes.",
      "C": "Approve the proposal and replace human review with a daily audit of a random sample of autonomous approvals, with corrective action taken on errors found.",
      "D": "Decline the autonomous-approval design and propose Claude pre-fill the refund decision and rationale, with a human approver completing each refund before it is issued."
    },
    "answer": "B",
    "explanation": "A risk-tiered workflow preserves human control for standard and high-risk cases while using automation for genuinely low-risk volume."
  },
  {
    "id": 52,
    "question": "You are using Claude to redesign an employee onboarding workflow and must complete the high-level decomposition steps before specifying detailed artifacts. Which two decomposition steps must be completed BEFORE specifying exact email content and the schedule? (Select two.)",
    "options": {
      "A": "Define the overall objective of the onboarding experience.",
      "B": "Roll out the onboarding workflow company-wide before it has been piloted.",
      "C": "Identify the major phases of the onboarding experience.",
      "D": "Pilot the onboarding workflow with a small cohort of new hires.",
      "E": "Negotiate the onboarding budget with the finance department."
    },
    "answer": ["A", "C"],
    "explanation": "High-level decomposition starts with the overall objective and major phases before detailed emails, schedules, or implementation steps."
  },
  {
    "id": 53,
    "question": "A learning specialist is configuring a Claude Project for a recurring course-design workflow. Which configuration approach best leverages a Skill alongside other Project elements?",
    "options": {
      "A": "Configure the Project with custom instructions that describe a different workflow than the one the Skill documents.",
      "B": "Add the relevant Skill to the Project, upload the supporting knowledge sources, and write custom instructions that reference both the Skill and the knowledge.",
      "C": "Upload the supporting knowledge sources but leave the relevant Skill disabled, relying on custom instructions alone.",
      "D": "Add the Skill and supporting knowledge sources to the Project, but write custom instructions for a general use case unrelated to the recurring course-design workflow."
    },
    "answer": "B",
    "explanation": "The Skill, supporting knowledge, and Project instructions should work together to define a consistent recurring workflow."
  },
  {
    "id": 54,
    "question": "You are an operations manager preparing a quick reference card for a team. Which description correctly characterizes the three Claude models in general terms?",
    "options": {
      "A": "Haiku is fast and lightweight, Sonnet is the balanced default for most everyday work, and Opus is the most capable for complex reasoning at higher latency and cost.",
      "B": "All three models offer the same reasoning depth, with the lineup differing only in response speed and cost.",
      "C": "Sonnet is the fastest and cheapest tier, Haiku is the balanced middle option, and Opus handles the most complex reasoning.",
      "D": "Haiku is the most capable model for the deepest reasoning, while Opus is the lightweight model for quick replies."
    },
    "answer": "A",
    "explanation": "The general model positioning is lightweight/fast Haiku, balanced Sonnet, and higher-capability Opus for demanding reasoning."
  },
  {
    "id": 55,
    "question": "A Claude associate is evaluating whether to enable a Skill that was provided by an unfamiliar third party. Which two checks best support a sound decision? (Select two.)",
    "options": {
      "A": "Review the permissions and capabilities the Skill requests and confirm that the requested access is appropriate for the task the Skill is intended to perform.",
      "B": "Skip the permissions review because the Skill's description sounds narrowly scoped to its stated purpose.",
      "C": "Treat the Skill's appearance in a public listing as sufficient validation of its source and requested permissions.",
      "D": "Verify the source of the Skill against the organization's approved-Skill list before enabling it within Claude.ai or any Project the team uses for its work.",
      "E": "Enable the Skill based on strong reviews from external users in public forums, treating positive community feedback as a substitute for checking the source against the organization's approved list."
    },
    "answer": ["A", "D"],
    "explanation": "Review requested permissions/capabilities and verify the Skill's provenance against the organization's approved list before use."
  },
  {
    "id": 56,
    "question": "You are a customer-success manager considering whether to escalate a Claude-generated response. Which factor most strongly raises the impact of the output and supports escalation before external use?",
    "options": {
      "A": "The response is a brief internal announcement about an upcoming team all-hands meeting.",
      "B": "The response is an internal draft summarizing the associate's notes from a customer call for their own reference.",
      "C": "The response is an unchanged draft for a paying customer that includes a service-level commitment.",
      "D": "The response is a casual rephrasing of an internal team status update."
    },
    "answer": "C",
    "explanation": "An external customer-facing response containing a service-level commitment has direct business and customer impact and therefore warrants review/escalation."
  },
  {
    "id": 57,
    "question": "You are a project manager weighing workflow steps by how much leverage Claude integration provides. Which workflow step typically offers the greatest Claude leverage in a knowledge-work team?",
    "options": {
      "A": "Making final personnel decisions about hiring, promotion, or termination",
      "B": "Approving final deliverables for external publication without further review",
      "C": "Drafting and synthesizing across many sources for a downstream reviewer",
      "D": "Negotiating contractual terms with external parties on behalf of the company"
    },
    "answer": "C",
    "explanation": "Drafting and synthesis across many sources are high-leverage knowledge-work tasks while still allowing a human reviewer to retain accountability."
  },
  {
    "id": 58,
    "question": "You are a business analyst evaluating a Claude-generated business case against the agreed acceptance criteria. Which is the correct order of evaluation steps? (1) Compare the business case to the source data and required topics. (2) Document gaps and inaccuracies for follow-up or correction. (3) Restate the acceptance criteria for the business case. (4) Decide whether to use the business case, iterate, or escalate. (5) Read the business case end to end to form an initial impression.",
    "options": {
      "A": "3, 1, 5, 2, 4",
      "B": "5, 3, 1, 2, 4",
      "C": "1, 3, 5, 2, 4",
      "D": "3, 5, 1, 2, 4"
    },
    "answer": "D",
    "explanation": "First establish the acceptance criteria, then read the output for an initial impression, compare it against sources and requirements, document gaps, and decide the disposition."
  },
  {
    "id": 59,
    "question": "A finance manager is about to discuss a confidential pre-announcement figure with Claude. Which two settings best align with sound privacy practice for this conversation? (Select two.)",
    "options": {
      "A": "Skip the privacy setting decision and proceed with default behavior for this particular conversation.",
      "B": "Treat the conversation as appropriate for default Memory settings because the discussion is brief and one-time.",
      "C": "Open the conversation in Incognito mode, which prevents the conversation from contributing to Memory and avoids persistent retention of the confidential figure across sessions.",
      "D": "Disable Memory contribution for the conversation if Incognito mode is not used, so the confidential figure is not retained as persistent context that could surface in later unrelated sessions.",
      "E": "Enable Memory contribution for the conversation so the context carries forward to support follow-up analysis in future sessions."
    },
    "answer": ["C", "D"],
    "explanation": "For confidential information, avoid persistent Memory and use Incognito mode when appropriate so the sensitive context does not carry into future sessions."
  },
  {
    "id": 60,
    "question": "A procurement manager is evaluating a Claude-generated vendor proposal summary against the original RFP. The RFP lists twelve numbered requirements across pricing, security, and service levels. How should the summary be checked for completeness?",
    "options": {
      "A": "Compare the section headings in the summary to the section headings in the RFP, since matching headings indicate matching content.",
      "B": "Spot-check three random requirements from the RFP against the summary, since random sampling is the standard completeness check for summaries.",
      "C": "Map each numbered requirement in the RFP to a section of the summary and confirm that each requirement is represented.",
      "D": "Read the summary end to end and confirm it reads as a coherent response to the RFP, since coherent summaries typically reflect coverage of the source."
    },
    "answer": "C",
    "explanation": "A requirement-by-requirement mapping directly verifies that every required item from the RFP is represented in the summary."
  }
]

export const claudeAssociateSet6Questions = rawClaudeAssociateSet6.map((question) => {
  const optionValues = Object.values(question.options)
  const currentAnswer = Array.isArray(question.answer) ? question.answer : [question.answer]

  return {
    ...question,
    options: optionValues,
    answer: currentAnswer.map((value) => {
      if (typeof value === 'string' && question.options[value]) return question.options[value]
      return value
    })
  }
})
