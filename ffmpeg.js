import { createFFmpeg, fetchFile } from "https://unpkg.com/@ffmpeg/ffmpeg@0.11.6/dist/ffmpeg.min.js";

let ffmpeg = null;

export async function loadFFmpeg() {

    if (ffmpeg) {
        return ffmpeg;
    }

    ffmpeg = createFFmpeg({
        log: true,
        corePath:
        "https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js"
    });

    await ffmpeg.load();

    return ffmpeg;
}

export { fetchFile };
