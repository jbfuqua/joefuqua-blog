---
title: "What a Radioactive Robot Arm Has Taught Me About Agentic AI"
date: 2025-12-17
category: "governance"
slug: "what-radioactive-robot-arm-has-taught-me-agentic-ai"
excerpt: "In 1988, I was at Oak Ridge National Laboratory working on a problem that had nothing to do with productivity. We had a massive robotic arm—cousin to the ones welding car frames in Detroit—and we were…"
source: "linkedin"
---

In 1988, I was at Oak Ridge National Laboratory working on a problem that had nothing to do with productivity. We had a massive robotic arm—cousin to the ones welding car frames in Detroit—and we were trying to make it fail-safe in harsh environments.

The use case was nuclear disaster response, sending a robot into environments too hot for humans, where it would need to operate independently. Communications would be unreliable, with no one watching over its shoulder to correct mistakes.

Most of our work focused on what happened when things went sideways. What does the system do when sensor readings contradict each other? When it loses confidence in its own position? When the network hiccups for 200 milliseconds at exactly the wrong moment?

We spent weeks on failure modes that would trigger maybe once in ten thousand operations. In that context, "works most of the time" is unusable. You need a system that fails predictably, recovers gracefully, and never leaves you guessing what went wrong.

I've thought about that experience a lot lately.

## What I Saw

The robotics revolution we talk about now—lights-out factories, precision automation, machines that don't take breaks—makes it sound like adoption was a foregone conclusion. Robots got good, companies bought them, end of story.

I watched something different unfold over thirty years.

Industrial robots existed for decades before they became infrastructure. They were expensive, finicky, and required environments redesigned around their limitations. The early wins came from removing humans from dangerous work—welding, painting, heavy lifting in foundries—because "fewer people get hurt" was easier to justify than speculative productivity gains. That calculus kept robotics in a narrow lane for a long time.

What changed wasn't the robots getting dramatically smarter; rather, the ecosystem matured around them. Manufacturing processes became more standardized, which meant robots could rely on consistent inputs. Maintenance shifted from art to engineering, with predictable schedules and documented procedures. Costs dropped to where the math worked even with conservative assumptions about uptime and error rates.

The human role evolved, too. Operators became supervisors. The job stopped being "run the machine" and became "watch for the moments when the machine needs you, and know what to do when those moments arrive."

By the time robotics felt inevitable, most of the transformation had already happened. We just hadn't noticed because the work wasn't the kind that makes headlines. Nobody writes Harvard Business Review articles about maintenance schedules.

## A Familiar Story

From my perspective, agentic AI is standing in a similar spot as early robotics.

The demos are genuinely impressive, showing systems that plan, reason, coordinate across tools, and execute multi-step tasks with fluency that would have seemed like science fiction five years ago. I'm not a skeptic. The capability is there, and it's advancing fast. A recent MIT Technology Review survey found that 70% of banking executives say their firms are already using agentic AI in some form.

Here's what I keep coming back to: capability has never been the bottleneck for automation. The bottleneck is the organizational scaffolding that turns "impressive" into "dependable."

How do you supervise a system that operates faster than you can review its work? How do you diagnose failures in processes that don't run the same way twice? How do you predict costs when inference pricing changes quarterly? How do you explain to an auditor what the agent decided and why?

These questions sound technical, but they're institutional. And institutions move at human speed, especially in regulated industries, especially when autonomy raises the stakes of getting it wrong.

## What Dependable Looks Like

Here's a concrete example from financial services; the kind of workflow where agentic AI could genuinely work.

A commercial bank receives hundreds of client requests daily through email. Loan document submissions, account changes, wire transfer instructions, compliance inquiries. Today, operations team member reads each message, figures out what it's asking for, routes it to the right team, and creates a tracking case. The work is skilled, requiring solid understanding of the bank’s products, ability to recognize urgency, and insight to catch missing information. But… it's also repetitive in structure.

With current SOTA, an AI agent “can” perform the function -- read the email, classify the request, route it appropriately, create the case, flag anything unusual for human review. Why? The workflow is bounded, success criteria are clear, and errors are catchable before they cascade.

But making this dependable, not just demo-ware, requires answering questions the capability doesn't address. What happens when the agent misclassifies a wire instruction as routine when it's actually urgent? Who owns that failure? How do you prove to regulators that the system performs consistently across customer segments? How do you version-control an agent's behavior when the underlying model updates?

Banks already have a framework for this kind of oversight. SR 11-7, the Federal Reserve's model risk management guidance, has governed quantitative models since 2011. It requires documentation, validation, ongoing monitoring, clear ownership. The problem is that SR 11-7 was designed for statistical models with stable parameters, not systems that behave differently each time you run them. The governance gap between what regulators expect and what agentic AI actually does is where most of the hard work lives.

## The Unexciting Middle

What allowed robotics to cross from "promising" to "infrastructure" was a slow accumulation of unglamorous improvements such as workflow standardization, clearer ownership models, and failure-mode documentation that let someone at 2 AM figure out what happened without calling the vendor. Governance that feels like operations rather than compliance theater.

Agentic AI needs the same scaffolding, and most organizations are still working on that. They're running pilots with impressive demos while the underlying questions like “who supervises this?”, “how do we catch errors?”, “what happens when it's wrong at scale?”... are still being sorted.

I don't think this means agentic AI will stall. The economic pressure is too strong, and the capability improvements are coming too fast. What it means is that adoption will be uneven in ways that have little to do with technical sophistication. The organizations that figure out supervision, governance, and failure handling will scale. Everyone else will keep running pilots.

## What Reliability Delivers

I learned something at Oak Ridge that has stayed with me through four decades in technology. The measure of an autonomous system is what happens when things go wrong and no one's there to catch it.

We spent weeks making that robotic arm predictable because predictable meant trustworthy. Predictable meant you could plan around it. Predictable meant that when something did go wrong, you understood why and could fix it. In a high-radiation environment, that kind of reliability is the difference between a successful intervention and a cascading disaster.

The same principle applies to an agent processing loan documents or triaging customer requests at 2am. The question isn't whether the system is smart enough, rather whether you've built an environment where it can fail safely.

Agentic AI will get there. I've seen this pattern enough times to know that doing the unglamorous work is what it takes to be ready when the technology matures. Governance frameworks, supervision model, failure documentation… it's not the most exciting part of the story, but it's the part that matters.
