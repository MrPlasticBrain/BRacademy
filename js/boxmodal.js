// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
/*btn.onclick = function() {
    modal.style.display = "block";
} */

$(document).on('click', '.grid_3 a', function (e) {
    $('#myModal').show(); 
    fillOptions();
});

// When the user clicks on <span> (x), close the modal
$(document).on('click','.close', function(element){
    $('#myModal').hide();
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function fillOptions(){
    var myDiv = document.getElementById("years");

    //Create array of options to be added
    var array = ["1","2","3","4","5"];

    //Create and append select list
    var selectList = document.createElement("select");
    selectList.id = "mySelect";
    myDiv.appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }
}