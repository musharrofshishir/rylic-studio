/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')
const canvas2 = document.querySelector('canvas.head')
const canvasWrap = document.querySelector('._rylic_big_2_wrap')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const objectsDistance = 4

// Material
const material = new THREE.MeshToonMaterial({ color: '#fff' })

// Meshes
const mesh1 = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    material
)
const mesh2 = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 32),
    material
)
const mesh3 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    material
)

mesh1.position.y = - objectsDistance * 0
mesh2.position.y = - objectsDistance * 1
mesh3.position.y = - objectsDistance * 2

mesh1.position.x = 2
mesh2.position.x = - 2
mesh3.position.x = 2

const sectionMeshes = ['section1', 'section2', 'section3', 'section4']

// scene.add(mesh1, mesh2, mesh3)

/**
 * Particles
 */
// Geometry
const particlesCount = 55000
const positions = new Float32Array(particlesCount * 3)

for (let i = 0; i < particlesCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * sectionMeshes.length
    // positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * 
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

// Material
const particlesMaterial = new THREE.PointsMaterial({
    color: '#403F5C',
    // color: '#fff',
    sizeAttenuation: true,
    size: 0.007
})

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);
/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    // height: window.innerHeight
    height: 2600
}
const sizes2 = {
    width: window.innerWidth,
    // height: window.innerHeight
    height: 1800
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Scroll
 */
let scrollY = window.scrollY
let currentSection = 0

window.addEventListener('scroll', () => {
    scrollY = window.scrollY
    const newSection = Math.round(scrollY * 5 / sizes.height)
    if (newSection != currentSection) {
        currentSection = newSection

        // gsap.to(
        //     sectionMeshes[currentSection].rotation,
        //     {
        //         duration: 1.5,
        //         ease: 'power2.inOut',
        //         x: '+=6',
        //         y: '+=3'
        //     }
        // )
    }
})

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})

/**
 * Camera
 */
// Group
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// Base camera
const camera = new THREE.PerspectiveCamera(30, sizes.width / sizes.height, 0.1, 100)
const camera2 = new THREE.PerspectiveCamera(30, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
camera2.position.z = 6
cameraGroup.add(camera)
cameraGroup.add(camera2)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const renderer2 = new THREE.WebGLRenderer({
    canvas: canvas2,
    alpha: true
})
renderer2.setSize(sizes2.width, sizes2.height)
renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Animate meshes
    // for(const mesh of sectionMeshes)
    // {
    //     mesh.rotation.x += deltaTime * 0.1
    //     mesh.rotation.y += deltaTime * 0.12
    // }

    // Animate camera
    // camera.position.y = - scrollY / sizes.height * objectsDistance
    camera.position.y = - scrollY*.09 / sizes.height * objectsDistance
    
    const parallaxX = cursor.x * 0.5
    const parallaxY = - cursor.y * 0.5

    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

    // Render
    renderer.render(scene, camera)
    renderer2.render(scene, camera2)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick();

window.addEventListener('load',function() {
    gsap.to(camera2.position,{
        y:-5,
        x:-15,
        duration:1000,
        yoyo:true,
        ease: "Power3.out"
    })
})