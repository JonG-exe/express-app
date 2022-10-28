// This is the first server i've ever launched publicly. 
// It was launched using Vercel

const 
    express = require("express"),
    cors = require("cors"),
    app = express(),
    PORT = process.env.PORT || 5000;

app.use(cors())

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.html")
})

app.get("/done", (req, res) => {
    res.json({"done" : "You've finally gotten your Degree!"})
})

app.get("/jadel", (req, res) => {
    res.json({"jadel" : "a boy that i think that i like"})
})

app.listen(PORT, () => console.log(`Running on port: http://localhost:${PORT}`))