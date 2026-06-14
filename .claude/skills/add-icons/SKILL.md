---
name: add-icons
description: Add 3D icons to this portfolio sourced from thiings.co. Use whenever a section needs an icon, an icon is missing, or you're asked to add/replace/find icons. Covers finding the right icon in the 10k-icon catalog, downloading it locally, and wiring it into the page with next/image.
---

# Adding icons to the portfolio

This portfolio uses 3D-rendered icons from [thiings.co](https://www.thiings.co/things) — glossy, warm-toned PNGs on transparent backgrounds that suit the dark "Gotham" palette. Icons live in `public/icons/` and are referenced from `src/lib/data.ts`, then rendered with `next/image` in `src/app/page.tsx`.

**Always self-host the icon (download it into `public/icons/`). Do NOT hotlink the blob URL** — it's a third-party store and may change.

## How thiings works (the key facts)

- The catalog page `https://www.thiings.co/things` embeds the full catalog (~10,000 items) in its Next.js flight data. Each item is `{"id":<slug>,"name":<name>,"categories":[...],"fileId":<fileId>}`.
- Every icon image is a 1024×1024 transparent PNG at:
  ```
  https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-<fileId>.png
  ```
- You get the `<fileId>` from the catalog, OR from any item page's `og:image` meta tag:
  ```
  curl -s https://www.thiings.co/things/<slug> | grep og:image
  ```

## Step 1 — Find a fitting icon

Build a searchable catalog once, then grep it. The flight data escapes quotes (`\"`), so unescape first:

```bash
cd /tmp
curl -s "https://www.thiings.co/things" -o things.html
python3 - <<'PY'
import re
u=open('things.html',encoding='utf-8').read().replace('\\"','"')
pat=re.compile(r'"id":"([^"]+)","name":"([^"]+)","categories":\[([^\]]*)\],"fileId":"([^"]+)"')
seen=set();out=[]
for id_,name,cats,fid in pat.findall(u):
    if id_ in seen: continue
    seen.add(id_); out.append(f"{fid}\t{id_}\t{name}\t{cats.replace(chr(34),'')}")
open('/tmp/catalog.tsv','w').write('\n'.join(out))
print('total',len(out))
PY
# search by name (col 3): fileId <tab> slug <tab> name <tab> categories
grep -iE 'rocket|database|wrench' /tmp/catalog.tsv | awk -F'\t' '{printf "%-26s %-26s %s\n",$3,$2,$1}'
```

Pick icons that read well at small sizes and match the warm/clay tone. Prefer simple, single-object icons (e.g. `Star`, `Rocket`, `Container`) over busy ones. **View the PNG before committing to it** (Read tool on the downloaded file) — names can be misleading (e.g. the `database` icon includes a little person figure).

## Step 2 — Download into public/icons/

`public/` is the working dir's `public/icons/`. Use a zsh-compatible loop (parallel arrays, not bash associative arrays):

```bash
BASE="https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-"
names=(rocket database)
ids=(WtteJ2W5xSZ9e19zvN5b5x3ULLxCRH yAsjogRVy50Ccelfw7o1RgaqQkPX9N)
mkdir -p public/icons
i=1; for n in "${names[@]}"; do curl -s "${BASE}${ids[$i]}.png" -o "public/icons/$n.png"; i=$((i+1)); done
file public/icons/*.png   # confirm: PNG image data, 1024 x 1024, RGBA
```

## Step 3 — Wire it in

1. Add an `icon` field (path like `/icons/rocket.png`) to the relevant entry in `src/lib/data.ts`. Update the TypeScript type too (e.g. `SkillGroup`).
2. Render with `next/image` in `src/app/page.tsx`. `page.tsx` is a Server Component, so `next/image` works directly. Established pattern — small (`h-9 w-9`), decorative (`alt="" aria-hidden`), with a drop-shadow to read on dark:

```tsx
<Image
  src={item.icon}
  alt=""
  aria-hidden
  width={96}
  height={96}
  className="h-9 w-9 shrink-0 select-none object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
/>
```

## Step 4 — Verify & clean up

```bash
npx tsc --noEmit && npx eslint src/app/page.tsx src/lib/data.ts
rm -f /tmp/things.html /tmp/catalog.tsv   # don't leave temp files behind
```

## Currently used icons

Toolkit: `magic-wand` (Frontend), `cpu` (Backend), `database` (Data), `container` (Infra).
Stats: `hammer` (Years building), `rocket` (Projects shipped), `star` (Open-source repos), `coffee-cup` (Cups of chai).

Note: thiings is generic 3D objects, **not brand logos** — don't use it for GitHub/LinkedIn/tech-stack logos. The socials and project links use text arrows (`↗`/`→`) by design.
