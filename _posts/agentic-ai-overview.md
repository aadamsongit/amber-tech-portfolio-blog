---
title: "Agentic CLI Tools and MCP Servers: The Future of Context-Aware Development"
excerpt: "We be ballin with MCP"
coverImage: "/assets/blog/preview/mcp-header.webp"
date: "2025-10-27"
author:
  name: Amber Adamson
  picture: "/assets/blog/authors/amber.png"
ogImage:
  url: "/assets/blog/preview/mcp-header.webp"
  tags: ["MCP", "agentic", "AI tooling", "developer experience"]
---

# An Overview of MCP and Agentic CLI Tools

## 1. Background on dev tools and the introduction of AI

For the sake of this article, I will assume total unfamiliarity with the world of AI developer tools. Actually, I'll even take a step back and give a brief explanation of what an IDE and a CLI are so that a non-developer can also follow along: "IDE" stands for Integrated Development Environment. It's a GUI (which itself stands for Graphical User Interface, or a visual layer) for developers which integrates a variety of tools to facilitate and enhance the development experience. Most developers do not write their code directly into raw text editors and just hope for the best. They write code in IDEs, which have long provided debuggers, code correction suggestions/tools, and autocomplete. I'm writing this post in a markdown file in VSCode, my old reliable IDE. "CLI," meanwhile, stands for Command-Line Interface. The CLI may be a little more abstract to a non-developer or to someone who has only used computers in the post-GUI world. When you open the command prompt (mostly replaced with PowerShell on newer Windows computers), it's the black background with the white text. CLIs are useful for running scripts directly without the overhead of GUIs. There are different kinds of CLIs, such as PowerShell, Gitbash, and WSL, which is based on the Linux CLI. If you have ever wondered -- as I used to in my pre-developer days -- why Linux seems to have a special reputation in dev and IT communities as a technical tool, the answer goes back to its very powerful CLI. 

For decades, these two interfaces — graphical IDEs and text-based CLIs — have formed the twin pillars of developer productivity. In recent years, the introduction of LLMs such as ChatGPT, Gemini, and Claude have added to the developer toolbox by integrating AI functionality with traditional automation or dev processes. I wanted to start with that foundation because AI integrations have evolved alongside these tools. When extensions such as Github Copilot and Codeium were initially introduced into IDEs such as VSCode, their functionality primarily revolved around adding chat to the IDE (sort of like ChatGPT but in your VSCode) and advanced forms of autocomplete for code. At the time, these tools seemed novel. I remember working with a very senior developer who was highly impressed by how Copilot could intuit unit tests based on the functions elsewhere in your codebase and create them wholly with predictive functionality.

In 2025, however, AI IDE/CLI tools have embraced something new: agentic features. 

## 2. What Does “Agentic” Mean?

When we describe an AI system as agentic, we mean it can act with context, memory, and goals. Instead of simply responding to each command independently, an agentic tool can maintain awareness of your current task, plan multi-step actions, and even call APIs or run shell commands to achieve your objective.

Think of it as the difference between telling a calculator “add 5 and 5” versus asking an assistant “set up a new project, install dependencies, and deploy it.” The first executes a single command; the second understands intent and coordinates multiple actions to fulfill it.

## 3. What Are Agentic CLI Tools And How Do They Fit In The AI Ecosystem?

Brief explanation of “agentic” — tools that act with context, memory, and goals.

Examples: Amazon Q CLI, Cursor, Cline.

How they differ from old “dumb” CLIs (e.g., grep, git, ls).

---

## 2. Enter the Model Context Protocol (MCP)

Explain what MCP is (protocol for shared context between AI and tools).

Why it matters — it standardizes how models talk to developer tools.

Reference Anthropic docs, ByteByteGo article, etc.

---

## 3. Real-World Use Cases

Developer scenarios — code generation, refactors, doc lookup.

Future vision: your dev environment as an intelligent partner.

---

## 4. My Experience So Far

Talk about using agentic tools like Q, Cursor, or Copilot CLI while building this blog.

(You can note: “I plan to integrate my own MCP demo server next.”)

---

## 5. What Comes Next

Short reflection — where you think the ecosystem is going.

Add a “Further Reading” section linking to:

- [ByteByteGo: What Is Model Context Protocol?](link)
- [Anthropic MCP Docs](link)
- [Cursor](link)
- [Amazon Q CLI](link)
