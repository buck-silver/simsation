export function scale(from: number, to: number, progress: number): number {
  const start = 1;
  const end = to / from;
  const delta = start - end;
  const scale = progress * delta;
  return 1 - scale;
}
