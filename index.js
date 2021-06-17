const express = require('express')
const app = express()
const port = process.env.PORT || 3000
//Logical OR (||) - JavaScript | MDN
app.get('/', (req, res) => {
    res.send('Hello heroku . i am change file!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})