import Vue from 'vue'

// generate function that dynamically mounts components
const generateMountFunction = component => (el, config) => {
  return new Vue({
    el,
    render: h => h(component, config)
  })
}

// expose global microservices api
const exposeGlobal = config => {
  if (!window) return
  if (!window.microservices) window.microservices = {}
  if (!window.microservices['meetup']) window.microservices['meetup'] = config
}

export {
  generateMountFunction,
  exposeGlobal
}
