import ProjectImage from "./ProjectImage.interface";

interface ProjectData {
  title: string;
  description: string;
  images: ProjectImage[];
  url: string;
}

export default ProjectData;
