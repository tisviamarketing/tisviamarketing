export interface Day {
  n: string;
  /** Phase label from the programme brochure. */
  phase: string;
  title: string;
  points: string[];
  assignment: string;
}

export const CURRICULUM: Day[] = [
  {
    n: '01',
    phase: 'Foundation',
    title: 'Introduction to Meta Ads & digital advertising',
    points: [
      'Meta ecosystem and Facebook vs Instagram Ads',
      'Campaign objectives and advertising funnels',
      'Ad auctions and Ads Manager introduction',
      'Business Portfolio overview',
    ],
    assignment: 'Analyse a business and identify its advertising objectives.',
  },
  {
    n: '02',
    phase: 'Foundation',
    title: 'Business Manager & tracking setup',
    points: [
      'Business Portfolio and ad account setup',
      'Business assets, Page and Instagram connections',
      'Access permissions and asset management',
      'Meta Pixel, Conversions API and event testing',
    ],
    assignment: 'Complete an advertising setup checklist.',
  },
  {
    n: '03',
    phase: 'Strategy',
    title: 'Campaign objectives & audience targeting',
    points: [
      'Awareness, Traffic, Engagement, Leads, App Promotion and Sales',
      'Campaign, ad set and ad structure',
      'Budgeting and audience strategy',
      'Detailed, Custom, Lookalike and Advantage+ audiences',
    ],
    assignment: 'Develop three audience strategies for a business.',
  },
  {
    n: '04',
    phase: 'Strategy',
    title: 'Creative strategy & high-converting ad copy',
    points: [
      'Images, carousels, Reels and UGC formats',
      'Primary text, headlines, hooks, offers and CTAs',
      'Creative angles and ad messaging',
      'Using Meta Ad Library for research',
    ],
    assignment: 'Prepare two creatives and three ad copy variations.',
  },
  {
    n: '05',
    phase: 'Campaigns',
    title: 'Lead generation & WhatsApp campaigns',
    points: [
      'Instant Forms and higher-intent forms',
      'Lead quality and qualification',
      'WhatsApp campaign setup and conversation flows',
      'Cost per lead, follow-up and basic CRM',
    ],
    assignment: 'Build a lead-generation or WhatsApp campaign.',
  },
  {
    n: '06',
    phase: 'Campaigns',
    title: 'Sales campaigns & e-commerce advertising',
    points: [
      'Website sales and purchase optimisation',
      'Product catalogues and dynamic product ads',
      'Retargeting and funnel structure',
      'Budget allocation and profitability',
    ],
    assignment: 'Design an e-commerce sales funnel.',
  },
  {
    n: '07',
    phase: 'Launch + tune',
    title: 'Campaign launch & practical workshop',
    points: [
      'Live campaign creation',
      'Budget and placement selection',
      'Creative upload and publishing',
      'Ad policy checks, rejections and troubleshooting',
    ],
    assignment: 'Build a complete campaign in class. Any live ad spend is separate.',
  },
  {
    n: '08',
    phase: 'Launch + tune',
    title: 'Performance analysis & campaign optimisation',
    points: [
      'Ads Manager reporting',
      'CPM, CTR, CPC, CPL, CPA and ROAS',
      'Diagnosing high costs and weak conversions',
      'Creative and audience testing',
    ],
    assignment: 'Analyse a sample campaign report and recommend improvements.',
  },
  {
    n: '09',
    phase: 'Scale & career',
    title: 'Scaling strategies & advanced advertising',
    points: [
      'Horizontal and vertical scaling',
      'Budget scaling and Advantage+ campaigns',
      'Retargeting and creative fatigue',
      'Making data-based scaling decisions',
    ],
    assignment: 'Develop a scaling plan for a case-study campaign.',
  },
  {
    n: '10',
    phase: 'Scale & career',
    title: 'Real-world campaign audit & career roadmap',
    points: [
      'Student campaign audits and troubleshooting',
      'Client reporting and communication',
      'Freelancing and service pricing',
      'Final assessment and individual feedback',
    ],
    assignment: 'Present a campaign strategy and complete the final assessment.',
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'Do I need prior experience in Meta Ads?',
    a: 'No. The programme is designed for beginners as well as freelancers, business owners and working marketers.',
  },
  {
    q: 'Will the sessions be live?',
    a: 'Yes. The programme is delivered through live, interactive online sessions with practical demonstrations and student practice.',
  },
  {
    q: 'Will I get recordings of the sessions?',
    a: 'Yes. Recordings of every live session will be provided so you can revisit the lessons and revise the concepts.',
  },
  {
    q: 'What language will the sessions be in?',
    a: 'Sessions are delivered in Malayalam and English.',
  },
  {
    q: 'Will I run real ads during the programme?',
    a: 'The programme includes practical campaign setup and demonstrations. Any live advertising spend is separate from the programme fee.',
  },
  {
    q: 'What does the programme cost?',
    a: 'The 10-day mentorship programme is ₹9,999 per person. Any live advertising spend during the practical sessions is separate from the fee.',
  },
  {
    q: 'When does the next batch start?',
    a: 'Message us on WhatsApp for the next start date and the session times. The programme runs for ten days with a two-hour live session each day.',
  },
  {
    q: 'Will I receive a certificate?',
    a: 'Students who complete the required assignments and assessment will receive a Certificate of Completion from Tisvia Marketing Academy.',
  },
  {
    q: 'Are campaign results or client projects guaranteed?',
    a: 'No. The programme provides training, practice and educational feedback. Campaign performance, income and client acquisition depend on individual execution and other factors.',
  },
];

export const STAGES = [
  { days: 'Days 1–2',  title: 'Foundation',    body: 'Ecosystem, Business Portfolio and tracking.' },
  { days: 'Days 3–4',  title: 'Strategy',      body: 'Objectives, audiences, creatives and copy.' },
  { days: 'Days 5–6',  title: 'Campaigns',     body: 'Lead gen, WhatsApp and e-commerce sales.' },
  { days: 'Days 7–8',  title: 'Launch + tune', body: 'Live launch and performance analysis.' },
  { days: 'Days 9–10', title: 'Scale & career',body: 'Scaling, audits and career roadmap.' },
];

/** "How you will learn" — the mentorship-style cards from the brochure. */
export const STYLE = [
  {
    h: 'Live interactive sessions',
    p: 'Direct instruction, live Ads Manager demonstrations and in-class questions.',
  },
  {
    h: 'Hands-on campaign training',
    p: 'Students practise campaign setup. Any live advertising spend is separate.',
  },
  {
    h: 'Daily assignments and reviews',
    p: 'Tasks after each session, with practical feedback on setup, targeting, creatives and reporting.',
  },
  {
    h: 'Real client case studies',
    p: 'Examples of campaign strategy, optimisation and communicating results to clients.',
  },
];

/**
 * Enrolment terms.
 * TODO (client): add the batch start date and session times once fixed.
 * Morning and evening batches exist but are deliberately not published yet.
 */
export const ENROLMENT = {
  fee: '₹9,999',
  feeUnit: 'per person',
  feeAmount: '9999',
  currency: 'INR',
} as const;

/**
 * Message screenshots supplied by the client.
 * The phone number visible in the class-group screenshot is blurred in the
 * cropped file; do not re-crop from the originals without redacting it again.
 */
export const TESTIMONIALS = [
  {
    src: '/t/t1.jpg',
    w: 620,
    h: 672,
    alt: 'LinkedIn message from a performance marketing student: "I am one of your performance marketing student from HACA, your classes are interesting and happy to to learn from you."',
    cap: 'A performance marketing student, on LinkedIn.',
  },
  {
    src: '/t/t2.jpg',
    w: 620,
    h: 954,
    alt: 'WhatsApp class group showing a session reminder and a student replying "It was great session. Great insights."',
    cap: 'Inside a live class group.',
  },
  {
    src: '/t/t3.jpg',
    w: 342,
    h: 605,
    alt: 'WhatsApp message from a client reporting cost per result falling from ₹23 to ₹7 and 74 enquiries from ₹550 spent.',
    cap: 'A client, on a campaign the mentor ran.',
  },
] as const;
