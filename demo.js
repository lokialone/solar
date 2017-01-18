let THREE = require('three');

let renderer = null,
    scene = null,
    camera = null,
    cube = null,
    animating = null

let onLoad = () => {
    //get canvas container
    let container = document.getElementById('container')
    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(container.offsetWidth, container.offsetHeight)
    container.appendChild(renderer.domElement)

    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 4000)
    camera.position.set(0, 0, 3)

    let light = new THREE.DirectionalLight(0xffffff, 1.5)
    light.position.set(0, 0, 1)
    scene.add(light)

    let mapUrl = "https://avatars1.githubusercontent.com/u/5095713"
    let map = new THREE.ImageUtils.loadTexture(mapUrl)

    let material = new THREE.MeshPhongMaterial({map: map})
    let geometry = new THREE.CubeGeometry(1, 1, 1)
    cube = new THREE.Mesh(geometry, material)

    cube.rotation.x = Math.PI / 5
    cube.rotation.y = Math.PI / 5
    scene.add(cube)
    addMouseHandler()
    run()

}

let run = () => {
    renderer.render(scene, camera)
    if (animating) {
        cube.rotation.y -= 0.01
    }
    requestAnimationFrame(run)
}

let addMouseHandler = () => {
    let dom = renderer.domElement
    dom.addEventListener('mouseup', onMouseUp, false)
}

let onMouseUp = (event) => {
    event.preventDefault()
    animating = !animating
}

onLoad()
 
