let IS_PROD = true;

const server = IS_PROD
  ? "http://localhost:8000"
  : "https://connectnow-8q7h.onrender.com";

export default server;
