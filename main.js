let result = "";
let is_calc = false;

window.onload = function(){
  result = document.getElementById('result');
};

//Cキー
function acbutton(){
  result.value = "0";
  is_calc = false;
}

//数字キー
function clickbutton(val){
  if(is_calc) result.value = "0";
  is_calc = false;

if(result.value == "0" && val == "0"){
  result.value = "0";
}else if(result.value == "0" && val == "."){
  result.value = "0.";
}else if(result.value == "0"){
  result.value = val;
}else{
  result.value += val;
 }
}

//.キー
function dotbutton(val){
  if(is_calc) is_calc = false;
  
  if(is_dot_last()){
    result.value = result.value.slice(0,-1) + val;
  }else{
    result.value += val;
  }
}

//演算子キー
function operatorbutton(val){
  if(is_calc) is_calc = false;
  
  if(is_operator_last()){
    result.value = result.value.slice(0,-1) + val;
  }else{
    result.value += val;
  }
}

//=キー
function equalbutton(){
  if(is_operator_last()) result.value = result.value.slice(0,-1);
  
  let temp = new Function("return " + result.value.replaceAll("×","*").replaceAll("÷","/"))();
  
  if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
  }else{
    result.value = temp;
    is_calc = true;
  }
}

//演算子か判断
function is_operator_last(){
  return ["+","-","×","÷"].includes(result.value.toString().slice(-1));
}

//.か判断
function is_dot_last(){
  return ["."].includes(result.value.toString().slice(-1));
}