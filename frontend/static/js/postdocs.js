export{
    uploadFile
}
function uploadFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    
    var formData = new FormData();
    formData.append('file', file);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload', true);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          let fileName= file.name;
          const docsDiv = document.getElementById('uploaded_files');
          docsDiv.innerHTML += `<p>${fileName}</p>`;
          fileInput.value = "";
        }
        else{
          var errorMessage = "File upload failed.";
          displayErrorModal(errorMessage);
        }
      }
    };

    xhr.send(formData);
}