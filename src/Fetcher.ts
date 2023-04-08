const BACKEND_API = import.meta.env.VITE_BACKEND_API;

const Fetcher = {
  get: async function (endpoint: string): Promise<string> {
    const r = await fetch(BACKEND_API + endpoint);
    return await r.text();
  },
};

export default Fetcher;
