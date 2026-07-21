import { pipeline } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers";

let recognizer = null;

export async function loadSpeechEngine(statusElement) {

    if (recognizer) {
        return recognizer;
    }

    if (statusElement) {
        statusElement.textContent = "جاري تحميل محرك التعرف على الكلام...";
    }

    recognizer = await pipeline(
        "automatic-speech-recognition",
        "Xenova/whisper-tiny"
    );

    if (statusElement) {
        statusElement.textContent = "تم تحميل محرك التعرف على الكلام";
    }

    return recognizer;
}
