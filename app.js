let express = require('express')
let override=require('method-override')
let getrequest=require('./handler/request')
let app=express()
const port= process.env.PORT || 4000
let mongoose=require('mongoose')
app.use(override('_method'))
app.use(express.urlencoded({extended:false}))
mongoose.connect(mongodb+srv://Dhruva:godkiller>@cluster0.ko9i2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority || 'mongodb://localhost/database',{ useNewUrlParser: true , useUnifiedTopology: true } )
app.set('view engine','ejs')

app.use(express.static('./assets',{maxAge:31536000 } ))

app.use('/blog',getrequest.rout)
getrequest.index(app)
getrequest.About(app)
app.listen(port)
