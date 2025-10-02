export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/v1"
    : "https://portfolio-api-eosin.vercel.app/api/v1";
