const rawClaudeAssociateSet5 = [
  {
    "id": 1,
    "question": "You are refining a prompt over several iterations. The output drifts further from the requested template with each change. Which step is most appropriate?",
    "options": {
      "A": "Revert to the version of the prompt that produced the closest match and adjust from that baseline.",
      "B": "Discard all prior versions and start with no record of what worked.",
      "C": "Continue making large simultaneous changes until the output happens to align.",
      "D": "Stop iterating and accept the most off-target version."
    },
    "answer": "A",
    "explanation": "Return to the strongest known baseline, then make controlled adjustments rather than compounding drift."
  },
  {
    "id": 2,
    "question": "You are sorting Claude output structural defects by which most undermines clarity. Which structural defect most severely undermines the clarity of the output?",
    "options": {
      "A": "The main conclusion contradicts the evidence presented in the body.",
      "B": "Two adjacent paragraphs present the same information using inconsistent terminology.",
      "C": "A single subheading is shorter than the other subheadings in the document.",
      "D": "Typographic inconsistencies appear throughout multiple sections of the document."
    },
    "answer": "A",
    "explanation": "A conclusion that contradicts the supporting evidence creates a fundamental logical inconsistency and most directly undermines clarity."
  },
  {
    "id": 3,
    "question": "You are evaluating a Claude output that appears to contain hallucinated content. Which response step should be performed first when a hallucination is suspected?",
    "options": {
      "A": "Pinpoint the specific claim that appears to be unsupported by available evidence.",
      "B": "Notify the user community that the output contains a hallucinated claim.",
      "C": "Document the hallucination pattern in the team's risk register for future reference.",
      "D": "Discard the entire output and regenerate the output with a fresh prompt."
    },
    "answer": "A",
    "explanation": "First isolate the specific unsupported claim so it can be checked against evidence before taking broader action."
  },
  {
    "id": 4,
    "question": "You are a project manager reviewing Claude usage approaches that teammates have proposed for a project workflow. Which two workflow steps are well-suited for Claude support? (Select two.)",
    "options": {
      "A": "Synthesizing a literature review across many uploaded research documents",
      "B": "Drafting a structured project status update from a set of meeting notes",
      "C": "Deciding promotion outcomes for staff based solely on the model's judgment",
      "D": "Approving a final external press release without any human review",
      "E": "Issuing legally binding contractual commitments on behalf of the company"
    },
    "answer": ["A", "B"],
    "explanation": "Claude is well suited to synthesis and drafting tasks, while consequential personnel, legal, and final-publication decisions require human oversight."
  },
  {
    "id": 5,
    "question": "You are a Claude associate troubleshooting a recurring poor output. Which is the correct order of diagnostic steps? (1) Form a hypothesis about which prompt element most likely caused the deficiency. (2) Apply a single targeted change and observe the effect on the output. (3) Read the output end to end and identify the specific deficiency. (4) Compare the deficient output to the prompt to spot mismatches between input and output. (5) Document the root cause and the resolution for future reference.",
    "options": {
      "A": "3, 4, 1, 2, 5",
      "B": "3, 1, 4, 2, 5",
      "C": "4, 3, 1, 2, 5",
      "D": "1, 3, 4, 2, 5"
    },
    "answer": "A",
    "explanation": "Read the output end to end and identify the specific deficiency (3), compare it with the prompt to spot input/output mismatches (4), form a hypothesis about the cause (1), apply a single targeted change and observe its effect (2), then document the root cause and resolution (5)."
  },
  {
    "id": 6,
    "question": "A knowledge worker is iterating a prompt that has produced a partly acceptable response. Which refinement practice produces the strongest learning across iterations?",
    "options": {
      "A": "Restart from a fresh prompt each iteration so prior wording does not bias the next attempt, and pick the strongest response at the end.",
      "B": "Change one identifiable element per iteration, capture the change and its effect, and adjust another element only after the first is settled.",
      "C": "Address every weakness the response showed in a single revision, then compare the revised output against the prior version.",
      "D": "Make several related changes in one iteration when they target the same weakness, and revert the whole set if the combined change makes the output worse."
    },
    "answer": "B",
    "explanation": "Changing one identifiable element at a time makes cause and effect observable and creates stronger learning across iterations."
  },
  {
    "id": 7,
    "question": "You are using Claude to redesign an employee onboarding workflow and must complete the high-level decomposition steps before specifying exact email content and the schedule. Which two decomposition steps must be completed BEFORE specifying exact email content and the schedule? (Select two.)",
    "options": {
      "A": "Roll out the onboarding workflow to every new hire across the company.",
      "B": "Negotiate the onboarding budget with the finance department.",
      "C": "Define the overall objective of the onboarding experience.",
      "D": "Identify the major phases of the onboarding experience.",
      "E": "Pilot the onboarding workflow with a small cohort of new hires."
    },
    "answer": ["C", "D"],
    "explanation": "High-level decomposition starts by defining the objective and identifying major phases before specifying detailed artifacts such as emails and schedules."
  },
  {
    "id": 8,
    "question": "You are handling a document containing mixed-sensitivity content before using it with Claude. Which data-handling step should be performed first?",
    "options": {
      "A": "Submit the redacted document to Claude for the intended task.",
      "B": "Classify the content of the document and identify which fields are sensitive.",
      "C": "Redact sensitive fields and replace them with appropriate placeholders.",
      "D": "Review the redacted document with a peer to confirm the redaction is complete."
    },
    "answer": "B",
    "explanation": "Sensitivity classification must come first so the appropriate fields can then be redacted or otherwise handled safely."
  },
  {
    "id": 9,
    "question": "You are an operations lead evaluating prompting strategies that teammates have proposed for various task types. Which two strategies represent appropriate matches between strategy and task type? (Select two.)",
    "options": {
      "A": "Open exploratory prompting for early-stage strategic brainstorming on a new market",
      "B": "Rigid templated prompting for early-stage creative naming and tagline ideation",
      "C": "Rigid templated prompting for monthly compliance reports against a fixed schema",
      "D": "Rigid templated prompting for casual customer-feedback summarization with no schema",
      "E": "Open exploratory prompting for legal contract redlining against a clause library"
    },
    "answer": ["A", "C"],
    "explanation": "Open exploration fits brainstorming, while a rigid template is appropriate for repeatable compliance reports with a fixed schema."
  },
  {
    "id": 10,
    "question": "You are an HR specialist reviewing model choices made by colleagues for various tasks. Which two model choices represent appropriate matches between the model and the task? (Select two.)",
    "options": {
      "A": "A higher-capability model selected solely because it is the most expensive option",
      "B": "A lighter, faster model for routine FAQ-style replies under tight latency budgets",
      "C": "A higher-capability model for complex multi-step legal reasoning under review",
      "D": "A lighter, faster model for nuanced multi-document strategic synthesis",
      "E": "A higher-capability model for one-line keyword extraction at high request volume"
    },
    "answer": ["B", "C"],
    "explanation": "Use lighter models for routine, latency-sensitive work and higher-capability models when the task requires complex reasoning."
  },
  {
    "id": 11,
    "question": "A Claude associate is incorporating reviewer feedback that named two specific issues with a Claude-drafted brief. The rest of the brief was accepted as written. Which next step is most likely to produce a strong revision?",
    "options": {
      "A": "Rewrite the brief from scratch incorporating the two specific issues, since starting fresh integrates the feedback more cleanly than targeted edits.",
      "B": "Address the two specific issues and also revise unrelated sections to maintain a consistent voice across the brief after the edits.",
      "C": "Address the two specific issues and add a third improvement the associate identified, since combining reviewer feedback with self-identified improvements is more efficient.",
      "D": "Address the two specific issues directly, leave unrelated parts unchanged, and document the changes for the next review."
    },
    "answer": "D",
    "explanation": "Apply the requested changes narrowly and preserve accepted material; this minimizes unintended regressions and keeps the revision traceable."
  },
  {
    "id": 12,
    "question": "You are a communications specialist preparing to describe Claude's role in a workflow to multiple stakeholder groups and must complete the preparation steps before drafting the stakeholder messages. Which two preparation steps must be completed BEFORE drafting the stakeholder messages? (Select two.)",
    "options": {
      "A": "Define the key facts about Claude's role and the boundaries that apply.",
      "B": "Identify the stakeholder groups and what each group needs to understand.",
      "C": "Archive the drafted messages in the corporate communications repository.",
      "D": "Schedule a follow-up forum to handle questions raised by the messages.",
      "E": "Send the drafted messages out and gather feedback for revision."
    },
    "answer": ["A", "B"],
    "explanation": "Before drafting, establish the factual role and boundaries and determine what each stakeholder group needs to know."
  },
  {
    "id": 13,
    "question": "You are a project manager weighing workflow steps by how much leverage Claude integration provides. Which workflow step typically offers the greatest Claude leverage in a knowledge-work team?",
    "options": {
      "A": "Negotiating contractual terms with external parties on behalf of the company",
      "B": "Approving final deliverables for external publication without further review",
      "C": "Drafting and synthesizing across many sources for a downstream reviewer",
      "D": "Making final personnel decisions about hiring, promotion, or termination"
    },
    "answer": "C",
    "explanation": "Drafting and synthesizing large amounts of source material are high-leverage knowledge-work tasks that still allow downstream human review."
  },
  {
    "id": 14,
    "question": "A customer-success associate is drafting a prompt that asks Claude to summarize a customer issue from the case file. The case file includes the customer's full identifier, home address, name, account number, and the description of the issue. The summary should be about the issue. Which approach is most appropriate?",
    "options": {
      "A": "Submit the full case file and include an instruction telling Claude not to reference the government identifier or the home address in the summary.",
      "B": "Replace the government identifier with the customer's name and the home address with the account number, since names and account numbers are less sensitive than identifiers and addresses.",
      "C": "Remove or redact the government identifier and the home address before submitting the prompt, since neither is necessary for a summary of the issue.",
      "D": "Submit only the description of the issue and add the customer's name for context, since the description plus a name is sufficient to produce a summary."
    },
    "answer": "C",
    "explanation": "Minimize sensitive data: remove information that is not necessary for the requested task before sending the material to the model."
  },
  {
    "id": 15,
    "question": "A knowledge worker is explaining how to use feedback to improve Claude-supported work over time. Which description is most accurate?",
    "options": {
      "A": "Capture feedback as an aggregate quality score per run, since aggregate scores show whether quality is improving without requiring detail on individual issues.",
      "B": "Capture specific feedback after each run, translate it into targeted prompt or workflow changes, and observe whether subsequent runs improve.",
      "C": "Capture feedback only after several runs so patterns emerge from the volume of observations, then apply changes based on the patterns rather than any single run.",
      "D": "Capture general impressions after each run and apply them as broad prompt rewrites, since broad rewrites cover more potential issues than targeted changes."
    },
    "answer": "B",
    "explanation": "Specific feedback linked to targeted changes enables measurable iteration and learning from subsequent outputs."
  },
  {
    "id": 16,
    "question": "You have iterated a Claude prompt eight times, and the output quality has plateaued for the last four attempts. Which conclusion is most appropriate?",
    "options": {
      "A": "Iteration should stop and the current output should be accepted as-is regardless of remaining issues.",
      "B": "Iteration should stop and the task should be abandoned without communicating to stakeholders.",
      "C": "Iteration has reached diminishing returns and the next step is human review or a different approach.",
      "D": "Iteration should continue indefinitely because more attempts always improve quality."
    },
    "answer": "C",
    "explanation": "A sustained plateau indicates diminishing returns; switch approach or involve human review rather than iterating indefinitely."
  },
  {
    "id": 17,
    "question": "An HR business partner is configuring two separate Projects for two distinct client engagements. Which configuration best prevents context bleed between the two engagements?",
    "options": {
      "A": "Use a single shared Project for both client engagements with combined memory, knowledge sources, and instructions, on the assumption that Claude will keep the two clients' contexts separate without configuration.",
      "B": "Skip Project configuration entirely and use general chats for both engagements, which provide no scoped memory, contexts, and offer no structural separation between the two clients' work streams.",
      "C": "Configure both Projects to share the same memory context to reduce setup effort, even though shared memory between unrelated client engagements is precisely the configuration that produces context bleed.",
      "D": "Set up each Project with its own distinct memory context, knowledge sources, and instructions, and verify that information from one Project does not appear in the other Project's responses."
    },
    "answer": "D",
    "explanation": "Separate Projects with distinct scoped context, knowledge, and instructions reduce the risk of cross-engagement context leakage."
  },
  {
    "id": 18,
    "question": "You are an operations lead mapping production tasks to Claude model strengths to set realistic expectations. Which two production tasks fit Claude's strengths most clearly? (Select two.)",
    "options": {
      "A": "Drafting a tone-and-audience-aware customer-facing email under human review",
      "B": "Monitoring a live sensor data stream and flagging anomalies as they occur in real time",
      "C": "Issuing a binding legal determination based solely on Claude's analysis of case documents",
      "D": "Calculating the precise settlement value of a derivative contract using live market inputs",
      "E": "Synthesizing a single executive summary across many long source documents"
    },
    "answer": ["A", "E"],
    "explanation": "Claude is strong at language generation and synthesis; real-time monitoring, binding decisions, and precise live financial calculations are not the best matches."
  },
  {
    "id": 19,
    "question": "An associate is responding to an executive who claims that Claude will eliminate the need for human review on customer-facing content. The executive is the budget approver for the team's AI tools. Which response is most appropriate?",
    "options": {
      "A": "Pilot the executive's proposal on a low-risk subset of customer-facing content first and use the pilot results to make the case for retaining human review on higher-risk content.",
      "B": "Acknowledge the productivity gains, then explain that human review remains essential on customer-facing content because of accuracy and brand risk, with specific examples.",
      "C": "Escalate the executive's claim to a senior leader outside the team before responding directly, since the issue affects more than just the associate's team.",
      "D": "Defer to the executive's authority and remove the human review step from customer-facing content, monitoring the results closely for the first several weeks."
    },
    "answer": "B",
    "explanation": "Acknowledge value while clearly communicating that customer-facing content still requires human accountability because of accuracy and brand risks."
  },
  {
    "id": 20,
    "question": "A knowledge worker is briefing a stakeholder group on Claude's limitations. The stakeholders will use Claude on customer-facing work where confident-sounding output that contains errors would cause real harm. Which limitation is most important to communicate clearly?",
    "options": {
      "A": "Claude can produce long, detailed responses that take time to read, so stakeholders should request shorter outputs when working under tight deadlines.",
      "B": "Claude's responses vary across runs of the same prompt, so stakeholders should run each prompt several times and compare outputs before using any single response.",
      "C": "Claude's knowledge has a training cutoff, so stakeholders must verify any time-sensitive claims against current sources before using them.",
      "D": "Claude can produce confident-sounding output that contains unsupported claims, so human review remains essential for high-impact work."
    },
    "answer": "D",
    "explanation": "The key risk in this scenario is plausible but unsupported output; high-impact customer-facing work therefore needs human review."
  },
  {
    "id": 21,
    "question": "A knowledge worker is explaining the purpose of an organizational AI governance framework to a colleague. Which description is most accurate?",
    "options": {
      "A": "A governance framework lists the AI tools the organization licenses and the cost of each, so users can pick the most cost-effective tool for each task.",
      "B": "A governance framework documents the AI policies the organization is legally required to adopt, focusing on regulatory compliance rather than day-to-day use.",
      "C": "A governance framework defines the training every employee must complete before using AI tools, with separate requirements for each tool the organization licenses.",
      "D": "A governance framework defines approved tools, allowed data, required reviews, and reporting paths so AI is used consistently and accountably."
    },
    "answer": "D",
    "explanation": "Governance establishes the organizational controls needed for consistent, accountable AI use, including tools, data, review, and reporting."
  },
  {
    "id": 22,
    "question": "You are evaluating proposed workflow changes against whether they meaningfully improve the workflow. Which two proposed changes meaningfully improve a recurring Claude workflow? (Select two.)",
    "options": {
      "A": "Extracting the standard reference material into a Project to avoid repeating it",
      "B": "Labeling each workflow step with descriptive names to improve readability for new team members",
      "C": "Adding a quality check on outputs before they enter the downstream process",
      "D": "Updating the team's shared workspace name to reflect the new workflow process",
      "E": "Reorganizing the workflow document's section headings to improve navigation"
    },
    "answer": ["A", "C"],
    "explanation": "Centralizing recurring reference material reduces repeated setup, while a quality check improves output reliability before downstream use."
  },
  {
    "id": 23,
    "question": "An support representative is configuring a Project for drafting customer-facing apology emails after service outages. The current custom instructions tell Claude to be 'empathetic and casual, keep it short, and offer a goodwill credit.' The customer-service team has flagged that recent drafts have been too generic and cited cases where policy does not allow them to offer goodwill credits, but have offered goodwill credits in cases where policy does not allow them, and have used contractions that brand voice prohibits. Which adjustment best aligns the configuration to the use case?",
    "options": {
      "A": "Replace 'be empathetic and casual' with 'match the brand voice guide,' remove the instruction to offer goodwill credits, and let each draft determine its own length based on the incident.",
      "B": "Move the brand voice guide and the goodwill-credit policy into the Project knowledge base and rely on the documents alone to govern tone, length, and credit decisions, without changing the custom instructions.",
      "C": "Keep the existing instructions and add a sentence telling Claude to consult the brand voice guide and the goodwill-credit policy that are attached to the Project knowledge base.",
      "D": "Specify the brand voice attributes (empathetic, formal, no contractions), set a minimum length, and instruct Claude to recommend a goodwill credit only when the attached eligibility policy permits one."
    },
    "answer": "D",
    "explanation": "Explicitly encode the required brand attributes and conditional policy behavior in the instructions instead of relying on vague or conflicting guidance."
  },
  {
    "id": 24,
    "question": "You are a project manager working through a long planning conversation with Claude and must keep the conversation productive as it grows. Which two practices keep a long planning conversation productive? (Select two.)",
    "options": {
      "A": "Avoid summarizing so the model retains every original word it has produced.",
      "B": "Periodically summarize decisions made so far to compress the working state.",
      "C": "Switch context aggressively between unrelated planning topics within one thread.",
      "D": "Restate constraints and goals when the focus shifts to a new subtopic.",
      "E": "Open a new thread for every minor follow-up question to keep threads short."
    },
    "answer": ["B", "D"],
    "explanation": "Periodic summaries compress working context, while restating goals and constraints when the topic shifts keeps the active context clear."
  },
  {
    "id": 25,
    "question": "You are reviewing items proposed for inclusion in a Project that supports policy summaries. Which two items are appropriate to include in the Project? (Select two.)",
    "options": {
      "A": "Employee onboarding records used in a separate HR workflow managed by the same team",
      "B": "The summary format and the audience expectations the summaries must meet",
      "C": "Presentation slides from a recent team training session on internal communication standards",
      "D": "Active client case files maintained by a separate legal team for a different workstream",
      "E": "The current policy library that the summaries are drawn from"
    },
    "answer": ["B", "E"],
    "explanation": "Project knowledge should contain the relevant output requirements and authoritative source material for the recurring policy-summary task."
  },
  {
    "id": 26,
    "question": "You are an operations lead integrating Claude into a multi-person team workflow. Which integration step should be performed first?",
    "options": {
      "A": "Pilot the integrated workflow with a small group on representative work.",
      "B": "Document the integrated workflow and onboard the rest of the team to it.",
      "C": "Iterate the integrated workflow based on the findings from the pilot.",
      "D": "Identify where Claude adds value and where each handoff to a human occurs."
    },
    "answer": "D",
    "explanation": "First map where Claude should add value and where human handoffs occur; implementation and piloting follow that design."
  },
  {
    "id": 27,
    "question": "A senior project coordinator has been asked to use Claude to produce an end-of-year report covering finance, operations, and customer outcomes. The three areas have separate data owners and separate source documents. Which decomposition approach is most likely to produce a strong report?",
    "options": {
      "A": "Prompt Claude once with all source documents and request the full report, including the executive summary, in a single pass.",
      "B": "Define the report goals, gather inputs per section, draft each section in its own prompt, then synthesize the executive summary from the drafted sections.",
      "C": "Draft the executive summary first to anchor the report's narrative, then draft each section so it supports the summary already written.",
      "D": "Draft the three sections in parallel, each using a section-specific prompt, then concatenate and lightly edit the outputs into the final report."
    },
    "answer": "B",
    "explanation": "Decomposing by section allows focused inputs and prompts, then the executive summary can accurately synthesize the completed sections."
  },
  {
    "id": 28,
    "question": "You are an analyst reviewing a Claude response that addresses two of three required questions and skips the third. Which prompt element most likely needs strengthening?",
    "options": {
      "A": "The output format should be revised to allow Claude to determine the appropriate structure for each question's answer.",
      "B": "The task statement should explicitly enumerate the three required questions and require an answer to each.",
      "C": "The context provided to Claude should be expanded with additional background detail about the subject matter."
    },
    "answer": "B",
    "explanation": "Explicitly enumerating required outputs and requiring an answer to each reduces omission of one of the requested questions."
  },
  {
    "id": 29,
    "question": "You are an operations assistant selecting a model for a recurring meeting-summary task that does not require deep reasoning and runs at moderate volume. Which selection best balances cost, speed, and quality?",
    "options": {
      "A": "Sonnet, which provides solid quality at moderate latency and rate-limit consumption for everyday work.",
      "B": "Opus, which prioritizes depth at higher latency and rate-limit consumption.",
      "C": "Haiku, which is suitable only when the task requires the fastest possible turnaround.",
      "D": "A custom model, which the Associate-level user would need to build and train independently."
    },
    "answer": "A",
    "explanation": "For routine work at moderate volume, Sonnet provides a practical balance of quality, latency, and consumption."
  },
  {
    "id": 30,
    "question": "A Claude associate is evaluating a proposed use case in which Claude would issue final hiring decisions without any human review, applying the AI Fluency Framework Delegation competency. Which classification best reflects Delegation principles?",
    "options": {
      "A": "Appropriate with light human review applied only to a sample of decisions, since Delegation criteria reserve final hiring decisions for human ownership rather than sample-based oversight after the fact.",
      "B": "Inappropriate for full AI delegation, because hiring decisions involve human judgment, accountability, and consequences that Delegation criteria reserve for human ownership rather than autonomous AI execution.",
      "C": "Inappropriate only because of system reliability concerns rather than accountability, even though Delegation criteria classify final hiring decisions as requiring human ownership regardless of system performance.",
      "D": "Appropriate for full AI delegation on the basis that processing speed outweighs the human judgment, accountability, and consequence considerations that Delegation criteria require for final hiring decisions."
    },
    "answer": "B",
    "explanation": "Final hiring decisions carry significant human judgment, accountability, and consequences, so they should remain under human ownership."
  },
  {
    "id": 31,
    "question": "You received a vague request to 'look at our pricing.' After discovery, the goal is confirmed: produce a structured competitor-pricing summary the team can act on, not new pricing ideas. Which strategy best fits the clarified task?",
    "options": {
      "A": "Use a divergent brainstorming approach to generate a wide range of possible competitor-pricing observations, then narrow to the most likely ones.",
      "B": "Use a research strategy that gathers structured information about competitor pricing, names sources, and notes confidence in each finding.",
      "C": "Use a comparative analysis strategy that contrasts the company's pricing against a single named competitor, since pairwise comparison produces the clearest output.",
      "D": "Use an open conversational strategy that explores competitor pricing iteratively across several prompts, allowing the structure to emerge from the conversation."
    },
    "answer": "B",
    "explanation": "A structured competitor-pricing summary calls for systematic research with sources and confidence, not brainstorming or an unconstrained conversation."
  },
  {
    "id": 32,
    "question": "A finance consultant is adapting a Claude-generated narrative for a quarterly investor update. Investors have a fixed time window for the call and expect the headline result and forward outlook to be clear early. Which adaptation is most appropriate for this audience?",
    "options": {
      "A": "Lead with the quarter's operational highlights, present the financial result in the middle for context, and close with the forward outlook.",
      "B": "Lead with the forward outlook, since investors are most interested in what comes next, and present the headline result and drivers afterward.",
      "C": "Lead with the headline result, present the key drivers concisely, and close with the forward outlook.",
      "D": "Lead with a chronological recap of the quarter's events, present the headline result at the natural end of the recap, and conclude with the forward outlook."
    },
    "answer": "C",
    "explanation": "For a time-constrained investor audience, lead with the key result, briefly explain drivers, and then provide the outlook."
  },
  {
    "id": 33,
    "question": "A knowledge worker often switches between Claude and another AI service while working on a long-running project. Which Claude feature most directly reduces repetitive context-setting between sessions?",
    "options": {
      "A": "Disable Memory entirely and re-paste the same context paragraphs at the start of every Claude session, even though Memory is designed to retain that context across conversations automatically.",
      "B": "Open every Claude session in Incognito mode, which prevents the conversation from contributing to Memory and therefore eliminates the cross-session continuity the project would benefit from.",
      "C": "Enable Memory and use the import capability to bring relevant context from the other AI service into Claude as a starting point for the project's work.",
      "D": "Rely on a single static Artifact pasted into each chat as the only continuity mechanism, ignoring the Memory feature that is purpose-built for retaining work-relevant context across sessions."
    },
    "answer": "C",
    "explanation": "The intended approach uses Memory plus import capability to reduce repeated context-setting across services and sessions."
  },
  {
    "id": 34,
    "question": "An HR team member is reviewing a Claude-drafted set of interview questions intended for use across all candidates for a single role. The questions will be asked in the same order to every candidate. Which review practice best supports fairness?",
    "options": {
      "A": "Review the questions and rotate the order across candidates so no candidate is consistently asked the hardest questions first.",
      "B": "Review the questions to ensure they apply equally to all candidates, avoid assumptions about candidate backgrounds, and focus on the role's actual requirements.",
      "C": "Review the questions for length and tone, since the questions Claude drafts are well-aligned to role requirements by default and need only stylistic adjustment.",
      "D": "Review the questions and add follow-up questions tailored to each candidate's resume so each interview can explore the candidate's specific experience."
    },
    "answer": "B",
    "explanation": "Fairness requires consistent, job-relevant questions that avoid assumptions about candidate backgrounds."
  },
  {
    "id": 35,
    "question": "A customer-success team member is reviewing a Claude-generated customer health-check report against the agreed deliverable list. The report covers all five required topics, but the renewal-risk section names only one risk factor where the deliverable specification calls for renewal risk to be assessed across pricing, product fit, and stakeholder change. Which conclusion is best supported?",
    "options": {
      "A": "The report meets the topic-level requirements but the renewal-risk section is under-scoped against the specification and should be expanded before delivery.",
      "B": "The report does not meet the deliverable specification because a section that addresses only one of three required risk dimensions counts as a missing section.",
      "C": "The report meets the deliverable specification because all five required topics appear and the renewal-risk section is present in the output.",
      "D": "The report's completeness cannot be assessed from the deliverable specification alone; the customer should review the output and confirm whether the renewal-risk section is sufficient."
    },
    "answer": "A",
    "explanation": "The topic is present, but its required scope is incomplete; expand the renewal-risk analysis before delivery."
  },
  {
    "id": 36,
    "question": "You are running a weekly feedback-and-adjustment cycle. Which is the correct order of cycle steps? (1) Translate feedback into one or two targeted adjustments for the next cycle. (2) Run the next cycle and compare results against the prior cycle. (3) Capture the specific feedback received during the review. (4) Document what changed, what effect it produced, and any remaining issues. (5) Decide whether to continue iterating, switch approach, or escalate.",
    "options": {
      "A": "2, 3, 1, 4, 5",
      "B": "3, 1, 2, 4, 5",
      "C": "1, 3, 2, 4, 5",
      "D": "3, 2, 1, 4, 5"
    },
    "answer": "B",
    "explanation": "Capture the specific feedback first (3), translate it into targeted adjustments (1), run the next cycle and compare results (2), document the changes and their effects (4), then decide whether to continue, switch approach, or escalate (5)."
  },
  {
    "id": 37,
    "question": "You are a knowledge worker preparing inputs for a Claude prompt. Which data type most clearly requires extra handling such as redaction or anonymization before being included in the prompt?",
    "options": {
      "A": "Public press releases the company has already published",
      "B": "Generic product descriptions available on the company's marketing site",
      "C": "Job titles taken from the company's public organizational chart",
      "D": "Customer government identifiers and full payment-card numbers tied to named individuals"
    },
    "answer": "D",
    "explanation": "Government identifiers and full payment-card numbers are highly sensitive personal/financial data and require protective handling."
  },
  {
    "id": 38,
    "question": "You are a communications manager validating a Claude-generated newsletter that includes a specific industry growth figure. The figure appears in three trade-press articles, but none of them link to the underlying study. Which validation step is correct?",
    "options": {
      "A": "Locate the original study referenced by the trade-press articles and verify the figure in the primary source.",
      "B": "Use the highest figure across the three articles to make the newsletter more compelling.",
      "C": "Remove the source attribution and present the figure as common knowledge.",
      "D": "Accept the figure because three trade-press articles repeat it."
    },
    "answer": "A",
    "explanation": "Verify important factual claims against the primary source rather than relying on repeated secondary reporting."
  },
  {
    "id": 39,
    "question": "You are an operations assistant asking Claude to summarize 200 weekly metric records across multiple regions. Which output format communicates the data most clearly?",
    "options": {
      "A": "A series of regional narrative briefs, each describing weekly performance in paragraph form",
      "B": "A narrative summary organized by region, describing trends and notable records in prose",
      "C": "A bulleted list of observations grouped by region without consistent metrics across entries",
      "D": "A structured table with one record per row and one metric per column, sorted by region"
    },
    "answer": "D",
    "explanation": "A structured table provides consistent fields and makes 200 records easier to scan, compare, and analyze."
  },
  {
    "id": 40,
    "question": "You are reviewing Connector setups that colleagues have proposed for various tasks. Which two Connector setups represent safe and appropriate uses? (Select two.)",
    "options": {
      "A": "A Connector that links to a personal cloud storage account where team members store working drafts alongside personal files",
      "B": "A Connector that links to the team's project management workspace under approved scope",
      "C": "A Connector that links to the personnel-records system for team leads to support scheduling tasks",
      "D": "A read-only Connector that links to the public knowledge base for reference content",
      "E": "A Connector that links to the payroll system to allow team members to submit expense reports directly"
    },
    "answer": ["B", "D"],
    "explanation": "Approved, appropriately scoped project-management access and read-only public reference access are safer than personal or sensitive HR/payroll connections."
  },
  {
    "id": 41,
    "question": "You are a project manager at Orinexa, Inc. You are picking a Claude model for a new production workload and must complete the requirements definition before testing candidate models. Which two steps must be completed BEFORE testing candidate models on a representative sample? (Select two.)",
    "options": {
      "A": "Sign off on the production rollout plan with the platform and security teams.",
      "B": "Promote the selected model to production traffic for the workload.",
      "C": "Retest the selected model whenever a new model version is released.",
      "D": "Define the quality bar, the latency tolerance, and the expected request volume.",
      "E": "Choose a candidate model based on the requirements profile and known capabilities."
    },
    "answer": ["D", "E"],
    "explanation": "Before representative testing, define measurable requirements and select a candidate whose known capabilities fit those requirements."
  },
  {
    "id": 42,
    "question": "An HR associate is preparing to use Claude on a sensitive personnel matter. The organization's AI policy explicitly states that information related to ongoing investigations must not be entered into AI tools. Which response best aligns with the policy?",
    "options": {
      "A": "Enter a paraphrased version of the investigation-related information that removes identifying details, since paraphrasing addresses the spirit of policy.",
      "B": "Refrain from entering investigation-related information into Claude and consult HR leadership for an approved alternative way to handle the matter.",
      "C": "Enter the investigation-related information into Claude in an Incognito chat, since Incognito chats do not retain information and therefore fall outside the policy's intent.",
      "D": "Enter the investigation-related information into Claude only after the investigation closes, since the policy applies during the investigation period."
    },
    "answer": "B",
    "explanation": "An explicit policy prohibition should be followed; seek an approved alternative rather than trying to bypass the restriction through paraphrasing or chat mode."
  },
  {
    "id": 43,
    "question": "You are a process consultant integrating Claude into an existing weekly workflow. Which is the correct order of integration steps? (1) Pilot the integrated workflow with a small group and gather feedback. (2) Document the current workflow steps, owners, and decision points. (3) Update the documented workflow and roll it out to the broader team. (4) Identify the steps where Claude can augment work and where humans must remain. (5) Define the inputs Claude needs, the outputs Claude returns, and the hand-offs around each step.",
    "options": {
      "A": "2, 5, 4, 1, 3",
      "B": "4, 2, 5, 1, 3",
      "C": "2, 4, 5, 1, 3",
      "D": "1, 2, 4, 5, 3"
    },
    "answer": "C",
    "explanation": "Document the current workflow first (2), identify where Claude can augment work and where humans must remain (4), define Claude's inputs, outputs, and hand-offs (5), pilot the integrated workflow and gather feedback (1), then update the documentation and roll it out to the broader team (3)."
  },
  {
    "id": 44,
    "question": "You are a knowledge manager structuring source material in the context window for a long Claude evaluation task. Which two practices produce a more effective use of the context window? (Select two.)",
    "options": {
      "A": "Mark each source clearly with delimiters so the model can attribute claims correctly.",
      "B": "Repeat the same instruction at the start, middle, and end to reinforce it.",
      "C": "Paste every available document into context regardless of relevance to the task.",
      "D": "Place the most reference-critical material near the beginning or end of context.",
      "E": "Mix sources together in a single block so the model can synthesize them freely."
    },
    "answer": ["A", "D"],
    "explanation": "Clear source boundaries improve attribution, and placing critical material near the beginning or end can improve its accessibility within the context."
  },
  {
    "id": 45,
    "question": "An analyst has been asked to compute summary statistics from an uploaded sales data file and produce a chart for a weekly report. Which output approach best fits the task?",
    "options": {
      "A": "Request a narrative description of the data in the chat response without computing values, leaving the summary statistics and the chart unproduced and the weekly report incomplete.",
      "B": "Use Code Execution to perform the calculations and generate the chart, then verify the computed results against the source data before sharing the output.",
      "C": "Ask Claude to estimate the summary statistics from a brief preview of the file, accepting unverified figures rather than running the calculations against the full uploaded dataset.",
      "D": "Produce a written placeholder for the chart in the chat response without generating the actual visualization, leaving the weekly report without the visual output it requires."
    },
    "answer": "B",
    "explanation": "Use computation tooling for exact statistics and chart generation, then verify the results against the source data."
  },
  {
    "id": 46,
    "question": "Before sharing a Claude-generated brief, an analyst is applying the AI Fluency Framework Discernment competency to evaluate it. Which review best reflects Discernment principles?",
    "options": {
      "A": "Skip the source material check during review and rely on overall tone and logical flow as proxies for factual accuracy.",
      "B": "Review the opening paragraph and the conclusion of the brief, since these sections typically reflect the quality of the full document.",
      "C": "Conduct a systematic check of the brief against the task requirements, source material, and professional standards before sharing it.",
      "D": "Accept the brief on the basis that it reads fluently and the subject matter aligns with the analyst's professional knowledge of the topic."
    },
    "answer": "C",
    "explanation": "Discernment requires systematic evaluation against requirements, evidence, and relevant professional standards rather than relying on fluency or selective review."
  },
  {
    "id": 47,
    "question": "You are an HR specialist sorting potential ethical risks of a Claude-supported workflow. Which two risks pose the highest ethical concern in an HR-adjacent workflow? (Select two.)",
    "options": {
      "A": "Inconsistent tone and formatting across internal HR communications sent to employees",
      "B": "Outputs that systematically disadvantage members of a protected group",
      "C": "Decisions that materially affect a person's employment without human accountability",
      "D": "A clerical typo in a routine internal calendar invitation",
      "E": "Inconsistent use of the company's preferred dash style across documents"
    },
    "answer": ["B", "C"],
    "explanation": "Systemic discrimination and consequential employment decisions without human accountability are high-severity ethical risks."
  },
  {
    "id": 48,
    "question": "You are a customer-success manager considering whether to escalate a Claude-generated response. Which factor most strongly raises the impact of the output and supports escalation before external use?",
    "options": {
      "A": "The response is a brief internal announcement about an upcoming team all-hands meeting.",
      "B": "The response is an internal draft summarizing the associate's notes from a customer call for their own reference.",
      "C": "The response is an unchanged draft for a paying customer that includes a service-level commitment.",
      "D": "The response is a casual rephrasing of an internal team status update."
    },
    "answer": "C",
    "explanation": "An externally facing customer response containing a service-level commitment has direct business and customer impact, warranting escalation/review."
  },
  {
    "id": 49,
    "question": "An operations assistant is using Claude to support process optimization for an existing intake workflow. The assistant has access to the current process documentation and recent cycle-time data. Which activity best uses Claude to support this process optimization task?",
    "options": {
      "A": "Map the current intake process, identify key bottlenecks based on the cycle-time data, and propose optimization options for human review.",
      "B": "Use Claude to interview each team member who works on the intake process and synthesize the interview output into a redesigned workflow.",
      "C": "Apply Claude to predict the cycle-time impact of each proposed change and rank them so the team can implement improvements in priority order.",
      "D": "Generate an optimized version of the intake process based on industry benchmarks, then compare it to the current process to identify gaps."
    },
    "answer": "A",
    "explanation": "Use the available process documentation and data to map the current state, identify bottlenecks, and propose options for human evaluation."
  },
  {
    "id": 50,
    "question": "A business analyst has been asked to use Claude to extract requirements from a recorded stakeholder interview transcript. The transcript is approximately 90 minutes long and covers multiple topics. Which approach is most likely to produce a usable structured output?",
    "options": {
      "A": "Provide the transcript and ask Claude to summarize it, extract requirements from the summary in a second pass since two passes catch more detail.",
      "B": "Provide the transcript along with a structured prompt that requests must-haves, nice-to-haves, open questions, and conflicts as separate sections.",
      "C": "Provide the transcript and ask Claude to produce a single ranked list of requirements, since a single list is easier for stakeholders to review than separate sections.",
      "D": "Provide the transcript and ask Claude to produce a chronological list of every statement that contains a verb, then classify each statement as a requirement or not."
    },
    "answer": "B",
    "explanation": "A structured output schema aligned to the desired requirement categories makes a long, multi-topic transcript more actionable and reviewable."
  },
  {
    "id": 51,
    "question": "You are a content creator. A first response from Claude is accurate but uses inconsistent terminology that does not match your organization's glossary. Which iterative change addresses the issue most directly?",
    "options": {
      "A": "Increase the requested length so the inconsistent terminology appears more often.",
      "B": "Remove the topic from the prompt to avoid the terminology issue entirely.",
      "C": "Ask Claude to invent additional terms unrelated to the glossary.",
      "D": "Provide the organization's glossary and instruct Claude to use only those terms throughout the response."
    },
    "answer": "D",
    "explanation": "Supplying the authoritative glossary and explicitly requiring its terminology directly targets the inconsistency."
  },
  {
    "id": 52,
    "question": "You are an operations manager preparing a quick reference card for a team. Which description correctly characterizes the three Claude model tiers in general terms?",
    "options": {
      "A": "Haiku is fast and lightweight, Sonnet is the balanced default for most everyday work, and Opus is the most capable for complex reasoning at higher latency and cost.",
      "B": "Haiku is the most capable model for the deepest reasoning, while Opus is the lightweight model for quick replies.",
      "C": "All three models offer the same reasoning depth and differ only in response speed and cost.",
      "D": "Sonnet is the fastest of the three models because its architecture is optimized for speed rather than reasoning depth."
    },
    "answer": "A",
    "explanation": "The tiers are broadly positioned from lightweight/fast Haiku, to balanced Sonnet, to higher-capability Opus for demanding reasoning."
  },
  {
    "id": 53,
    "question": "A learning specialist is configuring a Claude Project for a recurring course-design workflow. Which configuration approach best leverages a Skill alongside other Project elements?",
    "options": {
      "A": "Configure the Project with custom instructions that contradict the Skill's documented purpose, creating ambiguity about which guidance Claude should follow within the recurring course-design workflow.",
      "B": "Upload the supporting knowledge sources but disable the relevant Skill, eliminating the packaged capability the workflow needs and forcing each chat to reconstruct the procedure manually.",
      "C": "Add the relevant Skill to the Project, upload the supporting knowledge sources, and write custom instructions that reference both the Skill and the knowledge.",
      "D": "Add the Skill to the Project but omit the supporting knowledge sources and any custom instructions, so the Project lacks the reference content and personalization needed for the workflow."
    },
    "answer": "C",
    "explanation": "Combine the packaged Skill with relevant Project knowledge and explicit instructions that tell Claude how the elements work together."
  },
  {
    "id": 54,
    "question": "You are optimizing a recurring Claude workflow and must complete the diagnostic steps before changing the workflow. Which two diagnostic steps must be completed BEFORE changing the recurring workflow? (Select two.)",
    "options": {
      "A": "Document the revised workflow steps and update the team's standard operating procedures.",
      "B": "Deploy the updated workflow across the team and monitor for adoption issues.",
      "C": "Notify executive leadership of the projected savings from the optimization.",
      "D": "Measure the current workflow's quality, time, and cost across recent runs.",
      "E": "Identify the steps that contribute most to time, cost, or quality issues."
    },
    "answer": ["D", "E"],
    "explanation": "Diagnose the current state with measurements and identify the main contributors before deciding what to change."
  },
  {
    "id": 55,
    "question": "You are a marketing manager using Claude to research a new market segment. Which research step should be performed first?",
    "options": {
      "A": "Define the specific research questions that must be answered for the segment.",
      "B": "Validate the gathered information against authoritative external sources.",
      "C": "Generate a final research report combining every Claude output produced.",
      "D": "Submit a series of Claude prompts to gather information across the segment."
    },
    "answer": "A",
    "explanation": "Define the research questions first so the subsequent information gathering and validation are focused and purposeful."
  },
  {
    "id": 56,
    "question": "A communications manager is drafting a prompt for Claude to produce a quarterly newsletter for store managers in three regions. The agreed key messages, regional details, and a prior newsletter team lead are all available. Which prompt approach is most likely to produce a useful first draft?",
    "options": {
      "A": "Attach the prior newsletter, and ask Claude to match its tone and structure while incorporating the new key messages for the three named regions.",
      "B": "Provide the agreed key messages and the three regions, and ask Claude to choose an appropriate length and tone for store managers.",
      "C": "Attach the prior newsletter and the agreed key messages, and ask Claude to produce a similar newsletter for this quarter.",
      "D": "Name the audience, the three regions, the length, the tone, and the agreed key messages, and reference the prior newsletter only as a tone example."
    },
    "answer": "D",
    "explanation": "Specify the audience, regions, length, tone, and required messages directly, using the prior newsletter only as a style reference."
  },
  {
    "id": 57,
    "question": "You are writing system-level instructions for a Project that supports recurring writing tasks. Which step should be performed first when writing the system-level instructions?",
    "options": {
      "A": "Define the purpose of the Project and the boundaries the instructions must respect.",
      "B": "Refine the drafted instructions based on observed gaps from validation runs.",
      "C": "Distribute the finalized instructions to collaborators on the Project.",
      "D": "Validate the drafted instructions against representative requests for the Project."
    },
    "answer": "A",
    "explanation": "Start by defining the Project's purpose and boundaries; drafting, validation, refinement, and distribution follow."
  },
  {
    "id": 58,
    "question": "An HR business partner is configuring a new Project for recurring policy questions from managers. The Project will be used across many chats by several HR team members. Which content belongs in the Project knowledge base?",
    "options": {
      "A": "The current employee handbook only, with the leveling guide and policies-FAQ attached at the start of each chat as needed for that chat's topic.",
      "B": "The current employee handbook, the leveling guide, and the policies-FAQ document referenced across the Project's chats.",
      "C": "The current employee handbook, the leveling guide, the policies-FAQ, and every email the HR team has sent about policy in the past year, for additional context.",
      "D": "The current employee handbook plus prior versions of the handbook going back five years, so Claude can answer questions about how policies have changed."
    },
    "answer": "B",
    "explanation": "Project knowledge should contain the current, recurring authoritative materials needed across its chats, not unrelated or outdated material."
  },
  {
    "id": 59,
    "question": "A finance manager is about to discuss a confidential pre-announcement figure with Claude. Which two settings best align with sound privacy practice for this conversation? (Select two.)",
    "options": {
      "A": "Enable Memory contribution for the conversation so the context carries forward to support follow-up analysis in future sessions.",
      "B": "Treat the conversation as appropriate for default Memory settings, since the figure will only be discussed briefly and is unlikely to be retained.",
      "C": "Disable Memory contribution for the conversation if Incognito mode is not used, so the confidential figure is not retained as persistent context that could surface in later unrelated sessions.",
      "D": "Skip the privacy setting decision and proceed with default behavior, since the conversation will not explicitly instruct Claude to remember the figure.",
      "E": "Open the conversation in Incognito mode, which prevents the conversation from contributing to Memory and avoids persistent retention of the confidential pre-announcement figure across sessions."
    },
    "answer": ["C", "E"],
    "explanation": "For confidential information, avoid persistent Memory and use Incognito mode when appropriate to prevent the sensitive context from carrying into future sessions."
  },
  {
    "id": 60,
    "question": "A project manager is transforming a Claude-generated draft into a polished board memo. The board reads the memo before the meeting and expects it to be scannable, factually verified, and consistent with the organization's standard terminology. Which set of refinements is most appropriate?",
    "options": {
      "A": "Apply consistent headings, tighten wording for executive scannability, align terminology with the organization's standards, and verify each fact against source data.",
      "B": "Tighten wording for executive scannability and verify each fact against source data; leave heading structure and terminology as written to preserve the draft's voice.",
      "C": "Apply consistent headings and align terminology with the organization's standards; rely on Claude's verification of facts, since the draft was generated from the source data.",
      "D": "Apply consistent headings, expand each section to give the board full context, and align terminology with the organization's standards."
    },
    "answer": "A",
    "explanation": "The requested board-memo qualities require all four refinements: scannability, consistent headings, standard terminology, and independent fact verification."
  }
]

export const claudeAssociateSet5Questions = rawClaudeAssociateSet5.map((question) => {
  const answerValues = Array.isArray(question.answer) ? question.answer : [question.answer]

  return {
    ...question,
    options: Object.values(question.options),
    answer: answerValues.map((value) => question.options[value] ?? value)
  }
})
