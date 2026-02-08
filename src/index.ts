export default {
  async fetch(request: Request, env: any): Promise<Response> {
    return new Response("OK", {
      status: 200,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};
