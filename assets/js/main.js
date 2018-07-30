// function show(){
//     document.getElementById("mySidenav").style.width = '250px';
// }

// function close(){
//     document.getElementById("mySidenav").style.width = '0';
// }

function show(){
    document.getElementById("mySidebar").style.display = "block";
}

function close(){
    document.getElementById("mySidebar").style.display = "none";
}


function getNumber(num){
    var_num = document.getElementById('display-value');
    switch(num){
        case 1:
         var_num.value += '1';
         break;
         case 2:
         var_num.value += '2';
         break;
         case 3:
         var_num.value += '3';
         break;
         case 4:
         var_num.value += '4';
         break;
         case 5:
         var_num.value += '5';
         break;
         case 6:
         var_num.value += '6';
         break;
         case 7:
         var_num.value += '7';
         break;
         case 8:
         var_num.value += '8';
         break;
         case 9:
         var_num.value += '9';
         break;
         case 0:
         var_num.value += '0';
         break;

    }
}

function leftBracket(){
    var_num = document.getElementById('display-value');
    // var bracket = var_num.value;
    var_num.value += '(';
}

function rightBracket(){
    var_num = document.getElementById('display-value');
    var_num.value += ')';
}

// clear the screen
function CE(){
    document.getElementById('display-value').value = "";
}


// perform operations

function getOperand(operand){
var var_num = document.getElementById('display-value');
switch(operand){
    case '+':
    var_num.value += '+';
    break;
    case '-':
    var_num.value += '-';
    break;
    case '*':
    var_num.value += '*';
    break;
    case '/':
    var_num.value += '/';
    break;
    case '+/-':
    var_num.value += '-' + var_num.value;
    break;
   

}
}


// perform backspace operation

function backspace(){
    var var_num = document.getElementById('display-value');
    var cut = var_num.value;
    if(cut.length > 0){
        cut = cut.substring(0, cut.length - 1); // remove the last char
        var_num.value = cut;
    }
}

// compute function

function equal(){
    var var_num = document.getElementById('display-value');
    output = Math.floor(+eval(var_num.value));
    // document.getElementById('display-value').value  = '=' + output;
    var_num.value = '=' + output;
}

// percentage function

function percent(operand){
    var var_num = document.getElementById('display-value');
   
    var perc = var_num.value/100;
    var_num.value = perc;
  
}

function dot(){
    var_num = document.getElementById('display-value');
    var dot = var_num.value + '.';
    var_num.value = dot;
    
}


function half(){
  var_num = document.getElementById('display-value');
  var half = 1/var_num.value;
  var_num.value = half;
}

function square(){
    var_num = document.getElementById('display-value');
    // var square = var_num.value * var_num.value;
    var square = Math.pow(var_num.value,2);
    var_num.value = square;
}

function sqrt(){
    var_num = document.getElementById('display-value');
    var sqrt = Math.sqrt(var_num.value);
    var_num.value = sqrt;
}


// function memoryPlus(){
//   var_num = document.getElementById('display-value');
//   if(var_num.value == ''){
//       return
     
//   }
//   var_num.value += "+" + var_num.value;
//  var_num.value 
// }





function pi_func(){
    var_num = document.getElementById('display-value');
    console.log(Math.PI);
    
    var pi = Math.PI;
    var_num.value = pi;
}

function Exp(){
    var_num = document.getElementById('display-value');
    var exp = Math.exp(var_num.value);
    var_num.value = exp;
}

function sin(){
    var_num = document.getElementById('display-value');
    var sin = Math.sin(var_num.value);
    var_num.value = sin;
}
function cos(){
    var_num = document.getElementById('display-value');
    var cos = Math.cos(var_num.value);
    var_num.value = cos;
}
function tan(){
    var_num = document.getElementById('display-value');
    var tan = Math.tan(var_num.value);
    var_num.value = tan;
}

function log(){
    var_num = document.getElementById('display-value');
    var log = Math.log(var_num.value);
    var_num.value = log;
}


function power(){
    var_num = document.getElementById('display-value');
    var ans=var_num.value, i;
    for(i=1; i < var_num.value; i++){
        ans = ans * var_num.value;
      
    }
    var_num.value = ans;
}


function powerValue(){
    var_num = document.getElementById('display-value');
    var ans = Math.pow(10, var_num.value);
    var_num.value = ans;
}


// function modulus(){
//     var_num = document.getElementById('display-value');
//     var ans = Math.mod(var_num.value);
//     var_num.value = ans;
// }
  

function factorial(){
    var_num = document.getElementById('display-value');
    var i, fact = 1;
    for(i=1;i<=var_num.value;i++){
        fact = fact * i;
    }
    var_num.value = fact;
}



function previous(){
    var prev = document.getElementById('maths-func1');
    var next = document.getElementById('maths-func2');
    if(prev.style.display === "block" || next.style.display === "none"){
        prev.style.display = "none";
        next.style.display = "block";
    }
    else
    {
        prev.style.display = "block";
        next.style.display = "none";
    }
 
}

function cube(){
    var_num = document.getElementById('display-value');
   
    var cube = Math.pow(var_num.value,3);
    var_num.value = cube;
}


function sinInv(){
    var_num = document.getElementById('display-value');
    var sinInv = Math.asin(var_num.value);
    var_num.value = sinInv;
}

function CosInv(){
    var_num = document.getElementById('display-value');
    var cosInv = Math.acos(var_num.value);
    var_num.value = cosInv;
}

function tanInv(){
    var_num = document.getElementById('display-value');
    var tanInv = Math.atan(var_num.value);
    var_num.value = tanInv;
}