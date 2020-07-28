exports.onPreInit = () => {
  fs.copyFile(
    `node_modules/@shoelace-style/shoelace/dist/shoelace/shoelace.esm.js`,
    `./static/shoelace.esm.js`,
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
  fs.copyFile(
    `node_modules/@shoelace-style/shoelace/dist/shoelace/shoelace.css`,
    `./static/shoelace.css`,
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
};
