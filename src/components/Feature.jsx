
import { useRef, useState } from 'react';
import { GitBranch, Bell, BarChart3, MousePointerClick, Check } from 'lucide-react';
import { useInView } from 'motion/react';

const features = [
  {
    icon: GitBranch,
    title: 'Visual Pipeline',
    description: 'Drag and drop jobs through your custom pipeline stages. See your entire job search at a glance.',
    color: 'hsl(187, 100%, 50%)',
    metrics: ['Kanban view', 'Custom stages', 'Drag & drop'],
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Never miss a follow-up. AI-powered reminders keep you on track with interviews and deadlines.',
    color: 'hsl(305, 100%, 50%)',
    metrics: ['Auto follow-ups', 'Calendar sync', 'Push notifications'],
  },
  {
    icon: BarChart3,
    title: 'Success Analytics',
    description: 'Visualize your success rate with beautiful charts. Understand what\'s working and optimize.',
    color: 'hsl(110, 100%, 62%)',
    metrics: ['Success rates', 'Weekly trends', 'Industry insights'],
  },
  {
    icon: MousePointerClick,
    title: 'One-Click Apply',
    description: 'Save job postings instantly. Auto-fill applications and track everything in one place.',
    color: 'hsl(51, 100%, 50%)',
    metrics: ['Browser extension', 'Auto-save', 'Quick apply'],
  },
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      ref={ref}
      className="relative h-80 perspective-1000 bg-linear-to-r from-cyan-50 to-purple-50 rounded-2xl cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}
      >
        {/* Front */}
        <div 
          className="flip-card-front p-8 rounded-2xl cursor-pointer"
          style={{ 
            background: `linear-gradient(145deg, ${feature.color}15, rgba(15, 15, 20, 0.95))`,
            border: `1px solid ${feature.color}30`,
            boxShadow: `0 0 40px ${feature.color}10, 0 20px 60px rgba(0,0,0,0.3)`,
          }}
        >
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
            style={{ 
              background: `linear-gradient(135deg, ${feature.color}25, ${feature.color}10)`,
              border: `1px solid ${feature.color}40`,
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-display font-bold mb-3">{feature.title}</h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

          {/* Hover hint */}
          <div className="absolute bottom-6 left-8 text-xs text-muted-foreground">
            Hover for details →
          </div>

          {/* Corner accent */}
          <div 
            className="absolute top-0 right-0 w-20 h-20 opacity-20"
            style={{
              background: `radial-gradient(circle at top right, ${feature.color}, transparent 70%)`,
            }}
          />
        </div>

        {/* Back */}
        <div 
          className="flip-card-back p-8 rounded-2xl"
          style={{ 
            background: `linear-gradient(145deg, ${feature.color}20, rgba(10, 10, 15, 0.98))`,
            border: `1px solid ${feature.color}50`,
            boxShadow: `inset 0 0 30px ${feature.color}10`,
          }}
        >
          <h4 className="text-lg font-display font-bold mb-6" style={{ color: feature.color }}>
            Key Features
          </h4>

          <div className="space-y-4">
            {feature.metrics.map((metric, i) => (
              <div
                key={metric}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isFlipped ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: `${feature.color}30` }}
                >
                  <Check className="w-4 h-4" style={{ color: feature.color }} />
                </div>
                <span className="text-foreground font-medium">{metric}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex justify-between text-sm">
              <div>
                <div className="text-2xl font-display font-bold" style={{ color: feature.color }}>
                  {98 - index * 3}%
                </div>
                <div className="text-muted-foreground">User satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold" style={{ color: feature.color }}>
                  {2 + index}x
                </div>
                <div className="text-muted-foreground">Faster tracking</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: `0 0 60px ${feature.color}20`,
          opacity: isFlipped ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

 function Feature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      {/* Section header */}
      <div
        className="text-center max-w-3xl mx-auto mb-20 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          <span className="text-foreground">Everything you need to </span>
          <span className="text-glow" style={{ color: 'hsl(187, 100%, 50%)' }}>land your dream job</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Powerful features designed to give you an unfair advantage in your job search.
        </p>
      </div>

      {/* Features grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div
        className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div
        className="absolute bottom-20 right-10 w-3 h-3 rounded-full bg-secondary"
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
}


export default Feature;