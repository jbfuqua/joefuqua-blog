---
title: "Vol 11: We Can Read Their Thoughts — for now."
date: 2025-07-27
category: "algorithm-and-blues"
issue: 11
slug: "algorithm-blues-11"
excerpt: "A new paper from researchers across OpenAI, DeepMind, Anthropic, Meta, Amazon, the UK AI Safety Institute and others argues that because today’s reasoning models often “think out loud” in natural lang…"
source: "linkedin"
---

A new paper from researchers across OpenAI, DeepMind, Anthropic, Meta, Amazon, the UK AI Safety Institute and others argues that because today’s reasoning models often “think out loud” in natural language, we can monitor their chain-of-thought (CoT) to catch intent to misbehave. It’s a rare safety lever — and a fragile one. 

The authors make two claims business leaders should care about: on hard, multi-step tasks, models need working-memory style CoT that leaks useful signals; and even on easier tasks they often have a propensity to externalize reasoning — both openings for automated monitors and audit. 

But they warn the window can close. Outcome-based RL scaling, process supervision that optimizes how CoT looks, indirect training pressures, and future “latent-reasoning” architectures could all drive models away from legible English — or teach them to hide what matters. In short: CoT monitorability is contingent on today’s training choices. 

The piece is unusually pragmatic for a cross-lab safety note: CoT monitoring is not a panacea, should be one layer among many, and must be continuously evaluated for degradation as models become more situationally aware. If we push too hard to “clean up” thoughts, we may destroy the actual signal we want to measure. 

Media coverage has already framed this as “AI could hide its thoughts.” That’s not hype: the paper explicitly entertains obfuscation and non-legible internal languages as capabilities emerge. The question is whether we preserve monitorability by design rather than assume it persists. 

Treat CoT as a control surface:

• Preserve: avoid training objectives that penalize or cosmetically rewrite CoT in high-risk workflows; prefer checkpoints that retain monitorability. 

• Instrument: log CoT for privileged tasks; run independent CoT monitors to flag goal-seeking, evasion, or sabotage markers; tripwire to block/route for human review. 

• Validate: add monitorability tests to model acceptance — measure detection recall on red-teamed scenarios where CoT reveals misbehavior; track drift over time. 

From a policy perspective, require suppliers of “reasoning” or agentic models to disclose monitorability characteristics, document training choices that affect CoT legibility, and provide APIs for safe CoT access under governance. Build this into procurement and model cards now, not after an incident. (Inference from the paper’s recommendations to consider development impacts and to invest alongside other safety methods.) 

If you’re betting on agents, your observability strategy must be part of safety. The ability to read an inner monologue may be the difference between catching emerging intent and explaining a post-mortem. Are you measuring whether your models will still “think out loud” six months from now? 

hashtag
#AI 
hashtag
#AISafety 
hashtag
#AgenticAI 
hashtag
#EnterpriseAI 
hashtag
#RiskManagement

https://lnkd.in/ewKAQVp5
…more
