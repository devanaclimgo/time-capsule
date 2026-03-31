import { toast } from "sonner";

export async function apiFetch(path: string, options: RequestInit = {}) {
  const token = localStorage.getItem("token");

  const API_URL =
    import.meta.env.VITE_API_URL ??
    (window.location.hostname === "localhost"
      ? "http://localhost:3000"
      : "https://time-capsule-back-production.up.railway.app");

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...(options.headers || {}),
    },
  });

  if (res.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login";
    return;
  }

  if (!res.ok) {
    let errorMessage = "Algo deu errado 😢";

    try {
      const errorData = await res.json();

      if (errorData?.errors) {
        errorMessage = Object.entries(errorData.errors)
          .map(([field, messages]) => {
            const formattedField = field
              .replace("_", " ")
              .replace(/^\w/, (c) => c.toUpperCase());

            const msgArray = Array.isArray(messages)
              ? messages
              : [messages];

            return `${formattedField}: ${msgArray.join(", ")}`;
          })
          .join(" • ");
      } else if (errorData?.error) {
        errorMessage = errorData.error;
      }
    } catch (e) {
      console.error("Erro ao parsear resposta:", e);
    }

    toast.error(errorMessage);

    throw new Error(errorMessage);
  }

  const data = await res.json();

  return data;
}