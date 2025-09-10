export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // Get the URL from the request
    const url = new URL(request.url);
    
    // Simple routing based on pathname
    switch (url.pathname) {
      case '/':
        return new Response('Hello World! Your Cloudflare Worker is running.', {
          headers: { 'Content-Type': 'text/plain' }
        });
      
      case '/api/hello':
        return Response.json({ 
          message: 'Hello from your API!',
          timestamp: new Date().toISOString()
        });
      
      case '/health':
        return Response.json({ status: 'ok', uptime: Date.now() });
      
      default:
        return new Response('Not Found', { 
          status: 404,
          headers: { 'Content-Type': 'text/plain' }
        });
    }
  },
};

// Optional: Define types for better TypeScript support
interface Env {
  // Define your environment variables here
  // Example: MY_SECRET: string;
}