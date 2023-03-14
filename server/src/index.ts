import express from "express"

const app = express()
const PORT = 8080

app.get("/", (req, res) => {res.send("Hello!")})
app.get("/tarefa/:id", (req, res) => {res.send("Hello!")})
app.post("/tarefa", (req, res) => {res.send("Hello!")})
app.put("/tarefa", (req, res) => {res.send("Hello!")})
app.patch("/tarefa/:id", (req, res) => {res.send("Hello!")})
app.delete("/tarefa/:id", (req, res) => {res.send("Hello!")})


app.listen(PORT, () => (`HTTP server ir running on ${PORT}`))
