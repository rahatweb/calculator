let screen = document.querySelector('#calculatorScreen');
let buttons = document.querySelectorAll('.btns');

let total = '';

let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click', function (e){
        if(e.target.innerHTML == '='){
            total = eval(total);
            screen.value = total;
        }else if(e.target.innerHTML == 'AC'){
            total = '';
            screen.value = total;
        } else if(e.target.innerHTML == 'DEL'){
            total = total.substring(0, total.length-1);
            screen.value = total;
        }
        else{
            total += e.target.innerHTML;
            screen.value = total;
        }
    })
})