import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function generateRequestId(): string {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `EDB-${num}`;
}
