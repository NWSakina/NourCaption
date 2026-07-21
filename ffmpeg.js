import { FFmpeg } from "https://unpkg.com/@ffmpeg/ffmpeg@0.12.10/dist/esm/index.js";
import { toBlobURL } from "https://unpkg.com/@ffmpeg/util@0.12.1/dist/esm/index.js";

const ffmpeg = new FFmpeg();

let loaded = false;

export async function loadFFmpeg() {

    if (loaded) {
        return ffmpeg;
    }

    const baseURL =
        "https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm";

    await ffmpeg.load({
        coreURL: await toBlobURL(
            `${baseURL}/ffmpeg-core.js`,
            "text/javascript"
        ),
        wasmURL: await toBlobURL(
            `${baseURL}/ffmpeg-core.wasm`,
            "application/wasm"
        )
    });

    loaded = true;

    return ffmpeg;
}

export default ffmpeg;
