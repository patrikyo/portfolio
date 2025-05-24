import { EmblaOptionsType } from "embla-carousel"; // Adjust the module path if necessary
import ProjectImage from "./ProjectImage.interface";

interface CarouselProps {
  images: ProjectImage[];
  options?: EmblaOptionsType;
}

export default CarouselProps;
