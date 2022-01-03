import * as THREE from 'three';

export default class MPRSSVBoxFrame { 
    constructor() { 
        this.frameSides = []
        this.geometryGroup = new THREE.Group
            
        this.boxFrameMaterial = new THREE.MeshPhongMaterial({
            wireframe: false, 
            // side: THREE.DoubleSide,
            color: new THREE.Color('white')
        })
    }

    getFrame() {
        const boxGeometry1 = new THREE.BoxGeometry(0.5, 3.5, 1) // right
        const boxGeometry2 = new THREE.BoxGeometry(0.5, 5, 1) // top
        const boxGeometry3 = new THREE.BoxGeometry(0.5, 3.5, 1) // left
        const boxGeometry4 = new THREE.BoxGeometry(0.5, 5, 1) // bottom        

        const box1 = new THREE.Mesh(boxGeometry1, this.boxFrameMaterial)
        box1.position.x = 2.25;        

        const box2 = new THREE.Mesh(boxGeometry2, this.boxFrameMaterial)
        box2.position.y = 2;
        box2.rotation.z = Math.PI * 0.5

        const box3 = new THREE.Mesh(boxGeometry3, this.boxFrameMaterial)
        box3.position.x = -2.25;

        const box4 = new THREE.Mesh(boxGeometry4, this.boxFrameMaterial)
        box4.position.y = -2;
        box4.rotation.z = Math.PI * -0.5

        this.geometryGroup.add(box1, box2, box3, box4)

        return this.geometryGroup;
    }
}