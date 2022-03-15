// set up express 
const express = require ('express');
const cors = require('cors')
const app = express ();

//listen to specific route
app.use(cors({origin:true}));

// add login handler
app.use('/login', (req, res) => {
    res.send ( {
        token: 'test334'
    });
});

// creating server
app.listen(8080, () => console.log('API running on http://localhost:8080/login'));