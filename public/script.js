

// Person Row Timer //
function postTimes(name, doses){

    // Start Time
    const start = new Date();
    if (start.getHours()>12){
        startGetHours = start.getHours()-12
    }else{
        startGetHours = start.getHours()
    }

    if (start.getMinutes()<10){
        started = "1st Dose: " + startGetHours + ":0" + start.getMinutes()
    }else{
        started = "1st Dose: " + startGetHours + ":" + start.getMinutes()
    }
    
    // End Time
    endTime = start.getTime() + 7200000
    end = new Date(endTime)

    if (end.getHours()>12){
        endGetHours = end.getHours()-12
    }else{
        endGetHours = end.getHours()
    }

    if (end.getMinutes()<10){
        ended = "End: " + endGetHours + ":0" + end.getMinutes()
    }else{
        ended = "End: " + endGetHours + ":" + end.getMinutes()
    }

    // Blood Pressure Check
    bpCheckTime = start.getTime() + 2400000
    bpCheck = new Date(bpCheckTime)
    
    if (bpCheck.getHours()>12){
        bpCheckGetHours = bpCheck.getHours()-12
    }else{
        bpCheckGetHours = bpCheck.getHours()
    }

    if (bpCheck.getMinutes()<10){
        bpChecked = "Check BP @ " + bpCheckGetHours + ":0" + bpCheck.getMinutes()
    }else{
        bpChecked = "Check BP @ " + bpCheckGetHours + ":" + bpCheck.getMinutes()
    }
    
    //Second dose
    sDoseTime = start.getTime() + 300000
    sDose = new Date(sDoseTime)

    if (sDose.getHours()>12){
        sDoseGetHours = sDose.getHours()-12
    }else{
        sDoseGetHours = sDose.getHours()
    }

    if (sDose.getMinutes()<10){
        sDoseed = "2nd Dose: " + sDoseGetHours + ":0" + sDose.getMinutes()
    }else{
        sDoseed = "2nd Dose: " + sDoseGetHours + ":" + sDose.getMinutes()
    }


    if (doses=="Two"){
        
        tDoseed = ""
    }else{
        
        //Third dose
    tDoseTime = start.getTime() + 600000
    tDose = new Date(tDoseTime)


    if (tDose.getHours()>12){
        tDoseGetHours = tDose.getHours()-12
    }else{
        tDoseGetHours = tDose.getHours()
    }

    if (tDose.getMinutes()<10){
        tDoseed = "| 3rd Dose: " + tDoseGetHours + ":0" + tDose.getMinutes()
    }else{
        tDoseed = "| 3rd Dose: " + tDoseGetHours + ":" + tDose.getMinutes()
    }

    }
    
    row = "." + name + "-p"    
    const nameP = document.querySelector(row);
    
        const li = `
        <p>${name} | ${started} <button class="delete is-pulled-right" onClick="deleteButton(${name})"></button></p>        
        <p> ${sDoseed} ${tDoseed}</p>
        <p>${bpChecked} | ${ended}</p>
        `        
        nameP.innerHTML = li;  

}


// Person Row //
const personButton = document.querySelector('#personButton');
personButton.addEventListener('click', (e) =>{
  e.preventDefault();
  document.getElementById('newP').style.display = "none";
  document.getElementById('typeN').style.display = "none";
  document.getElementById('doseN').style.display = "none";
  

  // Get person name from form input
  const personForm = document.querySelector("#persons-form");  
  const name = personForm['person-name'].value.trim().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,'').replaceAll(' ','');


    var radios = document.getElementsByName("doses");
    var response = Array.from(radios).find(radio => radio.checked);
    
    
    if (response==null){        
        document.getElementById('doseN').style.display = "block";
    }    

    // Check that name isn't already used
    row = "." + name + "-p"    
    const nameP = document.querySelector(row)
    

  if (name==""){
    
    document.getElementById('typeN').style.display = "block";
    return
  }
  else if(nameP!=null){
    
    document.getElementById('newP').style.display = "block";
  }
  else{      
    const doses = response.value

     const personList = document.querySelector('.media');
     const personList_txt = document.querySelector('.media').innerHTML;
     
        const li = `
        <div class="column is-12-mobile is-12-desktop is-12-tablet" id="${name}">    
            <div class="container p-2">
                <div class="media-content">
                    <div class="content" id="${name}">                        
                        <p class="${name}-p"></p>
                    </div>
                </div>                    
                <progress class="progress is-danger ${name}" max="100"></progress>            
            </div>
        </div>
        `
        const html = personList_txt + li
        personList.innerHTML = html;  
        
        postTimes(name,doses)

        document.querySelector("#persons-form").reset();    
    }
    
})


// Delete person from List //
function deleteButton(name){
    const li = null
    name[0].innerHTML= li
    name[0].outerHTML= li
}

// Open Info Modal
const infoBtn = document.querySelector('#infoBtn');
infoBtn.addEventListener('click', (e) =>{
  e.preventDefault();
console.log('in')
const infoModal = document.getElementById("infoModal")
infoModal.classList.toggle('is-active');
})

// Close Info Modal
const infoBtn_close = document.querySelector('#infoBtnClose');
infoBtn_close.addEventListener('click', (e) =>{
  e.preventDefault();
console.log('out')
const infoModal = document.getElementById("infoModal")
infoModal.classList.toggle('is-active');
})
