import { revalidateTag } from "next/cache";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag");
  tag !== null && revalidateTag(tag);
  return Response.json({ tag });
}
