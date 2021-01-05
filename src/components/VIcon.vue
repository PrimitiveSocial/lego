<template>
    <span
        v-on="$listeners"
        v-bind="$attrs"
        :alt="name"
        :title="name"
        v-html="icon"
    >
    </span>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: false,
            default: 'outline',
            validator: function (value) {
                let types =  ['outline', 'solid'];
                return types.includes(value);
            }
        }
    },
    data: () => {
        return {
            icon: ''
        }
    },
    created() {
        import('!html-loader!../svg/' + this.type + '/' + this.name + '.svg')
            .then( (h) => {
                this.icon = h.default;
            })
            .catch( () => {
                this.icon = "";
                window.console.error('Could not find icon ' + this.type + '/' + this.name + '.svg');
            });
    },
}
</script>