const express = require('express');
const app=express();

const port = process.env.PORT || 8000;

app.get("/",(req,res)=>{
	res.json({
		meta: {
			status: true,
			message: " i am akshat shrivastava and this is my second project",
			code: 200
		}
	});
});
		


app.listen(port,()=> console.log(`app running successfuly on port number ${port}...`));

module.exports = app;