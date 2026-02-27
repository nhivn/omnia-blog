import readingTime from "reading-time";

export function getReadingTime(content: string) {
  const { minutes } = readingTime(content);
  return formatReadingTime(minutes);
}

export function formatReadingTime(minutes: number) {
  const roundedTime = Math.round(minutes);
  const coffees = Math.max(1, Math.round(minutes / 5));
  const lunches = Math.round(coffees / Math.E);

  if (coffees > 5) {
    return { minutes: roundedTime, type: "lunch" as const, count: lunches };
  }

  return { minutes: roundedTime, type: "coffee" as const, count: coffees };
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}
