const 
    express = require("express"),
    app = express(),
    PORT = process.env.PORT || 5000;

app.get("/done", (req, res) => {
    res.json({"Done" : "You've finally gotten your Degree!"})
})

app.listen(PORT, () => console.log("Running on port: ", PORT))