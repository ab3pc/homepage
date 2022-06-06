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

const timeLine = document.querySelector("#timeLineSection");
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

const findDate = (year) => {
  let element = document.getElementById(`${year}`);
  element.classList.toggle("show");
  console.log(element.s);
};
timeLine.addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
  findDate(e.target.innerHTML);
});
