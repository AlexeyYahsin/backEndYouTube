"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3003;
const jsonBodyMidlleware = express_1.default.json();
app.use(jsonBodyMidlleware);
const db = {
    courses: [
        { id: 1, title: "front-end" },
        { id: 2, title: "back-end" },
        { id: 3, title: "automation qa" },
        { id: 4, title: "devops" },
    ],
};
app.get('/courses', (req, res) => {
    let foundCourse = db.courses;
    if (req.query.title) {
        foundCourse = foundCourse.filter(c => c.title.indexOf(req.query.title) > -1);
    }
    res.json(foundCourse);
});
app.get('/courses/:id', (req, res) => {
    const foundCourse = db.courses.find((x) => x.id === +req.params.id);
    if (!foundCourse) {
        res.sendStatus(404);
        return;
    }
    res.json(foundCourse);
});
app.post('/courses', (req, res) => {
    const checkedTitle = req.body.title.trim();
    if (!checkedTitle) {
        res.sendStatus(400);
        return;
    }
    const createdCourse = {
        id: +(new Date()),
        title: req.body.title
    };
    db.courses.push(createdCourse);
    res
        .status(201)
        .json(createdCourse);
});
app.delete('/courses/:id', (req, res) => {
    db.courses = db.courses.filter((x) => x.id !== +req.params.id);
    res.sendStatus(204);
});
app.put('/courses/:id', (req, res) => {
    if (!req.body.title) {
        res.sendStatus(404);
        return;
    }
    const foundCourse = db.courses.find((x) => x.id === +req.params.id);
    if (!foundCourse) {
        res.sendStatus(404);
        return;
    }
    foundCourse.title = req.body.title;
    res.json(foundCourse);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
