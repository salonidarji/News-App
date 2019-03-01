var express = require('express'),
app = express();
app.use(express.static('./src/app'));
app.get('/*',(req,res)=> {
    res.sendFile(path.join(__dirname,'/src/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log('server started');
})
