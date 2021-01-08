<template>
    <div class="relative" v-click-outside="closeDropdown">
        <div class="dropdown-wrapper w-full flex justify-between items-center" :class="classLists.wrapper" @click="openDropdown">
            <!-- label preview -->
            <div class="w-5/6">
                <span v-if="label" v-html="label"></span>
                <span v-else :class="classLists.placeholder" v-html="placeholder"></span>
            </div>
            <!-- dropdown icons -->
            <div class="w-1/6 mr-1 flex items-center justify-end">
                <icon name="chevron-down" class="h-5 w-5" />
            </div>
        </div>

        <!-- dropdown popover -->
        <ul
            class="dropdown-popover w-full absolute z-50"
            :class="classLists.popover"
            v-if="showDropdown"
        >
            <!-- search dropdown -->
            <li v-if="searchable" class="pb-2">
                <input
                    type="text"
                    placeholder="Search items..."
                    class="w-full outline-none cursor-default"
                    v-model="search"
                    :class="classLists.searchInput"
                />
            </li>
            <!-- dropdown options -->
            <li
                v-for="(option) in filteredOptions"
                :key="option.value"
                class="flex justify-between items-center select-none"
                :class="classLists.popoverItem"
                @click="select(option)"
            >
                <span>
                    <slot name="option" v-bind:option="option">
                        <!-- Fallback dropdown content -->
                        {{ option.label }}
                    </slot>
                </span>
                <icon name="check" class="h-4 w-4" v-if="isSelected(option)"></icon>
            </li>
            <li v-if="!filteredOptions.length">
                <span :class="classLists.noSearchResultsText">
                    No results found matching your search criteria.
                </span>
            </li>
        </ul>

    </div>
</template>

<script>
import Icon from "@/components/Icon";
import ClickOutside from 'vue-click-outside';
import { DROPDOWN_EMPTY_OPTIONS_PROP, DROPDOWN_REQUIRED_VMODEL_AND_OR_OPTIONS_PROP} from "@/config/debugger";

export default {
    components: {
        Icon
    },
    props: {
        value: {
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        placeholder: {
            type: String,
            required: false,
            default: ''
        },
        multiple: {
            type: Boolean,
            required: false,
            default: false
        },
        labelPreviewCount: {
            type: Number,
            required: false,
            default: 2
        },
        searchable: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    directives: {
        ClickOutside
    },
    data() {
        return {
            showDropdown: false,
            selectedOptions: [],
            classLists: {},
            search: null
        }
    },
    computed: {
        label() {
            if(typeof this.value === 'undefined' || typeof this.options === 'undefined')
                return DROPDOWN_REQUIRED_VMODEL_AND_OR_OPTIONS_PROP;

            if( Array.isArray(this.options) && this.options.length === 0) {
                return DROPDOWN_EMPTY_OPTIONS_PROP;
            }

            if(!this.selectedOptions.length)
                return null;

            let label = null;
            let values = [];
            this.selectedOptions.forEach( option => values.push(option.label) );

            if(this.multiple && this.selectedOptions.length > this.labelPreviewCount) {
                let remaining = this.selectedOptions.length - this.labelPreviewCount;
                label = values[0] + ', ' + values[1] + ' and ' + remaining + ' more';
            }
            else if(this.multiple && this.selectedOptions.length <= this.labelPreviewCount ) {
                label = values.join(', ');
            }
            else
                label = values[0];

            return label;
        },
        selectedOptionsKeys() {
            if(!this.selectedOptions)
                return null;

            let keys = [];
            this.selectedOptions.forEach( option => {
                keys.push(option.key);
            })

            return (this.multiple) ? keys : keys[0];
        },
        filteredOptions() {
            if (!this.search) {
                return this.options;
            } else {
                return this.options.filter(option => {
                    return option.value
                        .toLowerCase()
                        .includes(this.search.toLowerCase());
                });
            }
        }
    },
    methods: {
        openDropdown() {
            this.showDropdown = true;
        },
        closeDropdown() {
            this.showDropdown = false;
        },
        isSelected(option) {
            return this.selectedOptions.includes(option);
        },
        addSelectedOption(option) {
            this.selectedOptions.push(option);
        },
        removeSelectedOption(option) {
            this.selectedOptions = this.selectedOptions.filter(function(item) {
                return item.value !== option.value;
            });
        },
        select(option) {
            if(this.multiple)
                this.isSelected(option) ? this.removeSelectedOption(option) : this.addSelectedOption(option);
            else
                this.selectedOptions = this.isSelected(option) ? [] : [ option ];

            this.$emit('input', this.selectedOptionsKeys);
            this.$emit('change', option);

            if(!this.multiple)
                this.closeDropdown();
        }
    },
    created() {
        let config = ( window.Lego && typeof (window.Lego) === 'object' ) ? window.Lego : require('./../config/lego.config');
        this.classLists = config.dropdown;

        let selectedValues;

        // load selected values if passed via v-model
        if(!this.value)
            selectedValues = [];
        else if(Array.isArray(this.value))
            selectedValues = this.value
        else
            selectedValues = [ this.value ];

        selectedValues.forEach( item => {
            this.selectedOptions.push(
                this.options.find(function(option) {
                    return item === option.key;
                })
            );
        })
    }
}
</script>