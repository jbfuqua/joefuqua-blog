---
title: "Cheap Intelligence Is Ending"
date: 2026-06-10
category: "governance"
slug: "cheap-intelligence-is-ending"
excerpt: "The era of cheap, subsidized AI is ending, and metered intelligence is about to change what work costs for enterprises and for the people who do it."
source: "original"
---

The first couple of years of generative AI ran on a convenient assumption, that intelligence had become cheap enough to use without watching the meter. That was never quite true, but it lowered friction.

Developers, analysts, executives, and students could try things before anyone had time to build a business case. For a while now, AI has felt less like infrastructure and more like an always-available assistant that's priced like software.

For better or worse, that period is starting to close. GitHub Copilot has moved to usage-based billing, agents are running up token bills large enough to get finance involved, and executives who were once happy to fund experimentation are asking a more familiar question. What does this actually cost? Once AI moves into daily work, the cost moves with it, and what began as experimentation becomes part of the operating budget.

Fundamentally, AI is not free digital labor, even when early pricing made it feel that way. The cost of automating a task includes inference, context, retries, agent loops, integration, monitoring, review, error correction, compliance, and the person who owns the outcome. Plenty of work can be automated technically. Less of it is worth automating all the way.

For workers, that makes the story less apocalyptic than some forecasts suggest, though not exactly comfortable. AI will change jobs. It will shrink some tasks, reshape others, and put pressure on roles built mostly around repetition.

Token metering takes some air out of the clean replacement story. When AI absorbs work, it generally trades labor for compute, supervision, governance, and risk. That may still be a good trade, just not a free one. The demo shows capability. The operating model has to pay for reliability.

## The "Cheap Intelligence" Phase

Railroads got land grants. Telecom buildouts leaned on public policy. Cloud providers handed out credits to pull developers onto their platforms. A generation of internet companies burned venture money to make rides, deliveries, storage, and software feel cheaper than they actually were.

The pattern is an old one. New technology often gets adopted under one set of economics and operated under another.

The subsidies that have the most impact are not always obvious. A provider absorbs the cost, a business unit hides it in an innovation budget, a subscription smooths over how much is being consumed. However it happens, people begin working in a new mode before the bill catches up.

Generative AI has followed the same path, only faster. Most users don't have visibility to the infrastructure underneath it. They see a subscription box and a chat window. Pay a monthly fee, ask questions, draft documents, write code, debug, summarize, ad infinitum.

These tools have changed behavior because trying them cost so little. A developer can test an idea. An analyst can draft a summary. An executive can pressure-test a memo. None of that requires a procurement cycle or a business case.

The economics underneath, though not clear initially, are different. Every generated answer still depends on GPUs, inference serving, routing, context handling, and safety systems. The user sees a chat window and a monthly fee. The provider sees metered compute.

## The Subsidy Scarcity Curve

<figure>
  <img src="/images/cheap-intelligence-is-ending/fig1-subsidy-gap.svg" alt="Two cost curves across an adoption timeline labeled Subsidy, Dependency, Scarcity, Pricing, and Governance. A flat low line for what the user feels they pay sits far below a rising line for the true cost to serve. The shaded wedge between them is the subsidy, which closes abruptly when the felt line snaps up at the Pricing phase." />
  <figcaption>The subsidy gap. Metered pricing feels like a shock because the bill was always there.</figcaption>
</figure>

A new capability usually arrives at a price that encourages overuse. People try it because the cost feels small. Teams build around it because it's readily available. Vendors add features because adoption is growing. Before long, the tool is no longer an experiment, it's part of how the work gets done.

The constraint arrives after the fact. Sometimes it's compute. Sometimes energy, latency, premium model access, trust, or budget predictability. The details change from cycle to cycle, but the pattern does not. The market finds the scarce resource and starts pricing around it.

Flat rates give way to tiers, credits, quotas, throttles, and procurement rules. Then governance enters the picture because someone has to decide where the tool belongs, who pays for it, and whether the result is worth the burn.

AI is entering that part of the curve now.

## Tokens Become Visible

GitHub's 2026 billing change for Copilot puts tokens on the invoice. As of June 1, 2026, the product swapped premium request units for GitHub AI Credits, which burn down according to token usage across input, output, and cached tokens at model-specific rates. Basic completions are still bundled, while heavier work through chat, agents, and premium models now traces back to consumption.

This change hits the budget, but it also changes the feel of the product. Nobody opens Copilot to manage input tokens, output tokens, cached tokens, and model-specific rates. They ask it to finish a function, review a pull request, explain an error, or find defects.

That's where planning gets difficult. The business sees a task, but the platform provider sees everything behind the scenes required to complete it.

A simple prompt may cost almost nothing. An agent handling the same kind of work may pull context, call tools, retry after errors, and ask for confirmation before it commits. To the user, both look like one request. On the bill, they're not even close.

Tokens are measurable. Work is what the business cares about. The connection between the two is still elusive.

## Agents Change the Economics

Agents make the cost problem harder because they do more than respond to a prompt. They plan, make tool calls, check results, revise, retry, and keep going until they reach a stopping point. That's why they are interesting. It's also where the meter runs amok.

The first model call is rarely where the majority of the cost sits. It accumulates while the agent works through the task. It pulls context, calls tools, hits errors, tries again, and checks its own work before the user sees the result.

Early measurements are rough, but they point in the same direction. Stanford's Digital Economy Lab found agentic coding tasks using far more tokens than ordinary chat or reasoning queries, with much of the cost sitting in repeated context. Another study of multi-agent software work found review and refinement consuming the largest share of tokens, not initial code generation.

That complicates the labor substitution story. Agents are often sold as a clean trade. The model does the work, the human steps back, and the company keeps the difference. In actual workflows, the model handles part of the job and creates new work around review, exceptions, debugging, and oversight. Sometimes that trade pays. Sometimes it just moves cost from payroll to inference, supervision, and risk.

A poorly bounded agent can seem like automation while behaving like delegated spend.

Agents become viable when the discipline around them is strong enough. Budgets, boundaries, and stopping rules separate leverage from a runaway bill.

## The Real Cost of Automation

Reliable work is what an organization should pay for. The prompt, the model call, the token sequence, and the demo are just the visible inputs to the cost equation.

The model call is only the easiest part to see. The rest of the bill sits around it, in the context prepared for the model, the integration work around the workflow, the review process behind the answer, the latency users accept, the compliance requirements attached to the task, and the person who's accountable when the outcome is unacceptable.

Cloud went through its own version of this correction. Early programs were often sold as cheaper infrastructure, then companies learned that elasticity without discipline turns into spend volatility. Cloud obviously didn't fail. It grew up, and FinOps arrived because the economics needed a reliable management model.

With AI, the accounting problem is somewhat more challenging. Cloud spend at least maps to familiar resources like compute, storage, and bandwidth. AI spend blends context length, reasoning depth, model choice, retrieval quality, tool use, retries, and human review into one bill.

That difference is easy to miss when teams only see the output. The cost is shaped by all the work the system did before the answer appeared.

## From Adoption to Utilization

Early AI programs produce activity data before they produce value data. Prompts, tokens, seats, and agent trials are easy to count. They can tell you whether people are experimenting, which is a reasonable thing to know at the beginning.

They get less insightful once the tool becomes part of work. High token usage might mean a team is moving faster. It might also mean people are reaching for premium models out of habit, stuffing every request with context, running agents without stopping rules, or producing output someone else has to repair.

Tokenmaxxing is a telling name for the behavior. Cognizant CEO Ravi Kumar has called token consumption a vanity metric, and Charles Holive, who runs AI at BNP Paribas CIB, made the same call to Business Insider, saying his team tracks outcomes rather than raw token counts. The point is accurate because inputs are not outcomes. Counting how much AI ran through the system doesn't tell you whether work actually improved in any meaningful way.

A better measurement protocol starts closer to the workflow. Which tasks deserve a premium model? Which ones run fine on a cheaper one? Where does review erase the gain? Where does output create rework? Where are agents looping or expanding their own scope?

That's the turn from adoption to utilization. The dashboard has to move from activity to the economics of the work.

## The Labor Equation

The employment debate has moved too quickly from task automation to job loss. A model can draft the summary, classify the ticket, write the first version of the code, or answer the routine question, so the work is treated as halfway gone already.

Some of that pressure is real. Work does break into tasks, and AI can already handle pieces of knowledge work that used to require people. Roles built around repetitive production will feel it first.

The missing piece is cost. Once AI is metered, the economics of replacement become harder to wave away. A task that needs cheap inference, low supervision, and limited review may move quickly. A task that needs long context, premium models, repeated retries, regulatory cover, and a human still willing to own the answer starts to look different.

The last 10 percent of reliability can cost more than the first 70 percent of automation is worth.

<figure>
  <img src="/images/cheap-intelligence-is-ending/fig2-last-ten-percent.svg" alt="A cumulative cost curve against share of task automated from zero to one hundred percent. The line rises gently through the first seventy percent then bends sharply upward toward one hundred percent, with the steep tail shaded. A bracket labels the first seventy percent as cheap to automate, and the steep tail as where the cost lives." />
  <figcaption>The cost of the last 10%. The cumulative cost of automating one task from end to end.</figcaption>
</figure>

A lot of enterprise work lives near that steep part of the curve. The first draft and the generic summary were rarely the whole job. Value shows up in judgment, exception handling, risk ownership, institutional memory, and the ability to see when a plausible answer still is not ready to use.

AI will put the most pressure on work with little of that in it. It may also raise the value of people who know how to turn machine output into work the organization can trust.

## The Human Premium

During the cheap phase, AI was easy to describe as an infinitely scalable junior hire. The metaphor had a short shelf life. Junior people learn the business, absorb the culture, build judgment, and eventually become senior people. AI produces output. Some of it is excellent, some of it is cheap, some of it is expensive, and some of it is wrong in ways that look convincing.

Companies still need accountable judgment where errors cost money, reputation, regulatory standing, or customer trust. That is where human work remains hard to price out of the system.

The work starts to sort into different patterns. High-volume, low-risk, repeatable tasks can become machine-led. Research, drafting, analysis, reporting, and coding may stay human-led with AI moving the work faster. Agents will often sit in the middle, doing more of the work while a person supervises, checks exceptions, and owns the final call.

Some work will stay mostly human because automation costs more than it saves, or because accountability can't be handed off cleanly. The mix is more important than the label. A workflow may use labor, inference, review, and control in different proportions. The point is whether that mix produces work the business can trust at a cost it can defend.

<figure>
  <img src="/images/cheap-intelligence-is-ending/fig5-map-of-work.svg" alt="A two-by-two map of work. The horizontal axis is volume and repeatability and the vertical axis is cost of error and accountability. Labelled bubbles place example tasks in each quadrant, sized by AI cost intensity. Machine-led work, high volume and low error, includes document data entry and ticket triage as small bubbles. AI-led work under human supervision, high volume and high error, includes tier-1 support chat and a large agentic-code-review bubble flagged as where the meter runs hottest. Human-led work with AI, low volume and low error, includes analyst memos and first-draft decks. Human-only work, low volume and high error, includes regulatory filings and a tiny board-level-decisions bubble. The largest AI-cost bubbles cluster in the supervised-agent quadrant while the human-only corner stays small." />
  <figcaption>The map of work. Example tasks placed by volume and accountability and sized by AI cost. The biggest bills cluster where agents loop under supervision, and the human only corner barely moves the meter.</figcaption>
</figure>

## A Planning Problem

AI doesn't fit neatly into the way enterprises usually plan. The workforce plan lives in one process, the technology budget in another, and risk, architecture, procurement, and finance each have their own calendars. AI cuts across all of them, which is why the seams show so quickly. The business wants productivity, technology must manage platform cost, finance monitors volatility, risk looks for control failures, HR validates headcount assumptions, and employees are told to use AI without much guidance on what good use looks like. That's how companies end up with scattered pilots, fuzzy savings, rising tool bills, and a lot of AI activity that never quite leads to measurable operating results.

The way out is to treat AI as a resource planning problem. Inference becomes one more scarce production input, alongside labor, capital, time, attention, and risk capacity. Procurement has to expect usage growth, workforce plans have to assume roles will be redesigned before they are reduced, finance has to see cost at the workflow level, and risk has to know where humans remain accountable. A serious AI agenda has to survive contact with the operating model, including cost, risk, review, procurement, and the people still accountable for the work.

## Scarcity Returns

Falling token prices do not remove the planning problem. They make it more interesting.

The optimistic case has evidence behind it. One analysis estimated roughly a 600-fold drop in token prices since 2020, with economy and mid-tier models becoming cheaper faster than Moore's Law would suggest. Open-weight models are improving, competition is intense, and a given level of performance should keep getting cheaper.

Lower prices move the boundary of what teams are willing to try. Longer context, more agents, persistent memory, tool calls, monitoring, and broader automation all become easier to justify once inference gets cheaper.

The hardest workflows may also keep reaching for the expensive end of the market. Flagship reasoning models still carry a premium, and those are the models companies tend to want when the task is complex, regulated, high-stakes, or ambiguous. The unit price may fall while total demand rises.

The bill can still climb if token-heavy workflows expand faster than prices fall. Cheaper inference may be ahead, but governed inference will still be something companies have to allocate.

## Advice for Leaders

Slowing adoption is the wrong lesson. The better move is to make AI use economically literate, which means scoring it on whether cost, quality, speed, resilience, and risk improved rather than on how much activity it generated.

A practical agenda looks like this.

- Build cost models at the workflow level, tied to processes, products, teams, and outcomes.
- Classify work by economic fit. Some tasks deserve frontier models. Some run well on cheaper models. Some belong in deterministic automation. Some should stay human. Some should probably be eliminated before anyone tries to automate them.
- Design review with a purpose. Improving quality, reducing risk, and satisfying policy are different jobs. Treating them as one generic review step hides cost.
- Treat agents as economic actors. Give them budgets, boundaries, stopping rules, and observability. Autonomy without cost control is delegated spending.
- Redesign roles before promising savings. A tool that trims task time while adding review, coordination, and exception handling may change the staffing model more slowly than the demo suggests.

More mature organizations will know where AI deserves the spend, where cheaper models are enough, and where the human step is still earning its place.

## Advice for Workers

For workers, the safer ground is where AI output still needs human judgment to become usable work. AI will keep absorbing tasks, and pretending otherwise is a bad bet. The better move is to build skill around that handoff.

That means knowing how to frame a problem, choose the right size of model, provide the right amount of context, and recognize when an agent helps or just adds motion. It also means checking the output, catching plausible nonsense, handling exceptions, and explaining the result to the person who owns the risk.

Prompting still matters, but the key skill is orchestration. The valuable skill is knowing when the machine output is good enough, when it needs work, and when it should not be used at all.

Once AI runs on a meter, knowing when to leave it switched off becomes part of the craft.

## The New Equilibrium

Anyone who mistook an introductory price for a permanent one is going to be disappointed. That may be healthy for the market.

Price visibility changes the conversation. It makes overuse easier to spot, hidden costs harder to ignore, and lazy replacement math harder to defend. The question becomes less theatrical and more operational. Where does AI improve the work enough to justify the cost?

Pricing will not send AI back to the lab. Too many teams already use it, and the tools keep getting better. What pricing does change is the replacement story. Once the meter is visible, the path looks less like wholesale substitution and more like uneven automation, new bottlenecks, stronger controls, and more demand for judgment.

Some work will go away. More of it will be redesigned. The most valuable roles will be the ones that sit above a larger machine-mediated system and know how to turn its output into work the organization can trust.

The first wave of AI adoption asked what machines could do. The next one will ask what machine work is worth.

---

## References

[1] GitHub, "GitHub Copilot is moving to usage-based billing," GitHub Blog, April 2026 (effective June 1, 2026).

[2] GitHub Docs, "Usage-based billing for organizations and enterprises," accessed June 2026.

[3] Reuters Breakingviews, "Corporate AI sticker shock will force restraint," June 2, 2026.

[4] Stanford Digital Economy Lab, "How are AI agents spending your tokens?" May 2026.

[5] Salim, Latendresse, Khatoonabadi, and Shihab, "Tokenomics: Quantifying Where Tokens Are Used in Agentic Software Engineering," arXiv:2601.14470, January 2026.

[6] Zhu, "Agentic AI Systems Should Be Designed as Marginal Token Allocators," arXiv:2605.01214, May 2026.

[7] Du, "Tiered Super-Moore's Law: Price Evolution, Production Frontiers, and Market Competition in Large Language Model Inference Services," arXiv:2603.28576, March 2026.

[8] Fortune, "Cognizant CEO is swimming against the tide on AI: he's hiring over 20,000 graduates this year and says AI tokenmaxxing is a 'vanity metric,'" June 1, 2026.

[9] Business Insider, "An AI chief for one of the world's largest banks says tokenmaxxing is a 'vanity metric,'" June 2026 (Charles Holive, chief AI officer, BNP Paribas CIB).

[10] Business Insider, "I asked 4 executives how they measure AI ROI. None started with AI tokens," June 2026.
