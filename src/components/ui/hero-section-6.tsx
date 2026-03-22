"use client";

import { ArrowRight, Mail, SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="overflow-hidden pt-24">
        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-20">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
              <a
                href="#work"
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick("#work");
                }}
                className="mx-auto flex w-fit items-center gap-2 rounded-lg border p-1 pr-3 lg:ml-0"
              >
                <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                  New
                </span>
                <span className="text-sm">Independent studio for digital product work</span>
                <span className="bg-(--color-border) block h-4 w-px" />
                <ArrowRight className="size-4" />
              </a>

              <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
                We design and build sharper Shopify, SaaS, and WordPress experiences
              </h1>
              <p className="mt-8">
                KlickSpark Media helps brands and product teams turn messy digital surfaces into cleaner storefronts, tighter interfaces, and more credible systems.
              </p>

              <div>
                <form
                  action=""
                  className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto"
                >
                  <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[1rem] border pr-1 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                    <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                    <input
                        placeholder="Your email address"
                        className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                        type="email"
                    />

                    <div className="md:pr-1.5 lg:pr-0">
                      <Button aria-label="submit">
                        <span className="hidden md:block">Get Started</span>
                        <SendHorizontal className="relative mx-auto size-5 md:hidden" strokeWidth={2} />
                      </Button>
                    </div>
                  </div>
                </form>

                <ul className="list-inside list-disc space-y-2 text-white/75">
                  <li>Shopify builds</li>
                  <li>SaaS interfaces</li>
                  <li>WordPress systems</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
            <div aria-hidden className="absolute z-[1] inset-0 bg-gradient-to-r from-background from-35%" />
            <div className="relative h-full">
              <img
                className="hidden dark:block h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2400&q=80"
                alt="KlickSpark Media workspace visual"
                width={2400}
                height={1600}
              />
              <img
                className="dark:hidden h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2400&q=80"
                alt="KlickSpark Media workspace visual"
                width={2400}
                height={1600}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
