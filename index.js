// import './demo.js'
import Earth from './component/earth.js'
let THREE = require('three')


let container = document.getElementById('container')
let earth = new Earth(container)
let earth_renderer = earth.getRenderer()
console.log(earth_renderer);
container.appendChild(earth_renderer.domElement)
