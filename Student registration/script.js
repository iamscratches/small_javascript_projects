

function validateForm() {
  var student_name = document.forms["my_form"]["student_name"].value;  
  var student_age = document.forms["my_form"]["student_age"].value;
  var gender = document.forms["my_form"]["gender"].value;
  var city = document.forms["my_form"].querySelector('#city').value;
  var hobby = document.forms["my_form"]["hobby"];
  var hobbies = "";

  for(i=0; i<hobby.length; i++){
  	if (hobby[i].checked) {
      hobbies += "#" + hobby[i].value + " ";
    }
  }
  if(hobbies.length==0){
  	hobbies = "invalid"
  }
  
  console.log(document.forms["my_form"]);
  console.log(hobby);

  if(student_name.length>20 || /\d/.test(student_name) || student_name.length==0){
  	student_name = "invalid";
  }
  if(isNaN(student_age) || student_age>100){
  	student_age = "invalid";
  }
  if(city==""){
  	city = "invalid";
  }

  document.getElementById("name_value").innerHTML = student_name;
  document.getElementById("age_value").innerHTML = student_age;
  document.getElementById("city_value").innerHTML = city;
  document.getElementById("hobbies_value").innerHTML = hobbies;
  var result  = document.getElementsByClassName("Result");
  console.log(result);
  result[0].style.display = 'inline';
  return false;
}