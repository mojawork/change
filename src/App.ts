import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header/header.vue";
import Main from "@/components/main/main.vue";
import Footer from "@/components/footer/footer.vue";
import {dataService} from "@/services/service";



@Component({
  components: {
    Header,
    Footer,
    Main
  }
})
export default class App extends Vue {

  private service = new dataService();

  //  --- Lifecycle hooks ---

  private mounted () {

  }

}
