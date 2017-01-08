import Earth from './component/earth.js'

let earth = new Earth()
earth_renderer = earth.getRenderer()
let container = document.getElementById('container')
renderer = new THREE.WebGLRenderer( {antialias: true})
renderer.setSize(container.offsetWidth, container.offsetHeight)
container.appendChild( earth_renderer.domElement)
