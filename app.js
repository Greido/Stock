import express  from 'express';


const app = express()


app.get('/',(req,res)=>{
    res.send('Hola mundo')
})

app.listen(3000,() => {
    console.log('Sv express funcionando')
})