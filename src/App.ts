import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/header/header.vue";
import Main from "@/components/main/main.vue";
import Footer from "@/components/footer/footer.vue";

@Component({
  components: {
    Header,
    Footer,
    Main
  }
})
export default class App extends Vue {}
