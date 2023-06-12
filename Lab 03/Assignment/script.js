document.addEventListener("DOMContentLoaded", function () {
  let selectedImages = [];
  let div = document.querySelector(".image-container");
  div.onclick = function (event) {
    let img = event.target.closest("img");
    if (!img) return;
    if (!div.contains(img)) return;
    if (selectedImages.includes(img)) return;
    highlight(img);
  };

  function highlight(img) {
    img.classList.toggle("highlight");
    if (img.classList.contains("highlight")) {
      selectedImages.push(img);
    } else {
      let index = selectedImages.indexOf(img);
      if (index > -1) {
        selectedImages.splice(index, 1);
      }
    }
  }

  let addCartButton = document.getElementById("addcart");
  addCartButton.addEventListener("click", function () {
    let selectedContainer = document.querySelector(".selected-container");
    selectedContainer.innerHTML = "";
    selectedImages.forEach(function (selectedImg) {
      let selectedImgElement = document.createElement("div");
      selectedImgElement.classList.add("selected-image");

      let imgElement = document.createElement("img");
      imgElement.src = selectedImg.src;
      imgElement.alt = selectedImg.alt;

      let imageInfo =
        selectedImg.parentNode.querySelector(".image-info").innerHTML;
      let imageInfoElement = document.createElement("div");
      imageInfoElement.classList.add("image-info");
      imageInfoElement.innerHTML = imageInfo;

      let removeButton = document.createElement("button");
      removeButton.classList.add("remove-btn");
      removeButton.innerHTML = "X";
      removeButton.addEventListener("click", function () {
        selectedContainer.removeChild(selectedImgElement);
        let index = selectedImages.indexOf(selectedImg);
        if (index > -1) {
          selectedImages.splice(index, 1);
        }
        imgElement.onclick = function () {
          highlight(selectedImg);
        };
        updateTotalPrice();
      });

      selectedImgElement.appendChild(imgElement);
      selectedImgElement.appendChild(imageInfoElement);
      selectedImgElement.appendChild(removeButton);
      selectedContainer.appendChild(selectedImgElement);
    });
    updateTotalPrice();
  });

  let addImageForm = document.getElementById("addImageForm");
  addImageForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let nameInput = document.getElementById("nameInput");
    let priceInput = document.getElementById("priceInput");
    let descriptionInput = document.getElementById("descriptionInput");
    let imageInput = document.getElementById("imageInput");

    let existingImages = document.querySelectorAll(".image img");
    for (let i = 0; i < existingImages.length; i++) {
      if (existingImages[i].alt === nameInput.value) {
        alert("Image with the same name already exists!");
        return;
      }
    }

    let imgElement = document.createElement("img");
    imgElement.src = URL.createObjectURL(imageInput.files[0]);
    imgElement.alt = nameInput.value;
    imgElement.classList.add("uploaded-image");

    let imageInfoElement = document.createElement("div");
    imageInfoElement.classList.add("image-info");
    imageInfoElement.innerHTML = `
          <h3>${nameInput.value}</h3>
          <p>Price: $${priceInput.value}</p>
          <p>${descriptionInput.value}</p>
      `;

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image");
    imageContainer.appendChild(imgElement);
    imageContainer.appendChild(imageInfoElement);

    let imageContainerDiv = document.querySelector(".image-container");
    imageContainerDiv.appendChild(imageContainer);

    nameInput.value = "";
    priceInput.value = "";
    descriptionInput.value = "";
    imageInput.value = "";

    imgElement.onclick = function () {
      highlight(imgElement);
    };
  });

  let totalPriceElement = document.getElementById("totalPrice");
  let confirmPurchaseButton = document.getElementById("confirmPurchase");

  function updateTotalPrice() {
    let totalPrice = 0;

    selectedImages.forEach(function (selectedImg) {
      let priceElement = selectedImg.parentNode.querySelector(
        ".image-info p:nth-child(2)"
      ).innerHTML;
      let price = parseFloat(priceElement.match(/\d+(\.\d+)?/)[0]);
      totalPrice += price;
    });

    totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
  }
  let confirm = document.getElementById("confirmPurchase");
  confirm.addEventListener("click", function () {
    location.reload();
  });
});
