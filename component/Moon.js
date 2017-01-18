import * as THREE from '../'

class Moon {
  constructor() {
    this.animating = false
  }
  init() {
      let earthImage = 'assets/images/earth_surface_2048.jpg'
      let textureLoader = new THREE.TextureLoader()
      let material = ''
      this.sphere = ''
      textureLoader.load(earthImage, (texture) => {
          material = new THREE.MeshBasicMaterial({ map: texture})
          let geometry = new THREE.SphereGeometry(0.3, 32, 32)
          this.sphere = new THREE.Mesh(geometry, material)
          this.sphere.rotation.x = Math.PI / 5
          this.sphere.rotation.y = Math.PI / 5
          this.animating = true
          scene.add(this.sphere)
      })

  }
  update() {
    if(this.animating) {
      this.sphere.rotation.y += 0.01
    }
  }

}




export default Moon
