const form = document.querySelector('#img-form');
const img = document.querySelector('#img');
const outputPath = document.querySelector('#output-path');
const filename = document.querySelector('#filename');
const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');

// Load an Image
function loadImage(e) {
  const file = e.target.files[0];

  if (!isFileImage(file)) {
    alertError('Please select a valid image ');
    return;
  }

  // Get orgiional dimensions
  const image = new Image();
  image.src = URL.createObjectURL(file);

  image.onload = function () {
    widthInput.value = this.width;
    heightInput.value = this.height;
  };

  //displays form and file name
  form.style.display = 'block';
  filename.innerHTML = file.name;
  outputPath.innerText = path.join(os.homedir(), 'imageresizer');
}

// make sure file is image
function isFileImage(file) {
  const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

  return file && acceptedImageTypes.includes(file['type']);
}

// alert an error
function alertError(message) {
  Toastify.toast({
    text: message,
    duration: 5000,
    style: {
      background: 'red',
      color: 'white',
      textAlign: 'center',
    },
  });
}

// alert success
// alert an error
function alertSuccess(message) {
  Toastify.toast({
    text: message,
    duration: 5000,
    style: {
      background: 'green',
      color: 'white',
      textAlign: 'center',
    },
  });
}

img.addEventListener('change', loadImage);
