import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../../amplify/data/resource'

const client = generateClient<Schema>();

async function createuser(input: string){ 
const { errors, data: newUsername } = await client.models.User.create({
  firstname: input,
  lastname: input,
  email: input,
  phone: input
})
}

export default createuser