const express=require('express')
const app=new express()
const routers=require('./router')
app.set('view engine','ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use('/',routers)

app.listen(3000, () => {
  console.log(`server is listening on http://localhost:3000`);
});