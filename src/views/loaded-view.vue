<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";

import Header from "@/components/header.vue";
import MainContainer from "@/components/main-container.vue";

@Component({
  name: "LoadedView",
})
export default class LoadedView extends Vue {
  render(): VNode {
    return (
      <div>
        <Header />
        <MainContainer>
          <div>Загружены кандидатом</div>
        </MainContainer>
      </div>
    );
  }
}
</script>
