<template>
    <div>
        <nav class="relative w-full" :class="classLists.wrapper">
            <div class="flex flex-start">
                <span
                    class="select-none"
                    v-for="(tab,index) in tabs"
                    :key="index"
                    :class="getTabClasses(tab)"
                    @click="activeTab = tab"
                >
                    {{ tab.title }}
                </span>
            </div>
        </nav>
        <div>
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            tabs: [],
            activeTab: null,
            classLists: {}
        }
    },
    watch: {
        activeTab: function() {
            this.tabs.map( (tab) => {
                tab.isActive = tab === this.activeTab;
            });
        }
    },
    methods: {
        setDefaultActiveTab: function() {
            this.activeTab = this.tabs.find( tab => tab.active) || this.tabs[0];
        },
        setTabsIndexes: function() {
            this.tabs.map( (tab, index) => {
                tab.index = index;
            });
        },
        getTabClasses(tab) {
            let tabClasses = this.classLists.tab;
            let activeTabClasses = (tab === this.activeTab) ? this.classLists.activeTab : '';
            return tabClasses + ' ' + activeTabClasses;
        }
    },
    created() {
        let config = ( window.Lego && typeof (window.Lego) === 'object' ) ? window.Lego : require('./../../scripts/lego.config');
        this.classLists = config.tabs;

        this.tabs = this.$children;
    },
    mounted() {

        this.setDefaultActiveTab();
        this.setTabsIndexes();
    }
}
</script>