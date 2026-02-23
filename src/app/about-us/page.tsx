import PageHero from "@/components/layout/PageHero";
import ContentBlock from "@/components/ui/ContentBlock";
import Stats from "@/components/sections/Stats";
import { CheckCircle2, Lightbulb, Users, Target, Rocket } from "lucide-react";
import OurValues from "@/components/sections/about/OurValues";
import OurProcess from "@/components/sections/about/OurProcess";
import SuccessStories from "@/components/sections/about/SuccessStories";
import EsteemedClients from "@/components/sections/about/EsteemedClients";

export const metadata = {
    title: "About Us | Portnext Innovation",
    description: "We’re the right tech-solutions partner for all your digital innovation & transformation needs.",
};

export default function AboutUs() {
    return (
        <main>
            <PageHero
                title="Software Development & Digital Marketing Company"
                description="Portnext Innovation empowers enterprises and startups alike to stay ahead in an increasingly digital-driven market."
                breadcrumb="About Us"
            />

            {/* Our Story Section */}
            {/* Reusing the robot image from Home/About or similar. Assuming extracted as 'about-main.webp' or reusing 'robot.webp' */}
            <ContentBlock
                subtitle="WHO WE ARE"
                title="We are a pleasant team of specialists who love helping businesses develop."
                description=""
                imageSrc="/img/company/about.svg" // Need to verify if this exists, else use hero_robot
                imageAlt="About Portnext Team"
                listItems={[
                    "Software Development & Digital Marketing Specialists",
                    "Creating top-notch software answers just for you",
                    "Smart marketing strategies that bring you more customers"
                ]}
                ctaText="Discover More"
                ctaLink="/services/web-development"
            />

            {/* Detailed Story Paragraphs */}
            <section className="py-10 bg-white -mt-10">
                <div className="container max-w-4xl text-slate-600 text-lg leading-relaxed space-y-6">
                    <p>
                        Welcome to Portnext Innovation Pvt. Ltd. We're a pleasant team of specialists who love helping businesses develop. Our enterprise focuses on the most important areas: Software Development and Digital Marketing. We accept it as true in creating an international effect, and our intention is to help our customers shine inside the Digital world.
                    </p>
                    <p>
                        At Portnext, we create top-notch software answers just for you. Whether or not you need web development, a mobile app, or even special solutions like blockchain and IoT, we’ve given you covered. Our talented team works carefully with you to understand your desires and innovate your ideas into truth. We use the latest technology to ensure your software program is not just good, but the best.
                    </p>
                    <p>
                        But that's not all! We also provide top-notch digital marketing services. In today’s busy world, it’s important to stand out. Our team knows just how to help your business get noticed. We create smart marketing strategies that bring you more customers and help your business grow.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-gray-bg">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Lightbulb size={120} className="text-primary" />
                            </div>
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-primary">
                                <Lightbulb size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We visualize a dynamic world where businesses flourish and individuals achieve their dreams through our innovative digital solutions. We provide essential software and services that empower entrepreneurs and professionals, making success more accessible and helping them realize their full potential.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Target size={120} className="text-accent" />
                            </div>
                            <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 text-accent">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Our mission is to empower businesses of all sizes by delivering exceptional digital solutions that drive growth, streamline operations, and enhance customer experiences. We are committed to providing innovative strategies and solutions that inspire transformation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">WHY CHOOSE US</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What sets Portnext Innovation apart</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Quality is our commitment", icon: CheckCircle2, desc: "By utilizing industry best practices and cutting-edge tools, we strive to transform your digital innovation into flawless experiences.", color: "text-blue-500", bg: "bg-blue-50" },
                            { title: "Innovation at Heart", icon: Lightbulb, desc: "We believe in staying ahead of the curve. Innovation is at the core of everything we do.", color: "text-yellow-500", bg: "bg-yellow-50" },
                            { title: "Collaboration", icon: Users, desc: "We work closely with you. Collaboration and teamwork are essential for us to understand your goals.", color: "text-green-500", bg: "bg-green-50" },
                            { title: "Lasting Impact", icon: Rocket, desc: "Our relationship doesn't end at deployment. We are dedicated to providing ongoing support.", color: "text-purple-500", bg: "bg-purple-50" },
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-300 group">
                                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-6`}>
                                    <item.icon size={28} className={item.color} />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reusing Home Stats because it's relevant */}
            <Stats />
            {/* Vision & Mission */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Vision Card */}
                        <div className="bg-white p-12 rounded-[2.5rem] shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-500 relative overflow-hidden group border border-slate-100">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Lightbulb size={120} className="text-secondary-blue" />
                            </div>
                            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                                <Lightbulb size={40} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                We visualize a dynamic world where businesses flourish and individuals achieve their dreams through our innovative digital solutions. We provide essential software and services that empower entrepreneurs and professionals, making success more accessible and helping them realize their full potential.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-white p-12 rounded-[2.5rem] shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-500 relative overflow-hidden group border border-slate-100">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Target size={120} className="text-secondary-peach" />  
                            </div>
                            <div className="w-20 h-20 bg-pink-50 rounded-2xl flex items-center justify-center mb-8 text-accent group-hover:scale-110 transition-transform duration-500">
                                <Target size={40} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Our mission is to empower businesses of all sizes by delivering exceptional digital solutions that drive growth, streamline operations, and enhance customer experiences. We are committed to providing innovative strategies and solutions that inspire transformation and promote lasting success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <OurValues />

            <OurProcess />


            <SuccessStories />

            <EsteemedClients />
        </main>
    );
}
