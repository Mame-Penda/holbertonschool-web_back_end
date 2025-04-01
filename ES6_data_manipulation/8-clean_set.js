export default function cleanset(set, start) {
  if (!start || typeof start !== 'string') {
    return '';
  }

  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(start))
    .map((value) => value.slice(start.length))
    .join('-');
}
