import { FFmpeg } from "https://unpkg.com/@ffmpeg/ffmpeg@0.12.10/dist/esm/index.js";
import { toBlobURL } from "https://unpkg.com/@ffmpeg/util@0.12.1/dist/esm/index.js";

const ffmpeg = new FFmpeg();

let loaded = false;

export async function loadFFmpeg() {
    if (loaded) return ffmpeg;

        await ffmpeg.load({
                coreURL: await toBlobURL("./ffmpeg/ffmpeg-core.js", "text/javascript"),
                        wasmURL: await toBlobURL("./ffmpeg/ffmpeg-core.wasm", "application/wasm"),
                                workerURL: await toBlobURL("./ffmpeg/worker.js", "text/javascript")
                                    });

                                        loaded = true;
                                            return ffmpeg;
                                            }

                                            export default ffmpeg;
