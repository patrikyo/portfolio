import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import PersonalInfoItem from "@/app/models/interfaces/PersonalInfoItem";

const personalInfo: PersonalInfoItem[] = [
  { label: "Full Name", value: "Patrik Youssef", icon: faUser },
  {
    label: "Email Adress",
    value: "patrikyoussef@gmail.com",
    icon: faEnvelope,
  },
  { label: "Linkedin", value: "Lorum ipsum", icon: faLinkedin },
  { label: "phone", value: "0739165824", icon: faMobile },
];

export default personalInfo;
