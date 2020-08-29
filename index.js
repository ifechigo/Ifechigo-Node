//required external modules
const express = require('express')
const path = require('path')


//app variables
const app = express()
const port = process.env.PORT || 3003

//app configuration
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))


//router definations
app.get('/', (req, res)=>{
    // res.status(200).send("WHATABITE: food for dev")
    res.render('index', {title: 'Home'})
})

app.get('/user', (req, res)=>{
    res.render('user', {title: "Profile", userProfile: {nickname: 'Sai'}})
})



//server activation
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})


