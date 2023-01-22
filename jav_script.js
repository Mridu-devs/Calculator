// let string = "";
// let buttons = document.querySelectorAll('button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHtml == '='){
//             string = eval(string);
//             document.querySelector('input').value=string;
//         }
//         console.log(e.target)
//         string = string + e.target.innerHtml;
//         document.querySelector('input').value  = string;

//     })
// })

function clk(val) {
  document.getElementById("screen").value =
    document.getElementById("screen").value + val;
}

function clrdisp(val) {
  document.getElementById("screen").value = "";
}

function eql(val) {
  var text = document.getElementById("screen").value;
  var result = eval(text);
  document.getElementById("screen").value = result;
}
