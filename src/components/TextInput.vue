<template>
    <input
        :type="type"
        :class="classList"
        :value="value"
        v-on="$listeners"
        v-bind="$attrs"
        @input="$emit('update', $event.target.value)"
    />
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        value: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: false,
            default: 'text',
        }
    },
    model: {
        prop: "value",
        event: "update"
    },
    data: () => {
        return {
            classList: '',
        }
    },
    created() {
        let config = ( window.Lego && typeof (window.Lego) === 'object' ) ? window.Lego : require('./../config/lego.config');

        let { textinput } = config;
        this.classList = textinput;
    }
}
</script>