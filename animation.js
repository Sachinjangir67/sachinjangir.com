class PortfolioBackground {
    constructor() {
        this.init();
        this.createObjects();
        this.addEventListeners();
        this.animate();
    }

    init() {
        // Create scenes for each section
        this.sections = ['home', 'about', 'services', 'portfolio', 'contact'];
        this.scenes = {};
        this.cameras = {};
        this.renderers = {};
        this.objects = {};

        this.sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            
            // Create container for 3D background
            const container = document.createElement('div');
            container.className = 'background-container';
            section.insertBefore(container, section.firstChild);

            // Setup Three.js scene
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ 
                antialias: true,
                alpha: true 
            });

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0);
            container.appendChild(renderer.domElement);

            camera.position.z = 30;

            this.scenes[sectionId] = scene;
            this.cameras[sectionId] = camera;
            this.renderers[sectionId] = renderer;
        });
    }

    createObjects() {
        this.sections.forEach(sectionId => {
            const scene = this.scenes[sectionId];

            // Create unique particle system for each section
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 2000;
            const posArray = new Float32Array(particlesCount * 3);
            const colors = new Float32Array(particlesCount * 3);

            for(let i = 0; i < particlesCount * 3; i += 3) {
                // Position
                posArray[i] = (Math.random() - 0.5) * 50;
                posArray[i + 1] = (Math.random() - 0.5) * 50;
                posArray[i + 2] = (Math.random() - 0.5) * 50;

                // Colors - Create gradient effect
                const color = new THREE.Color();
                color.setHSL(Math.random() * 0.2 + 0.5, 0.7, 0.5);
                colors[i] = color.r;
                colors[i + 1] = color.g;
                colors[i + 2] = color.b;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.1,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending
            });

            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);
            this.objects[sectionId] = particlesMesh;

            // Add ambient light
            const ambientLight = new THREE.AmbientLight(0x404040);
            scene.add(ambientLight);

            // Add point light
            const pointLight = new THREE.PointLight(0x59B2f4, 1);
            pointLight.position.set(10, 10, 10);
            scene.add(pointLight);
        });
    }

    addEventListeners() {
        // Handle window resize
        window.addEventListener('resize', () => {
            this.sections.forEach(sectionId => {
                const camera = this.cameras[sectionId];
                const renderer = this.renderers[sectionId];

                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        });

        // Handle mouse movement
        let mouseX = 0;
        let mouseY = 0;
        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            this.sections.forEach(sectionId => {
                const object = this.objects[sectionId];
                if (object) {
                    object.rotation.x += mouseY * 0.001;
                    object.rotation.y += mouseX * 0.001;
                }
            });
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.sections.forEach(sectionId => {
            const scene = this.scenes[sectionId];
            const camera = this.cameras[sectionId];
            const renderer = this.renderers[sectionId];
            const object = this.objects[sectionId];

            // Continuous rotation
            object.rotation.x += 0.001;
            object.rotation.y += 0.001;

            // Wave effect
            const time = Date.now() * 0.001;
            const positions = object.geometry.attributes.position.array;
            for(let i = 0; i < positions.length; i += 3) {
                positions[i + 1] += Math.sin(time + positions[i] * 0.1) * 0.01;
            }
            object.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        });
    }
}

// Initialize the background when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioBackground();
}); 