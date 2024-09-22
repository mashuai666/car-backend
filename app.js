const express = require('express')
const app = express()

app.use('',(req,res)=>{
    res.send('ok')
})

app.listen(3000,()=>{
    console.log('服务器启动成功')
})