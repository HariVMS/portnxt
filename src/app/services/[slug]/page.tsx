import { notFound } from "next/navigation";
import { servicesData, defaultService } from "@/data/services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

// Define params type correctly for Next.js 15+ (Promise based)
interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const service = servicesData[slug] || defaultService;

    return {
        title: `${service.title} | Makelink Innovation`,
        description: service.description,
    };
}

// Generate static params for all known services to enable static export if needed
export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        // Fallback to default if not found
        // In a real app, you might want to show a 404 or a generic "Services" page
        // For now, we show the default but with the slug's title formatted
        const fallbackService = {
            ...defaultService,
            title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        };
        return <ServicePageTemplate data={fallbackService} />;
    }

    return <ServicePageTemplate data={service} />;
}
