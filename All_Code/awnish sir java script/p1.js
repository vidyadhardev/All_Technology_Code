//no arguments no returns
//no arguments =>> no input type
// no returns => no return keyword
// defination context 
//state variable
var state={
student:{
name:"vidya Dhar",
age:"21"

}
}
//setstate function =>user define
function setstate(obj){
state=obj;
}
let newStudent={
name:"abhimanyu",
year:"22",
}
console.log("befor calling",state.student);
setstate({
student:newStudent
})
console.log("after calling",state.student);