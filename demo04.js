const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');

app.use(bodyparser());

app.use(async(ctx)=>{
    if(ctx.url === '/' && ctx.method === 'GET'){
        // 显示表单页面
        let html = `
            <h1>Terry Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>username</p>
                <input name="username"/><br>
                <p>age</p>
                <input name="age"/><br>
                <p>website</p>
                <input name="website"/><br>
                <button type="submit">提交</button>
            </form>
        `;
        ctx.body = html;
    }else if(ctx.url === '/' && ctx.method === 'POST'){
        let postData = ctx.request.body;
        ctx.body = postData;
    }else{
        ctx.body = '<h1>404</h1>';
    }
})

app.listen(3000,()=>{
    console.log(3000)
})