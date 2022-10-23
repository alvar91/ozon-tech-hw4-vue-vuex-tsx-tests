<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";

import { Routes } from "@/types/routes";

import { ROUTES_TITLE, ROUTES_TO } from "@/constants";

@Component({
  name: "HeaderNav",
})
export default class HeaderNav extends Vue {
  private routes: Routes = [
    {
      title: ROUTES_TITLE.all,
      to: ROUTES_TO.all,
    },
    {
      title: ROUTES_TITLE.waiting,
      to: ROUTES_TO.waiting,
    },
    {
      title: ROUTES_TITLE.loaded,
      to: ROUTES_TO.loaded,
    },
  ];

  render(): VNode {
    const { $style, routes } = this;

    const routesJSX = routes.map(({ title, to }) => {
      return (
        <li class={$style.nav__item} key={title}>
          <router-link
            to={to}
            class={$style.nav__link}
            exact
            active-class={$style["nav__link--active"]}
          >
            {title}
          </router-link>
        </li>
      );
    });

    return (
      <nav class={$style.nav}>
        <ul class={$style.nav__list}>{routesJSX}</ul>
      </nav>
    );
  }
}
</script>

<style module>
.nav__list {
  display: flex;
  margin: 0;
  padding: 0;
}

@media (max-width: 730px) {
  .nav__list {
    flex-direction: column;
  }
}

.nav__item {
  display: flex;
  padding-bottom: 5px;
  align-items: center;
  min-height: 37px;
}

.nav__item:not(:last-child) {
  margin-right: var(--header-mr);
}

.nav__link {
  color: var(--text-grey);
  outline: none;
}

.nav__link:after {
  display: block;
  content: "";
  border-bottom: 2px solid var(--main-blue);
  border-radius: 4px;
  transform: scaleX(0) translateY(9px);
  transition: transform 0.2s ease-in-out;
}

.nav__link--active {
  color: var(--text-color);
}

.nav__link:hover:after,
.nav__link:focus:after,
.nav__link--active:after {
  transform: scaleX(1) translateY(9px);
  transform-origin: 0 50%;
}
</style>
