function sv(id, vi){
  document.getElementById(id).style.display = vi;
}
function copytext(id){
    var textcopy = document.getElementById(id);
    textcopy.select();
    textcopy.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(textcopy.value);
}
const text1 = document.getElementById("Name");
const text2 = document.getElementById("Bio1");
const text3 = document.getElementById("Bio2");
function editvalue(){
  var name = prompt("What is your Name?");
  var bioline1 = prompt("What do you want your Bio Line 1 to be?");
  var bioline2 = prompt("What do you want your Bio Line 2 to be?");
  text1.innerHTML = name;
  text2.innerHTML = bioline1;
  text3.innerHTML = bioline2;
}
var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};
const wrapper = document.querySelector(".sliderWrapper");
var i = 1;
function next(){
  wrapper.style.transform = `translateX(${-100 * i}vw)`;
  i++;
}
function prev(){
  i--;
  wrapper.style.transform = `translateX(${-100 * i}vw)`;
}