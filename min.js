function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: ai lasat unul sau ambele spatii goale.';
    return;
  }
  updateLabel();
}
function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else {
    return false;
  }
}
function updateLabel() {
  var addend1 = getNumber1();
  var addend2 = getNumber2();
  var min = function (addend1, addend2){
	  var minimum = null;
	  if (addend1 > addend2){
		  return addend2;
	  }else if(addend2 > addend1){
		  return addend1;
	  }else if(arguments.length == 0){
		  return "ai lasat unul sau ambele spatii goale";
	  }else if( addend1 === addend2){
		  return addend1 + " equals " + addend2;
	  }
	  else{
		  return;
	  }
  };
 
  label.textContent = Math.min(addend1, addend2);
}
function getNumber1() {
  return inputs[0].value;
}
function getNumber2() {
  return inputs[1].value;
}
var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);