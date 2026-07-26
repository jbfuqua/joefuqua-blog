---
title: "The Wrong Unit"
date: 2026-07-26
category: "algorithm-and-blues"
issue: 63
slug: "algorithm-blues-63"
excerpt: "AI benchmarks measure what a model can do and say almost nothing about what it does to the people using it. Two papers converge on that gap: one argues the real unit of evaluation is the human-AI interaction, the other reads Chernobyl, Bhopal, and Challenger as organizational failures whose hazards were documented in advance. A company can pass every model evaluation it runs and still be quietly rearranging how it thinks."
source: "website"
---

AI benchmarks measure capability. They ask whether a model reasons more accurately, writes better code, hallucinates less often, or completes more of the tasks it’s given. The numbers let us compare systems and track progress.

The model is only one part of the system that’s changing.

Marcos Economides and his colleagues argue that AI evaluation has concentrated on what a model can do while paying almost no attention to how people respond to it. They propose measuring what they call psychological competence: how a system handles uncertainty, frames choices, and shapes the trust placed in it. The unit of evaluation, in their framing, is the human-AI interaction rather than the model on its own.

A second paper arrives at the same place from a different direction. Joshua Kroll, Andrew Smart, R. Stuart Geiger, and Abigail Jacobs examine Chernobyl, Bhopal, Three Mile Island, and Challenger, and argue that the usual reading of those events is wrong. They weren’t unforeseeable accidents produced by complexity. The hazards were documented in advance and went unaddressed. What failed was the organization: cultures where bad news didn’t travel upward, permanent schedule pressure, weak internal controls, and a habit of treating human problems as technical ones.

Anyone who’s spent time inside a large company will recognize that list.

Both papers point at the same gap. Model capability gets measured constantly. What the model does to the judgment of the people and institutions using it gets measured almost not at all. Benchmarks evaluate the component. Almost no one is evaluating the organization that forms around it.

That organization changes through ordinary use. An analyst asks the model for an answer before forming an opinion. A manager uses it to narrow the options a team sees. A review gets shorter because the recommendation already looks finished. Certain questions get asked less often, then stop being asked. The model hasn’t changed. The organization has.

The shift is hard to see because nobody decides on it. No one rules that fewer perspectives should be considered or that an assumption no longer needs testing. People adapt. The workflow gets faster, the output gets trusted, and the shortcut becomes the standard. A year later, it feels like the work was always done this way.

Every significant technology has done this. Calculators changed how mathematics is taught. Search engines changed what people bother to remember. GPS changed how people navigate. None of it happened overnight, and none of it was obvious while it was happening.

Generative AI reaches further because it works upstream of the task. It shapes which problem gets defined, which information counts as relevant, and which options make it into the room.

Kroll and his coauthors suggest where that can lead. The preconditions for organizational failure are rarely exotic. They accumulate through reasonable local decisions and go unexamined because no single one of them looks like a risk. An organization can pass every model evaluation it runs and still be quietly rearranging how it thinks. That’s exactly the kind of change a benchmark was never designed to detect.

Accuracy, reliability, cost, and security still matter. They describe the component. The larger question for anyone deploying these systems at scale is what the organization looks like after a year of living with the answers, and whether anyone inside it will recognize what’s changed.

Research

📄 Psychological Competence as a Missing Dimension in AI Evaluation
https://arxiv.org/abs/2607.08285

📄 Unsafe at any AUC: Unlearned Lessons from Sociotechnical Disasters for Responsible AI
https://arxiv.org/abs/2607.14353

*Algorithm & Blues publishes Sundays.*
