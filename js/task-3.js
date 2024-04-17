function getElementWidth(content, padding, border) {
  //   const top = Number.parseFloat(getElementWidth);
  const box_sizy = parseFloat(content, padding, border);
  return content + 2 * padding + 2 * border;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
