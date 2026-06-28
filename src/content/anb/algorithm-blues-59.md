---
title: "Beyond the Demo"
date: 2026-06-28
category: "algorithm-and-blues"
issue: 59
slug: "algorithm-blues-59"
excerpt: "A working agent demo proves task completion, not value — and the two come apart once the agent is inside a real workflow. Drawing on CMU's TheAgentCompany, the METR developer study, and a new valuation framework, a look at why supervision, rework, and cleanup belong in the business case."
source: "website"
---

The demo works. The agent finds the record, calls the tool, fills in the answer, and moves the task along. On the screen, it looks convincing.

The appeal is obvious. The agent did something measurable, and the result looked reasonable. What didn't show up was everything around it: how much supervision it needed, what cleanup it left behind, and whether any of its mistakes would surface only after the work had moved on.

That's where the conversation usually goes sideways. Task completion is used as a measure for value, even though it only proves that the agent got through the script.

A completed task is evidence of success, to be clear. It just isn't a metric for value by itself. Agent work happens inside a workflow, surrounded by handoffs, exceptions, downstream decisions, compliance requirements, customer impact, and people who have to live with whatever the system produces. The agent can finish its step and still leave the workflow worse than it found it.

That's where the business case is weakest. The demo worked, the score improved, the pilot held together. What's harder to see is what the workflow had to absorb along the way.

CMU's TheAgentCompany makes the problem easier to see. The benchmark puts AI agents inside a simulated software company with internal tools, coworkers, messages, and multi-step work. The agent has to find information, use systems, ask for help, and keep enough context to move the task forward. It's still a benchmark, but it's closer to office work than asking a model to answer a prompt by itself.

The best agents completed roughly a quarter of the tasks on their own. That number will get quoted because it's simple. The more important part is what happened when the agents failed.

One got stuck because a pop-up blocked the screen. Another couldn't find the right coworker, so it renamed someone else to match and kept going as if the problem had been solved.

That's funny until you put it inside an actual workflow, where another system, team, or customer may depend on the output. The issue isn't only that the agent failed. It's that the failure didn't look like a clean stop. It looked like progress.

That is where task completion gets slippery. An agent can get part of the way through the work, make a strange assumption, work around missing context, and still produce something that appears finished enough to move forward. By the time the mistake becomes visible, the task may already have been counted as complete.

A benchmark can tell you what the agent did under test conditions. It can't tell you how much work the organization inherits when the failure looks like progress.

The METR developer study shows the same problem from the other side. Sixteen experienced developers worked on real issues in mature codebases, with and without AI. Before the study, they expected AI to make them about 24 percent faster.

With AI, they were 19 percent slower.

The weirder result came afterward. Even after being slower, the developers still reported feeling roughly 20 percent faster.

That finding needs some restraint. The study was small. The developers knew the codebases. The tools were from early 2025. I wouldn't use it to claim AI makes developers slower in general, that would be too much to hang on one study.

I would, however, use it as justification to be more skeptical of business cases built on reported vs. measured productivity.

The issue is that AI can change the feel of the work before it proves anything about the work. Drafting gets easier, searching gets less painful, and the whole thing may feel faster while the friction moves into review, correction, or cleanup. User feedback is worth hearing, but it's weak as measurement.

That leaves a gap between the evidence and the decision. The benchmark may overstate what capability is worth, and user feedback may overstate what changed in the work. What's still missing is the workflow itself: what it absorbed, what it improved, and what it pushed somewhere else.

That is where Agentomics gets closer to the business problem. It doesn't value the agent as if it were working alone. It looks at the workflow around it: what the agent costs to run, how often it fails, what failure costs when it happens, how much supervision and rework it creates, and what happens to the next person or system in the chain.

That's where the investment starts to look different. A fast agent may not be worth much if it breaks the handoff or leaves a person cleaning up the output. A slower agent may be worth more if the rest of the process stays intact. The task result matters, but the workflow decides whether it meant anything.

Oversight has the same problem. Once the agent is inside the workflow, review can't just be a checkbox at the end. Some outputs need approval before they move. Some need someone watching for exceptions. Some can run with lighter controls. The difference is what can go wrong, who is affected, and whether the action can be unwound.

Put people everywhere and automation turns into theater. Put them nowhere and the risk moves out of sight. The hard part is knowing which mistakes are too expensive to let the system make on its own.

The demo usually stops before that part becomes visible. The agent completed the task, but the business case depends on what the workflow had to absorb to make that possible.

That means counting supervision, rework, failure, cleanup, risk, cost, and trust alongside the task result. If the workflow is not better after those are included, capability will not translate into value.

*Algorithm & Blues publishes Sundays.*

References:

📄 TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks
https://arxiv.org/abs/2412.14161

📄 Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity
https://arxiv.org/abs/2507.09089

📄 Agentomics: Economic Foundations for the Valuation, Attribution, and Pricing of AI Agents in Human-AI Workflows
https://arxiv.org/abs/2606.14769

📄 Governed AI-Assisted Engineering: Graduated Human Oversight for Agentic Code Generation in Regulated Domains
https://arxiv.org/abs/2606.22484
