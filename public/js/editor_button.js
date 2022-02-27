// const { session } = require("passport")
// const DbService = require("../../models/database")

// const { acceptsEncodings } = require("express/lib/request")


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
// const DbService = require("./models/database");



// modal for load button
function openmodal1(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
  // console.log(session)


  let elem = document.querySelector(".modal1-body")

  elem.innerHTML = ""


  // fetch('localhost:3000/get_file')
  //   .then(response => response.json())
  //   .then(data => console.log(data));

  // fetch("http://localhost:3000/get_file", {}).then(res => {
  //   // console.log(res)
  //   return res.json()
  // }).then(data => {
  //   console.log(data)

  //   // console.log(data.length)
  //   for (i = 0; i < data.length; i++) {
  //     elem.innerHTML +=
  //       `<div class="modal1_list_item">
  //       <div class="modal1_file_name">${data[i].file_name}</div>
  //       <button data-position="${i}" data-file-prid="${data[i].file_id}" class="modal_list_item_edit_button">edit</button>
  //       <button data-position="${i}" data-file-prid="${data[i].file_id}" class="modal_list_item_delete_button">X</button>
  //     </div>`
  //   }

  //   // ace.require("ace/ext/language_tools");
  //   // let editor = ace.edit("editor");
  //   // // editor.setTheme("ace/theme/twilight");
  //   // let element1 = document.getElementById("data-hidden-file-id")
  //   // element1.setAttribute("data-hidden-file-id", "45")

  //   // editor.setValue("hello")



  //   // output_link(data)
  // }).catch(function () {
  //   console.log("error while connecting api server");


  // });

  let promise = new Promise(function (resolve, reject) {
    // do a thing, possibly async, then…


    fetch("http://localhost:3000/get_file", {}).then(res => {
      // console.log(res)
      return res.json()
    }).then(data => {
      // console.log(data)

      // console.log(data.length)
      for (i = 0; i < data.length; i++) {
        elem.innerHTML +=
          `<div class="modal1_list_item" data-list-file-prid="${data[i].file_id}" >
        <div class="modal1_file_name" >${data[i].file_name}</div>
        <button data-position="${i}" data-file-prid="${data[i].file_id}" class="modal_list_item_edit_button">edit</button>
        <button data-position="${i}" data-file-prid="${data[i].file_id}" class="modal_list_item_delete_button">X</button>
      </div>`
      }
      resolve(data)

      // output_link(data)
    }).catch(function () {
      console.log("error while connecting api server");
      reject("error while connecting api server")


    });


  });


  //clicking edit button///////////////////////////////////////////////////////////
  promise.then(function (result) {
    console.log(result); // "Stuff worked!"


    $(".modal_list_item_edit_button").click(function (event) {
      var text = $(event.currentTarget.attributes);
      let position = text[0].value
      let file_id = text[1].value
      // console.log(position)
      // console.log(file_id)


      let element1 = document.getElementById("data-hidden-file-id")
      element1.setAttribute("data-hidden-file-id", file_id)

      $(".filename1").html(result[position].file_name);



      ace.require("ace/ext/language_tools");

      let editor = ace.edit("editor");
      const obj = JSON.parse(result[position].file_data)
      editor.setValue(obj.src)

      var editor2 = ace.edit("stdin_area");
      const obj2 = JSON.parse(result[position].file_data)
      editor2.setValue(obj2.stdin)


    });


    $(".modal_list_item_delete_button").click(function (event) {
      var text = $(event.currentTarget.attributes);
      let position = text[0].value
      let file_id = text[1].value
      // console.log(position)
      // console.log(file_id)

      let mod1 = document.querySelectorAll(".modal1_list_item")

      for (let i = 0; i < mod1.length; i++) {
        if (file_id == mod1[i].attributes[1].value) {
          $(mod1[i]).remove()

          let element1 = document.getElementById("data-hidden-file-id")
          element1.setAttribute("data-hidden-file-id", "0")
          $(".filename1").html("code");


          let server_link = "http://localhost:3000/delete_file";


          let obj_data = {
            "file_id": file_id
          }
          fetch(server_link, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj_data)
          }).then(res => {
            // console.log(res)
            return res.text()
          }).then(data => {
            console.log(data)
          }).catch(function () {
            console.log("error while connecting api server");
          });


        }
        // console.log(mod1[i].attributes[1].value)
      }


      // $(".modal_list_item_delete_button").remove()
      console.log('clicked delete')
    });


  }).catch((err) => {
    console.log(err)
  })

}



function openmodal2(modal) {




  if (modal == null) return


  modal.classList.add('active')
  overlay.classList.add('active')


  // let element1 = document.getElementById("data-hidden-file-id")
  // let a = element1.getAttribute("data-hidden-file-id")
  // console.log(a)



  // $("#save-button").click(function (event) {
  //   console.log('save button is clicked');

  //   console.log(editor.getValue());
  // });

  // let element22 = document.getElementById("#save-as-button")
  // console.log(element22)


  // element22.addEventListener('click' , ()=>{
  //   console.log('save as button is clicked');

  // });
  // $("#save-as-button").click(function (event) {
  //   console.log('save as button is clicked');

  // });
}
$("#save-button").click(function (event) {
  console.log('save button is clicked');
 

  let element1 = document.getElementById("data-hidden-file-id")
  let a = element1.getAttribute("data-hidden-file-id")
  // console.log(a)


  let editor = ace.edit("editor");
  let script_data = editor.getValue();

  let editor2 = ace.edit("stdin_area");
  let input_data = editor2.getValue();

  let data_obj = {
    src: script_data,
    stdin: input_data,
    lang: "c",
    timeout: "5"
  }



  // let x = document.getElementById("file_name22").value
  // let file_name = $('#file_name1').html();

  if (a != 0) {
    // console.log(x)
    let data = JSON.stringify(data_obj)
    // console.log(data)


    let server_link = "http://localhost:3000/save_file";


    let obj_data = {
      "file_id": a ,
      "file_data":data
    }
    fetch(server_link, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj_data)
    }).then(res => {
      // console.log(res)
      return res.text()
    }).then(data => {
      console.log(data)
    }).catch(function () {
      console.log("error while connecting api server");
    });



    
  }


});


$("#save-as-button").click(function (event) {
  console.log('save as button is clicked');



  let element1 = document.getElementById("data-hidden-file-id")
  let a = element1.getAttribute("data-hidden-file-id")
  // console.log(a)


  let editor = ace.edit("editor");
  let script_data = editor.getValue();

  let editor2 = ace.edit("stdin_area");
  let input_data = editor2.getValue();

  let data_obj = {
    src: script_data,
    stdin: input_data,
    lang: "c",
    timeout: "5"
  }



  let x = document.getElementById("file_name22").value
  // let file_name = $('#file_name1').html();

  if (x.length > 0) {
    // console.log(x)
    let data = JSON.stringify(data_obj)
    // console.log(data)


    let server_link = "http://localhost:3000/save_as_file";


    let obj_data = {
      "file_name": x ,
      "file_data":data
    }
    fetch(server_link, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj_data)
    }).then(res => {
      // console.log(res)
      return res.text()
    }).then(data => {
      console.log(data)
    }).catch(function () {
      console.log("error while connecting api server");
    });



    
  }



});


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