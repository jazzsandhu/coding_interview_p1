
  const card = document.getElementById('data');
  //get all the employees
  const url = 'http://sandbox.bittsdevelopment.com/code1/fetchemployees.php'


  //create the function for create elements
  function createNode(element){
    return document.createElement(element);
  }
  //fucntion for append the child
  function append(parent, el){
    return parent.appendChild(el);
  }
//fetch the value  form the url
  fetch(url)
  .then(response => response.json())
  .then(function(data){
    let employees = data;
    //console.log(employees);
    for(var i = 1; i<= Object.keys(employees).length; i++){
      //create a dropdown list
      var select = document.createElement('select');
      select.name = "employees";
      select.id= "employees";
        var option = document.createElement('option');
        option.value = employees[i].employeefname;
        option.text = employees[i].employeefname;
        select.appendChild(option);
      var label = document.createElement('label');
      label.innerHTML = "Select the employee Name:";
      label.htmlfor = "employees";
      document.getElementById('container').appendChild(label).appendChild(select);
      //fetch the picture
      var picture = fetch('http://sandbox.bittsdevelopment.com/code1/employeepics/'+employees[i].employeeid+'.jpg');
      let profile = document.createElement('div');
      profile.innerHTML += "<img src='"+picture +"' />"
      profile.innerHTML += "<h2>"+ employees[i].employeefname + " "+ employees[1].employeelname+"<br /></h2>";
       profile.innerHTML  += employees[i].employeebio +"<br />";
       var roles = employees[i].roles;
       //console.log(roles);
       for (var z=0; z< roles.length; z++){
         profile.innerHTML += "<span style='background-color:"+roles[z].rolecolor+"'>"+roles[z].rolename +"  "+"</span>";
       }
       //store the value of icon in the var
       const icon = "<i class='fas fa-crown'></i>"
       if(employees[i].employeeisfeatured == 1){
         profile.innerHTML += icon;
       }
       //to make it child
       card.appendChild(profile);
    }
  })
  .catch(error =>{
    console.error(error)
  })
