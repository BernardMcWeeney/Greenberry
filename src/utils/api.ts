export async function fetchFromCMS(endpoint: string) {
    const res = await fetch(`https://cms.greenberry.ie/items/${endpoint}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
    }
    const json = await res.json();
    return json.data;
  }
  