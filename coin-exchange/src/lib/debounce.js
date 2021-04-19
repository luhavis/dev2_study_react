export function debounce(func, delay) {
  let inDebounce;
  return function(...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func(...args), delay);
  };
}
