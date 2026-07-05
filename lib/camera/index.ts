export class CameraEngine {
  start() {
    console.log("Camera Started");
  }

  stop() {
    console.log("Camera Stopped");
  }
}

export const camera = new CameraEngine();