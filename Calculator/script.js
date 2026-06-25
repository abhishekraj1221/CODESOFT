
const display = document.getElementById("display");


// ===========================
// Append Values
// ===========================

function append(value){

    display.value += value;

}


// ===========================
// Clear Display
// ===========================

function clearDisplay(){

    display.value = "";

}


// ===========================
// Delete Last Character
// ===========================

function deleteLast(){

    display.value = display.value.slice(0,-1);

}


// ===========================
// Calculate Result
// ===========================

function calculate(){

    try{

        if(display.value === "") return;

        display.value = eval(display.value);

    }

    catch{

        display.value = "Error";

        setTimeout(()=>{

            display.value="";

        },1000);

    }

}



// ===========================
// Keyboard Support
// ===========================

document.addEventListener("keydown",(event)=>{

    const key = event.key;

    if((key>='0' && key<='9') ||
        key==="+" ||
        key==="-" ||
        key==="*" ||
        key==="/" ||
        key==="." ||
        key==="%"){

        append(key);

    }

    else if(key==="Enter"){

        event.preventDefault();

        calculate();

    }

    else if(key==="Backspace"){

        deleteLast();

    }

    else if(key==="Delete"){

        clearDisplay();

    }

});



// ===========================
// Prevent Multiple Operators
// ===========================

const operators = ['+','-','*','/','%'];

function isOperator(ch){

    return operators.includes(ch);

}

const oldAppend = append;

append = function(value){

    if(display.value.length===0 && isOperator(value))
        return;

    const last = display.value.slice(-1);

    if(isOperator(last) && isOperator(value)){

        display.value =
        display.value.slice(0,-1)+value;

        return;

    }

    oldAppend(value);

};



// ===========================
// Prevent Multiple Decimal
// ===========================

const previousAppend = append;

append = function(value){

    if(value==="."){

        const parts =
        display.value.split(/[+\-*/%]/);

        const lastPart = parts[parts.length-1];

        if(lastPart.includes(".")){

            return;

        }

    }

    previousAppend(value);

};
