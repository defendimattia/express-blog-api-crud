const express = require("express")
const app = express()
const port = 3000
const postsRouter = require("./routers/posts-router")

app.use("/posts", postsRouter)

app.listen(port, () => {console.log(`Listening on port ${port}`)})