const posts = require("../data/posts")

function index(req, res) {
    res.json(posts)
}

function show(req, res) {
    res.json(posts.find((el) => el.id === parseInt(req.params.id)))
}

function store(req, res) {
    res.send("Created new post")
}

function update(req, res) {
    res.send(`Post ${req.params.id} full edit`)
}

function patch(req, res) {
    res.send(`Post ${req.params.id} partial edit`)
}

function destroy(req, res) {
    const selectedPost = posts.find((el) => el.id === parseInt(req.params.id))
    

    if (!selectedPost) {
        res.status(404)

        return res.json({
            status: 404,
            error: "Not found",
            message: "Post not found"
        })
    }

    posts.splice(posts.indexOf(selectedPost), 1)
    
    res.sendStatus(204)
}

module.exports = { index, show, store, update, patch, destroy }