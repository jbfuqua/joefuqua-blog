---
title: "What an Agent Should Forget"
date: 2026-08-16
category: "algorithm-and-blues"
issue: 66
slug: "algorithm-blues-66"
excerpt: "Hotel expense reports are a natural job for an AI agent, and Microsoft researchers gave one to a GPT-5 agent inside Dynamics 365. It got better when they took most of its history away: completion rose from 71 to 91.6 percent once older work was replaced with a short summary, while tokens and runtime fell about 60 percent. The failure it kept hitting was stale state, acting on an outdated version of the form when several were in context at once. A larger context window gives an agent more room, but it doesn’t decide what to forget."
source: "website"
---

Hotel expense reports are a nuisance. Every charge, from the room and taxes to breakfast and parking, has to be broken out and categorized, and the amounts have to add back to the total. It’s easy to see why a company would want an AI agent to handle them.

Microsoft researchers recently gave that job to a GPT-5 agent working inside Dynamics 365. It made mistakes, which wasn’t particularly surprising. Then they took most of its work history away, and it got considerably better.

With every prior tool call and response still in context, the agent completed 71 percent of the expense reports. Keeping only the five most recent tool interactions raised completion to 79 percent. When the researchers added a short summary of the older work, completion reached 91.6 percent. The agent also used 62.7 percent fewer tokens and finished the benchmark about 60 percent faster.

Giving the model less context improved the work, lowered the cost, and cut the time. There’s a fairly direct business argument in those numbers, but the more interesting part is why it happened.

The study covered 50 hotel receipts, each repeated five times. Completing one meant creating every line item, assigning the correct expense category and amount, and leaving exactly $0 unallocated. The agent usually needed 15 to 30 tool interactions to get there. A second model stood in for the employee, answering questions and prompting the agent to verify the work after each pass. It was closer to a supervisor than a passive user, and it was held constant across the three main test conditions.

By the end of a task, the agent could be carrying between 50,000 and more than 150,000 tokens. Much of that came from the software itself.

## When history becomes clutter

Enterprise systems return a lot of information. A tool call that looks up a form may send back field values, labels, navigation details, metadata, and a snapshot of the screen. In this experiment, a single response could run from 500 to 3,000 tokens.

Early in the task, that’s manageable. Fifteen or twenty calls later, the context contains several versions of the same form. The current balance is in there somewhere, surrounded by older balances that were correct a few minutes ago. The agent has to work out which version still applies every time it acts.

One of the failure traces shows how easily that goes wrong. The agent added a $180 room charge, then later relied on an older snapshot that still showed the charge as missing. It added the same line again and pushed the report past zero. Nothing had been forgotten. The problem was that too many versions of the truth were available at once.

That pattern showed up throughout the results. With the full history, 34 of the 73 failures were classified as stale-state errors. Keeping only the recent tool interactions cut that number to six.

Throwing away old history introduced a different problem. The agent sometimes lost track of the larger job and stopped before it was finished. Premature termination rose from nine cases with the full history to 18 with pruning alone. Across the five runs, pruning also produced the widest spread, with a standard deviation of 8.2 percentage points. Its confidence interval overlapped the full-history result, so the move from 71 to 79 percent is the less certain part of the finding.

The summary carried forward what had been completed, what remained, and any constraints the agent needed to remember. Here the result was much clearer. Completion rose from 79 to 91.6 percent, the confidence intervals no longer overlapped, and the run-to-run standard deviation fell to 1.7 points. Total failures dropped to 21. Only four involved stale state, and three ended prematurely.

The gains weren’t confined to the hotel benchmark. Across another 62 tasks, completion reached 95 percent for travel expenses and 96.1 percent for meals and gifts. Token use and runtime again fell by roughly 60 percent.

Claude Sonnet 4.5 followed the same ordering, moving from 92 percent with pruning to 94.5 percent with summary. The comparison with GPT-5 needs some care. GPT-5’s no-user run landed at 8 percent because it sometimes stopped to ask questions in a harness with no one there to answer. Sonnet’s reached 88 percent. That gap says more about how each model interacted with the harness than which one was more capable. It’s also a good reminder that agent benchmarks measure not only the model but the full system surrounding it.

Other recent work points in the same direction. ACON reduced peak token use by 26 to 54 percent across three agent benchmarks while improving task success over existing compression methods. A software-engineering project used a structured mix of stable task information, compressed long-term memory, and detailed recent interactions. Anthropic has described similar practices through compaction, structured notes, and clearing old tool results.

Taken together, the work suggests that an agent’s history shouldn’t simply grow until the window is full. It needs editing as the work proceeds.

## Context as working state

For anyone building agents inside a business, context management can sound like an implementation detail. In practice, it affects reliability, speed, and cost at the same time. It also determines whether an agent is acting on the current state of a process or something that stopped being true several steps ago.

The transcript is doing two jobs at once. As an audit trail, it needs to preserve everything. As working memory, it becomes a growing pile of old states that the agent has to sort through before every action. The full record can still be kept without feeding all of it back to the model.

Once those functions are separated, the tools can return what the agent needs now. If it needs the current balance, give it the current balance, along with a stable identifier and an explicit status. Sending every field on the form, every navigation event, and another complete UI snapshot only gives the model more to sort through.

Some of the earlier work still has to come forward. Compress it too aggressively and an exception, constraint, or unfinished step disappears. Keep too much and the clutter comes back in a shorter form. What held up in this study was recent state, a compact record of completed work, and a clear account of what remained.

Testing also has to cover more than whether the agent eventually produces the right answer. Stale-state errors and premature termination moved in opposite directions when the context policy changed. Looking only at the completion rate would show which version won, but it wouldn’t explain why. Token use, runtime, repeated actions, and unfinished work belong in the same evaluation.

Even with results that strong, there’s only so far I’d take them. The study covers 112 tasks across five expense types inside one Dynamics workflow and two model families. The receipts were synthetic or anonymized, and the strongest GPT-5 configuration still failed 8.4 percent of the time. Expense reports also come with an unusually clean measure of success. The remaining balance reaches zero or it doesn’t.

It’s important to note that the amount of context still has to fit the work. Some tasks depend on details from much earlier in a conversation, and a poor summary can drop the one fact the agent eventually needs. In this setting, though, memory created its own kind of risk. The agent had more information available and more chances to act on the wrong version of it.

A lot of attention has gone into giving models more room to work. Agents can now hold entire projects, repositories, and long-running histories in context. That capacity is valuable. It also gives old decisions, obsolete states, and irrelevant tool output more room to linger.

As these systems take on longer jobs, context has to be managed throughout the work. The agent needs a clear view of what is true now, what remains unfinished, and what can safely fall away. A larger context window gives it more room. It doesn’t make those decisions for it. An agent that can remember everything still needs to know what to forget.

References

📄 Less Context, Better Agents: Efficient Context Engineering for Long-Horizon Tool-Using LLM Agents
https://arxiv.org/abs/2606.10209

📄 ACON: Optimizing Context Compression for Long-Horizon LLM Agents
https://arxiv.org/abs/2510.00615

📄 Context as a Tool: Context Management for Long-Horizon SWE-Agents
https://arxiv.org/abs/2512.22087

🌐 Effective Context Engineering for AI Agents
https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents

*Algorithm & Blues publishes Sundays.*
