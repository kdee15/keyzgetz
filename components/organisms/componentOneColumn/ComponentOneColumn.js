import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ComponentOneColumn.module.scss";

function ComponentOneColumn({ contentModule }) {
  const { title, copy, columnWidth, columnPosition, image } = contentModule;
  return (
    <section className={`${classes.oOneColumn}`}>
      {image ? (
        <div
          className={`${classes.oImage} oImage`}
          style={{
            backgroundImage: `url(${image.fields.file.url})`,
          }}
        ></div>
      ) : null}

      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div
            className={`${classes.oBlockBody} col-12 ${columnWidth} ${columnPosition}`}
          >
            <div className={classes.blockWrapper}>
              <h2 className={`${classes.aBlockTitle} fntH2`}>{title}</h2>
              <div className={classes.aText}>
                {documentToReactComponents(copy)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentOneColumn;
