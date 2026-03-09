---
title: "Quantum Computing, Commercial Viability, and the Reality of “Maybe Never”"
date: 2025-12-31
category: "governance"
slug: "quantum-computing-commercial-viability-reality-maybe-never"
excerpt: "I’ve sat through a lot of quantum computing briefings over the past five years. Vendor pitches. Research updates. Board presentations. They all share a common feature, and that is that nobody wants to…"
source: "linkedin"
---

## (For those of us building technology strategies)

I’ve sat through a lot of quantum computing briefings over the past five years. Vendor pitches. Research updates. Board presentations. They all share a common feature, and that is that nobody wants to say the obvious thing out loud.

So here it is…

We may be preparing for a revolution that never comes.

A growing body of serious research suggests that **commercially viable, large-scale quantum computing may remain permanently out of reach**, at least in the form we’ve been planning for.  This is coming from credible research groups, and it’s becoming harder to ignore. No physical law forbids scalable quantum computation; but, theory and commerce are different disciplines, and the gap between them keeps widening.

Here’s what I think is worth understanding more deeply.

## What’s Working (and What’s Not)

Let’s start with what’s real.

The meaningful progress in quantum computing over the past few years has come from improvements in **error handling vs. algorithms and outcomes**. Early machines demonstrated control but not scalability as noise increased faster than capability. Every qubit added made the system worse in terms of stability and overall performance.

That’s beginning to change, at least in controlled laboratory conditions.

**Google Quantum AI** demonstrated that larger logical constructions using surface-code error correction can suppress errors rather than amplify them (<https://arxiv.org/abs/2207.06431>; Nature, 2023). **Quantinuum** has focused on coherence and connectivity in trapped-ion systems, prioritizing logical qubit fidelity over raw scale ([https://www.quantinuum.com/press-releases/introducing-helios](https://www.quantinuum.com/blog/introducing-helios-the-most-accurate-quantum-computer-in-the-world?utm_source=chatgpt.com)). **IBM** has walked away from NISQ optimism entirely and pivoted toward fault-tolerant architectures using qLDPC codes (<https://www.ibm.com/roadmaps/quantum/>).

These results demonstrate something important, that error correction **may be physically** possible. They do *not* demonstrate, however, that it will be economically viable, operationally stable, or commercially scalable. Those are different questions. And the answers to all of those may be an unsatisfying “no.”

## Mainstream Scepticism

Something has shifted in the literature over the last few years. Researchers stopped asking *when* large-scale quantum computers would arrive and started asking *whether* they ever would.

The skepticism comes in several forms, all legitimate.

### Prohibitive Overhead

Even optimistic resource estimates for useful fault-tolerant algorithms require hundreds of thousands to millions of physical qubits, sustained error rates below thresholds barely achievable in lab conditions, and control complexity that grows faster than most organizations are prepared to acknowledge.

Take Gidney and Ekerå’s 2019 estimate for factoring RSA-2048 using Shor’s algorithm (<https://arxiv.org/abs/1905.09749>). This paper is often cited as evidence that the quantum threat is imminent. Read it carefully. It assumes engineering advances that remain unproven and does not meaningfully address cost, reliability, or operational constraints.

It’s a best-case scenario for a single problem. And even the best case looks daunting.

### Vanishing Quantum Advantage

We were promised portfolio optimization breakthroughs, routing algorithms that would transform supply chains, drug discovery rewritten by quantum simulation.

What we mostly have are papers, proofs of concept that don’t scale and vendor demos where classical co-processors do the heavy lifting.

Multiple surveys now argue that most enterprise problems don’t benefit from quantum speedups, even in theory. Preskill’s NISQ framing makes the constraints explicit (<https://arxiv.org/abs/1801.00862>). And Aaronson’s survey of what kinds of problems admit *huge* quantum speedups points to a narrow set of structured problem classes rather than broad enterprise workloads (<https://arxiv.org/abs/2209.06930>).

That’s not a roadmap, it’s a research agenda.

### No Proof

The threshold theorem still holds (<https://en.wikipedia.org/wiki/Threshold_theorem>). There is no known physical law that says scalable quantum computation *cannot* work.  But absence of a proof of impossibility is not evidence of eventual success. We learned that lesson with fusion energy, and we’re seeing it again with quantum.

The U.S. National Academies put it plainly:  “*There is no known fundamental physical reason a quantum computer cannot be built, but the technical challenges are formidable and unresolved*” (<https://nap.nationalacademies.org/read/25196/chapter/9>).

That pretty much sums it up.

## Cryptography and Ultra-Hype

If quantum computing has achieved any commercial impact so far, it’s in selling post-quantum cryptography based on threats that don’t exist yet and may never materialize at scale.

Let’s be precise about the facts.

Shor’s algorithm has only been demonstrated on very small integers in implementations meant to generalize, including the well-known N=21 experiment on IBM quantum processors (<https://arxiv.org/abs/2103.13855>). Hybrid quantum-classical approaches have factored larger integers—for example, a 48-bit demonstration using 10 superconducting qubits—but these methods do not scale like Shor’s and do not constitute a near-term threat to real-world cryptography (<https://arxiv.org/pdf/2212.12372>).

Quantum computing is not a present-day cryptographic threat. Mic drop.

But… and this matters… long-lived data *is* exposed to future decryption. That’s why post-quantum cryptography is rational regardless of quantum timelines. For financial services, this is why crypto agility, inventory management, and alignment with NIST PQC standards (<https://csrc.nist.gov/projects/post-quantum-cryptography>) make sense.

This is governance, not panic… and certainly not a reason to fund quantum pilots.

## Where quantum might still matter

Even skeptics tend to agree on one point.  If quantum computing becomes useful anywhere, it will be outside traditional enterprise IT.

The strongest case remains quantum chemistry and materials science, where classical simulation faces exponential barriers. Reiher’s 2017 PNAS paper on reaction mechanisms (<https://www.pnas.org/doi/10.1073/pnas.1619152114>) outlines problem classes where quantum approaches have genuine theoretical advantage.  This isn’t a banking use case, but it may reshape industries we finance, insure, and depend upon.

Optimization and finance-adjacent workloads remain speculative and heavily constrained. When vendors pitch quantum solutions to your problems, treat those claims as hypotheses, not roadmaps. Ask for production timelines. Ask for cost models. Watch how quickly the conversation shifts to “exploratory partnerships.”

## My Humble Opinion

We need to stop putting quantum computing on transformation roadmaps and start putting it in three quieter places.

### Risk and Cryptographic Governance

Analyze data longevity. Plan post-quantum migration. Do this because it’s good cryptographic hygiene—not because you believe quantum computers are about to break your encryption.

### Executive Literacy

Understand enough to resist vendor narratives. When someone pitches a quantum optimization pilot, ask why classical methods aren’t sufficient. Then ask for a cost-benefit analysis that assumes the quantum system is expensive, fragile, and frequently unavailable.

### Patience

Engage through standards bodies and research partnerships, not pilots. Track progress in narrow scientific domains. Don’t build internal quantum teams unless you’re in pharmaceuticals or materials science—and even then, partner rather than own.

The biggest risk we face is spending the next decade preparing for one that may never arrive while our competitors invest in technologies that actually work.

## The Ugly Truth

Quantum computing may succeed spectacularly in narrow scientific domains. It may remain permanently impractical as a general commercial technology.

Both outcomes are consistent with current evidence.

That ambiguity is  a signal that physics is in control, not spin doctors. And in financial services in particular, it’s important to understand the difference.  The correct posture for technology leaders is informed restraint.

In a landscape dominated by certainty theater, that may be the most strategic position available; it’s also the hardest one to hold, especially when peers are announcing quantum partnerships and the Board is asking about quantum strategy.

There’s discipline in deciding not to plan around technologies that may never cross into practical use.

Long-term success depends on that discipline more than it does on excitement.
