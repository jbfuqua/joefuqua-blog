---
title: "Context, Not Prompts"
date: 2026-04-05
category: "algorithm-and-blues"
issue: 47
slug: "algorithm-blues-47"
excerpt: "The prompt still matters, but it's only one part of the system. Once agents carry state, retrieve information, and hand work off, what drives behavior is the context surrounding the decision, not the instruction that started it."
source: "website"
---

Early on, prompt engineering carried a lot of weight. Better prompt, better result. Models were mostly stateless, the interaction was bounded, and the prompt did the heavy lifting.

Agents change that.

An agent doesn't operate in a single turn. It carries state, pulls in information, calls tools, stores memory, hands work off and picks it back up. The prompt is certainly critical, but it's one input among several.

In this mode, it comes down to what the system has access to when it makes a decision.

It's the environment the agent operates in, what it can see, what it can remember, what it retrieves, what carries forward and what doesn't. That's what drives it.

Over a few steps, context tends to compress. Useful detail drops out, earlier constraints get diluted, and what the system is working from is no longer what it started with.

It's rarely the prompt that causes that. It's something in the surrounding context, missing information, stale information, two things that don't line up but get used anyway, or context that should have been dropped but wasn't.

You see it once this gets wired into real workflows, where prompt tuning doesn't stabilize behavior because the variability sits outside the prompt, in what the system is retrieving, remembering, and carrying forward from one step to the next. If you're not controlling that, you're not really controlling the system.

At that point it's less about prompts and more about architecture, because that's where the control actually lives. Prompts are visible and easy to change, context isn't, it's spread across components, built up over time, and rarely inspected as a whole, which is also where governance starts to run into problems.

You can evaluate inputs and outputs and build controls around them. That holds when the system is bounded. Once behavior depends on what the system is carrying with it, that's no longer enough. What it had access to at the moment it made the decision becomes part of the problem.

In practice, the same system can give you different answers to the same question depending on what it retrieved or carried forward, and most environments don't capture that. It's hard to see in the moment and even harder to test after the fact.

So… the prompt still matters, but it's only one part of the system.

📄 Context Engineering (arXiv): https://arxiv.org/abs/2603.09619
📄 Agentic Context Engineering (OpenReview): https://openreview.net/forum?id=eC4ygDs02R
