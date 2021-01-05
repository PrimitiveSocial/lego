import VIcon from './components/VIcon';

const VueLego = {
    install(Vue, options) {
        Vue.component("v-icon", VIcon);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueLego);
}

export default VueLego;