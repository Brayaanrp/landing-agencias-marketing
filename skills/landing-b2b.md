# Skill — Landing de ventas directa para B2B en español
### "Reboot / EduKami sales-page system"

Sistema completo para construir landings de venta directa en español, estilo agencia/consultora B2B canaria. Tono confrontacional pero profesional. Visual cream-navy-teal con acentos mono. Diseñada para conversión por llamada, no por click-and-pay.

---

## 1. Cuándo usar esta skill

- Landing de servicio B2B en español (agencias, consultoras, formación, SaaS).
- Funnel objetivo: **una sola llamada / demo / diagnóstico**, no e-commerce.
- Cliente con autoridad institucional real (clientes logo-able, números formados, casos).
- Producto que tiene una **calculadora de oportunidad** o un **diagnóstico personalizable**.
- Necesitas que se sienta serio y "europeo" — no SaaS-bro americano, no startup pastel.

**No usar para:** apps de consumo, e-commerce puro, marcas lifestyle, gaming.

---

## 2. Sistema de marca

### 2.1 Paleta (exacta)
```css
--cream:#FAF9F5;     /* fondo principal — NUNCA blanco puro */
--navy:#172448;      /* secciones oscuras, logos, output panels */
--ink:#12183A;       /* texto principal sobre cream */
--teal:#2DD4AC;      /* acento — CTA, highlight, ticks */
--teal-ink:#0E3F33;  /* texto sobre teal claro (price pills, badges) */
--white:#FFFFFF;     /* tarjetas sobre cream */
--line:rgba(18,24,58,.10);
--line-strong:rgba(18,24,58,.16);
--muted:rgba(18,24,58,.62);
--muted-on-navy:rgba(255,255,255,.68);
--line-on-navy:rgba(255,255,255,.12);
```

**Reglas de color:**
- Fondo de página = SIEMPRE `--cream`. Nunca blanco puro.
- Tarjetas = blanco puro `#FFFFFF` con borde `--line` 1px y radius 12px. Sin sombra.
- Secciones "premium" o de output = fondo `--navy` con texto blanco.
- Teal SOLO en: CTA primario, eyebrow dot, accent highlight tras keyword, ticks de slider, price pills, "diamond" markers (✦), case study tag.
- Prohibido inventar colores nuevos. Si necesitas un tono más, usa `color-mix(in oklch, ...)` sobre los existentes.

### 2.2 Tipografía
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```
- **Inter** para todo el texto editorial (400/500/700).
- **JetBrains Mono** para metadata, eyebrows, ticks, version stamps, números técnicos, "→ ESFUERZO TUYO: 2 MIN", clasificaciones tipo "PDF · 4 PÁG".
- Headlines: `font-weight:700; letter-spacing:-.02em; text-wrap:balance`.
- Cuerpo: `font-weight:400; line-height:1.55; text-wrap:pretty`.
- Mono SIEMPRE en MAYÚSCULAS con `letter-spacing:.14em` o `.16em` cuando es eyebrow/tag.

### 2.3 Escala
- H1: `clamp(40px,5.4vw,68px)`, line-height 1.04
- H2: `clamp(32px,3.6vw,46px)`, line-height 1.08
- H3: 18-24px según contexto
- Cuerpo: 16-19px
- Eyebrow mono: 11-13px, tracking generoso
- Mínimo absoluto: 13px

### 2.4 Espaciado
- `section { padding: 96px 0 }` — generoso, deja respirar.
- `.wrap` máx 1180px, padding lateral 32px.
- `.wrap-narrow` máx 980px para CTA finales centrados.
- Gap entre secciones del grid: 64px en desktop, 40px en móvil.

### 2.5 Radios y bordes
- Radius tarjetas: 12px
- Radius botones: 12-14px
- Radius pills/tags: 999px
- Radius price-pills: 6px
- Bordes: 1px sólido `--line`. Nunca 2px, nunca sombras. Sólo HiperDino-style backgrounds permitidos en logos.

---

## 3. Anatomía obligatoria de la landing

Orden NO negociable de secciones:

```
0. Top strip (navy, claim de autoridad)
1. Nav (sticky, sobre cream)
2. Hero (1.4fr / .9fr — copy + stat card)
3. Calculadora interactiva ("Radar de Oportunidad IA™")
4. Antes / Ahora (tabla comparativa con strike-through)
5. Cómo funciona (3 pasos numerados)
6. Entregables ("Lo que te llevas en X minutos") — lista de 5 items
7. Autoridad (Quiénes somos + logo marquee infinito)
8. CTA final (navy, centrado)
9. Footer (navy, minimal)
```

### 3.1 Top strip
- Fondo `--navy`, texto `#E7ECF7`, font-size 13px.
- Dot teal pulsante a la izquierda con shadow halo:
  `box-shadow: 0 0 0 3px rgba(45,212,172,.18)`.
- Contiene: marca + lista de clientes/credenciales separados por `·` con opacidad .45.

### 3.2 Nav
- Sticky, top:0, fondo cream, border-bottom 1px.
- Logo + wordmark + small kicker ("Reboot Academy") separado por divider vertical.
- CTA pill teal a la derecha, todos los demás links font-weight:500 opacity:.78.

### 3.3 Hero
- Grid 1.4fr / .9fr; en mobile colapsa a 1fr.
- Chip eyebrow arriba ("Para agencias de marketing en España").
- H1 con UNA palabra/frase resaltada con highlight teal background:
  ```css
  background: linear-gradient(transparent 62%, rgba(45,212,172,.55) 62% 92%, transparent 92%);
  ```
- Sub 21px font-weight:500. Micro 15px muted.
- CTA primario grande + trust line en mono ("60 SEG · 3 DATOS · SIN REGISTRO").
- Stat card lateral: 2x2 grid de números grandes (38px, weight 700, letter-spacing -.03em) + cita + atribución mono.

### 3.4 Calculadora (la pieza estrella)
- Tarjeta blanca, grid 1.15fr / 1fr.
- **Izquierda**: inputs sobre blanco.
  - Sliders custom con thumb teal 22px, borde blanco 3px, halo gris.
  - Output value de cada slider en pill teal pequeño (`rgba(45,212,172,.18)` bg, padding 4px 10px, radius 6px, mono).
  - Selector de opciones = radios ocultos + labels que se vuelven `--ink` al checked.
  - Ticks debajo del slider en mono pequeño con valores extremos.
- **Derecha**: panel `--navy` con output gigante.
  - Label mono teal arriba.
  - Número resultado: `clamp(48px,6.5vw,76px)`, weight 700, tabular-nums.
  - Breakdown row: 3 columnas con divisores `--line-on-navy`.
  - CTA stretch al fondo + micro disclaimer.
- Fórmula default: `clientes × ticket × 0.25 × 12 × multiplicador_sector`.
- Multiplicadores típicos por sector: 0.90–1.22 (no inventar números absurdos).

### 3.5 Antes / Ahora
- Tabla 2 columnas con header row tintado `rgba(18,24,58,.03)`.
- Header "AHORA" lleva dot teal pequeño antes del texto.
- Celdas "Antes" en muted con `<span class="strike">` (línea horizontal a través).
- Celdas "Ahora" en `--ink` weight 500 + **price-tag pill** teal con el precio:
  ```css
  .price-tag {
    color: var(--teal-ink);
    background: rgba(45,212,172,.16);
    padding: 3px 8px; border-radius: 6px;
    font-weight: 700; font-size: 14px;
  }
  ```
- Footer corto debajo, muted, una línea.

### 3.6 Cómo funciona
- Fondo `--cream` con border-top.
- Grid 3 columnas (1fr en móvil).
- Cada step: tarjeta blanca con número en pill teal (`01`, `02`, `03`) tipo mono.
- Tag final en cada step con border-top dashed: `→ ESFUERZO TUYO: 2 MIN`.

### 3.7 Entregables (AI Revenue Kit)
- Grid `.9fr / 1.1fr`, columna izquierda sticky.
- Lista vertical con divisores `--line` entre items.
- Cada item: grid `auto 28px 1fr auto`:
  - Número mono (01, 02...)
  - Diamond `✦` en teal
  - Título + descripción
  - Meta mono a la derecha ("PDF · 4 PÁG", "XLSX")
- Badge "AI Revenue Kit™" con dot teal en columna izquierda.

### 3.8 Autoridad
- Columna única max-width 780px.
- Eyebrow + H2 + 2-3 párrafos con `<strong>` para nombres propios.
- Un párrafo final muted: "No somos una consultora de Madrid..."
- **Logo marquee infinito** FULL-WIDTH (fuera de `.wrap`):
  ```css
  .marquee {
    overflow: hidden;
    mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
  }
  .marquee-track {
    display: flex; gap: 64px; width: max-content;
    animation: marquee 48s linear infinite;
  }
  .marquee:hover .marquee-track { animation-play-state: paused }
  .marquee img {
    height: 38px; filter: grayscale(1) opacity(.55);
    transition: filter .2s ease;
  }
  .marquee img:hover { filter: grayscale(0) opacity(1) }
  @keyframes marquee {
    from { transform: translateX(0) }
    to { transform: translateX(-50%) }
  }
  ```
- Duplicar el set de logos en el track para loop seamless.
- Respetar `prefers-reduced-motion`: desactivar animación y permitir wrap.
- Algunos logos necesitan menor altura (`class="logo-tight" → 32px`) si tienen fondo o decoración pesada.

### 3.9 CTA final
- Fondo `--navy`, 120px padding vertical, texto centrado.
- H2 gigante. Sub 19px muted-on-navy.
- CTA grande teal.
- Meta row de pills outlined: una en teal con dot pulsante ("X plazas disponibles"), las otras neutras ("20 minutos", "Sin compromiso").

### 3.10 Footer
- Navy mínimo. Marca + emails con `·` separador opacidad .4 + disclaimer mono pequeño.

---

## 4. Componentes reutilizables

### 4.1 Eyebrow
```html
<span class="eyebrow"><span class="bar"></span>Sección 01 · Diagnóstico</span>
```
```css
.eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; letter-spacing: .14em; text-transform: uppercase;
  color: var(--muted); font-weight: 500;
}
.eyebrow .bar { width: 24px; height: 1px; background: var(--ink); opacity: .4 }
```

### 4.2 Chip (pre-headline)
- Pill outlined sobre blanco con dot teal antes del texto. Mono 11px tracking .14em.

### 4.3 Botón primario
```css
.btn {
  background: var(--teal); color: var(--ink);
  padding: 18px 26px; border-radius: 12px;
  font-weight: 700; font-size: 16px;
  border: 1px solid rgba(18,24,58,.06);
  transition: transform .15s ease, background .15s ease;
}
.btn:hover { background: #3FE0BB; transform: translateY(-1px) }
.btn .arr { font-family: 'JetBrains Mono', monospace; font-weight: 500 }
```
Flecha `→` final SIEMPRE en mono.

### 4.4 Stat
```html
<div class="stat">
  <div class="n">1.600+</div>
  <div class="l">profesionales formados en Canarias</div>
</div>
```
Número 38px weight 700 letter-spacing -.03em line-height:1. Label 13px muted.

### 4.5 Highlight inline en headlines
```html
<span class="accent">miles de euros</span>
```
Highlight teal con linear-gradient — sólo UNA frase por headline.

### 4.6 Logo SVG hexagonal (para EduKami o similar)
```html
<svg width="34" height="38" viewBox="0 0 34 38" fill="none">
  <defs>
    <linearGradient id="ekHex" x1="0" y1="38" x2="34" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#2DD4AC"/>
      <stop offset=".55" stop-color="#5BA8FF"/>
      <stop offset="1" stop-color="#7C6BFF"/>
    </linearGradient>
  </defs>
  <path d="M17 1.5 L31.7 9.75 V28.25 L17 36.5 L2.3 28.25 V9.75 Z" fill="url(#ekHex)"/>
  <g stroke="#FFFFFF" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" fill="none">
    <path d="M17 9.6 L24.2 13.7 L17 17.8 L9.8 13.7 Z"/>
    <path d="M9.8 13.7 V22 L17 26.1 V17.8"/>
    <path d="M24.2 13.7 V22 L17 26.1"/>
  </g>
</svg>
```
Único gradiente permitido en toda la página. El cubo isométrico se mantiene fino (1.6px stroke) y blanco.

---

## 5. Patrones de copy

### 5.1 Estructura del headline
**Fórmula:** [Tu cliente/audiencia] + [está perdiendo X] + [y no lo sabe / sin saberlo].
Ej: "Tu agencia está dejando **miles de euros sobre la mesa** cada año. Y ni lo sabe."
- Cortar la frase con punto. La segunda frase es golpe seco.
- Resaltar UNA pieza con highlight teal — la cifra o el verbo de pérdida.

### 5.2 Sub-headline
Una sola línea, presente continuo, framing competitivo:
"Tus clientes ya están buscando X. Si no se lo ofreces tú, se lo ofrece otra."

### 5.3 Micro
La promesa concreta de la calculadora:
"Descubre en 60 segundos cuánto dinero puede generar tu agencia sin contratar a nadie nuevo."

### 5.4 Trust line bajo CTA
Tres bullets mono separados por `·`: tiempo, datos, fricción.
Ej: `60 SEG · 3 DATOS · SIN REGISTRO`

### 5.5 Eyebrows con numeración
`Sección 01 · Diagnóstico`, `Sección 02 · Movimiento del mercado`, `Sección 03 · Implementación`. Numerar refuerza la sensación de "sistema".

### 5.6 Marcas registradas
Todo método propietario lleva ™ en la primera mención y refuerza el "no es solo formación, es un sistema":
- Radar de Oportunidad IA™
- AI Revenue Kit™

### 5.7 Reglas de tono
- Tú directo (no usted, no vosotros).
- Frases cortas. Verbos fuertes.
- Cero corporate-speak ("sinergias", "soluciones holísticas").
- Cero condicionales blandos ("podríamos", "tal vez").
- Datos siempre con unidad y contexto ("400-800€ / cliente", no "ingresos jugosos").
- Una pizca de provocación, no insulto.

### 5.8 Anti-patrones
- ❌ Headers en pregunta blanda ("¿Sabes que la IA puede ayudarte?")
- ❌ Emojis en cualquier sitio
- ❌ "Descubre el poder de..."
- ❌ Iconos genéricos (rocket, lightbulb, gear)
- ❌ Stats inventados sin contexto ("97% de satisfacción")

---

## 6. Interactividad

### 6.1 Calculadora — JS mínimo
```js
const SECTOR_MULT = {
  hosteleria: 0.95, retail: 1.00, profesionales: 1.18,
  inmobiliaria: 1.10, salud: 1.22, otros: 0.90,
};
function compute() {
  const c = +$('clients').value;
  const t = +$('ticket').value;
  const sector = (document.querySelector('input[name=sector]:checked') || {}).value || 'retail';
  const mult = SECTOR_MULT[sector] || 1;
  const result = c * t * 0.25 * 12 * mult;
  $('result').textContent = new Intl.NumberFormat('es-ES').format(Math.round(result)) + ' €';
  // ... rebuild breakdown
}
```
Listeners en `input` para sliders (live), `change` para radios. `compute()` al cargar.

### 6.2 Smooth scroll
Override de clicks en `a[href^="#"]` con `window.scrollTo({top, behavior:'smooth'})` — offset -64 para nav sticky. NUNCA `scrollIntoView`.

### 6.3 Pulse animation (top strip dot, "plazas disponibles")
```css
@keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:.4 } }
animation: pulse 1.6s ease-in-out infinite;
```

---

## 7. Receta del proyecto (orden de construcción)

1. **Preguntar primero** — público, sectores, claims de autoridad reales, logos disponibles, nombre del método propietario (™), oferta y precio del CTA final, ticket medio del cliente del cliente.
2. **Confirmar paleta y tipos** — si no tienen design system propio, usar éste tal cual.
3. **Esqueleto HTML completo en un solo archivo** — todas las secciones en orden, copy lorem-ipsum si hace falta.
4. **CSS de tokens primero**, luego componente por componente.
5. **Calculadora** — fórmula consensuada con el cliente antes de escribir JS.
6. **Logos reales** — pedir PNGs/SVGs. Si no, usar text placeholders pero NUNCA tiles cuadrados blancos tipo sponsor wall. Por defecto: marquee grayscale full-width.
7. **Pasada de copy** — ningún headline genérico, ningún CTA "Saber más".
8. **Standalone bundle** — incluir thumbnail SVG iconográfico del hexágono con gradiente para el splash del bundle.

---

## 8. Checklist final

Antes de entregar:
- [ ] Sin emojis en ningún sitio
- [ ] Sin scrollIntoView en el JS
- [ ] Calculadora reacciona a los 3 inputs (no sólo 2)
- [ ] Marquee respeta `prefers-reduced-motion`
- [ ] Hover states en CTA, logos, links del nav
- [ ] Mobile: hero colapsa, calculadora colapsa, marquee sigue funcionando
- [ ] Todos los ™ en métodos propietarios
- [ ] Eyebrows numerados consistentes (Sección 01, 02, 03...)
- [ ] Highlight teal SÓLO una vez en el H1
- [ ] Logo SVG inline (no PNG) para nitidez
- [ ] Top strip lleva dot teal pulsante
- [ ] Footer minimal, nada de columnas de links de SaaS

---

## 9. Variantes para explorar (si el cliente quiere alternativas)

- **Hero compacto**: calculadora directamente arriba a la derecha del H1, sin stat card.
- **Calculadora invertida**: output a la izquierda (más grande), inputs a la derecha.
- **Sección de testimonio video**: reemplaza el caso reciente con un thumbnail de video + cita grande.
- **Tema dark**: invertir cream y navy, mantener teal como acento. Probar antes de comprometer.
- **Versión sin ™**: para clientes que no quieran sonar propietarios, sustituir por nombres descriptivos en lower-case ("radar de oportunidad").

---

*Sistema construido para EduKami / Reboot Academy — Mayo 2026. Reutilizable para cualquier servicio B2B canario/español con autoridad institucional.*
