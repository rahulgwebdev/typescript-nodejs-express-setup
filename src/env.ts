import { config } from "dotenv"

// loading specific env files
// eg. env.production or env.development
// change your as per your requirement
config({ path: `.env.${process.env.NODE_ENV}` })

export const PORT = process.env.PORT || 5000