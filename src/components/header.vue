<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";

import Logo from "@/icons/LogoIcon.vue";
import Container from "@/components/container.vue";
import HeaderNav from "@/components/header-nav.vue";

@Component({
  name: "Header",
})
export default class Header extends Vue {
  render(): VNode {
    const { $style } = this;

    return (
      <header class={$style.header}>
        <Container>
          <div class={$style.header__group}>
            <router-link to="/" exact class={"header__logo"} aria-label="Логотип сайта">
              <Logo />
            </router-link>
            <button class={$style.header__logout}>Выйти</button>
          </div>
          <HeaderNav />
        </Container>
      </header>
    );
  }
}
</script>

<style module>
.header {
  padding-top: var(--main-vertical);
  margin-bottom: var(--header-mb);
  border-bottom: 2px solid var(--header-border);
  background-color: var(--main-light);
}

.header__group {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--main-vertical);
}

.header__logout {
  padding: 0;
  padding-bottom: 7px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
