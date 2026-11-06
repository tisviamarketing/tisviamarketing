/**
 * Single source of truth for contact details and links.
 *
 * `whatsapp` is digits only, country code first, no "+" and no spaces.
 */
export const CONTACT = {
  whatsapp: '918891365571',
  email: 'tisviamarketing@gmail.com',
  instagram: 'https://www.instagram.com/tisviamarketing/',
  linkedin: 'https://www.linkedin.com/in/tisminmanoj/',
  location: 'Thrissur, Kerala, India',
} as const;

export const SITES = {
  agency: 'https://tisviamarketing.in',
  academy: 'https://academy.tisviamarketing.in',
} as const;

/** Builds a wa.me link with a prefilled message. */
export function wa(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
