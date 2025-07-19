import express, { Request, Response } from "express"
import { knex } from "./database/knex"
import { request } from "http"

const app = express()
app.use(express.json())

app.post("/courses", async (request: Request, response: Response) => {
	const { name } = request.body

	await knex("courses").insert({ name })
	/* Metodo RAW do knex, para utilizar comando SQL. */
	//await knex.raw("INSERT INTO courses (name) VALUES (?)", [name])

	response.status(201).json()
})

app.get("/courses", async (request: Request, response: Response) => {
	const courses = await knex("courses").select().orderBy("name")

	response.status(200).json(courses)
})

app.put("/courses/:id", async (request: Request, response: Response) => {
	const { id } = request.params
	const { name } = request.body

	await knex("courses").update({ name }).where({ id })

	return response.json()
})

app.delete("/courses/:id", async (request: Request, response: Response) => {
	const { id } = request.params

	await knex("courses").delete().where({ id })

	return response.json()
})

app.listen(3333, () => console.log(`Server is running on port 3333`))
