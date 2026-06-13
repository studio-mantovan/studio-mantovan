# Brand Colors — Studio Mantovan

*Correlati: [[landing-page-style]] · [[tecniche-design]]*

---

## Palette principale

### Blu Teal (colore primario)
Usato per: figura del logo, testo "STUDIO MANTOVAN", elementi principali UI

| Formato | Valore |
|---------|--------|
| HEX     | `#1A9EC9` |
| RGB     | `rgb(26, 158, 201)` |
| HSL     | `hsl(197, 77%, 45%)` |

### Verde Menta (colore secondario)
Usato per: cerchio del logo, testo "FISIOTERAPIA IN MOVIMENTO", accenti e dettagli

| Formato | Valore |
|---------|--------|
| HEX     | `#5DBFB0` |
| RGB     | `rgb(93, 191, 176)` |
| HSL     | `hsl(173, 43%, 56%)` |

---

## Utilizzo nei progetti web

### Tailwind — configurazione colori
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      brand: {
        primary:   '#1A9EC9', // blu teal
        secondary: '#5DBFB0', // verde menta
      }
    }
  }
}
```

### CSS custom properties
```css
:root {
  --color-primary:   #1A9EC9;
  --color-secondary: #5DBFB0;
}
```

---

## File logo disponibili

| File | Formato | Uso consigliato |
|------|---------|-----------------|
| `logo.pdf` | PDF vettoriale | Stampa, documenti |
| `logo.ai`  | Adobe Illustrator | Editing vettoriale |
| `logo.eps` | EPS vettoriale | Compatibilità universale |

---

## Note di utilizzo

- Sfondo preferito: bianco o molto chiaro — il logo ha sfondo trasparente
- Non distorcere le proporzioni del logo
- Non cambiare i colori del logo
- Mantenere area di rispiro intorno al logo pari almeno all'altezza del cerchio
