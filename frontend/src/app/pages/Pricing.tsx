import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Star, DollarSign } from 'lucide-react';
import { Button } from '../components/Button';
import { Card, CardContent, CardHeader } from '../components/Card';
import { TrialModal } from '../components/TrialModal';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<string>('6-month');
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  const pricingPlans = [
    {
      name: 'Basic',
      description: 'Perfect for getting started',
      pricing: {
        monthly: 149,
        '6-month': 139,
        yearly: 129,
      },
      features: [
        'Unlimited classes',
        'All programs access',
        'Beginner curriculum',
        'Open mat sessions',
        'Community events',
      ],
    },
    {
      name: 'Premium',
      description: 'Our most popular plan',
      isPopular: true,
      pricing: {
        monthly: 179,
        '6-month': 169,
        yearly: 159,
      },
      features: [
        'Everything in Basic',
        'Private lesson credits (2/month)',
        'Competition training',
        'Video analysis',
        'Priority scheduling',
        'Gym merchandise discount',
      ],
    },
    {
      name: 'Elite',
      description: 'For serious competitors',
      pricing: {
        monthly: 229,
        '6-month': 219,
        yearly: 199,
      },
      features: [
        'Everything in Premium',
        'Private lesson credits (4/month)',
        'Competition entry support',
        'Nutrition guidance',
        'Custom training plan',
        'Guest passes (2/month)',
        'Free gi (yearly)',
      ],
    },
  ];

  const features = [
    { name: 'Unlimited Classes', basic: true, premium: true, elite: true },
    { name: 'All Programs Access', basic: true, premium: true, elite: true },
    { name: 'Open Mat Sessions', basic: true, premium: true, elite: true },
    { name: 'Community Events', basic: true, premium: true, elite: true },
    { name: 'Private Lessons (2/mo)', basic: false, premium: true, elite: true },
    { name: 'Competition Training', basic: false, premium: true, elite: true },
    { name: 'Video Analysis', basic: false, premium: true, elite: true },
    { name: 'Private Lessons (4/mo)', basic: false, premium: false, elite: true },
    { name: 'Nutrition Guidance', basic: false, premium: false, elite: true },
    { name: 'Custom Training Plan', basic: false, premium: false, elite: true },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--accent-primary)]/10 via-background to-background py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-medium">Membership Pricing</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Invest in Yourself
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Flexible pricing options to fit your goals and budget
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center">
          <ToggleGroup.Root
            type="single"
            value={billingCycle}
            onValueChange={(value) => value && setBillingCycle(value)}
            className="inline-flex gap-1 p-1 rounded-xl bg-muted"
          >
            <ToggleGroup.Item
              value="monthly"
              className="px-6 py-3 rounded-lg font-medium transition-all data-[state=on]:bg-background data-[state=on]:shadow-sm"
            >
              Monthly
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="6-month"
              className="px-6 py-3 rounded-lg font-medium transition-all data-[state=on]:bg-background data-[state=on]:shadow-sm"
            >
              6 Months
              <span className="ml-2 px-2 py-0.5 rounded-full bg-[var(--accent-primary)] text-white text-xs">
                Popular
              </span>
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="yearly"
              className="px-6 py-3 rounded-lg font-medium transition-all data-[state=on]:bg-background data-[state=on]:shadow-sm"
            >
              Yearly
              <span className="ml-2 px-2 py-0.5 rounded-full bg-green-600 text-white text-xs">
                Save 20%
              </span>
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card
                className={`relative h-full ${
                  plan.isPopular ? 'border-2 border-[var(--accent-primary)]' : ''
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--accent-primary)] text-white text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <div className="text-5xl font-bold">
                      ${plan.pricing[billingCycle as keyof typeof plan.pricing]}
                    </div>
                    <div className="text-muted-foreground mt-2">
                      per month
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.isPopular ? 'primary' : 'outline'}
                    className="w-full"
                    size="lg"
                    onClick={() => setTrialModalOpen(true)}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Compare Plans
            </h2>
            <p className="text-lg text-muted-foreground">
              See what's included in each membership level
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-bold">Feature</th>
                  <th className="text-center p-4 font-bold">Basic</th>
                  <th className="text-center p-4 font-bold">Premium</th>
                  <th className="text-center p-4 font-bold">Elite</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="p-4">{feature.name}</td>
                    <td className="text-center p-4">
                      {feature.basic ? (
                        <Check className="w-5 h-5 text-[var(--accent-primary)] inline" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {feature.premium ? (
                        <Check className="w-5 h-5 text-[var(--accent-primary)] inline" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {feature.elite ? (
                        <Check className="w-5 h-5 text-[var(--accent-primary)] inline" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground">
            Try us risk-free with a complimentary trial class
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setTrialModalOpen(true)}>
              Book Your Free Trial
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = '/contact'}>
              Contact Us
            </Button>
          </div>
        </motion.div>
      </section>

      <TrialModal open={trialModalOpen} onOpenChange={setTrialModalOpen} />
    </div>
  );
}
