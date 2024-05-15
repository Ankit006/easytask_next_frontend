import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { io } from "socket.io-client";
import { socketUrl } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const socket = io(socketUrl, { autoConnect: false });
