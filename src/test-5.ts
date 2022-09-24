export function updateSquare(selector: string | HTMLElement, propName: string, value: string | number) {
  const target = typeof selector === "string" ? document.querySelector(selector) : selector;
  if (target) {
    const hasProp = propName in target;
    const prop = hasProp ? (target as any)[propName] : getComputedStyle(target).getPropertyValue(propName);
    if (prop) {
      if (!hasProp) {
        (target as any)[propName] = prop;
      }

      (target as HTMLElement).style.setProperty(propName, eval(prop));
    }
  }
}

let count = 0;

document.addEventListener("click", () => {
  count++;
  updateSquare(document.documentElement, "--logic", count);
});
