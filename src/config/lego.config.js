module.exports = {
    textinput: 'px-2 py-2 border rounded outline-none bg-white placeholder-gray-400',
    primaryButton: 'border border-blue-400 bg-blue-200 text-blue-400 px-4 py-2 rounded cursor-pointer hover:bg-blue-400 hover:text-white focus:outline-none',
    secondaryButton: 'border border-gray-400 bg-transparent text-gray-400 px-4 py-2 rounded cursor-pointer hover:bg-gray-400 hover:text-white focus:outline-none',
    dropdown: {
        wrapper: 'border p-2 cursor-pointer bg-white rounded',
        placeholder: 'text-gray-400',
        popover: 'border p-2 bg-white max-h-48 overflow-scroll rounded',
        popoverItem: 'py-1 px-2 cursor-pointer bg-white hover:bg-blue-100 hover:text-blue-400',
        searchInput: 'border p-2',
        noSearchResultsText: 'text-xs text-gray-500 text-center block'
    },
    checkboxInput: {
        wrapper: 'bg-white border rounded w-5 h-5 mr-2',
        tick: 'w-4 h-4 text-blue-400'
    },
    radioInput: {
        container: 'flex justify-start',
        wrapper: 'mr-4 mb-4',
        radio: 'w-5 h-5 mr-2 p-1 rounded-full border border-grey',
        innerRadio: 'w-full h-full block rounded-full',
        innerRadioSelected: 'bg-blue-400'
    },
    tabs: {
        wrapper: 'border-b border-blue-300 my-4',
        tab: 'text-blue-400 bg-blue-100 capitalize px-6 py-2 mr-2 cursor-pointer rounded-t hover:text-blue-600',
        activeTab: 'text-blue-600 bg-blue-300'
    },
    toggle: {
        wrapperOff: 'h-5 w-9 rounded-full cursor-pointer bg-gray-100',
        wrapperOn: 'bg-green-100',
        circleOff: 'h-5 w-5 rounded-full shadow bg-gray-400 translate-x-0',
        circleOn: 'bg-green-400 translate-x-4'
    }

}