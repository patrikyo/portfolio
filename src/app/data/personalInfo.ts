import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import PersonalInfoItem from "@/app/models/interfaces/personalInfoItem";

const personalInfo: PersonalInfoItem[] = [
  { label: "Full Name", value: "Patrik Youssef", icon: faUser, link: false },
  {
    label: "Email Adress",
    value: "patrikyoussef@gmail.com",
    icon: faEnvelope,
    link: false,
  },
  {
    label: "Linkedin",
    value: "https://www.linkedin.com/in/patrik-youssef-4891b71a3/",
    icon: faLinkedin,
    link: true,
  },
  { label: "phone", value: "0739165824", icon: faMobile, link: false },
  {
    label: "Github",
    value: "https://github.com/patrikyo",
    icon: faGithub,
    link: true,
  },
];

export default personalInfo;
