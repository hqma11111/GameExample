export default class Main {
    constructor() {
        this.scene = this.initScene();
        this.renderer = this.ininRenderer();
        this.camera = this.initCamera();
        this.createLight();

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshPhongMaterial({ 
            color: 0x0000ff 
        });
        this.cube = new THREE.Mesh(geometry, material);
        this.cube.position.set(0, 0, 0);
        this.scene.add(this.cube);
    }

    update() {
        this.cube.rotation.x += 0.1;
        this.renderer.render(this.scene,this.camera);
    }

    initScene() {
        return new THREE.Scene();
    }

    ininRenderer() {
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x333333, 1.0);
        renderer.shadowMap.enable = true;
        document.body.appendChild(renderer.domElement);
        return renderer;
    }

    initCamera() {
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(10, 10, 10);
        camera.lookAt(this.scene.position);
        return camera;
    }

    createLight() {
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(10, 10, -10);
        this.scene.add(pointLight);
    }
}