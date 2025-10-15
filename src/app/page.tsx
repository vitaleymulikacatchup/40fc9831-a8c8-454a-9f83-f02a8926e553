"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "hero", url: "https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "High-End Gaming PC Interior with Colorful RGB Lights" },
  { id: "about", url: "https://images.pexels.com/photos/6774432/pexels-photo-6774432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Three colleagues brainstorming with laptops in a well-lit office." },
  { id: "feature", url: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A clean, contemporary workspace featuring a desktop with analytics on the screen and plants for a fresh look." },
  { id: "testimonial", url: "https://images.pexels.com/photos/4350053/pexels-photo-4350053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Young baristas laughing together during a coffee break in a modern café, enjoying their time." },
  { id: "contact", url: "https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A woman working at a desk using a laptop and smartphone, exemplifying remote work." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Peak"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Peak"
            description="Streamline your business with our cutting-edge SaaS solutions."
            imageSrc={assetMap.find(a => a.id === "hero")?.url}
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "about" }
            ]}
            className="bg-blue-50"
            titleClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="We empower businesses to reach new heights with innovative SaaS tools."
            buttons={[{ text: "Discover More", href: "https://example.com" }]}
            className="bg-blue-50"
            titleClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "User-Friendly Interface", description: "Navigate our tools with ease.", icon: "Zap", button: { text: "Try Now", href: "https://example.com" } },
              { title: "Advanced Analytics", description: "Gain insights quickly.", icon: "Graph", button: { text: "Learn More", href: "https://example.com" } }
            ]}
            title="Features at a Glance"
            className="bg-blue-50"
            textBoxTitleClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[{ id: "1", name: "Sarah Mitchell", role: "Director of Operations", testimonial: "Peak has transformed our workflow with its intuitive design and robust features.", icon: "Quote" }]}
            title="Customer Reviews"
            className="bg-blue-50"
            textBoxTitleClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay updated with Peak"
            description="Subscribe for our latest news and updates."
            imageSrc={assetMap.find(a => a.id === "contact")?.url}
            onSubmit={(email) => console.log(email)}
            className="bg-blue-50"
            titleClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 Peak"
            className="bg-blue-50"
            copyrightTextClassName="text-blue-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
