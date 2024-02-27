
export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {
  const res = await fetch(`${process.env.SERVER_URL}/api/investors`, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await res.json()  
    return Response.json(data)
  }