// import { type NextRequest } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { class: string, id: string } }
  ) {
    const res = await fetch(`${process.env.SERVER_URL}/api/investor/commitment/${params.class}/${params.id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await res.json()  
    return Response.json(data)
  }
