const input = document.querySelector('.text');
const addBtn = document.querySelector('.submit');


addBtn.addEventListener('submit', addItem)

// you should add form in html 
function addItem(e){ 
  e.preventDefault()
  const element = e.curretTarget;
  console.log(element)
}
