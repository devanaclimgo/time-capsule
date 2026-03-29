export async function apiFetch(path: string, options: RequestInit = {}) {
  const token = localStorage.getItem("token");

  const res = await fetch(`http://localhost:3000${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...(options.headers || {}),
    },
  });

  const data = await res.json();

  if (res.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login";
    return;
  }

  if (!res.ok) {
    throw data;
  }

  return data;
}