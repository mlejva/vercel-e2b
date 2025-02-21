import { Sandbox } from '@e2b/code-interpreter'

export async function POST(request: Request) {
  const { sandboxId, code } = await request.json()
  console.log('[POST] Run code in sandbox', { sandboxId, code })

  console.log(`> Connecting to sandbox ${sandboxId}`)
  const sbx = await Sandbox.connect(sandboxId)
  console.log(`> Connected to sandbox ${sandboxId}`)
  const result = await sbx.runCode(code)
  console.log(`> Result: ${result}`)

  return Response.json(result)
}