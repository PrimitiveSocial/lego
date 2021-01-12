<template>
    <div :class="classLists.container">
        <div class="flex items-center" :class="classLists.wrapper" v-for="(option,index) in options" :key="index">
            <label class="flex items-center cursor-pointer">
                <input type="radio" class="hidden" :value="option.value" v-model="selected" v-bind="$attrs" />

                <span class="inline-block flex-no-shrink" :class="classLists.radio">
                    <span :class="getRadioClasses(option)"></span>
                </span>
                <span class="select-none">{{ option.label }}</span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        value: {
            required: true,
        },
        options: {
            type: Array,
            required: true,
        }
    },
    data: () => {
        return {
            selected: null,
            classLists: {},
        }
    },
    methods: {
        getRadioClasses(option) {
            let radioBgColor = (option.value === this.selected) ? this.classLists.innerRadioSelected : '';
            return this.classLists.innerRadio + ' ' + radioBgColor;
        }
    },
    watch: {
        selected: {
            handler: function() {
                this.$emit('input', this.selected);
            },
            immediate: true
        }
    },
    created() {
        let config = ( window.Lego && typeof (window.Lego) === 'object' ) ? window.Lego : require('./../config/lego.config');
        this.classLists = config.radioInput;
        
        this.selected = this.value;
    }
}
</script>