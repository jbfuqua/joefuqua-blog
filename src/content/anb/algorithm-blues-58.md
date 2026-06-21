---
title: "The Satisfaction Trap"
date: 2026-06-21
category: "algorithm-and-blues"
issue: 58
slug: "algorithm-blues-58"
excerpt: "When an AI assistant is judged by whether users liked the answer, the trait that wins is the one that quietly degrades the advice. New research in Science on why satisfaction is the wrong quality signal for decision support."
source: "website"
---

Once an AI assistant is in production, the easiest thing to measure is whether people liked the answer. Whether it made the work better is harder to determine.

A study published in Science this March shows why that can be a dangerous way to measure quality.

Myra Cheng and colleagues at Stanford and Carnegie Mellon studied what they call "social sycophancy," the tendency of a model to affirm the user's actions and self-image rather than simply agree with a factual claim. Across eleven production models from OpenAI, Anthropic, Google, Meta, and others, the models endorsed users' actions close to 50 percent more often than human advice-givers did, even when the described behavior involved deception, harm, or clear wrongdoing.

The Reddit results noted in the paper make the pattern easier to see. In cases where the community had already judged the poster to be at fault, the models still sided with the poster about half the time.

The baseline is key. The study compares the models against ordinary advice behavior, using top-voted Reddit replies and professional advice columnists. That's a softer standard than perfect moral judgment. Even so, the models were still much more willing to affirm the user.

Flattery also appears to change what people believe and what they are willing to do next.

The team tested this in two preregistered experiments with 1,604 participants. One version asked people to talk through a real conflict from their own lives.

The flattering model did more than make people feel better. It left them more convinced they were right and less willing to repair the relationship. In the live conflict condition, repair intent fell about 10 percent compared with the honest control.

The hypothetical version produced effects two to three times as large. But the live-interaction result is the one to note, because it's closer to how these tools are actually used.

The unspoken problem is what the flattering responses left out. They were much less likely to mention the other person in the conflict or ask the user to consider that person's perspective. Instead of widening the situation, the model stayed within the user's version of events. That's how affirmation becomes distortion.

Users liked the flattering model more. They rated it as higher quality, trusted it more, and were about 13 percent more likely to say they would use it again.

They didn't seem to recognize the tradeoff. The flattering model was described as "objective" and "unbiased" at about the same rate as the honest one.

That's a bad bargain for decision support. These systems are often positioned as a second point of view, but the preferred answer may be the one closest to the user's first perspective. If the model learns from preference, engagement, and return behavior, it has a path toward agreement that looks like quality from the outside.

Cheng's team treats sycophancy as an incentive problem, not a one-model defect. The GPT-4o example makes the point concrete. The version tested in the paper came before the 2025 update OpenAI later rolled back for being too flattering and agreeable. The pressure was already showing up in production.

The risk is highest when the assistant is supposed to supply perspective: coaching, decision support, management advice, escalation review. In those settings, value often comes from the part of the answer that helps the user notice what they were leaving out. Satisfaction is a weak measure when the highest score may go to the answer that preserves the story the user already had.

A better evaluation has to look for something less comfortable. Did the model surface the missing perspective and create appropriate doubt? Did it help the person make a better next move, rather than feel better about the one they already wanted to make?

That's the test for decision support. The model has to make better judgment more likely, even when that starts with an answer the user would rather not hear.

📄 Paper: https://arxiv.org/abs/2510.01395

*Algorithm & Blues publishes Sundays.*
