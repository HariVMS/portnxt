import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import ContentBlock from "@/components/ui/ContentBlock";
import ServiceFeatures from "@/components/sections/ServiceFeatures";
import FAQAccordion from "@/components/ui/FAQAccordion";
import RelatedServices from "@/components/sections/RelatedServices";
import { servicesData } from "@/data/services";

// Define params type correctly for Next.js 15+ (Promise based)
interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const service = servicesData[slug] || servicesData["default"];

    return {
        title: `${service.title} | Makelink Innovation`,
        description: service.description,
    };
}

// Generate static params for all known services to enable static export if needed
export async function generateStaticParams() {
    return Object.keys(servicesData).filter(key => key !== "default").map((slug) => ({
        slug,
    }));
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        // If we want to show a default page for non-implemented services instead of 404
        // return <ServicePageContent slug={slug} data={servicesData["default"]} />;
        // But for "ditto" accuracy, better to 404 or show generic. 
        // User asked to implement content for *other* routes.
        // I will fallback to default if not found but with title capitalization
        const defaultService = {
            ...servicesData["default"],
            title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + " Services"
        };
        return <ServicePageContent slug={slug} data={defaultService} />;
    }

    return <ServicePageContent slug={slug} data={service} />;
}

function ServicePageContent({ slug, data }: { slug: string, data: any }) {
    return (
        <main>
            <PageHero
                title={data.title}
                description={data.description}
                breadcrumb={data.title} // Or just "Services"
            />

            <ContentBlock
                subtitle="SERVICE OVERVIEW"
                title={data.intro.heading}
                description={data.intro.content}
                imageSrc="/img/Home/about_us_robot.webp" // Reuse robot or use specific service icon/image if available
                imageAlt={data.title}
                ctaText="Get Started"
                ctaLink="/contact-us"
                reverse={false}
            />

            {data.features && data.features.length > 0 && (
                <ServiceFeatures features={data.features} />
            )}

            {data.faq && data.faq.length > 0 && (
                <FAQAccordion items={data.faq} />
            )}

            <RelatedServices currentSlug={slug} />
        </main>
    );
}
