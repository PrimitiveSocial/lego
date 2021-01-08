<template>
    <label class="flex justify-start items-center">
        <div class="flex flex-shrink-0 justify-center items-center" :class="classLists.wrapper">
            <input type="checkbox" class="opacity-0 absolute" v-model="isChecked" v-bind="$attrs">
            <icon name="check" class="inline-block pointer-events-none" :class="tickClasses"></icon>
        </div>
        <div class="select-none" v-if="label" v-html="label"></div>
    </label>
</template>

<script>
import Icon from "@/components/Icon";

export default {
    components: { Icon },
    inheritAttrs: false,
    props: {
        value: {
            type: Boolean,
            required: true,
        },
        label: {
            type: String,
            required: false,
            default: ''
        }
    },
    data: () => {
        return {
            classLists: {},
            isChecked: false,
        }
    },
    computed: {
        tickClasses() {
            let classes = this.classLists.tick;
            classes += this.isChecked ? ' block': ' hidden';
            return classes;
        }
    },
    watch: {
        isChecked: {
            handler: function() {
                this.$emit('input', this.isChecked);
            },
            immediate: true
        }
    },
    created() {
        let config = ( window.Lego && typeof (window.Lego) === 'object' ) ? window.Lego : require('./../config/lego.config');
        this.classLists = config.checkboxInput;
        this.isChecked = this.value;
    }
}
</script>