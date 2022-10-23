export enum ACCOUNT_STATUS {
  active = "Загружена кандидатом",
  inactive = "Ожидают загрузки",
}

export enum FP_STATUS {
  active = "Активна",
  inactive = "Обновлено",
}

export enum APPLICATION_STATUS {
  success = "Активна",
  idle = "Обновлено",
}

export enum GENDER_TITLES {
  male = "Мужской",
  female = "Женский",
}

export enum GENDERS {
  male = "male",
  female = "female",
}

export enum ROUTES_TITLE {
  all = "Все",
  waiting = "Ожидают загрузки",
  loaded = "Загружены кандидатом"
}

export enum ROUTES_TO {
  all = "/",
  waiting = "/waiting",
  loaded = "/loaded"
}