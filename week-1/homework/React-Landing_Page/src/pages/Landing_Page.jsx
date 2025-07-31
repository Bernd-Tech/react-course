import {Header} from '../components/Header.jsx';
import {HeroSection} from  '../components/Hero.jsx';
import {MainSection} from '../components/Main';
import {FooterSection} from '../components/Footer';


function LandingPage() {
  const navItems = ["Fahrt", "Fahrten anbieten", "Business", "Uber Eats", "Über uns"];
  const navItems2 = ["Hilfe", "Anmelden"]
  return (
    <>
      <Header logo="Uber" navItems={navItems} navItems2={navItems2}></Header>
      <HeroSection title="Überall weiterkommen mit Uber" backgroundImage="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_896,w_1344/v1712926828/assets/a3/cf8564-e2a6-418c-b9b0-65dd285c100b/original/3-2-ridesharing-new.jpg"></HeroSection>
      <MainSection></MainSection>
      <FooterSection></FooterSection>
    </>
  )
}

export default LandingPage