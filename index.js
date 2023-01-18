const express = require("express");
const app = express();
const port = 3000;

let arr = [
    {
    "id": 2,
    "description": "Sweet and savory sauces relishes spreads and seasonings",
    "name": "Condiments"
    },
    {
    "id": 1,
    "description": "Soft drinks coffees teas beers and ales",
    "name": "Beverages"
    },
    {
    "id": 3,
    "description": "Desserts candies and sweet breads",
    "name": "Confections"
    },
    {
    "id": 4,
    "description": "Cheeses",
    "name": "Dairy Products"
    },
    {
    "id": 5,
    "description": "Breads crackers pasta and cereal",
    "name": "Grains/Cereals"
    },
    {
    "id": 6,
    "description": "Prepared meats",
    "name": "Meat/Poultry"
    },
    {
    "id": 7,
    "description": "Dried fruit and bean curd",
    "name": "Produce"
    },
    {
    "id": 8,
    "description": "Seaweed and fish",
    "name": "Seafood"
    }
    ]

app.get("/about", (req, res) => {
  res.send("About sehifesi");
});

app.get("/", (req, res) => {
    res.send(arr);
  });

  app.get("/", (req, res) => {
    res.send(arr);
  });


app.post("/", (req, res) => {
  res.send("post sorgusu geldi");
});
app.delete("/", (req, res) => {
  res.send("delete sorgusu geldi");
});
app.put("/", (req, res) => {
  res.send("put sorgusu geldi");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
