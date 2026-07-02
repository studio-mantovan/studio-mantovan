// ============================================================
// TYPES – Studio Mantovan Reels Animator
// ============================================================

export type AnimationType =
  // Testo
  | 'quote'
  | 'typewriter'
  | 'text_reveal'
  | 'glitch_text'
  | 'keywords'
  // Numeri
  | 'flip_stat'
  | 'number_roll'
  // Sequenze
  | 'steps'
  | 'checklist'
  | 'countdown'
  // Grafici
  | 'chart_bar'
  | 'chart_line'
  | 'ring_stat'
  // Social & branding
  | 'lower_third'
  | 'notification'
  | 'badge'
  | 'stat';

export interface TranscriptSegment {
  start: number;   // secondi
  end:   number;
  text:  string;
}

export interface BarItem {
  label:  string;
  value:  number;
  accent?: boolean;
}

export interface RingItem {
  value:  number;       // 0-100
  label:  string;
  color?: string;       // override colore anello
}

export interface StepItem {
  text:       string;
  revealAtSec: number; // secondo esatto in cui appare
}

export interface ChecklistItem {
  text:        string;
  revealAtSec: number;
}

export interface LinePoint {
  label: string;
  value: number;
}

// Data per ogni tipo di animazione
export type AnimationData =
  | { type: 'quote';       text: string; accent?: boolean }
  | { type: 'typewriter';  text: string }
  | { type: 'text_reveal'; lines: string[] }
  | { type: 'glitch_text'; text: string }
  | { type: 'keywords';    items: string[] }
  | { type: 'flip_stat';   value: string; label: string; sublabel?: string }
  | { type: 'number_roll'; from: number; to: number; label: string; suffix?: string }
  | { type: 'steps';       items: StepItem[] }
  | { type: 'checklist';   items: ChecklistItem[] }
  | { type: 'countdown';   from: number }
  | { type: 'chart_bar';   label: string; bars: BarItem[]; maxValue?: number }
  | { type: 'chart_line';  label: string; points: LinePoint[] }
  | { type: 'ring_stat';   label: string; rings: RingItem[] }
  | { type: 'lower_third'; name: string; role: string }
  | { type: 'notification'; appName: string; title: string; body: string }
  | { type: 'badge';       text: string; emoji?: string }
  | { type: 'stat';        value: string; label: string };

export interface Animation {
  type:        AnimationType;
  startSec:    number;
  durationSec: number;
  data:        Record<string, unknown>;
}

export interface ReelProps {
  videoSrc:    string;
  brandHandle?: string;
  accentColor?: string;        // default: #1A9EC9 (teal brand)
  keywords?:   string[];
  durationSec?: number;
  transcript:  TranscriptSegment[];
  animations:  Animation[];
}