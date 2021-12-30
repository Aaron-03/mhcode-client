const getStyle = (element, property) => {
  return window.getComputedStyle
  ? window.getComputedStyle(element, null).getPropertyValue(property)
  : element.style[property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })];
}

const animText = (seconds = 1, setMethod) => {
  const txts = ['Web', 'Dev'];
  let current = 0;
  setInterval(() => {
    if ((current + 1) == txts.length) {
      current--;
    } else {
      current++;
    }

    setMethod(txts[current]);
  }, seconds * 1000);
}

const handleScrollAnimated = (currentPosY, animations) => {
  animations.forEach(transitionObject => {
    const { pos, elementId, effect } = transitionObject;
    const { clsStyleIn, clsStyleOut } = effect;

    const element = document.getElementById(elementId);
    const hasClass = element.classList.contains(clsStyleIn);

    if (currentPosY > pos && !hasClass) {
      element.classList.remove(clsStyleOut);
      element.classList.add(clsStyleIn);
    } else if(currentPosY < pos && hasClass) {
      element.classList.remove(clsStyleIn);
      element.classList.add(clsStyleOut);
    }
  });
}

export {
  getStyle,
  animText,
  handleScrollAnimated
}