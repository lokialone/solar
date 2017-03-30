import './libs/requestAnimationFrame'
import './libs/stats'
import * as THREE from './libs/three'
import OrbitControl from './libs/OrbitControl.js'
import scene from './component/scene'

OrbitControl(THREE)
let renderer, camera, container, stats, mesh, direction
let init = () => {
    // 初始化灯光和场景
    container = document.getElementById('container')
    renderer = new THREE.WebGLRenderer({
        antialias: true
    })
    renderer.setSize(container.offsetWidth, container.offsetHeight)
    container.appendChild(renderer.domElement)

    // camera
    camera = new THREE.PerspectiveCamera(45,
        container.offsetWidth / container.offsetHeight, 1, 10000)
    camera.position.set(0, 0, 200)
    let light = new THREE.DirectionalLight(0xffffff, 1.5)
    light.position.set(0, 0, 10)

    scene.fog = new THREE.Fog( 0xffffff, 1, 10000 );
    scene.add(light)

    let geometry = new THREE.BoxBufferGeometry( 50, 50, 50 )
    let material = new THREE.MeshNormalMaterial()

    mesh = new THREE.Mesh(geometry, material)
    mesh.speed = 0.05
    mesh.rotation.x = Math.PI / 5
    mesh.rotation.y = Math.PI / 5
    mesh.rotation.z = 0
    scene.add(mesh)
    direction = new THREE.Vector3(0,0,-1)
}
let load = () => {


}
let run = () => {
    // let z = mesh.position.z
    // mesh.position.set(0, 0, z - mesh.speed)
    camera.lookAt(scene.position);
    renderer.render(scene, camera)
    requestAnimationFrame(run)
}

let initInput = () => {
		    window.addEventListener( 'keydown', function( event ) {
			    switch ( event.keyCode ) {
				    // <-
				    case 37:

              console.log('<--')
              mesh.rotation.y += Math.PI/2
              break;
				    break
				    // up
				    case 38:
              console.log('up')
					    mesh.rotation.x += Math.PI/2
              break;
            //->
            case 39:
              console.log('-->')
              mesh.rotation.y += -Math.PI/2

              break;
            //down
            case 40:
              console.log('down')
              mesh.rotation.x += -Math.PI/2
				    break;
			    }
          console.log(mesh.rotation);
          renderer.render(scene, camera)
		    }, false );
		    window.addEventListener( 'keyup', function( event ) {
          console.log('keyup');
		    }, false );
		}

let rotation = function(currentDirection, controlDirection) {

}

init()
load()
initInput()
run()

//轨迹
// let Orbit = () => {
//   let N_SEGMENTS = 120
//   let distance = 1
//   let twoPI = 2 * Math.PI
// 	// Create points along the circumference of a circle with radius == distance
//   let geometry = new THREE.Geometry()
//
//    for (let i = 0; i < N_SEGMENTS; i++) {
//      let x = distance * Math.cos( i / N_SEGMENTS * twoPI)
//      let y = distance * Math.sin( i / N_SEGMENTS * twoPI)
//      geometry.vertices.push(new THREE.Vector3(x, y, 0))
//    }
//
// 	let material = new THREE.LineBasicMaterial( { color: 0xffffff, opacity: .5, linewidth: 2 } )
// 	// Create the line
// 	let Orbit = new THREE.Line( geometry, material )
//   scene.add(Orbit)
// }
