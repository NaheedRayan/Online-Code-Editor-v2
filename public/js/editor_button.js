// const { session } = require("passport")

// const DbService = require("./models/database");


var openmodalButtons = document.querySelectorAll('[data-modal-target]')
var closemodalButtons = document.querySelectorAll('[data-close-button]')
var overlay = document.getElementById('overlay')

openmodalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)

    if (button.dataset.modalTarget == "#modal1")
      openmodal1(modal)
    if (button.dataset.modalTarget == "#modal2")
      openmodal2(modal)
    if (button.dataset.modalTarget == "#modal3")
      openmodal3(modal)
  })
})

overlay.addEventListener('click', () => {
  const modal1 = document.querySelector('.modal1.active')
  closemodal(modal1)

  const modal2 = document.querySelector('.modal2.active')
  closemodal(modal2)

  const modal3 = document.querySelector('.modal3.active')
  closemodal(modal3)

})

closemodalButtons.forEach(button => {
  button.addEventListener('click', () => {
    // const model1 = button.closest('.model1')
    const modal = document.querySelector(button.dataset.closeButton)
    closemodal(modal)

  })

})



///////// for opening modal  //////////////////////

// modal for load button
function openmodal1(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
  // console.log(session)


  let elem = document.querySelector(".modal1-body")

  elem.innerHTML = ""


  for (i = 0; i < 25; i++) {
    elem.innerHTML += 
    `<div class="modal1_list_item">
      <div class="modal1_file_name">hello world</div>
      <button data-file-prid="" class="modal_list_item_edit_button">edit</button>
      <button data-file-prid="" class="modal_list_item_delete_button">X</button>
    </div>`
  }



}

function openmodal2(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function openmodal3(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}




///////// for closing modal  //////////////////////

function closemodal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}