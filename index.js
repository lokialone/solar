// import './demo.js'
import Earth from './component/earth.js'
import './libs/requestAnimationFrame'
let THREE = require('three')

let container = document.getElementById('container')
let earth = new Earth(container)

earth.init()
