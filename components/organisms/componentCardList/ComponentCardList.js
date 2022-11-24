import classes from "./ComponentCardList.module.scss";
import ComponentTitleImageTextCard from "../componentTitleImageTextCard/ComponentTitleImageTextCard";

function ComponentCardList({ contentModule }) {
  const { title, cardList } = contentModule;

  return (
    <section className={`${classes.o3ColumnBlock}`}>
      <h2 className={`${classes.aBlockTitle} fntH2`}>{title}</h2>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          {cardList.map((item, index) => (
            <ComponentTitleImageTextCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComponentCardList;
