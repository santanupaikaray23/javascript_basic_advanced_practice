if (condition){

}else{
    var a  = 45342
    if(a%2==0){
        console.log(`Number ${a} is even`)
    }else{
        console.log(`Number ${a} is odd`)
    }
}

var name = "Santanu";
if(name=="Paikaray"){
    console.log(`Hi ${name} you are admin`)

}else if(name=="Sidhanta"){
    console.log(`Hi ${name} you are Super admin`)
}else{
    console.log(`Hi ${name} I don't know you`)
}

//any conditon can match
var name = "Tina"
if(name == "Tina" || name=="Nikita"){
    console.log(`hi ${name} you are welcome`)
}
//Both condition should match
var name = "Happy"
if(name=="Happy" && (role=="Admin" || role=="User")){
    console.log(`hi ${name} you are ${role}`)
}

var a = 1
if(a){
    console.log("hi")
}else{
    console.log("Bie")
}

var a = 0
if(a){
    console.log("Hi")
}else{
    console.log("Bie")
}

var a = -1
if(a){
    console.log("Hi")
}else{
    console.log("Bie")
}

var a = 45342
a%2==0

//////
var a = 10
a>10?"hiii":"Bie"