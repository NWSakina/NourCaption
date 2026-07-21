import { FFmpeg } from "https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/+esm";
import { toBlobURL } from "https://cdn.jsdelivr.net/npm/@ffmpeg/util@0.12.1/+esm";

const ffmpeg = new FFmpeg();

export async function loadFFmpeg() {

  if (ffmpeg.loaded) {
    return ffmpeg;
  }

  const baseURL =
    "https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/esm";

  const ffmpegWorker = await toBlobURL(
    "https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/dist/esm/worker.js",
    "text/javascript"
  );

  await ffmpeg.load({
    classWorkerURL: ffmpegWorker,
    coreURL: await toBlobURL(
      `${baseURL}/ffmpeg-core.js`,
      "text/javascript"
    ),
    wasmURL: await toBlobURL(
      `${baseURL}/ffmpeg-core.wasm`,
      "application/wasm"
    ),
  });

  return ffmpeg;
}

export default ffmpeg;
