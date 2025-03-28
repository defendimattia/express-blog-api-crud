const posts = require("../data/posts")

function index(req, res) {
    res.json(posts)
}

function show(req, res) {
    res.send(`Post ${req.params.id} details`)
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
    res.send(`Post ${req.params.id} deleted`)
}

module.exports = { index, show, store, update, patch, destroy }