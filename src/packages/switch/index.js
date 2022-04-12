import metaSwitch from './switch.vue'

metaSwitch.install= function(Vue){
    Vue.component(metaSwitch.name, metaSwitch);
}

export default metaSwitch;