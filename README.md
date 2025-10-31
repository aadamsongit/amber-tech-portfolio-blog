# Amber's Tech Portfolio Blog

A statically generated blog built with Next.js, TypeScript, and Markdown, featuring posts about agentic AI, MCP servers, and modern development workflows.

This blog showcases Next.js's Static Generation feature using Markdown files as the data source, with an integrated MCP server for real-time content access.

## Features

- Static site generation with Next.js and TypeScript
- Markdown blog posts with front matter support
- MCP server endpoint at `/mcp/posts` for AI tool integration
- Tailwind CSS styling
- Posts focused on agentic AI, MCP, and developer tooling

## MCP Integration

The blog includes an MCP server that exposes blog content via HTTP endpoints, enabling AI tools like Amazon Q to query posts in real-time. Access posts at `http://localhost:4000/mcp/posts`.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Your blog will be available at [http://localhost:3000](http://localhost:3000).

To start the MCP server:

```bash
npm run mcp-server
```

The MCP endpoint will be available at [http://localhost:4000/mcp/posts](http://localhost:4000/mcp/posts).

## Deployment

Deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/amber-adamson/amber-tech-portfolio)

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Markdown with gray-matter
- MCP server integration
