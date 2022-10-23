<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";

import Header from "@/components/header.vue";
import MainContainer from "@/components/main-container.vue";

@Component({
  name: "WaitingView",
})
export default class WaitingView extends Vue {
  render(): VNode {
    return (
      <div>
        <Header />
        <MainContainer>
          <div>Ожидают загрузки</div>
        </MainContainer>
      </div>
    );
  }
}
</script>
