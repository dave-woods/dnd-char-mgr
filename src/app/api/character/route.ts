export async function GET(request: Request) {
  const characters = [
    { name: 'thar' },
    { name: 'akma' },
    { name: 'echo'}
  ]
  return new Response(JSON.stringify(characters), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}