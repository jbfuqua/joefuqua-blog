---
title: "More Agents or More Compute?"
date: 2026-05-03
category: "algorithm-and-blues"
issue: 51
slug: "algorithm-blues-51"
excerpt: "Multi-agent architectures often look like they outperform single agents, but a Stanford paper shows much of that advantage disappears once you hold the thinking-token budget constant. The gains may be compute, not coordination."
source: "website"
---

Multi-agent architectures have picked up an aura of inevitability. For difficult reasoning tasks, the general trend is to split the work across multiple agent roles, add a planner or critic, let the agents talk to each other, and assume the architecture is doing something meaningful.

Sometimes it is. But many comparisons give the multi-agent system more room to think, which makes the result hard to judge. The architecture may be doing useful work, or the system may just be spending more tokens to get to the answer.

A new Stanford paper from Dat Tran and Douwe Kiela gets at this directly. They compare single-agent systems with several multi-agent architectures on multi-hop reasoning tasks, using Qwen3, DeepSeek-R1-Distill-Llama, and Gemini 2.5. The interesting part is that they hold the thinking-token budget constant, so the multi-agent systems do not get extra room to think.

Once they control for that, the advantage mostly goes away. Single-agent systems match or beat the multi-agent setups on multi-hop reasoning. That's a bit awkward for the current agent narrative. Some of the gains that look like architecture may just be extra reasoning budget showing up in the score.

The paper uses the Data Processing Inequality to explain part of the result. I would be careful about making too much of that, but the practical point is pretty clear. Splitting the work across agents means every handoff has to summarize or filter part of the problem. Sometimes that structure helps. Sometimes it just drops information the model would have used.

The authors are not arguing that multi-agent systems do not work. Their point is narrower. Multi-agent setups become more competitive when a single agent starts to struggle with context, or when the multi-agent version is allowed to use more total compute.

That sounds about right to me. Decomposition, verification, role separation, and parallel exploration can all be good design choices. They just need to be justified as design choices, not treated as automatic reasoning upgrades.

The paper also gets into the messier measurement problem. API-based budget control can create artifacts, especially with Gemini 2.5, and standard benchmark setups can inflate multi-agent results when they fail to count all the tokens consumed. That means some recent comparisons may not be fully normalized for test-time compute.

Multi-agent stacks don't come for free. They add cost, coordination, state, prompts, routing logic, tool calls, and more places where the answer can go sideways. When something fails, the cause may be in the model, the role definition, the handoff, the shared context, the judge, the planner, the tool interface, or the orchestration layer around all of it.

Some of that complexity will be worth it. But in a well-governed environment, every added piece has to be tested, monitored, secured, and explained. If the main benefit is just more reasoning budget, a longer single-agent trace may be simpler, cheaper, and easier to defend.

That's less interesting than building an elaborate agent society, but architecture doesn't get extra credit for aesthetics.

The test for engineering teams is to run a single-agent baseline, then scale to multi-agent at the same compute budget. If the baseline matches, the orchestration probably is not worth moving into production. If the multi-agent system still wins, then it's worth understanding where the gains come from. Better decomposition? Better verification? Better search? Better context handling? Or is some unmeasured compute still hiding in the setup?

The bottom line: more sophisticated is not the same as more valuable. If the architecture adds cost, risk, and governance burden, it needs to earn its keep.

📄 Full paper: https://arxiv.org/abs/2604.02460

Algorithm & Blues publishes Sundays.
