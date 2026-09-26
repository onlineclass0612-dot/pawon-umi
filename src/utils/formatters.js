/**
 * Utility formatters for Pawon Umi Catering
 */

/**
 * Format number to Indonesian Rupiah currency string
 * @param {number} number 
 * @returns {string} e.g. "Rp 72.000"
 */
export function formatRupiah(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return 'Rp 0';
  }
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(number);
}

/**
 * Helper to parse statistical metric strings like "2.800+", "950.000+", "99.6%", "14+"
 * @param {string} rawStr 
 * @returns {{ targetNumber: number, decimals: number, prefix: string, suffix: string }}
 */
export function parseStatValue(rawStr) {
  if (typeof rawStr !== 'string') {
    return { targetNumber: Number(rawStr) || 0, decimals: 0, prefix: '', suffix: '' };
  }

  const str = rawStr.trim();

  // Extract trailing suffix (e.g. "+", "%", etc.)
  const suffixMatch = str.match(/[^0-9.,]+$/);
  const suffix = suffixMatch ? suffixMatch[0] : '';

  // Extract leading prefix (e.g. "Rp ", etc.)
  const prefixMatch = str.match(/^[^0-9.,]+/);
  const prefix = prefixMatch ? prefixMatch[0] : '';

  // Number substring in between
  const numPart = str.slice(prefix.length, str.length - suffix.length).trim();

  // Check if it's a decimal number: e.g. "99.6"
  const isDecimal = /^[0-9]+[.,][0-9]{1,2}$/.test(numPart);

  if (isDecimal) {
    const standardized = numPart.replace(',', '.');
    const decimalPlaces = standardized.split('.')[1].length;
    return {
      targetNumber: parseFloat(standardized),
      decimals: decimalPlaces,
      prefix,
      suffix
    };
  }

  // Integer with possible thousands separators (e.g. "2.800", "950.000", "14")
  const cleaned = numPart.replace(/[^0-9]/g, '');
  const targetNumber = parseInt(cleaned, 10);

  if (isNaN(targetNumber)) {
    return { targetNumber: 0, decimals: 0, prefix: '', suffix: str };
  }

  return {
    targetNumber,
    decimals: 0,
    prefix,
    suffix
  };
}

/**
 * Helper to build safe WhatsApp direct chat URL
 * @param {string} phone 
 * @param {string} text 
 * @returns {string}
 */
export function createWhatsAppUrl(phone, text) {
  const cleanPhone = String(phone).replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Format ISO date string (YYYY-MM-DD) to formal Indonesian date string
 * e.g. "2026-09-30" -> "30 September 2026"
 * @param {string} dateStr 
 * @returns {string}
 */
export function formatDateIndo(dateStr) {
  if (!dateStr) return '';
  try {
    const [year, month, day] = dateStr.split('-');
    if (!year || !month || !day) return dateStr;
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const monthIndex = parseInt(month, 10) - 1;
    const monthName = months[monthIndex] || month;
    return `${parseInt(day, 10)} ${monthName} ${year}`;
  } catch {
    return dateStr;
  }
}
