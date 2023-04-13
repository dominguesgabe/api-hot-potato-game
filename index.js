import Express from "express"
const app = Express()

app.get("/player1", (req, res) => {
    const { potato } = req.params
    res.status(200).send("parece que funciona" + potato)
})

app.listen(5501, () => {
    console.log("running on 5501")
})