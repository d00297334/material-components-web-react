const screenshots = [];

[...screenshots, ...require('./temporary-package/screenshot-suite')];

// TODO make sure localhost:8080 is actually running...otherwise throw an error
screenshots.forEach((screenshot) => {
  screenshot.then();
});
