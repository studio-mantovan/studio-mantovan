// ============================================================
// DESIGN TOKENS – Studio Mantovan
// ============================================================

export const BRAND = {
  teal:   '#1A9EC9',   // primario
  mint:   '#5DBFB0',   // secondario
  cream:  '#F5F0EB',   // sfondo chiaro
  coral:  '#E8503A',   // accento caldo
  ink:    '#1F3A40',   // testo scuro
  white:  '#FFFFFF',
  black:  '#000000',
};

// Font: Fraunces (serif, titoli/quote) e Archivo (body/label)
// Caricati via Google Fonts nel Root component
export const FONTS = {
  title:  'Fraunces, serif',
  body:   'Archivo, sans-serif',
};

// Dimensioni reel verticale 1080×1920 @30fps
export const REEL = {
  width:  1080,
  height: 1920,
  fps:    30,
};

// Layout B – split: 40% alto animazioni / 60% basso video
export const SPLIT = {
  topHeight:    768,   // 40% di 1920
  bottomHeight: 1152,  // 60% di 1920
};