const avatarImage = document.querySelector('#avatar-image');
const h2Avatar = document.querySelector('#h2-avatar');

avatarImage.addEventListener('change', event => {
  const preview = document.querySelector('#preview-image');

  if (preview) {
    preview.remove();
  }

  const reader = new FileReader;

  reader.onload = function(event) {
    const previewImage = document.createElement('img');
    previewImage.width = 115;
    previewImage.height = 100;
    previewImage.id = 'preview-image';
    previewImage.src = event.target.result;
    h2Avatar.insertAdjacentElement('afterend', previewImage);
  }

  reader.readAsDataURL(avatarImage.files[0]);

})