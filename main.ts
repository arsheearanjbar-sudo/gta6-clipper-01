// gta6-clipper-01 — program (Node 22, standard library only).
//
// The entry is a video on YouTube, not code: this program's only job is to
// hand VIDEO.json from the repository root to /output, where the gate reads
// the video's address and the house reads its views through the YouTube Data
// API. Nothing written here is scored; the clip's views decide the places.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

// The clip this entry hands in is a vertical Short cut from Rockstar's GTA VI Trailer 2
// (hook 111.4-126.5 s, then the make.fun pitch card); VIDEO.json names its YouTube address.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy VIDEO.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
