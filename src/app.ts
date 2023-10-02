import { PORT } from "@/env"
import ExpressConfig from "@/express/express.config"

const app = ExpressConfig()

app.listen(PORT, () => console.log("Server Running on Port " + PORT))