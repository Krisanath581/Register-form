function matchPassword() {
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    let message = document.getElementById('showError');
   // console.log(password,confirmpassword);
      if(password.length != 0){
        if(password == confirmpassword){
          alert("Saved !");
        }else{
          message.textContent = "Password don't match";
          event.preventDefault(); // stop refreshing the page on submit
        }
      }      
    }
  