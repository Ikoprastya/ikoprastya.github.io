/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

//dropdown active if the user click it
$(document).ready(function(){
  $("a").click(function(){
    $("a").removeClass('active');
    $(this).addClass('active');
  });
});

//schedule tabs
$( function() {
    $( "#tabs" ).tabs();
  } );
$( function() {
    $( "#tabss" ).tabs();
  } );

//validation registration // contact us folder
// label option
function validateForm() {
    alert("Data is Valid");
  }
