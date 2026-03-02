
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, Zap, Crown, Building2 } from 'lucide-react';
import { Link } from 'react-router';


const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    icon: Zap,
    color: 'hsl(187, 100%, 50%)',
    popular: false,
    features: [
      'Track up to 25 jobs',
      'Basic pipeline view',
      'Weekly analytics',
      'Email reminders',
      'CSV export',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/month',
    description: 'For serious job seekers',
    icon: Crown,
    color: 'hsl(305, 100%, 50%)',
    popular: true,
    features: [
      'Unlimited job tracking',
      'Advanced Kanban board',
      'Real-time analytics',
      'Smart reminders & AI insights',
      'Resume & cover letter storage',
      'Priority support',
      'Browser extension',
    ],
    cta: 'Start Pro Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams and organizations',
    icon: Building2,
    color: 'hsl(51, 100%, 50%)',
    popular: false,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Admin dashboard',
      'SSO & advanced security',
      'Custom integrations',
      'Dedicated success manager',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
  },
];

function PricingCard({ plan, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <div
      ref={ref}
      className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div 
            className="px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{ 
              background: plan.color,
              color: 'hsl(240, 10%, 4%)',
              boxShadow: `0 0 20px ${plan.color}50`,
            }}
          >
            Most Popular
          </div>
        </div>
      )}

      <div
        className={`glass-card p-8 rounded-3xl h-full relative overflow-hidden group ${
          plan.popular ? 'border-2' : ''
        }`}
        style={{
          borderColor: plan.popular ? `${plan.color}50` : undefined,
          boxShadow: plan.popular 
            ? `0 0 60px ${plan.color}20, 0 30px 80px rgba(0,0,0,0.4)` 
            : '0 20px 60px rgba(0,0,0,0.3)',
        }}
        whileHover={{ 
          scale: 1.02, 
          boxShadow: `0 0 80px ${plan.color}30, 0 40px 100px rgba(0,0,0,0.5)`,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at top, ${plan.color}10, transparent 60%)`,
          }}
        />

        {/* Icon */}
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
          style={{ 
            background: `linear-gradient(135deg, ${plan.color}25, ${plan.color}10)`,
            border: `1px solid ${plan.color}40`,
          }}
        >
          <plan.icon className="w-7 h-7" style={{ color: plan.color }} />
        </div>

        {/* Plan name */}
        <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
        <p className="text-muted-foreground mb-6">{plan.description}</p>

        {/* Price */}
        <div className="mb-8">
          <span className="text-5xl font-display font-bold" style={{ color: plan.color }}>
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-muted-foreground">{plan.period}</span>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, i) => (
            <li
              key={feature}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.05 }}
            >
              <div 
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: `${plan.color}25` }}
              >
                <Check className="w-3 h-3" style={{ color: plan.color }} />
              </div>
              <span className="text-foreground/90">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link to="/dashboard">
          
          <button
            className={`w-full h-12 text-lg font-semibold ${
              plan.popular 
                ? 'gradient-neon text-white border-0 neon-glow' 
                : 'glass-card border-border/50 hover:border-primary/50'
            }`}
            variant={plan.popular ? 'default' : 'outline'}
            
          >
            {plan.cta}
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

 function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref} id="pricing">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at bottom, hsla(187, 100%, 50%, 0.08), transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Simple, </span>
            <span className="text-glow" style={{ color: 'hsl(110, 100%, 62%)' }}>transparent</span>
            <span className="text-foreground"> pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Start free and upgrade when you're ready. No hidden fees.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Money back guarantee */}
        <div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-muted-foreground">
            🔒 30-day money-back guarantee • Cancel anytime • No questions asked
          </p>
        </div>
      </div>
    </section>
  );
}


export default Pricing ;