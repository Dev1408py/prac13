const express = require('express');
const bodyParser = require('body-parser');
var path = require("path");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname,'/html')));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'./index.html'));
  });

                                                                                   
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
