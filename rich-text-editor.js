/* code by webdevtrick ( https://webdevtrick.com ) */
function enableEditMode() {
	richTextField.document.designMode = "on";
  }
function Edit(command) {
	richTextField.document.execCommand(command, false, null);
  }
function execVal(command, value) {
	richTextField.document.execCommand(command, false, value);
  }


let input, hashtagArray, container, t;

input = document.querySelector('#hashtags');
container = document.querySelector('.tag-container');
hashtagArray = [];

input.addEventListener('keyup', () => {
    if (event.which == 13 && input.value.length > 0) {
      var text = document.createTextNode(input.value);
      var p = document.createElement('p');
      container.appendChild(p);
      p.appendChild(text);
      p.classList.add('tag');
      input.value = '';
      
      let deleteTags = document.querySelectorAll('.tag');
      
      for(let i = 0; i < deleteTags.length; i++) {
        deleteTags[i].addEventListener('click', () => {
          container.removeChild(deleteTags[i]);
        });
      }
    };

});


