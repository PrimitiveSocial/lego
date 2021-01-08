import Tab from "@/components/Tab";
import Tabs from "@/components/Tabs";
import Icon from "@/components/Icon";
import Toggle from "@/components/Toggle";
import Dropdown from "@/components/Dropdown";
import TextInput from "@/components/TextInput";
import RadioInput from "@/components/RadioInput";
import CheckboxInput from "@/components/CheckboxInput";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

const VueLego = {
    install(Vue) {
        Vue.component("tab", Tab);
        Vue.component("icon", Icon);
        Vue.component("tabs", Tabs);
        Vue.component("toggle", Toggle);
        Vue.component("dropdown", Dropdown);
        Vue.component("text-input", TextInput);
        Vue.component("radio-input", RadioInput);
        Vue.component("checkbox-input", CheckboxInput);
        Vue.component("primary-button", PrimaryButton);
        Vue.component("secondary-button", SecondaryButton);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueLego);
}

export default VueLego;