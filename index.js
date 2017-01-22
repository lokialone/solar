import './libs/requestAnimationFrame'
import './libs/stats'
import * as THREE from './libs/three'
import OrbitControl from './libs/OrbitControl.js'
import scene from './component/scene'
import Earth from './component/earth_new.js'
import Moon from './component/Moon.js'
OrbitControl(THREE)
let renderer, camera, container, stats, radius = 5, theta = 0
let earth = new Earth()
let moon = new Moon()
let earth_moon_group = new THREE.Group()
let cubeA = ''
let controls = ''
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
    camera.position.set(0, 0, 5)
    let light = new THREE.DirectionalLight(0xffffff, 1.5)
    light.position.set(0, 0, 10)
    scene.add(light)

    // controls
    controls = new THREE.OrbitControls(camera, renderer.domElement)
    // controls.minDistance = 20
    // controls.maxDistance = 50
    controls.maxPolarAngle = Math.PI / 2

    earth_moon_group.add(light)
    scene.add(earth_moon_group)


}
let load = () => {
    earth.init()
    moon.init()
    earth.getObject().then((sphere) => {
        earth_moon_group.add(sphere)
    })
    moon.getObject().then((sphere) => {
        earth_moon_group.add(sphere)
    })
    scene.add(earth_moon_group)

}
let run = () => {
    //camera
    // theta += 0.1;
    // camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
    // camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
    // camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
    // camera.lookAt(scene.position);

    if (earth.checkReady() && moon.checkReady()) {
        earth.update()
        moon.update()
        earth_moon_group.rotation.y += 0.005
    }
    renderer.render(scene, camera)
    requestAnimationFrame(run)
}

init()
load()
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
