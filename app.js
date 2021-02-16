const input = document.querySelector('.text');
console.log(input)
const form = document.querySelector('.posting')
const addBtn = document.querySelector('.submit');
console.log(addBtn)
const flexText = document.querySelector('.flex-wrap')
const flex = document.querySelectorAll('.flex');
const modalSection = document.querySelector('.modal-section')
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
    element.classList.add('flex');
    let attr = document.createAttribute('data-id');
    attr.value = item.dateID;
    element.setAttributeNode(attr)
    element.innerHTML = `<div class="item">Note ${index + 1}</div>
    <p>${item.nameValue}</p>
    <button type="button" class="detail">View Detail</button>`
    flexText.classList.add('flex-show')
    flexText.appendChild(element)
    const detailBtn = element.querySelector('.detail');
    detailBtn.addEventListener('click', openDetail)
  })
  
}

function setBackToDefault(){
  input.value = '';
}

function openDetail(e){
  const event = e.currentTarget.parentElement;
  const id = event.dataset.id;
  const modalChecked = itemArray.find(item => {
    return item.dateID === id
    
  }) 
    let modal = document.querySelector('.modal')
    console.log(modal)
     modal.innerHTML = `<p>${modalChecked.nameValue} </p>
     <span class="modal-close">X</span>`
     modalSection.classList.add('modal-show')
     modalSection.appendChild(modal)
     const closeBtn = modal.querySelector('.modal-close')
     closeBtn.addEventListener('click', close)
}

function close(e){
  const button = e.currentTarget.parentElement.parentElement;
  button.classList.remove('modal-show')
  
}
