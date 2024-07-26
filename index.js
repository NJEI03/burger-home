const display= document.querySelector("#screen");
const buttons= document.querySelectorAll(".btn");
console.log(display);
console.log(buttons);

// To display any button clicked
// Method 1
for(var i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        console.log(this.innerHTML)
    })
}
// Method 2
// for(var i=0; i<buttons.length; i++){
//     btn=buttons[i];
//     btn.addEventListener('click', function(e){
//         console.log(e.target.innerText)
//     })
// }


// Method 3
// for (item of buttons){
//     item.addEventListener('click', function(e){
//         console.log(e.target.inneText)
//         console.log(item)
//     })
// }

// Method 4
buttons.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        console.log(e.target.innerText)
        // Now make the display to take more than one value
       


        //verify conditions
        
        switch (e.target.innerText) {
            case "x": 
            display.value += '*';
            break;
            case "÷": 
            display.value += '/';
            break;
            case "AC":
                clearScreen();
                break;
             case "π":
                    display.value+= 22/7
                    break;

            case "=":
                display.value = eval(display.value);
                break;
            case "sin":
                sin();
                break;
            case "cos":
                cos(); 
                break;
            case "tan":
                tan();
                break;
            case "log":
                log();
                break;
            case "e":
                expo();
                break;
            case "x^2":
                pow();
                break;
            case "√":
                sqrt(); 
                break;    
            case "x!":
                fact();
                break;
            case "DEL":
                deleteChar();
                break;
            case "Deg":
                radToDeg();
                e.target.innerText="Rad";
                break;
            case "Rad":
                degToRad();
                e.target.innerText="Deg";

            default: 
                display.value+=e.target.innerText; 
                
        } 
        
        
        
    })
})



// For the keyboard
document.addEventListener("keypress", function(e){
    displayScreen(e.key);
    
    
   
    
})
function displayScreen(key){
    switch (key) {
        case "0": 
        display.value += '0';
        break;
        case "1": 
        display.value += '1';
        break;
        case "2": 
        display.value += '2';
        break;
        case "3": 
        display.value += '3';
        break;
        case "4": 
        display.value += '4';
        break;
        case "5": 
        display.value += '5';
        break;
        case "6": 
        display.value += '6';
        break;
        case "7": 
        display.value += '7';
        break;
        case "8": 
        display.value += '8';
        break;
        case "9": 
        display.value += '9';
        break;
        case ".": 
        display.value += '.';
        break;
        case "^": 
        display.value += '^';
        break;
        case "x": 
        display.value += '*';
        break;
        case "÷": 
        display.value += '/';
        break;
        case "+": 
        display.value += '+';
        break;
        case "-": 
        display.value += '-';
        break;
        case "%": 
        display.value += '%';
        break;
        case "AC":
            clearScreen();
            break;
         case "π":
                display.value+= 22/7
                break;

        case "=":
            display.value = eval(display.value);
            break;
        case "sin":
            sin();
            break;
        case "cos":
            cos(); 
            break;
        case "tan":
            tan();
            break;
        case "log":
            log();
            break;
        case "e":
            expo();
            break;
        case "x^2":
            pow();
            break;
        case "√":
            sqrt(); 
            break;    
        case "x!":
            fact();
            break;
        case "backspace":
            deleteChar();
            break;
        default: 
            display.value+=e.target.innerText; 
            
    }
}



function clearScreen(){
                display.value= ""
                
}
function sin(){
    display.value=Math.sin(display.value);
}
function cos(){
    display.value=Math.cos(display.value)
}
function tan(){
    display.value=Math.tan(display.value)
}
function log(){
    display.value=Math.log10(display.value)
}
function expo(){
    display.value+= 2.7181822846;
}
function pow(){
    display.value=Math.pow(display.value,2);
}
function sqrt(){
    display.value=Math.sqrt(display.value,2);
}


function fact(){
    var num=display.value;
    var f,i;
    f=1;
    for(i=1; i<=num;i++){
        f=f*i;
        
    }
    display.value=f;
}

function deleteChar(){
    display.value= display.value.substr(0,display.value.length-1)
}
function degToRad(){
    display.value=display.value* Math.PI/180;
}
function radToDeg(){
    display.value=display.value*180/Math.PI;
}







