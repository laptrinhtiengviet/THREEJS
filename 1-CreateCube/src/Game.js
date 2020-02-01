class Game {
    constructor() {
        this.createRender()
        this.createCamara()
        this.createScene()
        this.createLight()
        this.createCube()
        new THREE.OrbitControls(this.camera,this.renderer.domElement)
    }

    createRender = () => {
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.renderer.domElement)
    }

    createCamara = () => {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
        this.camera.position.z = 5
    }

    createScene = () => {
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color(0xffffff)
    }

    createLight = () => {
        var ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
        this.scene.add(ambientLight)

        var pointLight = new THREE.PointLight(0xffffff, 1)
        pointLight.position.z = 5
        pointLight.position.y = 10
        this.scene.add(pointLight)
    }

    createCube = () => {
        var geometry = new THREE.CubeGeometry(1, 1, 1)
        var material = new THREE.MeshLambertMaterial({ color: "gray" })
        this.mesh = new THREE.Mesh(geometry, material)
        this.scene.add(this.mesh)
    }

    gameUpdate() {
        this.mesh.rotation.x += 0.01
        this.mesh.rotation.y += 0.01
        this.renderer.render(this.scene, this.camera)
    }
}

export default Game