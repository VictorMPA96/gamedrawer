
document.getElementById('addGame').addEventListener('click', addgame);

var list = [];

var elements = localStorage.getItem("elements");


if (elements != null) {

    list.push(elements)

}

var listSplit = list[0].split(',');

list = listSplit;


var arrayID = [];
var getId = 0;

for (i = 0; i < list.length; i++) {
    var newId = randomID();

    arrayID.push(newId);

    document.getElementById('box').innerHTML += "<div>" + list[i] +
        "<span onclick='delGame()'><button id='" + newId + "' class='delButton' onclick= 'getId = this.id'><img src='https://images.vexels.com/media/users/3/132505/isolated/lists/fec64ffe207b10917bf22370bf606c11-icono-de-papelera-plana.png' /></button></span></div>";
}

var arrayRandoms = [];

document.getElementById('draw').addEventListener('click', get3games);

document.querySelector('#getWinner').addEventListener('click', winner);





//////////////////////////////////////////////////////////////////////////////////////////////////

function addgame() {

    var game = "";

    while (game == "" | null | " ") {

        game = prompt("Which game would you like to add ?");

    }

    if (game != null) {

        list.push(game);
        localStorage.setItem("elements", list);
        window.location.reload();
    }


}


function randomID() {

    var id = 0;

    while (id == 0) {

        id = Math.ceil(Math.random() * 100);

    }

    return (id);

}

var gametodelete = 0;

function delGame() {



    for (i = 0; i < arrayID.length; i++) {
        if (getId == arrayID[i]) {
            gametodelete = i;
        }


    }

    list.splice(gametodelete, 1);
    localStorage.setItem("elements", list);


    var x = document.getElementById(getId).parentNode.parentNode;
    document.getElementById('box').removeChild(x);

    if (list.length != 0) {

        window.location.reload();
    }
    else {

        list.splice(0, 1);
        localStorage.removeItem('elements');
    }

}

function get3games() {



    arrayRandoms = [];

    if (list.length == 0) {

        alert('There are no games added.')
    }
    else {

        if (list.length >= 2) {

            document.querySelector("#cuerpo").firstElementChild.style.display = "none";
            document.querySelector("#box").style.display = "none";
            document.querySelector("#podium").style.display = "flex";

            if (list.length == 2) {

                for (i = 0; i < 2; i++) {

                    var randomNum = Math.ceil(Math.random() * list.length - 1);



                    while (arrayRandoms.includes(randomNum) == true) {

                        randomNum = Math.ceil(Math.random() * list.length - 1);

                    }

                    if (randomNum == -0) {

                        randomNum = Math.abs(randomNum);
                    }
                    arrayRandoms.push(randomNum);


                }

                podium();


            }
            else {

                for (i = 0; i < 3; i++) {

                    var randomNum = Math.ceil(Math.random() * list.length - 1);



                    while (arrayRandoms.includes(randomNum) == true) {

                        randomNum = Math.ceil(Math.random() * list.length - 1);

                    }

                    if (randomNum == -0) {

                        randomNum = Math.abs(randomNum);
                    }
                    arrayRandoms.push(randomNum);


                }

                podium();

            }


        }
        else {

            alert('A draw cannot be made with only one game added, stupid.')
        }
    }
}


var podiumGames = [];
function podium() {



    for (i = 0; i < arrayRandoms.length; i++) {
        podiumGames.push(list[arrayRandoms[i]]);
    }


    for (i = 0; i < list.length; i++) {

        document.getElementById(i).innerHTML = podiumGames[i];

        if (i == 1) {

            if (list.length == 2) {

                i++;
                var lastElement = document.querySelector("#podium").lastElementChild.previousElementSibling;
                lastElement.style.display = "none";
            }
        }




    }
}

var listWinners = [];
var winnerA = [];
var winnerB = [];
var winnerC = [];
var winnerGame;


function winner() {


    var pass = false;
    while (pass == false) {

        // Generar un numero

        var numWinner;

        numWinner = Math.ceil(Math.random() * podiumGames.length - 1);

        if (numWinner == -0) {

            numWinner = Math.abs(numWinner);
        }


        /////


        if (winnerA.length == 0) {

            winnerA.push(numWinner);
            listWinners.push(numWinner);

        }
        else {

            if (winnerA[0] == numWinner) {

                winnerA.push(numWinner);
                listWinners.push(numWinner);
            }
            else {

                if (winnerB.length == 0) {

                    winnerB.push(numWinner);
                    listWinners.push(numWinner);

                }
                else {

                    if (winnerB[0] == numWinner) {

                        winnerB.push(numWinner);
                        listWinners.push(numWinner);
                    }
                    else {

                        if (winnerC.length == 0) {

                            winnerC.push(numWinner);
                            listWinners.push(numWinner);

                        }
                        else {

                            if (winnerC[0] == numWinner) {

                                winnerC.push(numWinner);
                                listWinners.push(numWinner);
                            }

                        }
                    }
                }
            }
        }


        

        if (winnerA.length == 3) {

            winnerGame = podiumGames[winnerA[0]];
            pass = true;
        }
        else {
            if (winnerB.length == 3) {

                winnerGame = podiumGames[winnerB[0]];
                pass = true;
            }
            else {
                if (winnerC.length == 3) {

                    winnerGame = podiumGames[winnerC[0]];
                    pass = true;
                }

            }
        }


    }

    showWinner();


}



var overtakings = [];
function showWinner (){

    
    document.querySelector("#podium").style.display = "none";
    document.querySelector("#showWinner").style.display = "flex";
    document.querySelector("#showWinner").firstElementChild.nextElementSibling.innerHTML = winnerGame;

    for (i=0; i<listWinners.length; i++){

        overtakings.push(podiumGames[listWinners[i]]);
        
    }

    var stringOvertakings = overtakings.toString();

    var showOvertakings = stringOvertakings.replaceAll(',', '  /  ');

    document.querySelector("#showWinner").lastElementChild.lastElementChild.innerHTML = showOvertakings;




}


























