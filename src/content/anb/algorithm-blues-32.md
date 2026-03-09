---
title: "Vol. 32"
date: 2025-12-21
category: "algorithm-and-blues"
issue: 32
slug: "algorithm-blues-32"
excerpt: "Conversations about AI tend to center on models… what they are, how powerful they’ve become, whether they’re explainable, whether they’re approved. That emphasis is understandable. It’s also increasin…"
source: "linkedin"
---

Conversations about AI tend to center on models… what they are, how powerful they’ve become, whether they’re explainable, whether they’re approved. That emphasis is understandable. It’s also increasingly incomplete.

If you want to understand how AI systems behave in production, following the data often tells you more than debating the model. Why? Because modern AI systems are highly sensitive to data integrity and provenance in ways most governance programs were not built to address.

Recent research from Anthropic shows that poisoning attacks on large language models can succeed with only a few hundred strategically placed documents, and that increasing model size does not reliably dilute the effect. The assumption that massive training sets naturally wash out contamination turns out to be weaker than many of us expect.

Many organizations are moving toward internal fine-tuning, retrieval augmented generation, and “bring your own knowledge base” architectures. Models are connected to policy libraries, procedures, product documentation, ticket histories, and call transcripts that reflect accumulated institutional memory. Because the data is internal, it is often assumed to be trustworthy. However, in practice, it is inconsistent, duplicated, stale, sometimes outdated, and shaped by local incentives.

Those characteristics used to surface as data quality issues. With generative AI downstream, they become behavior shaping issues.

This is the data supply chain problem in a new form. The question shifts from accuracy alone to provenance. Who touched the data, what changed, what was excluded, and what guarantees exist that it has not been quietly altered. Once AI systems begin summarizing and recommending from that material, governance moves from reporting toward control.

Regulators are beginning to reflect this shift. The EU AI Act includes explicit requirements around data quality and governance for high risk systems. NIST’s AI Risk Management Framework similarly treats risk as a property of systems operating over time, not something assessed by inspecting a model in isolation.

The practical implication is that training data, fine tuning sets, retrieval corpora, and enterprise knowledge need to be treated as governed assets, with provenance, access controls, change management, and auditability that match their role. When AI systems draw directly from enterprise knowledge, that material moves from reference to influence.

References
https://lnkd.in/eWN-Uasc
https://lnkd.in/eSUVRMXw
https://lnkd.in/e5CaY8uE
https://lnkd.in/e2yp4n-H

hashtag
#AlgorithmAndBlues 
hashtag
#DataGovernance 
hashtag
#AIGovernance 
hashtag
#EnterpriseArchitecture 
hashtag
#RiskManagement 
hashtag
#DataLineage 
hashtag
#ModelRiskManagement
…more
