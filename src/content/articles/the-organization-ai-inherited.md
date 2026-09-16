---
title: "The Organization AI Inherited"
date: "2026-09-16T12:00:00-04:00"
category: "governance"
slug: "the-organization-ai-inherited"
excerpt: "AI can speed up individual tasks while adding work elsewhere. Real productivity gains may require enterprises to rethink how work is organized and measured."
source: "original"
ogImage: "/images/the-organization-ai-inherited/the-organization-ai-inherited-hero.png"
ogImageAlt: "Editorial cutaway of an older office building with a red machine producing work that passes through existing desks, stairways, and paper handoffs, beside the title The Organization AI Inherited and the byline Joe Fuqua."
---

*AI can accelerate individual tasks while increasing the effort required elsewhere. Capturing its full potential may require replacing parts of the operating model around those tasks.*

<figure class="article-hero">
  <a href="/images/the-organization-ai-inherited/the-organization-ai-inherited-hero.png">
    <img src="/images/the-organization-ai-inherited/the-organization-ai-inherited-hero.png" alt="Editorial cutaway of an older office building with a red machine producing work that passes through existing desks, stairways, and paper handoffs, beside the title The Organization AI Inherited and the byline Joe Fuqua." />
  </a>
</figure>

The software developers in METR’s early-2025 experiment brought their own work to the study. They’d spent years contributing to the projects involved, and the assignments were fixes and features they already intended to complete. Researchers randomly assigned 246 tasks to be performed with or without access to AI. After doing the work, the developers believed the tools had made them about 20% faster.

The measured result was a 19% slowdown. [1]

Only 16 developers took part, working with early-2025 tools in familiar codebases. METR’s subsequent work suggested that newer tools might help more, although participation and task-selection problems prevented a reliable estimate. Developers who didn’t want to work without AI were increasingly avoiding the study or withholding certain assignments. The earlier result remains a reason to question productivity estimates built from employees’ impressions, even as the tools and their uses change. [2]

Once a change reaches the review stage, someone else has to assess the implementation and decide whether it’s acceptable. A change produced more quickly with AI may still take longer to review than a comparable change produced without it. Defects discovered after release can add further work, sometimes months after the project has recorded its savings. By then, the team performing the repair may have had no part in the decision to adopt the tool.

It's reasonable to think that hiring more reviewers might help, but that would also commit the enterprise to supporting the existing approach to delivering software with additional staffing. Before adding that capacity, I’d examine how the work is organized. If AI can perform much of the implementation, there may be less need to divide the work among the same roles or pass it through the same sequence of handoffs.

All of this suggests that enterprises should be prepared to replace substantial parts of their operating model and test the replacement against what it costs to deliver the same outcome today. Disappointing results from adding AI to existing jobs give a sufficient reason to investigate, but no assurance that a larger reorganization will succeed.

## Follow the work beyond the task

At Microsoft, Accenture, and another large company, researchers found evidence that coding assistants helped developers complete more work. Zheyuan Cui and his coauthors combined three randomized experiments involving 4,867 developers and estimated about 26% more completed tasks among those using the tool. Results varied across the experiments, and the pooled estimate had substantial uncertainty, but the study provides evidence of productivity gains in these corporate settings. [3]

That finding is difficult to reconcile with METR’s slowdown without looking more closely at what each study measured. METR’s experienced developers worked in repositories they already knew, continuing until they believed their changes would pass review, including testing and documentation requirements. Cui and his colleagues measured completed tasks within company workflows. The studies therefore differ in both the work being done and the conditions under which AI was used. A business trying to forecast its own gains would need to understand how closely its developers, assignments, and standards for completion resemble those in either experiment. [<a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/">1</a>, <a href="https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/">3</a>]

Beyond task completion, Google’s 2025 DORA analysis examined how AI adoption related to software delivery throughput and stability. Greater AI adoption was associated with higher throughput, but also with lower delivery stability. Organizations could be delivering more software while experiencing more trouble keeping those changes reliable. Because the analysis was observational, it couldn’t establish whether AI caused either outcome or whether the additional work of dealing with instability outweighed the gains from faster delivery. [4]

A separate experiment by Markus Borg and his colleagues examined what happened when developers had to build on code someone else had produced with AI. One group added functionality to a Java application; a second group then extended those solutions without AI. Across the two-stage study, 151 people participated, most of them professional developers. In the randomized second stage, the researchers found no statistically significant difference in completion time or code quality between developers extending AI-assisted work and those extending work produced without it. [5]

Within that experiment, the anticipated maintenance penalty didn’t appear. The researchers followed only one subsequent change, however, using code produced in late 2024. That leaves years of maintenance and the effects of newer coding agents untested. [5]

<figure>
  <a href="/images/the-organization-ai-inherited/figure_1_evidence.png">
    <img src="/images/the-organization-ai-inherited/figure_1_evidence.png" alt="Four software studies report different outcomes: Cui and coauthors estimate 26% more completed tasks; METR finds 19% longer completion time; DORA associates AI adoption with higher throughput and lower stability; Borg and coauthors detect no significant difference in subsequent change time or quality. The findings are not a single comparable productivity measure." />
  </a>
  <figcaption>Figure 1. Study results measure different outcomes and cannot be combined into one enterprise productivity estimate. Sources: references 1–5.</figcaption>
</figure>

These findings leave a gap between what researchers can observe in a particular setting and what a business needs to know about its investment. Evidence that developers complete more tasks doesn’t tell the business how much effort those tasks will require before they’re in production and working reliably. Evidence of delivery instability, meanwhile, doesn’t establish that the costs outweigh the additional output. Both findings could describe parts of the same operation.

The difficulty is that the gains and costs may be recorded by different people, at different times. A development team might report time saved before reviewers have assessed the work or support staff have dealt with its consequences. Each team’s account may be accurate, while the enterprise still lacks a clear picture of whether it has gained capacity.

Suppose an AI-assisted implementation saves ten hours but creates ten additional hours of review and correction. Across that assignment, no labor capacity has been released. If the extra work falls to an engineer whose expertise is already in short supply, other projects may also wait longer for that person. The original task can seem more productive even as it adds to delays elsewhere.

That pressure can arise even when the code quality is acceptable. Producing twice as many changes may require twice as much ordinary review, without making any individual reviewer less effective. If review capacity stays the same, work accumulates while developers continue submitting changes. Their output measures can improve throughout the period in which the backlog grows.

Once the changes reach production, further costs may appear in the support budget vs. the development budget. Outside services can absorb some of the work, allowing a staffing reduction to appear as a saving (unless the replacement costs are included). Understanding AI’s contribution therefore requires following the work across these boundaries, far enough to see whether the initial savings translate across delivery, operation, and subsequent correction.

<figure>
  <a href="/images/the-organization-ai-inherited/figure_2_effort.png">
    <img src="/images/the-organization-ai-inherited/figure_2_effort.png" alt="Hypothetical effort for the same delivered capability totals 70 hours with or without AI. Without AI, implementation takes 40 hours, review and integration 20, and correction and maintenance 10. With AI, the corresponding values are 20, 30, and 20. Twenty hours saved are offset by twenty hours added downstream." />
  </a>
  <figcaption>Figure 2. Author illustration, not empirical findings. Implementation savings are fully offset by additional downstream effort in this hypothetical example.</figcaption>
</figure>

## Question the arrangement around the work

An AI assistant assigned to each existing role can help teams without changing the organization’s assumptions about how a job gets done. That may be worthwhile on its own. It also leaves much of the enterprise unexamined, including the departments and approval sequences built around the current division of labor.

In software delivery, requirements generally pass from the team requesting a change to those interpreting it, then to implementation, testing, and review. Some separation provides independent scrutiny. Some allows specialists to divide a complex assignment. Each transfer can also require someone to reconstruct context and decide what the previous group intended.

Now consider an arrangement in which the business’s required behavior and the conditions it must preserve are maintained in a shared specification. Where those conditions can be tested, they become acceptance criteria before implementation begins. Agents work through implementation and correction in a controlled environment. Teams resolve ambiguous requirements and examine consequential changes, with the team responsible for the service deciding whether the evidence supports release.

In that arrangement, a document whose main purpose was to transfer requirements might disappear. An approval could become a check performed during execution, where that check provides adequate assurance. Work previously divided among departments could remain with a team responsible for the service throughout its operation. Capacity planning would have to account for the team’s ability to specify and assess changes as well as the agents’ ability to produce them.

None of this makes assurance inexpensive by assumption. Someone must determine whether the acceptance criteria capture what the business needs. An agent writing both code and tests can reproduce the same misunderstanding in each, so passing the tests may demonstrate consistency with a mistaken requirement. It is critical that independent checks and production feedback are funded alongside implementation. For changes whose consequences are difficult to test, direct human review may continue to account for much of the effort.

<figure>
  <a href="/images/the-organization-ai-inherited/figure_3_operating_model.png">
    <img src="/images/the-organization-ai-inherited/figure_3_operating_model.png" alt="The existing sequence passes work from requirements through implementation and review to release. The proposed model uses a shared specification, an execution and acceptance loop owned by one service team, and bounded release with production feedback. Human judgment sets constraints and authorizes consequential decisions." />
  </a>
  <figcaption>Figure 3. Author’s proposed operating model. Its productivity benefits remain to be tested against the current operation and AI assistance within it.</figcaption>
</figure>

Eliminating a handoff also brings the budgets and positions attached to it into the discussion. A manager may need to give up a stage of work their department has always performed. The decision about whether that stage is still needed will, by necessity, extend beyond the people running the technology pilot.

In a customer-service operation, that discussion might concern an account-related approval. An agent could assemble the records for a dispute and prepare a resolution, then wait for an employee to reconstruct the case before approving it. Allowing a defined category of cases to proceed within established limits would change the employee’s role. The person would handle cases outside those conditions and examine whether the automated decisions were performing as intended.

Once routine cases are removed, the remaining work could be dominated by ambiguity and disagreement. Using the old average handling time to calculate how many employees are needed would overstate their capacity. Training and staffing would have to reflect the harder case mix, and the business would need to track customers who returned after an apparently successful resolution. Otherwise, a fast closure could send the same problem back into the workflow, requiring another employee to get involved and for the customer to start again.

## The economy-wide gains remain an open question

The scale of these proposals is well beyond much of the adoption captured in business surveys. A Census working paper using observations from November 2025 through January 2026 found that 18% of firms used AI in at least one business function. Among adopters, 57% used it in three or fewer functions, and 66% used it solely to augment tasks. Those figures describe limited deployment across much of the economy, rather than a broad test of what redesigned enterprises might achieve. [6]

Worker surveys offer another way to estimate the effect, although they rely on people judging how long their work would have taken without AI. In November 2025, Alexander Bick, Adam Blandin, and David Deming translated reported time savings into a potential labor-productivity level gain of up to 1.3% since ChatGPT’s introduction. The figure comes from a production model using those responses; it isn’t a directly identified national effect or an annual growth increment. [7]

There’s room for a larger contribution as deployment spreads, but its size depends on how much additional output the economy produces for the resources consumed. A company winning sales from a competitor hasn’t necessarily increased total production by the same amount. Nor does a reduction in one firm’s labor input establish an economy-wide saving if the work moves to a supplier. The accounting problem extends from teams to firms and then across the economy.

Rebuilding an operation also consumes resources before it produces returns. Erik Brynjolfsson, Daniel Rock, and Chad Syverson’s productivity J-curve research explains how complementary investments in processes and skills can precede a technology’s benefits and complicate their measurement. It provides a reason to allow for delayed returns. Whether a particular redesign will produce them still requires evidence, including a credible account of what should improve as the investment matures. [8]

## Compare the operating models

The evidence leaves executives with a difficult investment decision. AI can help teams complete more work, but further gains may depend on arrangements the enterprise hasn’t yet built. Waiting for certainty carries a cost; reorganizing around an assumed benefit does too. A bounded experiment gives the business a way to investigate a substantial change before committing the wider operation to it.

I’d choose a business capability whose outcome can be followed through completion, such as resolving a category of disputes or delivering changes to a particular service. Within that scope, the team would compare the current operation with two alternatives: AI assistance inside the existing arrangement and an arrangement designed around what AI makes possible. Including both alternatives is essential to the argument for redesign. If adding the tool produces most of the benefit, a larger reorganization may be unnecessary. If the redesigned operation performs better, the business has a reason to examine which changes contributed to that improvement.

That comparison only holds if each arrangement is responsible for the same outcome. A dispute hasn’t necessarily been resolved because an initial response has been sent; repeat contacts and reversals may reveal work still to be done. A software change needs to be followed through release and a defined period in production. In either case, the evaluation would include effort from contributing teams, even when their costs fall outside the sponsor’s budget. Randomized assignment or a phased rollout with a credible comparison group, where practical, would help distinguish the effect of the new arrangement from an easier mix of work or a change in demand.

Following the work this far also reveals how much authority the experiment requires. A team can change how it performs its own tasks and still have little control over the handoffs that determine delivery. If the proposed design eliminates a handoff, the receiving department has to help build the replacement. If it removes a recurring approval, someone must agree on the evidence that will provide assurance instead. The executive sponsor would need to bring those decisions within the experiment’s scope. Otherwise, the business could end up testing a new tool while believing it had tested a new operating model.

The team handling exceptions belongs in that design work from the beginning. Automating routine cases may leave them with fewer cases overall but a much harder working day, which changes the capacity the operation needs. It also limits what an early success can establish. A pilot restricted to uncomplicated disputes might justify expanding that particular application. Extending it to disputes with incomplete records or ambiguous circumstances would require further evidence, and perhaps a different arrangement.

As those results accumulate, enthusiasm for the redesign can make its shortcomings easier to explain away. Agreeing in advance on the conditions for expansion, revision, or stopping gives the sponsor a basis for judging what has actually been achieved. If correction repeatedly absorbs the initial savings, the next phase needs a credible way to reduce that burden. Future models may help, but an investment that depends on their arrival rests on a different premise from one supported by demonstrated gains.

When reviewing the results, I’d want to hear from the employees who handled the difficult cases and dealt with problems after release. They could help explain why a smaller team was delivering more, or why an apparently successful pilot had left the operation struggling. If they were spending their days repairing work already counted as complete, the evaluation would still be missing part of the cost. Their experience should influence both the decision to expand and the design of whatever comes next.

The larger implication is that AI’s effect on productivity will depend partly on whether enterprises are willing to reconsider how they operate. As the effort required to produce work changes, roles and handoffs built around that effort may become less necessary, while judgment and accountability take on greater weight. Enterprises should be prepared to replace substantial parts of that arrangement and test whether the replacement earns its place. Those decisions, repeated across businesses, will help determine how much of AI’s task-level promise becomes an economy-wide productivity gain.

## References

1. Becker, J., Rush, N., Barnes, E., and Rein, D. (2025). [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/). METR, July 10. Randomized experiment involving 16 developers and 246 tasks.

2. Becker, J., Rush, N., Cunningham, T., Rein, D., and Mahamud, K. (2026). [We Are Changing Our Developer Productivity Experiment Design](https://metr.org/blog/2026-02-24-uplift-update/). METR, February 24. Follow-up findings and limitations arising from selection and time measurement.

3. Cui, Z., Demirer, M., Jaffe, S., Musolff, L., Peng, S., and Salz, T. (2025). [The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/). June. Microsoft Research’s research summary reports a pooled 26.08% increase in completed tasks, with a standard error of 10.3 percentage points.

4. DORA / Google Cloud (2025). [Announcing the 2025 DORA Report](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report). September 23. Research-team summary of observational relationships between AI adoption, delivery throughput, and stability.

5. Borg, M., Hewett, D., Hagatulah, N., Couderc, N., Söderberg, E., Graham, D., Kini, U., and Farley, D. (2026 revision). [Echoes of AI: Investigating the Downstream Effects of AI Assistants on Software Maintainability](https://arxiv.org/html/2507.00788v3). arXiv:2507.00788v3, February 26. Two-stage study conducted in late 2024; randomized maintenance stage.

6. Bonney, K., Breaux, C., Dinlersoz, E., Foster, L., Haltiwanger, J., and Pande, A. (2026). [The Microstructure of AI Diffusion: Evidence from Firms, Business Functions, and Worker Tasks](https://www2.census.gov/library/working-papers/2026/adrm/ces/CES-WP-26-25.pdf). Census Center for Economic Studies Working Paper 26-25, April. Observations from November 2025 to January 2026.

7. Bick, A., Blandin, A., and Deming, D. (2025). [The State of Generative AI Adoption in 2025](https://www.stlouisfed.org/on-the-economy/2025/nov/state-generative-ai-adoption-2025). Federal Reserve Bank of St. Louis, November 13. Worker surveys and a production-model calculation; the 1.3% figure is a potential cumulative level effect, not an annual growth increment.

8. Brynjolfsson, E., Rock, D., and Syverson, C. (2021). [The Productivity J-Curve: How Intangibles Complement General Purpose Technologies](https://www.aeaweb.org/articles?id=10.1257/mac.20180386). *American Economic Journal: Macroeconomics*, 13(1), 333–372. Historical and theoretical analysis of complementary investment, rather than a measurement of generative AI’s realized impact.

[1]: https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/

[2]: https://metr.org/blog/2026-02-24-uplift-update/

[3]: https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/

[4]: https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report

[5]: https://arxiv.org/html/2507.00788v3

[6]: https://www2.census.gov/library/working-papers/2026/adrm/ces/CES-WP-26-25.pdf

[7]: https://www.stlouisfed.org/on-the-economy/2025/nov/state-generative-ai-adoption-2025

[8]: https://www.aeaweb.org/articles?id=10.1257/mac.20180386
