export class SpeechEngine {
  startListening() {
    console.log("Speech Recognition Ready");
  }

  stopListening() {
    console.log("Speech Recognition Stopped");
  }

  speak(text: string) {
    console.log(text);
  }
}

export const speech = new SpeechEngine();