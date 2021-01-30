  
// plus button handler
plousButtonHandler ("plus-btn1", "first-class-input", "first-class-prise", 150);
plousButtonHandler ("plus-btn2", "economy-input", "second-class-prise", 100);
function plousButtonHandler (id, input, prise, number) {
       const plusButton = document.getElementById (id);
       plusButton.addEventListener("click", function () {

    ticketCountToPrice (true, input, prise, number);
    totalTicketPrise (150, 100);
 })
}
// minus button handler
minusButtonHandler ("minus-btn1", "first-class-input", "first-class-prise", 150);
minusButtonHandler ("minus-btn2", "economy-input", "second-class-prise", 100);
function minusButtonHandler (id, input, prise, number) {
       const minusButton = document.getElementById (id);
       minusButton.addEventListener("click", function () {

    ticketCountToPrice (false, input, prise, number);
    totalTicketPrise (150, 100);
 })
}
// input value  to current prise
 function ticketCountToPrice (isIncrease, input, prise, number) {

    const inputValueNum = inputValueToNumber (input);
    let increaseValue = inputValueNum;
    if (isIncrease == true) {
       increaseValue = inputValueNum + 1;
    }
    if (isIncrease == false) {
       increaseValue = inputValueNum - 1;
    }
    if (increaseValue < 0) {
       increaseValue = inputValueNum;
    }
    document.getElementById (input).value = increaseValue;
    const currentPrise =  increaseValue * number;
    document.getElementById (prise).innerText = currentPrise;
 }

// Subtotal, vat and total prise  
 function totalTicketPrise (prise1, prise2) {

    const phoneInput = inputValueToNumber ("first-class-input");
    const caseInput = inputValueToNumber ("economy-input");

    const SubtotalPrise = phoneInput * (prise1) + caseInput *  (prise2);
    document.getElementById ("subtotal-prise").innerText = '$ ' + SubtotalPrise;
    
    const tax = SubtotalPrise * 0.1;
    const taxCeil = Math.round (tax);
    document.getElementById ("tax").innerText = '$ ' + taxCeil;
    
    const totalPrise = taxCeil + SubtotalPrise;
    document.getElementById ("total-price"). innerText = "$ " + totalPrise;
// extra part ----------
    document.getElementById ("total-prise").innerText = "$ " + totalPrise;
    let totalTicket = phoneInput + caseInput;
    document.getElementById ("total-ticket").innerText =" " + totalTicket;
// extra part ^^^^^^^^^^^^^^^^^
 }
// innerText to number______________   
   function  innerTextToNumber (id) {
    const number = document.getElementById (id).innerText;
    const newNum = parseFloat (number);
    return newNum;
    }  
// innerText to number Function ^^^^^^^^^^^^^^^^^^^

// inputValue to number ___________________
 function inputValueToNumber (id) {
    const Value = document.getElementById (id).value;
    const ValueNum = parseInt (Value);
    return ValueNum;
 }
 // inputValue to number ^^^^^^^^^^^^^^^^^^^

 // extra part
   document.getElementById ("book-now-btn").addEventListener ("click", function () {
   document.getElementById ("bookingForm").style.display = 'none';
   document.getElementById ("flight-booked").style.display = "block";

   alert ("Are you sure you want to purchase these flights?")
 })