import React from "react";
import classes from "./SubcomponentImageLink.module.scss";

function SubcomponentImageLink({ item }) {
  return (
    <figure
      className={classes.aCarouselImage}
      style={{
        backgroundImage: `url(http:${item.fields.file.url})`,
      }}
    ></figure>
  );
}

export default SubcomponentImageLink;
