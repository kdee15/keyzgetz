import { createClient } from "contentful";
import Footer from "../components/blocks/componentFooter/ComponentFooter";
import ComponentHeroCarousel from "../components/blocks/componentHeroCarousel/ComponentHeroCarousel";
import Nav from "../components/molecules/nav/Nav";
import Component3Column from "../components/organisms/component3Column/Component3Column";
import ComponentCardList from "../components/organisms/componentCardList/ComponentCardList";
import ComponentImageGallery from "../components/organisms/componentImageGallery/ComponentImageGallery";
import ComponentOneColumn from "../components/organisms/componentOneColumn/ComponentOneColumn";
const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps() {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "page",
      include: 10,
    })

    .then((entries) => entries.items);

  return {
    props: {
      Page: resPage,
    },
    revalidate: 1,
  };
}

export default function Home({ Page }) {
  console.log("components", Page[0].fields.components);
  const heroBanner = Page[0].fields.components[0].fields;
  const componentOfferings = Page[0].fields.components[1].fields;
  const componentAbout = Page[0].fields.components[2].fields;
  const componentServices = Page[0].fields.components[3].fields;
  const componentGallery = Page[0].fields.components[5].fields;
  const componentFooter = Page[0].fields.components[6].fields;
  const Logo = Page[0].fields.components[0].fields.logo;
  console.log("LOGO", Logo);
  return (
    <div className="anchor" id="top">
      <Nav />
      <ComponentHeroCarousel contentModule={heroBanner} />
      <div className="anchor" id="about"></div>
      <Component3Column contentModule={componentOfferings} />
      <ComponentOneColumn contentModule={componentAbout} />
      <div className="anchor" id="tania"></div>
      <ComponentCardList contentModule={componentServices} />
      <ComponentImageGallery contentModule={componentGallery} />
      <Footer contentModule={componentFooter} image={Logo} />
    </div>
  );
}
