import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import Stats from 'three/addons/libs/stats.module.js';
import birds from './birds-1'

interface Model {
  scene: THREE.Group;
  animations: THREE.AnimationClip[];
}

interface SetupModelResult extends THREE.Object3D {
  tick: (delta: number) => void;
}

function setupModel(data: Model): SetupModelResult {
  const model = data.scene.children[0] as SetupModelResult;
  const clip = data.animations[0];
  const mixer = new THREE.AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.play();
  model.tick = (delta) => mixer.update(delta);
  return model;
}

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('/assets/models/Parrot.glb'),
    loader.loadAsync('/assets/models/Flamingo.glb'),
    loader.loadAsync('/assets/models/Stork.glb'),
  ]);

  console.log('Squaaawk!', parrotData);

  const parrot = setupModel(parrotData);
  parrot.position.set(0, 0, 2.5);

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(7.5, 0, -10);

  const stork = setupModel(storkData);
  stork.position.set(0, -2.5, -10);

  return {
    parrot,
    flamingo,
    stork,
  };
}

const Birds: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const mixersRef = useRef<THREE.AnimationMixer[]>([]);
  const clockRef = useRef<THREE.Clock | null>(null);
  let camera, scene, renderer, stats,gui,settings={};

  const init = async () => {
    // 场景
    scene = new THREE.Scene();
    //添加物体
  
    //scene.add(model);
     //scene.add(sprite);
     //scene.add(cube);
     //scene.add(plane);
     //scene.add(points);
     //scene.add(PM);
     //scene.add(...birds);
     //scene.add(...birds,ground);
    //  scene.add(cylinder); // 如果 cylinder 是单个对象
    //  scene.add(ground); // 如果 ground 是单个对象
  
    // 相机
    camera = new THREE.PerspectiveCamera(
      35, // 视野角度
      window.innerWidth / window.innerHeight, // 长宽比
      0.1, // 近截面（near）
      300 // 远截面（far）
    );
    camera.position.set(100, 100, 100);
    camera.lookAt(0, 0, 0);
  
    // 光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
  
    //点光源
    const spotLight=new THREE.SpotLight(0xff0,70); //颜色
    spotLight.decay=0.3  //衰减
    spotLight.angle=Math.PI/5  //聚光灯的光束角度
    spotLight.position.set(150,200,0)  //位置
    spotLight.penumbra=0.3  //半影
    spotLight.castShadow=true  //光源的阴影投射
    const spotLightHelper=new THREE.SpotLightHelper(spotLight);  //辅助对象，用于可视化光束的位置和方向
    scene.add(spotLightHelper);
    scene.add(spotLight);
  
    // 渲染器
    renderer = new THREE.WebGLRenderer({antialias: true});
    // 获取你屏幕对应的设备像素比.devicePixelRatio告诉threejs,以免渲染模糊问题
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    //renderer.render(scene, camera);
    //阴影  渲染器打开阴影的渲染
  
    renderer.shadowMap.enabled=true;
    //背景颜色
    renderer.setClearColor(0x87CEEB, 1);
    document.body.appendChild(renderer.domElement);
    
    // window.addEventListener('resize', onWindowResize);
    window.onresize = onWindowResize;
    initHelper();
    initGUI();
  }

  const onWindowResize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
    camera.updateProjectionMatrix();
  }

  const initHelper = () => {
    //辅助线
    const axesHelper = new THREE.AxesHelper(50);
    scene.add(axesHelper);
  
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', () => {
      renderer.render(scene, camera);
    });
  
    //网格
    const gridHelper = new THREE.GridHelper(1000, 100);
    scene.add(gridHelper);
  
    //创建stats对象
    stats = new Stats();
    //stats.domElement:web页面上输出计算结果,一个div元素，
    document.body.appendChild(stats.domElement);
  }

  const initGUI = () => {
    const gui = new GUI();
    const obj = {
      x: 1,
      intensity: 1
    }
   
  }

  useEffect(() => {
    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      mixersRef.current.forEach(mixer => mixer.stopAllAction());
    };
  }, []);

  const handleLoad = () => {
    if (!sceneRef.current) {
      init();
    }
  };

  return (
    <div>
      <button onClick={handleLoad}>Load Birds</button>
      {/* <div ref={mountRef} style={{ width: '100%', height: '400px' }}>2222</div> */}
    </div>
  );
};

export default Birds;
