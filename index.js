// import './demo.js'
// import Earth from './component/earth.js'
// let container = document.getElementById('container')
// let earth = new Earth(container)
// earth.init()
// import Earth from './component/earth_new'
import './libs/requestAnimationFrame'
import './libs/stats'
import * as THREE from './libs/three.js'
// import THREE from 'three.js'
// let THREE = require('three')
import scene from './component/scene'
import Earth from './component/earth_new.js'
import Moon from './component/Moon.js'
let renderer, camera, container, stats
let earth = new Earth()
let moon = new Moon()
let earth_moon_group = ''
let cubeA = ''
let init = () => {
    // 初始化灯光和场景
    container = document.getElementById('container')
    renderer = new THREE.WebGLRenderer({
        antialias: true
    })
    renderer.setSize(container.offsetWidth, container.offsetHeight)
    container.appendChild(renderer.domElement)

    // scene =
    camera = new THREE.PerspectiveCamera(45,
        container.offsetWidth / container.offsetHeight, 1, 1000)
    camera.position.set(0, 0, 3)
    let light = new THREE.DirectionalLight(0xffffff, 1.5)
    light.position.set(0, 0, 1)
    scene.add(light)
    earth_moon_group = new THREE.Group()
    earth_moon_group.add(light)
    var geometry = new THREE.BoxBufferGeometry( 0.5, 0.5, 0.5 );
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );

    cubeA = new THREE.Mesh( geometry, material )
    cubeA.position.set( 0, 0, 0 )

    var cubeB = new THREE.Mesh( geometry, material )
    cubeA.position.set( -0.8, -0.8, 0 )
    earth_moon_group.add(cubeA)
    earth_moon_group.add(cubeB)
    scene.add(earth_moon_group)
    cubeA.quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );

}
let load = () => {
    // earth.init()
    // moon.init()
    // setTimeout(() => {
    //   earth_moon_group.add(earth.getObject())
    //   earth_moon_group.add(moon.getObject())
    //   scene.add(earth_moon_group)
    // }, 2000)
}
let run = () => {
    // earth.update()
    // moon.update()
    // if(earth.checkReady() && moon.checkReady()){
    //   earth_moon_group.rotation.y += 0.05
    //   // console.log(earth_moon_group.rotation.y);
    // }

    earth_moon_group.rotation.y += 0.005
    cubeA.rotation.y += 0.01
    renderer.render(scene, camera)
    requestAnimationFrame(run)
}

let moon_revolve = () => {
    earth_moon_group.rotation.y+=0.01
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
