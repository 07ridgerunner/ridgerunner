// Google Ads / UTM tracking params capture.
// TravDX CRM ko lead server-side (send-mail.php) se bheji jaati hai — browser se
// direct call CORS ki wajah se block hoti hai. Yahan sirf tracking params
// sambhaale jaate hain jo form ke saath send-mail.php ko forward hote hain.

const TRACKING_KEYS = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

/**
 * Page load par gclid / utm_* params ko sessionStorage me save kar leta hai
 * taaki form submit ke time tak available rahe. Analytics component me call hota hai.
 */
export function captureTrackingParams() {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    TRACKING_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) sessionStorage.setItem('trav_' + key, value);
    });
  } catch (e) {
    console.error('captureTrackingParams failed:', e);
  }
}

/**
 * Saved tracking params object return karta hai — form submit body me spread karo.
 */
export function getTrackingParams() {
  const out = {};
  if (typeof window === 'undefined') return out;
  try {
    TRACKING_KEYS.forEach((key) => {
      out[key] = sessionStorage.getItem('trav_' + key) || '';
    });
  } catch {
    /* ignore */
  }
  return out;
}
