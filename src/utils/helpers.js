// https://github.com/gaearon/overreacted.io/blob/master/src/utils/helpers.js
export function formatReadingTime(minutes) {
  const coffees = Math.round(minutes / 5);
  const lunches = coffees / Math.E;
  if (coffees > 5) {
    return `${new Array(Math.round(lunches))
      .fill("🍱")
      .join("")} ${minutes} min read`;
  }
  return `${new Array(coffees || 1).fill("☕️").join("")} ${minutes} min read`;
}
