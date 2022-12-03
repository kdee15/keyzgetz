import classes from "./ComponentIconMenu.module.scss";
import ComponentTwoColumnCard from "../componentTwoColumnCard/ComponentTwoColumnCard";

function ComponentIconMenu({ contentModule }) {
  const { title, cardList } = contentModule;

  return (
    <section className={`${classes.o3ColumnBlock}`}>
      <h2 className={`${classes.aBlockTitle} fntH2`}>{title}</h2>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          {cardList.map((item, index) => (
            <ComponentTwoColumnCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComponentIconMenu;
