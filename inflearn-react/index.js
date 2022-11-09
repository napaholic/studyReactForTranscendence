const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const config = require('./config/key');

const { User } = require('./models/User')

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));//bodyParser가 client에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해줌

//application/json
app.use(bodyParser.json());//json 형식으로 된 것을 분석해서 가져올 수 있게 해줌

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
}).then(() => console.log('MongoDB Connected...' + config.mongoURI))
	.catch(err => console.log(err))



app.get('/', (req, res) => {
	res.send('Hello World! 안녕하세요')
})

app.post('/register', (req, res) => {
	// 회원 가입할 때 필요한 정보들을 client에서 가져오면
	// 그것들을 데이터베이스에 넣어준다.
	const user = new User(req.body)
	user.save((err, userInfo) => {
		if(err) return res.json({ success: false, err })
		return res.status(200).json({
			success: true
		})
	})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})