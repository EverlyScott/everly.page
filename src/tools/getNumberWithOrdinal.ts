export function getNumberWithOrdinal(number: number) {
  const ordinals = ["th", "st", "nd", "rd"];
  const lastTwoDigits = number % 100;
  return number + (ordinals[(lastTwoDigits - 20) % 10] || ordinals[lastTwoDigits] || ordinals[0]);
}
