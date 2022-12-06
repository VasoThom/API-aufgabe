import express from "express";

const app = express();

app.listen(5000, () => {
  console.log("your port is listening on  5000 ");
});
//
//
//AUFGABE 1
//
//

// na exo panta let  gt an thelo na diagrapsw kati prepei na xrisimopoihsw filter
let kurse = ["English", "Deutsch", "Griechish"];

app.get("/kurs", (req, res) => {
  res.json(kurse);
});

app.get("/kurs/:index", (req, res) => {
  const index = +req.params.index;
  res.status(200).json(kurse[index]);
  console.log(" get request");
});

app.post("/kurs/", (req, res) => {
  kurse.push(kurse.length + 1);
  res.status(201).json(kurse.length);
  console.log(" post request");
});

app.put("/kurs/:index", (req, res) => {
  const index = +req.params.index;
  kurse[index] = "Russisch";

  res.status(204).json(kurse[index]);
  //res.json(kurse[index])
  console.log(" put request");
});

app.delete("/kurs/:index", (req, res) => {
  const index = +req.params.index;

  kurse = kurse.filter((_, i) => i !== index);
  res.json(kurse.length);

  //   kurse.splice(index, 1);

  res.status(204).end();
  console.log(" delete request");
});

let teilnehmers = ["vaso", "ella", "marcel", "rahman", "anastasia"];
app.get("/teilnehmers", (req, res) => {
  res.json(teilnehmers);
  console.log(" teilnehmers request");
});

app.get("/teilnehmers/:index", (req, res) => {
  const index = +req.params.index;
  res.status(200).json(teilnehmers[index]);

  console.log(" teilnehmer request");
});
app.post("/teilnehmers/", (req, res) => {
  teilnehmers.push(teilnehmers.length + 1);
  res.status(201).json(teilnehmers.length);
});
app.put("/teilnehmers/:index", (req, res) => {
  const index = +req.params.index;

  teilnehmers[index] = "Dominik";

  res.status(204).json(teilnehmers[index]);
  console.log(" put request");
});

app.delete("/teilnehmers/:index", (req, res) => {
  const index = +req.params.index;

  teilnehmers = teilnehmers.filter((el, id) => id !== index);
  res.status(204).end();
});

//modules

let modules = [
  "Discovering the arts and humanities",
  "English for academic purposes online",
  "Exploring languages and cultures",
  "Introducing English language studies",
];
app.get("/modules", (req, res) => {
  res.json(modules);
});
app.get("/modules/:index", (req, res) => {
  const index = +req.params.index;

  res.status(200).json(modules[index]);
});
app.post("/modules/", (req, res) => {
  modules.push(modules.length + 1);
  res.status(201).json(modules.length);
});
app.put("/modules/:index", (req, res) => {
  const index = +req.params.index;

  modules[index] = "Creative writing";

  res.status(204).json(modules[index]);
  console.log(" put request");
});
app.delete("/modules/:index", (req, res) => {
  const index = +req.params.index;

  modules = modules.filter((el, id) => id !== index);
  res.status(204).end();
});

//AUFGABE 2
// #produkte
// GET /produkte/     200
// GET/produkte?category= 200
// GET /produkte/:id  200

const products = [
  {
    id: 1,
    name: "laptop",
    category: ["computer"],
  },
  {
    id: 2,
    name: "laptop",
    category: ["x", "y"],
  },
  {
    id: 3,
    name: "laptop",
    category: ["z"],
  },
];
app.get("/produkte", (req, res) => {
  console.log(req.method, req.url);

  const category = req.query.category;
  if (category) {
    const filteredProduckts = products.filter(
      (product) => product.category.includes(category)
      // (product) => product.category === category
    );
    return res.json(filteredProduckts);
  }
  res.json(products);
});
// #Users
// GET /users/:id    200
// POST /users/      201
// PUT /users/:id    204
// DELETE /users/:id 204
//
//
// ## Orders
// GET /orders/    200
// GET /orders/:id 200
// POST /orders/   201
// PUT /orders/:id 204
// DELETE /orders/:id 204
//
//
//
//
//
//

app.get("/produkte", (req, res) => {
  res.json(modules);
});
