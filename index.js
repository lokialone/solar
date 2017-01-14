// import './demo.js'
// import Earth from './component/earth.js'
// let container = document.getElementById('container')
// let earth = new Earth(container)
// earth.init()
import Earth from './component/earth_new'
import './libs/requestAnimationFrame'
import './libs/stats'
let THREE = require('three')

let renderer, camera, scene, container, stats

let init = () => {
  // 初始化灯光和场景
  container = document.getElementById('container')
  renderer = new THREE.WebGLRenderer( {antialias: true})
  renderer.setSize(container.offsetWidth, container.offsetHeight)
  container.appendChild(renderer.domElement)

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera( 45,
                                        container.offsetWidth / container.offsetHeight, 1, 1000)
  camera.position.set(0, 0, 3)

  let light = new THREE.DirectionalLight( 0xffffff, 1.5)
  light.position.set(0, 0, 1)
  scene.add(light)
}
let load = () => {
}
let run = () => {
  renderer.render( scene, camera)
  // requestAnimationFrame(run)
}

let loadCircle = ()=> {
  let N_SEGMENTS = 120
  let distance = 1
  let twoPI = 2 * Math.PI
	// Create points along the circumference of a circle with radius == distance
  let geometry = new THREE.Geometry()

   for (let i = 0; i < N_SEGMENTS; i++) {
     let x = distance * Math.cos( i / N_SEGMENTS * twoPI)
     let y = distance * Math.sin( i / N_SEGMENTS * twoPI)
     geometry.vertices.push(new THREE.Vector3(x, y, 0))
   }

	let material = new THREE.LineBasicMaterial( { color: 0xffffff, opacity: .5, linewidth: 2 } )
	// Create the line
	let Orbit = new THREE.Line( geometry, material )
  scene.add(Orbit)
}
init()
loadCircle()
run()
