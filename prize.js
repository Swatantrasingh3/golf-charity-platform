export function calculatePrize(pool, match) {
  if (match === 5) return pool * 0.4;
  if (match === 4) return pool * 0.35;
  if (match === 3) return pool * 0.25;
  return 0;
}
