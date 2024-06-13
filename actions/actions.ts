"use server";

import { revalidateTag } from "next/cache";

export async function cacheClearAction(cacheName: string) {
  revalidateTag(cacheName);
}
