import Icon from "./components/Icon";
import TextInput from "./components/TextInput";

const VueLego = {
    install(Vue) {
        Vue.component("icon", Icon);
        Vue.component("text-input", TextInput);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueLego);
}

export default VueLego;