const path = require("path");
const fs = require("fs");
const chirps = [
  {
    name: "Drew",
    message: "cant hear cat",
  },
  {
    name: "Richard",
    message: "-y stuff",
  },
  {
    name: "Garrett",
    message: "iuafsdgbpiusbdgi",
  },
  {
    name: "name 4",
    message: "sragiuabfgiubdaf",
  },
  {
    name: "name 5",
    message: "hello world",
  },
];

fs.writeFile("chirps.json", JSON.stringify(chirps), (err) => {
  if (err) throw err;
});

fs.readFile("./chirps.json", (err, data) => {
  if (err) throw err;

  console.log(JSON.parse(data));
});

