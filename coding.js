
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
  //then convert the response into the json file
  .then(response => response.json())
  //store the data display
  .then(function(data){
    var employees = data;
    //console.log(employees);
    for(var i = 1; i<= Object.keys(employees).length; i++){
      //create a dropdown list for updating the page according to the employeelname
        var option = document.createElement('option');
        option.value = employees[i].employeefname;
        option.text = employees[i].employeefname+" "+employees[i].employeelname;
        //select.appendChild(option);
      var label = document.createElement('label');
      label.innerHTML = "Select the employee Name:";
      label.htmlfor = "employees";
      document.getElementById('container').appendChild(option);

      //get the filter button for adding the function
      var filter = document.getElementById('filter');
      filter.onclick = getOption;
      //var output;
      function getOption(){
        select = document.getElementById('container');
        output = select.value;
      }
      //fetch the picture
      var picture = fetch('http://sandbox.bittsdevelopment.com/code1/employeepics/'+employees[i].employeeid+'.jpg');
      let profile = document.createElement('div');
      profile.innerHTML += "<img src='"+picture +"' />"
      profile.innerHTML += "<h2>"+ employees[i].employeefname + " "+ employees[1].employeelname+"<br /></h2>";
       profile.innerHTML  += employees[i].employeebio +"<br />";
       var roles = employees[i].roles;
       //console.log(roles);
       //get the roles according to the employee
       for (var z=0; z< roles.length; z++){
         profile.innerHTML += "<span style='background-color:"+roles[z].rolecolor+"'>"+roles[z].rolename +"  "+"</span>";
       }
       //store the value of icon in the var
       //for using it display on the featured employee
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
