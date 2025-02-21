import { Sandbox } from '@e2b/code-interpreter'

export async function POST(request: Request) {
  console.log('Creating sandbox')
  const { timeoutMs }: { timeoutMs?: number } = await request.json()

  console.log('Creating sandbox with timeoutMs:', timeoutMs)
  const sbx = await Sandbox.create({
    timeoutMs,
  })
  console.log('Sandbox created with id:', sbx.sandboxId)

  return Response.json({
    id: sbx.sandboxId,
  })
}