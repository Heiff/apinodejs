const { Telegraf, Markup } = require('telegraf')


const TOKEN = "6060145833:AAFK6ysVC7R3ULJfa6vze8RAaJugubBO5oE";
const bot = new Telegraf(TOKEN);
const express = require('express');
const connectDB = require('./connectDB/ConnectDB');
const cors = require('cors');
const productsRoutes = require('./routes/ProductRoutes');



const web_link = "https://stately-bombolone-2274f1.netlify.app/";


bot.start((ctx) =>{
bot.telegram.sendMessage(ctx.chat.id,'Tanlang',{
   reply_markup:{
    keyboard:[
        ['WebApp','Contact'],
        [{text:'web',web_app:{url:web_link}}]
        
    ],
    resize_keyboard:true,
    one_time_keyboard:true
   }   
} )
})

bot.hears('WebApp',(ctx)=>{
    bot.telegram.sendMessage(ctx.chat.id,'webapp',{
        reply_markup:{
            inline_keyboard:[
                [{text:"webapp",web_app:{url:web_link}}]
            ]
        },
        resize_keyboard:true
    })
})
bot.hears("Contact",ctx=>{
ctx.reply('+998900243639')
})


connectDB();
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/Products', productsRoutes)
app.listen(3000,()=>console.log('succes 3000 PORT'))


bot.launch();




