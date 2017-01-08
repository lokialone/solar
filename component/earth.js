let THREE = require('three');

class Earth {
  // THREE.SphereGeometry
  constructor(){

  }

  init() {
    this.renderer = null
    this.animating = null
    this.scene =  new THREE.Scene()
    this.camara =  new THREE.PerspectiveCamera( 45,
                                            container.offsetWidth / container.offsetHeight, 1, 4000)
    this.camera.position.set(0, 0, 3)
    let light = new THREE.DirectionalLight( 0xffffff, 1.5)
    light.position.set(0, 0, 1)
    this.scene.add(light)

    let mapUrl ="https://avatars1.githubusercontent.com/u/5095713"
    let map =  new THREE.ImageUtils.loadTexture(mapUrl)

    let material =  new THREE.MeshPhongMaterial({ map: map})
    let geometry = new THREE.SphereGeometry(50, 16, 16)

    this.sphere = new THREE.Mesh(geometry, material)
    this.sphere.rotation.x = Math.PI / 5
    this.sphere.rotation.y = Math.PI / 5
    this.scene.add(sphere)
  }

  run() {
    this.renderer.render( this.scene, this.camera)
    if (this.animating) {
      this.sphere.rotation.y -= 0.01
    }
    requestAnimationFrame(this.run)
  }

  getRenderer() {
    this.init()
    this.renderer.render(this.scene, this.camera)
    return this.renderer
  }


}

export default Earth
