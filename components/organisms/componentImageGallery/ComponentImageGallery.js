import ComponentListMedia from "../../molecules/componentListMedia/ComponentListMedia";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";
import classes from "./ComponentImageGallery.module.scss";

function ComponentImageGallery({ contentModule }) {
  const [mobileView, setMobileView] = useState();
  const { title, cardList, cardLayout } = contentModule;

  useEffect(() => {
    setMobileView(isMobile);
  }, []);

  return (
    <section className={`${classes.o3ColumnBlock}`}>
      <h2 className={`${classes.aBlockTitle} fntH2`}>{title}</h2>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row no-gutters`}>
          {mobileView ? (
            <>
              {cardList.map(
                (item, index) =>
                  index < 3 && (
                    <div key={index} className={[`${cardLayout}`]}>
                      <Link href={`http:${item.fields.media.fields.file.url}`}>
                        <a target={`_blank`}>
                          <ComponentListMedia item={item} />
                        </a>
                      </Link>
                    </div>
                  )
              )}
            </>
          ) : (
            <>
              {cardList.map(
                (item, index) =>
                  index < 12 && (
                    <div key={index} className={[`${cardLayout}`]}>
                      <Link href={`http:${item.fields.media.fields.file.url}`}>
                        <a target={`_blank`}>
                          <ComponentListMedia item={item} />
                        </a>
                      </Link>
                    </div>
                  )
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ComponentImageGallery;
