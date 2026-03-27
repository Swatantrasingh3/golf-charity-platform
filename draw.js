export function generateDraw() {
  return Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 45) + 1
  );
}

export function checkMatch(scores, draw) {
  return scores.filter((s) => draw.includes(s)).length;
}
