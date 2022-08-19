// document.getElementById("case-plus").addEventListener('click', function(){
//     const caseNumberField = document.getElementById("case-num-field");
//     const caseNumberString = caseNumberField.value;
//     const priviousCaseNumber = parseFloat(caseNumberString);

//     const newCaseNumber = priviousCaseNumber + 1;
//     caseNumberField.value = newCaseNumber;
// })

// document.getElementById("case-minus").addEventListener('click', function(){
//     const caseNumberField = document.getElementById("case-num-field");
//     const caseNumberString = caseNumberField.value;
//     const priviousCaseNumber = parseInt(caseNumberString);
//     const newCaseNumber = priviousCaseNumber - 1;
//     caseNumberField.value = newCaseNumber;

// })

  //-------Uses the function-----//

function updateCaseNumber(isIcrease){
    const caseNumberField = document.getElementById("case-num-field");
    const caseNumberString = caseNumberField.value;
    const priviousCaseNumber = parseFloat(caseNumberString);

    let newCaseNumber;
    if(isIcrease === true){
        newCaseNumber = priviousCaseNumber + 1;
    }

    else{
        newCaseNumber = priviousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

document.getElementById("case-plus").addEventListener('click', function(){
   const newCaseNumber = updateCaseNumber(true);
   const caseTotalPrice = newCaseNumber * 59;
   const caseTotalElement = document.getElementById("case-total");
   caseTotalElement.innerText = caseTotalPrice;
});


document.getElementById("case-minus").addEventListener('click', function(){
    updateCaseNumber(false)
})
