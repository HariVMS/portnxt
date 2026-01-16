import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PageLayout({ children, title }: { children: React.ReactNode, title: string }) {
    return (
        <main className="min-h-fit pt-32 pb-20">
            <Header />
            <div className="container">
                <h1 className="text-4xl font-bold mb-8">{title}</h1>
                {children}
            </div>
            {/* <Footer /> */}
        </main>
    );
}
