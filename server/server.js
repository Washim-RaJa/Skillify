import app from "./app.js";
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
})