export const createCharacterCard = ({ id, image, origin, status, name }) => {
  const card = document.createElement("div");
  card.classList.add(".card");

  const title = document.createElement("h3");
  card.classList.add(".name");
  title.textContent = name;

  const photo = document.createElement("img");
  photo.classList.add(".photo");
  photo.src = image;

  card.append(title, photo);

  return card;
};

export const createCardList = (list) => {
  const cardlist = list.map(createCharacterCard);

  return cardlist;
};
