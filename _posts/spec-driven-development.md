---
title: "Spec-Driven Development and the Future of AI Collaboration"
excerpt: "How I learned to stop handwiring endpoints and embrace spec-driven workflows — and why it changes how we build."
coverImage: "/assets/blog/preview/spec-driven.avif"
date: "2025-10-31"
author:
  name: Amber Adamson
  picture: "/assets/blog/authors/amber.png"
ogImage:
  url: "/assets/blog/preview/spec-driven.webp"
  tags: ["agentic", "spec-driven", "AI tooling", "developer experience"]
---

## 1. Guardrails for AI Development

I've talked a little bit in my other posts about how AI-assisted development needs guardrails. Most developers are familiar with "vibe coding," which means... well, kind of a few things, depending on whomst you ask, but in its most general and broad definition, vibe coding means just telling the AI what you want it to do and letting it "vibe." Theoretically, vibe coding can make development easier for non-developers, as well as raising the floor for developers of different levels to scaffold more quickly.

In practice, most developers I've known, including me, have had mixed results with AI tools and agentic development. A few months ago, I used Cursor to refactor the code for my Wordle game, Hashle. I told the AI to make the code more modular and add accessibility with axe-core and set up some end-to-end and unit tests. Cursor did a fantastic job with refactoring the code for modularity, but it also introduced a couple of bugs. Granted, the bugs may have been the AI exposing some weaknesses with my code, which was admittedly brittle in places, hence the need for refactoring, but I did have to go through and debug a couple of places.

With larger codebases, such as the startup I've been working on, I've been hesitant about outsourcing too much code to AI dev tools. After seeing AI get a bit "over-eager" with some of my instructions and modify too many files or too much at once, I dialed back on a lot of my usage of tools like Cursor and have even reverted to the standard VSCode editor, which is what I'm currently writing this with.

However, after learning about spec-driven development and the process behind how it works, I'm excited to give AI tools another try with a different, fresher approach. 

---

## 2. What “Spec-Driven” Means in Practice

Last night, I watched a demo of spec-driven development provided by [Rob Dahal](https://www.linkedin.com/in/saurabhdahal/), my former instructor at Coding Dojo. It was quite eye-opening.

Spec-driven development refers to providing AI with specs in the form of human readable user stories. These specs can dictate everything from programming agnostic features (REST for APIs) to specific databases or extensive outlines for architecture. 

What's so exciting about spec-driven development is that having these specs as the source of truth can reduce the pain points of "vibe coding." You're not just giving AI a general language instruction prompt and hoping for the best. You're crafting architectural design upfront and making that the source of truth.

## 3. Practical Use Cases

I have a real use case in mind: I'm currently working on architecting the backend for a startup with Next, Prisma, and Postgres. I'm rusty with setting up a backend, but I have the RBAC and auth system clearly in mind and mentally architected. Setting everything up has become a bit of a pain point as far as time, as I'm also optimizing the frontend and assets. Plus there's security, tests, observability, and other features.

Since I'm proceeding with architecture first, I think this approach to AI-assisted coding could be a huge asset in my work. I'm excited to try it out in practice. Once I do, I'll let you know how everything goes, but as I am someone who works on the startup scene and am taking on more fractional work and potentially looking to market my skills in consulting and freelancing for website overhauls and startups, this could be a game changer for me for rapid iteration.

Of course, there may still be some pain points. In the demo, I watched the AI assistant try to use localStorage for the database rather than MongoDB, as the specs defined. Clearly, AI will continue to need human guardrails. But I overall find this to be a promising corrective measure for at least a good some of the messes occasioned by "vibe coding," especially if the specs are well-articulated and well-organized. With how much development work is now focused on end-to-end architecture and scalability, I definitely think this development approach is worth exploring.