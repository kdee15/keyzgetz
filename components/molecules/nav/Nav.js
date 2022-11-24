import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import classes from "./Nav.module.scss";

export default function Nav() {
  const [mobileView, setMobileView] = useState();
  const [isActive, setIsActive] = useState();
  const handleToggle = () => setIsActive(!isActive);

  useEffect(() => {
    setMobileView(isMobile);
  }, []);

  return (
    <nav className={classes.navMain}>
      {mobileView ? (
        <>
          <span onClick={handleToggle} className={classes.burgerWrapper}>
            <BurgerMenu />
          </span>
          <div
            className={`${classes.mNav} ${
              isActive ? `${classes.navOpen}` : `${classes.navClosed}`
            }`}
          >
            <div onClick={handleToggle} className={classes.mNavBurger}>
              <BurgerMenu handleToggle={handleToggle} isActive={isActive} />
            </div>
            <ul className={classes.mMenu}>
              <li className={classes.navLink}>
                <a className={classes.aLink} href="#top" onClick={handleToggle}>
                  Home
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className={`${classes.mNav} ${classes.desk}`}>
          <ul className={classes.mMenu}>
            <li className={classes.navLink}>
              <a className={classes.aLink} href="#top" onClick={handleToggle}>
                Home
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
