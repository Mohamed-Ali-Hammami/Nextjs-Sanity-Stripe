import Link from "next/link";

import footerClassNames from "./footerClassNames";

const Footer = () => {
  const {
    container,
    footer,
    section,
    section1,
    section1Content,
    section1Heading,
    section2,
    sectionLink,
    section2Content,
    section2Heading,
    section2ul,
    section3,
    section3Content,
    section3Heading,
  } = footerClassNames;

  return (
    <footer className={footer}>
      <div className={container}>
        <div className={section}>
          <div className={section1}>
            <h2 className={section1Heading}>La Boutique</h2>
            <p className={section1Content}>
            © 2023 La Boutique. All rights reserved.
            </p>
          </div>
          <div className={section2}>
            <h2 className={section2Heading}>À Propos de Nous</h2>
              <p>Notre engagement envers la qualité, le service client exceptionnel et une expérience d'achat sans tracas est au cœur de tout ce que nous faisons. Chaque produit que nous proposons est choisi avec soin pour répondre à vos attentes et refléter les dernières tendances du marché. Notre équipe dévouée travaille en permanence pour vous offrir une expérience de magasinage en ligne fluide et agréable, tout en veillant à ce que chaque commande soit traitée avec le plus grand soin et expédiée dans les délais.</p>
          </div>
          <div className={section3}>
            <h2 className={section3Heading}>Contact us</h2>
            <p className={section3Content}>
              Contact.la_boutique@gmail.com<br>
              </br> 
              support.la_boutique@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;