import { Component, Vue } from "vue-property-decorator";
import MainChange from "@/components/main/change/change.vue";

@Component({
  components: {
    MainChange
  }
})
export default class Main extends Vue {

  //  --- Lifecycle hooks ---
  private mounted() {}
}