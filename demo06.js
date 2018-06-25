const Koa = require('koa');
const Router = require('koa-router')

const app = new Koa();
const router = new Router();

router
    .get('/',(ctx,next)=>{
        ctx.body = "Hello Terry";
    })
    .get('/todo',(ctx,next)=>{
        ctx.body = "Todo Page"
    })

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000,()=>{
        console.log(3000)
    })
