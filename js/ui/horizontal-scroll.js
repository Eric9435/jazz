
export function enableHorizontalWheelScroll(selector){

  const container =
    document.querySelector(selector);

  if(!container) return;

  container.addEventListener("wheel", e => {

    if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){

      e.preventDefault();

      container.scrollLeft += e.deltaY;

    }

  }, { passive:false });

}

