import { clsx, type ClassValue } from "clsx";
import { io } from "socket.io-client";
import { twMerge } from "tailwind-merge";
import { socketUrl } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const socket = io(socketUrl, { autoConnect: false });
