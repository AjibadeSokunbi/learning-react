import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import { config } from "react-spring";

import NavigationMenu from "./NavigationMenu";

function Navigation() {
  const [toggled, setToggle] = useState(false);

  const transitions = useTransition(toggled, {
    from: { opacity: 0, transform: "translateX(-100%" },
    enter: { opacity: 1, transform: "translateX(0%" },
    leave: { opacity: 0, transform: "translateX(-100%" },
    reverse: toggled,
    config: config.molasses,
  });

  const Mtransitions = useTransition(toggled, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggled,
    delay: 200,
    config: config.molasses,
  });

  return (
    <nav>
      <button onClick={() => setToggle((toggled) => !toggled)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div>
        {toggled && (
          <div>
            {transitions(
              (styles, item) =>
                item && (
                  <animated.div className="nav" style={styles}>
                    <NavigationMenu closeMenu={() => setToggle(false)} />
                  </animated.div>
                )
            )}

            <div onClick={() => setToggle(false)} className="bb">
              {Mtransitions(
                (styles, item) =>
                  item && <animated.div style={styles}></animated.div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

//
export default Navigation;
