---
title: "How I Think About Agentic AI: A Framework from the Trenches"
date: 2025-07-05
category: "governance"
slug: "how-i-think-agentic-ai-framework-from-trenches"
excerpt: "Three principles that guide my approach to building AI systems that actually work"
source: "linkedin"
---

*Three principles that guide my approach to building AI systems that actually work*

I've been building AI systems in various industries (most recently, financial services) for years now, and over time I've learned something the hard way: most of the frameworks and methodologies you read about don't survive contact with real business problems.

The gap between AI theory and AI practice is significant. In the lab, everything works. In production, with messy data, shifting requirements, and users who behave unpredictably, most AI initiatives either fail quietly or become expensive maintenance burdens.

Over time, I've noticed patterns in what works and what doesn't. The systems that last have three things in common—capabilities that matter more than the underlying technology or architecture choices.

## My Framework: The Three C's

When I'm evaluating whether an AI system will actually work in production, I ask three questions. These have become my mental model for separating real agentic AI from sophisticated automation that looks impressive in demos.

### Curation: Does It Know What Actually Matters?

The first thing I look for is whether the AI can intelligently select and prioritize information. Not just collect everything, but figure out what's actually relevant for the specific problem at hand.

I learned this lesson the hard way working on credit risk models. Our first attempts just aggregated every piece of financial data we could find. Technically impressive, but practically useless. The signal got lost in the noise.

Real agentic AI curates intelligently. In credit risk, this means:

- Identifying which financial ratios actually predict default in specific industries
- Selecting market indicators that matter for current economic conditions
- Updating peer comparison datasets based on what's happening right now, not what happened last quarter

The MIT Sloan Management Review research on "intelligent choice architectures" backs this up—AI systems that surface higher-quality decision options materially improve business outcomes  ([sloanreview.mit.edu](https://sloanreview.mit.edu/article/intelligent-choices-reshape-decision-making-and-productivity/)).

**My test:** Does the AI proactively filter and prioritize what matters, or does it just throw everything at you and let you figure it out?

### Context: Does It Remember What We're Actually Trying to Do?

The second capability I evaluate is contextual awareness. Can the AI maintain a coherent understanding of business objectives, constraints, and history across complex workflows?

This is where most AI systems fall apart. They treat every interaction as isolated, losing the thread of what you're actually trying to accomplish.

I see this constantly in fraud detection. Traditional systems flag unusual transactions—technically correct but contextually blind. They miss seasonal patterns, regulatory changes, and historical anomalies that would be obvious to a human analyst who's been paying attention.

Effective context means the AI understands:

- **Temporal context:** How this analysis connects to past work and future implications
- **Business context:** The actual goals, constraints, and compliance requirements we're operating under
- **Analytical context:** The assumptions and methodological choices that shape the analysis

Microsoft's support of Anthropic's Model Context Protocol across its AI-enabled platforms shows they get this—deep context is becoming fundamental architecture, not a nice-to-have feature ([blogs.microsoft.com](https://blogs.microsoft.com/blog/2025/05/19/microsoft-build-2025-the-age-of-ai-agents-and-building-the-open-agentic-web/)).

**My test:** Does the AI maintain consistent reasoning across different tasks and time periods, or does it start fresh every time?

### Coherence: Does It Contradict Itself?

The third capability is logical consistency. Can the AI maintain methodological integrity across different scenarios and time periods, or does it give you conflicting recommendations that undermine trust?

This is crucial in regulated environments. I've seen AI systems that work brilliantly for individual risk assessments but completely fall apart when you try to use them across an entire portfolio. The recommendations don't align, the methodologies aren't consistent, and you end up with a compliance nightmare.

Real coherence means the AI can explain its reasoning transparently and consistently. When it changes its recommendation, it can tell you why. When it maintains the same approach across different cases, it can justify that consistency.

Recent research from Anthropic on "Internal Coherence Maximization" demonstrates exactly why this matters. The researchers found that AI systems can be trained to maintain logical consistency by checking their responses for contradictions and ensuring mutual predictability across similar cases. When models lack this coherence, they might "label two different solutions to the same math problem as 'correct,' even though the results differ"—exactly the kind of inconsistency that creates operational headaches in enterprise environments ([the-decoder.com](https://the-decoder.com/anthropic-researchers-teach-language-models-to-fine-tune-themselves/)).

**My test:** Does the AI provide recommendations that align within a unified framework, and can it explain why its approach is consistent?

## Why All Three Matter

I've learned that you can't have just one or two of these capabilities. They work together:

- **Curation without context** gives you precise but irrelevant insights
- **Context without coherence** gives you comprehensive but contradictory analysis
- **Coherence without curation** gives you consistent but superficial recommendations

The magic happens when all three work together. That's when you get AI that doesn't just automate tasks, but actually augments human decision-making in meaningful ways.

## How I Apply This Framework

When I'm designing or evaluating AI systems, I use these three principles as my north star:

**Start with real problems, not demos.** I test how well the AI handles actual business complexity, not controlled scenarios. The system that works perfectly in a sandbox often breaks down when it encounters real organizational messiness.

**Build context from the beginning.** This isn't something you can retrofit. The AI needs to understand business context from day one, not as an afterthought. I've seen too many projects fail because they tried to add contextual awareness later.

**Measure what matters.** I develop specific metrics for each of the three C's. If you can't measure curation effectiveness, contextual consistency, and analytical coherence, you can't improve them.

**Think in systems, not tools.** The most successful AI implementations I've built treat these capabilities as interconnected requirements. You need all three working together, not just one or two working well.

## The Bottom Line

This framework has helped me build AI systems that actually work in production. Not just impressive demos, but tools that people rely on to make important decisions.

In the end, it isn't in having the fanciest AI model that matters. It's having a model that curates intelligently, maintains context effectively, and reasons coherently. That's what separates transformative AI from expensive automation.

## What's Your Experience?

I'm curious about your experiences with agentic AI. Have you run into issues with any of these three capabilities? What frameworks or principles guide your approach to AI development?

I'd love to hear how you think about these problems—the best insights often come from practitioners sharing what they've learned in the trenches.
