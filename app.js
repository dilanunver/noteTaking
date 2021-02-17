const input = document.querySelector('.text');
console.log(input)
const form = document.querySelector('.posting')
const addBtn = document.querySelector('.submit');
console.log(addBtn)
const flexText = document.querySelector('.flex-wrap')
const flex = document.querySelectorAll('.flex');
const modalSection = document.querySelector('.modal-section')
itemArray = []
let editing = false; 
let editElements;


form.addEventListener('submit', chooseOption)

function chooseOption(e){
  e.preventDefault()
  if(editing){
    editItems(e)
  } else {
    addItem(e)
  }
  
}
function editItems(e){
  e.preventDefault()
  editElements.nameValue = input.value
   editing = false;
   addBtn.textContent = 'Add Note';
   setBackToDefault()
   renderItems();
 }


function addItem(e){
  e.preventDefault()
  const id = new Date().getTime().toString()
  const value = input.value;
  const items = {
    dateID : id,
    nameValue : value,
  }
  itemArray.push(items)
  setBackToDefault()
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
    <button type="button" class="detail">View Detail</button>
    <button type="button" class="delete"><i class="far fa-trash-alt"></i></button>
    <button type="button" class="edit"><i class="far fa-edit"></i></button>`
    flexText.classList.add('flex-show')
    flexText.appendChild(element)
    const detailBtn = element.querySelector('.detail');
    detailBtn.addEventListener('click', openDetail);
    const deleteBtn = element.querySelector('.delete');
    deleteBtn.addEventListener('click', deleteItems);
    const editBtn = element.querySelector('.edit');
    editBtn.addEventListener('click', editingItems)
  })
  
}

function setBackToDefault(){
  input.value = '';
  flexText.innerHTML = ''
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
function deleteItems(e){
    const element = e.currentTarget.parentElement;
    console.log(element)
    const id = element.dataset.id
    console.log(id)
    const deletedItems = itemArray.find(item =>{
      return item.dateID === id
    })
    const indexOfItem = itemArray.indexOf(deletedItems);
    itemArray.splice(indexOfItem, 1)
    setBackToDefault()
    renderItems()
    
}
function editingItems(e){
  let element = e.currentTarget.parentElement;
  let id = element.dataset.id;
  editElements = itemArray.find(item =>{
    return item.dateID == id;
  })
  input.value = editElements.nameValue
 
  editing = true;
  addBtn.textContent = 'Edit'
}

