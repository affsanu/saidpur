export function TruncateText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return text.substring(0, maxLength);
  }
  return text;
}

export function TruncateText2(text: string, maxLength: number, lastLength: number): string {
  if (text.length > lastLength) {
    return text.substring(maxLength, lastLength) +"...";
  }
  return text.substring(maxLength)+"...";
}