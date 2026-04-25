const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("just for testying");
});

app.listen(3000, () => {
    console.log("Server running onijuiguiguig port 3000");
});
 