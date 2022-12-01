import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ComponentTwoColumnCard.module.scss";

function ComponentTwoColumnCard({ item }) {
  const { title, image, description } = item.fields;
  return (
    <div className={`${classes.oCard} col-12`}>
      {image ? (
        <figure
          className={classes.oCardImage}
          style={{
            backgroundImage: `url(http:${image.fields.file.url})`,
          }}
        ></figure>
      ) : null}
      <div className={`${classes.oCardBody}`}>
        <h4 className={`${classes.aTitle}`}>{title}</h4>
        <div className={`${classes.mText}`}>
          {documentToReactComponents(description)}
        </div>
      </div>
    </div>
  );
}

export default ComponentTwoColumnCard;
