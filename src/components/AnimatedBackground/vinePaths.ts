export type VineGroup =
  | 'corner-tl'
  | 'corner-tr'
  | 'corner-bl'
  | 'corner-br'
  | 'edge-left'
  | 'edge-right'
  | 'edge-top'
  | 'edge-bottom';

export type VineLayer = 'stem' | 'branch' | 'tendril' | 'leaf' | 'flower' | 'curl';

export interface VinePathData {
  id: string;
  d: string;
  strokeWidth: number;
  group: VineGroup;
  layer: VineLayer;
  breatheDelay?: number;
  glowEligible?: boolean;
  highlight?: boolean;
}

/** Hand-drawn Art Nouveau vine paths - each curve is unique, no repeated symbols. */
export const VINE_PATHS: VinePathData[] = [
  // - Top-left corner -
  {
    id: 'vine-tl-stem',
    d: 'M 0 220 C 45 180, 90 130, 130 95 C 165 65, 195 40, 240 28',
    strokeWidth: 1.6,
    group: 'corner-tl',
    layer: 'stem',
    breatheDelay: 0,
    glowEligible: true,
  },
  {
    id: 'vine-tl-branch-a',
    d: 'M 70 155 C 95 175, 120 190, 155 178 C 185 168, 210 145, 235 125',
    strokeWidth: 0.9,
    group: 'corner-tl',
    layer: 'branch',
    breatheDelay: 2.4,
    glowEligible: true,
  },
  {
    id: 'vine-tl-branch-b',
    d: 'M 45 120 C 35 95, 28 70, 42 48 C 55 30, 78 22, 105 30',
    strokeWidth: 0.7,
    group: 'corner-tl',
    layer: 'branch',
    breatheDelay: 4.1,
    glowEligible: true,
  },
  {
    id: 'vine-tl-tendril',
    d: 'M 155 178 C 168 195, 175 215, 168 238 C 160 258, 142 268, 125 255',
    strokeWidth: 0.5,
    group: 'corner-tl',
    layer: 'tendril',
    breatheDelay: 6.8,
  },
  {
    id: 'vine-tl-curl',
    d: 'M 105 30 C 118 18, 138 12, 155 22 C 168 30, 172 48, 160 58 C 148 68, 130 62, 128 48',
    strokeWidth: 0.45,
    group: 'corner-tl',
    layer: 'curl',
    breatheDelay: 8.2,
  },
  {
    id: 'vine-tl-leaf-a',
    d: 'M 130 95 C 142 88, 158 92, 162 108 C 158 122, 140 128, 128 118 C 122 108, 124 100, 130 95 Z',
    strokeWidth: 0.35,
    group: 'corner-tl',
    layer: 'leaf',
    breatheDelay: 3.6,
  },
  {
    id: 'vine-tl-leaf-b',
    d: 'M 210 145 C 222 138, 238 145, 240 160 C 235 172, 218 175, 208 165 C 204 155, 206 148, 210 145 Z',
    strokeWidth: 0.3,
    group: 'corner-tl',
    layer: 'leaf',
    breatheDelay: 5.5,
  },
  {
    id: 'vine-tl-flower',
    d: 'M 240 28 C 248 18, 262 16, 272 26 C 282 36, 280 52, 268 58 C 256 64, 242 56, 240 42 C 238 34, 238 32, 240 28 Z',
    strokeWidth: 0.4,
    group: 'corner-tl',
    layer: 'flower',
    breatheDelay: 7.0,
    highlight: true,
  },

  // - Top-right corner -
  {
    id: 'vine-tr-stem',
    d: 'M 1440 180 C 1395 145, 1340 105, 1285 78 C 1240 55, 1195 38, 1140 25',
    strokeWidth: 1.5,
    group: 'corner-tr',
    layer: 'stem',
    breatheDelay: 1.2,
    glowEligible: true,
  },
  {
    id: 'vine-tr-branch-a',
    d: 'M 1360 130 C 1330 155, 1295 175, 1255 168 C 1220 162, 1190 140, 1165 115',
    strokeWidth: 0.85,
    group: 'corner-tr',
    layer: 'branch',
    breatheDelay: 3.8,
    glowEligible: true,
  },
  {
    id: 'vine-tr-branch-b',
    d: 'M 1390 95 C 1405 70, 1410 45, 1395 25 C 1380 8, 1355 0, 1330 8',
    strokeWidth: 0.65,
    group: 'corner-tr',
    layer: 'branch',
    breatheDelay: 5.2,
    glowEligible: true,
  },
  {
    id: 'vine-tr-tendril',
    d: 'M 1255 168 C 1270 188, 1280 210, 1270 232 C 1258 252, 1235 260, 1220 245',
    strokeWidth: 0.48,
    group: 'corner-tr',
    layer: 'tendril',
    breatheDelay: 9.1,
  },
  {
    id: 'vine-tr-curl',
    d: 'M 1330 8 C 1315 -2, 1295 -4, 1280 8 C 1268 18, 1265 35, 1278 45 C 1292 55, 1310 48, 1312 32',
    strokeWidth: 0.42,
    group: 'corner-tr',
    layer: 'curl',
    breatheDelay: 11.4,
  },
  {
    id: 'vine-tr-leaf-a',
    d: 'M 1285 78 C 1272 72, 1255 78, 1250 94 C 1255 108, 1272 115, 1285 105 C 1292 95, 1290 84, 1285 78 Z',
    strokeWidth: 0.32,
    group: 'corner-tr',
    layer: 'leaf',
    breatheDelay: 4.4,
  },
  {
    id: 'vine-tr-flower',
    d: 'M 1140 25 C 1130 14, 1114 12, 1102 22 C 1090 32, 1092 48, 1105 55 C 1118 62, 1135 54, 1138 40 C 1140 32, 1140 28, 1140 25 Z',
    strokeWidth: 0.38,
    group: 'corner-tr',
    layer: 'flower',
    breatheDelay: 6.6,
    highlight: true,
  },

  // - Bottom-left corner -
  {
    id: 'vine-bl-stem',
    d: 'M 0 680 C 50 720, 105 755, 165 775 C 210 790, 255 795, 295 785',
    strokeWidth: 1.55,
    group: 'corner-bl',
    layer: 'stem',
    breatheDelay: 2.0,
    glowEligible: true,
  },
  {
    id: 'vine-bl-branch-a',
    d: 'M 80 740 C 105 760, 135 778, 170 770 C 200 763, 225 742, 248 718',
    strokeWidth: 0.88,
    group: 'corner-bl',
    layer: 'branch',
    breatheDelay: 4.6,
    glowEligible: true,
  },
  {
    id: 'vine-bl-branch-b',
    d: 'M 55 710 C 42 735, 38 762, 55 782 C 72 800, 98 805, 118 790',
    strokeWidth: 0.68,
    group: 'corner-bl',
    layer: 'branch',
    breatheDelay: 7.3,
    glowEligible: true,
  },
  {
    id: 'vine-bl-tendril',
    d: 'M 170 770 C 185 790, 192 812, 180 835 C 168 855, 145 862, 128 848',
    strokeWidth: 0.46,
    group: 'corner-bl',
    layer: 'tendril',
    breatheDelay: 10.2,
  },
  {
    id: 'vine-bl-curl',
    d: 'M 118 790 C 105 805, 88 812, 72 802 C 58 792, 55 772, 68 760 C 82 748, 102 755, 108 772',
    strokeWidth: 0.44,
    group: 'corner-bl',
    layer: 'curl',
    breatheDelay: 12.8,
  },
  {
    id: 'vine-bl-leaf-a',
    d: 'M 165 775 C 178 782, 192 778, 198 762 C 194 748, 178 742, 165 750 C 158 760, 160 770, 165 775 Z',
    strokeWidth: 0.33,
    group: 'corner-bl',
    layer: 'leaf',
    breatheDelay: 5.8,
  },
  {
    id: 'vine-bl-leaf-b',
    d: 'M 248 718 C 262 712, 278 720, 282 735 C 278 748, 262 752, 250 742 C 245 732, 246 724, 248 718 Z',
    strokeWidth: 0.3,
    group: 'corner-bl',
    layer: 'leaf',
    breatheDelay: 8.5,
  },

  // - Bottom-right corner -
  {
    id: 'vine-br-stem',
    d: 'M 1440 720 C 1390 755, 1335 780, 1275 795 C 1230 805, 1185 800, 1145 785',
    strokeWidth: 1.52,
    group: 'corner-br',
    layer: 'stem',
    breatheDelay: 1.8,
    glowEligible: true,
  },
  {
    id: 'vine-br-branch-a',
    d: 'M 1360 765 C 1335 785, 1300 798, 1265 790 C 1235 783, 1210 762, 1188 738',
    strokeWidth: 0.86,
    group: 'corner-br',
    layer: 'branch',
    breatheDelay: 4.2,
    glowEligible: true,
  },
  {
    id: 'vine-br-branch-b',
    d: 'M 1385 740 C 1398 765, 1402 792, 1385 812 C 1368 830, 1342 835, 1322 820',
    strokeWidth: 0.66,
    group: 'corner-br',
    layer: 'branch',
    breatheDelay: 6.9,
    glowEligible: true,
  },
  {
    id: 'vine-br-tendril',
    d: 'M 1265 790 C 1280 810, 1288 832, 1278 855 C 1265 875, 1242 882, 1225 868',
    strokeWidth: 0.47,
    group: 'corner-br',
    layer: 'tendril',
    breatheDelay: 9.8,
  },
  {
    id: 'vine-br-curl',
    d: 'M 1322 820 C 1335 835, 1352 842, 1368 832 C 1382 822, 1385 802, 1372 790 C 1358 778, 1338 785, 1332 802',
    strokeWidth: 0.43,
    group: 'corner-br',
    layer: 'curl',
    breatheDelay: 11.6,
  },
  {
    id: 'vine-br-leaf-a',
    d: 'M 1275 795 C 1262 802, 1248 798, 1242 782 C 1246 768, 1262 762, 1275 770 C 1282 780, 1280 790, 1275 795 Z',
    strokeWidth: 0.31,
    group: 'corner-br',
    layer: 'leaf',
    breatheDelay: 5.1,
  },
  {
    id: 'vine-br-flower',
    d: 'M 1145 785 C 1135 798, 1120 802, 1108 792 C 1096 782, 1098 766, 1112 758 C 1126 750, 1142 758, 1145 772 C 1147 780, 1146 782, 1145 785 Z',
    strokeWidth: 0.36,
    group: 'corner-br',
    layer: 'flower',
    breatheDelay: 7.8,
    highlight: true,
  },

  // - Left edge -
  {
    id: 'vine-left-stem',
    d: 'M 0 380 C 25 395, 45 420, 55 450 C 65 480, 60 510, 48 535',
    strokeWidth: 1.1,
    group: 'edge-left',
    layer: 'stem',
    breatheDelay: 3.2,
    glowEligible: true,
  },
  {
    id: 'vine-left-tendril',
    d: 'M 55 450 C 75 445, 95 455, 105 475 C 112 490, 105 508, 88 512',
    strokeWidth: 0.55,
    group: 'edge-left',
    layer: 'tendril',
    breatheDelay: 8.0,
  },
  {
    id: 'vine-left-leaf',
    d: 'M 48 535 C 62 528, 78 535, 82 550 C 78 562, 62 566, 50 556 C 44 546, 45 540, 48 535 Z',
    strokeWidth: 0.28,
    group: 'edge-left',
    layer: 'leaf',
    breatheDelay: 6.2,
  },

  // - Right edge -
  {
    id: 'vine-right-stem',
    d: 'M 1440 420 C 1415 435, 1395 460, 1385 490 C 1375 520, 1380 550, 1392 575',
    strokeWidth: 1.08,
    group: 'edge-right',
    layer: 'stem',
    breatheDelay: 2.6,
    glowEligible: true,
  },
  {
    id: 'vine-right-tendril',
    d: 'M 1385 490 C 1365 485, 1345 495, 1335 515 C 1328 530, 1335 548, 1352 552',
    strokeWidth: 0.52,
    group: 'edge-right',
    layer: 'tendril',
    breatheDelay: 7.5,
  },
  {
    id: 'vine-right-leaf',
    d: 'M 1392 575 C 1378 568, 1362 575, 1358 590 C 1362 602, 1378 606, 1390 596 C 1396 586, 1395 580, 1392 575 Z',
    strokeWidth: 0.27,
    group: 'edge-right',
    layer: 'leaf',
    breatheDelay: 5.9,
  },

  // - Top edge (asymmetric accents) -
  {
    id: 'vine-top-accent',
    d: 'M 620 0 C 635 18, 650 35, 668 28 C 688 20, 700 5, 720 0',
    strokeWidth: 0.75,
    group: 'edge-top',
    layer: 'stem',
    breatheDelay: 10.5,
    glowEligible: true,
  },
  {
    id: 'vine-top-curl',
    d: 'M 668 28 C 675 42, 672 58, 658 65 C 644 72, 628 65, 630 50',
    strokeWidth: 0.4,
    group: 'edge-top',
    layer: 'curl',
    breatheDelay: 13.2,
  },

  // - Bottom edge (asymmetric accents) -
  {
    id: 'vine-bottom-accent',
    d: 'M 780 900 C 765 882, 748 865, 728 872 C 708 880, 695 895, 675 900',
    strokeWidth: 0.72,
    group: 'edge-bottom',
    layer: 'stem',
    breatheDelay: 11.8,
    glowEligible: true,
  },
  {
    id: 'vine-bottom-tendril',
    d: 'M 728 872 C 718 855, 710 835, 718 815 C 728 798, 745 792, 758 805',
    strokeWidth: 0.48,
    group: 'edge-bottom',
    layer: 'tendril',
    breatheDelay: 14.5,
  },
];

/** Paths that glow particles travel along - curated for visual variety. */
export const GLOW_PATH_IDS = VINE_PATHS.filter((p) => p.glowEligible).map((p) => p.id);

export const VIEWBOX = '0 0 1440 900';
