---
title: "Self-Modifying Agents"
date: 2026-03-29
category: "algorithm-and-blues"
issue: 46
slug: "algorithm-blues-46"
excerpt: "There's a pattern behind most self-improving AI systems: the agent improves, but the thing evaluating it doesn't. A new approach drops that constraint entirely."
source: "website"
---

There's a pattern behind most "self-improving" AI systems. An agent does the work, something above it watches, evaluates, and tells it what to do differently next time. The agent improves. The thing evaluating it doesn't. That part was designed up front and tends to stay that way, same logic, same assumptions, even as the system it's guiding starts to behave differently.

It creates a performance ceiling, and teams building these systems know it.

A paper accepted at ICLR 2026 from researchers at Meta, UBC, Edinburgh, and NYU introduces a concept called HyperAgents; the idea traces back to the Gödel Machine, a thought experiment from 2003, an AI that could rewrite any part of itself, including the rules it uses to decide when to rewrite itself, as long as it could prove the change was beneficial. It's a clean idea, but hard to make real, because proving net benefit isn't something most systems can do in any general sense.

The Darwin Gödel Machine got part of the way there last year, but only in coding, where getting better at the task and getting better at self-modification overlap just enough. Move outside of that, into things like reviewing scientific work or shaping reward functions for robotics, and that breaks down.

HyperAgents drops that dependency. Instead of separating the system that does the work from the system that critiques it, it merges them into a single program where both parts are editable, so the system improves its output, then changes how it improves, then continues from there.

When you look at the results, it's clearly an improvement over past approaches. The system was moved into Olympiad-level math grading, something it hadn't been trained on, and it improved, while prior approaches without a self-modifying meta-layer stayed flat.

Along the way it introduced its own structure, tracking performance across runs, keeping memory of what worked, and planning how to use compute more effectively, because it inferred that remembering and organizing its own improvement process would make it better at improving.

If the meta-layer is fixed, you can treat it as an artifact. You can inspect it, test it, build controls around it. Once that layer is editable, you lose that anchor. You can still see what the system did, but understanding how it changed the rules it operates under is a different problem, and most environments don't have a way to reason about that yet.

That's also why it works. The system no longer depends on humans to define how improvement happens. That constraint is gone.

The field has gotten reasonably good at asking what a model does and whether it's correct. How it changed itself, and whether that change should have been allowed, is still new territory, but it's already starting to show up in real systems.

📄 Full paper: https://arxiv.org/abs/2603.19461
