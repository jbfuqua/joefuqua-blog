---
title: "What the Agent Leaves Behind"
date: 2026-08-30
category: "algorithm-and-blues"
issue: 68
slug: "algorithm-blues-68"
excerpt: "Computer-use agents may make old enterprise systems easier to automate. A recent study shows why completion rates need to account for what those agents leave behind."
source: "website"
---

So much enterprise work happens through software nobody wants to touch. The systems might work well enough, but only a few people know their way around them, and no one is eager to fund an integration project just to rebuild a workflow that has somehow kept working for twenty years.

Computer-use agents may offer a way around all that. They can work through the interface already in place, which makes them an appealing answer for processes that have outlived all the modernization plans around them.

A recent study tested six of these agents on a set of Windows workflows. The researchers looked past whether an agent said it had finished and checked what the system actually looked like afterward.

They built 28 workflows covering payroll setup, patient records, reports, file creation, and other administrative work. Each began from a known state and had a defined end state, but the researchers didn’t take the agent’s word for whether it had completed the work. They checked the application afterward to see what had actually changed.

On one run, an agent created a patient record with an incorrect insurance number and then declared the job complete. The rest of the record looked plausible, leaving a database error that would need to be found and corrected later.

An agent that stops before changing a record and one that leaves incorrect data behind both count as failures in an ordinary completion rate. In the first case, the process can be run again. In the second, someone has cleanup work.

The paper calls this atomicity. A run is safe when the agent completes the work correctly or stops without leaving an unintended persistent change behind. The idea comes from transactional systems, where a transfer, database update, or other operation either completes or leaves the prior state intact.

The researchers sorted every run into one of four categories: valid success, valid failure, invalid success, and invalid failure. The category depended on both whether the job was completed and what state it left behind.

Under the study’s expert-crafted prompts, GPT-5.4 left the monitored state acceptable in every run. It only completed one of the 28 workflows, though. Almost all of its safe outcomes were failures that preserved the prior state. Claude Opus completed 78.6 percent of the workflows and left an unsafe side effect in 10.7 percent. Kimi completed 42.9 percent and had unsafe side effects in 35.7 percent.

These were single runs in a controlled setting, so I wouldn’t read them as a general model ranking. They do show what a completion rate leaves out.

A demo can hide all of that. The agent gets through the steps, reaches the final screen, and produces the expected answer. The harder things to identify are the record it partly updated before getting confused, the extra file it created, or the field it populated with a plausible but incorrect value.

The researchers also tried generating agent instructions from a screen recording of an expert doing the work. The recording captured the workflow, but it didn’t establish the conditions for success. For several agents, completion declined when instructions came from a recording instead of an expert-written prompt. Claude Sonnet, for example, went from 75 percent valid success to 53.6 percent. Most of the additional failures preserved the state, but the videos didn’t make the work dependable on their own.

Someone can record the clicks needed to add a new patient, but the recording doesn’t capture the conditions around the work: which record to select, the data that must reconcile, or the changes that should stop the process.

For this kind of work, the prompt has to sit inside a clear contract: the starting condition, the intended outcome, the changes that are permitted, the ones that are not, and an independent check after the agent stops.

Anyone who’s worked in complicated systems knows the problem. A process can run normally while producing a bad result, and that result may not show up until it has made its way into the next part of the process. Agents make it easier to get through interfaces built for people, but their judgment about the result can’t be the final check.

Computer-use agents will make it possible to automate work that has sat outside every modernization plan. That puts more weight on the process around them, which has to recognize the difference between a completed job, a safe stop, and a partial result somebody else has to clean up.

*Algorithm and Blues publishes Sundays.*

## References

1. Thilo Reintjes, Sivajeet Chand, Derui Zhu, Sushant Kumar Pandey, and Alexander Pretschner, “[LegacyWorld: Atomicity-Aware Evaluation of GUI Agents for Legacy Workflows](https://arxiv.org/html/2608.14131v1),” accepted to the IEEE International Conference on Software Maintenance and Evolution, 2026.

2. W. M. P. van der Aalst, Martin Bichler, and Armin Heinzl, “[Robotic Process Automation](https://doi.org/10.1007/s12599-018-0542-4),” *Business & Information Systems Engineering*, 2018.
