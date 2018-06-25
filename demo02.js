const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    let url = ctx.url;
    // 从request中接受Get请求
    let request = ctx.request;
    let req_query = request.query; 
    let req_queryString = request.querystring; 

    // 从上下文中直接获取Get请求
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;

    ctx.body = {
        url,
        req_query,
        req_queryString,
        ctx_query,
        ctx_querystring
    }
});

app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})