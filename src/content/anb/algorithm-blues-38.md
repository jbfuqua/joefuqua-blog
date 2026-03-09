---
title: "Vol 38, Simpler Beats Smarter"
date: 2026-02-01
category: "algorithm-and-blues"
issue: 38
slug: "algorithm-blues-38"
excerpt: "With the advent of frameworks like MCP, it’s reasonable to assume that if an agent can access the right information, it will use it. Build the tool, package the skill, expose the API, and trust the mo…"
source: "linkedin"
---

With the advent of frameworks like MCP, it’s reasonable to assume that if an agent can access the right information, it will use it. Build the tool, package the skill, expose the API, and trust the model to invoke it when needed.

Vercel just published research showing that assumption doesn’t necessarily hold.

They tested how coding agents learn framework APIs that are missing from their training data, comparing two approaches. The first was using skills, where packaged documentation is available but must be explicitly invoked. The second was specifying actions in AGENTS.md, a small file that sits in the project root.

The passive file approach achieved a perfect pass rate. Skills reached only 79%, and only when agents were explicitly instructed to use them. Without that, the skills approach performed no better than having no documentation at all. The outcome was based on whether retrieval required an explicit choice.

Vercel also tested different instruction wordings. “You MUST invoke the skill first” produced correct page code but missed the configuration file entirely. “Explore the project first, then invoke” found both. Small wording changes produced materially different outcomes. Across evaluations, skills went uninvoked about half the time.

The AGENTS.md approach avoids the problem by removing the decision point. The documentation index is persistently available to the agent, so there is no moment where it must choose whether to retrieve it. Vercel compressed the file from 40KB to 8KB using a pipe-delimited format that simply maps where files live. Despite the compression, it still achieved a 100% pass rate.

One particular instruction “Prefer retrieval-led reasoning over pre-training-led reasoning,” appears to be especially important; this tells the agent to trust what is present in the project context over potentially stale training data.

This idea extends beyond coding agents. Most governance frameworks assume agents will invoke available controls when they need them, but complete access to a three-lines-of-defense model is meaningless if the agent never consults it. 

Skills and tools work well for vertical workflows with explicit intent. For horizontal knowledge that should inform every decision, passive availability proved more reliable in these tests.

So, instead of optimizing how agents decide which controls to invoke, the more reliable approach may be to decide which governance-critical information should always be present so no decision is required at all. When decision reliability is the constraint, removing the decision can be the most effective form of control.

https://lnkd.in/emvHz6HQ

hashtag
#AIGovernance 
hashtag
#AgentArchitecture 
hashtag
#EnterpriseAI
