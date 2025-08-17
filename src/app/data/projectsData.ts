import ProjectData from "../models/interfaces/project.interface";

const projectsData: ProjectData[] = [
  {
    title: "börsdata",
    description:
      "lorum ipsum dolar sit emet, lorum ipsum dolar sit emet, lorum ipsum dolar sit emet , lorum ipsum dolar sit emet , lorum ipsum dolar sit emet , lorum ipsum dolar sit emet",
    images: [
      { src: "/patrik.png", alt: "image1" },
      { src: "/tayo.jpg", alt: "image2" },
      { src: "/file.svg", alt: "image3" },
    ],
    url: "https://github.com/patrikyo/stock-fe",
  },
  {
    title: "tayo",
    description:
      "lorum ipsum dolar sit emet, lorum ipsum dolar sit emet, lorum ipsum dolar sit emet , lorum ipsum dolar sit emet , lorum ipsum dolar sit emet , lorum ipsum dolar sit emet",
    images: [
      { src: "/file.svg", alt: "image1" },
      { src: "/tayo.jpg", alt: "image2" },
      { src: "/patrik.png", alt: "image3" },
    ],
    url: "https://github.com/patrikyo/elevator",
  },
];

export default projectsData;
