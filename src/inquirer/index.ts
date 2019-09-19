import inquirer from 'inquirer'
import question from './question'

export default async () => {
    return await inquirer.prompt(question)
}
