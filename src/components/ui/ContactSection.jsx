'use client';

import ShinyButton from '@/components/bits/ShinyButton';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function ContactSection() {
    return (
        <SectionReveal className="w-full max-w-[1240px] mx-auto px-6 md:px-12 py-32 md:py-48 mb-20">
            <div className="flex flex-col items-center text-center">
                <span className="text-accent-blue tracking-widest text-xs font-semibold uppercase mb-8">
                    What's Next?
                </span>

                <h2 className="text-5xl md:text-[5.5rem] font-bold text-white mb-12 tracking-tighter leading-[1.05]">
                    LET'S WORK <br /> TOGETHER
                </h2>

                <p className="max-w-xl text-lg md:text-xl text-[var(--color-text-body)] mb-12 font-normal leading-[1.6]">
                    Currently available for select freelance projects and open to collaborative opportunities.
                </p>

                <ShinyButton className="!px-12 !py-5 !text-lg !rounded-2xl" onClick={() => window.location.href = 'mailto:hello@yash.design'}>
                    Say Hello
                </ShinyButton>

                <div className="mt-24 flex items-center justify-center gap-12">
                    {[
                        { Icon: Twitter, href: '#' },
                        { Icon: Linkedin, href: '#' },
                        { Icon: Instagram, href: '#' },
                        { Icon: Github, href: '#' }
                    ].map(({ Icon, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            className="text-[var(--color-text-muted)] hover:text-white transition-colors duration-300 transform hover:scale-110"
                        >
                            <Icon strokeWidth={1.5} size={24} />
                        </a>
                    ))}
                </div>
            </div>
        </SectionReveal>
    );
}
