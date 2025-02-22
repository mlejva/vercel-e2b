# E2B Code Interpreter SDK in Vercel's Functions

E2B Code Interpreter SDK that runs inside Vercel's Functions.

### 1. Get E2B API Key
1. Get API key from the [dashboard](https://e2b.dev/dashboard).
1. Create `.env.local` file in the root of the project and add the API key:

```bash
E2B_API_KEY=your_e2b_api_key
```
### 2. Install dependencies

```bash
npm install
```

### 3. Start the app

```bash
npm run dev
```

### 4. Use the API endpoints

This project exposes 4 API endpoints:

1. `POST /api/sandbox/create` - create a new sandbox
1. `POST /api/sandbox/run-code` - run code in the sandbox
1. `POST /api/sandbox/kill` - kills the sandbox
1. TODO: `POST /api/sandbox/upload` - uploads a file to the sandbox

You can find the implementation of the API endpoints in the [`app/api` folder](./app/api).
