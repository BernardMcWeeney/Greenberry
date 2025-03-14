/**
 * API utilities for interacting with Directus CMS
 */

// Base URLs for the Directus instance
const DIRECTUS_API_URL = 'https://cms.greenberry.ie/items';
const DIRECTUS_ASSETS_URL = 'https://cms.greenberry.ie/assets';

/**
 * Fetch data from a Directus collection
 * 
 * @param endpoint - The collection name or endpoint to fetch from
 * @param options - Optional fetch options and query parameters
 * @returns The data from the API response
 */
export async function fetchFromCMS(
  endpoint: string, 
  options: {
    query?: Record<string, string | number | boolean>,
    headers?: HeadersInit,
    cache?: RequestCache
  } = {}
): Promise<any[]> {
  // Build URL with query parameters if provided
  let url = `${DIRECTUS_API_URL}/${endpoint}`;
  
  if (options.query && Object.keys(options.query).length > 0) {
    const params = new URLSearchParams();
    Object.entries(options.query).forEach(([key, value]) => {
      params.append(key, String(value));
    });
    url += `?${params.toString()}`;
  }

  // Fetch data from the API
  const res = await fetch(url, {
    headers: options.headers,
    cache: options.cache || 'default'
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
  }

  const json = await res.json();
  return json.data;
}

/**
 * Get the full asset URL for a Directus asset ID
 * 
 * @param assetId - The ID of the asset
 * @param options - Optional transformations for the asset
 * @returns The full URL to the asset
 */
export function getAssetURL(
  assetId: string | null | undefined,
  options: {
    width?: number,
    height?: number,
    fit?: 'cover' | 'contain' | 'inside' | 'outside',
    format?: 'jpg' | 'png' | 'webp' | 'avif',
    quality?: number
  } = {}
): string {
  // Return a default image if no asset ID is provided
  if (!assetId) {
    return 'https://randomuser.me/api/portraits/lego/1.jpg';
  }

  // Start with the base asset URL
  let url = `${DIRECTUS_ASSETS_URL}/${assetId}`;

  // Add transformation parameters if provided
  const params: string[] = [];
  
  if (options.width) params.push(`width=${options.width}`);
  if (options.height) params.push(`height=${options.height}`);
  if (options.fit) params.push(`fit=${options.fit}`);
  if (options.format) params.push(`format=${options.format}`);
  if (options.quality) params.push(`quality=${options.quality}`);

  // Append parameters to URL if any exist
  if (params.length > 0) {
    url += `?${params.join('&')}`;
  }

  return url;
}

/**
 * Processes an array of items from the CMS, resolving any asset fields to full URLs
 * 
 * @param items - Array of items from the CMS
 * @param assetFields - Array of field names that contain asset IDs
 * @param assetOptions - Optional transformations for the assets
 * @returns The processed items with resolved asset URLs
 */
export function resolveAssets<T extends Record<string, any>>(
  items: T[],
  assetFields: string[] = ['image', 'thumbnail', 'avatar', 'cover', 'media'], 
  assetOptions: Parameters<typeof getAssetURL>[1] = {}
): T[] {
  return items.map(item => {
    const processed = { ...item };
    
    for (const field of assetFields) {
      if (field in processed && processed[field]) {
        processed[`${field}_url`] = getAssetURL(processed[field], assetOptions);
      }
    }
    
    return processed;
  });
}

/**
 * Fetch data from a Directus collection and resolve any asset fields to full URLs
 * 
 * @param endpoint - The collection name or endpoint to fetch from
 * @param assetFields - Array of field names that contain asset IDs
 * @param options - Optional fetch options and asset transformations
 * @returns The data from the API response with resolved asset URLs
 */
export async function fetchWithAssets<T extends Record<string, any>>(
  endpoint: string,
  assetFields: string[] = ['image', 'thumbnail', 'avatar', 'cover', 'media'],
  options: {
    query?: Record<string, string | number | boolean>,
    headers?: HeadersInit,
    cache?: RequestCache,
    assetOptions?: Parameters<typeof getAssetURL>[1]
  } = {}
): Promise<T[]> {
  const data = await fetchFromCMS(endpoint, options);
  return resolveAssets(data, assetFields, options.assetOptions);
}