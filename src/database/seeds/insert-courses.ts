import { Knex } from "knex"

export async function seed(knex: Knex): Promise<void> {
	await knex("courses").insert([
		{ name: "CSS" },
		{ name: "JS" },
		{ name: "React" },
		{ name: "Node" },
		{ name: "Git" },
		{ name: "Github" },
		{ name: "Express.js" },
		{ name: "Typescript" },
		{ name: "Banco de dados" },
		{ name: "Next.js" },
	])
}
