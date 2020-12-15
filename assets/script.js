
var clearBtn = document.getElementById('clearBtn')
var dateEl = document.getElementById("dateTime")
var m = moment()

var currentTime = m.format("LLLL");
showTime();
function showTime() {
    dateEl.textContent = currentTime;
}

// Storage
function loadFromStorage () {

    for(i=8; i<=17; i++){

        var content = localStorage.getItem("div"+i);
        console.log(content)
        $("#div"+i).val(content);
    }
}
loadFromStorage();

function clearEverything(){
    for(i=8; i<=17;i++){
        $("#div"+i).val("");
    }
    localStorage.clear();
}
// Add event listener
clearBtn.addEventListener("click", clearEverything)

$(document).on("click", "button", function(e){
    e.preventDefault();
    var contextToBeSaved = $(this).prev().val();
    var keyForSaved = $(this).prev().attr('id');
    localStorage.setItem(keyForSaved, contextToBeSaved);
})