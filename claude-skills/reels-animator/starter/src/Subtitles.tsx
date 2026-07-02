import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import { BRAND, FONTS } from './tokens';
import { TranscriptSegment } from './types';

interface SubtitlesProps {
  transcript: TranscriptSegment[];
  accentColor?: string;
}

export function Subtitles({ transcript, accentColor }: SubtitlesProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentSec = frame / fps;

  const active = transcript.find(
    (seg) => currentSec >= seg.start && currentSec <= seg.end
  );

  if (!active) return null;

  return (
    <div style={{
      position: 'absolute',
      bottom: 60,
      left: 40,
      right: 40,
      textAlign: 'center',
    }}>
      <div style={{
        display: 'inline-block',
        background: 'rgba(0,0,0,0.72)',
        borderRadius: 12,
        padding: '14px 28px',
        fontFamily: FONTS.body,
        fontSize: 38,
        fontWeight: 600,
        color: BRAND.white,
        lineHeight: 1.35,
        maxWidth: 900,
      }}>
        {active.text}
      </div>
    </div>
  );
}
