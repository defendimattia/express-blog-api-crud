const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Posts list")
})

router.get("/:id", (req, res) => {
    res.send(`Post ${req.params.id} details`)
})

router.post("/", (req, res) => {
    res.send("Created new post")
})

router.put("/:id", (req, res) => {
    res.send(`Post ${req.params.id} full edit`)
})

router.patch("/:id", (req, res) => {
    res.send(`Post ${req.params.id} partial edit`)
})

router.delete("/:id", (req, res) => {
    res.send(`Post ${req.params.id} deleted`)
})

module.exports = router