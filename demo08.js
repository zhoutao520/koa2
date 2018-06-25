const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

let home = new Router();
home
    .get('/terry',async(ctx)=>{
        ctx.body = "Home Terry page";
    })
    .get('/todo',async(ctx)=>{
        ctx.body = "Home todo page";
    })

let page = new Router();
page
    .get('/terry',async(ctx)=>{
        ctx.body = "page Terry page";
    })
    .get('/todo',async(ctx)=>{
        ctx.body = "page todo page";
    })

//父路由
let router = new Router();
router
    .use('/home',home.routes(),home.allowedMethods())
    .use('/page',page.routes(),page.allowedMethods())

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000,()=>{
        console.log(3000)
    });
