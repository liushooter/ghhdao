import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUserInitials(name: string) {
  const [firstName, lastName] = name.split(" ")
  return lastName ? `${firstName[0]}${lastName[0]}` : firstName.slice(0, 2)
}
