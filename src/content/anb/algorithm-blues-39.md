---
title: "Prompt Injection Isn’t a Prompt Problem"
date: 2026-02-08
category: "algorithm-and-blues"
issue: 39
slug: "algorithm-blues-39"
excerpt: "Historically, we’ve treated prompt injection as a content problem… someone slips an instruction into a document or a ticket, but you clean the input, add a filter, maybe a classifier, and call it done…"
source: "linkedin"
---

Historically, we’ve treated prompt injection as a content problem… someone slips an instruction into a document or a ticket, but you clean the input, add a filter, maybe a classifier, and call it done.

That approach only works if the prompt is where control stops, as discussed in a recent Arxiv paper (link below). As soon as an AI can read files, call APIs, and chain actions together, the prompt stops being the boundary. The workflow becomes the surface.

In financial services, this shows up directly. We are no longer just wiring up chatbots. Models now sit alongside transaction systems, document pipelines, and identity services, supporting real workflows. A customer uploads a PDF. A contract gets summarized. A Jira ticket triggers downstream automation. None of those inputs look like prompts, but each one can carry instructions.

At that point, the distinction between data and influence starts to blur. Documents, filenames, and comments can all steer behavior, and the paper shows that adaptive attacks exploit that reality reliably in practice.

So filtering harder doesn’t solve it, and never really did; but it was a reasonable bet when the blast radius was a chatbot saying something embarrassing. When it’s an agent initiating a workflow with real-world consequences, the calculus changes.

The important questions come at this point. After something slips through, what decisions is the agent still allowed to make? Can it call tools without approval? Are identities scoped tightly enough to prevent lateral movement? Is anything being logged while it is happening, or only reconstructed after the damage is done?

So, the problem is architectural. Adding another input-layer defense does not change much. What changes outcomes is designing systems that expect failure and limit what can happen when it occurs.

Prompt injection follows a familiar pattern. We trust what enters the system and only later confront the cost of that trust. The question now is whether we design with that reality in mind or wait for the lesson to surface again in more expensive ways.

https://lnkd.in/e4Wj9qQe

hashtag
#EnterpriseAI 
hashtag
#AgentArchitecture 
hashtag
#CyberSecurity 
hashtag
#AIGovernance
…more
