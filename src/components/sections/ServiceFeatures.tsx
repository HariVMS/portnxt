import { CheckCircle2 } from "lucide-react";

interface ServiceFeature {
  title: string;
  description: string;
  subFeatures?: string[];
}

interface ServiceFeaturesProps {
  features: ServiceFeature[];
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            KEY FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {feature.subFeatures && (
                <ul className="space-y-2">
                  {feature.subFeatures.map((sub, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-slate-600 font-medium"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-green-500 shrink-0"
                      />
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
