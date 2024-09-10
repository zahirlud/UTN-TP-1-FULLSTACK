document
  .getElementById("card-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("card-title").value;
    const description = document.getElementById("card-description").value;
    const imageUrl =
      document.getElementById("card-image").value ||
      "https://www.elmueble.com/medio/2023/11/14/como-decorar-una-habitacion-de-matrimonio_99bb8f5b_FER8191b_231114150325_900x900.jpg";
    const bgColor = document.getElementById("card-bg-color").value;
    const borderColor = document.getElementById("card-color-border").value;

    console.log({
      title: title,
      description: description,
      imageUrl: imageUrl,
      bgColor: bgColor,
      borderColor: borderColor,
    });

    const cardContainer = document.getElementById("cards-container");
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.style.background = bgColor;
    newCard.style.borderColor = borderColor;

    newCard.innerHTML = `
    <img class="img-card"src = "${imageUrl}" alt="Card-Image">
    <div class="card-content">
            <h3>${title}</h3>
            <p>${description}</p>


    </div>
    `;

    cardContainer.appendChild(newCard);

    document.getElementById("card-form").reset();
  });
