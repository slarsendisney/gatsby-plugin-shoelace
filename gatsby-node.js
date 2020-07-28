const fse = require("fs-extra");

exports.onPreInit = () => {
  fse.copy(
    `node_modules/@shoelace-style/shoelace/dist/shoelace`,
    `./static/shoelace`,
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
};
