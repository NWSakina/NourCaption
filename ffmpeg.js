import { FFmpeg } from "https://unpkg.com/@ffmpeg/ffmpeg@0.12.10/dist/esm/index.js";

let ffmpeg = null;

export async function loadFFmpeg() {

    if (ffmpeg) return ffmpeg;

    ffmpeg = new FFmpeg();

    await ffmpeg.load({
        coreURL: "./ffmpeg/ffmpeg-core.js",
        wasmURL: "./ffmpeg/ffmpeg-core.wasm"
    });

    return ffmpeg;
}

export default ffmpeg;
