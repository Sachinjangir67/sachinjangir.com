class Background3D {
    constructor() {
        this.container = document.getElementById('background-animation');
        this.setup();
        this.createGeometry();
        this.animate();
    }

    setup() {
        this.scene = new THREE.Scene();
        
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 30;

        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            alpha: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        // Add lights
        const ambientLight = new THREE.AmbientLight(0x59B2f4, 0.5);
        this.scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x59B2f4, 1);
        pointLight.position.set(2, 3, 4);
        this.scene.add(pointLight);

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());

        // Add mouse movement effect
        this.mouse = new THREE.Vector2();
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }

    createGeometry() {
        // Create particles
        const particlesCount = 5000;
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 50;
            positions[i + 1] = (Math.random() - 0.5) * 50;
            positions[i + 2] = (Math.random() - 0.5) * 50;

            colors[i] = 0.35;     // R
            colors[i + 1] = 0.7;  // G
            colors[i + 2] = 0.96; // B
        }

        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.1,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        this.points = new THREE.Points(this.geometry, material);
        this.scene.add(this.points);
    }

    onMouseMove(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Rotate points
        this.points.rotation.x += 0.0005;
        this.points.rotation.y += 0.0005;

        // Follow mouse with slight delay
        if (this.mouse) {
            this.points.rotation.x += (this.mouse.y * 0.05 - this.points.rotation.x) * 0.05;
            this.points.rotation.y += (this.mouse.x * 0.05 - this.points.rotation.y) * 0.05;
        }

        this.renderer.render(this.scene, this.camera);
    }
} 