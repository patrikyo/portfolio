import ProjectImage from "./projectImage.interface";

interface ProjectData {
  title: string;
  description: string;
  images: ProjectImage[];
  url: string;
}

export default ProjectData;
