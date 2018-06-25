const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/',function(ctx,next){
    ctx.body = ctx.request.query;
})

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000,()=>{
        console.log(3000)
    })