"use client";
import React from "react";
import Image from "next/image";
import InvestmentItem from "@/components/InvesmentItem";
import Container from "@/components/Container";
import TransitionLink from "@/components/TransitionLink";
import { useGetFaq } from "@/hooks/useGetFaqs";


const InvesmentPage = () => {
  const { data: faqs } = useGetFaq();

  return (
    <div>
      <section className="relative h-[100vh] w-full overflow-hidden">
        <Image
          src="/assets/image3.jpg"
          alt="Professional portrait"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute font-serif inset-0 flex flex-col items-center justify-center">
          <h1 className="font-serif text-3xl font-light tracking-wide text-white md:text-6xl lg:text-5xl">
            Investment
          </h1>
          <p className="mt-4 text-sm capitalize font-light tracking-[0.2em] text-white/90">
            PRESERVE YOUR BEST MEMORIES
          </p>
        </div>
      </section>
      <Container className="py-24">
        <h2 className="lg:mb-16 mb-10 lg:text-center  font-serif text-2xl lg:text-4xl font-light tracking-wide text-gray-900 md:text-5xl">
          Pricing & Packages
        </h2>

        <div className="space-y-16">
          <InvestmentItem
            description={[
              "Timeless and elegant portraits that beautifully tell your story. We bring your ideas and dreams to life.",
            ]}
            footerText="CONTACT ME"
            image="/assets/client1.jpg"
            title="PORTRAITS"
          />
          <InvestmentItem
            description={[
              "Excited to create images that beautifully capture the synergy between you and your loved one.",
            ]}
            footerText="GET IN TOUCH"
            image="/assets/client4.jpg"
            title="ENGAGEMENTS"
            left={true}
          />
          <InvestmentItem
            description={[
              "Capturing beautiful memories of your special day. Fill out our inquiry form to find the perfect package for your event.",
            ]}
            footerText="CONTACT ME"
            image="/assets/image2.jpg"
            title="WEDDINGS"
          />
          <InvestmentItem
            description={[
              "Preserving precious moments with your children and family—genuine smiles, laughter, and love captured beautifully.",
            ]}
            footerText="CONTACT ME"
            image="/assets/childrenandfamily.jpg"
            left={true}
            title="CHILDREN AND FAMILY"
          />
          <InvestmentItem
            description={[
              "Showcasing your products and lifestyle with stunning, high-quality visuals that tell a compelling story.",
            ]}
            footerText="GET IN TOUCH"
            image="/assets/productandlifestyle.jpg"
            title="PRODUCTS AND LIFESTYLE"
          />
        </div>

        <div className=" py-24">
          <div className="mb-16">
            <h2 className="mb-8 font-serif lg:text-4xl text-3xl font-light tracking-wide text-gray-900 md:text-4xl">
              FAQ
            </h2>
            <div className="h-px w-full  bg-gray-200" />
          </div>

          <div className="grid gap-x-24 lg:px-10 gap-y-16 md:grid-cols-2">
            {faqs?.data.map((faq) => (
              <div key={faq.id} className="space-y-4">
                <h3 className="font-serif text-2xl font-light leading-snug text-gray-900">
                  {faq.question}
                </h3>
                <p className="font-light leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="my-24 h-px w-full max-w-[400px] mx-auto bg-gray-200" />

          <div className="text-center">
            <h3 className="mb-20 font-serif text-3xl font-light tracking-wide text-gray-900">
              Ready to Begin?
            </h3>
            <TransitionLink
              href="/contact"
              className="inline-block font-serif bg-[#BEB3A7] px-8 py-3 text-sm font-light tracking-wide text-white transition-colors hover:bg-[#807c7c]"
            >
              Book a Session
            </TransitionLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InvesmentPage;
