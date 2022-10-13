const express = require('express');
const app= express();

const port=8080;
require('./models/config.js')
const userCtrl=require('./controller/userController');

app.get("/", (res, resp)=>{
    resp.send('welcome EveryBuddy')
});
try{
    app.get("/create", userCtrl.createRecord);
    app.get("/update", userCtrl.updateRecord);
    app.get("/delete", userCtrl.deleteRecord);
}catch(err){
    console.log('error->',err)
}




app.get("/userOneToOne", userCtrl.userOneToOne);

app.get("/emailUserOneToOne", userCtrl.emailUserOneToOne);

app.get("/userAccountBelongsTo", userCtrl.userAccountBelongsTo);

app.get("/manytomany", userCtrl.manytomany);

app.get("/lazyloading", userCtrl.lazyloading);
app.get("/eagerloading", userCtrl.eagerloading);

app.get("/hooks", userCtrl.hooks);

app.get("/voucherMapping", userCtrl.voucherMapping);






app.listen(port, ()=>{
    console.log('App listening at https://localhost:8080')
});



// app.get("/teamHasMany", userCtrl.teamHasMany);
// app.get("/parentOneToOne", userCtrl.parentOneToOne);

