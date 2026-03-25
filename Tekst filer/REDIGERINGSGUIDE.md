# 🎨 GUIDE TIL AT REDIGERE DIN BARBERSHOP HJEMMESIDE

Denne guide hjælper dig med at ændre farver, tekster, priser og meget mere - uden at ødelægge noget!

---

## 📚 INDHOLDSFORTEGNELSE

1. [Hvor finder jeg hvad?](#hvor-finder-jeg-hvad)
2. [Ændre farver](#ændre-farver)
3. [Ændre tekster](#ændre-tekster)
4. [Ændre priser](#ændre-priser)
5. [Tilføje/fjerne tjenester](#tilføjefjerne-tjenester)
6. [Ændre kontaktinfo](#ændre-kontaktinfo)
7. [Almindelige problemer](#almindelige-problemer)

---

## 🗺️ HVOR FINDER JEG HVAD?

Filen er opdelt i 3 hovedsektioner:

### 1. `<style>` (linje 12-560)
**HER ÆNDRER DU FARVER OG UDSEENDE**
- CSS variabler (linje 11-20): Farver og skrifttyper
- Knapper (linje 124-159): Knap-styling
- Sektioner: Hero, About, Services, Location, Contact

### 2. `<body>` (linje 562-721)
**HER ÆNDRER DU TEKSTER OG INDHOLD**
- Hero (linje 564-576): Forsiden
- About (linje 579-594): "Om os" sektion
- Services (linje 597-634): Prisliste
- Location (linje 637-677): Adresse og kort
- Contact (linje 680-714): Kontaktinfo
- Footer (linje 717-721): Bundtekst

### 3. `<script>` (linje 723-775)
**HER ER JAVASCRIPT-KODEN**
- Smooth scroll (linje 734-753)
- Scroll animationer (linje 755-775)

---

## 🎨 ÆNDRE FARVER

**Find linje 11-20** og se CSS variablerne:

```css
:root {
    --color-warm-black: #1a1612;    /* ← ÆNDRE HER */
    --color-warm-cream: #f5f1eb;    /* ← ÆNDRE HER */
    --color-terracotta: #c85a3e;    /* ← ÆNDRE HER */
}
```

### Hvad bruges hvad til?

| Variabel | Bruges til | Eksempel farve |
|----------|-----------|----------------|
| `--color-warm-black` | Header baggrund, footer, mørke sektioner | #1a1612 (mørk brun-sort) |
| `--color-warm-cream` | Lyse baggrunde, lys tekst | #f5f1eb (beige) |
| `--color-terracotta` | Knapper, accenter, hover-effekter | #c85a3e (orange-rød) |
| `--color-warm-white` | Tekst på mørk baggrund | #fdfcfa (næsten hvid) |

### 💡 TIP: Få en ny farvekode
Brug https://coolors.co eller https://colorhunt.co

**EKSEMPEL: Skift til blå tema**
```css
:root {
    --color-warm-black: #1a2332;    /* Mørkeblå */
    --color-warm-cream: #e8f1f5;    /* Lys blå */
    --color-terracotta: #4a90e2;    /* Blå accent */
}
```

---

## ✏️ ÆNDRE TEKSTER

### Forsiden (Hero)

**Find linje 568-573:**

```html
<div class="hero-badge">Est. 2018 · Accra, Ghana</div>  ← LILLE TEKST
<h1>Sharp<br>Cuts</h1>                                  ← STOR OVERSKRIFT
<p class="hero-subtitle">Where precision meets style...</p>  ← BESKRIVELSE
```

**Eksempel på ændring:**
```html
<div class="hero-badge">Siden 2020 · København</div>
<h1>Style<br>Lounge</h1>
<p class="hero-subtitle">Din lokale frisør i hjertet af København.</p>
```

### Om os sektion

**Find linje 583-592:**

```html
<h2>More Than Just a Haircut</h2>
<p>At Sharp Cuts, we believe...</p>
```

Bare skriv din egen tekst her!

---

## 💰 ÆNDRE PRISER

**Find linje 602-631** - her er alle tjeneste-kort:

```html
<div class="service-card">
    <div class="service-name">Classic Haircut</div>         ← ÆNDRE NAVN HER
    <div class="service-price">GH₵30</div>                  ← ÆNDRE PRIS HER
    <div class="service-description">Professional cut...</div>  ← ÆNDRE BESKRIVELSE HER
</div>
```

**Eksempel:**
```html
<div class="service-card">
    <div class="service-name">Herreklip</div>
    <div class="service-price">350 kr.</div>
    <div class="service-description">Professionel klipning tilpasset din stil.</div>
</div>
```

---

## ➕ TILFØJE/FJERNE TJENESTER

### Tilføj en ny tjeneste:

**Find linje 631** (efter sidste tjeneste) og indsæt:

```html
<div class="service-card">
    <div class="service-name">Din nye tjeneste</div>
    <div class="service-price">100 kr.</div>
    <div class="service-description">Beskrivelse af tjenesten.</div>
</div>
```

### Fjern en tjeneste:

Find hele `<div class="service-card">...</div>` blokken og **slet den**.

---

## 📞 ÆNDRE KONTAKTINFO

### WhatsApp, telefon, email osv.

**Find linje 687-710:**

```html
<!-- WhatsApp -->
<a href="https://wa.me/233501234567" ...>  ← ÆNDRE NUMMER HER
    <p>+233 50 123 4567</p>                ← OG HER (synlig tekst)
</a>

<!-- Telefon -->
<a href="tel:+233501234567" ...>           ← ÆNDRE NUMMER HER
    <p>+233 50 123 4567</p>                ← OG HER
</a>

<!-- Email -->
<a href="mailto:hello@sharpcuts.com" ...>  ← ÆNDRE EMAIL HER
    <p>hello@sharpcuts.com</p>             ← OG HER
</a>
```

**VIGTIGT:**
- `href="https://wa.me/NUMMER"` - tal uden mellemrum/bindestreg
- `href="tel:+NUMMER"` - tal uden mellemrum/bindestreg  
- `href="mailto:EMAIL"` - email adresse

### Adresse og åbningstider

**Find linje 645-659:**

```html
<p>15 Nkrumah Avenue<br>       ← ÆNDRE ADRESSE
Osu, Accra<br>
Near Danquah Circle</p>

<span class="day">Monday - Friday</span>        ← ÆNDRE DAGE
<span class="time">9:00 AM - 8:00 PM</span>     ← ÆNDRE TIDER
```

---

## 🔧 ALMINDELIGE PROBLEMER

### Problem: Noget ser ødelagt ud

**Løsning:**
1. Tjek om du har lukket alle `<div>` tags korrekt
2. Hver `<div>` skal have en `</div>` 
3. Brug "Ctrl + Z" for at fortryde

### Problem: Farver virker ikke

**Løsning:**
1. Tjek om du har `#` foran farvekoden: `#ff0000` ✅ ikke `ff0000` ❌
2. Tjek om du har `;` efter farvekoden: `#ff0000;` ✅

### Problem: Tekst vises ikke

**Løsning:**
1. Tjek om teksten er mellem `>` og `<`: `<p>Tekst her</p>` ✅
2. Tjek for special tegn: brug `&amp;` for `&`

### Problem: Link virker ikke

**Løsning:**
1. Tjek om linket starter med `http://` eller `https://`
2. Tjek om det er inde i `href=""`: `href="https://google.com"` ✅

---

## 🎓 HVAD ER HVAD?

### HTML Tags du ser ofte:

| Tag | Hvad gør den? | Eksempel |
|-----|---------------|----------|
| `<div>` | Container/boks | `<div class="box">Indhold</div>` |
| `<h1>`, `<h2>`, `<h3>` | Overskrifter | `<h2>Min overskrift</h2>` |
| `<p>` | Paragraf/tekst | `<p>Noget tekst</p>` |
| `<a>` | Link | `<a href="url">Klik her</a>` |
| `<br>` | Linjeskift | `Linje 1<br>Linje 2` |

### CSS Begreber:

| Begreb | Hvad betyder det? |
|--------|-------------------|
| `padding` | Indvendig plads i en boks |
| `margin` | Ydre plads omkring en boks |
| `color` | Tekstfarve |
| `background` | Baggrundsfarve |
| `font-size` | Skriftstørrelse |
| `font-weight` | Skrifttykkelse (fed/normal) |

### JavaScript forklaring:

```javascript
// querySelector = Find et element på siden
document.querySelector('.service-card')

// addEventListener = Lyt efter klik
element.addEventListener('click', function() {
    // Gør noget når der klikkes
});

// style.opacity = Skift gennemsigtighed
element.style.opacity = '1';  // 0 = usynlig, 1 = synlig
```

---

## ✅ TJEKLISTE FØR DU GEMMER

- [ ] Har du testet alle links?
- [ ] Ser siden korrekt ud i browseren?
- [ ] Virker knapperne?
- [ ] Er alle priser opdateret?
- [ ] Er kontaktinfo korrekt?
- [ ] Har du gemt en backup af den gamle fil?

---

## 🆘 HURTIG HJÆLP

**Jeg har lavet en fejl og vil starte forfra:**
- Tryk Ctrl + Z (eller Cmd + Z på Mac) for at fortryde

**Noget ser mærkeligt ud på mobil:**
- Se på linje 524-548 - det er mobil CSS'en

**Jeg vil ændre animationer:**
- Se på linje 463-479 for animation definitioner
- Se på linje 723-775 for JavaScript animationer

---

## 📌 VIGTIGE LINIER AT HUSKE

| Hvad | Linje |
|------|-------|
| Farver | 11-20 |
| Forsiden tekst | 568-573 |
| Priser | 602-631 |
| Kontakt info | 687-710 |
| Adresse | 645-659 |

---

**God fornøjelse med at redigere! 🎉**

Hvis du sidder fast, læs kommentarerne i koden - de forklarer ALT!
