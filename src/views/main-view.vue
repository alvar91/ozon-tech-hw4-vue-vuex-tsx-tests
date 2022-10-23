<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";

import { useStore } from "vuex-simple";
import { MainModule } from '@/store/modules/main/main';
import { FETCH_USERS_ACTION } from '@/store/mutationsVariables';

import Header from "@/components/header.vue";
import MainContainer from "@/components/main-container.vue";
import Aside from "@/components/aside.vue";
import Card from "@/components/card.vue";

@Component({
  name: "MainView",
})
export default class MainView extends Vue {
  private store: MainModule = useStore(this.$store);

  created(): void {
    this.store[FETCH_USERS_ACTION]();
  }

  render(): VNode {
    if (this.store.users.length === 0) {
      return (
        <div>
          <Header />
          <MainContainer>
            <div>Загрузка данных, подождите...</div>
          </MainContainer>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <MainContainer>
          <Aside/>
          <Card />
        </MainContainer>
      </div>
    );
  }
}
</script>
