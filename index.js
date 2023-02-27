const qr=require('qrcode');

let data ={
    "name": "Cambo",
    "email": "example@gmail.com",
    "gender": "male",
    "id": 123
}

let stJson=JSON.stringify(data)
qr.toDataURL(stJson,{type: "terminal"}, function(err, code){
    if(err){
       return console.log("error") 
    }
    console.log(code);
})