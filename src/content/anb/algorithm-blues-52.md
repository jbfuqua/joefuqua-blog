---
title: "Memory Has a Governance Problem"
date: 2026-05-10
category: "algorithm-and-blues"
issue: 52
slug: "algorithm-blues-52"
excerpt: "Agent memory makes AI more effective, but it also creates a persistent knowledge layer that lives outside systems of record. A new survey maps the lifecycle and finds no published architecture covers all the governance primitives."
source: "website"
---

Agent memory is critical to making AI more effective. Ideally, an agent remembers your preferences, keeps track of prior work, and doesn't need to ask the same questions every time a session starts over. That's fundamental to making agents useful, and anyone who's re-explained the same project to an LLM for the tenth time can appreciate the appeal.

The part that gets less attention is that memory also gives the agent a running version of what it thinks is true, and enterprises have spent several decades learning that shared knowledge needs ownership, controls, retention rules, and some way to unwind mistakes.

A recent arXiv survey from Zehao Lin, Chunyu Li, and Kai Chen gives this problem a manageable structure. The authors describe agent memory as a six-phase lifecycle: Write, Store, Retrieve, Execute, Share, and Forget/Rollback. They map those phases against integrity, confidentiality, availability, and governance, producing a 24-cell view of long-term memory failure modes.

The structure is helpful because it shows how much of the current conversation is still aimed at more obvious failure modes. Storing/retrieving corrupted information is a real concern, but it's not the end of the story. Memory can also keep stale information alive, preserve sensitive details longer than it should, disappear when continuity depends on it, or accumulate orphaned entries.

It gets pretty uncomfortable when the paper turns to governance. The authors reviewed published agent architectures and could not identify a single example that covered all nine of the governance primitives. They also found relatively little work on using LLMs to govern memory itself, even though review, rollback, verification, and controlled forgetting are critical when memory is shared across users and workflows.

That is the part I think enterprise teams need to consider seriously. Once memory persists, the agent is no longer just answering from the current prompt or the current document set. It's carrying forward an accumulated picture of what it believes to be true. That's generally useful, but some of it may be stale, inferred, incomplete, over-retained, or simply wrong. The problem is that all of it shapes the next answer.

This creates a knowledge layer that lives outside systems of record, likely doesn't have a clear owner, and may not follow the same retention rules as the systems it supports. The agent will still treat that memory as usable knowledge, even if no one has decided whether it should have been retained in the first place.

Existing controls help, but they leave gaps. Access control can decide who gets in, but it does not govern what the system should remember after a legitimate interaction. Content filtering can inspect a prompt, but it may miss a memory entry that looks harmless when written and becomes risky only when reused later. Audit logs can tell you something happened, but they do not necessarily give you provenance, expiration, rollback, or a way to resolve competing versions of what the agent thinks it knows.

The authors use the phrase "mnemonic sovereignty" for the target state: verifiable, recoverable governance over what may be written, who may read it, when updates are authorized, and which states may be forgotten. It's a little ornate, but the underlying point is solid. Memory governance is not a side effect of better recall, it has to be designed.

The memory layer needs a real owner. That means deciding what the agent is allowed to remember, how long that memory lasts, when it can be reused, how it gets corrected, and when forgetting is required rather than optional.

Otherwise, we end up recreating a problem we're trying to solve for: a shadow knowledge layer sitting outside documented standards and systems of record.

📄 https://arxiv.org/abs/2604.16548

Algorithm & Blues publishes Sundays.
