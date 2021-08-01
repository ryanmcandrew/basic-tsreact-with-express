const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/back', (req:any, res:any) => { //Line 9
    let msg = { express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }
    console.log('sending following')
    console.log(msg)
    res.send(msg); 
}); 