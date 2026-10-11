const rawClaudeAssociateSet2 = [
  {
    "id": 1,
    "question": "You are a Claude associate assessing a proposed Claude use case before approving it for your team. Which is the correct order of assessment steps? (1) Compare the use case against the organization's policies and the relevant regulatory considerations. (2) Document the assessment outcome and the rationale for traceability. (3) Identify the audience, decision impact, and reversibility of the outputs. (4) Decide whether the use case proceeds, requires modification, or is declined. (5) Identify the data types involved and whether sensitive data is implicated.",
    "options": {
      "A": "3,1,5,4,2",
      "B": "3,5,1,4,2",
      "C": "1,3,5,4,2",
      "D": "5,3,1,4,2"
    },
    "answer": "B",
    "explanation": "Correct: B."
  },
  {
    "id": 2,
    "question": "Preparing an AI-assisted work product for external delivery, a senior manager is applying the AI Fluency Framework Diligence competency. Which step best reflects Diligence principles?",
    "options": {
      "A": "Delegate accountability for the AI-assisted work product to Claude itself rather than retaining it as a human obligation.",
      "B": "Deliver the work product without independent verification on the basis that AI assistance shifts accountability away from the human.",
      "C": "Skip verification of any element on the assumption that fluent output implies accuracy.",
      "D": "Identify the elements of the work product that must be independently verified or corrected before delivery, and take ownership of those verifications as a professional accountability obligation."
    },
    "answer": "D",
    "explanation": "Correct: D. Identify the elements of the work product that must be independently verified or corrected before delivery, and take ownership of those verifications as a professional accountability obligation."
  },
  {
    "id": 3,
    "question": "You are designing a checklist for evaluating Claude outputs and must complete the upstream steps before scoring an output. Which two steps must be completed BEFORE scoring a Claude output against the checklist? (Select two.)",
    "options": {
      "A": "Promote the approved output into the downstream production process.",
      "B": "Define the evaluation criteria that matter for the task at hand.",
      "C": "Specify the threshold that distinguishes acceptable from unacceptable output.",
      "D": "Forward unacceptable outputs to a senior reviewer for second-pass review.",
      "E": "Document the final score and the reviewer comments for the audit trail."
    },
    "answer": ["B", "C"],
    "explanation": "Correct choices: B, C. Define the evaluation criteria that matter for the task at hand. Specify the threshold that distinguishes acceptable from unacceptable output."
  },
  {
    "id": 4,
    "question": "You are an analyst fact-checking a Claude-generated report. Two cited sources give conflicting dates for the same event. Which approach is correct?",
    "options": {
      "A": "Publish both dates without resolving the conflict and let the reader choose.",
      "B": "Average the two conflicting dates and use the average.",
      "C": "Locate a primary or authoritative source for the event and use the date that source confirms.",
      "D": "Choose the more recent date on the basis that later sources typically reflect updated or corrected information."
    },
    "answer": "C",
    "explanation": "Correct: C. Locate a primary or authoritative source for the event and use the date that source confirms."
  },
  {
    "id": 5,
    "question": "You are a knowledge worker reviewing a Claude-generated brief that asserts a \"well-known industry standard\" without naming any source. How should this assertion be handled?",
    "options": {
      "A": "Strengthen the assertion by adding more confident wording.",
      "B": "Republish the brief unchanged because the claim sounds authoritative.",
      "C": "Accept the assertion because the phrase \"well-known\" is reassuring.",
      "D": "Treat the assertion as unverified, and either source it from an authoritative reference or remove it."
    },
    "answer": "D",
    "explanation": "Correct: D. Treat the assertion as unverified, and either source it from an authoritative reference or remove it."
  },
  {
    "id": 6,
    "question": "You are a knowledge worker summarizing common prompt failure patterns for the team. Which pattern most often produces vague or off-target output?",
    "options": {
      "A": "a prompt that names a topic but does not state the task, audience, or required output structure",
      "B": "a prompt that explicitly names the role, task, audience, and required output format",
      "C": "a prompt that includes a representative example of the desired output",
      "D": "a prompt that adds clear constraints on length and tone"
    },
    "answer": "A",
    "explanation": "Correct: A. a prompt that names a topic but does not state the task, audience, or required output structure"
  },
  {
    "id": 7,
    "question": "You are an operations lead and notice that a Project's outputs have been drifting from the team's current expectations. Which maintenance action should be tried first?",
    "options": {
      "A": "Retire the Project and rebuild a new one from scratch with fresh content.",
      "B": "Switch the Project to a different Claude model in the hope it behaves better.",
      "C": "Review the Project's instructions and reference materials against current standards.",
      "D": "Continue using the Project and accept the drift as the new baseline of behavior."
    },
    "answer": "C",
    "explanation": "Correct: C. Review the Project's instructions and reference materials against current standards."
  },
  {
    "id": 8,
    "question": "You are evaluating whether a \"redesign new-hire onboarding\" request should be decomposed before prompting Claude. Which feature of the request most strongly indicates decomposition will help?",
    "options": {
      "A": "The request involves content the associate has produced many times before and knows can be handled in a single well-structured prompt.",
      "B": "The request requires multiple distinct outputs: a process map, supporting materials, and a measurement plan.",
      "C": "The request is for a single structured document that can be produced from one set of inputs in one prompt.",
      "D": "The request involves a single well-defined output with a clear input and a familiar format."
    },
    "answer": "B",
    "explanation": "Correct: B. The request requires multiple distinct outputs: a process map, supporting materials, and a measurement plan."
  },
  {
    "id": 9,
    "question": "You are running an optimization pass on a recurring workflow. Which is the correct order of optimization steps? (1) Apply targeted optimization to the bottleneck step. (2) Roll out the optimized workflow to the broader team and document the change. (3) Identify the bottleneck step using measured time per step and queue length. (4) Map the current workflow steps, owners, and decision points. (5) Pilot the change with a small group and measure the effect against the prior baseline.",
    "options": {
      "A": "4,3,1,5,2",
      "B": "3,4,1,5,2",
      "C": "4,1,3,5,2",
      "D": "3,4,1,5,2"
    },
    "answer": "A",
    "explanation": "Correct: A. 4, 3, 1, 5, 2."
  },
  {
    "id": 10,
    "question": "You are an HR specialist reviewing data items proposed for inclusion in a Claude prompt. Which two data items are appropriate to include in a Claude prompt for a routine task? (Select two.)",
    "options": {
      "A": "a redacted job description that the model will adapt for a posting",
      "B": "an anonymized summary of an HR policy that the model will rephrase",
      "C": "accommodation request notes from an employee's HR file needed to draft a role adjustment memo",
      "D": "a compensation band summary that includes employee names and current salary figures for a specific team",
      "E": "employee ID numbers and hire dates for the team roster included to help Claude personalize onboarding communications"
    },
    "answer": ["A", "B"],
    "explanation": "Correct choices: A, B. a redacted job description that the model will adapt for a posting; an anonymized summary of an HR policy that the model will rephrase."
  },
  {
    "id": 11,
    "question": "You are a knowledge worker who decomposed a \"draft a board memo\" request into fifteen tiny steps and noticed the output now feels disjointed because related ideas were split apart. Which adjustment is most appropriate?",
    "options": {
      "A": "Remove all sequencing so the steps run in random order.",
      "B": "Consolidate related steps into fewer cohesive sections that group naturally connected ideas.",
      "C": "Subdivide each tiny step into ten more tiny steps for additional precision.",
      "D": "Combine the original request back into one unstructured sentence."
    },
    "answer": "B",
    "explanation": "Correct: B. Consolidate related steps into fewer cohesive sections that group naturally connected ideas."
  },
  {
    "id": 13,
    "question": "A project lead is evaluating a Claude-generated status report against the project charter. The report will be delivered to a steering committee, which expects accurate status against committed milestones. Which set of criteria provides the strongest evaluation frame?",
    "options": {
      "A": "readability, narrative flow, and whether the report tells a coherent story about the project's progress",
      "B": "the report's visual polish and tone",
      "C": "length, formatting consistency, and tone appropriateness for a steering committee audience",
      "D": "accuracy of facts against the charter, completeness against required reporting fields, and relevance to the audience receiving the report"
    },
    "answer": "D",
    "explanation": "Correct: D. accuracy of facts against the charter, completeness against required reporting fields, and relevance to the audience receiving the report"
  },
  {
    "id": 14,
    "question": "You are an operations team member preparing inputs to summarize customer feedback. The feedback file mixes public quotations with personal contact details. Which preparation approach is most appropriate?",
    "options": {
      "A": "Strip out the feedback content and submit only the personal contact details.",
      "B": "Submit the entire file unchanged so Claude has complete context.",
      "C": "Replace the feedback content with the personal contact details and ask Claude to invent the missing feedback.",
      "D": "Extract only the feedback content needed for the summary, redact or anonymize personal contact details, and submit the trimmed input."
    },
    "answer": "D",
    "explanation": "Correct: D. Extract only the feedback content needed for the summary, redact or anonymize personal contact details, and submit the trimmed input."
  },
  {
    "id": 15,
    "question": "You are a customer-success lead running an interactive workflow where each turn must respond quickly and the per-turn reasoning is light. Which selection best aligns to the requirements?",
    "options": {
      "A": "Choose Haiku to keep latency low and to handle a light reasoning load efficiently at scale.",
      "B": "Choose a model based on the alphabetical order of its name.",
      "C": "Choose any model because latency does not vary by model.",
      "D": "Choose Opus to maximize reasoning depth despite higher latency."
    },
    "answer": "A",
    "explanation": "Correct: A. Choose Haiku to keep latency low and to handle a light reasoning load efficiently at scale."
  },
  {
    "id": 16,
    "question": "A finance manager must select a Claude feature for a task that requires deterministic calculations across a multi-tab spreadsheet. Which selection best fits the requirement?",
    "options": {
      "A": "Use a standard chat prompt for the calculations, which generates text without running code and does not produce the verified deterministic output the multi-tab calculation task requires.",
      "B": "Use the Research feature for the calculations, which gathers and synthesizes external sources and is not the appropriate feature for deterministic computation on an uploaded spreadsheet.",
      "C": "Use an Artifact alone for the calculations, which provides a stable editable surface for the result but does not perform the deterministic computation that Code Execution would run.",
      "D": "Use Code Execution, which runs code in a sandbox to perform calculations on the uploaded file and produce verified outputs the associate can check."
    },
    "answer": "D",
    "explanation": "Correct: D. Use Code Execution, which runs code in a sandbox to perform calculations on the uploaded file and produce verified outputs the associate can check."
  },
  {
    "id": 17,
    "question": "A Claude associate is evaluating whether to enable a Skill that was provided by an unfamiliar third party. Which two checks best support a sound trust decision? (Select two.)",
    "options": {
      "A": "Verify the source of the Skill against the organization's approved-Skill list before enabling it within claude.ai or any Project the team uses for its work.",
      "B": "Review the permissions and capabilities the Skill requests and confirm that the requested access is appropriate for the task the Skill is intended to perform.",
      "C": "Treat the Skill's appearance in a public listing as sufficient validation, without confirming the source, the requested permissions, or alignment with the organization's approved-Skill list.",
      "D": "Enable the Skill immediately on the basis of strong external reviews, even though the source has not been validated against the organization's approved-Skill list and the permissions remain unverified.",
      "E": "Skip permission review on the assumption that the Skill cannot exceed the boundaries of the workflow, even though Skills can request access that the task does not require."
    },
    "answer": ["A", "B"],
    "explanation": "Correct choices: A, B. Verify the source of the Skill against the organization's approved-Skill list before enabling it within claude.ai or any Project the team uses for its work. Review the permissions and capabilities the Skill requests and confirm that the requested access is appropriate for the task the Skill is intended to perform."
  },
  {
    "id": 18,
    "question": "A sales manager is iterating on a Claude-generated solution prototype after a stakeholder review identified two specific concerns. The rest of the prototype was accepted as written. Which iteration approach is most likely to produce a strong next version?",
    "options": {
      "A": "Address the two specific concerns and add a third improvement the associate identified, since combining stakeholder feedback with self-identified improvements is more efficient.",
      "B": "Rewrite the prototype from scratch incorporating the two specific concerns, since starting fresh integrates the feedback more cleanly than targeted edits.",
      "C": "Address the two specific concerns and also revise unrelated sections to maintain consistent voice across the prototype after the edits.",
      "D": "Address the two specific concerns directly, leave unrelated parts unchanged, and document the changes for the next review."
    },
    "answer": "D",
    "explanation": "Correct: D. Address the two specific concerns directly, leave unrelated parts unchanged, and document the changes for the next review."
  },
  {
    "id": 19,
    "question": "You are a project lead reviewing a teammate's habit of using the same prompt template for every task regardless of type. Which feedback is most warranted?",
    "options": {
      "A": "The prompting strategy should be adapted to each task type because one template does not produce equally strong outputs across all tasks.",
      "B": "The prompting strategy should not change between tasks because adapting it wastes time and adds no value.",
      "C": "The habit is ideal because a single template guarantees consistent quality across all task types.",
      "D": "Task type has no effect on the appropriate prompting strategy."
    },
    "answer": "A",
    "explanation": "Correct: A. The prompting strategy should be adapted to each task type because one template does not produce equally strong outputs across all tasks."
  },
  {
    "id": 20,
    "question": "You are a marketing manager deciding what to include in custom instructions for a writing-focused Project. Which two items belong in the custom instructions? (Select two.)",
    "options": {
      "A": "the prompt author's preferred response length for internal messages unrelated to external deliverables",
      "B": "the standard structure and length expectations for typical deliverables",
      "C": "the brand voice and tonal expectations the writing must follow",
      "D": "the preferred writing style of the marketing manager who will review all final deliverables",
      "E": "a representative sample of past writing that reflects the team's preferred style and structure"
    },
    "answer": ["B", "C"],
    "explanation": "Correct choices: B, C. the standard structure and the length expectations for typical deliverables; the brand voice and the tonal expectations the writing must follow."
  },
  {
    "id": 21,
    "question": "You are a knowledge worker deciding whether to escalate a Claude-generated output. Which is the correct order of decision steps? (1) Identify the audience and the impact of the output if it is wrong. (2) Document the decision and the rationale for traceability. (3) Compare the output's risk profile to the organization's escalation criteria. (4) Decide whether to use, iterate further, or escalate. (5) Assess the output's accuracy, completeness, and any unverified claims.",
    "options": {
      "A": "1,3,5,4,2",
      "B": "5,1,3,4,2",
      "C": "3,1,5,4,2",
      "D": "1,5,3,4,2"
    },
    "answer": "B",
    "explanation": "Correct: B. 5, 1, 3, 4, 2."
  },
  {
    "id": 22,
    "question": "You are a knowledge worker transitioning from a long, drifting conversation into a fresh focused session. Which is the correct order of transition steps? (1) Begin a new chat and paste the summary as its starting context. (2) Summarize the goals, key decisions, and open questions from the long conversation. (3) Identify which references should persist beyond the current chat. (4) Move persistent references into a Project's knowledge base or attach them as needed. (5) Confirm the new chat is on-task before continuing the work.",
    "options": {
      "A": "3,2,4,1,5",
      "B": "2,3,4,1,5",
      "C": "1,2,3,4,5",
      "D": "3,4,1,2,5"
    },
    "answer": "A",
    "explanation": "Correct: A. 3, 2, 4, 1, 5."
  },
  {
    "id": 23,
    "question": "Before uploading a customer file for a Code Execution analysis, a customer-success associate is reviewing the planned task. Which two practices best align with sound data handling? (Select two.)",
    "options": {
      "A": "Skip the upload review entirely on the basis of urgency, even though the file might contain regulated fields that organizational policy requires the user to redact before any code execution.",
      "B": "Confirm that the planned Code Execution task aligns with the organization's data classification policy and escalate to the appropriate contact if the data sensitivity exceeds approved use.",
      "C": "Upload the full unredacted customer file without review, on the assumption that a sandboxed execution environment removes the need to apply the organization's data classification policy.",
      "D": "Bypass the data classification policy because the task is internal, treating sandboxed processing as an exemption from the review the policy requires before sensitive data is uploaded.",
      "E": "Review the file for sensitive, confidential, or regulated fields before upload, and remove or redact any fields that are not required for the planned Code Execution analysis."
    },
    "answer": ["B", "E"],
    "explanation": "Correct choices: B, E. Confirm that the planned Code Execution task aligns with the organization's data classification policy and escalate to the appropriate contact if the data sensitivity exceeds approved use. Review the file for sensitive, confidential, or regulated fields before upload, and remove or redact any fields that are not required for the planned Code Execution analysis."
  },
  {
    "id": 25,
    "question": "You are configuring a new Claude Project for a specific recurring workload. Which Project configuration step should be performed first?",
    "options": {
      "A": "Define the purpose of the Project and the recurring tasks it must support.",
      "B": "Test the configured Project on a representative request from the workload.",
      "C": "Add reference materials and instructions that the Project will rely on.",
      "D": "Invite collaborators to the Project and confirm the appropriate access levels."
    },
    "answer": "A",
    "explanation": "Correct: A. Define the purpose of the Project and the recurring tasks it must support."
  },
  {
    "id": 26,
    "question": "A Claude associate is reviewing a Claude-drafted set of customer-segment descriptions for an internal marketing brief. One description applies a generalization about a demographic group's purchasing behavior that does not hold for individual customers in the segment. Which response is most appropriate?",
    "options": {
      "A": "Keep the description as written for the internal brief, since internal use does not carry the same risk as external publication of demographic generalizations.",
      "B": "Revise the description to focus on observed behaviors rather than generalizations about people, and validate the revision against actual customer data.",
      "C": "Remove the entire customer-segment description from the brief, since any segmentation that involves demographic characteristics is likely to introduce similar issues.",
      "D": "Add a disclaimer to the description, noting that the generalization may not apply to all individuals in the segment, and keep the underlying description unchanged."
    },
    "answer": "B",
    "explanation": "Correct: B. Revise the description to focus on observed behaviors rather than generalizations about people, and validate the revision against actual customer data."
  },
  {
    "id": 27,
    "question": "You are a bank manager presented with a request to use Claude as the sole decision-maker on customer credit-line approvals. Which response is most appropriate?",
    "options": {
      "A": "Accept the sole-decision-maker design because Claude can process applications faster than a human review team.",
      "B": "Implement the design on a pilot basis and notify compliance only if issues arise during production use.",
      "C": "Decline the sole-decision-maker design and propose Claude assisting analysts who retain decision authority.",
      "D": "Expand the design so Claude both evaluates applications and issues final approval notices to customers directly."
    },
    "answer": "C",
    "explanation": "Correct: C. Decline the sole-decision-maker design and propose Claude assisting analysts who retain decision authority."
  },
  {
    "id": 28,
    "question": "A manager is deciding what changes to make while conducting a memory maintenance review for a long-running workflow. Which two actions best support memory quality over time? (Select two.)",
    "options": {
      "A": "Delete all memories as the maintenance action to ensure a clean slate, then allow Claude to rebuild context organically through subsequent workflow runs.",
      "B": "Export the current memories as a backup before making changes, so prior context can be restored if a maintenance edit unintentionally removes information the workflow still depends on.",
      "C": "Leave all memories untouched on the basis that the workflow has been running consistently and no output quality issues have been reported.",
      "D": "Disable Memory entirely to eliminate the risk of stale entries surfacing in future workflow runs.",
      "E": "Identify and edit or delete entries that are stale, inaccurate, or no longer relevant, and add context Claude has not automatically captured but the workflow continues to need."
    },
    "answer": ["B", "E"],
    "explanation": "Correct choices: B, E. Export the current memories as a backup before making changes, so prior context can be restored if a maintenance edit unintentionally removes information the workflow still depends on. Identify and edit or delete entries that are stale, inaccurate, or no longer relevant, and add context Claude has not automatically captured but the workflow continues to need."
  },
  {
    "id": 29,
    "question": "A knowledge worker is applying the AI Fluency Framework Description competency while revising an underperforming prompt. Which revision best reflects Description principles?",
    "options": {
      "A": "Remove the existing context from the prompt and submit only the bare task statement, eliminating the audience, format, and constraint information that Description principles call for in a clear specification.",
      "B": "Specify the task scope, the required output format, the audience, and the relevant constraints with sufficient clarity that the prompt produces a useful, reliable output on the next run.",
      "C": "Replace the specific instructions with generic phrasing that broadens the task scope, undoing the specification work that Description principles require for a reliable, useful output on the next run.",
      "D": "Add length to the prompt by inserting filler text that does not specify task scope, output format, audience, or constraints, leaving the original specification gaps in the underperforming prompt unaddressed."
    },
    "answer": "B",
    "explanation": "Correct: B. Specify the task scope, the required output format, the audience, and the relevant constraints with sufficient clarity that the prompt produces a useful, reliable output on the next run."
  },
  {
    "id": 30,
    "question": "You are an analyst working on a one-off complex problem that genuinely requires multi-step reasoning over an extended chain of thought. Which model is best suited to this work?",
    "options": {
      "A": "Haiku, because lightweight models are always preferred regardless of complexity.",
      "B": "Any model, because reasoning depth does not vary across the lineup.",
      "C": "Opus, because it is positioned as the most capable for advanced reasoning on complex specialized tasks.",
      "D": "A non-Anthropic model, because the Claude lineup has no option for complex reasoning."
    },
    "answer": "C",
    "explanation": "Correct: C. Opus, because it is positioned as the most capable for advanced reasoning on complex specialized tasks."
  },
  {
    "id": 31,
    "question": "You are decomposing a \"build a customer journey map\" request. Which is the correct order of decomposed steps? (1) Identify the touchpoints the customer encounters during each stage. (2) Define the persona and the journey scope to be mapped. (3) Capture pain points and opportunities at each touchpoint. (4) Synthesize the findings into the final journey-map artifact. (5) Identify the major stages the persona moves through.",
    "options": {
      "A": "2,5,1,3,4",
      "B": "5,2,1,3,4",
      "C": "1,2,5,3,4",
      "D": "2,1,5,3,4"
    },
    "answer": "A",
    "explanation": "Correct: A. 2, 5, 1, 3, 4."
  },
  {
    "id": 32,
    "question": "You are a marketing manager using Claude to ideate concepts for a campaign and must complete the framing steps before generating concepts. Which two framing steps must be completed BEFORE asking Claude to generate concepts? (Select two.)",
    "options": {
      "A": "Define the goal of the campaign and the success metrics for the campaign.",
      "B": "Select a finalist concept and prepare it for stakeholder approval.",
      "C": "Review the Claude-generated concepts and select the two strongest for further development.",
      "D": "Define the brand voice and the audience the concepts will speak to.",
      "E": "Schedule the campaign launch and the rollout dates with the agency."
    },
    "answer": ["A", "D"],
    "explanation": "Correct choices: A, D. Define the goal of the campaign and the success metrics for the campaign. Define the brand voice and the audience the concepts will speak to."
  },
  {
    "id": 33,
    "question": "The first output from Claude is partially useful but has tone and detail issues. Which two refinement actions are most likely to produce a meaningfully better output? (Select two.)",
    "options": {
      "A": "Add a specific tone descriptor and a concrete audience to the prompt.",
      "B": "Provide an example of an output that meets the desired standard.",
      "C": "Resubmit the same prompt several times and select the best response.",
      "D": "Append the phrase \"please do better\" to the end of the original prompt.",
      "E": "Increase the temperature setting and resubmit the unchanged prompt."
    },
    "answer": ["A", "B"],
    "explanation": "Correct choices: A, B. Add a specific tone descriptor and a concrete audience to the prompt. Provide an example of an output that meets the desired standard."
  },
  {
    "id": 34,
    "question": "You are a product designer using Claude in a solution design exercise. Which solution-design step should be performed first when using Claude?",
    "options": {
      "A": "Generate candidate solution concepts using Claude across diverse styles.",
      "B": "Compare the candidate concepts against the constraints and select a finalist.",
      "C": "Articulate the problem the solution must address and the constraints in play.",
      "D": "Produce detailed mock-ups of the chosen solution for stakeholder review."
    },
    "answer": "C",
    "explanation": "Correct: C. Articulate the problem the solution must address and the constraints in play."
  },
  {
    "id": 35,
    "question": "As part of a workflow redesign, a process analyst is applying the AI Fluency Framework Delegation competency. Which two criteria most directly inform Delegation decisions? (Select two.)",
    "options": {
      "A": "The length of time the workflow has existed in its current form, since well-established processes have been sufficiently validated for AI delegation.",
      "B": "The need for human creativity, empathy, or judgment in the step, which indicates whether the task is appropriate for AI delegation or requires the human capabilities Claude cannot provide.",
      "C": "The visual complexity of the workflow diagram, since steps with more connections and dependencies are more likely to require human oversight.",
      "D": "The seniority of the team member who currently performs the step, since more senior roles typically involve higher-stakes tasks that warrant human retention.",
      "E": "The reversibility of the task and the consequence of an error, which together indicate whether the step is safe to delegate to Claude or should be retained for human decision-making."
    },
    "answer": ["B", "E"],
    "explanation": "Correct choices: B, E. The need for human creativity, empathy, or judgment in the step, which indicates whether the task is appropriate for AI delegation or requires the human capabilities Claude cannot provide. The reversibility of the task and the consequence of an error, which together indicate whether the step is safe to delegate to Claude or should be retained for human decision-making."
  },
  {
    "id": 36,
    "question": "A Claude associate is identifying the bottleneck in a content workflow that takes too long to publish. The workflow has five steps: research, drafting, internal review, legal review, and publication. There is cycle-time data for each step from the past month. Which signal most directly identifies the bottleneck?",
    "options": {
      "A": "the step with the longest queue or the largest backlog of items waiting to enter it",
      "B": "the step where individual contributors report the highest workload based on their weekly status updates",
      "C": "the step with the highest average cycle time per item across the past month's runs",
      "D": "the step most recently added to the workflow, based on the assumption that process changes introduce the most friction"
    },
    "answer": "A",
    "explanation": "Correct: A. the step with the longest queue or the largest backlog of items waiting to enter it"
  },
  {
    "id": 37,
    "question": "A senior manager is reviewing a colleague's habit of never updating their team's Project configurations because \"if it works once, it works forever.\" Which feedback is most warranted?",
    "options": {
      "A": "Configurations should be updated only when output quality visibly degrades, since proactive updates risk introducing regressions in working configurations.",
      "B": "Configurations should be left alone if the team is satisfied with current outputs, and any required updates should be handled at the chat level rather than the Project level.",
      "C": "Configurations should be reviewed and updated periodically because policies, terminology, and source documents change over time, even when output quality has not visibly degraded.",
      "D": "Configurations should be updated on a fixed schedule regardless of whether the underlying policies and source documents have changed, since regular maintenance prevents drift."
    },
    "answer": "C",
    "explanation": "Correct: C. Configurations should be reviewed and updated periodically because policies, terminology, and source documents change over time, even when output quality has not visibly degraded."
  },
  {
    "id": 38,
    "question": "You are a research associate preparing inputs for a long task that references two lengthy regulatory documents, but only specific sections apply. Which approach best preserves context-window capacity?",
    "options": {
      "A": "Extract only the relevant sections from each document and include those, omitting unrelated chapters.",
      "B": "Paste the full text of both documents without trimming to maximize available material.",
      "C": "Split each document into one-character pieces and feed them one at a time.",
      "D": "Skip the documents entirely and rely on Claude to invent the missing context."
    },
    "answer": "A",
    "explanation": "Correct: A. Extract only the relevant sections from each document and include those, omitting unrelated chapters."
  },
  {
    "id": 39,
    "question": "You are a senior analyst using Claude to analyze requirements from several stakeholder sources. Which is the correct order of steps? (1) Group related requirements and flag conflicts or ambiguities for stakeholder review. (2) Validate the structured output against the original sources for accuracy and completeness. (3) Submit the consolidated inputs to Claude with a structured extraction prompt. (4) Gather and label the source materials so each requirement can be traced. (5) Document the final requirements set with source traceability and status.",
    "options": {
      "A": "1,4,3,2,5",
      "B": "3,4,1,2,5",
      "C": "4,1,3,2,5",
      "D": "4,3,1,2,5"
    },
    "answer": "C",
    "explanation": "Correct: C. 4, 1, 3, 2, 5."
  },
  {
    "id": 40,
    "question": "A strategy manager is reviewing a Claude-generated recommendation to consolidate the company's two regional warehouses into one. The recommendation cites three sources that estimate cost savings and one source confirming that consolidation is operationally feasible. Two of the source documents also contain estimates of one-time transition costs and a stakeholder concern about regional service levels, neither of which appears in the recommendation. Which concern is most warranted?",
    "options": {
      "A": "The recommendation is acceptable for an initial round, but the missing material should be added in a separate appendix rather than re-prompting the original output.",
      "B": "The recommendation should be rejected because it relies on only four sources, which is insufficient for a decision of this size.",
      "C": "The recommendation is sound because every source it cites supports the consolidation conclusion.",
      "D": "The recommendation reflects selective use of the source documents and should be re-prompted to address the transition costs and the service-level concern before it is used."
    },
    "answer": "D",
    "explanation": "Correct: D. The recommendation reflects selective use of the source documents and should be re-prompted to address the transition costs and the service-level concern before it is used."
  },
  {
    "id": 41,
    "question": "You are organizing connected data sources for a team and must complete the planning steps before authorizing any connection. Which two planning steps must be completed BEFORE authorizing a new Connector? (Select two.)",
    "options": {
      "A": "Confirm the Connector is on the approved-vendor list maintained by IT.",
      "B": "Train every team member on the new Connector through formal training sessions.",
      "C": "Decommission any unused legacy connectors that may still be authorized.",
      "D": "Confirm the data classification of the source and the team's permission to use it.",
      "E": "Migrate every existing report off the prior data source onto the new Connector."
    },
    "answer": ["A", "D"],
    "explanation": "Correct choices: A, D. Confirm the Connector is on the approved-vendor list maintained by IT. Confirm the data classification of the source and the team's permission to use it."
  },
  {
    "id": 43,
    "question": "A project manager is defining how Claude can support requirements analysis for an upcoming engagement. Their team will conduct stakeholder interviews and review existing process documentation as part of discovery. Which activity fits this domain?",
    "options": {
      "A": "Use Claude to generate a complete requirements list from the project name and a short description, since requirements for similar engagements are largely standard.",
      "B": "Use Claude to prioritize the requirements the team has already gathered, leaving the gathering itself to manual analyst work since prioritization is more time-consuming.",
      "C": "Use Claude to synthesize stakeholder inputs and existing process documentation into a structured list of requirements with traceability to each source.",
      "D": "Use Claude to conduct the stakeholder interviews directly, with the analyst reviewing the recordings afterward to confirm the requirements Claude extracted."
    },
    "answer": "C",
    "explanation": "Correct: C. Use Claude to synthesize stakeholder inputs and existing process documentation into a structured list of requirements with traceability to each source."
  },
  {
    "id": 44,
    "question": "A knowledge worker is explaining the purpose of an organizational AI governance framework to a colleague. Which description is most accurate?",
    "options": {
      "A": "A governance framework documents the AI policies the organization is legally required to adopt, focusing on regulatory compliance rather than day-to-day use.",
      "B": "A governance framework defines approved tools, allowed data, required reviews, and reporting paths so AI is used consistently and accountably.",
      "C": "A governance framework lists the AI tools the organization licenses and the cost of each, so users can pick the most cost-effective tool for each task.",
      "D": "A governance framework defines the training every employee must complete before using AI tools, with separate requirements for each tool the organization licenses."
    },
    "answer": "B",
    "explanation": "Correct: B. A governance framework defines approved tools, allowed data, required reviews, and reporting paths so AI is used consistently and accountably."
  },
  {
    "id": 45,
    "question": "You are a project manager reviewing stakeholder messages that teammates have drafted about Claude's role in a workflow. Which two messages are appropriate for stakeholder communication about Claude? (Select two.)",
    "options": {
      "A": "a claim that Claude will handle every task without any human involvement",
      "B": "a claim that the model never makes errors and requires no quality review",
      "C": "an honest description of where Claude assists and where humans retain decisions",
      "D": "a clear statement of the limits and known failure modes of the integration",
      "E": "a vague reassurance that \"the AI is taking care of it\" without further detail"
    },
    "answer": ["C", "D"],
    "explanation": "Correct choices: C, D. an honest description of where Claude assists and where humans retain decisions; a clear statement of the limits and known failure modes of the integration."
  },
  {
    "id": 46,
    "question": "You are an operations lead sorting proposed Claude use cases by whether they are acceptable for your team to pursue. Which two proposed use cases are acceptable for the team to pursue with Claude? (Select two.)",
    "options": {
      "A": "drafting a preliminary symptom summary to support a clinician's diagnostic review",
      "B": "drafting an internal training summary from approved internal documentation",
      "C": "synthesizing themes across approved customer feedback under aggregation rules",
      "D": "summarizing performance review notes across a team to support a manager's promotion decisions",
      "E": "drafting a legal summary that an attorney will review and edit before sharing with a client"
    },
    "answer": ["B", "E"],
    "explanation": "Correct choices: B, E. drafting an internal training summary from approved internal documentation; drafting a legal summary that an attorney will review and edit before sharing with a client."
  },
  {
    "id": 47,
    "question": "An account manager has used Claude to extract requirements from stakeholder notes. Three requirements appear to conflict: two stakeholders specified mutually exclusive workflow steps, and a third requirement assumes an outcome the first two would prevent. Which step is most appropriate?",
    "options": {
      "A": "Present all three conflicting requirements as alternative options in the requirements document, leaving the resolution to the project's decision-making process later.",
      "B": "Apply Claude to propose a compromise wording for each conflict and submit the compromise to stakeholders as the proposed resolution.",
      "C": "Flag the conflicts in the requirements document, document the source for each side, and route the conflicts back to the originating stakeholders for resolution.",
      "D": "Select the requirement that has the strongest business justification in the source notes, set the conflicting requirements aside, and proceed with the selected one."
    },
    "answer": "C",
    "explanation": "Correct: C. Flag the conflicts in the requirements document, document the source for each side, and route the conflicts back to the originating stakeholders for resolution."
  },
  {
    "id": 48,
    "question": "An HR business partner is building a long-running workspace where a team handbook, a leveling guide, and a policies-FAQ document will be referenced across many separate chats by several team members. Which Claude feature is designed for this use case?",
    "options": {
      "A": "Connect the team's Google Drive folder where the three documents live, so the connector surfaces them inside each chat at the moment the chat needs them.",
      "B": "Create a Project, which provides a persistent workspace with its own knowledge base and custom instructions shared across chats and members.",
      "C": "Generate an Artifact containing the three documents, which gives the team an editable surface for the reference content that persists across chats.",
      "D": "Attach all three documents to each chat as needed, since per-chat attachments give the chat direct access to the documents without additional setup."
    },
    "answer": "B",
    "explanation": "Correct: B. Create a Project, which provides a persistent workspace with its own knowledge base and custom instructions shared across chats and members."
  },
  {
    "id": 49,
    "question": "You are reviewing a Claude-generated report whose tone is confident throughout. Which question best separates plausibility from verification?",
    "options": {
      "A": "Can each specific claim be traced to a credible source or to the supplied input material?",
      "B": "Does the response cover the topic comprehensively based on its length and section count?",
      "C": "Does the response open with a clear, well-framed statement of the main finding?",
      "D": "Does the response use varied sentence structure across sections?"
    },
    "answer": "A",
    "explanation": "Correct: A. Can each specific claim be traced to a credible source or to the supplied input material?"
  },
  {
    "id": 51,
    "question": "An operations assistant is redesigning a recurring data processing workflow step to use Code Execution. Which two design choices best support reliable integration? (Select two.)",
    "options": {
      "A": "Standardize the input file format the step expects, so each run of the Code Execution step receives consistent input and produces comparable, verifiable output across recurring weekly cycles.",
      "B": "Vary the input file format from run to run to accommodate the different source systems that supply the data each week.",
      "C": "Embed the Code Execution step inside the workflow without documenting the expected output format or the fields it produces.",
      "D": "Eliminate the human review step that follows Code Execution, since the sandboxed environment already verifies that the code ran without errors.",
      "E": "Define a brief output verification step in which the human reviewer confirms the computed result against an expected range or sanity check before the output advances to downstream consumers."
    },
    "answer": ["A", "E"],
    "explanation": "Correct choices: A, E. Standardize the input file format the step expects, so each run of the Code Execution step receives consistent input and produces comparable, verifiable output across recurring weekly cycles. Define a brief output verification step in which the human reviewer confirms the computed result against an expected range or sanity check before the output advances to downstream consumers."
  },
  {
    "id": 52,
    "question": "You are a business analyst reviewing prompt drafts written by teammates. Which two elements belong in a well-structured prompt for a business task? (Select two.)",
    "options": {
      "A": "a clear statement of the task that the model must perform",
      "B": "relevant context such as the audience and the goal of the task",
      "C": "a friendly, conversational tone instruction to make responses feel more approachable",
      "D": "a comprehensive list of company products and services to provide the model with business context",
      "E": "a short personal anecdote to make the prompt feel more conversational"
    },
    "answer": ["A", "B"],
    "explanation": "Correct choices: A, B. a clear statement of the task that the model must perform; relevant context such as the audience and the goal of the task."
  },
  {
    "id": 54,
    "question": "You are a procurement associate decomposing a vendor-evaluation task. Which dependency ordering reflects sound sequencing?",
    "options": {
      "A": "Define evaluation criteria first, gather vendor data against those criteria, then score and rank.",
      "B": "Skip criteria and ask Claude to produce a vendor recommendation from no inputs.",
      "C": "Score vendors first and decide on the criteria afterward.",
      "D": "Rank vendors before any data is collected."
    },
    "answer": "A",
    "explanation": "Correct: A. Define evaluation criteria first, gather vendor data against those criteria, then score and rank."
  },
  {
    "id": 55,
    "question": "You are reviewing claims about prompt iteration that colleagues have made in a recent training. Which two claims about prompt iteration are accurate? (Select two.)",
    "options": {
      "A": "Iteration should stop only after every possible alternative phrasing has been tried.",
      "B": "Repeated resubmission of the same prompt is the most reliable way to improve output.",
      "C": "Iteration is most productive when each change targets a specific diagnosed weakness.",
      "D": "More iterations always produce a better output regardless of what was changed.",
      "E": "Output comparison against original criteria validates whether iteration helped."
    },
    "answer": ["C", "E"],
    "explanation": "Correct choices: C, E. Iteration is most productive when each change targets a specific diagnosed weakness. Output comparison against original criteria validates whether iteration helped."
  },
  {
    "id": 56,
    "question": "You are validating evaluation criteria proposed for a Claude-generated business brief. Which two criteria are valid for evaluating a Claude-generated brief? (Select two.)",
    "options": {
      "A": "factual accuracy of the claims made against the supplied source material",
      "B": "consistency of the writing style with the organization's established tone guidelines",
      "C": "alignment of the output with the requested format and length constraints",
      "D": "total word count of the output relative to industry benchmarks for business briefs",
      "E": "presence of an executive summary section as a structural completeness check"
    },
    "answer": ["A", "C"],
    "explanation": "Correct choices: A, C. factual accuracy of the claims made against the supplied source material; alignment of the output with the requested format and length constraints."
  },
  {
    "id": 57,
    "question": "Preparing a stakeholder communication about a proposed Claude use case, a senior manager is applying the AI Fluency Framework Description competency. Which framing best reflects Description principles for stakeholder communication?",
    "options": {
      "A": "Omit the human oversight that will remain in place from the communication, even though Description principles require setting expectations that reflect the actual capability boundaries of the use case.",
      "B": "Understate Claude's capabilities to lower stakeholder expectations, even though Description principles require accuracy in both directions rather than systematic minimization of what Claude can produce.",
      "C": "Describe what Claude can reliably produce for the use case, the known limitations, and the human oversight that will remain in place, calibrated to the audience's familiarity with AI.",
      "D": "Overstate Claude's capabilities to secure stakeholder support, even though Description principles require accurate framing of what Claude can and cannot reliably produce for the proposed use case."
    },
    "answer": "C",
    "explanation": "Correct: C. Describe what Claude can reliably produce for the use case, the known limitations, and the human oversight that will remain in place, calibrated to the audience's familiarity with AI."
  },
  {
    "id": 58,
    "question": "A knowledge worker is explaining the cost, speed, and quality trade-offs across Claude models to a colleague. Which generalization correctly describes the trade-off?",
    "options": {
      "A": "More capable models generally consume less of the rate limit because their reasoning is more efficient, even though they run more slowly than lighter models.",
      "B": "More capable models generally consume more of the rate limit and run more slowly, while lighter models are faster and consume less of the rate limit.",
      "C": "Lighter models consume more of the rate limit per request than more capable models, since lighter models require multiple passes to match heavier-model quality.",
      "D": "Speed and rate-limit consumption are independent of model capability; the difference between Haiku, Sonnet, and Opus is reasoning depth alone."
    },
    "answer": "B",
    "explanation": "Correct: B. More capable models generally consume more of the rate limit and run more slowly, while lighter models are faster and consume less of the rate limit."
  },
  {
    "id": 59,
    "question": "You are reviewing colleagues' responses to feedback received on Claude-drafted communications. Which two feedback responses are productive? (Select two.)",
    "options": {
      "A": "incorporating all feedback received, including contradictory suggestions, into the next draft simultaneously",
      "B": "deferring all feedback to a later revision cycle to avoid disrupting the current draft's consistency",
      "C": "asking clarifying questions when feedback is ambiguous before acting on it",
      "D": "mapping each piece of feedback to the specific change made in the next draft",
      "E": "declining to revise sections that were generated by Claude on the basis that the model's output should be trusted as written"
    },
    "answer": ["C", "D"],
    "explanation": "Correct choices: C, D. asking clarifying questions when feedback is ambiguous before acting on it; mapping each piece of feedback to the specific change made in the next draft."
  },
  {
    "id": 60,
    "question": "A learning specialist is configuring a Project for course-design work. Their organization has an internal instructional-design standard and a preferred output structure for lesson outlines. Which custom-instruction set best supports this use case?",
    "options": {
      "A": "Name Claude's role as a course designer, require alignment to the organization's instructional-design standards, and specify the preferred output structure for lesson outlines.",
      "B": "Name Claude's role as a course designer and require alignment to the organization's instructional-design standards; leave output structure to Claude based on the topic of each lesson.",
      "C": "Specify only the preferred output structure for lesson outlines, since the structure carries the standards implicitly and naming the role adds no value.",
      "D": "Name Claude's role as a course designer; let each chat's prompt specify the standards and output structure for that lesson, since lessons vary widely."
    },
    "answer": "A",
    "explanation": "Correct: A. Name Claude's role as a course designer, require alignment to the organization's instructional-design standards, and specify the preferred output structure for lesson outlines."
  }
]

const normalizeChoiceText = (value) =>
  String(value || '')
    .replace(/^[A-E][.)]\s*/i, '')
    .replace(/\s*\n\s*(?=[A-E][.)])/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const normalizeOptions = (rawOptions) => {
  if (Array.isArray(rawOptions)) {
    return rawOptions.map((option) => normalizeChoiceText(option))
  }

  if (rawOptions && typeof rawOptions === 'object') {
    return Object.entries(rawOptions)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([, option]) => normalizeChoiceText(option))
      .filter(Boolean)
  }

  return []
}

const normalizeAnswer = (rawAnswer, options) => {
  const answerMap = { A: options[0], B: options[1], C: options[2], D: options[3], E: options[4] }

  if (Array.isArray(rawAnswer)) {
    return rawAnswer.map((answer) => {
      const value = String(answer || '').trim()
      return /^[A-E]$/i.test(value) ? answerMap[value.toUpperCase()] : normalizeChoiceText(answer)
    })
  }

  const value = String(rawAnswer || '').trim()
  if (/^[A-E]$/i.test(value)) {
    return answerMap[value.toUpperCase()]
  }

  return normalizeChoiceText(rawAnswer)
}

export const claudeAssociateQuestions = rawClaudeAssociateSet2.map((question) => {
  const normalizedOptions = normalizeOptions(question.options)
  return {
    ...question,
    options: normalizedOptions,
    answer: normalizeAnswer(question.answer, normalizedOptions)
  }
})
