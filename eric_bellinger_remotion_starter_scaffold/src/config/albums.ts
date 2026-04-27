import {AlbumConfig} from '../types/motion';

export const albums: AlbumConfig[] = [
  {
    id: 'cuffing-season',
    title: 'Cuffing Season',
    sourceCover: 'assets/source-covers/cuffing-season.jpg',
    motions: [
      {type: 'smoke', target: 'clouds_or_atmospheric_smoke', maskPath: 'assets/derived-masks/cuffing-season/clouds.svg', intensity: 0.15, speed: 0.7, direction: 'horizontal', blendMode: null, opacity: 0.8, notes: 'Slow cloud/smoke drift.'},
      {type: 'foliage', target: 'flowers_and_trees_inside_head_outlines', maskPath: 'assets/derived-masks/cuffing-season/flora.svg', intensity: 0.13, speed: 1.0, direction: 'wind_sway', blendMode: null, opacity: 1.0, notes: 'Subtle sway.'},
      {type: 'sun_twinkle', target: 'sun', maskPath: 'assets/derived-masks/cuffing-season/sun.svg', intensity: 0.08, speed: 1.2, direction: 'pulse', blendMode: 'screen', opacity: 0.8, notes: 'Subtle twinkle.'},
      {type: 'water', target: 'water', maskPath: 'assets/derived-masks/cuffing-season/water.svg', intensity: 0.16, speed: 0.8, direction: 'ebb_flow', blendMode: null, opacity: 1.0, notes: 'Restrained water motion.'}
    ],
    notes: ['Do not animate heads.', 'Preserve dreamy romantic tone.'],
    avoid: ['Exaggerated waves', 'Hard blinking on the sun']
  },
  {
    id: 'cuffing-season-pt2',
    title: 'Cuffing Season Pt. 2',
    sourceCover: 'assets/source-covers/cuffing-season-pt2.jpg',
    motions: [
      {type: 'smoke', target: 'top_right_square_smoke', maskPath: 'assets/derived-masks/cuffing-season-pt2/top-right-smoke.svg', intensity: 0.14, speed: 0.8, direction: 'drift', blendMode: null, opacity: 0.8, notes: 'Top-right smoke.'},
      {type: 'particles', target: 'top_right_square_particles', maskPath: 'assets/derived-masks/cuffing-season-pt2/top-right-particles.svg', intensity: 0.07, speed: 0.7, direction: 'fall', blendMode: 'screen', opacity: 0.65, notes: 'Sparse particles.'},
      {type: 'stars', target: 'bottom_right_square_stars', maskPath: 'assets/derived-masks/cuffing-season-pt2/bottom-right-stars.svg', intensity: 0.11, speed: 1.0, direction: 'twinkle', blendMode: 'screen', opacity: 0.8, notes: 'Star twinkles.'},
      {type: 'snow', target: 'top_left_square_snow', maskPath: 'assets/derived-masks/cuffing-season-pt2/top-left-snow.svg', intensity: 0.09, speed: 0.9, direction: 'diagonal', blendMode: 'screen', opacity: 0.7, notes: 'Gentle snow.'},
      {type: 'clouds', target: 'bottom_left_square_clouds', maskPath: 'assets/derived-masks/cuffing-season-pt2/bottom-left-clouds.svg', intensity: 0.12, speed: 0.6, direction: 'drift', blendMode: null, opacity: 0.8, notes: 'Ambient cloud movement.'}
    ],
    notes: ['Balance motion across the collage.'],
    avoid: ['Dense particles', 'Aggressive snow']
  },
  {
    id: 'cuffing-season-3',
    title: 'Cuffing Season 3',
    sourceCover: 'assets/source-covers/cuffing-season-3.jpg',
    motions: [
      {type: 'foliage', target: 'flowers', maskPath: 'assets/derived-masks/cuffing-season-3/flowers.svg', intensity: 0.13, speed: 1.0, direction: 'wind_sway', blendMode: null, opacity: 1.0, notes: 'Flower sway.'},
      {type: 'foliage', target: 'palm_tree_limbs', maskPath: 'assets/derived-masks/cuffing-season-3/palm-fronds.svg', intensity: 0.14, speed: 0.95, direction: 'wind_sway', blendMode: null, opacity: 1.0, notes: 'Palm frond rustle.'},
      {type: 'foliage', target: 'leaves', maskPath: 'assets/derived-masks/cuffing-season-3/leaves.svg', intensity: 0.11, speed: 1.0, direction: 'wind_sway', blendMode: null, opacity: 1.0, notes: 'Leaf movement.'},
      {type: 'water', target: 'middle_image_background_water', maskPath: 'assets/derived-masks/cuffing-season-3/water.svg', intensity: 0.15, speed: 0.8, direction: 'ebb_flow', blendMode: null, opacity: 1.0, notes: 'Water motion.'}
    ],
    notes: ['Use one unified breeze profile.'],
    avoid: ['Choppy leaf movement']
  },
  {
    id: 'itll-all-make-sense-later',
    title: "It'll All Make Sense Later",
    sourceCover: 'assets/source-covers/itll-all-make-sense-later.jpg',
    motions: [
      {type: 'water', target: 'water', maskPath: 'assets/derived-masks/itll-all-make-sense-later/water.svg', intensity: 0.15, speed: 0.85, direction: 'flow', blendMode: null, opacity: 1.0, notes: 'Water motion.'},
      {type: 'foliage', target: 'flora', maskPath: 'assets/derived-masks/itll-all-make-sense-later/flora.svg', intensity: 0.12, speed: 0.95, direction: 'wind_sway', blendMode: null, opacity: 1.0, notes: 'Flora motion.'},
      {type: 'smoke', target: 'smoke', maskPath: 'assets/derived-masks/itll-all-make-sense-later/smoke.svg', intensity: 0.14, speed: 0.75, direction: 'drift', blendMode: null, opacity: 0.8, notes: 'Smoke motion.'}
    ],
    notes: ['Keep it introspective and mature.'],
    avoid: ['Overcomplicated atmosphere']
  },
  {
    id: 'itll-all-make-sense-later-deluxe',
    title: "It'll All Make Sense Later (Deluxe)",
    sourceCover: 'assets/source-covers/itll-all-make-sense-later-deluxe.jpg',
    motions: [
      {type: 'glow', target: 'green_glow_behind_eric_bellinger', maskPath: 'assets/derived-masks/itll-all-make-sense-later-deluxe/glow-region.svg', intensity: 0.17, speed: 0.9, direction: 'pulse', blendMode: 'screen', opacity: 0.55, notes: 'Soft green glow.'}
    ],
    notes: ['Minimal premium motion only.'],
    avoid: ['Neon look', 'Extra unrelated motion']
  },
  {
    id: 'it-all-makes-sense',
    title: 'It All Makes Sense',
    sourceCover: 'assets/source-covers/it-all-makes-sense.jpg',
    motions: [
      {type: 'water', target: 'water', maskPath: 'assets/derived-masks/it-all-makes-sense/water.svg', intensity: 0.15, speed: 0.85, direction: 'flow', blendMode: null, opacity: 1.0, notes: 'Single clean water effect.'}
    ],
    notes: ['One of the simplest covers in the set.'],
    avoid: ['Extra effects beyond water']
  },
  {
    id: 'it-all-makes-sense-deluxe',
    title: 'It All Makes Sense (Deluxe)',
    sourceCover: 'assets/source-covers/it-all-makes-sense-deluxe.jpg',
    motions: [
      {type: 'glow', target: 'spotlight', maskPath: 'assets/derived-masks/it-all-makes-sense-deluxe/spotlight.svg', intensity: 0.14, speed: 0.8, direction: 'pulse', blendMode: 'screen', opacity: 0.5, notes: 'Subtle spotlight pulse.'}
    ],
    notes: ['Almost imperceptible spotlight enhancement.'],
    avoid: ['Blown-out highlights', 'Heavy flares']
  }
];
