<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";

import { HandleInputChange } from "@/types/events";

import AsideList from "@/components/aside-list.vue";

import { useStore } from "vuex-simple";
import { MainModule } from '@/store/modules/main/main';
import { SET_FILTER_KEYWORD } from '@/store/mutationsVariables';

@Component({
  name: "Aside"
})
export default class Aside extends Vue {
  store: MainModule = useStore(this.$store);

  private setFilterKeyword(evt: HandleInputChange): void {
    const value = evt.target.value;

    this.store[SET_FILTER_KEYWORD](value.toLowerCase());
  }

  render(): VNode {
    const { $style, setFilterKeyword } = this;

    return (
      <aside class={$style.aside}>
        <form action="#" class={$style.aside__form}>
          <fieldset class={$style.aside__fieldset}>
            <button
              class={$style.aside__search}
              type="submit"
              aria-label="Поиск по сайту"
            ></button>
            <input
              class={$style.aside__input}
              type="search"
              name="search"
              placeholder="Поиск"
              on={{ input: setFilterKeyword }}
            />
          </fieldset>

          <button
            class={$style.aside__filter}
            type="button"
            aria-label="Фильтр поиска"
          ></button>
        </form>

        <AsideList />
      </aside>
    );
  }
}
</script>

<style module>
.aside {
  width: 334px;
  margin-right: var(--main-mr);
  margin-bottom: var(--main-mb);
}

.aside__form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-dark);
  padding: var(--main-horizontal);
  border-radius: 8px 8px 0 0;
  background-color: var(--main-light);
}

.aside__input {
  align-self: center;
  padding: 0;
  padding-left: 8px;
  width: 196px;
  outline: none;
  border: none;
  background-color: transparent;
}

.aside__fieldset {
  display: flex;
  margin: 0;
  padding: 10px;
  min-height: 44px;
  border: none;
  border-radius: 8px;
  background-color: var(--main-grey);
}

.aside__search {
  width: 24px;
  height: 24px;
  border: none;
  background: url("@/assets/images/search.svg");
  cursor: pointer;
}

.aside__filter {
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 8px;
  background: url("@/assets/images/filter.svg");
  cursor: pointer;
}

@media (max-width: 1440px) {
  .aside {
    width: 100%;
  }
}
</style>
