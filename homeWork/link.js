function myFunction() {
    window.location.href = "page1.html";
  }
  function validateForm(){
    // var x=document.forms["myForm"]["fname"].value;
    //      if(x =="" || x== null){
    //          alert("Name must be filled out");
    //          return false;
    //      }
    function validate(){
      if(document.myForm.AId.value ==""){
          alert("Please provide your ID!");
          return false;
      }
  
      if(document.myForm.Pw.value ==""){
          alert("Please provide your Index password!");
          return false;
      }
  
      // if(document.myForm.address.value ==""){
      //     alert("Please provide your address!");
      //     return false;
      // }
      // if(document.myForm.email.value ==""){
      //     alert("Please provide your email!");
      //     return false;
      // }
      
      return (true);
  
      
  }
  
 }