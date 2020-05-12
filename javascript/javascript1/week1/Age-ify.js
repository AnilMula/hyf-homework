function myFunction() {
    var yearOfBirth = document.getElementById("YOB").value;
    var yearFuture = document.getElementById("YF").value;
    var age = parseInt(yearFuture) - parseInt(yearOfBirth);
    
    document.getElementById("YA").value =  age;
    window.alert(" You will be " + age + " years old in " + yearFuture);
  }
       
