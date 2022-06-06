const DUMMY_DATA = [
  {
    year: "1990",
    dates: [
      {
        data: "10.04.1990",
        event: "Was borned",
      },
    ],
  },
  {
    year: "2007",
    dates: [
      {
        data: "31.05.2007",
        event: "Finished school",
      },
      {
        data: "31.09.2007",
        event: "Entered to university",
      },
    ],
  },
  {
    year: "2007-2012",
    dates: [
      {
        data: "31.05.2012",
        event:
          "Higher Education. Specialty: Computer Systems and Networks.Finished Kherson National Technical University",
      },
    ],
  },
  {
    year: "2012-2014",
    dates: [
      {
        data: "",
        event: "Worked at Pension Fund",
      },
    ],
  },
  {
    year: "2014-2022",
    dates: [
      {
        data: "12.09.2020",
        event: "Merriage",
      },
      {
        data: "21.09.2021",
        event: "Was born my son - Bogdan",
      },
      {
        data: "2014-2022",
        event: "Working at own computer service",
      },
    ],
  },
  {
    year: "Infinyty",
    dates: [
      {
        data: "There is no limit to perfection",
        event: "JavaScript / Front-end",
      },
    ],
  },
];
let aboutInfo = {
  official:
    "I'm a goal oriented front-end developer with experience in creating Landing Pages and SPA, using React(JS/TS), Redux, HTML & CSS. Now I am improving my skills in this direction and expanding them with new technologies...",
  unofficial:
    "Привіт, мене звати Олександр і я Junior frontend developer (React / React Navite). Прийшов отримати знання та той самий містичний 'комерційний досвід' який шукають всі джуни О_о або хоча б досвід, який максимально наближений до такого. Читав, що в Binary Studio Academy  буде тяжко але максимально корисно для розвитку - як розробник...so...here we are.Як кажуть в народі: 'Не тупи - а скоріш в Binary Studio Academy попади' :)",
  activeOfficial: true,
};
/*=====Variables=====*/
const timeLine = document.querySelector("#timeLineSection");
const unofficaialBTN = document.querySelector("#unofficialMode");
const intro_text = document.querySelector("#intro_text");
const avatar = document.querySelector("#avatar");

/*=====RenderTimeLines=====*/
DUMMY_DATA.forEach((item) => {
  let dates = "";
  item.dates.forEach((item) => {
    dates += `<div class ="timeline__info-date"> <strong>${item.data}</strong>
    <div class ="timeline__info">${item.event}</div>
        </div>
       `;
  });

  timeLine.innerHTML += `<div class="content__education-item" id=${item.year}>
    <div class="education__item-title" >${item.year}</div>
    ${dates}
</div>`;
});

/*=====Show dates => TimeLines=====*/
const findDate = (year) => {
  let element = document.getElementById(`${year}`);
  element.classList.toggle("show");
};
timeLine.addEventListener("click", (e) => {
  findDate(e.target.innerHTML);
});

/*=====Unofficaial MODE=====*/
unofficaialBTN.addEventListener("click", (e) => {
  unofficaialBTN.classList.toggle("active");
  
  if (aboutInfo.activeOfficial) {
    intro_text.textContent = aboutInfo.unofficial;
    aboutInfo.activeOfficial = false;
    avatar.src = './assets/avatarUN.jpg'
  } else {
    intro_text.textContent = aboutInfo.official;
    aboutInfo.activeOfficial = true;
    avatar.src = './assets/avatar.jpg'
  }
});
