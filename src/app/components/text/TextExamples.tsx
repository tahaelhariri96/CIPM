/**
 * Text Components Usage Examples
 * This file demonstrates how to use the semantic text components
 * for searchable, accessible, and design-compliant text rendering
 */

import React from "react";
import {
  Heading,
  BodyText,
  Caption,
  ButtonText,
  LinkText,
  DisplayText,
  MetadataText,
  Statistic,
} from "./SemanticText";

/**
 * Example: Hero Section with Heading and Description
 * ✓ Searchable: Text is in semantic HTML
 * ✓ Accessible: Proper heading hierarchy
 * ✓ Design-compliant: Matches Figma styles
 */
export function HeroSection() {
  return (
    <section className="py-12">
      {/* Main heading - h1 for hero */}
      <Heading level={1} variant="4xl" className="mb-4">
        Why Choose Us
      </Heading>

      {/* Supporting description */}
      <BodyText variant="lg" className="max-w-2xl">
        Our project management certifications provide comprehensive training
        with real-world applications.
      </BodyText>
    </section>
  );
}

/**
 * Example: Feature Cards Section
 * ✓ Searchable: All text is accessible
 * ✓ Accessible: Proper semantic structure
 * ✓ Design-compliant: Uses correct typography variants
 */
export function FeaturesSection() {
  const features = [
    {
      title: "Career-oriented certifications",
      description: "Industry-recognized credentials that boost your career",
    },
    {
      title: "Online learning and exams",
      description: "Learn at your own pace with flexible scheduling",
    },
    {
      title: "Structured certification pathways",
      description: "Clear progression from foundation to advanced levels",
    },
  ];

  return (
    <section className="py-12">
      <Heading level={2} variant="4xl" className="mb-8">
        Our Services
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <article key={index} className="p-6 border rounded-lg">
            <Heading level={3} variant="xl" className="mb-3">
              {feature.title}
            </Heading>
            <BodyText variant="lg">{feature.description}</BodyText>
          </article>
        ))}
      </div>
    </section>
  );
}

/**
 * Example: Contact Section with CTA Button
 * ✓ Searchable: Text is crawlable
 * ✓ Accessible: Semantic button with proper text
 * ✓ Design-compliant: Matches design system
 */
export function ContactSection() {
  return (
    <section className="bg-neutral-950 text-white py-16">
      <Heading level={2} variant="white4xl" className="mb-4 text-center">
        Feel free to contact with us
      </Heading>

      <BodyText variant="white" className="text-center mb-8 max-w-2xl mx-auto">
        Send a message
      </BodyText>

      <div className="text-center">
        <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg">
          <ButtonText variant="register">Get in Touch</ButtonText>
        </button>
      </div>
    </section>
  );
}

/**
 * Example: Training Card with Highlighted Content
 * ✓ Searchable: All text accessible
 * ✓ Accessible: Clear visual hierarchy
 * ✓ Design-compliant: Rose-100 text on dark background
 */
export function TrainingCard() {
  return (
    <div className="bg-gradient-to-br from-red-900 to-red-950 p-8 rounded-xl">
      <Heading level={3} variant="3xl" className="mb-4">
        Training with Mock Exam
      </Heading>

      <BodyText variant="lgRose" className="mb-6">
        Test your knowledge and get familiar with the exam format before taking
        the real certification exam.
      </BodyText>

      <LinkText
        variant="cta"
        href="/learn-more"
        className="inline-block hover:underline"
      >
        Learn more
      </LinkText>
    </div>
  );
}

/**
 * Example: Audience Section
 * ✓ Searchable: All text is indexable
 * ✓ Accessible: Bold subtitles for emphasis
 * ✓ Design-compliant: Semibold lg text for categories
 */
export function AudienceSection() {
  const audiences = [
    "Students & Entry-Level Professionals",
    "Working Project Managers",
    "Scrum Masters & Agile Practitioners",
    "Career Switchers",
    "Organizations & Teams",
  ];

  return (
    <section className="py-12">
      <Heading level={2} variant="4xl" className="mb-12">
        Who These Certifications Are For
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {audiences.map((audience, index) => (
          <div key={index} className="p-4">
            <Heading level={3} variant="xl" className="font-semibold">
              {audience}
            </Heading>
          </div>
        ))}
      </div>

      <Caption variant="caption" className="mt-8 block text-center">
        How will the work spread in the past and coming years
      </Caption>
    </section>
  );
}

/**
 * Example: Process Steps Section
 * ✓ Searchable: Each step is crawlable
 * ✓ Accessible: Proper semantic structure
 * ✓ Design-compliant: Lg normal text for step descriptions
 */
export function ProcessSection() {
  const steps = [
    { title: "Choose a Certification", description: "Select from our range" },
    { title: "Learn & Prepare", description: "Study with our materials" },
    {
      title: "Take Exam & Get Certified",
      description: "Complete your exam",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Heading level={2} variant="4xl" className="mb-4 text-center">
        Easy way to shape make your future better
      </Heading>

      <Caption variant="caption" className="text-center mb-12">
        Simple way to make this process done
      </Caption>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold mb-3">{index + 1}</div>
            <Heading level={3} variant="xl">
              {step.title}
            </Heading>
            <BodyText variant="lg" className="mt-2">
              {step.description}
            </BodyText>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Example: Blog/Insights Section
 * ✓ Searchable: Articles are fully indexed
 * ✓ Accessible: Metadata is properly marked up
 * ✓ Design-compliant: Uses xl semibold for titles, light base for dates
 */
export function InsightsSection() {
  const articles = [
    {
      title: "Why Mock Exams Matter Before Your Certification Test",
      date: "January 2, 2026",
    },
    {
      title: "How Mock Exams Prepare You for Real Certification Exams",
      date: "January 2, 2026",
    },
    {
      title: "Mock Exams vs Real Exams: What to Expect",
      date: "January 2, 2026",
    },
  ];

  return (
    <section className="py-16">
      <Heading level={2} variant="4xl" className="mb-4">
        Important insights to consider
      </Heading>

      <Caption variant="caption" className="mb-12">
        How will the work spread in the past and coming years
      </Caption>

      <div className="space-y-8">
        {articles.map((article, index) => (
          <article key={index} className="border-l-4 border-red-600 pl-6">
            <Heading level={3} variant="xl" className="mb-2">
              {article.title}
            </Heading>
            <MetadataText
              variant="extraLight"
              type="date"
              dateTime={new Date(article.date).toISOString()}
            >
              Posted on {article.date}
            </MetadataText>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <LinkText variant="cta" href="/insights">
          Show all
        </LinkText>
      </div>
    </section>
  );
}

/**
 * Example: Statistics/Growth Section
 * ✓ Searchable: Numbers and labels are readable
 * ✓ Accessible: Proper aria labels for statistics
 * ✓ Design-compliant: Large display numbers with matching descriptions
 */
export function StatisticsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <Heading level={2} variant="4xl" className="mb-4">
        The Growing Field of Project Management
      </Heading>

      <Caption variant="caption" className="mb-12">
        How will the work spread in the past and coming years
      </Caption>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Statistic
          number="40"
          label="millions job opening now"
          numberVariant="5xl"
          labelVariant="base"
        />
        <Statistic
          number="25"
          label="million positions"
          numberVariant="5xl"
          labelVariant="base"
        />
        <Statistic
          number="80"
          label="million potential positions"
          numberVariant="5xl"
          labelVariant="base"
        />
      </div>
    </section>
  );
}

/**
 * Example: Professional Strategy Section
 * ✓ Searchable: All copy is crawlable
 * ✓ Accessible: Proper semantic structure
 * ✓ Design-compliant: Dark 900 heading, stone 500 subtext
 */
export function ProfessionalSection() {
  return (
    <section className="py-16">
      <Heading level={2} variant="dark900" className="mb-4">
        Professional management requires a professional strategy
      </Heading>

      <BodyText variant="lgStone" className="mb-8 max-w-2xl">
        Managing projects and leading your team requires putting in extra
        effort to achieve the best results for your team.
      </BodyText>

      <LinkText variant="lgRose" href="/explore">
        Explore Certifications
      </LinkText>
    </section>
  );
}

/**
 * Example: Certification Card
 * ✓ Searchable: Course details are indexed
 * ✓ Accessible: Proper heading and description structure
 * ✓ Design-compliant: Purple heading with light subtitle
 */
export function CertificationCard() {
  return (
    <div className="bg-white p-8 rounded-lg border">
      <Heading level={3} variant="purple800" className="mb-2">
        CIPM-PMFC
      </Heading>

      <Caption variant="smallLight" className="mb-4 block">
        Project Management Foundation Certificate
      </Caption>

      <Heading level={4} variant="xl" className="mb-3">
        Launch Your PM Career
      </Heading>

      <BodyText variant="lg" className="mb-4">
        Master the essentials of project management with comprehensive
        foundation course.
      </BodyText>

      <button className="text-red-600 hover:underline">
        <LinkText variant="ctaRed" href="/enroll">
          Enroll Now
        </LinkText>
      </button>
    </div>
  );
}

/**
 * Example: Footer Link Section
 * ✓ Searchable: All links are crawled
 * ✓ Accessible: Proper link semantics
 * ✓ Design-compliant: White lg semibold headings with white base links
 */
export function FooterSection() {
  return (
    <footer className="bg-neutral-950 text-white py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Footer column */}
          <nav>
            <Heading level={3} variant="white4xl" className="mb-4 text-lg">
              Learning
            </Heading>
            <ul className="space-y-2">
              <li>
                <LinkText variant="lg" href="/certifications">
                  All Certifications
                </LinkText>
              </li>
              <li>
                <LinkText variant="lg" href="/mock-exams">
                  Mock Exams
                </LinkText>
              </li>
              <li>
                <LinkText variant="lg" href="/verify">
                  Verify Certificate
                </LinkText>
              </li>
            </ul>
          </nav>

          {/* More footer columns... */}
        </div>

        {/* Footer bottom */}
        <div className="border-t border-neutral-800 pt-8 flex justify-between">
          <MetadataText variant="smallLight">
            CIMP @2026 - All right reserved
          </MetadataText>
          <MetadataText variant="smallLight">
            Design with ♥ by Adnan Akhras
          </MetadataText>
        </div>
      </div>
    </footer>
  );
}
