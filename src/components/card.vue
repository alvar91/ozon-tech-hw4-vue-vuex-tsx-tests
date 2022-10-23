<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";
import { User } from "@/types/user";

import { useStore } from "vuex-simple";
import { MainModule } from "@/store/modules/main/main";

import InputText from "@/components/input-text.vue";
import InputDate from "@/components/input-date.vue";
import Select from "@/components/select.vue";
import InputRadio from "@/components/input-radio.vue";

import { ACCOUNT_STATUS, FP_STATUS, APPLICATION_STATUS } from "@/constants";
import { formatDate } from "@/utils/formatDate";

@Component({
  name: "Card",
})
export default class Card extends Vue {
  private store: MainModule = useStore(this.$store);

  private get currentUser(): User | undefined {
    return this.store.currentUser;
  }

  formatDate(date: Date): string {
    return formatDate(date);
  }

  render(): VNode {
    const { $style, currentUser } = this;

    const {
      firstName,
      middleName,
      lastName,
      login,
      city,
      ticket,
      citizenship,
      age,
      gender,
      registeredDate,
      employmentDate,
      FPStatus,
      accountStatus,
      applicationStatus,
    } = currentUser as User;

    return (
      <main class={$style.main}>
        <section class={$style.card}>
          <article class={$style.card__about}>
            <h2 class={$style.card__name}>
              {middleName} {firstName} {lastName}
            </h2>
            <button
              class={[
                $style["card__user-status"],
                $style[`card__user-status--${accountStatus}`],
              ]}
            >
              {ACCOUNT_STATUS[accountStatus]}
            </button>
          </article>
          <article class={$style.card__data}>
            <ul class={$style.card__list}>
              <li class={$style["card__list-item"]}>
                <ul class={$style["card__sub-list"]}>
                  <li class={$style.card__item}>
                    <span class={$style.card__label}>Заявка:</span>
                    <span class={$style.card__label}>Логин:</span>
                  </li>
                  <li class={$style.card__item}>
                    <span class={$style.card__label}>{ticket}</span>
                    <span class={$style.card__label}>{login}</span>
                  </li>
                </ul>
              </li>

              <li class={$style["card__list-item"]}>
                <ul class={$style["card__sub-list"]}>
                  <li class={$style.card__item}>
                    <span class={$style.card__label}>Дата выхода:</span>
                    <span class={$style.card__label}>Дата оформления:</span>
                  </li>
                  <li class={$style.card__item}>
                    <time class={$style.card__date} datetime={employmentDate}>
                      {formatDate(new Date(employmentDate))}
                    </time>
                    <time class={$style.card__date} datetime={registeredDate}>
                      {formatDate(new Date(registeredDate))}
                    </time>
                  </li>
                </ul>
              </li>

              <li class={$style["card__list-item"]}>
                <ul class={$style["card__sub-list"]}>
                  <li class={$style.card__item}>
                    <span class={$style.card__label}>Статус ФП:</span>
                    <span class={$style.card__label}>Статус УЗ:</span>
                  </li>
                  <li class={$style.card__item}>
                    <span
                      class={[
                        $style.card__status,
                        $style[`card__status--${FPStatus}`],
                      ]}
                    >
                      {FP_STATUS[FPStatus]}
                    </span>
                    <span
                      class={[
                        $style.card__status,
                        $style[`card__status--${applicationStatus}`],
                      ]}
                    >
                      {APPLICATION_STATUS[applicationStatus]}
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </article>
          <article class={$style.card__detailed}>
            <h3 class={$style.card__personal}>Личная информация</h3>
            <form action="#" class={$style.card__form}>
              <InputText
                title={"Фамилия"}
                name={"middleName"}
                value={middleName}
                placeholder={"Фамилия"}
              />
              <InputText
                title={"Имя"}
                name={"firstName"}
                value={firstName}
                placeholder={"Имя"}
              />
              <InputText
                title={"Отчество"}
                name={"lastName"}
                value={lastName}
                placeholder={"Отчество"}
              />
              <InputDate title={"Дата рождения"} name={"age"} value={age} />
              <Select
                title={"Гражданство"}
                name={"citizenship"}
                value={citizenship}
              />
              <InputRadio title={"Пол"} name={"gender"} value={gender} />
              <InputText
                title={"Город проживания"}
                name={"city"}
                value={city}
                placeholder={"Город проживания"}
                isDisabled={true}
                isWide={true}
              />
            </form>
          </article>
        </section>
      </main>
    );
  }
}
</script>

<style module>
.main {
  width: 100%;
  margin-bottom: var(--main-mb);
}

.card {
  border-radius: 8px;
  background-color: var(--main-light);
}

.card__about {
  padding: var(--main-p);
  padding-bottom: 0;
}

.card__name {
  margin: 0;
  margin-bottom: var(--sub-input-mb);
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.3px;
}

.card__user-status {
  position: relative;
  padding: 2px 12px 2px 22px;
  line-height: 20px;
  border: none;
  border-radius: var(--border-radius-b);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.card__user-status--inactive,
.card__user-status--idle {
  background-color: var(--warning-bg);
}

.card__user-status--inactive::before,
.card__user-status--idle::before {
  content: "";
  position: absolute;
  left: 2px;
  top: 4px;
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url("@/assets/images/warning-dot.svg");
}

.card__user-status--active,
.card__user-status--success {
  background-color: var(--success-bg);
}

.card__user-status--active::before,
.card__user-status--success::before {
  content: "";
  position: absolute;
  left: 6px;
  top: 4px;
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url("@/assets/images/success-dot.svg");
}

.card__list {
  margin: 0;
  margin-bottom: 17px;
  padding: 0;
}

.card__data {
  padding: var(--main-p);
  padding-bottom: 0;
  border-bottom: 1px solid var(--border-dark);
}

.card__list {
  display: flex;
}

@media (max-width: 1440px) {
  .card__list {
    flex-direction: column;
  }
}

.card__list-item {
  height: 52px;
  padding: 0 var(--main-p);
  border-right: 1px solid var(--border-light);
}

@media (max-width: 1440px) {
  .card__list-item {
    padding: 0;
    height: auto;
    border: none;
  }
}

.card__list-item:first-child {
  padding: 0;
}

.card__list-item:last-child {
  border: none;
}

.card__sub-list {
  display: flex;
  padding: 0;
  min-width: 269px;
}

.card__sub-list:first-child {
  min-width: 207px;
}

.card__item {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1040px) {
  .card__sub-list {
    height: 100%;
  }

  .card__item {
    justify-content: space-between;
  }
}

.card__status {
  position: relative;
  margin-bottom: var(--sub-input-mb);
  padding-left: 15px;
  font-size: 13px;
  font-weight: 600;
}

.card__status--updated::before,
.card__status--idle::before,
.card__status--inactive::before {
  content: "";
  position: absolute;
  left: 0;
  top: 4px;
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url("@/assets/images/warning-dot.svg");
}

.card__status--active::before,
.card__status--success::before {
  content: "";
  position: absolute;
  left: 0px;
  top: 4px;
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url("@/assets/images/success-dot.svg");
}

.card__detailed {
  padding: var(--main-p);
  padding-top: 18px;
  padding-bottom: 2px;
}

.card__form {
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 1440px) {
  .card__form {
    flex-direction: column;
  }
}

.card__label {
  display: flex;
  flex-direction: column;
  margin-right: var(--sub-input-mr);
  margin-bottom: var(--sub-input-mb);
  font-size: var(--main-fz);
  color: var(--text-light-grey);
}

.card__label:nth-child(3),
.card__label:nth-child(6),
.card__label:last-child {
  margin-right: 0;
}

@media (max-width: 1440px) {
  .card__label:nth-child(3),
  .card__label:nth-child(6),
  .card__label:last-child {
    margin-right: var(--input-mr);
  }
}

.card__label--disabled {
  color: var(--text-disabled);
}

.card__label-container {
  display: flex;
}

@media (max-width: 730px) {
  .card__label-container {
    flex-direction: column;
  }
}

.card__date {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--sub-input-mb);
  padding-left: 7px;
  font-size: var(--main-fz);
  color: var(--text-light-grey);
}

.card__personal {
  margin: 0;
  margin-bottom: var(--input-mr);
  font-size: 20px;
  letter-spacing: -0.3px;
}
</style>
