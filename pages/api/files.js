import fs from "fs";
import path from "path";
import sizeof from "image-size";

export const theApi = (req, res) => {
  const dirRelativeToPublicFolder = "images/projects-small";

  const dir = path.resolve("./public", dirRelativeToPublicFolder);

  const directories = fs.readdirSync(dir);
  const images = [];
  directories.forEach((item) => {
    const dir2 = path.resolve(
      "./public",
      `${dirRelativeToPublicFolder}/${item}`
    );
    const files = fs.readdirSync(dir2);
    files.forEach((name) => {
      // const stats = fs.statSync(name);
      const path = `${dir2}/${name}`;
      const { height, width } = sizeof(path);
      images.push({
        src: `/images/projects/${item}/${name}`,
        project: item,
        file: name,
        height,
        width,
      });
    });
  });

  res.statusCode = 200;
  res.json({
    directories,
    images,
  });
};

export default theApi;
