async function getInnerHTML(page, selector) {
  const handle = await page.$(selector);
  const value = await page.evaluate(body => body.innerHTML, handle);
  await handle.dispose();

  return value;
}

async function getOuterHTML(page, selector) {
  const handle = await page.$(selector);
  const value = await page.evaluate(body => body.outerHTML, handle);
  await handle.dispose();

  return value;
}

module.exports = {
  getInnerHTML,
  getOuterHTML
};
