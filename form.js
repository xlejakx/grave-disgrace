


// $('#bootstrapForm').submit(function (event) {
//     event.preventDefault()
//     var extraData = {}
//     $('#bootstrapForm').ajaxSubmit({
//         data: extraData,
//         dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
//         error: function () {
//             // Submit of form should be successful but JSONP callback will fail because Google Forms
//             // does not support it, so this is handled as a failure.
//             // alert('Form Submitted. Thanks.')
//             // You can also redirect the user to a custom thank-you page:
//             modal.style.display = "flex"
//             setTimeout(closeModal, 3000);
//         }
//     })
// })
// let form = document.getElementById('bootstrapForm')
// console.log(form);

// form.onsubmit = function(event){
//     event.preventDefault();

//  }


let next = document.getElementById('next');
let closebtn = document.getElementById('closebtn');
let paymodal = document.getElementById('paymodal');

next.onclick = function(event){
    paymodal.style.display="flex";
 }
 closebtn.onclick = function(event){
    paymodal.style.display="none";
 }


var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];

function closeModal() {
    paymodal.style.display = "none";
    document.getElementById("559352220").value = "";
    document.getElementById("1275419724").value = "Москва";
}

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });