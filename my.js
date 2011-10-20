thunderReady(function() {
  console.log('this should run only one time');
});

// this allow you to test it when the page is already loaded
window.onload = function() {
  setTimeout(function() {
    thunderReady(function() {
      console.log('works after page loaded');
    })
    }, 2000);
};