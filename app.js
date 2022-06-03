const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const port = 8080;
const userCtrl = require("./controllers/userController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Home page");
});
//1. method for add user
app.post("/add", userCtrl.addUser);

//2. method for update the recode
app.put("/updateUser/:id", userCtrl.updateUser);

//3. method for find all the user recodes
app.get("/findAllUser", userCtrl.findAllUser);

//4. method for find any specific recods
app.get("/findOneUser/:id", userCtrl.findOneUser);

//5. method soft delete
app.delete("/softdelete/:id", userCtrl.deleteUser);

//6. method to restore the soft deleted data
app.get("/restore/:id", userCtrl.restorUser);

//7. method find by pk (primary  key)
app.get("/findByPK/:id", userCtrl.findByPK);

//8. method find and count all
app.get("/findAndCountAll/:gender", userCtrl.findAndCountAll);

//9. method to restore the soft deleted data by operator
app.get("/restoreByOperator", userCtrl.restorUserByOperator);

//10. count all data
app.get("/count/:gender", userCtrl.countData);

//11. count not soft deleted data
app.get("/notdeletedsoftdata", userCtrl.countnotdeleteddata);

//Operators
//1. Equal to
app.get("/operatorequalto", userCtrl.EqualToOperator);

//2. Greter than
app.get("/operatorgreaterthan", userCtrl.GreaterThenOperator);

//3. Less than
app.get("/operatorlessthan", userCtrl.LessThenOperator);

//4. Greter than equal to
app.get("/operatorgreaterthanequalto", userCtrl.GreaterThenEqualOperator);

//5. Less than equal to
app.get("/operatorlessthanequalto", userCtrl.LessThenEqualOperator);

//6. And operator
app.get("/operatorAnd", userCtrl.AndOperator);

//7. Or operator
app.get("/operatorOr", userCtrl.OrOperator);

//8. Not equal to
app.get("/notequaltooperator", userCtrl.notEqualto);
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
