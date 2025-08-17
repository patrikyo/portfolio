import { EmblaOptionsType } from "embla-carousel"; // Adjust the module path if necessary
import ProjectImage from "./projectImage.interface";

interface CarouselProps {
  images: ProjectImage[];
  options?: EmblaOptionsType;
}

export default CarouselProps;
