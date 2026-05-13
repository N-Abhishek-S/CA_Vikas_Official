import {
  BadgeCheck,
  Banknote,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Facebook,
  FileCheck2,
  FileText,
  Handshake,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ReceiptText,
  Scale,
  ShieldCheck,
  Timer,
  Twitter,
} from 'lucide-react';
import brandMark from '../assets/gallery/brand-mark.png';
import principalPhoto from '../assets/gallery/ca-principal.jpg';
import officePhoto from '../assets/gallery/staff-collaboration.jpg';
import auditDeskPhoto from '../assets/gallery/audit-desk.jpg';

export const brand = {
  name: 'VOK & Associates',
  descriptor: 'Chartered Accountants',
  logo: brandMark,
  established: '2014',
  experience: '11+',
  tagline: 'Tax • Audit • GST • Compliance',
};

export const media = {
  principal: principalPhoto,
  office: officePhoto,
  auditDesk: auditDeskPhoto,
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const companyIntro = [
  'Established in 2014, VOK & Associates has been consistently delivering professional, reliable, and business-oriented financial solutions across taxation, audit, accounting, compliance, and financial advisory.',
  'The firm supports businesses, startups, professionals, and individuals through India’s evolving financial and regulatory landscape, including GST implementation, faceless income tax assessments, digital compliance systems, updated corporate laws, and changing taxation frameworks.',
  'The practice also specializes in project finance and subsidy consultancy for agricultural, industrial, and infrastructure projects, including DPRs, CMA data, bank loan proposals, subsidy applications, and financial projections.',
];

export const visionMission = {
  vision:
    'To become a trusted and forward-thinking financial advisory firm, delivering transparent, innovative, and result-oriented solutions that empower businesses and individuals to achieve sustainable growth, financial stability, and full regulatory compliance in an evolving economic environment.',
  mission: [
    'To provide accurate, ethical, and timely professional services in taxation, audit, accounting, compliance, and financial advisory.',
    'To simplify complex financial and regulatory processes through practical and technology-driven solutions.',
    'To build long-term client relationships based on trust, integrity, confidentiality, and professional excellence.',
    'To continuously upgrade knowledge and expertise in line with changing laws, digital systems, and industry practices.',
    'To support startups, businesses, professionals, and individuals with strategic financial guidance for growth and compliance success.',
  ],
};

export const heroTrustItems = [
  { value: '11+', label: 'Years Experience' },
  { value: 'Since', label: '2014' },
  { value: 'Tax', label: 'Audit • GST • Compliance' },
];

export const serviceCategories = [
  {
    title: 'MCA & ROC Compliance',
    icon: Building2,
    description:
      'Reliable MCA and ROC compliance for Private Limited Companies, LLPs, and OPCs, from annual filings to secretarial documentation.',
    items: [
      'Annual ROC Filings (AOC-4 & MGT-7)',
      'DIR-3 KYC for Directors',
      'Board Resolutions & Meeting Documentation',
      'Statutory Registers & Secretarial Records',
      'Company Strike-Off Services',
      'LLP, OPC & Pvt Ltd Compliance',
      'Business Entity Conversion Services',
      'Secretarial Compliance Support',
      'MCA Filing & Documentation Assistance',
      'Ongoing Corporate Compliance Management',
    ],
  },
  {
    title: 'Audit & Assurance',
    icon: ShieldCheck,
    description:
      'Audit services conducted by ICAI-qualified Chartered Accountants to strengthen financial reporting, operational efficiency, and internal controls.',
    items: [
      'Statutory Audit under Companies Act, 2013',
      'Tax Audit & Form 3CD Filing',
      'Internal Audit & SOP Review',
      'Cooperative Society Audit',
      'Internal Audit for Cooperative Societies',
      'GST Audit & Compliance Review',
      'Stock Audit & Revenue Audit',
      'Forensic Audit & Investigations',
      'Financial Due Diligence',
      'Risk Assessment & Internal Control Evaluation',
      'Special Purpose Audit Assignments',
      'Compliance & Process Review Services',
      'Concurrent Audit of Bank Branches',
    ],
  },
  {
    title: 'Income Tax',
    icon: ReceiptText,
    description:
      'Accurate tax compliance, effective planning, and timely advisory for individuals, professionals, firms, and companies.',
    items: [
      'ITR Filing for Individuals, HUFs, Firms & Companies',
      'Tax Audit u/s 44AB & Form 3CD Filing',
      'Compliance as per Latest Income Tax Rules, 2025',
      'Advance Tax Computation & Strategic Tax Planning',
      'Capital Gains Planning u/s 54, 54F & 54EC',
      'NRI Taxation & DTAA Advisory',
      'Income Tax Notice Handling & Representation',
      'CIT(A) & ITAT Appeal Assistance',
      'TDS/TCS Compliance & Return Filing',
      'Business, Professional & Corporate Tax Advisory',
      'Startup & MSME Tax Compliance',
    ],
  },
  {
    title: 'GST & Indirect Tax',
    icon: FileCheck2,
    description:
      'Complete GST support from registration and returns to reconciliations, audits, refunds, and departmental representation.',
    items: [
      'New GST Registration & Amendments',
      'Monthly GSTR-1 & GSTR-3B Filing',
      'Annual GSTR-9 & GSTR-9C Reconciliation',
      'ITC Matching & GSTR-2B Reconciliation',
      'GST Audit & Department Representation',
      'E-Invoicing & E-Way Bill Management',
      'GST Notice Reply & Compliance Support',
      'LUT Filing & Refund Assistance',
      'GST Advisory for Businesses & Professionals',
      'MSME, Trader & Manufacturer GST Compliance',
      'GST Registration Cancellation & Revocation',
      'Indirect Tax Planning & Compliance Review',
    ],
  },
  {
    title: 'Loan & Subsidy Consultancy',
    icon: Banknote,
    description:
      'Funding and subsidy guidance for businesses, startups, farmers, and entrepreneurs, from documentation to approval support.',
    items: [
      'Project Report (DPR) Preparation',
      'CGTMSE Loan Assistance',
      'CMEGP & PMEGP Subsidy Consultancy',
      'Mudra Loan & MSME Loan Assistance',
      'Term Loan & Cash Credit (CC) Support',
      'Machinery & Equipment Finance',
      'Agriculture & Food Processing Subsidy Assistance',
      'Startup & MSME Funding Guidance',
      'Bank Loan Documentation & CMA Data Preparation',
      'Government Subsidy Scheme Consultancy',
      'Working Capital Loan Assistance',
      'Financial Projection & Business Planning Services',
    ],
  },
  {
    title: 'Miscellaneous Services',
    icon: ClipboardCheck,
    description:
      'Registration, accounting, reporting, bookkeeping, payroll, licensing, and business documentation support for operating teams.',
    items: [
      'FSSAI Registration & License',
      'Shop Act / Gumasta Registration',
      'Udyam (MSME) Registration',
      'IEC Code (Import Export Code)',
      'Trade License & Professional Tax Registration',
      'Accounting & Bookkeeping Services',
      'Tally Setup & Outsourced Accounting',
      'Payroll Processing & Salary Compliance',
      'MIS Reporting & Financial Statements',
      'Bank & GST Reconciliation',
      'Cooperative Society Registration',
      'Housing & Credit Society Consultancy',
      'Partnership Deed Drafting',
      'Financial Projections & CMA Report',
      'Trademark Registration',
      'GEM Portal Registration',
      'Government Tender Documentation Support',
      'Rice Mill & Food Processing Consultancy',
      'Agro & Rural Business Advisory',
      'Subsidy Guidance for Manufacturing Units',
      'Warehouse & Logistics Compliance',
    ],
  },
];

export const whyChooseUs = [
  {
    icon: Timer,
    title: '11+ Years Professional Excellence',
    copy: 'Established in 2014, the firm has evolved alongside India’s dynamic financial and regulatory environment.',
  },
  {
    icon: BadgeCheck,
    title: 'Experienced Chartered Accountants',
    copy: 'Audit and assurance work is conducted by ICAI-qualified Chartered Accountants with disciplined professional standards.',
  },
  {
    icon: Scale,
    title: 'Regulatory Expertise',
    copy: 'Clients are guided through GST, updated corporate laws, faceless assessments, digital compliance systems, and changing taxation frameworks.',
  },
  {
    icon: Handshake,
    title: 'Transparent Process',
    copy: 'The firm focuses on practical, transparent, and result-driven solutions tailored to each client’s requirements.',
  },
  {
    icon: FileText,
    title: 'Timely Compliance',
    copy: 'Professional services are delivered with accuracy, ethics, timely execution, and ongoing compliance management.',
  },
  {
    icon: BarChart3,
    title: 'Business-Focused Solutions',
    copy: 'Taxation, audit, accounting, regulatory compliance, financial advisory, project finance, and subsidy support are aligned with business needs.',
  },
];

export const testimonials = [
  {
    company: 'R.K. Rice Udyog',
    quote:
      'A highly professional and trustworthy CA firm providing valuable financial and compliance guidance to businesses, farmers, and entrepreneurs. Their dedication and service quality are truly commendable.',
  },
  {
    company: 'Kargar Business Services Private Limited',
    quote:
      'The firm has provided excellent support in ROC compliance, company filings, and financial advisory services for our HR businesses. Their professional approach, timely execution, and strong knowledge of corporate compliance make them a highly reliable consulting partner.',
  },
  {
    company: 'HR Remedy India Private Limited',
    quote:
      'We appreciate the firm’s professional support in taxation, ROC compliance, accounting, and financial advisory services. Their prompt response, technical expertise, and dependable guidance have been extremely valuable for our organization.',
  },
  {
    company: 'Shiv Agro Industries',
    quote:
      'The firm has provided excellent support in financial management, taxation, compliance, and machinery project consultancy for our business. Their practical approach, timely guidance, and professional expertise have greatly contributed to our operational growth and business planning.',
  },
  {
    company: 'Indrakshi Eye Care',
    quote:
      'The firm provides highly professional and reliable taxation, accounting, and financial advisory services with complete transparency and accuracy. Their timely guidance and client-focused approach make them a trusted financial partner.',
  },
  {
    company: 'Prayas Hospital',
    quote:
      'The firm offers excellent professional support in taxation, accounting, and financial compliance services. Their timely advice, transparency, and dependable approach have been truly valuable and trustworthy.',
  },
  {
    company: 'Matoshree Hospital',
    quote:
      'The firm provides professional and dependable support in taxation, accounting, and financial compliance services. Their timely guidance, transparency, and efficient approach make them a trusted financial advisor for medical professionals.',
  },
  {
    company: 'Mukund Sortex',
    quote:
      'We are very satisfied with the firm’s support in GST, accounting, loan, and subsidy work for our rice mill. Their timely service, clear guidance, and helpful approach make them a trusted advisor for our business.',
  },
  {
    company: 'Kanha Developers',
    quote:
      'We are very happy with the firm’s support in GST, accounting, and compliance work for our real estate projects and commercial complexes. Their simple guidance, timely service, and professional approach make financial work easy and hassle-free.',
  },
  {
    company: 'Dry Fruits Wala',
    quote:
      'The team is very friendly, supportive, and always available whenever needed. Their excellent service, clear guidance, and professional approach make all our GST, accounting, and compliance work smooth and stress-free.',
  },
];

export const contact = {
  address: 'Office No 122, 123 Shivarpan Tower, Rajiv Gandhi Square, Bhandara, Maharashtra, India, 441904',
  phones: ['7498542069', '7385542069'],
  landline: '07184-257999',
  emails: ['caoffice.vok.co.in', 'vikas@vok.co.in'],
  social: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/vokandassociates?igsh=cW85bXAzNTUwYmI0',
      icon: Instagram,
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/share/18hhymMXgu/',
      icon: Facebook,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vok-and-associates-79882b409',
      icon: Linkedin,
    },
    {
      label: 'X',
      href: 'https://x.com/vokoffice',
      icon: Twitter,
    },
  ],
};

export const contactCards = [
  {
    label: 'Office',
    value: contact.address,
    icon: MapPin,
  },
  {
    label: 'Phone',
    value: `${contact.phones.join(' / ')} • Landline: ${contact.landline}`,
    icon: Phone,
  },
  {
    label: 'Email',
    value: contact.emails.join(' / '),
    icon: Mail,
  },
  {
    label: 'Advisory Scope',
    value: 'Taxation, audit, accounting, compliance, financial advisory, project finance, and subsidy consultancy.',
    icon: BriefcaseBusiness,
  },
];
