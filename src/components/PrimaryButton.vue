<template>
    <button
        v-on="$listeners"
        v-bind="$attrs"
        :class="classList"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    inheritAttrs: false,
    data: () => ({
        classList: ''
    }),
    created() {
        let config = (window.Lego && typeof (window.Lego) === 'object') ? window.Lego : require('./../../scripts/lego.config');
        this.classList = config.primaryButton;
    }
}
</script>