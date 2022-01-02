import * as THREE from 'three';

export default class MPRSSVFrame {        
    constructor() { 
        this.frameSides = []
        this.geometryGroup = new THREE.Group
            
        this.frameMaterial = new THREE.MeshBasicMaterial({
            wireframe: false, 
            side: THREE.DoubleSide,
            color: new THREE.Color('white')
        })
    }

    getFrame1() {
        // this.objectReset();

        const frameGeometry1 = new THREE.PlaneBufferGeometry()
        const positionsArray1 = new Float32Array([
            1.0, -4.0, -1.0,
            1.0, 4.0, -1.0,
            -1.0, -4.0, -1.0,        
            -1.0, 4.0, -1.0    
        ])
        frameGeometry1.setAttribute('position', new THREE.BufferAttribute(positionsArray1, 3))
        this.frameSides.push(frameGeometry1)

        const frameGeometry2 = new THREE.PlaneBufferGeometry()
        const positionsArray2 = new Float32Array([
            1.0, -3.0, -1.0,
            1.0, 3.0, -1.0,
            1.0, -3.0, 0.0,        
            1.0, 3.0, 0.0    
        ])
        frameGeometry2.setAttribute('position', new THREE.BufferAttribute(positionsArray2, 3))
        this.frameSides.push(frameGeometry2)

        const frameGeometry3 = new THREE.PlaneBufferGeometry()
        const positionsArray3 = new Float32Array([
            -1.0, -3.0, -1.0,
            -1.0, 3.0, -1.0,
            -1.0, -3.0, 0.0,        
            -1.0, 3.0, 0.0    
        ])
        frameGeometry3.setAttribute('position', new THREE.BufferAttribute(positionsArray3, 3))
        this.frameSides.push(frameGeometry3)

        const frameGeometry4 = new THREE.PlaneBufferGeometry()
        const positionsArray4 = new Float32Array([
            1.0, -3.0, 0.0,
            1.0, 3.0, 0.0,
            -1.0, -3.0, 0.0,        
            -1.0, 3.0, 0.0    
        ])
        frameGeometry4.setAttribute('position', new THREE.BufferAttribute(positionsArray4, 3))
        this.frameSides.push(frameGeometry4)

        for (let frameSideIndex = 0; frameSideIndex < this.frameSides.length; frameSideIndex++) {
            this.frameSides[frameSideIndex].center();
            const boxSide = new THREE.Mesh(this.frameSides[frameSideIndex], this.frameMaterial)
            this.geometryGroup.add(boxSide)   
        }

        return this.geometryGroup;
    }

    getFrame2() {
        // this.objectReset();

        const frame2Geometry1 = new THREE.PlaneBufferGeometry()
        const positionsArray1 = new Float32Array([
            1.0, 4.0, -1.0,
            -1.0, 4.0, -1.0,
            1.0, 4.0, 6.0,
            -1.0, 4.0, 6.0
        ])
        frame2Geometry1.setAttribute('position', new THREE.BufferAttribute(positionsArray1, 3))
        this.frameSides.push(frame2Geometry1)

        const frame2Geometry2 = new THREE.PlaneBufferGeometry()
        const positionsArray2 = new Float32Array([
            1.0, 3.0, 0.0,
            -1.0, 3.0, 0.0,
            1.0, 3.0, 5.0,
            -1.0, 3.0, 5.0
        ])
        frame2Geometry2.setAttribute('position', new THREE.BufferAttribute(positionsArray2, 3))
        this.frameSides.push(frame2Geometry2)

        const frame2Geometry3 = new THREE.PlaneBufferGeometry()
        const positionsArray3 = new Float32Array([
            1.0, 4.0, -1.0,
            1.0, 3.0, -1.0,
            1.0, 4.0, 6.0, 
            1.0, 3.0, 6.0   
        ])
        frame2Geometry3.setAttribute('position', new THREE.BufferAttribute(positionsArray3, 3))
        this.frameSides.push(frame2Geometry3)

        const frame2Geometry4 = new THREE.PlaneBufferGeometry()
        const positionsArray4 = new Float32Array([
            -1.0, 4.0, -1.0,
            -1.0, 3.0, -1.0,
            -1.0, 4.0, 6.0, 
            -1.0, 3.0, 6.0 
        ])
        frame2Geometry4.setAttribute('position', new THREE.BufferAttribute(positionsArray4, 3))
        this.frameSides.push(frame2Geometry4)

        for (let frameSideIndex = 0; frameSideIndex < this.frameSides.length; frameSideIndex++) {
            const boxSide = new THREE.Mesh(this.frameSides[frameSideIndex], this.frameMaterial)
            this.geometryGroup.add(boxSide)   
        }

        return this.geometryGroup;
    }

    getFrame3() {
        const frame3Geometry1 = new THREE.PlaneBufferGeometry()
        const positionsArray1 = new Float32Array([
            -1.0, 4.0, 6.0,
            1.0, 4.0, 6.0,
            -1.0, -4.0, 6.0,
            1.0, -4.0, 6.0
        ])
        frame3Geometry1.setAttribute('position', new THREE.BufferAttribute(positionsArray1, 3))
        this.frameSides.push(frame3Geometry1)

        const frame3Geometry2 = new THREE.PlaneBufferGeometry()
        const positionsArray2 = new Float32Array([
            -1.0, 3.0, 5.0,
            1.0, 3.0, 5.0,
            -1.0, -3.0, 5.0,
            1.0, -3.0, 5.0
        ])
        frame3Geometry2.setAttribute('position', new THREE.BufferAttribute(positionsArray2, 3))
        this.frameSides.push(frame3Geometry2)

        const frame3Geometry3 = new THREE.PlaneBufferGeometry()
        const positionsArray3 = new Float32Array([
            1.0, 4.0, -1.0,
            1.0, 3.0, -1.0,
            1.0, 4.0, 6.0, 
            1.0, 3.0, 6.0   
        ])
        frame3Geometry3.setAttribute('position', new THREE.BufferAttribute(positionsArray3, 3))
        // this.frameSides.push(frame3Geometry3)

        const frame3Geometry4 = new THREE.PlaneBufferGeometry()
        const positionsArray4 = new Float32Array([
            -1.0, 4.0, -1.0,
            -1.0, 3.0, -1.0,
            -1.0, 4.0, 6.0, 
            -1.0, 3.0, 6.0 
        ])
        frame3Geometry4.setAttribute('position', new THREE.BufferAttribute(positionsArray4, 3))
        // this.frameSides.push(frame3Geometry4)

        for (let frameSideIndex = 0; frameSideIndex < this.frameSides.length; frameSideIndex++) {
            const boxSide = new THREE.Mesh(this.frameSides[frameSideIndex], this.frameMaterial)
            this.geometryGroup.add(boxSide)   
        }

        return this.geometryGroup;
    }

    getFrame4() {
        const frame4Geometry1 = new THREE.PlaneBufferGeometry()
        const positionsArray1 = new Float32Array([
            -1.0, -4.0, -1.0,
            1.0, -4.0, -1.0,
            -1.0, -4.0, 6.0, 
            1.0, -4.0, 6.0 
        ])
        frame4Geometry1.setAttribute('position', new THREE.BufferAttribute(positionsArray1, 3))
        this.frameSides.push(frame4Geometry1)

        const frame4Geometry2 = new THREE.PlaneBufferGeometry()
        const positionsArray2 = new Float32Array([
            -1.0, -3.0, -1.0,
            1.0, -3.0, -1.0,
            -1.0, -3.0, 6.0, 
            1.0, -3.0, 6.0 
        ])
        frame4Geometry2.setAttribute('position', new THREE.BufferAttribute(positionsArray2, 3))
        this.frameSides.push(frame4Geometry2)

        const frame4Geometry3 = new THREE.PlaneBufferGeometry()
        const positionsArray3 = new Float32Array([
            1.0, -3.0, -1.0,
            1.0, -4.0, -1.0,
            1.0, -3.0, 6.0, 
            1.0, -4.0, 6.0 
        ])
        frame4Geometry3.setAttribute('position', new THREE.BufferAttribute(positionsArray3, 3))
        this.frameSides.push(frame4Geometry3)

        const frame4Geometry4 = new THREE.PlaneBufferGeometry()
        const positionsArray4 = new Float32Array([
            -1.0, -3.0, -1.0,
            -1.0, -4.0, -1.0,
            -1.0, -3.0, 6.0, 
            -1.0, -4.0, 6.0 
        ])
        frame4Geometry4.setAttribute('position', new THREE.BufferAttribute(positionsArray4, 3))
        this.frameSides.push(frame4Geometry4)

        for (let frameSideIndex = 0; frameSideIndex < this.frameSides.length; frameSideIndex++) {
            const boxSide = new THREE.Mesh(this.frameSides[frameSideIndex], this.frameMaterial)
            this.geometryGroup.add(boxSide)   
        }

        return this.geometryGroup;
    }

    objectReset() {
        this.frameSides = [];
        this.geometryGroup.clear();
    }
}