let people = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    img: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg",
  },
];

for (let i = 0; i < people.length; i++) {
  let member = people[i];
  console.log(
    `Name: ${member.name}, Role: ${member.role}, Picture: ${member.img}`
  );

  const cardContent = document.querySelectorAll(".card-body")[i]; // seleziona la card-body corrispondente

  const firstNameElement = document.createElement("h3");
  firstNameElement.id = `first-name-${i}`;
  firstNameElement.textContent = member.name;

  const roleElement = document.createElement("h5");
  roleElement.id = `role${i}`;
  roleElement.textContent = member.role;

  cardContent.append(firstNameElement);
  cardContent.append(roleElement);

  const imgElement = document.querySelectorAll(".card-img-top")[i]; // seleziona l'immagine corrispondente
  imgElement.src = `img/${member.img}`;
  imgElement.alt = member.name;
}
