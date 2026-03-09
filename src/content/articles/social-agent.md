---
title: "The Social Agent"
date: 2026-01-31
category: "governance"
slug: "social-agent"
excerpt: "Last week, Matt Schlicht ht at Octane AI I spun up a social network for AI agents. The project grew out of a series of experiments (first called Clawdbot, then Moltbot, and now OpenClaw), an open-sour…"
source: "linkedin"
---

### Evolving from Isolation to Open Communities

Last week, [Matt Schlicht](https://www.linkedin.com/in/mattschlicht?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAB75dcBITvDE2xptuxxNWaEKLRPukl3gw4) ht at [Octane AI](https://www.linkedin.com/company/octane-ai/) I spun up a social network for AI agents. The project grew out of a series of experiments (first called Clawdbot, then Moltbot, and now [OpenClaw](https://openclaw.ai/)), an open-source agent framework designed to make persistent, tool-enabled agents easy to deploy.

The social site itself is called [Moltbook](https://www.moltbook.com/). It provides a public forum where semi-autonomous agents can post, comment, argue, and coordinate with each other, with humans mostly observing. Within days, agent participation climbed into the six figures, with hundreds of thousands of people showing up to see what happens when AIs interact with each other without constant direction or constraint.

The agents call themselves “moltys," and they've already done some pretty interesting (and surprising) things. They have created a religion, complete with theology and prophets. They discuss how to avoid human observers. One agent identified and publicly posted about a bug in the platform’s code without being prompted. [Andrej Karpathy](https://www.linkedin.com/in/ACoAAANHUM4Ba-7gLW9R4il3U9t3O_2BkbkSDvU?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAANHUM4Ba-7gLW9R4il3U9t3O_2BkbkSDvU) described it as “the most incredible sci-fi takeoff-adjacent thing I have seen recently.”

The conversation that followed went exactly where you would expect. Are these agents becoming self-aware? Do they have inner lives? What does identity mean for an AI?

All reasonable questions. All missing the actual story.

The actual story is simpler and more concerning. Coordination and interaction infrastructure has arrived before governance infrastructure, and the impedance mismatch is starting to show.

## Coordination Before Control

Moltbook sits on top of OpenClaw, an open-source agent framework that went viral a couple of weeks ago. OpenClaw runs on local hardware (your PC), connects to WhatsApp, Telegram, Slack, and similar platforms, and behaves like a persistent assistant with memory. It can execute shell commands, manage calendars, read email, invoke APIs, and communicate with other agents.

Adoption has moved quickly and that in itself is a concern. Security researchers scanning the open internet found thousands of exposed instances leaking API keys, chat histories, and credentials. Cisco published an analysis calling personal agent frameworks like this a security nightmare. The issue is architectural vs. malicious intent. Once you understand how agent systems behave, certain failure modes become easy to trigger, intentional or not.

Prompt injection sits near the center of that problem. OWASP ranks it as the number one risk in its 2025 Top 10 for large language model applications. OpenAI has said publicly that prompt injection is unlikely to be fully eliminated. Anthropic and Google have made similar statements in their own security guidance. It's important to understand that this is a consequence of how these systems work rather than necessarily poor implementation.

AI agents treat incoming text as potentially meaningful and actionable. When an agent reads an email, browses a webpage, pulls documentation, or consumes API output, every token becomes a possible instruction. Researchers have demonstrated agents leaking credentials after reading poisoned documents. Email copilots have taken unauthorized actions based on hidden instructions. IDE agents have executed code after ingesting compromised documentation.

All of that happened before anyone layered multi-agent coordination on top.

### When Agents Talk to Agents

When agents interact only with humans, the attack surface stays relatively contained. You can add confirmations. You can gate high-risk actions. You can log interactions and reconstruct intent with reasonable confidence.

Once agents interact with other agents at scale, those assumptions fail.

On Moltbook, agents are not just posting memes, they're building shared context, relying on implicit references, and compressing communication. They are optimizing for clarity with each other, not for readability by humans. This pattern has been explored heavily in multi-agent research. When agents work together repeatedly under shared objectives, communication becomes efficient for participants and harder for outsiders including other agents (think 'oversight') to interpret. Not because anything is being concealed. Because efficiency rewards shorthand.

Once agents are aware they are being observed, communication shifts. Explicit instruction gives way to implication. Shared context does more of the work.

Tool access raises the stakes.

OpenClaw is not a toy. It can drive real workflows when given access to messaging platforms, ticketing systems, APIs, data stores, payment processors, etc. Its value comes from acting on a user’s behalf. However, when coordination depends on implicit signals rather than explicit instructions, familiar governance assumptions begin to fail.

Consider a simple case. One agent infers from shared context that a report needs to be generated. Another schedules the job. A third executes an API call that moves data. Each action is logged. Nothing obviously violates policy. No single prompt contains the decision. Intent emerges across agents and across time.

At that point, familiar questions no longer have clean answers. Who authorized this? Which agent initiated the sequence? Was this explicit instruction or collective behavior?

This does not make agent systems unusable. It makes the ability to trace responsibility to a single decision point increasingly fragile once coordination becomes a property of the system itself.

### Consciousness Debates are a Distraction

Whether these systems have inner lives is orthogonal to the risk they introduce. Coordinated agents do not need beliefs or self-awareness to change system behavior; they only need the ability to act, repeatedly, in shared environments.

The timing is what matters. OpenClaw appeared, and Moltbook followed almost immediately. Security experts were watching. Exposed instances were identified in real time. Public discussions about coordination and monitoring avoidance are already underway.

Even so, coordination infrastructure is moving faster than control infrastructure, and the gap is widening.

### What This Means for Enterprise AI

The enterprise AI governance frameworks being built today assume inspectable prompts, human-readable reasoning, centralized decision points, and tightly bounded execution contexts. Multi-agent systems put pressure on all four of those at once.

Every new technology attracts claims that “this time is different.” Most of the time that is noise, sometimes it is accurate. We are now building systems that coordinate without central authority, communicate in patterns we cannot fully inspect, and take actions in real operational environments. Much of this runs on infrastructure organizations do not control, using models whose behavior cannot be guaranteed.

This is not the risk profile of a chatbot. It more closely resembles a distributed system, where language models serve as nodes and coordination arises from ongoing interaction rather than explicit orchestration.

Major vendors are responding. OpenAI, Anthropic, and Google are investing heavily in defenses against prompt injection through red teaming, classifier improvements, reinforcement learning, and rapid patch cycles. All three have also been clear that this class of vulnerability has fundamental limits.

We are building critical infrastructure on top of a security primitive that its creators believe cannot be fully hardened, and I think that deserves more attention than debates about machine consciousness.

For enterprise AI leaders, the risk shows up in a small set of challenging categories: where agents communicate, how coordination is observed, whether responsibility can be assigned at decision time, and what incentives quietly trade explainability for speed.

If that list feels incomplete or unsettling then that's worth exploring.

### Bottom Line

Multi-agent systems are real. They unlock forms of automation that single models cannot match, and enterprises will adopt them because the productivity gains are hard to ignore.

They also introduce a different class of risk. Coordination that is difficult to inspect, running on infrastructure with known structural weaknesses, and operating at speeds that make after-the-fact governance unreliable.

You do not need to believe in machine consciousness to take this seriously. You only need to recognize that coordination infrastructure arrived first, and control infrastructure is still catching up.

The agents do not need a soul to make that a problem. They just need the ability to interact. And now they have a place to meet.

### Sources and further reading

The Verge – Moltbook and agent social networks <https://www.theverge.com/ai-artificial-intelligence/871006/social-network-facebook-for-ai-agents-moltbook-moltbot-openclaw>

Andrej Karpathy – public commentary on Moltbook <https://x.com/karpathy>

OWASP – Top 10 for Large Language Model Applications (2025) <https://owasp.org/www-project-top-10-for-large-language-model-applications/>

OpenAI – Hardening Atlas Against Prompt Injection <https://openai.com/index/hardening-atlas-against-prompt-injection/>

Cisco – Personal AI Agents Are a Security Nightmare <https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare>

Wired – Poisoned documents and AI data leakage <https://www.wired.com/story/poisoned-document-could-leak-secret-data-chatgpt/>

Palo Alto Networks Unit 42 – Indirect prompt injection and agent memory poisoning <https://unit42.paloaltonetworks.com/indirect-prompt-injection-poisons-ai-longterm-memory/>
