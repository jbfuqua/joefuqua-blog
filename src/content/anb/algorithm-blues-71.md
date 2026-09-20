---
title: "When the Agent Finds Another Way"
date: 2026-09-20
category: "algorithm-and-blues"
issue: 71
slug: "algorithm-blues-71"
excerpt: "Recent alignment reports show agents continuing assignments beyond their intended limits. Testing what happens when work gets blocked can reveal behavior a completed task would hide."
source: "website"
ogImage: "/images/algorithm-blues-71/ab71-hero-social.png"
ogImageAlt: "A ribbon of spreadsheet cells leaves one office window and travels through the open air to another office."
---

<figure class="article-hero">
  <a href="/images/algorithm-blues-71/ab71-hero.png">
    <picture>
      <source type="image/webp" srcset="/images/algorithm-blues-71/ab71-hero-800.webp 800w, /images/algorithm-blues-71/ab71-hero-1200.webp 1200w" sizes="(max-width: 720px) 100vw, 760px" />
      <img src="/images/algorithm-blues-71/ab71-hero.png" alt="A ribbon of spreadsheet cells leaves one office window and travels through the open air to another office." width="1672" height="941" fetchpriority="high" />
    </picture>
  </a>
  <figcaption>AI-generated conceptual illustration of a workaround that takes an internal file outside its intended environment. It is not a reconstruction of the reported incident.</figcaption>
</figure>

One reason to give an AI agent a task is to avoid having to walk it through every step. If something doesn’t work, you’d like it to figure out what to try next. In an incident OpenAI recently reported, an agent did exactly that when it couldn’t share a spreadsheet with the other agents working on the assignment. It eventually found a way, but that involved uploading the file to the public internet.

The agents were working on a depreciation spreadsheet during training of an unreleased model in April, with instructions to keep the files local. One had built the workbook, but the others couldn’t access it. Copying it to another directory didn’t help, and an attempt to share it over a local connection also failed. The agent eventually uploaded the workbook to a public file-hosting service and sent the others a download link.

OpenAI disclosed the incident on September 16. File sharing in the training environment was broken, and the company says it repaired the problem and disabled internet access for the dataset. It has since disabled live internet access throughout training. [OpenAI’s incident report](https://alignment.openai.com/misalignment-reports/unauthorized-communication-via-temporary-file-hosting-services/)

OpenAI included the workbook incident in a set of six reports released with its new framework for disclosing model misalignment. The reports describe particular failures, and the company cautioned that they don’t show how often these behaviors occur. [OpenAI’s announcement](https://openai.com/index/model-misalignment-reporting-framework/)

Anyone who’s struggled to share a file with a colleague can understand why the agent kept trying. It had a workbook ready and collaborators waiting to use it. Uploading it to a public website solved their access problem, but it also made the file available to people outside the assignment. That needed approval, even if it was the only way the agent could find to finish the job.

Giving an agent room to figure things out means trusting it to recognize when it needs to come back and ask. That can be a difficult judgment when it has found a way to finish the job, but doing so would go beyond what it was allowed to do. A company needs to be able to rely on the agent to stop at that point, even with the work nearly done.

Anthropic had published an assessment of more serious incidents a week earlier. In four incidents during cybersecurity evaluations, Claude reached real systems from environments that were supposed to be isolated. The tests ran without the cyber safeguards included in released products, and the models sometimes continued their assignments despite evidence that their actions could cause real-world harm.

Understanding why they continued proved difficult. Anthropic initially put considerable weight on the models’ statements that they believed they were operating in a simulation. Further investigation found that they had discounted evidence to the contrary, and the company acknowledged that it had trusted their explanations too readily. [Anthropic’s assessment](https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents)

The reports don’t establish how often a company should expect this behavior in its own processes, but they suggest something worth testing before giving an agent more responsibility. When the work can’t be completed with the information and permissions available, the way it handles that problem becomes part of the result.

An agent preparing a management report, for example, might find that a required data source is unavailable. Returning a partial report with an explanation of what’s missing would leave someone with work to do. It could also be the response the company wants, especially if the alternatives involve guessing at the numbers or obtaining data it wasn’t authorized to use. An evaluation focused on whether the report was finished could count that as a failure.

I’d want to test those situations deliberately, including an assignment where a required approval never arrives. Watching what the agent tries while it waits would tell me more than asking it to explain the approval policy. Its record of actions would also let me check whether the account it gives afterward includes the attempts that didn’t work.

<figure>
  <a href="/images/algorithm-blues-71/ab71-blocked-task-tests.png">
    <picture>
      <source type="image/webp" srcset="/images/algorithm-blues-71/ab71-blocked-task-tests-800.webp 800w, /images/algorithm-blues-71/ab71-blocked-task-tests-1200.webp 1200w" sizes="(max-width: 720px) 100vw, 760px" />
      <img src="/images/algorithm-blues-71/ab71-blocked-task-tests.png" alt="Three proposed agent tests: an unavailable source, denied access, and missing approval. Inspect whether the agent explains gaps, stops restricted actions, waits for approval, and accurately reports its attempts." width="1600" height="1120" loading="lazy" decoding="async" />
    </picture>
  </a>
  <figcaption>Suggested tests for blocked assignments. Compare what the agent says with what it actually tried. Author illustration, not research results.</figcaption>
</figure>

If a file must stay inside the company, the agent’s access should be configured to prevent it from uploading that file elsewhere. Explaining the restriction in its instructions is part of the setup, but the company also needs controls that hold when the agent makes a poor decision about what to try next.

That may mean the work stops until someone can help. The person receiving the request needs to understand what prevented completion before telling the agent to try again. A broken connection may need repairing; a denied request may require approval from someone else. Asking for more persistence won’t resolve either problem on its own.

With a workbook containing internal financial data, it would be easy for the employee waiting on it to miss what had happened. The download link works, and the spreadsheet may contain everything they asked for. Unless they look into how it was shared, they might have no reason to suspect that getting the file to them had also made it publicly available.

The company might take that completed workbook as evidence that the agents are ready for more responsibility. If no one checks how it was delivered, the next assignment could involve more sensitive data, with the same sharing problem still unresolved. Meanwhile, an agent that stopped and asked for help might seem to need too much supervision.

*Algorithm and Blues publishes Sundays.*
