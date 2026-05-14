# Landing B2B — Reboot Academy / EduKami

Landing de ventas directa B2B en espanol para agencias de marketing en Canarias y Espana.
Producto: servicios de IA aplicada (Radar de Oportunidad IA, AI Revenue Kit).
Stack: HTML / CSS / JS vanilla. Deploy en Vercel.

---

## Regla obligatoria

Antes de modificar o generar cualquier landing, leer `/skills/landing-b2b.md` completamente y respetar su design system sin excepciones.

---

## Reglas de trabajo

1. **No romper la estructura de secciones** definida en la skill (Top strip > Nav > Hero > Calculadora > Antes/Ahora > Como funciona > Entregables > Autoridad > CTA final > Footer).
2. **Mantener la paleta CSS exacta**: variables `--cream`, `--navy`, `--teal`, `--ink`, `--teal-ink`, `--white`, `--line`, `--line-strong`, `--muted`, `--muted-on-navy`, `--line-on-navy`. Prohibido inventar colores nuevos.
3. **No anadir emojis, iconos genericos ni colores nuevos.** Sin rockets, lightbulbs, gears. Sin "Descubre el poder de...".
4. **El archivo de salida siempre es `index.html` autocontenido** (CSS y JS inline), salvo que se indique explicitamente que se separen en archivos externos.
5. **No separar CSS ni JS en archivos externos** salvo instruccion explicita del usuario.
6. **Tipografia**: Inter (400/500/700) + JetBrains Mono (400/500). Nunca otras fuentes.
7. **Tono de copy**: tu directo, frases cortas, verbos fuertes, cero corporate-speak, datos con unidad y contexto.

---

## Flujo de adaptacion para campanas nuevas

Cuando se pida clonar o adaptar la landing para una campana nueva, **preguntar primero**:

- Publico objetivo (sector, tamano, perfil del decisor)
- Ciudad / zona geografica
- Nombre del metodo propietario (con TM)
- Oferta del CTA (que se lleva el lead, en cuanto tiempo)
- Ticket medio del cliente del cliente

No generar nada hasta tener estos 5 datos.

---

## Deploy

El proyecto usa **Vercel**. No tocar `vercel.json` salvo instruccion explicita del usuario.

---

## Estructura del proyecto

```
index.html          — Landing principal (actualmente con CSS/JS externos)
css/styles.css      — Design system completo
js/main.js          — Calculadora + UI logic
assets/logos/       — Logos PNG para el marquee
skills/landing-b2b.md — Skill completa con design system y anatomia
vercel.json         — Config de Vercel (no tocar)
```
