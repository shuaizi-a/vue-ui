const install = (Vue) => {
    const requireComponent = require.context('.', true, /\.vue/)
    requireComponent.keys().forEach(element => {
        const config = requireComponent(element)
        // console.log(config)
        Vue.component(config.default.name, config.default)
    });
}

export default {
    install
}