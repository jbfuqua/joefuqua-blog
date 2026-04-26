---
title: "The Quality Tax"
date: 2026-04-26
category: "algorithm-and-blues"
issue: 50
slug: "algorithm-blues-50"
excerpt: "AI coding tools have moved past novelty, but the productivity gains look different once you account for the review, rework, and technical debt that follow. Three recent surveys put numbers on the gap."
source: "website"
---

By all accounts, AI coding tools have moved past the novelty phase and are now part of ordinary software delivery for many enterprises. Consequently, the conversation has moved from whether teams will use them to how much unfinished work they create downstream.

Stack Overflow's 2025 Developer Survey found that 84% of respondents are either using or planning to use AI tools, and just over half of professional developers report using them daily.

That feels about right. Most dev teams are seeing the same pattern: boilerplate gets done faster, test scaffolding is easier, and productivity looks pretty good on the surface.

But what happens after the code has been generated?

A Q1 2026 survey of nearly 2,900 developers across 320 organizations found that developers now spend 11.4 hours a week reviewing AI-generated code, compared with 9.8 hours writing new code. In 2024, writing code still had a four-hour lead. Developers using agent-heavy workflows reported even higher review loads, around 14 to 16 hours a week, while writing time stayed mostly flat.

That's notable; AI can produce more code than teams are generally prepared to absorb, and workload shifts into review, rework, debugging, and security checks. Some of it also turns into code that technically works until it doesn't.

The data on trust shows the same thing. Stack Overflow found that the most common AI-tool frustration, cited by 66% of respondents, is getting answers that are almost right but not quite. Another 45% said debugging AI-generated code is more time-consuming than expected. Sonar's State of Code survey gets at the same concern from another angle: 61% of developers agree that AI often produces code that looks correct but is not reliable.

"Looks correct" is the challenge. Broken code is annoying, but plausible code is dangerous. It makes it through the first glance, survives the demo, and eventually becomes the maintenance team's problem.

So what about code reviews? Only 48% of developers say they always check AI-assisted code before committing it. That doesn't mean half of all generated code is being thrown into production raw, but it does suggest a lack of consistent policy and practice.

All of this leads to the dreaded technical debt. Sonar found that 40% of developers say AI tools have increased tech debt through unnecessary or duplicative code. That's a real problem because most teams already carry more technical debt than they can manage.

So, AI doesn't magically clean up weak engineering habits. In a lot of cases, it gives those habits more places to hide and more code to hide in.

Of course, none of this means the productivity gains are imaginary. Digital Applied's Q1 2026 survey found self-reported productivity gains of 34% in the first 60 days of adoption. That's meaningful, especially when the work is boilerplate, greenfield scaffolding, test generation, or a well-bounded function with clear acceptance criteria.

More experienced teams seem to be handling AI-generated code differently from ordinary typed-by-a-human code. They track it separately, run quality and security checks before human review, and make the tools earn trust in bounded areas before giving them more room.

I think that's the practical lesson for now; that AI coding tools can make teams faster, but speed has to be measured after review, rework, security findings, production defects, and future maintainability considerations are included.

📄 Stack Overflow, 2025 Developer Survey: AI: https://survey.stackoverflow.co/2025/ai
📄 Sonar, State of Code Developer Survey 2026: https://www.sonarsource.com/state-of-code-developer-survey-report.pdf
📄 Digital Applied, AI Coding Tool Adoption 2026: Developer Survey Results: https://www.digitalapplied.com/blog/ai-coding-tool-adoption-2026-developer-survey

Algorithm & Blues publishes Sundays.
