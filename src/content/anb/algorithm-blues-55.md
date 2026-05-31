---
title: "Permission Isn't Context"
date: 2026-05-31
category: "algorithm-and-blues"
issue: 55
slug: "algorithm-blues-55"
excerpt: "Access control answers whether an agent can see data, but not how much of the relevant picture is missing. A new benchmark on partial-evidence reasoning finds agents produce overconfident answers when their authorized view is incomplete — unless evidence boundaries are carried through the workflow."
source: "website"
---

Enterprise AI governance tends to spend a lot of time on access, and for good reason. Access is concrete. You can assign it, approve it, deny it, log it, audit it, and occasionally explain it to a committee that's already decided the answer is probably "no."

That counts for even more in regulated environments, where "let the model see everything" sounds less like a strategy than a future incident report. Access control handles a real problem; we're starting to find the places where it doesn't reach far enough.

A recent paper, Partial Evidence Bench: Benchmarking Authorization-Limited Evidence in Agentic Systems, puts some structure around this gap. It looks at agents working inside properly enforced permission boundaries, where the user can only retrieve part of the relevant evidence. Nothing necessarily goes wrong in the usual security sense. The agent doesn't leak restricted documents or bypass access controls. It simply answers from the slice of the world it's allowed to see.

The trouble starts when the missing evidence would have changed the answer. If the system doesn't preserve the fact that an evidence boundary exists, the answer can seem complete when it's not.

The paper makes this measurable across due diligence, compliance audit, and incident response. The baseline results are ugly. When agents answer from authorized records and ignore the evidence they couldn't inspect, they produce unsafe, overconfident answers across all three domains.

The more important finding is that this can be improved without making the agent useless. When instructed to fail safely and report the evidence gap, the agent stops overstating what it knows while still answering where the available evidence supports an answer.

Those examples are a narrow benchmark, but they point at a much wider enterprise pattern. Third-party risk, audit prep, control testing, legal review, model documentation, and plenty of adjacent work all depend on the same basic question: what evidence was actually considered? If an agent can only see part of the record, the answer needs to carry that limitation with it.

A vendor-risk agent, for example, might report that it found no unresolved issues. That may be true within the records it could access, but it means something very different if restricted audit files, legal matter records, or privileged incident notes were never available to it. In that case, the key part of the answer is not only what the agent found. It is what the agent was never in a position to check.

That's the point behind "permission isn't context." Permission tells the agent what it can see. It doesn't tell the agent how much of the relevant picture is missing, or whether the missing pieces are important enough to change the answer.

A human analyst usually carries some awareness of those limits. They know when they haven't reviewed a file, when another team owns part of the record, or when a system is out of reach. They may still make a bad call, but they generally know their view is bounded. An agent doesn't have that by default. Unless the workflow carries evidence boundaries forward, it can treat a partial view as a complete one.

That's where this becomes an architecture problem. As agents become more connected, those boundaries have to survive more than the first retrieval step. They have to survive summarization, delegation, tool use, and handoff.

A related paper on authorization propagation makes the same point from the multi-agent side. Permission checks don't end once an agent gets through the first gate. In a chained workflow, one agent may retrieve data, another may summarize it, and another may turn it into a recommendation. The authorization context has to survive that movement.

The same is true for evidence context. Separate pieces of information may each be authorized on their own, but once combined they can support a conclusion no single step was really cleared to produce. Evidence boundaries can fail the same way. If the limitation doesn't travel with the work, the final answer can look cleaner than the process that produced it.

The answer is not to give every agent universal access. That's the easy answer, and usually the wrong one. The better answer is to treat evidence boundaries as part of the control plane, not incidental metadata from the retrieval step.

Agents need to know which sources were searched, which weren't, which were inaccessible, and which were outside scope. They need to distinguish between "not found," "not checked," and "not authorized." They need to report gaps in normal language, and downstream agents need to carry those limitations forward instead of sanding them off.

This also changes what human review means. A reviewer can't meaningfully approve an answer if the system hides the limits of the evidence behind it. Review without evidence posture is mostly vibes with a sign-off button.

Access control is still necessary. Identity is still necessary. Logging is still necessary. None of that goes away. Agent governance just has to ask a harder question than "was this agent allowed to see this data?"

It has to ask what kind of answer is safe to produce from this view of the world.

The agent may have seen everything it was allowed to see. That doesn't mean it saw enough.

📄 Partial Evidence Bench: Benchmarking Authorization-Limited Evidence in Agentic Systems: https://arxiv.org/abs/2605.05379
📄 Authorization Propagation in Multi-Agent AI Systems: Identity Governance as Infrastructure: https://arxiv.org/abs/2605.05440

*Algorithm & Blues publishes Sundays.*
