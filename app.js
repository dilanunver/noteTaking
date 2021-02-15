const input = document.querySelector('.text');
console.log(input)
const form = document.querySelector('.posting')
const addBtn = document.querySelector('.submit');
console.log(addBtn)
const flexText = document.querySelector('.flex-wrap')
const flex = document.querySelectorAll('.flex')
itemArray = []


form.addEventListener('submit', addItem)

function addItem(e){
  e.preventDefault();
  const value = input.value;
  const id = new Date().getTime().toString()
  const items = {
    dateID : id,
    nameValue : value,
  }
  itemArray.push(items)
  setBackToDefault()
  flexText.innerHTML = ''
  renderItems()
}

function renderItems(){
  itemArray.forEach(function(item,index){
    let element = document.createElement('div');
    element.classList.add('flex')
    element.innerHTML = `<div class="item">Note ${index + 1}</div>
    <p>${item.nameValue}</p>
    <button type="button" class="detail">View Detail</button>`
    flexText.classList.add('flex-show')
    flexText.appendChild(element)
  })
  
}

function setBackToDefault(){
  input.value = '';
}
