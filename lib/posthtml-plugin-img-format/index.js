const _ = require("lodash");

const REMOTE_URL_PATTERN = /^(https?:)?\//;

function generateQueryParams(params) {
  const { type, quality, width, height } = params;
  let queryList = [];

  if (type) {
    queryList.push(`as=${type}`);
  }

  if (quality) {
    queryList.push(`quality=${quality}`);
  }

  if (width) {
    queryList.push(`width=${width}`);
  }

  if (height) {
    queryList.push(`height=${height}`);
  }

  if (queryList.length === 0) return "";

  return `?${queryList.join("&")}`;
}

function createImageNode(src, options) {
  const { type, quality, width, height, ...rest } = options;

  return {
    tag: "img",
    attrs: {
      src: `${src}${generateQueryParams({
        type,
        quality,
        width,
        height,
      })}`,
      ...rest,
    },
  };
}

function createSourceNode(src, options) {
  const { type, quality, width, height } = options;

  return {
    tag: "source",
    attrs: {
      srcset: `${src}${generateQueryParams({
        type,
        quality,
        width,
        height,
      })}`,
      type: `image/${type}`,
    },
  };
}

module.exports = function (_options) {
  function ImgFormat(tree) {
    tree.match({ tag: "pic" }, (pic) => {
      let _pic = {
        tag: "picture",
        content: [],
      };

      const pic_attrs = _.get(pic, "attrs", {});
      const pic_src = _.get(pic_attrs, "src", null);

      // if src is empty or null ignore
      if (!pic_src) return pic;

      // if remote url leave it
      if (REMOTE_URL_PATTERN.test(pic_src)) {
        _.set(pic, "tag", `img`);

        return pic;
      }

      _.set(_pic, "content", [
        createSourceNode(pic_src, {
          type: "avif",
          ...pic_attrs,
        }),
        createSourceNode(pic_src, {
          type: "webp",
          ...pic_attrs,
        }),
        createSourceNode(pic_src, {
          type: "jpg",
          ...pic_attrs,
        }),
        createImageNode(pic_src, {
          ...pic_attrs,
        }),
      ]);

      return _pic;
    });

    return tree;
  }

  return ImgFormat;
};
