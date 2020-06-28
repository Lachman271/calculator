


function getNumber(num){
    var result = document.getElementById("result")

    result.value += num;
}






function clearResult(){
    var result = document.getElementById("result")
    result.value = "";
}



function getResult()
{
    var result = document.getElementById("result")
    
    result.value = eval(result.value)
}




function negativeValue(){
    var result = document.getElementById("result")

    result.value = -(result.value);
}





// function defaltValue(){
//     var result = document.getElementById("result")

//     result.value="0";
// }

// defaltValue();



function squareRoot(){
    var result = document.getElementById("result")

    result.value = result.value * result.value;

    result.value=eval(result.value)
}



