const { Namer } = require("@parcel/plugin");
const path = require("path");

const EXT_ALTS = {
  scripts: ["ts", "js"],
  styles: ["css", "scss"],
};

module.exports = new Namer({
  name: ({ bundle }) => {
    switch (bundle.type) {
      // Script asset hierarchy
      case "js": {
        const filepath = bundle.getMainEntry().filePath;
        let [name, ext] = path.basename(filepath).split(".");
        const format = bundle.env.outputFormat;

        // Index names are confusing but are standard practise (so just get the parent dir)
        if (name.includes("index")) {
          name = path.dirname(filepath).split(path.sep).pop();
        }

        // Make sure its the actual js file
        if (
          new RegExp(EXT_ALTS.scripts.join("|")).test(`${name}.${ext}`) &&
          format === "global"
        ) {
          // The files I actually want
          return `scripts/${name}.js`;
        } else if (format === "esmodule") {
          // Ignore these since I don't want modern stuff
          return `scripts/__IGNORE__.${name}.js`;
        }

        break;
      }

      // Style asset hierarchy
      case "css": {
        const filepath = bundle.getMainEntry().filePath;
        let [name, ext] = path.basename(filepath).split(".");

        // Fix index files to default to parent name
        if (name.includes("index")) {
          name = path.dirname(filepath).split(path.sep).pop();
        }

        // All should be unique
        if (new RegExp(EXT_ALTS.styles.join("|")).test(`${name}.${ext}`)) {
          return `styles/${name}.css`;
        }
      }
    }
    // The other naming plugin can deal with the rest
    return null;
  },
});
