import { Sandbox } from '@e2b/code-interpreter'

export async function POST(request: Request) {
  const { sandboxId } = await request.json()
  console.log(sandboxId)

  const success = await Sandbox.kill(sandboxId)

  return Response.json({
    success,
  })
}