import React, { useEffect, useState } from "react";

function DarkModeSwitch() {
  const [isDarkmode, setIsDarkmode] = useState(false);

  function darkModeHandler() {
    setIsDarkmode(!isDarkmode);
  }
  function disableDarkmode() {
    setIsDarkmode(false);
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkmode", "false");
  }
  function enableDarkmode() {
    setIsDarkmode(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkmode", "true");
  }

  function clickDarkmode() {
    if (!isDarkmode) {
      enableDarkmode();
    } else {
      disableDarkmode();
    }
  }
  useEffect(() => {
    const hasDarkmode = localStorage.getItem("darkmode");
    if (hasDarkmode === "true") {
      enableDarkmode();
    } else if (hasDarkmode === "false") {
      disableDarkmode();
    }
  }, [clickDarkmode]);

  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch">
      <span className="darkmode-text">Dark mode</span>
      <label className="switch" htmlFor="darkmode-switch">
        <input
          type="checkbox"
          id="darkmode-switch"
          onClick={clickDarkmode}
          checked={isDarkmode}
          onChange={darkModeHandler}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default DarkModeSwitch;
