const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

export async function apiGet(path) {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    let message = `Request failed with status ${response.status}`;

    try {
      const body = await response.json();
      if (body?.error?.message) {
        message = body.error.message;
      }
    } catch {
      // Ignore parse errors and use fallback message.
    }

    throw new Error(message);
  }

  return response.json();
}
