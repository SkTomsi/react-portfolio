import Head from "next/head";

import HeroSection from "@/components/heroSection";
import UIUXSection from "@/components/uiux";
import ContactSection from "@/components/contact";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";

import DevProjects from "@/components/dev";
import Blog from "@/components/blog";
import Gfx from "@/components/gfx";

export default function Home() {
  const { asPath } = useRouter();
  useEffect(() => {
    if (asPath.includes("scrollToContact")) {
      scroller.scrollTo("contact", {
        delay: 150,
        duration: 1500,
        smooth: "easeInOutQuint",
      });
    }
  });
  return (
    <>
      <main>
        <HeroSection />
        <UIUXSection />
        <DevProjects />
        <Gfx />

        <Blog />
        <ContactSection />
      </main>
    </>
  );
}
