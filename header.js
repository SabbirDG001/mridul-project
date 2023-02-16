(() => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("overlay");
    let closed = true;
  
    const change = () => {
      if (closed) {
        hamburger.classList.add("open");
        menu.classList.add("menu");
      } else {
        hamburger.classList.remove("open");
        menu.classList.remove("menu");
      }
      closed = !closed;
    };
  
    hamburger.addEventListener("click", change);
  })();

  
  