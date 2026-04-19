---
title: "MCP's Attack Surface Is Broader Than Most Teams Realize"
date: 2026-04-19
category: "algorithm-and-blues"
issue: 49
slug: "algorithm-blues-49"
excerpt: "MCP has become common infrastructure for agentic systems fast. A new paper maps 23 attack vectors across the protocol, tools, agents, and environment — and finds no single defense covers more than a third of them."
source: "website"
---

MCP has become common infrastructure for agentic systems in a very short period of time. Anthropic introduced it in November 2024, it now sits under the Linux Foundation's Agentic AI Foundation, and the surrounding ecosystem has grown to 97 million monthly SDK downloads and more than 177,000 registered tools. That is a large footprint for something still often discussed as though it were mainly a convenient integration standard.

The more important point is what sits underneath that growth. MCP is becoming a standard way for models to reach tools and data. As that happens, the security question gets larger. A connector can look fine on its own and still become part of a workflow that creates real exposure.

A recent paper, *A Formal Security Framework for MCP-Based AI Agents*, focuses on that problem. The authors map 23 attack vectors across 7 threat categories and 4 attack surfaces, then compare a dozen existing defenses against that landscape. No single defense they reviewed covered more than roughly a third of the vectors.

That finding tracks with what a lot of teams are already running into. MCP security is still often treated as a handful of separate issues: prompt injection, tool poisoning, authentication, approval workflows. The paper's argument is that the real exposure is spread across the protocol, the tools, the agent, and the environment in which all of them interact. That is why point controls are necessary but insufficient.

The most interesting part of the paper is its emphasis on composition. Two tools that look harmless by themselves can produce something very different when chained together. The paper uses a simple example: a read-file tool and a send-email tool. Neither is inherently malicious, but together they can exfiltrate data. It also calls out consent bypass, where tool descriptions or outputs steer the model into approving actions that should have required a clearer user decision.

There is also a time dimension here. Post-approval mutation, version rollback, and gradual capability escalation all point to the same weakness: approval is often treated as durable even when the thing being approved can change later. That makes this as much a supply-chain and control problem as a prompt-safety problem.

The paper also notes how quickly the ecosystem has moved toward action-capable tools, from 27% to 65% between November 2024 and February 2026. In a read-heavy environment, the main question is what an agent can see. In a write-capable one, the questions become what it can change, where it can change it, and what authority it can accumulate along the way.

The defense model they propose, MCPSHIELD, is a layered architecture built around capability-based access control, tool attestation, information-flow tracking, and runtime policy enforcement. In their analysis it reaches 91% theoretical coverage. The authors are clear that this is a reference architecture, not a validated production implementation. Still, the direction is sensible because the problem they describe is too distributed for a single mechanism to solve.

What I found most useful in the paper is the reminder that some of these risks are not accidental. They follow from core design choices in MCP itself: free-form tool descriptions, mutable tool definitions, and optional rather than built-in protections around session security. The authors recommend more structured tool descriptions, mandatory attestation, and stronger session protections in future revisions. That seems right.

The larger point is that MCP has outgrown the assumptions that helped it spread. It is no longer enough to ask whether a tool looks trustworthy or whether a server passed an initial review. Once the protocol becomes shared infrastructure, the more important question is whether the surrounding control model is strong enough to govern composition, mutation, delegation, and runtime behavior across the system as a whole.

📄 Read the paper: https://arxiv.org/abs/2604.05969

Algorithm & Blues publishes Sundays.
