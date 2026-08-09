---
title: "The Synthetic Public"
date: 2026-08-09
category: "algorithm-and-blues"
issue: 65
slug: "algorithm-blues-65"
excerpt: "Imagine testing a product change on eight billion people without speaking to any of them. A new preprint, MatrAIx, gets close, simulating a public from 8.3 billion persona records that answer surveys, use apps, and react to price changes. But swap the model playing the customers and the market conclusions can flip, and the reliability gains lean on an assumption of independence these agents rarely have. The synthetic public is cheap, fast, and endlessly cooperative, which is exactly what makes it easy to mistake for the real one."
source: "website"
---

Imagine launching a product change after testing it with eight billion people. Every age group, income level, language, profession, personality, and level of technical ability could be represented. It would be the largest user study ever conducted, and nobody would have to speak to an actual participant.

A new preprint gets surprisingly close. MatrAIx is an evaluation platform built on a collection of 8.3 billion persona records. Some are drawn from human-authored profiles. The rest are sampled from a dependency graph that preserves correlations among characteristics such as age, education, occupation, income, personality, and risk tolerance.

These personas can answer surveys, talk to chatbots, browse websites, and operate applications. They can test whether someone hesitates after a price increase, abandons a chatbot after it makes a mistake, or struggles to find a feature in an app.

## A very large small sample

The researchers first checked whether the agents stayed consistent with the personas they were assigned, and most did. A persona described as price-sensitive generally gave price-sensitive answers. That’s important, but it’s really a test of whether the model can stay in character. It doesn’t show whether a real person with the same income, occupation, and stated preferences would make the same choice.

In one experiment, the researchers presented the same price increase to the same persona cohort using three different models. With one model, nearly everyone hesitated to buy. With another, only about a quarter did. The third landed somewhere between them.

The customer population hadn’t changed. Switching the model playing the customers was enough to produce nearly opposite conclusions about the market. That kind of instability didn’t appear everywhere. On another task, all three models ranked users by trust the same way. Price sensitivity, though, is exactly the kind of finding a company might use to make a pricing or product decision.

The paper doesn’t hide this. The authors call the personas simulation instruments rather than people, and they recommend testing important findings with more than one model before using them to guide a decision.

A separate study using U.S. responses from the World Values Survey gives them good reason to be cautious. Working with two open-weight models, the researchers found that adding demographic personas didn’t clearly improve how closely the models matched human responses overall. Sometimes it made the match worse, with some of the largest errors affecting underrepresented groups.

More detail can make a persona feel more complete while moving the model no closer to the person being described. It may simply give the model more material for constructing its own version of that person.

Eight billion personas also don’t amount to eight billion independent observations. That figure describes the pool of persona records available for sampling, while the individual experiments used much smaller cohorts. Every response was still shaped by a small set of models, schemas, prompts, correlations, and assumptions about human behavior. A larger pool creates more combinations to test while leaving the underlying sources of variation largely unchanged.

## When the proxy becomes the customer

Synthetic users could still catch plenty of problems. They can test unusual combinations of needs, find brittle interactions, and repeat the same scenario after every product change. A company currently testing a new feature with a few employees would almost certainly learn more from a varied synthetic panel.

Human research takes time. Participants have to be recruited, scheduled, paid, and protected. They misunderstand questions, contradict themselves, and abandon tasks. Synthetic participants answer every question and finish every task. A study can grow from a few dozen participants to a few thousand without anyone talking to a customer.

Inside a large company, the tool purchased for early testing can easily take on a larger role. Simulated preferences become market forecasts. Synthetic reactions influence pricing and product roadmaps. An accessibility review takes the place of talking with people who use assistive technology. The methodology still calls them simulated users. The presentation calls the results customer research.

The authors are careful about that boundary. They say explicitly that running a simulated cohort doesn’t remove the obligation to consult the people a product will actually affect, especially in health, finance, and employment.

That warning may become harder to preserve as the simulated populations grow. Eight billion carries more rhetorical weight than 40 interviews, even when those 40 interviews contain the only people who actually experienced the product.

The synthetic public is also unusually cooperative. It never refuses recruitment, misses an appointment, rejects the categories it has been given, or complains that the researchers asked the wrong question. If real customers later behave differently, the clean results from the simulation may make them look like the outliers.

Eight billion artificial people liked the product, after all. Maybe the customer is the problem.

Research

📄 MatrAIx: Simulating the World with 8.3 Billion Persona Agents
https://arxiv.org/abs/2608.04205

📄 Assessing the Reliability of Persona-Conditioned LLMs as Synthetic Survey Respondents
https://arxiv.org/abs/2602.18462

*Algorithm & Blues publishes on Sundays. If this was forwarded to you, you can subscribe at joefuqua.blog.*
