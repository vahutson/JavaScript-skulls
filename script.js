var h = document.querySelector('.openedBox');
var EditBox = document.getElementsByClassName('edit-main-type');
var dropBoxOne = document.getElementById('dropper');
dropBoxOne.onclick = openBox;
var dropItem = document.getElementsByClassName('pad-of-drop');
var selectedName = document.getElementsByClassName('selectedName');
var PaD = document.getElementsByClassName('one-full-pad');
var selectedDigit;
var changeIt = document.getElementById('change-button').addEventListener('click', editIt);
var bcgColor;


window.onload = function() {
    for (var i = 0; i < PaD.length; i++) {
        if (localStorage.getItem(PaD[i].className) !== null &
        localStorage.getItem(PaD[i].childNodes[1].className + (i+1)) !== null &
        localStorage.getItem(PaD[i].childNodes[3].className + (i+1)) !== null){
            bcgColor = localStorage.getItem(PaD[i].className);
            var padTitle = localStorage.getItem(PaD[i].childNodes[1].className + (i+1));
            var padText =  localStorage.getItem(PaD[i].childNodes[3].className + (i+1));
            PaD[i].style.backgroundColor = bcgColor;
            PaD[i].childNodes[1].textContent = padTitle;
            PaD[i].childNodes[3].textContent = padText;
            setInterval(function() {
                if (EditBox[0].childNodes[11].value) {

                    EditBox[0].style.backgroundColor = EditBox[0].childNodes[11].value;
                    EditBox[0].style.boxShadow = '0px 0px 14px 0px' + ' ' + EditBox[0].style.backgroundColor;


                } else {
                    EditBox[0].style.boxShadow = '0px 0px 14px 0px #FF69B4';
                    EditBox[0].style.backgroundColor = '#FF69B4';
                }


            },  100);

            setInterval(function () {
                for (var n = 0; n < PaD.length; n++) {

                    if (PaD[n].style.backgroundColor) {
                        PaD[n].style.boxShadow = '0px 0px 14px 0px' + ' ' + PaD[n].style.backgroundColor;
                    } else {
                        PaD[n].style.boxShadow = '0px 0px 14px 0px white';
                    }
                }


            }, 100);
        }


    }



}



function openBox() {
    dropBoxOne.classList.toggle('openedBox');
    document.getElementsByClassName('arrow')[0].classList.toggle('openArrow');
}

for (var i = 0; i <= dropItem.length; i++) {
    dropItem[i].onclick = selection;
}

function selection() {
    var target = event.target;
    selectedName[0].textContent = target.textContent;
    selectedDigit = +target.textContent;
    EditBox[0].childNodes[3].value = PaD[selectedDigit - 1].childNodes[1].textContent;
    EditBox[0].childNodes[7].value = PaD[selectedDigit - 1].childNodes[3].textContent;
    EditBox[0].childNodes[11].value = PaD[selectedDigit - 1].style.backgroundColor;
    PaD[selectedDigit - 1].childNodes[5].classList.toggle('openSkull');
}

function editIt() {
     PaD[selectedDigit - 1].childNodes[1].textContent = EditBox[0].childNodes[3].value;
     PaD[selectedDigit - 1].childNodes[3].textContent = EditBox[0].childNodes[7].value;
     PaD[selectedDigit - 1].style.backgroundColor = EditBox[0].childNodes[11].value;


    for (var i = 0; i < PaD.length; i++) {

        localStorage.setItem(PaD[i].className, PaD[i].style.backgroundColor);
        localStorage.setItem(PaD[i].childNodes[1].className + (i+1), PaD[i].childNodes[1].textContent);
        localStorage.setItem(PaD[i].childNodes[3].className + (i+1), PaD[i].childNodes[3].textContent);
        if (PaD[i].style.backgroundColor) {
        PaD[i].style.boxShadow = '0px 0px 14px 0px' + ' ' + PaD[i].style.backgroundColor;
    } else {
            PaD[i].style.boxShadow = '0px 0px 14px 0px' + ' ' + 'white';
        }
    }
}

function showMore() {
    document.getElementsByClassName('threeMore')[0].style.display = 'none';
    document.getElementsByClassName('sevenNine-flex')[0].style.display = 'flex';
    var newLi = document.createElement('li');
    newLi.className = 'pad-of-drop';
    newLi.innerHTML = +dropBoxOne.childNodes[13].textContent + 1;
    dropBoxOne.appendChild(newLi);



}






