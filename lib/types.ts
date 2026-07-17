export type Member = {
  id: string;
  full_name: string;
  grad_year: number | null;
  profession: string | null;
  city: string | null;
  state: string | null;
  country: 'US' | 'CA' | null;
  email: string;
  linkedin_url: string | null;
  photo_url: string | null;
  is_mentor: boolean;
  is_business_owner: boolean;
  skills: string[] | null;
  help_offers: string[] | null;
  role: 'member' | 'exco' | 'president';
  exco_title: string | null;
};

export type DuesPayment = {
  id: string;
  member_id: string;
  cycle_month: string; // date, first-of-month
  amount: number;
  currency: 'USD' | 'CAD';
};
