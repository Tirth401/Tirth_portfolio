import Navigation from "@/components/Navigation";
import Intro from "@/components/Intro";
import SelectedWork from "@/components/SelectedWork";
import AboutExperience from "@/components/AboutExperience";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Intro />
        <SelectedWork />
        <AboutExperience />
        <ContactFooter />
      </main>
    </>
  );
}
