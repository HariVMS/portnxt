"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    title?: string;
}

export default function FAQAccordion({ items, title = "Frequently Asked Questions" }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-gray-bg">
            <div className="container max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">{title}</h2>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:border-blue-100 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? 'text-primary' : 'text-slate-800'}`}>
                                    {item.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
