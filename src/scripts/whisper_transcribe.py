import whisper
import os
import json
import warnings

warnings.filterwarnings("ignore", message="FP16 is not supported on CPU; using FP32 instead")

def main():
    model = whisper.load_model("base")

    current_dir = os.path.dirname(os.path.realpath(__file__))
    audio_file_path = os.path.join(current_dir, '../../temp_audio.mp3')

    result = model.transcribe(audio_file_path)

    print(json.dumps({"text": result["text"]}))

if __name__ == "__main__":
    main()
