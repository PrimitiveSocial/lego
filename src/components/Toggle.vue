<template>
    <span
        role="checkbox"
        tabindex="0"
        class="relative inline-block flex-shrink-0 transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
        :class="wrapperClasses"
        @click="toggle"
    >
        <span
            class="inline-block transform transition ease-in-out duration-200"
            :class="circleClasses"
        >
        </span>
    </span>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            required: true,
        },
    },
    data: () => ({
        isOn: false,
        classLists: {}
    }),
    computed: {
        wrapperClasses() {
            let classes = this.classLists.wrapperOff;
            classes += this.isOn ? ' ' + this.classLists.wrapperOn: ' ';
            return classes;
        },
        circleClasses() {
            let classes = this.classLists.circleOff;
            classes += this.isOn ? ' ' + this.classLists.circleOn: ' ';
            return classes;
        }
    },
    methods: {
        toggle() {
            this.isOn = !this.isOn;
            this.$emit('input', this.isOn);
        }
    },
    created() {
        let config = ( window.Lego && typeof (window.Lego) === 'object' ) ? window.Lego : require('./../config/lego.config');
        this.classLists = config.toggle;
        this.isOn = this.value;
    }
}
</script>