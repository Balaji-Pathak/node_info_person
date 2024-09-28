const express = require('express');
const db = require("./db");
const app = express()
const port = 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!... this is my first experience of learning node js')
})
// app.get('/balaji', (req, res) => {
//   res.send('Hello World!... this page guves info about balaji')
// })
const persoRoutes = require("./routes/personRoutes");
app.use('/person', persoRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// const data  = req.body;
  // const newPerson = new Person(data);
  // newPerson.save((error,savedPerson)=>{
  //   if (error) {
  //     console.log("error occured" , error );
  //     res.status.json(500).json({error: 'internam error occured'});
  //   } else {
  //     console.log("data saved sucessfully ");
  //     res.status(200).json(savedPerson);
  //   }
  // })
  // newPerson.name = data.name;
  // newPerson.age = data.age;
  // newPerson.work = data.work;
  // newPerson.mobile = data.mobile;
  // newPerson.salary = data.salary;