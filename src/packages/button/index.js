import metaButton from './button.vue'

metaButton.install = function (Vue) {
    Vue.component(metaButton.name, metaButton);
};

export default metaButton;