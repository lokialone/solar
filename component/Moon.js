import * as THREE from '../libs/three.js'
import scene from './scene.js'
class Moon{
    constructor() {
        this.animating = false
        this.count = 0
    }
    init() {
        let earthImage = 'assets/images/moon_1024.jpg'
        let textureLoader = new THREE.TextureLoader()
        let material = ''
        this.sphere = ''
        textureLoader.load(earthImage, (texture) => {
            material = new THREE.MeshBasicMaterial({
                map: texture
            })
            let geometry = new THREE.SphereGeometry(0.1, 32, 32)
            this.sphere = new THREE.Mesh(geometry, material)
            this.sphere.rotation.y = Math.PI
            this.sphere.position.set(0.9, 0, 0)
            this.animating = true
            scene.add(this.sphere)
        })

    }
    update() {
        if (this.animating) {
            this.sphere.rotation.y += 0.01
        }
    }
    getObject() {
      return this.sphere
    }

    checkReady() {
      return this.animating
    }
}

export default Moon
