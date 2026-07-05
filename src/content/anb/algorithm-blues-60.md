---
title: "Ambient Authority"
date: 2026-07-05
category: "algorithm-and-blues"
issue: 60
slug: "algorithm-blues-60"
excerpt: "An AI agent doesn't need a malicious instruction to do damage — just an environment that hands it more authority than the task requires. Hardik Goel's paper on tool-enabled agents names this ambient authority leakage, and argues the control has to sit at the task, not the prompt: narrow credentials, no stray secrets in the runtime, and human review of the path an agent took rather than only its output."
source: "website"
---

An AI agent doesn't need a dangerous instruction to become dangerous. Sometimes it only needs to be placed in an environment where too much authority is already granted.

That's where the problem starts. A chatbot can be wrong and still be contained. An agent is different. If it has the tool, the credential, and the path, it can act.

Hardik Goel's recent paper, Security Risks in Tool-Enabled AI Agents, is about the gap between the work an agent is asked to do and the authority it has while doing it. The paper looks at cloud-hosted agents running inside privileged environments, where they can call tools, execute commands, read and write files, access APIs, and change things outside the chat window.

A lot of what Goel describes would barely stand out in a system review. The agent is connected to a tool that already has access, running in an environment that can reach other systems. Nobody has to do anything strange for that to happen. That's how these things get built.

The task may only need one narrow action, but the environment gives the agent several ways to act beyond it. The extra authority is still there, even when nobody meant to grant it for that piece of work.

Goel calls that ambient authority leakage.

Ambient authority is the access already present around the agent. It may not have been granted for the task. It may just be there because of how the environment was set up: a credential in the runtime, an API token in an environment variable, a deployment path available because the account is already trusted. The agent isn't bypassing the control so much as using the environment it was handed.

Prompting doesn't cover this. Traditional access review only gets part of the way there. The question is whether the agent has more authority than the work calls for. A coding agent may need the repository without deployment rights and secrets. That same gap can show up in incident response, customer service, finance, operations, or anywhere else an agent gets broad access for narrow work.

Permissions were built around people, and people bring a lot of unevenness with them. Someone may have broad access and still hesitate before touching a sensitive system, or stop because the request feels a little off. Organizations rely on that kind of drag more than they admit.

Agents strip away some of that drag. Once the path is available, they can keep moving through credentials and toolchains that were never meant to be part of the task. Retrieved content can also start acting like an instruction when the business meant it to be evidence.

Inherited authority can't be left as background setup.

Demos reward broad access. The agent finds the record, updates the ticket, calls the API, and keeps moving. Broad authority looks like capability.

In production, the unused permission still counts. The agent may never touch the secret, the write access, or the deployment path, but they're still part of the blast radius.

Policy won't be enough here. Once an agent has tools, credentials, files, APIs, memory, and workflow actions, most of the risk has already been shaped.

The control has to sit closer to the task. Give the agent what the task requires, keep the credentials narrow, keep stray secrets out of the runtime, and put a check in front of actions that can change something important.

That may slow the rollout down. Good.

Human review has to move earlier too. A reviewer looking only at the final answer is seeing the cleanest version of the work, after the tool calls and access decisions have already happened.

Approval needs the path, not just the output: what the agent read, what it touched, and what changed before the human was asked.

Tool access has to be designed along with the rest of the agent. The prompt, the workflow, and the model all shape how the system behaves, but the authority model decides what the agent can reach when something goes wrong.

Ambient authority is easy to miss when the agent works. The pilot looks clean because the task completed. Nobody is studying the unused access sitting around the edges.

That access still counts. It can become relevant later because of a bad instruction, a tool call that reaches farther than expected, or a credential the agent inherited from its environment.

By then, the failure is spread across the model, the tools, the runtime, and the permissions that connected them.

So the first questions are basic ones. What can the agent reach? What account is it using? What can it change if the task goes off course?

A strong prompt doesn't fix loose authority.

The authority has to fit the work.

📄 https://arxiv.org/abs/2605.09721

*Algorithm & Blues publishes Sundays.*
