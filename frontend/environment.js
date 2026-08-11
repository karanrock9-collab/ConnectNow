const isProd = import.meta.env.MODE === "production";

const server = isProd
  ? "https://connectnow-8q7h.onrender.com"
  : "http://localhost:8000";

export default server;
