import { GENDERS, GENDER_TITLES } from "@/constants";

export interface Gender {
  title: GENDER_TITLES.male | GENDER_TITLES.female;
  gender: GENDERS.male | GENDERS.female;
}

export type Genders = Gender[];
