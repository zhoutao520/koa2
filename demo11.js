const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();

app
    .use(views(path.join(__dirname,'./view'),{
        extension:'ejs'
    }))
    .use(async(ctx)=>{
        let title = 'Hello Terry';
        await ctx.render('index',{title})
    })
    .listen(3000,()=>{
        console.log(3000)
    })