import app from "./app";
import { prisma } from "./config/db";

const PORT = process.env.PORT || 3000;

async function testDB(){
  const users = await prisma.user.findMany();
  console.log("DB connected. User count: ", users.length)
}

testDB()
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})