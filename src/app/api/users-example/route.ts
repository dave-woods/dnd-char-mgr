export async function GET(request: Request) {
  const users = [
    { id: 1, name: 'alice' },
    { id: 2, name: 'bob' }
  ]
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}