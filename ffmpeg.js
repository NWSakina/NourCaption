import { FFmpeg } from "@ffmpeg/ffmpeg";

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
        workerURL: baseURL + "ffmpeg-core.worker.js"
    });

    return ffmpeg;
}

export default ffmpeg;
