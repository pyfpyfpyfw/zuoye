declare module 'three/examples/jsm/loaders/GLTFLoader' {
    import { Loader, LoadingManager, Group, AnimationClip } from 'three';
  
    export class GLTFLoader extends Loader {
      constructor(manager?: LoadingManager);
      load(
        url: string,
        onLoad: (gltf: GLTF) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
      loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<GLTF>;
      parse(
        data: ArrayBuffer | string,
        path: string,
        onLoad: (gltf: GLTF) => void,
        onError?: (error: ErrorEvent) => void
      ): void;
      parseAsync(data: ArrayBuffer | string, path: string): Promise<GLTF>;
    }
  
    export interface GLTF {
      animations: AnimationClip[];
      scene: Group;
      scenes: Group[];
      cameras: Camera[];
      asset: object;
    }
  }
  