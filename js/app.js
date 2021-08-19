
 /* genaratePin function start */ 
 function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length ==4){
        return pin;
    }
    else{
        // console.log('got 3 digit' , pin);
        return getPin();
    }
    
 }
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;  

}
/* genaratePin function end */ 

/* key-pad , typed-number button using even bubble  start   */

document.getElementById('key-pad').addEventListener('click' , function(event){
    const number = event.target.innerText;
    const calcInput = document
    .getElementById('typed-numbers');

    if(isNaN(number)){
        if(number){
            calcInput.value = '';
        }
    }
    else{
        
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
    }
});
/* key-pad , typed-number button using even bubble  end   */

/* verify match generate and submit  start */
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successMessage = document.getElementById('notify-success');

    const failError = document.getElementById('notify-fail');

    if(pin == typedNumbers){

        successMessage.style.display = 'block';
        failError.style.display = 'none';

    }
    else{
        
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
};
/* verify match generate and submit  end */