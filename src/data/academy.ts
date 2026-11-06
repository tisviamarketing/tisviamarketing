export interface Day {
  n: string;
  title: string;
  points: string[];
  assignment: string;
}

export const CURRICULUM: Day[] = [
  {
    n: '01',
    title: 'Introduction to Meta Ads',
    points: [
      'Meta ecosystem and Facebook vs Instagram Ads',
      'Campaign objectives and advertising funnels',
      'Ad auctions and Ads Manager introduction',
      'Business Portfolio overview',
    ],
    assignment: 'Analyse a business and identify suitable campaign objectives.',
  },
  {
    n: '02',
    title: 'Business Manager & tracking setup',
    points: [
      'Business Portfolio and ad account setup',
      'Business assets, Page and Instagram connections',
      'Access permissions and asset management',
      'Meta Pixel, Conversions API and event testing',
    ],
    assignment: 'Complete the account and tracking setup checklist.',
  },
  {
    n: '03',
    title: 'Campaign objectives & audience targeting',
    points: [
      'Awareness, Traffic, Engagement, Leads, App Promotion and Sales',
      'Campaign, ad set and ad structure',
      'Budgeting and audience strategy',
      'Detailed, Custom, Lookalike and Advantage+ audiences',
    ],
    assignment: 'Develop three audience strategies.',
  },
  {
    n: '04',
    title: 'Creative strategy & ad copy',
    points: [
      'Images, carousels, Reels and UGC formats',
      'Primary text, headlines, hooks, offers and CTAs',
      'Creative angles and ad messaging',
      'Using Meta Ad Library for research',
    ],
    assignment: 'Prepare two creatives and three copy variations.',
  },
  {
    n: '05',
    title: 'Lead generation & WhatsApp campaigns',
    points: [
      'Instant Forms and higher-intent forms',
      'Lead quality and qualification',
      'WhatsApp campaign setup and conversation flows',
      'Cost per lead, follow-up and basic CRM',
    ],
    assignment: 'Build a lead generation or WhatsApp campaign.',
  },
  {
    n: '06',
    title: 'Sales & e-commerce advertising',
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
    title: 'Campaign launch workshop',
    points: [
      'Live campaign creation',
      'Budget and placement selection',
      'Creative upload and publishing',
      'Ad policy checks, rejections and troubleshooting',
    ],
    assignment:
      'Build a campaign during the workshop. Live ad spend, if used, is separate.',
  },
  {
    n: '08',
    title: 'Performance analysis & optimisation',
    points: [
      'Ads Manager reporting',
      'CPM, CTR, CPC, CPL, CPA and ROAS',
      'Diagnosing high costs and weak conversions',
      'Creative and audience testing',
    ],
    assignment: 'Analyse a sample report and recommend improvements.',
  },
  {
    n: '09',
    title: 'Scaling & advanced advertising',
    points: [
      'Horizontal and vertical scaling',
      'Budget scaling and Advantage+ campaigns',
      'Retargeting and creative fatigue',
      'Making data-based scaling decisions',
    ],
    assignment: 'Develop a campaign scaling plan.',
  },
  {
    n: '10',
    title: 'Campaign audit & career roadmap',
    points: [
      'Student campaign audits and troubleshooting',
      'Client reporting and communication',
      'Freelancing and service pricing',
      'Final assessment and individual feedback',
    ],
    assignment: 'Present a campaign strategy and complete the assessment.',
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
    q: 'Will I receive a certificate?',
    a: 'Students who complete the required assignments and assessment will receive a Certificate of Completion from Tisvia Marketing Academy.',
  },
  {
    q: 'Are campaign results or client projects guaranteed?',
    a: 'No. The programme provides training, practice and educational feedback. Campaign performance, income and client acquisition depend on individual execution and other factors.',
  },
];

export const STAGES = [
  { days: 'Days 1–2', title: 'Foundation', body: 'Understand Meta Ads and prepare business assets and tracking.' },
  { days: 'Days 3–4', title: 'Strategy', body: 'Choose objectives, audiences, creatives and messaging.' },
  { days: 'Days 5–8', title: 'Campaigns', body: 'Build lead and sales campaigns, launch and analyse performance.' },
  { days: 'Days 9–10', title: 'Scale & career', body: 'Explore scaling, audit campaigns and plan your next steps.' },
];
