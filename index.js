const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

let people = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
];

app.use(cors());
app.use(bodyParser.json());
app.use(
  morgan((tokens, req, res) => {
    const method = tokens.method(req, res);
    const postData = method === "POST" ? JSON.stringify(req.body) : "";
    return [
      method,
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      postData
    ].join(" ");
  })
);

const generateId = () => {
  return Math.ceil(Math.random() * 100);
};

app.get("/api/persons", (req, res) => {
  res.json(people);
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (body.name === undefined) {
    return res.status(400).json({ error: "name missing" });
  }

  if (body.number === undefined) {
    return res.status(400).json({ error: "number missing" });
  }

  if (people.filter(p => p.name === body.name).length === 1) {
    return res.status(400).json({ error: "name must be unique" });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  };

  people = people.concat(person);

  res.json(person);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = people.find(p => p.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  people = people.filter(p => p.id !== id);

  res.status(204).end();
});

app.get("/info", (req, res) => {
  res.send(
    `<div>
        <p>
            Phonebook has info for ${people.length} people
        </p>
        <p>
            ${new Date()}
        </p>
      </div>`
  );
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
