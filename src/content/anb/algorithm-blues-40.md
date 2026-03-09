---
title: "Rethinking Agent Benchmarks"
date: 2026-02-15
category: "algorithm-and-blues"
issue: 40
slug: "algorithm-blues-40"
excerpt: "Most agent benchmarks grade the choreography, i.e., whether the model called the right API, in the right order, with the right parameters."
source: "linkedin"
---

Most agent benchmarks grade the choreography, i.e., whether the model called the right API, in the right order, with the right parameters.

Agent-Diff (link below) takes a different approach. It ran nine models through a few hundred enterprise tasks across Slack, Box, Linear, and Google Calendar, then evaluated the final state of the environment, ignoring the intermediate steps.

That paper appeared alongside several others over the past few days, all focused on agent evaluation.

One paper argued for a unified framework, noting that current benchmarks blur model capability with surrounding scaffolding such as system prompts, tool wiring, and environmental dynamics.

Another, LHAW, removed information from task descriptions to test how agents handle ambiguity across longer workflows. A few agents asked clarifying questions. Most guessed and continued.

The methodology is improving, but outcomes still depend the environment; alter the tool stack or permission model and the scores move with it.

Benchmarks are built around stable conditions like predictable APIs, durable permissions, and recoverable failures. When something goes wrong, it’s logged and retried without consequence. It can be very hard to infer real-world pertinence.

In production, constraints are dynamic and often adversarial… access permissions can change mid-execution, limits are hit without warning, and policy enforcement may interrupt a workflow in progress. Retries carry cost, increase risk, and kill productivity.

Benchmarks do reveal useful information about reasoning and orchestration, but they don’t show how the system behaves once it is wrapped in necessary controls.

Competitive advantage does not live in the model alone, it lives in the control plane, in whether guardrails exist as documentation or as deterministic constraints embedded directly in execution.

LHAW makes this point clear. When tasks are underspecified, most agents don’t halt, they improvise. In evaluation, that lowers a score; that production, that creates an incident.

The bottom line? A model can look exceptional in testing, but the full system including model, tools, permissions, enforcement, and observability determines whether it survives audit, scale, and whatever happens next week.

When reviewing pilots, ask how performance changes under real constraints. Ask how policy intervenes. Ask what happens when the agent hits a wall and no one is watching.

⸻
https://lnkd.in/es4tpQ_i
https://lnkd.in/e2__4X9s
https://lnkd.in/eCK-eYiB

⸻

hashtag
#EnterpriseAI 
hashtag
#AIagents 
hashtag
#AIGovernance 
hashtag
#AIevaluation 
hashtag
#PolicyAsCode
…more
