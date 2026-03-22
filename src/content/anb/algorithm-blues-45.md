---
title: "Stop Worrying About Paperclips"
date: 2026-03-22
category: "algorithm-and-blues"
issue: 45
slug: "algorithm-blues-45"
excerpt: "The popular model of AI risk assumes a system that is internally consistent but pointed the wrong way. In practice, the more immediate problem is less organized than that."
source: "website"
---

We spend a lot of time worrying about paperclips. Not literally, but it's a popular archetype for AI "going off the rails" and destroying the world and humanity along with it.

What's the idea? A system gets smart, develops the wrong goal, and executes it perfectly — paperclips, gray goo, the Terminator just better optimized. It's a clean model, directional, easy to reason about, and it has shaped most of how we talk about AI risk.

It's also pulling attention in the wrong direction.

Anthropic published a paper last month that looks at failure from a different angle, not as a story but as something you can measure. They break model errors into two categories — bias, which is consistent and directional, and variance, which is inconsistent, unstable, sometimes contradictory — then push models into harder tasks with longer reasoning chains to see what happens.

What you see instead is something that works for a stretch, then starts to come apart as the chain gets longer, not all at once, just enough that the later steps stop lining up with the earlier ones.

Across models like Claude Sonnet 4, o3-mini, and Qwen3, and across very different benchmarks, the same pattern shows up. As tasks get harder, coherence drops. The failures don't move in a consistent direction, they fragment. Outputs loop back on themselves, constraints get dropped midstream, intermediate steps stop lining up with earlier ones. It looks less like optimization and more like something losing the thread.

That doesn't match how most of the safety conversation is usually framed.

Current thinking assumes the risk comes from systems that are internally consistent but pointed the wrong way, so the controls focus on intent, deception, and alignment drift — all the things you would worry about if the system were executing a bad objective correctly. In practice, the more immediate problem is less organized than that.

You can see it in early agentic workflows. Ask a system to complete a ten-step task — pull data, transform it, validate it, generate output, check its own work — and the first several steps are usually fine. Then something breaks. It repeats work it already completed, drops constraints it was following a moment earlier, or validates an output that no longer matches the original objective. There's no clear direction to the error, just a gradual loss of coherence.

Directional mistakes come from bias, which shows up in training, in reward shaping, in how objectives are framed before the system is ever asked to do anything complex. Once you are deep into long chains of reasoning, you are no longer steering so much as trying to keep the process intact.

There is also a governance implication that doesn't get much attention. Most enterprise controls assume intent — they're built to catch systems doing the wrong thing on purpose, whether that shows up as misaligned objectives, consistent but incorrect outputs, or behavior that looks deliberate. That framing doesn't help much when the system isn't pursuing a direction at all.

A system that degrades with complexity is harder to manage than one that is consistently wrong. Direction can be measured and corrected. Drift is harder to see, especially when the failure itself is unstable.

So the design problem changes: less emphasis on constraining a hypothetical perfect optimizer, more on managing complexity — breaking tasks into parts that hold together, tightening feedback loops, and being explicit about where a given model stops behaving reliably in a given context.

The paperclip maximizer works as a thought experiment because everything about it is clean. What shows up in practice is not clean. It looks more like something that can carry a thread for a while, then slowly loses it while continuing to produce output that still sounds plausible.

And we are starting to wire that into real systems.

References

https://alignment.anthropic.com/2026/hot-mess-of-ai/
