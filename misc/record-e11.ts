type Env = "dev" | "prod";
const config: Record<Env, { apiUrl: string }> = {
  dev: { apiUrl: "https://dev.api.com" },
  prod: { apiUrl: "https://api.com" },
};

console.log(config.dev.apiUrl); // "https://dev.api.com
//             ^?
