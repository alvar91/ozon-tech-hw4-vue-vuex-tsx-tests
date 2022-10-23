<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "App",
})
export default class App extends Vue {
  render(): VNode {
    return (
      <div id="app">
        <router-view />
      </div>
    );
  }
}
</script>

<style>
/* variables */
:root {
  /* colors */
  --main-light: #fff;
  --main-background: #f9fafb;
  --text-color: rgba(0, 17, 34, 0.95);
  --text-grey: rgba(0, 17, 34, 0.66);
  --text-light-grey: #57626d;
  --main-blue: #005bff;
  --main-grey: #f0f3f6;
  --border-dark: rgba(97, 131, 162, 0.16);
  --border-light: rgba(153, 175, 199, 0.25);
  --warning-bg: #fff4e4;
  --success-bg: #e8f4ec;
  --hover-bg: #f8f4f4;
  --radio-border: rgba(97, 131, 162, 0.26);
  --header-border: #e6ebf0;

  --text-disabled: #abb1b6;
  --input-disabled: #868e96;

  /* gaps */
  --main-mb: 53px;
  --main-mr: 20px;
  --main-p: 24px;
  --main-vertical: 12px;
  --main-horizontal: 16px;

  --header-mb: 16px;
  --header-mr: 31px;

  --input-mr: 21px;
  --input-mb: 19px;

  --sub-input-mr: 11px;
  --sub-input-mb: 8px;
  --title-mb: 5px;

  /* font sizes */
  --main-fz: 15px;

  /* border-radius */
  --border-radius-b: 16px;
}

/* fonts */
@font-face {
  font-family: "Inter";
  src: url("@/assets/fonts/Inter-Regular.woff2") format("woff2"),
    url("@/assets/fonts/Inter-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("@/assets/fonts/Inter-SemiBold.woff2") format("woff2"),
    url("@/assets/fonts/Inter-SemiBold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

/* general */
html {
  box-sizing: border-box;
  background-color: var(--main-background);
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

*:focus {
  outline: 2px solid var(--main-blue);
  transition: outline 0.2s ease;
}

body {
  margin: 0;
  padding: 0;
  min-width: 320px;
  font-family: "Inter", "Arial", sans-serif;
  color: var(--text-color);
  font-style: normal;
  font-weight: 400;
  font-size: var(--main-fz);
  line-height: 24px;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

.visually-hidden {
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;
}
</style>
