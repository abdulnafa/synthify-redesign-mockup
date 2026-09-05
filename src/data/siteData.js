export const brand = {
  name: 'Synthify HR Solutions',
  tagline: 'The People · The Power · The Passion',
  logo: './assets/brand/synthify-logo-dark.png',
  logoDark: './assets/brand/synthify-logo.png',
}

export const headerCta = {
  label: 'Book a consultation',
  to: '/contact',
}

export const contactInfo = {
  location: 'Dubai, UAE',
  address: 'Business Bay, Dubai, UAE',
  email: 'info@synthify.ae',
  emailHref: 'mailto:info@synthify.ae',
  phone: '+971 56 196 2029',
  phoneHref: 'tel:+971561962029',
  hours: 'Mon – Fri: 9:00 am – 6:00 pm',
  weekendHours: 'Closed on weekends',
  mapUrl:
    'https://maps.google.com/maps?iwloc=near&output=embed&q=Business+Bay%2C+Dubai&t=m&z=13',
  linkedin: 'https://www.linkedin.com/company/synthify-hr-solutions',
  instagram: 'https://www.instagram.com/synthifyhrsolutions/',
}

export const navigation = [
  {
    label: 'About',
    to: '/about',
    children: [{ label: 'Our Team', to: '/team' }],
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Bulk Recruitment', to: '/services/bulk-recruitment' },
      {
        label: 'Employee Training & Development',
        to: '/services/employee-training-developments',
      },
      {
        label: 'HR Consulting & OD Solutions',
        to: '/services/hr-consulting-od-solutions',
      },
      { label: 'Payroll Solutions', to: '/services/payroll-solutions' },
      {
        label: 'Recruitment & Executive Search',
        to: '/services/recruitment-executive-search',
      },
    ],
  },
  { label: 'Sectors', to: '/sectors' },
  { label: 'Jobs', to: '/jobs' },
  { label: 'Insights', to: '/insights' },
]

export const services = [
  {
    slug: 'bulk-recruitment',
    title: 'Bulk Recruitment',
    shortTitle: 'Bulk Recruitment',
    summary: 'Structured, high-volume hiring support for teams growing on a defined timeline.',
    image: './assets/generated/workforce-planning.webp',
  },
  {
    slug: 'employee-training-developments',
    title: 'Employee Training & Development',
    shortTitle: 'Training & Development',
    summary: 'Practical programmes shaped around skills gaps, leadership and team performance.',
    image: './assets/generated/career-conversation.webp',
  },
  {
    slug: 'hr-consulting-od-solutions',
    title: 'HR Consulting & OD Solutions',
    shortTitle: 'HR Consulting & OD',
    summary: 'People, process and organisation design aligned with the way your business works.',
    image: './assets/generated/gcc-expertise.webp',
  },
  {
    slug: 'payroll-solutions',
    title: 'Payroll Solutions',
    shortTitle: 'Payroll Solutions',
    summary: 'Clearer payroll workflows, review points and reporting support for every pay cycle.',
    image: './assets/generated/workforce-planning.webp',
  },
  {
    slug: 'recruitment-executive-search',
    title: 'Recruitment & Executive Search',
    shortTitle: 'Executive Search',
    summary: 'Focused search and assessment for leadership, specialist and business-critical hires.',
    image: './assets/generated/hero-team.webp',
  },
]

export const serviceDetails = {
  'bulk-recruitment': {
    title: 'Bulk Recruitment',
    lede:
      'Plan and deliver high-volume hiring with one coordinated approach to sourcing, screening, interviews and onboarding.',
    overview:
      'High-volume hiring, organised around workforce plans, role fit and a clear delivery timeline.',
    deliverables: [
      'Workforce planning around hiring goals and timelines',
      'Mass sourcing across relevant candidate pools',
      'Consistent screening and shortlisting criteria',
      'Coordinated high-volume interview processes',
      'Onboarding and placement support',
    ],
    benefits: [
      'Faster hiring turnaround',
      'Reduced workload for internal teams',
      'Access to pre-screened candidates',
      'A scalable approach to changing demand',
      'Consistent candidate evaluation',
    ],
    process: ['Plan the workforce need', 'Source at scale', 'Screen and coordinate', 'Support placement'],
    idealFor: [
      'Retail and hospitality',
      'Customer service and call centres',
      'Construction and engineering',
      'Healthcare',
      'Logistics and operations',
    ],
  },
  'employee-training-developments': {
    title: 'Employee Training & Development',
    lede:
      'Build skills, confidence and stronger ways of working through training designed around your organisation’s priorities.',
    overview:
      'Practical learning programmes that connect individual development with organisational goals.',
    deliverables: [
      'Training needs analysis and skills-gap review',
      'Customised programmes for your industry and team',
      'Leadership development',
      'Communication, teamwork and problem-solving training',
      'Individual and team performance coaching',
    ],
    benefits: [
      'Stronger employee performance',
      'Higher engagement and retention',
      'A more capable leadership pipeline',
      'Better team collaboration',
      'Improved organisational efficiency',
    ],
    process: ['Identify priority skills', 'Design the programme', 'Deliver practical sessions', 'Support application'],
    idealFor: [
      'Start-ups building their teams',
      'Growing companies scaling operations',
      'Organisations developing future leaders',
      'Teams working to improve performance',
    ],
  },
  'hr-consulting-od-solutions': {
    title: 'HR Consulting & OD Solutions',
    lede:
      'Bring people, structure and process into better alignment with practical HR and organisational development support.',
    overview:
      'People strategies and operating structures shaped around business goals, growth and change.',
    deliverables: [
      'HR strategy development',
      'Organisational structure design',
      'HR policy and process development',
      'Performance management systems and KPIs',
      'Change-management support',
      'Employee-engagement initiatives',
    ],
    benefits: [
      'Stronger organisational alignment',
      'Clearer HR processes and policies',
      'More consistent performance management',
      'Better-informed people decisions',
      'Improved employee engagement and retention',
    ],
    process: ['Understand the business context', 'Identify people and process gaps', 'Design the solution', 'Support implementation'],
    idealFor: [
      'Companies scaling or restructuring',
      'Businesses addressing performance or culture challenges',
      'Organisations improving HR processes',
      'Leadership teams managing transformation',
    ],
  },
  'payroll-solutions': {
    title: 'Payroll Solutions',
    lede:
      'Create a clearer, more consistent payroll workflow with defined inputs, review points and reporting responsibilities.',
    overview:
      'Operational payroll support designed around the needs of your workforce, HR team and pay cycle.',
    deliverables: [
      'Payroll workflow and responsibility review',
      'Monthly employee-data and input coordination',
      'Pre-payroll review checkpoints',
      'Exception and query workflow',
      'Payroll reporting and handover support',
    ],
    benefits: [
      'Clear ownership across each pay cycle',
      'More consistent monthly workflows',
      'Better visibility for HR and finance teams',
      'A defined route for exceptions and employee queries',
    ],
    process: ['Scope the current workflow', 'Coordinate payroll inputs', 'Review exceptions', 'Report and hand over'],
    idealFor: [
      'Growing organisations',
      'Businesses with distributed teams',
      'HR teams needing operational support',
      'Employers reviewing their payroll process',
    ],
  },
  'recruitment-executive-search': {
    title: 'Recruitment & Executive Search',
    lede:
      'Find leadership and specialist talent through a focused search built around role outcomes, culture and long-term fit.',
    overview:
      'A considered search and evaluation process for roles where judgement, discretion and fit matter.',
    deliverables: [
      'Role brief and success-profile development',
      'Targeted talent mapping and sourcing',
      'Candidate screening and comprehensive evaluation',
      'Shortlist presentation and interview coordination',
      'Offer and placement support',
    ],
    benefits: [
      'A search shaped around the business context',
      'Access to local and wider talent networks',
      'Consistent assessment across every shortlist',
      'Confidential handling of sensitive searches',
      'Close coordination through offer and placement',
    ],
    process: ['Define the search brief', 'Map and approach talent', 'Assess and shortlist', 'Coordinate offer and placement'],
    idealFor: [
      'Leadership appointments',
      'Specialist and hard-to-fill roles',
      'Confidential searches',
      'Business-critical hires',
    ],
  },
}

export const sectors = [
  {
    slug: 'oil-gas',
    label: 'Oil & Gas',
    icon: 'oil-gas',
    image: './assets/original/01.jpg',
    description: 'People support for technical, operational and commercial roles across the energy value chain.',
  },
  {
    slug: 'petrochemical',
    label: 'Petrochemical',
    icon: 'factory',
    image: './assets/original/02.jpg',
    description: 'Workforce support for specialist, plant, engineering and business functions in petrochemicals.',
  },
  {
    slug: 'construction',
    label: 'Construction',
    icon: 'construction',
    image: './assets/original/03.jpg',
    description: 'Recruitment support shaped around project delivery, site operations and construction leadership.',
  },
  {
    slug: 'marine',
    label: 'Marine',
    icon: 'marine',
    image: './assets/original/04.jpg',
    description: 'People solutions for marine operations and the technical teams that keep them moving.',
  },
  {
    slug: 'automotive',
    label: 'Automotive',
    icon: 'automotive',
    image: './assets/original/05.jpg',
    description: 'Hiring support across automotive operations, sales, service and supporting business functions.',
  },
  {
    slug: 'banking-capital-markets',
    label: 'Banking & Capital Markets',
    icon: 'banking',
    image: './assets/original/06.jpg',
    description: 'Search support for finance, risk, governance, operations and specialist banking roles.',
  },
  {
    slug: 'power-utilities',
    label: 'Power & Utilities',
    icon: 'power',
    image: './assets/original/07.jpg',
    description: 'Workforce support for the technical, operational and commercial needs of essential services.',
  },
  {
    slug: 'infrastructure',
    label: 'Infrastructure',
    icon: 'building',
    image: './assets/original/08.jpg',
    description: 'Recruitment support for the teams planning, building and operating complex infrastructure.',
  },
  {
    slug: 'hospitality',
    label: 'Hospitality',
    icon: 'hospitality',
    image: './assets/original/09.jpg',
    description: 'People solutions for guest experience, food and beverage, operations and leadership teams.',
  },
  {
    slug: 'manufacturing-industry',
    label: 'Manufacturing Industry',
    icon: 'manufacturing',
    image: './assets/original/10.jpg',
    description: 'Workforce support across production, quality, supply chain, engineering and plant leadership.',
  },
  {
    slug: 'information-technology',
    label: 'Information Technology',
    icon: 'technology',
    image: './assets/original/11.jpg',
    description: 'Search support for technology, data, digital delivery and IT leadership roles.',
  },
]

export const teamMembers = [
  {
    name: 'Shahbaz Ahmed',
    title: 'CEO & HR Consultant',
    image: './assets/team/shahbaz-ahmed.jpg',
    email: 'shahbaz@synthify.ae',
  },
  {
    name: 'Sawarnadip Banerjee',
    title: 'Business Development Manager',
    image: './assets/team/sawarnadip-banerjee.jpg',
  },
  {
    name: 'Hamza Ali',
    title: 'Junior Recruiter',
    image: './assets/team/hamza-ali.jpg',
    email: 'hamza.ali@synthify.ae',
  },
  {
    name: 'Warda Bilal',
    title: 'Recruiter',
    image: './assets/team/warda-bilal.jpeg',
    email: 'warda.bilal@synthify.ae',
  },
]

const standardApplication = {
  email: contactInfo.email,
  fields: [
    { name: 'fullName', label: 'Full name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    {
      name: 'resume',
      label: 'Upload CV / resume',
      type: 'file',
      required: true,
      accept: '.pdf,application/pdf',
      maxSizeMb: 2,
    },
  ],
}

export const jobs = [
  {
    slug: 'insurance',
    title: 'Senior Underwriter – Liability & Financial Lines',
    sector: 'Insurance',
    location: 'Dubai',
    type: 'Full Time',
    experience: '5–7 years',
    level: 'Senior position',
    vacancies: 1,
    summary:
      'Manage and grow a portfolio of complex liability risks, including Professional Indemnity, Directors & Officers and General Liability, while evaluating exposure, pricing and coverage terms within underwriting guidelines.',
    responsibilities: [
      'Underwrite and manage Liability and Financial Lines risks, including Professional Indemnity, Directors & Officers and General Liability.',
      'Assess risk exposure, pricing, terms and conditions in line with company guidelines.',
      'Build and maintain relationships with brokers and clients across the UAE market.',
      'Support portfolio profitability through sound underwriting decisions and risk selection.',
      'Contribute to business-development and portfolio-growth initiatives.',
      'Work within internal underwriting standards and regulatory requirements.',
    ],
    qualifications: [
      'Five to seven years of underwriting experience in Liability and Financial Lines.',
      'Strong technical knowledge of UAE and GCC insurance markets.',
      'Experience managing broker relationships and negotiating terms.',
      'Strong analytical, communication and decision-making skills.',
      'A relevant insurance qualification, such as ACII, is an advantage.',
    ],
    application: {
      ...standardApplication,
      subject: 'Senior Underwriter – Liability & Financial Lines',
    },
  },
  {
    slug: 'senior-manager-credit-risk',
    title: 'Senior Manager – Credit Risk',
    sector: 'Banking & Capital Markets',
    location: 'Dubai',
    type: 'Full Time',
    experience: '12–15 years',
    level: 'Senior position',
    vacancies: 1,
    summary:
      'Lead credit-risk assessment for major MENAT financial entities, with responsibility spanning portfolio reviews, policy, management reporting and risk-process improvement.',
    responsibilities: [
      'Assess credit risk for banks, countries, NBFCs, MDBs, global financial institutions, insurers, leasing companies, multinational companies and sovereign wealth funds across MENAT.',
      'Prepare credit reviews for renewals, enhancements, new-to-bank proposals and amendments.',
      'Complete internal risk ratings using financial analysis and qualitative judgement.',
      'Monitor excesses, past dues, collateral shortfalls, covenants and concentration limits.',
      'Identify early-warning signs and support Watchlist, staging and IFRS 9 / ECL processes.',
      'Deliver risk management information for regulatory submissions, audits and Board or management reporting.',
      'Maintain credit policies, standard operating procedures, charters and risk frameworks across regulatory jurisdictions.',
      'Lead or support risk automation and process-improvement initiatives.',
    ],
    qualifications: [
      'Twelve to fifteen years of credit-underwriting experience within a financial institution.',
      'Five to seven years of underwriting experience for banks, countries or global financial institutions in MENAT.',
      'Strong credit-analysis skills and a deep understanding of country and bank risk.',
      'Knowledge of IFRS 9, expected credit loss and risk-management frameworks.',
      'Strong financial-statement analysis and understanding of banking products.',
      'Strong time-management, teamwork and Microsoft Office skills.',
      'Experience with systems such as Finacle, Kepler, CRISIL ICON, Bloomberg and external rating data.',
    ],
    education: 'Bachelor’s degree in Finance or Accounting; an MBA or CFA is preferred.',
    benefits: [
      'Regional exposure and senior-level decision-making responsibility',
      'Opportunity to shape credit policies and risk frameworks',
      'Involvement in risk automation and process improvement',
      'Competitive compensation in a professional working environment',
    ],
    application: {
      ...standardApplication,
      subject: 'Senior Manager – Credit Risk',
    },
  },
  {
    slug: 'purchasing-officer',
    title: 'Purchasing Officer',
    sector: 'Real Estate',
    location: 'Ajman',
    type: 'Full Time',
    experience: '2+ years',
    level: 'Senior position',
    vacancies: 1,
    summary: 'An Ajman-based real estate company is recruiting a Purchasing Officer.',
    responsibilities: [
      'Support purchasing and procurement activity for the business.',
      'Apply established purchasing procedures and cost-control practices.',
      'Work with suppliers and support supplier-management activity.',
    ],
    qualifications: [
      'At least two years of purchasing or procurement experience.',
      'Real estate or construction experience is preferred.',
      'Strong negotiation and supplier-management skills.',
      'Good knowledge of purchasing procedures and cost control.',
      'Proficiency in Microsoft Office and ERP systems.',
    ],
    application: {
      ...standardApplication,
      subject: 'Purchasing Officer',
    },
  },
  {
    slug: 'executive-assistant',
    title: 'Executive Assistant',
    sector: 'Executive Support',
    location: 'Dubai',
    type: 'Full Time',
    experience: '3–5 years',
    level: 'Senior position',
    vacancies: 1,
    salary: 'Market compatible',
    summary:
      'Provide comprehensive administrative and executive support to senior management, coordinating schedules, communication, meetings, travel and confidential business information.',
    responsibilities: [
      'Provide comprehensive administrative and executive support to senior management.',
      'Manage calendars, appointments, meetings and business schedules.',
      'Coordinate internal and external meetings, including agendas and meeting materials.',
      'Handle correspondence, email, reports, presentations and confidential documents.',
      'Prepare meeting minutes, follow up action points and track timely completion.',
      'Coordinate travel arrangements, itineraries, accommodation and expense claims.',
      'Act as a point of contact between the executive, clients, stakeholders and internal teams.',
      'Maintain organised records and the confidentiality of sensitive information.',
      'Support research, presentations, reports and special projects.',
      'Assist with day-to-day office and administrative coordination.',
    ],
    qualifications: [
      'Three to five years of experience as an Executive Assistant, Personal Assistant or in a similar role.',
      'Excellent written and verbal communication skills.',
      'Strong organisation and time-management abilities.',
      'Ability to manage multiple priorities and work under pressure.',
      'Strong attention to detail and problem-solving skills.',
      'Professional communication with senior executives and stakeholders.',
      'Proficiency in Microsoft Outlook, Word, Excel and PowerPoint.',
      'Discretion when handling confidential information.',
    ],
    education:
      'Bachelor’s degree in Business Administration, Management, Communications or a related field. Additional qualifications in Executive Administration, Office Management or Business Management are an advantage.',
    application: {
      ...standardApplication,
      subject: 'Executive Assistant',
    },
  },
]

export const faqs = [
  {
    id: 'what-synthify-does',
    question: 'What does Synthify do?',
    answer:
      'Synthify is a Dubai-based recruitment and HR consultancy. Its live service portfolio covers bulk recruitment, employee training and development, HR consulting and organisational development, payroll solutions, and recruitment and executive search.',
  },
  {
    id: 'sectors-served',
    question: 'Which sectors does Synthify support?',
    answer:
      'Synthify works across oil and gas, petrochemicals, construction, marine, automotive, banking and capital markets, power and utilities, infrastructure, hospitality, manufacturing, and information technology.',
  },
  {
    id: 'where-based',
    question: 'Where is Synthify based?',
    answer:
      'Synthify is based in Business Bay, Dubai, UAE, and its work is informed by the talent market, culture and employment context of the wider GCC.',
  },
  {
    id: 'recruitment-process',
    question: 'How does the recruitment process work?',
    answer:
      'The process starts by defining the role, hiring priorities and timeline. Synthify then sources and screens candidates, coordinates interviews and supports the offer, placement and onboarding stages as required.',
  },
  {
    id: 'bulk-recruitment',
    question: 'When is bulk recruitment the right approach?',
    answer:
      'Bulk recruitment is suited to organisations hiring a large number of people within a defined period, including teams expanding, launching a project or scaling operations. The approach brings workforce planning, sourcing, screening and interview coordination into one programme.',
  },
  {
    id: 'training-programmes',
    question: 'What training and development support is available?',
    answer:
      'Programmes can include training-needs analysis, customised team learning, leadership development, communication and behavioural skills, teamwork, problem-solving and performance coaching.',
  },
  {
    id: 'get-started',
    question: 'How can I discuss a hiring need or apply for a role?',
    answer:
      'Employers can book a consultation through the contact page. Candidates can browse the live jobs, apply for a specific role with a PDF CV of up to 2 MB, or share their details through the careers page.',
  },
]

export const insights = [
  {
    slug: 'abu-dhabi-enacts-hr-reforms-focused-on-merit-and-performance',
    title: 'Abu Dhabi Enacts HR Reforms Focused on Merit and Performance',
    excerpt:
      'Abu Dhabi has introduced a human resources law focused on merit-based governance, workplace efficiency and talent development across government entities.',
    date: '6 September 2019',
    author: 'Synthify HRM',
    image: './assets/generated/gcc-expertise.webp',
    content: [
      'Abu Dhabi has introduced a new human resources law aimed at reinforcing meritocracy, improving workplace efficiency and strengthening talent development across government entities. The move reflects the emirate’s broader aim to modernise public-sector administration and create a more performance-led institutional culture.',
      'The legislation focuses on making recruitment, promotion and career progression within government organisations more closely linked to qualifications, competencies and measurable performance outcomes. The framework is intended to support fairness, transparency and accountability in public service while attracting skilled professionals.',
      'Under the updated law, government entities are expected to use more structured systems to evaluate employee performance and leadership potential. The reforms are also intended to streamline HR procedures, strengthen employee-development programmes and align workforce policies with recognised international practices.',
      'The initiative forms part of Abu Dhabi’s work to build a competitive, future-ready public sector capable of supporting economic diversification and sustainable growth. By prioritising merit and innovation, the government aims to encourage excellence and continuous improvement.',
      'The emphasis on merit-based advancement may also strengthen employee motivation and organisational productivity across government departments. The reform positions talent management as a practical part of wider institutional modernisation.',
      'As governments place greater focus on efficiency and talent management, Abu Dhabi’s reforms signal a strategic commitment to stronger public-sector performance and more equal opportunities for professional growth.',
    ],
  },
]

export const privacySections = [
  {
    title: 'Overview',
    paragraphs: [
      'Last updated: 03-06-2026.',
      'Synthify is committed to protecting personal information and providing a secure experience on synthify.ae. This policy explains how information is collected, used, disclosed and safeguarded when someone visits the website or interacts with its services.',
    ],
  },
  {
    title: '1. Information We Collect',
    paragraphs: [
      'Personal information may include a name, email address, phone number, company name and any details voluntarily submitted through forms or communications.',
      'Non-personal information may be collected automatically, including IP address, browser type and version, device information, pages visited, time spent on the website and referring URLs.',
      'Cookies and similar technologies may be used to support the browsing experience, understand website traffic and personalise content.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    paragraphs: [
      'Information may be used to provide, operate and maintain the website; respond to enquiries and support requests; improve website experience and performance; send updates or marketing communications when a user opts in; protect security and prevent fraud; and meet legal obligations.',
    ],
  },
  {
    title: '3. Sharing Your Information',
    paragraphs: [
      'Synthify does not sell or rent personal information. Information may be shared with trusted service providers that help operate the website or services, with legal authorities where required by law or legal process, or as part of a merger, acquisition or asset sale.',
      'Third parties that receive information are expected to keep it secure and confidential.',
    ],
  },
  {
    title: '4. Data Security',
    paragraphs: [
      'Appropriate technical and organisational measures are used to protect personal data from unauthorised access, misuse, alteration or disclosure. No method of internet transmission is completely secure, so absolute security cannot be guaranteed.',
    ],
  },
  {
    title: '5. Your Rights',
    paragraphs: [
      'Depending on location, a person may have the right to access the personal data held about them, request corrections or updates, request deletion, or withdraw consent for marketing communications. Requests can be sent to info@synthify.ae.',
    ],
  },
  {
    title: '6. Third-Party Links',
    paragraphs: [
      'The website may link to external sites. Synthify is not responsible for their content or privacy practices, and visitors are encouraged to review the privacy policy of each external service they use.',
    ],
  },
  {
    title: '7. Cookies',
    paragraphs: [
      'Cookies can be disabled through browser settings. Some parts of the website may not function as intended when cookies are disabled.',
    ],
  },
  {
    title: '8. Children’s Privacy',
    paragraphs: [
      'Synthify’s services are not intended for children under 13, or the applicable minimum age in a visitor’s jurisdiction, and Synthify does not knowingly collect their personal data.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    paragraphs: [
      'This policy may be updated from time to time. Changes will be published on the website with an updated revision date, and visitors are encouraged to review the policy periodically.',
    ],
  },
  {
    title: '10. Contact',
    paragraphs: [
      'Questions about this policy or the way personal data is handled can be sent to info@synthify.ae.',
    ],
  },
]

export const termsSections = [
  {
    title: 'Overview',
    paragraphs: [
      'Last updated: 06-04-2026.',
      'By accessing or using synthify.ae, a visitor agrees to these Terms & Conditions. Anyone who does not agree with them should not use the website.',
    ],
  },
  {
    title: '1. Use of the Website',
    paragraphs: [
      'The website may be used only for lawful purposes. Users must not harm, disrupt or interfere with the website, attempt to gain unauthorised access to systems or data, or knowingly provide inaccurate or incomplete information when information is required.',
      'Synthify may restrict or terminate access when these terms are violated.',
    ],
  },
  {
    title: '2. Intellectual Property',
    paragraphs: [
      'Content on synthify.ae, including text, graphics, logos, design, images, video, software, branding and trademarks, belongs to Synthify or its licensors and is protected by applicable intellectual-property law. It may not be copied, reproduced, distributed or used without prior written permission.',
    ],
  },
  {
    title: '3. Services and Content',
    paragraphs: [
      'Synthify aims to keep website information accurate and current but does not guarantee that all content is complete or error-free. Services and website features may be changed, suspended or discontinued without notice.',
    ],
  },
  {
    title: '4. User Submissions',
    paragraphs: [
      'When a user submits an enquiry, feedback or other data, they permit Synthify to use, reproduce and process that information for business purposes and confirm that the submission does not violate applicable law or third-party rights.',
    ],
  },
  {
    title: '5. Third-Party Links',
    paragraphs: [
      'External links are provided for convenience. Synthify does not control or endorse third-party content and is not responsible for the practices, policies or services of external websites.',
    ],
  },
  {
    title: '6. Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, Synthify will not be liable for direct, indirect, incidental or consequential loss arising from use of the website, including loss of data, revenue or business. Use of the website is at the user’s own risk.',
    ],
  },
  {
    title: '7. Disclaimer',
    paragraphs: [
      'The website and its content are provided on an “as is” and “as available” basis. Synthify makes no express or implied warranty about website availability or the accuracy, reliability or suitability of published information.',
    ],
  },
  {
    title: '8. Privacy',
    paragraphs: [
      'Use of the website is also governed by Synthify’s Privacy Policy, which explains how personal information is handled.',
    ],
  },
  {
    title: '9. Changes to These Terms',
    paragraphs: [
      'Synthify may update these Terms & Conditions. Changes take effect when posted, and continued use of the website after an update constitutes acceptance of the revised terms.',
    ],
  },
  {
    title: '10. Governing Law',
    paragraphs: [
      'These Terms & Conditions are governed by the laws of the United Arab Emirates. Disputes arising from them are subject to the exclusive jurisdiction of the courts of the UAE.',
    ],
  },
  {
    title: '11. Contact',
    paragraphs: [
      'Questions about these Terms & Conditions can be sent to info@synthify.ae.',
    ],
  },
]

export const socialLinks = [
  { label: 'LinkedIn', href: contactInfo.linkedin },
  { label: 'Instagram', href: contactInfo.instagram },
]

export const footerGroups = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Team', to: '/team' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Services', to: '/services' },
      { label: 'Sectors', to: '/sectors' },
      { label: 'Jobs', to: '/jobs' },
      { label: 'Careers', to: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Insights', to: '/insights' },
      { label: 'FAQs', to: '/faq' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
]

export const copyrightYear = 2026
