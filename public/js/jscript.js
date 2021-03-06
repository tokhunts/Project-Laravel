// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}
// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function () {
    $("#bttn").click(function () {
        var name = $("#Nname").val();
        var cname = $("#CName").val();
        var email = $("#Email").val();
        var phone = $("#Phone").val();
        var message = $("#Message").val();
        var data = 'Nname=' +name+ '&Cname=' +cname+ '&email=' +email+ '&phone=' +phone+ '&message=' +message;
        var x = document.forms["myForm"]["Nname","Email","Phone"].value;
        if (x == "") {
           $('#req').text('* Fields is Required');
        }else{
            $.ajax({
                url: 'mail.php',
                type: 'POST',
                dataType: 'html',
                data: data,
                beforeSend: functionBefore,
                success: functionSuccess
            });
        }
        return false;
    });
    function functionBefore(){
    	$('#req').hide();
    	$('#res').hide();
        $('#load').show();
        /*$('#load').html("<img src='../images/Spinner.gif' style='width:42px;height:42px'>");*/
        $('#load').text("Loading...");
    }
    function functionSuccess(result){
        $('#load').hide();
        $('#res').show();
        $('#res').html(result);
        $("#myForm")[0].reset();
    }
});
