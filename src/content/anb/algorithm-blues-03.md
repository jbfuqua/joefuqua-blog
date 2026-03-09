---
title: "Vol. 3 – Growing Models Without Starting Over"
date: 2025-06-01
category: "algorithm-and-blues"
issue: 3
slug: "algorithm-blues-03"
excerpt: "One of the biggest challenges with today’s language models is that scaling usually requires starting fresh—burning through massive compute budgets just to increase model size or improve performance. B…"
source: "linkedin"
---

One of the biggest challenges with today’s language models is that scaling usually requires starting fresh—burning through massive compute budgets just to increase model size or improve performance. But what if we could scale models incrementally, adding capabilities piece by piece without losing our initial investment?

That’s the idea behind Microsoft’s recent paper introducing Chain-of-Model (CoM) learning.

Here’s the gist:
 • Incremental Growth: Rather than training entirely new models, CoM learning allows you to start small and gradually extend your model by adding new segments or “chains”. Each chain builds directly on the previous ones without retraining everything from scratch.

 • Built-in Flexibility: With this method, you can dynamically choose how many chains you activate during inference—meaning you can easily adjust between speed (fewer chains) and accuracy (more chains) depending on your needs.

 • Cost and Compute Savings: Because you reuse existing weights and add new capabilities incrementally, there’s a significant reduction in compute costs and faster deployment cycles.

 • Enhanced Efficiency (CoLM-Air): The paper introduces a key-value sharing approach called CoLM-Air, which substantially boosts inference speed (up to 27x faster for long contexts) and reduces memory overhead.

Why it’s relevant:
 • Financial Impact: Organizations are increasingly scrutinizing AI budgets. Incremental scaling reduces the capital expenditures associated with large-scale retraining.

 • Operational Flexibility: Different teams or organizations (e.g., financial institutions, healthcare providers, or gaming companies) can tailor performance levels dynamically from a single foundational model.

 • Strategic Scaling: CoM learning challenges the conventional scaling playbook— structural reuse may become a more critical factor in managing compute costs and model efficiency.

Final thoughts:
By starting small and systematically adding chains, you can run low‑risk pilots on domain‑specific datasets, measure compute and time savings, and observe how throttling chain counts in production impacts the latency‑accuracy balance. Versioning checkpoints by chain count also slots neatly into existing MLOps workflows, enabling teams to trace incremental gains without ballooning model inventories.

hashtag
#AlgorithmAndBlues 
hashtag
#AI 
hashtag
#IncrementalScaling 
hashtag
#LanguageModels

https://lnkd.in/evs6t4Sj
…more
