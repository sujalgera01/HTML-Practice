const express = require('express')
const app = express()

const workshops = [
	{id: 1, name: 'workshop1'},
	{id: 2, name: 'workshop2'},
	{id: 3, name: 'workshop3'}
]


app.get('/',(req, res)=>{
	res.send('Hello')
})

app.get('/api/workshops', (req, res)=>{
	res.send(workshops)
})

app.listen(3000, () => {
	console.log('server running...')
})

