import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
  if (!Array.isArray(array)) {
    throw new Error("Input is not an array");
  }
  if (chunkSize <= 0) {
    throw new Error("Chunk size must be greater than 0");
  }

  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

export function formatDuration(minutes: number) {
  const hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, "0");
  const remainingMinutes = (minutes % 60).toString().padStart(2, "0");
  return `${hours}:${remainingMinutes}`;
}

export function formatNumberWithSpaces(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function formatNumberK(num: number): string {
  if (num >= 1000000) {
    return Math.floor(num / 1000000) + "M";
  } else if (num >= 1000) {
    return Math.floor(num / 1000) + "K";
  } else {
    return num.toString();
  }
}

export const calculatePercent = (valueToScale: number): number => {
  const percentageReduction = 100 / 100 / 10;
  return valueToScale * percentageReduction * 100;
};

// const val: number = 7.3;
// calculatePercent(val); // output 0.73
