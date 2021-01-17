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
    install(Vue, options) {
        Vue.component(options?.tab || "tab", Tab);
        Vue.component(options?.icon || "icon", Icon);
        Vue.component(options?.tabs || "tabs", Tabs);
        Vue.component(options?.toggle || "toggle", Toggle);
        Vue.component(options?.dropdown || "dropdown", Dropdown);
        Vue.component(options?.textInput || "text-input", TextInput);
        Vue.component(options?.radioInput || "radio-input", RadioInput);
        Vue.component(options?.checkboxInput || "checkbox-input", CheckboxInput);
        Vue.component(options?.primaryButton || "primary-button", PrimaryButton);
        Vue.component(options?.secondaryButton || "secondary-button", SecondaryButton);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueLego);
}

export default VueLego;