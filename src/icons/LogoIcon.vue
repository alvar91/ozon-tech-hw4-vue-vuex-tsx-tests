<script lang="tsx">
import { Vue, Component } from "vue-property-decorator";

const src = require("@/assets/images/logo.svg");

@Component
export default class LogoIcon extends Vue {
  render() {
    return <img src={src} alt="Логотип сайта" />;
  }
}
</script>
