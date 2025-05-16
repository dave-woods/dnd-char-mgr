import { characters } from "@/_lib/characterData"

export async function GET(request: Request) {
  return new Response(JSON.stringify(characters), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}