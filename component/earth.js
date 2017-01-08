let THREE = require('three');

class Earth {
  // THREE.SphereGeometry
  constructor(container){
      this.offsetWidth = container.offsetWidth
      this.offsetHeight = container.offsetHeight
  }

  init() {
    this.renderer = new THREE.WebGLRenderer( {antialias: true})
    this.renderer.setSize(this.offsetWidth, this.offsetHeight)
    this.scene =  new THREE.Scene()
    this.camera =  new THREE.PerspectiveCamera( 45,
                                            this.offsetWidth / this.offsetHeight, 1, 4000)
    this.camera.position.set(0, 0, 3)
    let light = new THREE.DirectionalLight( 0xffffff, 1.5)
    light.position.set(0, 0, 1)
    this.scene.add(light)

    let mapUrl = "https://avatars1.githubusercontent.com/u/5095713"
    let map =  new THREE.ImageUtils.loadTexture(mapUrl)

    let material =  new THREE.MeshLambertMaterial({ color: 0xffff00 })
    let geometry = new THREE.SphereGeometry(1, 20, 16)
    //
    // this.sphere = new THREE.Mesh(geometry, material)
    // this.sphere.rotation.x = Math.PI / 5
    // this.sphere.rotation.y = Math.PI / 5
    // let geometry = new THREE.CubeGeometry(1, 1, 1)
    let cube = new THREE.Mesh(geometry, material)
    cube.rotation.x = Math.PI / 5
    cube.rotation.y = Math.PI / 5
    this.scene.add(cube)

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
    this.renderer.render( this.scene, this.camera)
    return this.renderer
  }


}

export default Earth
