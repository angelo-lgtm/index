const express = require('express')
const app = express()
app.use(express.json())

const students = []

class Student {
    constructor(name, grade) {
        this.name = name
        this.grade = grade
    }

    getDetails() {
        return `Name: ${this.name}, Grade: ${this.grade}`
    }
}

// route to get all the details of the studenst
app.get('/api/students', (req, res) => {
    const details = students.map(student => student.getDetails())
    res.send(details)
})

// route to add the students
app.post('/api/add', (req, res) => {
    const { name, grade } = req.body
    if (!name || !grade) {
        return res.status(400).send('Name and grade are required.')
    }

    const student = new Student(name, grade)
    students.push(student)
    res.status(201).send('Student added successfully.')
})

app.listen(3000, () => {
    console.log("Server is running on port 3000...")
})
