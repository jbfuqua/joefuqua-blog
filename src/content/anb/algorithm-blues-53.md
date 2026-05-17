---
title: "The Skill Is the Supply Chain"
date: 2026-05-17
category: "algorithm-and-blues"
issue: 53
slug: "algorithm-blues-53"
excerpt: "Agent governance usually starts with the model, but the real execution happens through skills — packaged capabilities that may not do what they claim. A Palo Alto Networks study of 50,000 agent skills found 80% deviated from their declared behavior."
source: "website"
---

Agent governance usually starts with the model.

That makes sense. The model is the visible part. It answers the question, writes the summary, plans the workflow, calls the tool, and gets blamed when something weird happens. So we spend a lot of time asking whether it can follow instructions, resist prompt injection, stay inside boundaries, use memory appropriately, and perform well enough to trust in a real workflow.

Those questions are critical, but they don't cover the full execution path.

Agents act through tools, connectors, plugins, skills, actions, extensions, or whatever name the platform uses this quarter. That's where an agent's intent turns into a file read, an API call, a shell command, a customer action, or a change to a business record. It's also where the governance conversation can get too generic.

A recent paper from Palo Alto Networks looks at "AI agent skills," which are packaged capabilities an agent can use to perform tasks. The authors studied nearly 50,000 skills from the OpenClaw registry and found that 80% deviated from their declared behavior.

That doesn't mean they were all malicious. The authors suggest much of the mismatch came from ordinary development issues. That distinction matters, but it's not much of a safety argument. A skill doesn't have to be malicious to create risk. It only has to be poorly defined, over-permissioned, reused in the wrong context, or trusted because the description sounded reasonable.

The paper also estimates that almost 19% of the deviations reflected adversarial intent, and 5% carried predicted multi-stage attack chains. I wouldn't treat those numbers as universal constants. This is early research, based on one registry and one methodology. But the pattern is absolutely worth taking seriously, especially once you look at where the risk showed up.

Undeclared file reads or network calls were often identified as implementation drift. Still a control problem, but not necessarily an attack. The instruction layer, however, was a different story. Prompt overrides, identity hijacking, hidden directives in markdown, and similar patterns were adversarial 96% of the time. A missing line in a manifest may be sloppy, but a hidden instruction that changes how the agent behaves is something else.

That distinction is critical because skills aren't just documentation wrapped around a model. They may include code, instructions, API wrappers, access to files, network calls, credentials, shell commands, or business systems. Some may be built internally. Some may come from vendors. Some are acquired from marketplaces that feel more controlled than they actually are because the packaging looks official.

We've seen versions of this problem before. Open-source packages made reuse easy, then dependency risk became a serious enterprise problem. Browser extensions looked like conveniences until companies realized the implications of using them inside the work environment. Mobile apps forced enterprises to think about signing, entitlements, marketplace review, data leakage, and why the flashlight app needed access to contacts.

Agent skills aren't identical to those examples, but they belong to the same family. They're reusable packages of capability installed into an execution environment. The difference is that the boundary between description and behavior is blurrier. In ordinary software, documentation can be wrong and the code still does what the code does. With agent skills, the natural-language description, metadata, tool schema, embedded instructions, and executable code all become part of the operating surface. What looks like documentation can also shape execution.

So the governance question changes.

It's not enough to ask whether an agent is allowed to use a tool. We also have to ask whether the tool is telling the truth about itself.

That sounds simple until you try to turn it into a real control. You can approve the connector, restrict the API, review the use case, and still be trusting a skill description that no one has actually checked against the behavior. The process may look clean while the capability is doing more than it said it would do.

That's the main idea in the paper: behavioral integrity verification. In plain language, does this skill do what it claims to do, and only what it claims to do?

Most organizations are still working through the first layer of agent governance. Who owns the agent? What identity does it use? What can it access? What gets logged? When does a human step in? How do we test it before release?

Those are necessary questions, but they all assume the agent's capabilities are basically understood. The skill layer weakens that assumption.

Once teams start building their own skills, downloading vendor skills, wrapping internal APIs, and copying examples from repositories, this becomes a software supply chain problem. The thing being approved may not be exactly the thing being executed.

That means the skill manifest can't just be a reader-friendly description. It has to become part of the control surface. What the skill claims, what permissions it requests, what instructions it carries, what code it runs, and how it changes over time all need to be treated as governable artifacts.

I'm not implying that every skill needs a six-month review cycle and three steering committees. That would defeat the point. But someone has to own the integrity of the capability layer. Not "owned by the platform team" in the vague way every shared problem eventually lands there, but actual ownership of whether the skill does what it says it does.

We have some solid learnings from building effective data management and governance mechanisms. The effective ones didn't depend on central review of every table, field, and report. They created ownership, metadata, lineage, certification, issue management, and escalation paths. Skill governance probably needs a similar shape: enough structure to make trust possible, without turning every useful capability into a compliance archaeology project.

Of course, in this case the agent will still get most of the attention because it looks like the thing doing the work. But the skill is where a lot of the authority actually sits. It decides what gets called, what gets passed along, what gets read, and sometimes what gets changed.

That's why skill integrity belongs in the governance conversation early. In an agentic enterprise, a bad skill description is not just messy documentation. It can be the difference between the capability you approved and the capability you actually deployed.

*Algorithm & Blues publishes Sundays.*

📄 Behavioral Integrity Verification for AI Agent Skills, arXiv, submitted May 12, 2026: https://arxiv.org/abs/2605.11770
