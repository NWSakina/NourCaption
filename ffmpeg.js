import { FFmpeg } from "https://unpkg.com/@ffmpeg/ffmpeg@0.12.10/dist/esm/index.js";

let ffmpeg = null;

export async function loadFFmpeg() {

    if (ffmpeg) {
        return ffmpeg;
    }

    ffmpeg = new FFmpeg();

    const baseURL = "./ffmpeg/";

    await ffmpeg.load({
        coreURL: baseURL + "ffmpeg-core.js",
        wasmURL: baseURL + "ffmpeg-core.wasm",
        workerURL: baseURL + "worker.js"
    });

    return ffmpeg;
}

export default ffmpeg;
