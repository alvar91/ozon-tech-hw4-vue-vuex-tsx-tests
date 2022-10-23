<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";

import { User } from "@/types/user";
import { HandleChange } from "@/types/events";

import { ACCOUNT_STATUS } from "@/constants";
import { formatDate } from "@/utils/formatDate";

import { useStore } from "vuex-simple";
import { MainModule } from "@/store/modules/main/main";
import { SET_CURRENT_USER } from '@/store/mutationsVariables';

@Component({
  name: "AsideList",
})
export default class AsideList extends Vue {
  private store: MainModule = useStore(this.$store);

  private get filteredUsers(): User[] {
    return this.store.filteredUsers;
  }

  private setCurrentUser(evt: HandleChange): void {
    evt.preventDefault();

    const $value: HTMLElement | null = evt.target.closest("[data-id]");
    if ($value === null) return;

    const userId = $value.dataset.id;

    if (userId !== undefined) this.store[SET_CURRENT_USER](userId);
  }

  private formatDate(date: Date): string {
    return formatDate(date);
  }

  render(): VNode {
    const { $style, filteredUsers, setCurrentUser, formatDate } = this;

    const usersJSX = filteredUsers.map((item) => {
      const {
        id,
        firstName,
        middleName,
        lastName,
        registeredDate,
        accountStatus,
      } = item;

      return (
        <li class={$style.aside__item} key={id} data-id={id}>
          <a href="#" class={$style["aside__user-link"]}>
            {middleName} {firstName} {lastName}
          </a>
          <div class={$style.aside__status}>
            <button
              class={[
                $style["aside__user-status"],
                $style[`aside__user-status--${accountStatus}`],
              ]}
            >
              {ACCOUNT_STATUS[accountStatus]}
            </button>
            <time class={$style["aside__user-date"]} datetime={registeredDate}>
              {formatDate(new Date(registeredDate))}
            </time>
          </div>
        </li>
      );
    });

    return (
      <ul class={$style.aside__list} on={{ click: setCurrentUser }}>
        {usersJSX}
      </ul>
    );
  }
}
</script>

<style module>
.aside__list {
  margin: 0;
  padding: 0;
}

@media (max-width: 1440px) {
  .aside__list {
    display: flex;
    flex-wrap: wrap;
  }
}

.aside__item {
  padding: var(--main-vertical) var(--main-horizontal);
  border-bottom: 1px solid var(--border-dark);
  background-color: var(--main-light);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}

.aside__item:hover {
  background-color: var(--main-grey);
  transition: background-color 0.2s ease-in-out;
}

.aside__item:last-child {
  border: none;
}

.aside__item:last-child {
  border-radius: 0 0 8px 8px;
}

.aside__user-link {
  display: inline-block;
  width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.aside__status {
  display: flex;
  justify-content: space-between;
}

.aside__user-status {
  position: relative;
  padding: 2px 12px 2px 18px;
  line-height: 20px;
  border: none;
  border-radius: var(--border-radius-b);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.aside__user-status--inactive {
  background-color: var(--warning-bg);
}

.aside__user-status--inactive::before {
  content: "";
  position: absolute;
  left: 2px;
  top: 4px;
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url("@/assets/images/warning-dot.svg");
}

.aside__user-status--active {
  background-color: var(--success-bg);
}

.aside__user-status--active::before {
  content: "";
  position: absolute;
  left: 2px;
  top: 4px;
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url("@/assets/images/success-dot.svg");
}

.aside__user-date {
  position: relative;
  padding-left: 27px;
  font-size: 13px;
}

.aside__user-date::before {
  content: "";
  position: absolute;
  left: 4px;
  top: 4px;
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url("@/assets/images/calendar.svg");
}
</style>
