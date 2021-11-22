const path = require("path");
const { copySync } = require("fs-extra");

const CopyOptions = {
  overwrite: true,
};

function BuildDist() {
  // Main folders
  const prodFolder = path.resolve(process.cwd(), "./prod");
  const distFolder = path.resolve(process.cwd(), "./dist");

  // Scripts
  copySync(
    path.resolve(distFolder, "./scripts/home.js"),
    path.resolve(prodFolder, "./home.js"),
    CopyOptions
  );
  copySync(
    path.resolve(distFolder, "./scripts/content_template.js"),
    path.resolve(prodFolder, "./content.js"),
    CopyOptions
  );
  copySync(
    path.resolve(distFolder, "./scripts/dev_tools.js"),
    path.resolve(prodFolder, "./dev_tools.js"),
    CopyOptions
  );

  // Styles
  copySync(
    path.resolve(distFolder, "./styles/home.css"),
    path.resolve(prodFolder, "./homepage.css"),
    CopyOptions
  );
  copySync(
    path.resolve(distFolder, "./styles/content_template.css"),
    path.resolve(prodFolder, "./content.css"),
    CopyOptions
  );
  copySync(
    path.resolve(distFolder, "./styles/global.css"),
    path.resolve(prodFolder, "./template.css"),
    CopyOptions
  );

  // Optimized Images
  copySync(
    path.resolve(distFolder, "./assets"),
    path.resolve(prodFolder, "assets"),
    CopyOptions
  );
}

BuildDist();
