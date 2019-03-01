var express = require('express'),
app = express();
app.use(express.static('./dist/newsApp-angular-ionic4'));
app.get('/*',(req,res)=> {
    res.sendFile(path.join(__dirname,'/dist/newsApp-angular-ionic4/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log('server started');
})
