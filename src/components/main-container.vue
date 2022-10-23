<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "MainContainer",
})
export default class MainContainer extends Vue {
  render(): VNode {
    const { $style, $slots } = this;

    return <div class={$style["main-container"]}>{$slots.default}</div>;
  }
}
</script>

<style module>
.main-container {
  display: flex;
  margin: 0 auto;
  width: 1372px;
}

@media (max-width: 1440px) {
  .main-container {
    flex-direction: column;
    width: 996px;
  }
}

@media (max-width: 1040px) {
  .main-container {
    width: 664px;
  }
}

@media (max-width: 730px) {
  .main-container {
    width: 333px;
  }
}
</style>
