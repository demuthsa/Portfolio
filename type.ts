import { IconType } from "react-icons";

export interface IService {
  title: String;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  name: String;
  level: String;
  Icon: IconType;
}

export interface IProject {
  name: String;
  description: String;
  image_path: String;
  deployed_url: String;
  github_url: String;
  skills: String[];
}
