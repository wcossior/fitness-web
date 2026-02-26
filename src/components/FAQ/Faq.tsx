import React, { useState } from 'react'
import { Question } from './Question';
import { Button } from '../Buttons/Button';
import { Background } from './Background';
import { motion, type Variants } from "framer-motion"

const faqs = [
    {
        question: "Is this for beginners or advanced lifters?",
        answer: "This system is specifically engineered for intermediate lifters who have reached a plateau. If you have mastered the basic mechanics of compound lifts but aren't seeing new muscle or strength gains, this is for you. Absolute beginners should look for foundational coaching first."
    },
    {
        question: "What equipment is mandatory?",
        answer: "Access to a fully-equipped commercial gym or a high-level home gym is required. You will need a squat rack, barbells, plates, adjustable dumbbells, and cable systems to execute the progression protocols effectively."
    },
    {
        question: "How are the workouts delivered?",
        answer: "Once you select a plan, you receive access to our digital platform where your 'Blueprint' is hosted. For 'Direct Oversight' clients, this includes interactive tracking spreadsheets and a dedicated app for performance audits and 1:1 communication."
    },
    {
        question: "Can I cancel my subscription at any time?",
        answer: "Yes. There are no long-term contracts or hidden exit fees. You have full control over your subscription through your dashboard. We believe in results keeping you here, not paperwork."
    },
    {
        question: "I have a busy schedule. How long are the sessions?",
        answer: "The system is built for efficiency. Most sessions are designed to be completed within 60 to 75 minutes. Because the volume is structured and not random, you won't waste a single minute on 'junk volume' that doesn't produce results."
    },
    {
        question: "Does the system include nutrition?",
        answer: "Yes. Both plans include data-driven nutrition templates. However, the 'Direct Oversight' plan offers personalized macro adjustments based on your weekly biometric feedback and recovery data."
    }
];

export const Faq = () => {

    const [expanded, setExpanded] = useState(false)

    return (
        <section className="py-20 pt-16 lg:pt-32 pb-32 lg:pb-45 px-6 md:px-12 lg:px-20 relative overflow-hidden">
            <Background></Background>
            <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center font-heading font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase mb-12">
                Frequently Asked <span className="text-primary">Questions</span>
            </motion.h2>

            <motion.div
                animate={{ height: expanded ? "auto" : 260 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl mx-auto space-y-4 relative overflow-hidden"
            >{
                    faqs.map((faq, i) =>
                        <Question key={i} {...faq} index={i}></Question>
                    )
                }
            </motion.div>
            {
                !expanded &&
                <div className='absolute w-full bg-gradient-to-t from-surface to-transparent h-40 left-0 bottom-0'></div>
            }
            <div className='absolute left-1/2 -translate-x-1/2 mt-4'>
                <Button onClick={() => setExpanded(!expanded)} className='text-primary text-sm' title={!expanded ? "Read all FAQs [+]" : "Show less [-]"} variant='ghost'></Button>
            </div>
        </section >
    )
}
