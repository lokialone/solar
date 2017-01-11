let THREE = require('three')

class Earth {
  // THREE.SphereGeometry
  constructor(container){
      this.container = container
      this.offsetWidth = container.offsetWidth
      this.offsetHeight = container.offsetHeight

  }

  init() {
    this.renderer = new THREE.WebGLRenderer( {antialias: true})
    this.renderer.setSize(this.offsetWidth, this.offsetHeight)
    this.container.appendChild(this.renderer.domElement)
    this.scene =  new THREE.Scene()
    this.animating = true
    this.camera =  new THREE.PerspectiveCamera( 45,
                                            this.offsetWidth / this.offsetHeight, 1, 4000)
    this.camera.position.set(0, 0, 3)
    let light = new THREE.DirectionalLight( 0xFFFFFF, 1.5)
    light.position.set(0, 0, 1)
    this.scene.add(light)

    let earthImage = '../assets/images/earth_surface_2048.jpg'
    let textureLoader = new THREE.TextureLoader()
    this.material = ''
    textureLoader.load(earthImage, (texture) => {
        this.material = new THREE.MeshBasicMaterial({ map: texture})
        let geometry = new THREE.SphereGeometry(1, 32, 32)
        this.sphere = new THREE.Mesh(geometry, this.material)
        this.sphere.rotation.x = Math.PI / 5
        this.sphere.rotation.y = Math.PI / 5
        this.scene.add(this.sphere)
        this.run()
    })
    
  }

  run() {
    this.renderer.render(this.scene, this.camera)
    if (this.animating) {
      this.sphere.rotation.y += 0.01
    }
    requestAnimationFrame(() => {
      this.run()
    })
  }

  render() {
    this.renderer.render(this.scene, this.camera)
   
  }
  
}

export default Earth
