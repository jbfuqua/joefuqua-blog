---
title: "Vol. 35"
date: 2026-01-11
category: "algorithm-and-blues"
issue: 35
slug: "algorithm-blues-35"
excerpt: "A couple of weeks ago OpenAI admitted something that has stuck with me; prompt injection is unlikely to ever be fully solved or eliminated."
source: "linkedin"
---

The Persistent Flaw in GenAI

A couple of weeks ago OpenAI admitted something that has stuck with me; prompt injection is unlikely to ever be fully solved or eliminated.

Prompt injection happens when instructions get folded into the material an AI is meant to process. A PDF, a webpage, an email — any of them can quietly steer what the system does next. To the model, there’s no practical distinction. It all arrives as text.

It showed up clearly when ChatGPT’s browsing feature went live. A few sentences inside a Google Doc were enough to shift the system’s behavior, using ordinary language.

The pattern has continued to surface. The UK’s National Cyber Security Centre has said these attacks may never be fully mitigated. OWASP ranks prompt injection as the leading LLM risk and reports it in roughly 73% of deployments. Palo Alto’s Unit 42, analyzing MCP identifies three native vectors: resource access, conversation manipulation, and tool invocation.

What’s interesting is that none of this depends on anyone doing anything particularly exotic. It follows from the fact that natural language has become the control surface. Instructions and content travel through the same pipe, so when an agent reads a document, that document can shape what happens next. When it pulls in outside information, that information participates in the system’s behavior as well.

Inside an enterprise, that has a subtle but important consequence. You don’t always know where a given instruction originated, or whether an action deflects what a user asked for or what a document suggested along the way. Most real deployments respond with approvals, scoped tool access, and trust boundaries layered on top.

What emerges is a model of assisted operation, with humans staying in the loop while machines handle the heavy lifting around search, synthesis, and coordination.

None of this reduces the practical value of GenAI in enterprise workflows. It does, however, shape how autonomy is implemented. Systems centered on analysis, retrieval, and constrained execution remain effective. Fully self-directed agents remain difficult to deploy at scale for the same structural reasons outlined above.

The same pattern already appears in incident reports, where agents end up acting on instructions buried in documents, research papers, and internal materials. It aligns with what the architecture suggests.

When agents act on what they read, the surrounding information environment becomes part of the execution path. How that’s handled comes down to design.

References:

https://lnkd.in/eTD5Dbvz

https://lnkd.in/emE3xyjR

https://lnkd.in/eAVQntgp

hashtag
#AlgorithmAndBlues 
hashtag
#EnterpriseAI 
hashtag
#AIGovernance 
hashtag
#Security 
hashtag
#AgenticAI 
hashtag
#PromptInjection
…more
