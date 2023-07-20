function myFunction() {
    if (more.style.display === "none") {
      more.style.display = "inline";
      myBtn.innerHTML = "show less"
    } else {
      more.style.display = "none";
      myBtn.innerHTML = "show more"
    }
  }
  


$(document).ready(function(){
    $("#signin-form").validate({
        rules:{
            id:{
                required: true,
                minlength:4
            },
            pass:{
                required: true,
                minlength:6
            }
        },
    })
})