// IMPORTANT: You need a Google Places API Key for this to work live.
// Get it from: https://console.cloud.google.com/
// Then add 'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key' to your .env file.

const PLACE_ID = 'ChIJv9jP-X-m5TkRVq__Slyy75g'; // Replace with your actual Place ID if different

export async function fetchGoogleReviews() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  
  if (!API_KEY) {
    console.warn("Google Maps API Key not found. Falling back to local verified reviews.");
    return null;
  }

  try {
    // Note: This URL must be accessed via a server-side proxy or a CORS-enabled endpoint
    // In local dev, you may need a bypass or a Next.js API route.
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.result && data.result.reviews) {
      return data.result.reviews.map(r => ({
        text: r.text,
        author: r.author_name,
        date: r.relative_time_description,
        initial: r.author_name.charAt(0),
        rating: r.rating,
        location: 'Verified User'
      }));
    }
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
  }
  return null;
}
