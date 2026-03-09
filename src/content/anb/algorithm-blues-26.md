---
title: "Vol. 26 — The Difficulty Paradox"
date: 2025-11-09
category: "algorithm-and-blues"
issue: 26
slug: "algorithm-blues-26"
excerpt: "LLMs solve graduate-level math… but they also fail at basic logic. A new paper from Oxford explains why this happens and suggests important factors for evaluating models in production."
source: "linkedin"
---

LLMs solve graduate-level math… but they also fail at basic logic. A new paper from Oxford explains why this happens and suggests important factors for evaluating models in production.

https://lnkd.in/emHHiSDJ

Researchers trained probes on 60 models to decode internal representations of problem difficulty. They found that models strongly encode human-perceived difficulty (correlation ~0.88) but weakly encode their own performance patterns (~0.58). Oddly, they seem to understand what’s hard for us better than what’s hard for them.

The Discovery

When researchers pushed Qwen2.5-Math toward “easier” internal representations, accuracy improved and hallucination dropped. The model stopped hitting token limits with repetitive garbage (“legitim legitim legitim…”) and started generating working code with correct answers. They then pushed it toward “harder” representations and performance collapsed almost instantly.

The Twist

During reinforcement learning on math problems, something unexpected emerged. As the model improved, human-difficulty representations strengthened in correlation with accuracy. LLM-difficulty representations degraded.

The model learned to align with human judgment, not its own performance history. Rusty means that training on automated metrics derived from model behavior may be optimizing against a signal that becomes noisier as capability increases.

Enterprise Implications

Evaluation frameworks typically benchmark models against automated performance metrics. This research suggests those metrics become misaligned precisely when models get better. Human difficulty ratings provide a more stable target.

For governance:

• Probe difficulty representations, not just accuracy

• Use human judgment baselines alongside automated eval

• Route high-difficulty cases before the model attempts them

• Track representation drift during fine-tuning

For architecture:

• Build difficulty-aware routing into orchestration layers

• Expose internal confidence signals to downstream systems• Design fallback paths triggered by difficulty thresholds

• Treat uncertainty as operational metadata, not failure

The Implication

Models develop implicit metacognition they can’t articulate. Ask them to estimate difficulty and they fail. Extract it from activation patterns and it correlates strongly with human judgment. That gap between internal representation and external expression matters for how we integrate these systems.

We’ve been measuring what models say, clearly we should also measure what they know.

hashtag
#AlgorithmandBlues 
hashtag
#EnterpriseAI 
hashtag
#AIGovernance 
hashtag
#ModelEvaluation 
hashtag
#ReinforcementLearning
