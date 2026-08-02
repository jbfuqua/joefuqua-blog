---
title: "The Cross-Check Problem"
date: 2026-08-02
category: "algorithm-and-blues"
issue: 64
slug: "algorithm-blues-64"
excerpt: "Multi-agent systems promise a built-in second opinion: one agent plans, another executes, a third checks. A new paper by Ruiwu Niu, Xincheng Shu, and Ying Zhao finds the catch. The connectivity that lets agent review improve the majority vote is the same connectivity that lets a false claim spread, and sometimes no network design satisfies both. Worse, five approvals can trace back to a single source, which turns AI review into a lineage and segregation-of-duties problem rather than a genuine independent control."
source: "website"
---

Multi-agent systems promise something close to a built-in second opinion. One agent develops a plan, another carries it out, and a third checks the work. Some designs ask several agents to vote. More checks should mean fewer mistakes.

Anyone who has worked in a large organization knows the catch. Adding reviewers doesn't always add independent judgment. Sometimes the first answer just collects signatures on its way through the process. Agent systems can do the same thing, only faster.

A recent paper by Ruiwu Niu, Xincheng Shu, and Ying Zhao examines that tradeoff. The authors look at the agent network first as a voting system and then as something closer to a biological process. Each connection gives an agent another answer to consider. The same connection gives a false claim another route through the system.

What caught my attention is that the model doesn't always find a workable middle. Under some conditions, the model finds no network design that satisfies both goals. The agents need enough connections to improve the majority decision, and that same level of connectivity allows a false claim to spread. Agent review can improve the final vote while widening the reach of a bad answer, which complicates its use as a business control.

### When the reviewers share the mistake

The authors tested this with six Grok 4.3 agents across 36 simple true-or-false tasks. They introduced an incorrect answer and varied how many other agents could receive it. In the most connected setup, roughly two and a half times as many neighboring agents repeated the error as in the sparsest one. The chance that any one agent would accept it stayed the same. More connections gave the bad answer more opportunities to be seen and repeated.

The tasks were artificial, and only twelve were followed through a full cascade. The spread also leveled off when every agent was connected to every other agent. A production system will add many variables to this setup, including the information agents pass to one another.

Even inside the model, the count of connections isn't the whole story. When the authors limit each agent to a fixed amount of communication divided among more recipients, adding connections stops increasing the initial spread in the same way. The lines on a diagram don't tell you enough about what will travel along them.

A line from a planner to a verifier might carry the original evidence, a summary, the planner's reasoning, or little more than its conclusion. The receiving agent may treat that message as background information or as something close to an authoritative answer. The diagram records the same connection in every case, even though each creates a different kind of review.

Anyone who has spent time around enterprise data may feel an old headache returning. This is lineage, except the thing moving through the system is a claim. Organizations already track where important data originated, how it changed, and which decisions used it. Agent systems need a similar record showing the evidence behind a claim, which agents changed or repeated it, and where it was used.

Corrections need that history too. Changing the final answer won't repair decisions already made from the error, remove it from agent memory, or identify other workflows that received it. The correction has to find the places the original claim traveled.

This is where the paper's uncomfortable result lands in practice. If reliability and containment can't always both be satisfied by adjusting the network, communication itself becomes part of the control design. Unverified claims may need limits on how far they can travel and what actions they can trigger. The system also needs enough history to trace a correction and determine how much independence sits behind an apparent consensus.

### Five votes, one source

Following a claim back to its source may reveal something else: the agents never had independent evidence in the first place. The reliability gains in the paper depend on each agent contributing evidence of roughly equal quality and reaching its answer independently. That's a generous assumption in an enterprise system.

Several agents may be copies of the same model, working from the same enterprise search index, knowledge base, and system context. Different prompts may produce some variation. A missing source remains missing, and a blind spot shared by the model can appear in every answer.

Once the agents start communicating, that dependence becomes harder to see. Three approvals may come from three independent reviews. They may also come from the second and third agents accepting the first agent's answer and carrying it forward. The workflow records three approvals either way.

From a controls perspective, this is a familiar segregation-of-duties problem. Different role names provide little separation when each agent uses the same information and inherits conclusions produced earlier in the process. Calling one a critic and another a verifier doesn't create independence by itself.

If you're counting the verifier as an independent business control, it needs a meaningful degree of separation from the answer it is reviewing. That could include reaching an initial conclusion from the original evidence before seeing the previous answer, using a different source or retrieval path, and preserving a record of what it received from other agents.

As agents take on work involving customers, money, access, compliance, and operations, the audit trail needs to show where their answers came from, what supported them, and how independent the reviews really were. Five green checks may tell you the workflow ran exactly as designed. They still don't tell you whether anyone looked at the answer with fresh eyes.

📄 Ruiwu Niu, Xincheng Shu, and Ying Zhao, "Reliability-Contagion Feasibility in LLM Multi-Agent Networks," July 2026.
https://arxiv.org/abs/2607.21912

*Algorithm & Blues publishes Sundays.*
