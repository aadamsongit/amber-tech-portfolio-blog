import express from "express";
import { getAllPosts } from "./src/lib/api.js";
const app = express();
app.get("/mcp/posts", (req, res) => {
    const posts = getAllPosts();
    res.json(posts);
});
app.listen(4000, () => console.log("MCP server running on port 4000"));
