---
title: "Accuracy Isn't Reliability"
date: 2026-04-12
category: "algorithm-and-blues"
issue: 48
slug: "algorithm-blues-48"
excerpt: "Benchmark accuracy is getting better, but reliability — consistency, robustness, predictability — is not keeping pace. A Princeton study across 14 models and 18 months of releases shows why that distinction matters."
source: "website"
---

One of the stats driving the current wave of enthusiasm around AI agents is average task success rate. It's getting progressively better, and in principle that makes the systems look increasingly ready for broader deployment.

The problem is that benchmark accuracy doesn't tell you much about how an agent behaves when the same task is executed repeatedly, when the wording changes a little, or when a tool call fails halfway through execution; and it tells you even less about whether the agent has any real sense that it has gone off course.

A recent paper from Princeton, by Rabanser, Kapoor, and Narayanan ([Towards a Science of AI Agent Reliability](https://arxiv.org/abs/2602.16666)), argues that reliability needs to be treated as a separate dimension rather than folded into accuracy and assumed to come along for the ride. They break reliability into four components: consistency, robustness, predictability, and safety. The framing is borrowed from safety-critical engineering domains that discovered long ago that average performance is not enough.

They tested 14 models from OpenAI, Google, and Anthropic across 18 months of releases. Each task was run five times. Instructions were paraphrased without changing their meaning, and faults were introduced into tools and environments.

The results are pretty sobering. Accuracy improved materially over time, as expected; but, reliability, for the most part, did not.

Models that could solve a task often failed to do so consistently under identical conditions. (i.e., slightly reword the instructions and performance dropped). Asking the model whether it got the answer right was always answered in confidence, but was not reliably aligned with the actual outcome. On one benchmark, most models were no better than chance at distinguishing correct answers from incorrect ones.

Scale didn't resolve the problem. Larger models improved on some dimensions and regressed on others. In some cases, broader behavioral capability came with more run-to-run variability rather than less.

That gap is important because it looks a lot like what teams are seeing in practice. The agent performs well in a demo, clearing the eval. Then it enters a real operating environment, where inputs are messier, tools are less cooperative, and conditions shift in ways the benchmark did not capture. That's where deployments start to wobble, and usually the agent hasn't been instrumented to see why.

The paper makes a distinction that is more important than it may sound at first. Accuracy is about how often a system fails. Reliability is about why it fails.

A system that fails 5 percent of the time in ways that are erratic, hard to reproduce, and invisible to the system itself may be far harder to trust than one that fails 10 percent of the time but does so in more stable, legible ways and can recognize its own uncertainty.

That's not the kind of thing leaderboards are built to reward, but it's probably closer to what production environments actually need.

📄 Full paper: https://arxiv.org/abs/2602.16666

Algorithm & Blues publishes Sundays.
