// Academic Qualification field start
  function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.classList.add("bg-dark");
    newNode.classList.add("text-white");
    newNode.classList.add("rounded-3");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");
  
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
  
    aqOb.insertBefore(newNode, aqAddButtonOb);
  }
// Academic Qualification field ends

// Project Field starts
  function addNewpField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pField");
    newNode.classList.add("mt-2");
    newNode.classList.add("bg-dark");
    newNode.classList.add("text-white");
    newNode.classList.add("rounded-3");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");
  
    let pfOb = document.getElementById("pf");
    let pfAddButtonOb = document.getElementById("pfAddButton");
  
    pfOb.insertBefore(newNode, pfAddButtonOb);
  }
// Project Field ends

//skills Field starts
  function addNewsField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("sField");
    newNode.classList.add("mt-2");
    newNode.classList.add("bg-dark");
    newNode.classList.add("text-white");
    newNode.classList.add("rounded-pill");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter here");
  
    let skillOb = document.getElementById("skill");
    let sAddButtonOb = document.getElementById("sAddButton");
  
    skillOb.insertBefore(newNode, sAddButtonOb);
  }
//skills Field ends

//languages Field starts
  function addNewlField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("lField");
    newNode.classList.add("mt-2");
    newNode.classList.add("bg-dark");
    newNode.classList.add("text-white");
    newNode.classList.add("rounded-pill");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter here");
  
    let languagesOb = document.getElementById("languages");
    let lAddButtonOb = document.getElementById("lAddButton");
  
    languagesOb.insertBefore(newNode, lAddButtonOb);
  }
  //languages Field ends

  // Work Experience Field Start
  function addNewField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("workField");
    newNode.classList.add("mt-2");
    newNode.classList.add("bg-dark");
    newNode.classList.add("text-white");
    newNode.classList.add("rounded-3");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");
  
    let WorkOb = document.getElementById("Work");
    let workAddButtonOb = document.getElementById("workAddButton");
  
    WorkOb.insertBefore(newNode, workAddButtonOb);
  }

  // Work Experience Field ends

  //generat cv
  function generateCV() {
    
    //name field
    let nameField = document.getElementById("nameField").value;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = nameField;

    //contact Field 
    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contactField;

    //email Field
    let emailField = document.getElementById("emailField").value;
    let emailT = document.getElementById("emailT");
    emailT.innerHTML = emailField;

    //address Field
    let addressField = document.getElementById("addressField").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = addressField;

    //image Field
    let file = document.getElementById("imgField").files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file); 

    reader.onloadend = function () {
      document.getElementById("imgTemplate").src = reader.result;
    };


    //linkedin Field
    let linkedField = document.getElementById("linkedField").value;
    let linkedT = document.getElementById("linkedT");
    linkedT.innerHTML = linkedField;

    //git Field
    let gitField = document.getElementById("gitField").value;
    let githubT = document.getElementById("githubT");
    githubT.innerHTML = gitField;

    //language Field
    let languageField = document.getElementsByClassName("lField");
    let languages = "";
     
    for (let e of languageField){
      languages =languages+`<li>${e.value}</li>`;
    }

    document.getElementById("langT").innerHTML = languages;

    //job title Field
    let jtitleField = document.getElementById("jtitleField").value;
    let jtitleT = document.getElementById("jtitleT");
    jtitleT.innerHTML = jtitleField;

    //objective Field
    let objectiveField = document.getElementById("objectiveField").value;
    let objectiveT = document.getElementById("objectiveT");
    objectiveT.innerHTML = objectiveField;

    //skill Field
    let skillField = document.getElementsByClassName("sField")
    let skills = "";

    for (let e of skillField){
      skills =skills+`<li>${e.value}</li>`
    }

    document.getElementById("sklT").innerHTML = skills; 

    //Projects Field
    let projectField = document.getElementsByClassName("pField")
    let projects = "";

    for (let e of projectField){
      projects =projects+`<li>${e.value}</li>`
    }

    document.getElementById("projT").innerHTML = projects; 

    //Work Experience Field
    let workeField = document.getElementsByClassName("workField")
    let works = "";

    for (let e of workeField){
      works =works+`<li>${e.value}</li>`
    }

    document.getElementById("weT").innerHTML = works;

    //Academic Qualification Field
    let AcademicqField = document.getElementsByClassName("eqField")
    let Qualifications = "";

    for (let e of AcademicqField){
      Qualifications =Qualifications+`<li>${e.value}</li>`
    }

    document.getElementById("aqT").innerHTML = Qualifications;

    //display cv
    document.getElementById("resume-form").style.display ="none";
    document.getElementById("resume-tamplate").style.display ="block";
  }
   
  //print CV
  function printCV() {
    window.print();
  }
  