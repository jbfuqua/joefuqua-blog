---
title: "Human Review as the AI Bottleneck"
date: 2026-05-24
category: "algorithm-and-blues"
issue: 54
slug: "algorithm-blues-54"
excerpt: "Stronger AI models produce better work — until a human reviewer is added. A Yale randomized trial with 500+ professionals found the scaling law for quality disappears once review enters the workflow, with reviewers often editing strong-model output back toward average."
source: "website"
---

I've been increasingly skeptical of how casually we say "human in the loop."

Not because humans don't matter; they do, especially in regulated environments where accountability isn't optional. But the phrase often works like an architectural sedative. It makes the workflow feel safer without forcing the harder question: what is the human actually doing?

A recent Yale paper brings that question into focus.

Ali Merali ran a pre-registered randomized controlled trial with more than 500 consultants, data analysts, and managers. Participants completed professional tasks either without AI or with one of thirteen different LLMs, ranging from early ChatGPT-era models to newer systems. The tasks included revising financial reports, interpreting data, evaluating contracts, creating slides, and doing multi-step work across documents and tools.

The basic result isn't surprising. AI helped. Across the full sample, access to AI improved both speed and expert-assessed quality. The paper estimates that each year of model progress reduced task time by about 8%.

That matters, but it's not where the paper gets interesting.

Merali also compared what happened when models worked on their own versus what happened when people used them. Working independently, model quality scaled with compute. A tenfold increase in training compute was associated with about a half-point increase in grade on a seven-point scale. The strongest models averaged above 6 out of 7 on the non-agentic tasks, compared with about 3.5 for unassisted humans.

So far, fine. Better models produced better work.

The strange part is what happened when people were added back into the workflow. Whether participants used a smaller early model or a much stronger frontier model, the final human-submitted work landed around 4.35 out of 7. The paper says the scaling law for quality "completely disappears" once the human is in the loop.

That doesn't mean human review is useless. For weaker models, people improved imperfect drafts and pulled the work up. But for stronger models, review often moved the result in the other direction. The model produced better work, and the person edited it back toward average human quality.

I don't find that especially surprising.

In large organizations, review is rarely just review. It's also normalization. People make outputs look like the work they're used to seeing. They remove unfamiliar structure, soften direct judgments, add safer caveats, and translate new capability back into familiar artifacts.

Sometimes that improves the work. Sometimes it just makes better work easier to recognize.

That's why "human in the loop" is too simplistic. The human may be editing, approving, validating, supervising, handling exceptions, or taking accountability. Those are different jobs, and they call for different skills and different controls.

Enterprises tend to compress them into a review step because that's easy to structure, approve, and audit. Put a person at the end. Require approval. Capture the audit trail. Now the workflow feels controlled.

Sometimes that's exactly right. Human accountability isn't decoration, especially in regulated work. A control can reduce risk even if it doesn't improve the output, but we should be honest about the tradeoff. A review step can create accountability and still erase part of the model's advantage.

The paper makes a similar point with agentic work. AI produced much larger gains on analytical tasks than on tasks requiring multi-step tool use. On total earnings per minute, the gain was $1.58 for non-agentic tasks versus $0.34 for agentic tasks, and the agentic result wasn't statistically significant.

That doesn't make agents a dead end, but it does challenge the assumption that a better model automatically becomes a better workflow once it's wrapped in tools, permissions, orchestration, state, and approvals.

Capability has to survive the workflow.

That's where the business case can get slippery. A better model may produce a better answer, but the answer still has to survive the workflow around it: the review habits, approval paths, exception processes, risk checks, and local preferences that decide what actually reaches production.

The loss isn't always obvious. It shows up later as a smaller-than-expected improvement in cycle time, quality, cost, or capacity.

People still belong in these workflows. We just need to be clearer about the job we're giving them.

Sometimes that job is editing, and sometimes it's supervision or risk ownership. In agentic work, the real control point may sit much earlier, in tool access, permissions, state, and exception handling.

That's a different conversation from "do we have a human in the loop?"

Human review helps organizations get started. It keeps accountability visible and makes AI feel like an assistant rather than a replacement.

That still matters. But it doesn't mean the workflow is preserving the model's advantage. As systems improve, the constraint may move from model capability to review habits, tool design, approval paths, and organizational comfort.

At that point, the practical question changes. Not just whether the model is better, but whether the work is better after the model has passed through the organization.

*Algorithm & Blues publishes Sundays.*

📄 Ali Merali, *Scaling Laws for Economic Productivity: Experimental Evidence in LLM-Assisted Consulting, Data Analyst, and Management Tasks.* https://arxiv.org/abs/2512.21316
