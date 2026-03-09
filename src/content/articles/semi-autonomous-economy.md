---
title: "The Semi-Autonomous Economy"
date: 2026-03-06
category: "governance"
slug: "semi-autonomous-economy"
excerpt: "Why AI Agents Will Participate in Economic Activity Before They Replace It"
source: "linkedin"
---

*Why AI Agents Will Participate in Economic Activity Before They Replace It*

Last year I spoke at a conference explaining to a large audience why an AI agent needed its own governed identity: defined permissions, financial limits, a killswitch, the works. Not borrowed from a service account, not piggybacked on a human employee's credentials. Its own. The audience looked at me like I'd suggested we issue a badge to a thermostat.

That discomfort is exactly where we are.

Software systems are beginning to participate in operational work in ways that don't fit our existing mental models. The shift is more subtle than the headlines suggest. Task by task, platform by platform, one delegated approval at a time, until a meaningful slice of your operational coordination is happening inside software that nobody is actively watching.

This is worth taking seriously, and not just as a technology observation.

## Where the Pattern Breaks

Automation has always been part of economic infrastructure. Industrial machinery amplified physical output. Enterprise platforms improved how organizations coordinated at scale. Algorithmic trading moved financial market execution from milliseconds to microseconds without anyone blinking too hard.

What these systems shared was a fundamental constraint: they operated *inside* workflows that humans designed and directed. The software executed the calculation. A person decided what to do with the result.

Recent agent architectures don't fit that pattern. A system receives an objective, assesses what tools and data it needs, executes a sequence of actions across multiple external platforms, evaluates the results, and continues. The workflow runs inside the system. It provisions infrastructure when load spikes, adjusts ad spend based on conversion signals, flags anomalies and opens remediation tickets, and acquires third-party data feeds to improve its own performance.

At some point that stops being a tool and starts being a participant.

## Financial Markets Already Ran This Experiment

When automated trading systems became dominant in financial markets, the response was to build governance infrastructure capable of supervising automated participants. Exchanges created circuit breakers. Regulators defined accountability frameworks. Risk systems established position limits and kill conditions.

Human institutions didn't disappear. They became the oversight layer, the structure within which automated participants operated.

That is almost certainly the trajectory for operational AI agents across the rest of the digital economy: machine-to-machine coordination operating under human ownership, within human-defined limits, accountable to human institutions.

The question is whether we build the governance infrastructure before or after the incidents that make it obvious we needed it.

## The Accountability Floor

There's a recurring failure mode in AI forecasting: confusing capability with deployment context.

Full operational autonomy faces constraints that have nothing to do with model performance. Contracts require signatories. Regulatory filings require accountable parties. Financial outcomes have to be attributed to identifiable organizations. These aren't technical problems. They're structural features of how economic activity works, and they aren't going anywhere.

Technical limitations add their own friction. Long-horizon autonomous agents still degrade badly when conditions change unexpectedly. Prompt injection, credential misuse, and compounding errors in multi-step workflows are live problems in production environments. And when automated systems interact with each other at machine speed (pricing agents, allocation systems) they can produce feedback loops that humans aren't positioned to interrupt in time.

Supervised delegation is the only version that functions inside real institutional environments.

## Five Questions Organizations Are Wrestling With Today

Here's what I spend a significant portion of my working life on... how should organizations effectively govern what they're already deploying?

If an automated system can initiate a transaction, provision a resource, or modify a configuration in a production environment, you need answers to a short list of questions before you find out the hard way that you didn't have them.

Who owns this agent? What can it access, and what is it explicitly prohibited from touching? What financial limits apply before a human has to approve? How is its activity logged in a way that supports audit and reconstruction? How do you stop it when something goes wrong?

These aren't exotic governance requirements. They're the same questions you'd ask about any employee operating with delegated authority. The infrastructure to answer them for software agents exists in fragments across cloud platforms and security architectures: identity frameworks, policy enforcement, constrained execution environments, immutable audit trails. The coherent system that connects them doesn't yet exist at scale.

That's the actual hard problem, whether the organizations deploying these systems have built the supervisory infrastructure to do so responsibly. Capability is not, and has never been, the binding constraint.

## Same Economy, Different Machinery

The surface of the economy will look familiar for a long time. Companies will exist. Contracts will be signed by people. Regulators will oversee institutions. Capital allocation will remain a human judgment.

Inside those structures, more of the routine coordination will flow through automated systems acting on behalf of those institutions: procurement decisions, infrastructure management, marketing optimization, the operational workflows that currently require teams of people to manage.

Individual operators and small teams will be able to run digital businesses that previously required entire departments. Large enterprises will redeploy human attention from execution toward strategy and governance. The cost of coordinating digital work will drop significantly.

None of that requires dramatic rupture. It requires that the infrastructure for governing automated operational actors gets built before the governance failures that make the case for building it.

I'm somewhat invested in that outcome.

### Selected References

<https://www.nber.org/system/files/chapters/c15305/c15305.pdf>

<https://arxiv.org/abs/2507.19550>

<https://arxiv.org/abs/2508.17281>
