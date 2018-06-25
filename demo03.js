const Koa = require('koa');
const app = new Koa();
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
        let postData = await parsePostData(ctx);
        ctx.body = postData;
    }else{
        ctx.body = '<h1>404</h1>';
    }
})

function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let postData = "";
            ctx.req.addListener('data',(data)=>{
                postData += data;
            })
            ctx.req.on('end',()=>{
                let postdata = parseQueryStr(postData)
                resolve(postdata);
            })
        }catch(error){
            reject(error)
        }
    })
}

function parseQueryStr(queryStr){
    let queryData = {};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    for (let [index,queryString] of queryStrList.entries()) {
        let itemList = queryString.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
}

app.listen(3000,()=>{
    console.log(3000)
})