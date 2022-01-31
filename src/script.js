import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import MPRSSVBoxFrame from './geometry/box-frame';


// Globals
const blue = new THREE.Color(0x222222)
const twoPi = Math.PI * 2;

// Debug
const gui = new dat.GUI()

// Canvas
const bodyEl = document.getElementsByTagName('body')[0]
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = blue

/**
 * Axes Helper
 */
 const axesHelper = new THREE.AxesHelper(2)
 scene.add(axesHelper)

// Objects
// const geometry = new THREE.TorusGeometry(2.5, 0.3, 3, 4, Math.PI * 2)

const boxFrame = new MPRSSVBoxFrame;
const box = boxFrame.getFrame()
scene.add(box);

// Fonts
const fontLoader = new THREE.FontLoader()

fontLoader.load(
    '/fonts/FuturaNowHeadlineExtraBlackTTF.json',
    (font) =>
    {
        const textGroup = new THREE.Group;

        const inspireTextGeometry = new THREE.TextGeometry('INSPIRE', { font: font, size: 0.45, height: 0.2, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02 })
        inspireTextGeometry.center()
        window.inspireText = new THREE.Mesh(
            inspireTextGeometry, 
            new THREE.MeshPhongMaterial({color: 0xefefef})
        )

        const imagineTextGeometry = new THREE.TextGeometry('IMAGINE', { font: font, size: 0.45, height: 0.2, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02 })
        imagineTextGeometry.center()
        window.imagineText = new THREE.Mesh(
            imagineTextGeometry, 
            new THREE.MeshPhongMaterial({color: 0xefefef})
        )    
        
        const impressTextGeometry = new THREE.TextGeometry('IMPRESS', { font: font, size: 0.45, height: 0.2, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02 })
        impressTextGeometry.center()
        window.impressText = new THREE.Mesh(
            impressTextGeometry, 
            new THREE.MeshPhongMaterial({color: 0xefefef})
        )  

        const text1 = new THREE.Mesh(
            new THREE.TextGeometry('M P R', { font: font, size: 0.75, height: 0.2, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02 }), 
            new THREE.MeshPhongMaterial({color: 0xefefef})
        )
        const text2 = new THREE.Mesh(
            new THREE.TextGeometry('S  S  V', { font: font, size: 0.7, height: 0.2, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02 }), 
            new THREE.MeshPhongMaterial({color: 0xefefef})
        )
        const text3 = new THREE.Mesh(
            new THREE.TextGeometry('C  O', { font: font, size: 0.7, height: 0.2, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02 }), 
            new THREE.MeshPhongMaterial({color: 0xefefef})
        )

        text1.position.x = -1.25
        text1.position.y = 0.75
        text1.position.z = -0.08
        text2.position.x = -1.1
        text2.position.y = -0.25
        text2.position.z = -0.08
        text3.position.x = -1.2
        text3.position.y = -1.25
        text3.position.z = -0.08
        textGroup.add(text1, text2, text3)

        textGroup.position.x = -0.3
        textGroup.position.y = -0.2
        textGroup.position.z = 0        

        window.logo = textGroup
        scene.add(window.inspireText)

        text3.geometry.computeBoundingBox()
        console.log(text3.geometry)
    }
)


// Lights

const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
directionalLight.position.x = 2
directionalLight.position.y = 5
directionalLight.position.z = 5
const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 1)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
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
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 4
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
 * Scroll Height
 */
bodyEl.style.height = sizes.height * twoPi + "px";


/**
 * Animate
 */

let scrollY = window.scrollY
let currentSection = 0

// window.addEventListener('scroll', () =>
// {
//      scrollY = window.scrollY * .0005;     
// })

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    box.rotation.y = elapsedTime * 2

    if(box.rotation.y > Math.PI * 2){
        scene.remove(window.inspireText)
        scene.add(window.imagineText)
    }

    if(box.rotation.y > Math.PI * 4){
        scene.remove(window.imagineText)
        scene.add(window.impressText)
    }

    if(box.rotation.y > Math.PI * 6){
        scene.remove(window.impressText)
        scene.add(window.logo)        
    }

    // if(box.rotation.y > Math.PI * 7){
        
    //     if(window.logo.position.y < sizes.height){
    //         window.logo.position.y = elapsedTime * .5;
    //         window.logo.position.x = -elapsedTime * .5;
    //     }
    // }

    // Update objects
    // if(window.logo){
        
    //     box.rotation.y = scrollY

    //     if(scrollY < 8186) {
    //         scene.remove(window.imagineText)
    //         // scene.add(window.inspireText)                        
    //     }

    //     if(scrollY > 8186 && scrollY < 14000) {
    //         scene.remove(window.inspireText)
    //         scene.remove(window.impressText)
    //         scene.add(window.imagineText)
    //     }

    //     if(scrollY > 14000 && scrollY < 20000) {
    //         scene.remove(window.imagineText)
    //         scene.remove(window.logo)
    //         scene.add(window.impressText)
    //     }

    //     if(scrollY > 20000) {
    //         scene.remove(window.impressText)
    //         scene.remove(window.inspireText)
    //         scene.add(window.logo)
    //     }
    // }

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

