import { createClient } from "contentful";
import { useState, useEffect } from "react";
import Component2ColumnImageText from "../components/blocks/component2ColumnImageText/Component2ColumnImageText";
import Footer from "../components/blocks/componentFooter/ComponentFooter";
import ComponentHeroCarousel from "../components/blocks/componentHeroCarousel/ComponentHeroCarousel";
import ComponentReasons from "../components/blocks/componentReasons/ComponentReasons";
import Nav from "../components/molecules/nav/Nav";
import Component3Column from "../components/organisms/component3Column/Component3Column";
import ComponentCardList from "../components/organisms/componentCardList/ComponentCardList";
import FounderProfile from "../components/organisms/founderProfile/FounderProfile";
import ServiceComponent from "../components/organisms/serviceComponent/ServiceComponent";
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
  const heroBanner = Page[0].fields.components[0].fields;
  const componentOfferings = Page[0].fields.components[1].fields;
  const componentAbout = Page[0].fields.components[2].fields;
  const componentServices = Page[0].fields.components[3].fields;
  const componentReasons = Page[0].fields.components[4].fields;

  return (
    <div className="anchor" id="top">
      <Nav />
      <ComponentHeroCarousel contentModule={heroBanner} />
      <div className="anchor" id="about"></div>
      <Component3Column contentModule={componentOfferings} />
      <Component2ColumnImageText contentModule={componentAbout} />
      <div className="anchor" id="tania"></div>
      <ComponentCardList contentModule={componentServices} />
      <div className="anchor" id="reasons"></div>
      <ComponentReasons contentModule={componentReasons} />
    </div>
  );
}
