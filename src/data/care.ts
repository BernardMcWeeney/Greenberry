// Care plans data structure (unchanged)
export interface CarePlan {
  name: 'Care Basic' | 'Care Plus' | 'Care Pro';
  monthlyPrice: number;
  yearlyPrice: number;
  onboardingFee: number;
  features: string[];
  responseTime: string;
  suitable: string;
}

export const carePlans: CarePlan[] = [
  {
    name: 'Care Basic',
    monthlyPrice: 40,
    yearlyPrice: 480,
    onboardingFee: 199,
    features: [
      'Monthly security updates',
      'Plugin & theme updates',
      'Daily backups (30-day retention)',
      'Uptime monitoring',
      'Basic performance optimization',
      '1 support ticket/month'
    ],
    responseTime: 'Same day (12 hours for P1)',
    suitable: 'Simple sites with minimal changes'
  },
  {
    name: 'Care Plus',
    monthlyPrice: 50,
    yearlyPrice: 720,
    onboardingFee: 199,
    features: [
      'Bi-weekly security updates',
      'Proactive security hardening',
      'Daily backups (60-day retention)',
      'Performance monitoring & optimization',
      'Monthly health reports',
      '3 support tickets/month',
      'Content updates (up to 2/month)'
    ],
    responseTime: 'Same day (8 hours for P1)',
    suitable: 'Active sites needing regular attention'
  },
  {
    name: 'Care Pro',
    monthlyPrice: 60,
    yearlyPrice: 480,
    onboardingFee: 199,
    features: [
      'Weekly security updates',
      'Advanced security with WAF',
      'Real-time backups (90-day retention)',
      'Priority performance optimization',
      'Weekly health reports',
      'Unlimited support tickets',
      'Content updates (up to 5/month)',
      'Staging environment',
      'Emergency response (4 hours)'
    ],
    responseTime: 'Same day (4 hours for P1)',
    suitable: 'Mission-critical sites requiring maximum care'
  }
];
