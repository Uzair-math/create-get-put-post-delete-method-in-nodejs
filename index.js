
// HTTP Method


// ----------------- get API -----------------------

// const express = require('express')
// const app = express()
// const PORT = 3000;
// app.use(express.json())
// app.get("/get", (req,res)=>{
//     res.send("true")
// })
// app.listen(PORT, ()=>{
//     console.log("connect");
// })



// ----------------- put API -----------------------

// const express = require('express')
// const app = express();
// const PORT = 3000;
// app.put('/put',(req, res) => {
//     res.send("true")
// })

// app.listen(PORT, function (err) {
// if (err) console.log(err);
// else
//     console.log("Server listing on PROT", PORT);
// })


// ----------------- Post API -----------------------

// const express = require("express")
// // //const bodyParser = require("body-parser")
// const app = express()
// app.use(express.json())
// app.post("/posting/:id",function(req,res){
//     var num1 = req.body.num1
//     var num2 = req.body.num2
//     var result = num1 + num2;
//     res.send("Addition - " + result)
// })
// app.listen(3000,function(){
//     console.log("Server is running on port 3000");
// })


// ----------------- Patch API -----------------------

// const express = require('express');
// const app = express();
// app.use(express.json());

// // body pass
// // {
// //     "id": "1",
// //     "name": "uzair",
// //     "email": "uzair@gmail.com"
// //   }

// app.patch('/user', (req, res) => {
//   const email= req.body.email;
//   if (email) {
//     // user.name = name;
//     res.send(email)
//   }else{
//     res.send("false")
//   }
// });
// app.listen(3000, () => {
//   console.log('Server');
// });



// ----------------- Delete API -----------------------

// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.delete('/del', (req, res) => {
// 	res.send("DELETE Request Called")
// })

// app.listen(PORT, function (err) {
// 	if (err) console.log(err);
// 	console.log("Server listening on PORT", PORT);
// });


