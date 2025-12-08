import { LucideIcon } from 'lucide-react';

export type Language = 'tr' | 'de' | 'en' | 'ar';

export interface LocalizedString {
  tr: string;
  de: string;
  en: string;
  ar: string;
}

export interface ServiceItem {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
  icon: LucideIcon;
}

export interface ProjectItem {
  id: number;
  title: LocalizedString;
  category: 'residential' | 'commercial' | 'industrial' | 'automation';
  categoryLabel: LocalizedString;
  thumbnailUrl: string;
  gallery: string[];
  description: LocalizedString;
  fullDescription: LocalizedString;
  completionDate: LocalizedString; // Display text
  dateValue: string; // YYYY-MM for sorting
  location: string;
  technicalSpecs?: { label: LocalizedString; value: string }[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: LocalizedString;
  comment: LocalizedString;
  avatar: string;
}