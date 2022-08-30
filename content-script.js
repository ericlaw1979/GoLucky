// On the Redirect Notice page, click the first link.
if (window.history.length<=2) {
  document.links[0].click(); 
}
else {
  console.log(`Skipping auto-continue, because history.length == ${window.history.length}`);
}