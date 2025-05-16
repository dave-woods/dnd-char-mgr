import { characters } from "@/_lib/characterData"

export async function GET(request: Request, { params }: { params: Promise<{ name: string }>}) {
    const name = (await params).name
    const char = characters.find(c => c.name === name)
    return new Response(JSON.stringify(char), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    })
}