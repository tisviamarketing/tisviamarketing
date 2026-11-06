/**
 * Academy page content.
 *
 * The page is deliberately short: every block is a few lines. Keep it that way
 * when editing — long copy is a regression here, not an improvement.
 *
 * Legal qualifiers in this file are deliberate and must survive edits:
 *  - live ad spend is separate from the fee,
 *  - the certificate is conditional on assignments and assessment,
 *  - post-programme support is *proposed*, not promised,
 *  - no result, income or placement is guaranteed.
 */

/** The ten days, one line each. Titles only — the detail lives in the phases. */
export const DAYS = [
  { n: '01', t: 'Meta ads and the funnel' },
  { n: '02', t: 'Business Manager and tracking' },
  { n: '03', t: 'Objectives and audiences' },
  { n: '04', t: 'Creative and ad copy' },
  { n: '05', t: 'Lead gen and WhatsApp' },
  { n: '06', t: 'Sales and e-commerce' },
  { n: '07', t: 'Live campaign launch' },
  { n: '08', t: 'Performance and optimisation' },
  { n: '09', t: 'Scaling strategies' },
  { n: '10', t: 'Campaign audit and career' },
] as const;

/** Three-card timeline across the ten days. */
export const PHASES = [
  {
    days: 'Days 1–4',
    title: 'Foundation',
    body: 'The Meta ecosystem, Business Manager, the Pixel and Conversions API, campaign objectives, audiences, creative and copy.',
  },
  {
    days: 'Days 5–8',
    title: 'Campaigns',
    body: 'Lead generation, WhatsApp and e-commerce campaigns. You launch a live campaign and then read its numbers back.',
  },
  {
    days: 'Days 9–10',
    title: 'Scale',
    body: 'Scaling, creative fatigue, a real campaign audit, client reporting and pricing your own service.',
  },
] as const;

/** Day 7, shown on the page as a sample of what a session actually is. */
export const SAMPLE_DAY = {
  label: 'Day 7',
  title: 'Launch a live campaign',
  intro: 'What you actually do in the session:',
  steps: [
    'Build a campaign end to end in Ads Manager',
    'Choose the budget, the placements and the audience you argued for on Day 3',
    'Upload the creative, write the copy, publish',
    'Handle the policy checks and rejections when they come',
  ],
  close: 'You leave the session with a campaign that is running.',
  note: 'Any live advertising spend is separate from the programme fee.',
} as const;

/** What is missing for most people who have already watched the tutorials. */
export const PROBLEM = [
  'You have watched the tutorials and still cannot structure a campaign.',
  'The Pixel fires, or it does not, and you cannot tell which.',
  'Cost per lead climbs and you do not know which lever to pull.',
  'You can launch an ad. You cannot read the report.',
  'Nobody has ever looked at your campaign and told you what is wrong with it.',
];

export const INCLUDED = [
  '10 live sessions, 2 hours a day',
  '20 hours of live Ads Manager training',
  '10 assignments with individual feedback',
  'Recordings, case studies, templates and checklists',
  'A final campaign project and a Certificate of Completion',
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'Do I need any experience?',
    a: 'No. It starts at zero and ends with live campaigns. Beginners, freelancers, business owners and working marketers all sit in the same room.',
  },
  {
    q: 'Are the sessions live?',
    a: 'Yes. Ten live online sessions, two hours each, with Ads Manager on screen. Every session is recorded and the recordings are yours.',
  },
  {
    q: 'What language are they in?',
    a: 'Malayalam and English.',
  },
  {
    q: 'Will I run real ads?',
    a: 'You build and launch campaigns in class. Any live advertising spend is separate from the programme fee.',
  },
  {
    q: 'When does the next batch start?',
    a: 'Message us on WhatsApp for the next start date and the session times.',
  },
  {
    q: 'Do I get a certificate?',
    a: 'A Certificate of Completion from Tisvia Marketing Academy, once the assignments and the final assessment are done.',
  },
  {
    q: 'Are results guaranteed?',
    a: 'No. You get training, practice and feedback. Campaign performance, income and clients depend on your own execution.',
  },
];

/** Enrolment terms. Morning and evening batches exist but are not published yet. */
export const ENROLMENT = {
  fee: '₹9,999',
  feeUnit: 'per person',
  feeAmount: '9999',
  currency: 'INR',
} as const;

export const MENTOR_STATS = [
  { n: '4+', s: 'Years on live accounts' },
  { n: '100+', s: 'Clients worked with' },
  { n: '₹10 Cr', s: 'Ad spend managed, up to' },
  { n: '100+', s: 'Students trained' },
] as const;

/**
 * Message screenshots supplied by the client.
 * The phone number visible in the class-group screenshot is blurred in the
 * cropped file; do not re-crop from the originals without redacting it again.
 */
export const TESTIMONIALS = [
  {
    src: '/t/t1',
    w: 620,
    h: 672,
    alt: 'LinkedIn message from a performance marketing student: "I am one of your performance marketing student from HACA, your classes are interesting and happy to to learn from you."',
    cap: 'A student, on LinkedIn.',
  },
  {
    src: '/t/t2',
    w: 620,
    h: 954,
    alt: 'WhatsApp class group showing a session reminder and a student replying "It was great session. Great insights."',
    cap: 'Inside a live class group.',
  },
  {
    src: '/t/t3',
    w: 342,
    h: 605,
    alt: 'WhatsApp message from a client reporting cost per result falling from ₹23 to ₹7 and 74 enquiries from ₹550 spent.',
    cap: 'A client, on a campaign the mentor ran.',
  },
] as const;
