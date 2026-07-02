#!/usr/bin/env bash
# transcode.sh – Converte MOV/HEVC in H.264 MP4 compatibile con Remotion/Chromium
# Uso: bash scripts/transcode.sh /percorso/al/tuo/video.MOV

set -e

INPUT="$1"

if [ -z "$INPUT" ]; then
  echo "❌  Specifica il file video: bash scripts/transcode.sh ~/Desktop/mio-reel.MOV"
  exit 1
fi

if ! command -v ffmpeg &> /dev/null; then
  echo "❌  ffmpeg non trovato."
  echo "    Mac:     brew install ffmpeg"
  echo "    Windows: scarica da https://ffmpeg.org/download.html e aggiungi al PATH"
  exit 1
fi

BASENAME=$(basename "$INPUT" | sed 's/\.[^.]*$//')
OUTPUT="starter/public/${BASENAME}-h264.mp4"

echo "🎬  Transcodifica in corso..."
echo "    Input:  $INPUT"
echo "    Output: $OUTPUT"

ffmpeg -i "$INPUT" \
  -vcodec libx264 \
  -crf 18 \
  -preset fast \
  -acodec aac \
  -b:a 192k \
  -movflags +faststart \
  "$OUTPUT" -y

echo ""
echo "✅  Pronto! Usa questo nome in videoSrc del props.json:"
echo "    \"videoSrc\": \"${BASENAME}-h264.mp4\""