const phqbtn = document.querySelector('#phq-btn');
phqbtn.addEventListener('click', (e) =>{
  e.preventDefault();

  var checked = document.querySelectorAll('#q :checked');
    var selected = [...checked].map(option => option.value);

const Total = parseInt(selected[0]) +parseInt(selected[1]) +parseInt(selected[2]) +parseInt(selected[3]) +parseInt(selected[4]) +parseInt(selected[5]) +parseInt(selected[6]) +parseInt(selected[7]) +parseInt(selected[8])

li =
`
Total: ${Total} / 27
`
const resultsbox = document.getElementById("resultsbox")
resultsbox.innerHTML = li


  
  
})