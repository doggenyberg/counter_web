// --- Date & Time  --- //

//Function
function getTime() {
    // Time
    const _date = new Date();
    let _hour = (_date.getHours()).toString();
    let _minutes = (_date.getMinutes()).toString();

    if (_hour.length < 2) {
        _hour = "0" + _hour;
    }

    if (_minutes.length < 2) {
        _minutes = "0" + _minutes
    }

    const time = `${_hour}:${_minutes}`;

    // Date
    const _year = _date.getFullYear();
    const _month = _date.getMonth() + 1;
    const _day = _date.getDate();
    const date = `${_day}/${_month}`;

    // Update HTML
    timeHTML.innerHTML = time;
    dateHTML.innerHTML = date;
    yearHTML.innerHTML = _year;
}
setInterval(getTime, 1000)

// Import HTML
const timeHTML = document.getElementById('time');
const dateHTML = document.getElementById('date');
const yearHTML = document.getElementById('year');


// --- Counters  --- //

// Functions
// Change color depending on value
function updateColor(selector) {
    const red = '#CA3E47';
    const yellow = '#e7c736';
    const green = '#66ca3e';
    const blue = '#3eb5ca';
    const purple = '#ca3eac';
    if (selector = callCounterHTML) {
        let value = selector.innerHTML;
        if (value > 0 && value < 4) {
            selector.style.color = red;
        }
        if (value > 3 && value < 8) {
            selector.style.color = yellow;
        }
        if (value > 7 && value < 12) {
            selector.style.color = green;
        }
        if (value > 11 && value < 20) {
            selector.style.color = blue;
        }
        if (value > 19) {
            selector.style.color = purple;
        }
    }
    if (selector = solvedCounterHTML) {
        let value = selector.innerHTML;
        if (value >= 0 && value < 1) {
            selector.style.color = red;
        }
        if (value >= 1 && value < 3) {
            selector.style.color = yellow;
        }
        if (value >= 3 && value < 6) {
            selector.style.color = green;
        }
        if (value >= 6 && value < 10) {
            selector.style.color = blue;
        }
        if (value >= 10) {
            selector.style.color = purple;
        }
    }
}

// Plus buttons update counters
function buttonAdd(selector, button) {
    if (button.disabled = true) {
        button.disabled = false;
    }
    selector.innerHTML = Number(selector.innerHTML) + 1;
    updateColor(selector)
}

// Minus buttons update counters
function buttonRemove(selector, button) {
    if (Number(selector.innerHTML) === 0) {
        button.disabled = true;
        return
    }
    selector.innerHTML = Number(selector.innerHTML) - 1;
    updateColor(selector)
}

// Import HTML
const callCounterHTML = document.getElementById('counter-calls');
const solvedCounterHTML = document.getElementById('counter-solved');
const callCounterButtonPlus = document.getElementById('button-plus-cc');
const callCounterButtonMinus = document.getElementById('button-minus-cc');
const solvedCounterButtonPlus = document.getElementById('button-plus-cs');
const solvedCounterButtonMinus = document.getElementById('button-minus-cs');

// Eventlisteners
callCounterButtonPlus.addEventListener('click', () => {buttonAdd(callCounterHTML, callCounterButtonMinus)});
solvedCounterButtonPlus.addEventListener('click', () => {buttonAdd(solvedCounterHTML, solvedCounterButtonMinus)});
callCounterButtonMinus.addEventListener('click', () => {buttonRemove(callCounterHTML, callCounterButtonMinus)});
solvedCounterButtonMinus.addEventListener('click', () => {buttonRemove(solvedCounterHTML, solvedCounterButtonMinus)});

// --- Modal --- //

function closeModalWindow(window) {
    window.style.top = '-100%';
    window.style.visibility = 'hidden';
    
}

function openModalWindow(window) {
    window.style.visibility = 'visible';
    window.style.top = '0';
}

function firstPage() {
    modalPageFirst.style.left = '20px';
    modalPageSamtalskvalitet.style.left = '600px';
    modalPageSamtalsexempel.style.left = '600px';
    modalPageSamtalsexempel.style.top = '60px';
    modalPageSamtalsexempel2.style.top = '550px';
    modalPageSamtalsexempel3.style.top = '550px';
    modalPageFinal.style.left = '600px';
}

function nextPage(currentPage, nextPage) {
    if (currentPage === modalPageSamtalsexempel2 || currentPage === modalPageSamtalsexempel3) {
        nextPage.style.left = '20px';
        currentPage.style.top = '550px';
        return
    }
    if (currentPage === modalPageFirst) {
        currentPage.style.left = '-600px';
        nextPage.style.left = '20px';
        return
    }
    currentPage.style.left = '-600px';
    nextPage.style.left = '20px';
    modalPageSamtalsexempel.style.top = '60px';
    modalPageSamtalsexempel2.style.top = '550px';
}

function previousPage(currentPage, previousPage) {
    if (currentPage === modalPageSamtalsexempel2 || currentPage === modalPageSamtalsexempel3) {
        previousPage.style.left = '20px';
        currentPage.style.top = '550px';
        return
    }
    if (currentPage === modalPageSamtalskvalitet) {
        currentPage.style.left = '600px';
        previousPage.style.left = '20px';
        return
    }
    currentPage.style.left = '600px';
    previousPage.style.left = '20px';
    modalPageSamtalsexempel.style.top = '60px';
    modalPageSamtalsexempel2.style.top = '550px';
}

function qlPage (currentPage, nextPage, previousPage) {
    currentPage.style.left = '600px';
    nextPage.style.left = '20px';
    if (previousPage) {
        previousPage.style.left = '600px';
    }
}

function addExample(currentPage, nextPage) {
    nextPage.style.top = '60px';
    currentPage.style.top = '-500px';
}

function checkboxStatus(cb, divSelect, divManual) {
    if (cb.checked) {
        divSelect.style.display = 'none';
        divManual.style.display = 'flex';
        return
    } else {
        divSelect.style.display = 'flex';
        divManual.style.display = 'none';
    }
}

function addSub(number, imsi) {
    if (subArray.length === 4) {
        alert('Du kan bara lägga till 4 abonnemang');
        return
    };
    if (!number || !imsi) {
        alert('Telefonnummer & IMSI måste vara angivet.')
        return
    };

    // add element to select on form "samtalsexempel"
    function addSelect(select) {
        // check if number is already an option in the select element
        let duplicate = false;
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value === number) {
                duplicate = true;
                break;
            }
        }
        // if number is not a duplicate, add it as an option
        if (!duplicate) {
            let option = document.createElement('option');
            option.value = number;
            option.innerText = number;
            select.appendChild(option);
        }
    };

    // remove element from select on form "samtalsexempel"
    function removeSelect(object) {
        modalSamtalsexempelSelectA.querySelector(`option[value='${object}']`).remove();
        modalSamtalsexempelSelectB.querySelector(`option[value='${object}']`).remove();
        modalSamtalsexempelSelectA2.querySelector(`option[value='${object}']`).remove();
        modalSamtalsexempelSelectB2.querySelector(`option[value='${object}']`).remove();
        modalSamtalsexempelSelectA3.querySelector(`option[value='${object}']`).remove();
        modalSamtalsexempelSelectB3.querySelector(`option[value='${object}']`).remove();
    };

    // create new div & add "sub" class
    const newSubDiv = document.createElement('div');
    newSubDiv.classList.add('sub');

    // create new h3 elements representing number & imsi
    const numberElement = document.createElement('h3');
    numberElement.innerText = number;
    const imsiElement = document.createElement('h3');
    imsiElement.innerText = imsi;

    // create span (delete button) with class "material-symbols-outlined"
    const deleteSpan = document.createElement('span');
    deleteSpan.setAttribute('id', 'sub-delete')
    deleteSpan.classList.add('material-symbols-outlined');
    deleteSpan.innerText = 'delete';

    // append h3 and span elements to the new div
    newSubDiv.appendChild(numberElement);
    newSubDiv.appendChild(imsiElement);
    newSubDiv.appendChild(deleteSpan);

    // add newSubDiv to DOM
    document.getElementById('subs-parent').appendChild(newSubDiv);

    // create eventlistener to deleteSpan
    deleteSpan.addEventListener("click", function() {
        // remove selected number from select element in form "samtalsexempel"
        removeSelect(number)
        // remove the parent div element when the deleteSpan is clicked
        newSubDiv.remove();
        // remove the same div element from subArray
        subArray = subArray.filter(function(obj){
        return obj.number !== number && obj.imsi !== imsi;
        });
    });

    // add values to array
    subArray.push({number: number, imsi: imsi});

    addSelect(modalSamtalsexempelSelectA);
    addSelect(modalSamtalsexempelSelectB);
    addSelect(modalSamtalsexempelSelectA2);
    addSelect(modalSamtalsexempelSelectB2);
    addSelect(modalSamtalsexempelSelectA3);
    addSelect(modalSamtalsexempelSelectB3);

    // reset input value
    modalSubNumber.value = '';
    modalImsiNumber.value = '';
}

function resetValues() {
    function deleteChilds(parentArray) {
        parentArray.forEach(parent => {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        });
        firstPage();
    };

    deleteChilds(selectArray);
    
    modalFinalMall.value = '';
    
    document.getElementById('service').value = '';
    document.getElementById('total-users-affected').value = '';
    document.getElementById('sub-number').value = '';
    document.getElementById('sub-imsi').value = '';
    document.getElementById('location-based').value = '';
    document.getElementById('address').value = '';
    document.getElementById('problem-started').value = '';
    document.getElementById('detailed-description').value = '';

    document.getElementById('sub-select-a').value = '';
    document.getElementById('cb-a').checked = false;
    checkboxStatus(modalSamtalsexempelCheckboxA, modalSamtalsexempelASelect, modalSamtalsexempelAManual);
    document.getElementById('sub-select-b').value = '';
    document.getElementById('cb-b').checked = false;
    checkboxStatus(modalSamtalsexempelCheckboxB, modalSamtalsexempelBSelect, modalSamtalsexempelBManual);
    document.getElementById('a-phonenumber-manually').value = '';
    document.getElementById('a-imsi-manually').value = '';
    document.getElementById('b-phonenumber-manually').value = '';
    document.getElementById('b-imsi-manually').value = '';
    document.getElementById('example-date').value = '';
    document.getElementById('example-time').value = '';


    
    document.getElementById('sub-select-a-2').value = '';
    document.getElementById('cb-a-2').checked = false;
    checkboxStatus(modalSamtalsexempelCheckboxA2, modalSamtalsexempelASelect2, modalSamtalsexempelAManual2);
    document.getElementById('sub-select-b-2').value = '';
    document.getElementById('cb-b-2').checked = false;
    checkboxStatus(modalSamtalsexempelCheckboxB2, modalSamtalsexempelBSelect2, modalSamtalsexempelBManual2);
    document.getElementById('a-phonenumber-manually-2').value = '';
    document.getElementById('a-imsi-manually-2').value = '';
    document.getElementById('b-phonenumber-manually-2').value = '';
    document.getElementById('b-imsi-manually-2').value = '';
    document.getElementById('example-date-2').value = '';
    document.getElementById('example-time-2').value = '';

    document.getElementById('sub-select-a-3').value = '';
    document.getElementById('cb-a-3').checked = false;
    checkboxStatus(modalSamtalsexempelCheckboxA3, modalSamtalsexempelASelect3, modalSamtalsexempelAManual3);
    document.getElementById('sub-select-b-3').value = '';
    document.getElementById('cb-b-3').checked = false;
    checkboxStatus(modalSamtalsexempelCheckboxB3, modalSamtalsexempelBSelect3, modalSamtalsexempelBManual3);
    document.getElementById('a-phonenumber-manually-3').value = '';
    document.getElementById('a-imsi-manually-3').value = '';
    document.getElementById('b-phonenumber-manually-3').value = '';
    document.getElementById('b-imsi-manually-3').value = '';
    document.getElementById('example-date-3').value = '';
    document.getElementById('example-time-3').value = '';
};

// Sub array
let subArray = [];

// Import HTML
const modalEskaleringExitButton = document.getElementById('exit-button');
const modalEskaleringResetButton = document.getElementById('reset-button');

const modalEskaleringOpenButton = document.getElementById('button-escalate');
const modalEskaleringWindow = document.getElementById('eskalering-window');

// Import HTML Pages
const modalPageFirst = document.getElementById('eskalering1');
const modalPageSamtalskvalitet = document.getElementById('samtalskvalitet');
const modalPageSamtalsexempel = document.getElementById('samtalsexempel');
const modalPageSamtalsexempel2 = document.getElementById('samtalsexempel2');
const modalPageSamtalsexempel3 = document.getElementById('samtalsexempel3');
const modalPageFinal = document.getElementById('eskalering-final');

// Import HTML Buttons
const modalEskaleringNextButton1 = document.getElementById('button-next-1');
const modalEskaleringNextButton2 = document.getElementById('button-next-2');
const modalEskaleringNextButton3 = document.getElementById('button-next-3');
const modalEskaleringNextButton4 = document.getElementById('button-next-4');
const modalEskaleringNextButton5 = document.getElementById('button-next-5');

const modalEskaleringBackButton2 = document.getElementById('button-back-2');
const modalEskaleringBackButton3 = document.getElementById('button-back-3');
const modalEskaleringBackButton4 = document.getElementById('button-back-4');
const modalEskaleringBackButton5 = document.getElementById('button-back-5');
const modalEskaleringBackButton6 = document.getElementById('button-back-6');

const modalEskaleringAddExample = document.getElementById('button-add-example');
const modalEskaleringAddExample2 = document.getElementById('button-add-example-2');
const modalEskaleringAddExample3 = document.getElementById('button-add-example-3');

const modalEskaleringDoneButton = document.getElementById('done');

// Import HTML Inputs & Options
const modalLocationBased = document.getElementById('location-based');
const modalAddress = document.getElementById('address');
if (modalLocationBased.value === 'Nej') {
    modalAddress.disabled = true;
} else {
    modalAddress.disabled = false;
}

const modalSubNumber = document.getElementById('sub-number');
const modalImsiNumber = document.getElementById('sub-imsi');
const modalButtonAdd = document.getElementById('sub-button-add');
const modalSubsParent = document.getElementById('subs-parent');
const modalSamtalsexempelSelectA = document.getElementById('sub-select-a')
const modalSamtalsexempelSelectB = document.getElementById('sub-select-b')
const modalSamtalsexempelSelectA2 = document.getElementById('sub-select-a-2')
const modalSamtalsexempelSelectB2 = document.getElementById('sub-select-b-2')
const modalSamtalsexempelSelectA3 = document.getElementById('sub-select-a-3')
const modalSamtalsexempelSelectB3 = document.getElementById('sub-select-b-3')
const modalSamtalsexempelASelect = document.getElementById('select-a');
const modalSamtalsexempelAManual = document.getElementById('manual-a');
const modalSamtalsexempelANumberManual = document.getElementById('a-phonenumber-manually')
const modalSamtalsexempelAImsiManual = document.getElementById('a-imsi-manually');
const modalSamtalsexempelCheckboxA = document.getElementById('cb-a');
const modalSamtalsexempelBSelect = document.getElementById('select-b');
const modalSamtalsexempelBManual = document.getElementById('manual-b');
const modalSamtalsexempelBNumberManual = document.getElementById('b-phonenumber-manually');
const modalSamtalsexempelBImsiManual = document.getElementById('b-imsi-manually');
const modalSamtalsexempelCheckboxB = document.getElementById('cb-b');
const modalSamtalsexempelASelect2 = document.getElementById('select-a-2');
const modalSamtalsexempelAManual2 = document.getElementById('manual-a-2');
const modalSamtalsexempelANumberManual2 = document.getElementById('a-phonenumber-manually-2')
const modalSamtalsexempelAImsiManual2 = document.getElementById('a-imsi-manually-2');
const modalSamtalsexempelCheckboxA2 = document.getElementById('cb-a-2');
const modalSamtalsexempelBSelect2 = document.getElementById('select-b-2');
const modalSamtalsexempelBManual2 = document.getElementById('manual-b-2');
const modalSamtalsexempelBNumberManual2 = document.getElementById('b-phonenumber-manually-2');
const modalSamtalsexempelBImsiManual2 = document.getElementById('b-imsi-manually-2');
const modalSamtalsexempelCheckboxB2 = document.getElementById('cb-b-2');
const modalSamtalsexempelASelect3 = document.getElementById('select-a-3');
const modalSamtalsexempelAManual3 = document.getElementById('manual-a-3');
const modalSamtalsexempelANumberManual3 = document.getElementById('a-phonenumber-manually-3')
const modalSamtalsexempelAImsiManual3 = document.getElementById('a-imsi-manually-3');
const modalSamtalsexempelCheckboxA3 = document.getElementById('cb-a-3');
const modalSamtalsexempelBSelect3 = document.getElementById('select-b-3');
const modalSamtalsexempelBManual3 = document.getElementById('manual-b-3');
const modalSamtalsexempelBNumberManual3 = document.getElementById('b-phonenumber-manually-3');
const modalSamtalsexempelBImsiManual3 = document.getElementById('b-imsi-manually-3');
const modalSamtalsexempelCheckboxB3 = document.getElementById('cb-b-3');

const modalSamtalsexempelDate = document.getElementById('example-date');
const modalSamtalsexempelDate2 = document.getElementById('example-date-2');
const modalSamtalsexempelDate3 = document.getElementById('example-date-3');
const modalSamtalsexempelTime = document.getElementById('example-time');
const modalSamtalsexempelTime2 = document.getElementById('example-time-2');
const modalSamtalsexempelTime3 = document.getElementById('example-time-3');

// Array which is used in resetValues function
const selectArray = [modalSubsParent, modalSamtalsexempelSelectA, modalSamtalsexempelSelectB, modalSamtalsexempelSelectA2, modalSamtalsexempelSelectB2, modalSamtalsexempelSelectA3, modalSamtalsexempelSelectB3];

// Samtalsexempel
let modalSamtalsexempel = [];

function importSamtalsexempel(aNumberSelect, aNumberManual, aImsiManual, bNumberSelect, bNumberManual, bImsiManual, checkboxA, checkboxB, dateExempel, timeExempel) {
    let aNumber;
    let aImsi;
    let bNumber;
    let bImsi;
    let date;
    let time;

    // Import A-number manual
    if (checkboxA.checked) {
        aNumber = aNumberManual.value;
        aImsi = aImsiManual.value;
    // If A-number is not manual, import selected.
    } else {
        aNumber = aNumberSelect.value;
        let result = subArray.find(o => o.number === aNumber);
        if (result) {
            aImsi = result.imsi;
        }
    }
    // Import B-number manual
    if (checkboxB.checked) {
        bNumber = bNumberManual.value;
        bImsi = bImsiManual.value;
    // If B-number is not manual, import selected.
    } else {
        bNumber = bNumberSelect.value;
        let result = subArray.find(o => o.number === bNumber);
        if (result) {
            bImsi = result.imsi;
        }      
    }
    // Import date & time
    date = dateExempel.value;
    time = timeExempel.value;

    console.log(aNumber, aImsi, bNumber, bImsi, date, time)
    modalSamtalsexempel.push({aNumber, aImsi, bNumber, bImsi, date, time})
}
// Samtalsexempel Import input


// -- Final mall -- //
const modalFinalMall = document.getElementById('final-mall');

// Functions

// takes all values and prints them on final page textarea
function submitForm() {
    modalFinalMall.value = '';
    modalSamtalsexempel = [];

    let service = document.getElementById('service').value;
    let totalAffected = document.getElementById('total-users-affected').value;
    let locationBased = document.getElementById('location-based').value;
    let address = document.getElementById('address').value;
    let problemStarted = document.getElementById('problem-started').value;
    let detailedDescription = document.getElementById('detailed-description').value;

    if (service) {
        console.log(service);
        modalFinalMall.value = '// FEL' + '\n';
        modalFinalMall.value += service + '\n' + '\n';
    };
    if (problemStarted || totalAffected || locationBased || address) {
        modalFinalMall.value += '// INFO' + '\n';
    }
    if (problemStarted) {
        modalFinalMall.value += 'Problem började: ' + problemStarted + '\n';
    }
    if (totalAffected) {
        modalFinalMall.value += 'Antal påverkade användare: ' + totalAffected + '\n';
    };
    if (locationBased) {
        modalFinalMall.value += 'Platsrelaterat: '+ locationBased + '\n';
    };
    if (address) {
        modalFinalMall.value += 'Adress: '+ address + '\n';
    };
    if (detailedDescription) {
        modalFinalMall.value += '\n' + '// DETALJERAD BESKRIVNING' + '\n' + detailedDescription + '\n';
    };
    if (subArray.length > 0) {
        modalFinalMall.value += '\n' + '// PÅVERKADE ABONNEMANG' + '\n';
        for (let i = 0; i < subArray.length; i++) {
            modalFinalMall.value += subArray[i].number + ' | IMSI ' + subArray[i].imsi + '\n';
        }
    }
    if (modalSamtalsexempelDate.value && modalSamtalsexempelTime.value) {
        importSamtalsexempel(modalSamtalsexempelSelectA, modalSamtalsexempelANumberManual, modalSamtalsexempelAImsiManual, modalSamtalsexempelSelectB, modalSamtalsexempelBNumberManual, modalSamtalsexempelBImsiManual, modalSamtalsexempelCheckboxA, modalSamtalsexempelCheckboxB, modalSamtalsexempelDate, modalSamtalsexempelTime);
        modalFinalMall.value += '\n' + '// SAMTALSEXEMPEL' + '\n';
        modalFinalMall.value += 'A-part: ' + modalSamtalsexempel[0].aNumber +' | IMSI '+ modalSamtalsexempel[0].aImsi + '\n';
        modalFinalMall.value += 'B-part: '+ modalSamtalsexempel[0].bNumber +' | IMSI '+ modalSamtalsexempel[0].bImsi + '\n';
        modalFinalMall.value += 'Datum: ' + modalSamtalsexempel[0].date + '\n';
        modalFinalMall.value += 'Tid: ' + modalSamtalsexempel[0].time + '\n';
    }
    if (modalSamtalsexempelDate2.value && modalSamtalsexempelTime2.value) {
        importSamtalsexempel(modalSamtalsexempelSelectA2, modalSamtalsexempelANumberManual2, modalSamtalsexempelAImsiManual2, modalSamtalsexempelSelectB2, modalSamtalsexempelBNumberManual2, modalSamtalsexempelBImsiManual2, modalSamtalsexempelCheckboxA2, modalSamtalsexempelCheckboxB2, modalSamtalsexempelDate2, modalSamtalsexempelTime2);
        modalFinalMall.value += '\n' + 'A-part: ' + modalSamtalsexempel[1].aNumber +' | IMSI '+ modalSamtalsexempel[1].aImsi + '\n';
        modalFinalMall.value += 'B-part: '+ modalSamtalsexempel[1].bNumber +' | IMSI '+ modalSamtalsexempel[1].bImsi + '\n';
        modalFinalMall.value += 'Datum: ' + modalSamtalsexempel[1].date + '\n';
        modalFinalMall.value += 'Tid: ' + modalSamtalsexempel[1].time + '\n';
    }
    if (modalSamtalsexempelDate3.value && modalSamtalsexempelTime3.value) {
        importSamtalsexempel(modalSamtalsexempelSelectA3, modalSamtalsexempelANumberManual3, modalSamtalsexempelAImsiManual3, modalSamtalsexempelSelectB3, modalSamtalsexempelBNumberManual3, modalSamtalsexempelBImsiManual3, modalSamtalsexempelCheckboxA3, modalSamtalsexempelCheckboxB3, modalSamtalsexempelDate3, modalSamtalsexempelTime3);
        modalFinalMall.value += '\n' + 'A-part: ' + modalSamtalsexempel[2].aNumber +' | IMSI '+ modalSamtalsexempel[2].aImsi + '\n';
        modalFinalMall.value += 'B-part: '+ modalSamtalsexempel[2].bNumber +' | IMSI '+ modalSamtalsexempel[2].bImsi + '\n';
        modalFinalMall.value += 'Datum: ' + modalSamtalsexempel[2].date + '\n';
        modalFinalMall.value += 'Tid: ' + modalSamtalsexempel[2].time + '\n';
    }
}

// Eventlisteners inputs
modalLocationBased.addEventListener('change', (e) => {
    if (e.target.value === 'Nej') {
        modalAddress.disabled = true;
    } else {
        modalAddress.disabled = false;
    }
});

// Eventlisteners Buttons
modalEskaleringExitButton.addEventListener('click', () => {closeModalWindow(modalEskaleringWindow)});
modalEskaleringOpenButton.addEventListener('click', () => {openModalWindow(modalEskaleringWindow)});

modalEskaleringResetButton.addEventListener('click', () => {resetValues()});

modalEskaleringNextButton1.addEventListener('click', () => {nextPage(modalPageFirst, modalPageSamtalskvalitet)});
modalEskaleringNextButton2.addEventListener('click', () => {nextPage(modalPageSamtalskvalitet, modalPageSamtalsexempel)});
modalEskaleringNextButton3.addEventListener('click', () => {submitForm(); nextPage(modalPageSamtalsexempel, modalPageFinal)});
modalEskaleringNextButton4.addEventListener('click', () => {submitForm(); nextPage(modalPageSamtalsexempel2, modalPageFinal)});
modalEskaleringNextButton5.addEventListener('click', () => {submitForm(); nextPage(modalPageSamtalsexempel3, modalPageFinal)});

modalEskaleringBackButton2.addEventListener('click', () => {previousPage(modalPageSamtalskvalitet, modalPageFirst)});
modalEskaleringBackButton3.addEventListener('click', () => {previousPage(modalPageSamtalsexempel, modalPageSamtalskvalitet)});
modalEskaleringBackButton4.addEventListener('click', () => {previousPage(modalPageSamtalsexempel2, modalPageSamtalskvalitet)});
modalEskaleringBackButton5.addEventListener('click', () => {previousPage(modalPageSamtalsexempel3, modalPageSamtalskvalitet)});
modalEskaleringBackButton6.addEventListener('click', () => {previousPage(modalPageFinal, modalPageSamtalsexempel)});

modalEskaleringAddExample.addEventListener('click', () => {addExample(modalPageSamtalsexempel, modalPageSamtalsexempel2)});
modalEskaleringAddExample2.addEventListener('click', () => {addExample(modalPageSamtalsexempel2, modalPageSamtalsexempel3)});

modalEskaleringDoneButton.addEventListener('click', () => {closeModalWindow(modalEskaleringWindow)});


// Eventlisteners Inputs & Options
modalButtonAdd.addEventListener('click', () => {addSub(modalSubNumber.value, modalImsiNumber.value)});
modalSamtalsexempelCheckboxA.addEventListener('change', () => {checkboxStatus(modalSamtalsexempelCheckboxA, modalSamtalsexempelASelect, modalSamtalsexempelAManual)});
modalSamtalsexempelCheckboxA.checked = false;
modalSamtalsexempelCheckboxB.addEventListener('change', () => {checkboxStatus(modalSamtalsexempelCheckboxB, modalSamtalsexempelBSelect, modalSamtalsexempelBManual)});
modalSamtalsexempelCheckboxB.checked = false;
modalSamtalsexempelCheckboxA2.addEventListener('change', () => {checkboxStatus(modalSamtalsexempelCheckboxA2, modalSamtalsexempelASelect2, modalSamtalsexempelAManual2)});
modalSamtalsexempelCheckboxA2.checked = false;
modalSamtalsexempelCheckboxB2.addEventListener('change', () => {checkboxStatus(modalSamtalsexempelCheckboxB2, modalSamtalsexempelBSelect2, modalSamtalsexempelBManual2)});
modalSamtalsexempelCheckboxB2.checked = false;
modalSamtalsexempelCheckboxA3.addEventListener('change', () => {checkboxStatus(modalSamtalsexempelCheckboxA3, modalSamtalsexempelASelect3, modalSamtalsexempelAManual3)});
modalSamtalsexempelCheckboxA3.checked = false;
modalSamtalsexempelCheckboxB3.addEventListener('change', () => {checkboxStatus(modalSamtalsexempelCheckboxB3, modalSamtalsexempelBSelect3, modalSamtalsexempelBManual3)});
modalSamtalsexempelCheckboxB3.checked = false;

// --- Troubleshooting --- //


// Import HTML
const modalTSWindow = document.getElementById('troubleshooting-window');

// Import Input & Button
const modalTSOpenBtn = document.getElementById('button-ts');
const modalTSCloseBtn = document.getElementById('ts-exit-button');
const modalTSPageFirst = document.getElementById('ts-first');

const modalTSPageSamtalFirst = document.getElementById('ts-samtal-first');
const modalTSSamtalBtn = document.getElementById('si-samtal');
const modalTSSamtalBtnBack = document.getElementById('button-back-samtal');

const modalTSPageIncoming = document.getElementById('ts-samtal-incoming');
const modalTSIncomingBtn = document.getElementById('si-call-inc');
const modalTSIncomingBtnBack = document.getElementById('button-back-incoming');

const modalTSPageOutbound = document.getElementById('ts-samtal-outbound');
const modalTSOutboundBtn = document.getElementById('si-call-out');
const modalTSOutboundBtnBack = document.getElementById('button-back-outbound');

const modalTSPageAbroad = document.getElementById('ts-samtal-abroad');
const modalTSAbroadBtn = document.getElementById('si-call-abroad');
const modalTSAbroadBtnBack = document.getElementById('button-back-abroad');

const modalTSPageSpecific = document.getElementById('ts-samtal-specific');
const modalTSSpecificBtn = document.getElementById('si-call-specific');
const modalTSSpecificBtnBack = document.getElementById('button-back-specific');

const modalTSPageSurfFirst = document.getElementById('ts-surf-first');
const modalTSSurfFirstBtn = document.getElementById('si-surf-first');
const modalTSSurfFirstBtnBack = document.getElementById('button-back-surf-first');

const modalTSPageSurf = document.getElementById('ts-surf');
const modalTSSurfBtn = document.getElementById('si-surf');
const modalTSSurfBtnBack = document.getElementById('button-back-surf');

const modalTSPageSpeed = document.getElementById('ts-surf-speed');
const modalTSSpeedBtn = document.getElementById('si-surf-speed');
const modalTSSpeedBtnBack = document.getElementById('button-back-speed');

const modalTSPageMMS = document.getElementById('ts-mms');
const modalTSMMSBtn = document.getElementById('si-mms');
const modalTSMMSBtnBack = document.getElementById('button-back-mms');

const modalTSPageSMS = document.getElementById('ts-sms');
const modalTSSMSBtn = document.getElementById('si-sms');
const modalTSSMSBtnBack = document.getElementById('button-back-sms');

const modalTSPageSMSDelayed = document.getElementById('ts-sms-delayed');
const modalTSSMSDelayedBtn = document.getElementById('si-sms-delayed');
const modalTSSMSDelayedBtnBack = document.getElementById('button-back-sms-delayed');

const modalTSPageSMSRepeat = document.getElementById('ts-sms-repeat');
const modalTSSMSRepeatBtn = document.getElementById('si-sms-repeat');
const modalTSSMSRepeatBtnBack = document.getElementById('button-back-sms-repeat');

const modalTSPageSMSSend = document.getElementById('ts-sms-send');
const modalTSSMSSendBtn = document.getElementById('si-sms-send');
const modalTSSMSSendBtnBack = document.getElementById('button-back-sms-send');

const modalTSPageRoaming = document.getElementById('ts-roaming');
const modalTSRoamingBtn = document.getElementById('si-roaming');
const modalTSRoamingBtnBack = document.getElementById('button-back-roaming');

const modalTSPageT2Open = document.getElementById('ts-t2open');
const modalTST2OpenBtn = document.getElementById('si-t2open');
const modalTST2OpenBtnBack = document.getElementById('button-back-t2open');

const modalTSPageCoverage = document.getElementById('ts-coverage');
const modalTSCoverageBtn = document.getElementById('si-coverage');
const modalTSCoverageBtnBack = document.getElementById('button-back-coverage');

const modalTSPageWatch = document.getElementById('ts-watch-first');
const modalTSWatchBtn = document.getElementById('si-watch');
const modalTSWatchBtnBack = document.getElementById('button-back-watch');

const modalTSPageInstall = document.getElementElement('ts-watch-install');
const modalTSWatchInstallBtn = document.getElement('si-watch-install');
const modalTSWatchInstallBtnBack = document.getElement('button-back-watch-install');

// Quick-links
const modalQlCoverage = document.getElementById('ql-coverage');
const modalQlCoverage2 = document.getElementById('ql-coverage-2');
const modalQlCoverage3 = document.getElementById('ql-coverage-3');
const modalQLCoverage4 = document.getElementById('ql-coverage-4');

// Eventlisteners
modalTSOpenBtn.addEventListener('click', () => {openModalWindow(modalTSWindow)});
modalTSCloseBtn.addEventListener('click', () => {closeModalWindow(modalTSWindow)});
modalTSSamtalBtn.addEventListener('click', () => {nextPage(modalTSPageFirst, modalTSPageSamtalFirst)});
modalTSSamtalBtnBack.addEventListener('click', () => {previousPage(modalTSPageSamtalFirst, modalTSPageFirst)});
modalTSIncomingBtn.addEventListener('click', () => {nextPage(modalTSPageSamtalFirst, modalTSPageIncoming)});
modalTSIncomingBtnBack.addEventListener('click', () => {previousPage(modalTSPageIncoming, modalTSPageSamtalFirst)});
modalTSOutboundBtn.addEventListener('click', () => {nextPage(modalTSPageSamtalFirst, modalTSPageOutbound)});
modalTSOutboundBtnBack.addEventListener('click', () => {previousPage(modalTSPageOutbound, modalTSPageSamtalFirst)});
modalTSAbroadBtn.addEventListener('click', () => {nextPage(modalTSPageSamtalFirst, modalTSPageAbroad)});
modalTSAbroadBtnBack.addEventListener('click', () => {previousPage(modalTSPageAbroad, modalTSPageSamtalFirst)});
modalTSSpecificBtn.addEventListener('click', () => {nextPage(modalTSPageSamtalFirst, modalTSPageSpecific)});
modalTSSpecificBtnBack.addEventListener('click', () => {previousPage(modalTSPageSpecific, modalTSPageSamtalFirst)});
modalTSSurfFirstBtn.addEventListener('click', () => {nextPage(modalTSPageFirst, modalTSPageSurfFirst)});
modalTSSurfFirstBtnBack.addEventListener('click', () => {previousPage(modalTSPageSurfFirst, modalTSPageFirst)});
modalTSSurfBtn.addEventListener('click', () => {nextPage(modalTSPageSurfFirst, modalTSPageSurf)});
modalTSSurfBtnBack.addEventListener('click', () => {previousPage(modalTSPageSurf, modalTSPageSurfFirst)});
modalTSSpeedBtn.addEventListener('click', () => {nextPage(modalTSPageSurfFirst, modalTSPageSpeed)});
modalTSSpeedBtnBack.addEventListener('click', () => {previousPage(modalTSPageSpeed, modalTSPageSurfFirst)});
modalTSMMSBtn.addEventListener('click', () => {nextPage(modalTSPageFirst, modalTSPageMMS)});
modalTSMMSBtnBack.addEventListener('click', () => {previousPage(modalTSPageMMS, modalTSPageFirst)});
modalTSSMSBtn.addEventListener('click', () => {nextPage(modalTSPageFirst, modalTSPageSMS)});
modalTSSMSBtnBack.addEventListener('click', () => {previousPage(modalTSPageSMS, modalTSPageFirst)});
modalTSSMSDelayedBtn.addEventListener('click', () => {nextPage(modalTSPageSMS, modalTSPageSMSDelayed)});
modalTSSMSDelayedBtnBack.addEventListener('click', () => {previousPage(modalTSPageSMSDelayed, modalTSPageSMS)});
modalTSSMSRepeatBtn.addEventListener('click', () => {nextPage(modalTSPageSMS, modalTSPageSMSRepeat)});
modalTSSMSRepeatBtnBack.addEventListener('click', () => {previousPage(modalTSPageSMSRepeat, modalTSPageSMS)});
modalTSSMSSendBtn.addEventListener('click', () => {nextPage(modalTSPageSMS, modalTSPageSMSSend)});
modalTSSMSSendBtnBack.addEventListener('click', () => {previousPage(modalTSPageSMSSend, modalTSPageSMS)});
modalTSRoamingBtn.addEventListener('click', () => {nextPage(modalTSPageFirst, modalTSPageRoaming)});
modalTSRoamingBtnBack.addEventListener('click', () => {previousPage(modalTSPageRoaming, modalTSPageFirst)});
modalTST2OpenBtn.addEventListener('click', () => {nextPage(modalTSPageFirst, modalTSPageT2Open)});
modalTST2OpenBtnBack.addEventListener('click', () => {previousPage(modalTSPageT2Open, modalTSPageFirst)});
modalTSCoverageBtn.addEventListener('click', () => {nextPage(modalTSPageFirst, modalTSPageCoverage)});
modalTSCoverageBtnBack.addEventListener('click', () => {previousPage(modalTSPageCoverage, modalTSPageFirst)});
modalTSWatchBtn.addEventListener('click', () => {nextPage(modalTSPageFirst, modalTSPageWatch)});
modalTSWatchBtnBack.addEventListener('click', () => {previousPage(modalTSPageWatch, modalTSPageFirst)});
modalTSWatchInstallBtn.addEventListener('click', () => {nextPage(modalTSPageWatch, modalTSPageInstall)});
modalTSWatchInstallBtnBack.addEventListener('click', () => {previousPage(modalTSPageInstall, modalTSPageWatch)});

modalQlCoverage.addEventListener('click', () => {qlPage(modalTSPageIncoming, modalTSPageCoverage, modalTSPageSamtalFirst)});
modalQlCoverage2.addEventListener('click', () => {qlPage(modalTSPageOutbound, modalTSPageCoverage, modalTSPageSamtalFirst)});
modalQlCoverage3.addEventListener('click', () => {qlPage(modalTSPageSpeed, modalTSPageCoverage, modalTSPageSurfFirst)});
modalQLCoverage4.addEventListener('click', () => {qlPage(modalTSPageSMSDelayed, modalTSPageCoverage, modalTSPageSMS)});

// reset values on start
resetValues();
closeModalWindow(modalEskaleringWindow);
closeModalWindow(modalTSWindow);