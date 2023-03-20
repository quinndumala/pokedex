export function CapitalizeFirstLetter(name: string) {
  return name[0].toUpperCase() + name.slice(1);
}

export function FormatDexNumber(dexNumber: number) {
  return "#" + String(dexNumber).padStart(4, "0");
}
