// Utility to handle Google Ads Enhanced Conversions securely

/**
 * Hashes a string using SHA-256
 */
async function hashSHA256(str) {
  if (!str) return '';
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  } catch (e) {
    console.error('Hashing error:', e);
    return '';
  }
}

/**
 * Normalizes a phone number per Google Ads requirements
 * Removes spaces, dashes, parens. Prepends +91 if exactly 10 digits.
 */
function normalizePhone(phone) {
  if (!phone) return '';
  let cleaned = phone.replace(/[\s\-\(\)]/g, ''); 
  if (cleaned.length === 10 && !cleaned.startsWith('+')) {
    cleaned = '+91' + cleaned;
  }
  return cleaned;
}

/**
 * Normalizes a name per Google Ads requirements
 * Trims whitespace and converts to lowercase.
 */
function normalizeName(name) {
  if (!name) return '';
  return name.trim().toLowerCase();
}

/**
 * Triggers the enhanced conversion dataLayer push
 */
export async function trackEnhancedConversion({ name, phone }) {
  try {
    const normalizedName = normalizeName(name);
    const normalizedPhone = normalizePhone(phone);

    if (!normalizedName && !normalizedPhone) return;

    const payload = {};
    if (normalizedName) payload.first_name = await hashSHA256(normalizedName);
    if (normalizedPhone) payload.phone_number = await hashSHA256(normalizedPhone);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'enhanced_conversion',
      user_data: payload
    });
  } catch (error) {
    console.error('Enhanced Conversion tracking failed:', error);
  }
}
