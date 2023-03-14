import express from "express"
import cors from "cors"


const app = express()
const PORT = 3000

app.use(cors())
app.use("/tarefa", express.json())

app.get("/tarefa", (req, res) => {
    res.send("Hello!")
})

app.get("/tarefa/:id", (req, res) => {
    res.send("Hello!")
})

app.post("/tarefa", (req, res) => { 
    console.log("recebido", req.body.name)
    res.send("Hello!")
})

app.put("/tarefa", (req, res) => {
    res.send("Hello!")
})

app.patch("/tarefa/:id", (req, res) => {
    res.send("Hello!")
})

app.delete("/tarefa/:id", (req, res) => {
    res.send("Hello!")
})

app.listen(PORT, () => (`HTTP server ir running on ${PORT}`))
