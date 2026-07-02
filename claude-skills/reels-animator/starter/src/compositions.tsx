import React from 'react';
import { AbsoluteFill, Video, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { BRAND, FONTS, REEL, SPLIT } from './tokens';
import { AnimationDispatcher } from './animations';
import { Subtitles } from './Subtitles';
import { ReelProps } from './types';

// ============================================================
// PROGRESS BAR – barra di avanzamento del video
// ============================================================
function ProgressBar({ accentColor }: { accentColor: string }) {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = frame / durationInFrames;
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 6, background: 'rgba(255,255,255,0.15)' }}>
      <div style={{ width: `${progress * 100}%`, height: '100%', background: accentColor, transition: 'none' }} />
    </div>
  );
}

// ============================================================
// LAYOUT A – ReelComposition (overlay su tutto lo schermo)
// Usa quando: b-roll, sfondo scuro, estetica cinematica
// ============================================================
export function ReelComposition(props: ReelProps) {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const ac = props.accentColor || BRAND.teal;
  const currentSec = frame / fps;

  // Trova l'animazione attiva in questo frame
  const activeAnimation = props.animations.find(
    (anim) => currentSec >= anim.startSec && currentSec <= anim.startSec + anim.durationSec
  );

  return (
    <AbsoluteFill style={{ background: BRAND.ink }}>
      {/* Video di sfondo full screen */}
      <Video
        src={`/public/${props.videoSrc}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Vignette leggera per leggibilità */}
      <AbsoluteFill style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.5) 100%)',
      }} />

      {/* Brand handle in alto a destra */}
      {props.brandHandle && (
        <div style={{
          position: 'absolute', top: 48, right: 48,
          fontFamily: FONTS.body, fontSize: 30, fontWeight: 700,
          color: 'rgba(255,255,255,0.85)',
          background: 'rgba(0,0,0,0.35)',
          padding: '10px 24px', borderRadius: 999,
        }}>
          {props.brandHandle}
        </div>
      )}

      {/* Animazione attiva – overlay semitrasparente centrato */}
      {activeAnimation && (
        <div style={{
          position: 'absolute',
          top: '20%',
          left: 0, right: 0,
        }}>
          <div style={{
            background: 'rgba(31,58,64,0.82)',
            borderRadius: 24,
            margin: '0 32px',
            backdropFilter: 'blur(8px)',
          }}>
            <AnimationDispatcher animation={activeAnimation} accentColor={ac} />
          </div>
        </div>
      )}

      {/* Sottotitoli */}
      <Subtitles transcript={props.transcript} accentColor={ac} />

      {/* Progress bar */}
      <ProgressBar accentColor={ac} />
    </AbsoluteFill>
  );
}

// ============================================================
// LAYOUT B – SplitReelComposition (40% dati / 60% video)
// Usa quando: talking head, parli guardando la camera, citi numeri
// ============================================================
export function SplitReelComposition(props: ReelProps) {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const ac = props.accentColor || BRAND.teal;
  const currentSec = frame / fps;

  const activeAnimation = props.animations.find(
    (anim) => currentSec >= anim.startSec && currentSec <= anim.startSec + anim.durationSec
  );

  return (
    <AbsoluteFill style={{ background: BRAND.ink, flexDirection: 'column' }}>

      {/* ── PANNELLO SUPERIORE (40%) – animazioni e dati ── */}
      <div style={{
        width: REEL.width,
        height: SPLIT.topHeight,
        background: BRAND.ink,
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        {/* Barra accent color in cima (firma brand) */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, background: ac }} />

        {/* Brand handle in alto a destra */}
        {props.brandHandle && (
          <div style={{
            position: 'absolute', top: 24, right: 40,
            fontFamily: FONTS.body, fontSize: 28, fontWeight: 700,
            color: ac, letterSpacing: 1,
          }}>
            {props.brandHandle}
          </div>
        )}

        {/* Logo testuale Studio Mantovan in alto a sinistra */}
        <div style={{
          position: 'absolute', top: 24, left: 40,
          fontFamily: FONTS.title, fontSize: 28,
          color: 'rgba(255,255,255,0.5)',
        }}>
          Studio Mantovan
        </div>

        {/* Animazione attiva */}
        {activeAnimation ? (
          <div style={{ position: 'absolute', top: 72, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center' }}>
            <AnimationDispatcher animation={activeAnimation} accentColor={ac} />
          </div>
        ) : (
          /* Placeholder quando non c'è animazione – logo centrato */
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: FONTS.title, fontSize: 52, color: ac, fontWeight: 700 }}>Studio Mantovan</div>
              <div style={{ fontFamily: FONTS.body, fontSize: 30, color: BRAND.mint, marginTop: 8 }}>Fisioterapia in Movimento</div>
            </div>
          </div>
        )}

        {/* Progress bar in fondo al pannello superiore */}
        <ProgressBar accentColor={ac} />
      </div>

      {/* ── PANNELLO INFERIORE (60%) – video con faccia ── */}
      <div style={{
        width: REEL.width,
        height: SPLIT.bottomHeight,
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        <Video
          src={`/public/${props.videoSrc}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />

        {/* Sottotitoli sovraimpressi sul video */}
        <Subtitles transcript={props.transcript} accentColor={ac} />
      </div>
    </AbsoluteFill>
  );
}
