import classes from "./ComponentListMedia.module.scss";

function ComponentListMedia({ item }) {
  const { title, media } = item.fields;
  return (
    <>
      <figure
        className={classes.aCarouselImage}
        style={{
          backgroundImage: `url(http:${media.fields.file.url})`,
        }}
      ></figure>
    </>
  );
}

export default ComponentListMedia;
