import { loadFFmpeg } from "./ffmpeg.js";

export async function extractAudio(videoFile) {

    if (!videoFile) {
        throw new Error("لم يتم اختيار فيديو");
    }

    const ffmpeg = await loadFFmpeg();

    const inputName = "input.mp4";
    const outputName = "audio.wav";

    const inputData = new Uint8Array(
        await videoFile.arrayBuffer()
    );

    await ffmpeg.writeFile(inputName, inputData);

    await ffmpeg.exec([
        "-i",
        inputName,
        "-vn",
        "-ac",
        "1",
        "-ar",
        "16000",
        "-c:a",
        "pcm_s16le",
        outputName
    ]);

    const audioData = await ffmpeg.readFile(outputName);

    return new Blob(
        [audioData],
        { type: "audio/wav" }
    );

}

export default extractAudio;
