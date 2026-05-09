import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Calculator,
  ChartNoAxesCombined,
  ClipboardCheck,
  FileCheck2,
  Landmark,
  LockKeyhole,
  MessageSquareText,
  ReceiptText,
  Scale,
  ShieldCheck,
  Sparkles,
  Timer,
  TrendingUp,
  Users,
} from 'lucide-react';
import caPrincipal from '../assets/gallery/ca-principal.png';
import staffCollaboration from '../assets/gallery/staff-collaboration.png';
import officeBoardroom from '../assets/gallery/office-boardroom.svg';
import auditDesk from '../assets/gallery/audit-desk.png';
import clientConsultation from '../assets/gallery/client-consultation.svg';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Team', href: '#team' },
  { label: 'Proof', href: '#proof' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats = [
  { label: 'Years of advisory experience', value: 12, suffix: '+' },
  { label: 'Clients served across sectors', value: 420, suffix: '+' },
  { label: 'Tax filings managed', value: 3100, suffix: '+' },
  { label: 'Business consultations', value: 850, suffix: '+' },
];

export const timeline = [
  {
    year: '2012',
    title: 'CA Practice Founded',
    description: 'Established a compliance-first practice for founders, professionals, and family businesses.',
  },
  {
    year: '2016',
    title: 'GST Advisory Desk',
    description: 'Built a dedicated indirect tax desk for filing, reconciliation, notices, and compliance strategy.',
  },
  {
    year: '2020',
    title: 'Virtual CFO Services',
    description: 'Expanded into management reporting, cash-flow controls, and executive finance advisory.',
  },
  {
    year: '2025',
    title: 'Strategic Growth Office',
    description: 'Integrated tax, audit, and business consulting into a premium finance partner model.',
  },
];

export const credentials = [
  {
    icon: BadgeCheck,
    title: 'Chartered Accountant',
    description: 'Qualified CA practice with strict professional standards and ethical financial governance.',
  },
  {
    icon: ShieldCheck,
    title: 'Audit & Assurance',
    description: 'Controls-led audits, financial statement review, and management-level reporting clarity.',
  },
  {
    icon: Landmark,
    title: 'Tax Strategy',
    description: 'Direct and indirect tax planning aligned with compliance, documentation, and business goals.',
  },
];

export const services = [
  {
    icon: Calculator,
    title: 'Tax Planning',
    description: 'Forward-looking direct tax strategies for individuals, founders, and growing businesses.',
  },
  {
    icon: ReceiptText,
    title: 'GST Filing',
    description: 'Accurate filing, reconciliation, notices, and compliance calendars with zero loose ends.',
  },
  {
    icon: FileCheck2,
    title: 'Auditing',
    description: 'Statutory, internal, and process audits with clear reporting and actionable controls.',
  },
  {
    icon: BarChart3,
    title: 'Financial Consulting',
    description: 'Cash-flow planning, performance dashboards, budgeting, and decision-ready reporting.',
  },
  {
    icon: Building2,
    title: 'Business Registration',
    description: 'Entity setup, registrations, documentation, and early compliance architecture.',
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Management',
    description: 'A structured compliance operating rhythm that reduces deadline and penalty risk.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description: 'Tax-aware portfolio guidance and financial planning for long-horizon wealth decisions.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Startup Consulting',
    description: 'Founder-friendly finance systems, registrations, projections, and investor diligence support.',
  },
];

export const galleryItems = [
  {
    title: 'Principal advisory desk',
    category: 'CA Sir',
    image: caPrincipal,
    description: 'Senior-led consultation environment for taxation, audit, and strategic finance planning.',
    featured: true,
  },
  {
    title: 'Compliance team review',
    category: 'Staff',
    image: staffCollaboration,
    description: 'Structured review sessions across GST, filings, reconciliation, and client reporting.',
  },
  {
    title: 'Client meeting room',
    category: 'Office',
    image: officeBoardroom,
    description: 'A calm, confidential office setting for business owners and finance leaders.',
  },
  {
    title: 'Audit documentation desk',
    category: 'Audit',
    image: auditDesk,
    description: 'Evidence-led audit preparation, schedules, and control documentation.',
  },
  {
    title: 'Consultation in progress',
    category: 'Clients',
    image: clientConsultation,
    description: 'Practical financial guidance designed for clarity, confidence, and execution.',
  },
];

export const teamMembers = [
  {
    name: 'CA Person',
    role: 'Founder & Principal Chartered Accountant',
    image: caPrincipal,
    icon: Award,
    expertise: ['Tax strategy', 'Audit assurance', 'Virtual CFO'],
    description: 'Leads complex advisory, review, and client strategy mandates with a governance-first approach.',
  },
  {
    name: 'Senior Compliance Desk',
    role: 'GST, filings, and statutory coordination',
    image: staffCollaboration,
    icon: ClipboardCheck,
    expertise: ['GST filing', 'ROC support', 'Compliance calendars'],
    description: 'Keeps recurring compliance structured, reviewed, and deadline-ready across client portfolios.',
  },
  {
    name: 'Audit & Reporting Team',
    role: 'Assurance documentation and management reports',
    image: auditDesk,
    icon: FileCheck2,
    expertise: ['Internal audit', 'MIS reports', 'Controls review'],
    description: 'Turns financial records into clean schedules, audit trails, and decision-ready reporting packs.',
  },
];

export const trustDrivers = [
  { icon: Scale, label: 'Transparency', value: 98, suffix: '%', copy: 'Clear scope, clean documentation, and practical explanations.' },
  { icon: ChartNoAxesCombined, label: 'Accuracy', value: 99, suffix: '%', copy: 'Review-led delivery for filings, reconciliations, and reports.' },
  { icon: Users, label: 'Client Satisfaction', value: 96, suffix: '%', copy: 'Responsive, relationship-driven service for long-term clients.' },
  { icon: LockKeyhole, label: 'Secure Handling', value: 100, suffix: '%', copy: 'Confidential financial records handled with disciplined controls.' },
  { icon: MessageSquareText, label: 'Expert Consultation', value: 850, suffix: '+', copy: 'Structured sessions that turn complexity into decisive action.' },
  { icon: Timer, label: 'Fast Response', value: 24, suffix: 'h', copy: 'Priority query resolution for active clients and urgent matters.' },
];

export const testimonials = [
  {
    quote: 'CA Person brought the level of financial discipline we expected from a much larger advisory firm. Our tax, GST, and monthly reporting finally speak the same language.',
    name: 'Rohan Mehta',
    role: 'Founder, SaaS Operations',
  },
  {
    quote: 'The audit process was rigorous without slowing the business. Every recommendation was specific, practical, and immediately useful to our management team.',
    name: 'Ananya Shah',
    role: 'Director, Manufacturing Group',
  },
  {
    quote: 'We moved from reactive compliance to a predictable finance calendar. That alone saved leadership hours every month.',
    name: 'Vikram Rao',
    role: 'Partner, Professional Services',
  },
  {
    quote: 'The startup registration and financial model support helped us enter investor conversations with confidence and proper documentation.',
    name: 'Nisha Kapoor',
    role: 'Co-founder, Consumer Tech',
  },
];

export const caseStudies = [
  {
    metric: '18%',
    label: 'tax efficiency improved',
    title: 'Tax Savings Architecture',
    description: 'Restructured deductions, advance tax planning, and documentation flow for a multi-entity services group.',
    chart: [46, 58, 52, 68, 79, 88],
  },
  {
    metric: '21 days',
    label: 'to full registration readiness',
    title: 'Startup Launch Compliance',
    description: 'Built entity setup, GST registration, founder documentation, and first-year compliance calendar.',
    chart: [22, 36, 44, 62, 74, 91],
  },
  {
    metric: '34%',
    label: 'audit cycle time reduced',
    title: 'Audit Optimization',
    description: 'Introduced evidence trails, pre-close checks, and control mapping for a recurring statutory audit.',
    chart: [72, 66, 52, 44, 38, 31],
  },
  {
    metric: '3.2x',
    label: 'forecast clarity increased',
    title: 'Growth Advisory Model',
    description: 'Created board-ready cash-flow scenarios, margin dashboards, and strategic finance review cadence.',
    chart: [20, 28, 41, 57, 76, 96],
  },
];

export const insights = [
  {
    category: 'Tax Updates',
    title: 'How proactive tax planning changes year-end outcomes',
    readTime: '6 min read',
  },
  {
    category: 'GST Guides',
    title: 'A practical GST reconciliation checklist for growing teams',
    readTime: '5 min read',
  },
  {
    category: 'Startup Finance',
    title: 'The founder finance stack before your first diligence round',
    readTime: '8 min read',
  },
  {
    category: 'Business Law',
    title: 'Compliance calendars that protect management bandwidth',
    readTime: '4 min read',
  },
];

export const contactDetails = [
  { label: 'Office', value: 'Financial District, Mumbai' },
  { label: 'Hours', value: 'Mon-Sat, 10:00 AM - 7:00 PM' },
  { label: 'Email', value: 'consult@caperson.in' },
  { label: 'Phone', value: '+91 98765 43210' },
];

export const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: ArrowUpRight },
  { label: 'X', href: '#', icon: ArrowUpRight },
  { label: 'YouTube', href: '#', icon: ArrowUpRight },
];
