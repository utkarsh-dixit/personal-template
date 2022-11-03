import express from "express";
const app = express()

function test(x: string) {
    console.log("INput is", x);
    return x + "_output";
}

app.get('/', (req, res) => {
    res.send('Hello World!' + test("HELLO"))
});
  
app.listen(3031, () => {
    console.log(`Example app listening on port ${3031}`)
});