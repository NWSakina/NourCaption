import { FFmpeg } from "https://unpkg.com/@ffmpeg/ffmpeg@0.12.10/dist/esm/index.js";

const ffmpeg = new FFmpeg();

let loaded = false;

export async function loadFFmpeg() {
    if (loaded) {
        return ffmpeg;
    }

    await ffmpeg.load({
        coreURL: "./ffmpeg/ffmpeg-core.js",
        wasmURL: "./ffmpeg/ffmpeg-core.wasm"
    });

    loaded = true;

    return ffmpeg;
}

export default ffmpeg;
