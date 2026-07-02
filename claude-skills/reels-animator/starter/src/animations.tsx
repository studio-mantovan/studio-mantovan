import React from 'react';
import { useCurrentFrame, useVideoConfig, interpolate, spring, Easing } from 'remotion';
import { BRAND, FONTS } from './tokens';

// ============================================================
// HELPERS
// ============================================================

function useEntrance(startFrame: number, durationFrames: number) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;
  const progress = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 120 } });
  const opacity = interpolate(localFrame, [0, 8], [0, 1], { extrapolateRight: 'clamp' });
  const isVisible = localFrame >= 0 && localFrame <= durationFrames;
  return { progress, opacity: isVisible ? opacity : 0, localFrame, isVisible };
}

// ============================================================
// 1. QUOTE
// ============================================================
export function Quote({ data, startFrame, durationFrames, accentColor }: any) {
  const { progress, opacity } = useEntrance(startFrame, durationFrames);
  const ac = accentColor || BRAND.teal;
  const bg = data.accent ? ac : 'rgba(31,58,64,0.92)';
  return (
    <div style={{
      opacity,
      transform: `scale(${interpolate(progress, [0, 1], [0.88, 1])})`,
      background: bg,
      borderRadius: 24,
      padding: '48px 52px',
      margin: '0 40px',
      fontFamily: FONTS.title,
      color: BRAND.white,
      position: 'relative',
    }}>
      <div style={{ fontSize: 120, lineHeight: 0.5, color: ac, opacity: 0.4, fontFamily: FONTS.title }}>"</div>
      <div style={{ fontSize: 52, lineHeight: 1.3, marginTop: 16 }}>{data.text}</div>
    </div>
  );
}

// ============================================================
// 2. TYPEWRITER
// ============================================================
export function Typewriter({ data, startFrame, durationFrames }: any) {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;
  const text: string = data.text || '';
  const charsPerFrame = text.length / (durationFrames * 0.7);
  const visibleChars = Math.min(text.length, Math.floor(localFrame * charsPerFrame));
  const opacity = interpolate(localFrame, [0, 6], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <div style={{ opacity, padding: '40px 48px', fontFamily: FONTS.body, color: BRAND.white }}>
      <div style={{ fontSize: 44, lineHeight: 1.4, background: 'rgba(31,58,64,0.88)', borderRadius: 16, padding: '32px 40px' }}>
        {text.slice(0, visibleChars)}
        <span style={{ opacity: localFrame % 20 < 10 ? 1 : 0, color: BRAND.teal }}>|</span>
      </div>
    </div>
  );
}

// ============================================================
// 3. TEXT REVEAL
// ============================================================
export function TextReveal({ data, startFrame, durationFrames }: any) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const lines: string[] = data.lines || [];
  return (
    <div style={{ padding: '40px 48px' }}>
      {lines.map((line: string, i: number) => {
        const lineStart = startFrame + i * (fps * 0.8);
        const localFrame = frame - lineStart;
        const prog = spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 140 } });
        const opacity = interpolate(localFrame, [0, 8], [0, 1], { extrapolateRight: 'clamp' });
        return (
          <div key={i} style={{
            transform: `translateY(${interpolate(prog, [0, 1], [30, 0])}px)`,
            opacity,
            fontFamily: FONTS.title,
            fontSize: 50,
            color: BRAND.white,
            lineHeight: 1.3,
            marginBottom: 16,
          }}>{line}</div>
        );
      })}
    </div>
  );
}

// ============================================================
// 4. GLITCH TEXT
// ============================================================
export function GlitchText({ data, startFrame, durationFrames }: any) {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;
  const opacity = interpolate(localFrame, [0, 8], [0, 1], { extrapolateRight: 'clamp' });
  const glitching = localFrame < 18;
  const offset = glitching ? Math.sin(localFrame * 2.5) * 6 : 0;
  return (
    <div style={{ opacity, padding: '40px 48px', position: 'relative' }}>
      <div style={{ fontFamily: FONTS.title, fontSize: 88, color: BRAND.teal, position: 'absolute', left: 48 + offset, top: 40, opacity: 0.7, mixBlendMode: 'screen' }}>{data.text}</div>
      <div style={{ fontFamily: FONTS.title, fontSize: 88, color: BRAND.coral, position: 'relative', left: -offset * 0.5 }}>{data.text}</div>
    </div>
  );
}

// ============================================================
// 5. KEYWORDS
// ============================================================
export function Keywords({ data, startFrame, durationFrames, accentColor }: any) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const items: string[] = data.items || [];
  const ac = accentColor || BRAND.teal;
  return (
    <div style={{ padding: '40px 48px', display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {items.map((item: string, i: number) => {
        const itemStart = startFrame + i * Math.floor(fps * 0.25);
        const localFrame = frame - itemStart;
        const prog = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 160 } });
        const opacity = interpolate(localFrame, [0, 6], [0, 1], { extrapolateRight: 'clamp' });
        return (
          <div key={i} style={{
            transform: `scale(${interpolate(prog, [0, 1], [0.6, 1])})`,
            opacity,
            background: ac,
            color: BRAND.white,
            fontFamily: FONTS.body,
            fontSize: 36,
            fontWeight: 700,
            padding: '12px 28px',
            borderRadius: 999,
          }}>{item}</div>
        );
      })}
    </div>
  );
}

// ============================================================
// 6. FLIP STAT
// ============================================================
export function FlipStat({ data, startFrame, durationFrames, accentColor }: any) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;
  const opacity = interpolate(localFrame, [0, 8], [0, 1], { extrapolateRight: 'clamp' });
  const ac = accentColor || BRAND.teal;
  const value: string = data.value || '0';
  const chars = value.split('');
  return (
    <div style={{ opacity, padding: '40px 48px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
        {chars.map((ch: string, i: number) => {
          const isDigit = /\d/.test(ch);
          if (!isDigit) return (
            <span key={i} style={{ fontFamily: FONTS.title, fontSize: 120, color: BRAND.white, lineHeight: 1 }}>{ch}</span>
          );
          const charStart = startFrame + i * 3;
          const prog = spring({ frame: frame - charStart, fps, config: { damping: 18, stiffness: 200 } });
          const offset = interpolate(prog, [0, 1], [80, 0]);
          return (
            <div key={i} style={{ overflow: 'hidden', height: 130 }}>
              <span style={{
                display: 'block',
                transform: `translateY(${offset}px)`,
                fontFamily: FONTS.title,
                fontSize: 120,
                color: ac,
                lineHeight: 1.08,
                fontWeight: 900,
              }}>{ch}</span>
            </div>
          );
        })}
      </div>
      <div style={{ fontFamily: FONTS.body, fontSize: 36, color: BRAND.white, marginTop: 8 }}>{data.label}</div>
      {data.sublabel && <div style={{ fontFamily: FONTS.body, fontSize: 28, color: BRAND.mint, marginTop: 4 }}>{data.sublabel}</div>}
    </div>
  );
}

// ============================================================
// 7. NUMBER ROLL
// ============================================================
export function NumberRoll({ data, startFrame, durationFrames, accentColor }: any) {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;
  const ac = accentColor || BRAND.teal;
  const progress = interpolate(localFrame, [0, durationFrames * 0.7], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const value = Math.round(interpolate(progress, [0, 1], [data.from || 0, data.to || 100]));
  const opacity = interpolate(localFrame, [0, 8], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <div style={{ opacity, padding: '40px 48px', textAlign: 'center' }}>
      <div style={{ fontFamily: FONTS.title, fontSize: 110, color: ac, fontWeight: 900 }}>
        {value}{data.suffix || ''}
      </div>
      <div style={{ fontFamily: FONTS.body, fontSize: 36, color: BRAND.white }}>{data.label}</div>
    </div>
  );
}

// ============================================================
// 8. STEPS
// ============================================================
export function Steps({ data, startFrame, durationFrames, accentColor }: any) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ac = accentColor || BRAND.teal;
  const items: Array<{ text: string; revealAtSec: number }> = data.items || [];
  return (
    <div style={{ padding: '40px 48px' }}>
      {items.map((item, i) => {
        const revealFrame = Math.round(item.revealAtSec * fps);
        const localFrame = frame - revealFrame;
        const prog = spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 130 } });
        const opacity = interpolate(localFrame, [0, 8], [0, 1], { extrapolateRight: 'clamp' });
        return (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 24,
            transform: `translateX(${interpolate(prog, [0, 1], [-40, 0])}px)`,
            opacity,
          }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: ac, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontFamily: FONTS.title, fontSize: 28, color: BRAND.white, fontWeight: 700 }}>{i + 1}</span>
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: 40, color: BRAND.white, lineHeight: 1.3, paddingTop: 8 }}>{item.text}</div>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================
// 9. CHECKLIST
// ============================================================
export function Checklist({ data, startFrame, durationFrames, accentColor }: any) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ac = accentColor || BRAND.teal;
  const items: Array<{ text: string; revealAtSec: number }> = data.items || [];
  return (
    <div style={{ padding: '40px 48px' }}>
      {items.map((item, i) => {
        const revealFrame = Math.round(item.revealAtSec * fps);
        const localFrame = frame - revealFrame;
        const checked = localFrame > 0;
        const opacity = interpolate(localFrame, [0, 8], [0, 1], { extrapolateRight: 'clamp' });
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 20, opacity }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, border: `3px solid ${ac}`, background: checked ? ac : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {checked && <span style={{ color: BRAND.white, fontSize: 28, fontWeight: 700 }}>✓</span>}
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: 38, color: BRAND.white, lineHeight: 1.3 }}>{item.text}</div>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================
// 10. COUNTDOWN
// ============================================================
export function Countdown({ data, startFrame, durationFrames, accentColor }: any) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ac = accentColor || BRAND.teal;
  const from: number = data.from || 3;
  const secPerNumber = durationFrames / from;
  const currentNum = from - Math.floor((frame - startFrame) / secPerNumber);
  const localFrame = (frame - startFrame) % Math.floor(secPerNumber);
  const prog = spring({ frame: localFrame, fps, config: { damping: 10, stiffness: 200 } });
  const scale = interpolate(prog, [0, 1], [0.4, 1]);
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <div style={{ transform: `scale(${scale})`, fontFamily: FONTS.title, fontSize: 260, color: ac, fontWeight: 900, lineHeight: 1 }}>
        {Math.max(0, currentNum)}
      </div>
    </div>
  );
}

// ============================================================
// 11. CHART BAR
// ============================================================
export function ChartBar({ data, startFrame, durationFrames, accentColor }: any) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ac = accentColor || BRAND.teal;
  const bars: Array<{ label: string; value: number; accent?: boolean }> = data.bars || [];
  const maxVal = data.maxValue || Math.max(...bars.map((b: any) => b.value)) * 1.25;
  const maxBarH = 280;
  return (
    <div style={{ padding: '32px 48px' }}>
      {data.label && <div style={{ fontFamily: FONTS.body, fontSize: 30, color: BRAND.mint, marginBottom: 24, letterSpacing: 2, textTransform: 'uppercase' }}>{data.label}</div>}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20, height: maxBarH + 60 }}>
        {bars.map((bar: any, i: number) => {
          const barStart = startFrame + i * 5;
          const localFrame = frame - barStart;
          const prog = spring({ frame: localFrame, fps, config: { damping: 16, stiffness: 100 } });
          const targetH = (bar.value / maxVal) * maxBarH;
          const barH = interpolate(prog, [0, 1], [0, targetH]);
          const color = bar.accent ? ac : BRAND.mint;
          return (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <div style={{ fontFamily: FONTS.body, fontSize: 28, color: BRAND.white, marginBottom: 8 }}>{bar.value}</div>
              <div style={{ width: '100%', height: barH, background: color, borderRadius: '8px 8px 0 0', minHeight: 4 }} />
              <div style={{ fontFamily: FONTS.body, fontSize: 26, color: 'rgba(255,255,255,0.7)', marginTop: 8, textAlign: 'center' }}>{bar.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// 12. CHART LINE
// ============================================================
export function ChartLine({ data, startFrame, durationFrames, accentColor }: any) {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;
  const ac = accentColor || BRAND.teal;
  const points: Array<{ label: string; value: number }> = data.points || [];
  const maxVal = Math.max(...points.map((p: any) => p.value)) * 1.2;
  const W = 900, H = 280;
  const progress = interpolate(localFrame, [0, durationFrames * 0.8], [0, 1], { extrapolateRight: 'clamp' });
  const visiblePoints = Math.max(2, Math.ceil(progress * points.length));
  const pts = points.slice(0, visiblePoints);
  const stepX = W / (points.length - 1);
  const getY = (v: number) => H - (v / maxVal) * H;
  const pathD = pts.map((p: any, i: number) => `${i === 0 ? 'M' : 'L'}${i * stepX},${getY(p.value)}`).join(' ');
  const areaD = `${pathD} L${(pts.length - 1) * stepX},${H} L0,${H} Z`;
  const opacity = interpolate(localFrame, [0, 8], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <div style={{ opacity, padding: '32px 48px' }}>
      {data.label && <div style={{ fontFamily: FONTS.body, fontSize: 30, color: BRAND.mint, marginBottom: 16, letterSpacing: 2, textTransform: 'uppercase' }}>{data.label}</div>}
      <svg width={W} height={H + 40} viewBox={`0 0 ${W} ${H + 40}`}>
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={ac} stopOpacity="0.4" />
            <stop offset="100%" stopColor={ac} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#lineGrad)" />
        <path d={pathD} fill="none" stroke={ac} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
        {pts.map((p: any, i: number) => (
          <g key={i}>
            <circle cx={i * stepX} cy={getY(p.value)} r={8} fill={ac} />
            <text x={i * stepX} y={H + 30} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize={24} fontFamily={FONTS.body}>{p.label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// ============================================================
// 13. RING STAT
// ============================================================
export function RingStat({ data, startFrame, durationFrames, accentColor }: any) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rings: Array<{ value: number; label: string; color?: string }> = data.rings || [];
  const ac = accentColor || BRAND.teal;
  const ringColors = [ac, BRAND.mint, BRAND.coral];
  const cx = 180, cy = 180;
  return (
    <div style={{ padding: '32px 48px' }}>
      {data.label && <div style={{ fontFamily: FONTS.body, fontSize: 30, color: BRAND.mint, marginBottom: 20, letterSpacing: 2, textTransform: 'uppercase' }}>{data.label}</div>}
      <div style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
        <svg width={360} height={360}>
          {rings.map((ring: any, i: number) => {
            const r = 140 - i * 40;
            const circumference = 2 * Math.PI * r;
            const localFrame = frame - startFrame - i * 8;
            const prog = spring({ frame: localFrame, fps, config: { damping: 18, stiffness: 80 } });
            const dash = interpolate(prog, [0, 1], [0, (ring.value / 100) * circumference]);
            const color = ring.color || ringColors[i] || ac;
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={28} />
                <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={28}
                  strokeDasharray={`${dash} ${circumference}`}
                  strokeLinecap="round"
                  transform={`rotate(-90 ${cx} ${cy})`} />
              </g>
            );
          })}
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {rings.map((ring: any, i: number) => {
            const color = ring.color || ringColors[i] || ac;
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: color }} />
                <div>
                  <div style={{ fontFamily: FONTS.title, fontSize: 44, color: BRAND.white, fontWeight: 700 }}>{ring.value}%</div>
                  <div style={{ fontFamily: FONTS.body, fontSize: 28, color: 'rgba(255,255,255,0.65)' }}>{ring.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 14. LOWER THIRD
// ============================================================
export function LowerThird({ data, startFrame, durationFrames, accentColor }: any) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ac = accentColor || BRAND.teal;
  const localFrame = frame - startFrame;
  const prog = spring({ frame: localFrame, fps, config: { damping: 18, stiffness: 120 } });
  const x = interpolate(prog, [0, 1], [-500, 0]);
  const opacity = interpolate(localFrame, [0, 6], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <div style={{ opacity, transform: `translateX(${x}px)`, display: 'flex', alignItems: 'center', gap: 20, padding: '32px 48px' }}>
      <div style={{ width: 8, height: 80, background: ac, borderRadius: 4 }} />
      <div>
        <div style={{ fontFamily: FONTS.title, fontSize: 48, color: BRAND.white, fontWeight: 700 }}>{data.name}</div>
        <div style={{ fontFamily: FONTS.body, fontSize: 32, color: ac }}>{data.role}</div>
      </div>
    </div>
  );
}

// ============================================================
// 15. NOTIFICATION
// ============================================================
export function Notification({ data, startFrame, durationFrames }: any) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - startFrame;
  const prog = spring({ frame: localFrame, fps, config: { damping: 20, stiffness: 180 } });
  const y = interpolate(prog, [0, 1], [-120, 0]);
  const opacity = interpolate(localFrame, [0, 6], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <div style={{
      opacity, transform: `translateY(${y}px)`,
      background: 'rgba(255,255,255,0.95)',
      borderRadius: 20, padding: '20px 28px',
      margin: '0 40px',
      display: 'flex', gap: 20, alignItems: 'flex-start',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    }}>
      <div style={{ width: 52, height: 52, borderRadius: 14, background: BRAND.teal, flexShrink: 0 }} />
      <div>
        <div style={{ fontFamily: FONTS.body, fontSize: 28, fontWeight: 700, color: BRAND.ink }}>{data.appName}</div>
        <div style={{ fontFamily: FONTS.body, fontSize: 32, fontWeight: 700, color: BRAND.ink, marginTop: 4 }}>{data.title}</div>
        <div style={{ fontFamily: FONTS.body, fontSize: 28, color: 'rgba(31,58,64,0.7)', marginTop: 4 }}>{data.body}</div>
      </div>
    </div>
  );
}

// ============================================================
// 16. BADGE
// ============================================================
export function Badge({ data, startFrame, durationFrames, accentColor }: any) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ac = accentColor || BRAND.coral;
  const localFrame = frame - startFrame;
  const prog = spring({ frame: localFrame, fps, config: { damping: 10, stiffness: 220 } });
  const scale = interpolate(prog, [0, 1], [0.4, 1]);
  const opacity = interpolate(localFrame, [0, 6], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 48px' }}>
      <div style={{
        transform: `scale(${scale})`, opacity,
        background: ac, borderRadius: 999,
        padding: '20px 56px',
        fontFamily: FONTS.body, fontSize: 44, fontWeight: 800,
        color: BRAND.white, letterSpacing: 2, textTransform: 'uppercase',
      }}>
        {data.emoji && <span style={{ marginRight: 12 }}>{data.emoji}</span>}
        {data.text}
      </div>
    </div>
  );
}

// ============================================================
// 17. STAT
// ============================================================
export function Stat({ data, startFrame, durationFrames, accentColor }: any) {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;
  const ac = accentColor || BRAND.teal;
  const opacity = interpolate(localFrame, [0, 8], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <div style={{ opacity, padding: '40px 48px', textAlign: 'center' }}>
      <div style={{ fontFamily: FONTS.title, fontSize: 120, color: ac, fontWeight: 900 }}>{data.value}</div>
      <div style={{ fontFamily: FONTS.body, fontSize: 38, color: BRAND.white, marginTop: 8 }}>{data.label}</div>
    </div>
  );
}

// ============================================================
// DISPATCHER – sceglie il componente giusto dal type
// ============================================================
export function AnimationDispatcher({ animation, accentColor }: { animation: any; accentColor: string }) {
  const { fps } = useVideoConfig();
  const startFrame = Math.round(animation.startSec * fps);
  const durationFrames = Math.round(animation.durationSec * fps);
  const props = { data: animation.data, startFrame, durationFrames, accentColor };

  switch (animation.type) {
    case 'quote':        return <Quote {...props} />;
    case 'typewriter':   return <Typewriter {...props} />;
    case 'text_reveal':  return <TextReveal {...props} />;
    case 'glitch_text':  return <GlitchText {...props} />;
    case 'keywords':     return <Keywords {...props} />;
    case 'flip_stat':    return <FlipStat {...props} />;
    case 'number_roll':  return <NumberRoll {...props} />;
    case 'steps':        return <Steps {...props} />;
    case 'checklist':    return <Checklist {...props} />;
    case 'countdown':    return <Countdown {...props} />;
    case 'chart_bar':    return <ChartBar {...props} />;
    case 'chart_line':   return <ChartLine {...props} />;
    case 'ring_stat':    return <RingStat {...props} />;
    case 'lower_third':  return <LowerThird {...props} />;
    case 'notification': return <Notification {...props} />;
    case 'badge':        return <Badge {...props} />;
    case 'stat':         return <Stat {...props} />;
    default:             return null;
  }
}
