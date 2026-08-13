import { PrismaPg } from "@prisma/adapter-pg";
//"I want to use PostgreSQL as my database, and here's the adapter that knows how to communicate with it."The adapter is especially useful with newer Prisma versions where Prisma can use different database drivers/adapters.

import { PrismaClient } from "../../generated/prisma/client.ts";
//PrismaClient is the main object you'll use to interact with your database.
// For example, after creating it, you can do things like:const users = await prisma.user.findMany();
// const users = await prisma.user.findMany();

import { env } from "./env.ts";

const connectionString = env.DATABASE_URL;//This simply stores your database URL in a variable.

const adapter = new PrismaPg({ connectionString });//Here you're creating a PostgreSQL adapter and giving it your database connection string.(In simple way we can say that :"Prisma, use PostgreSQL and connect using this database URL.")
const prisma = new PrismaClient({ adapter });//This creates the actual Prisma client that your application will use.The adapter tells Prisma how to connect to PostgreSQL.
//You can now use:
// prisma.user.findMany()
// prisma.user.create()
// prisma.user.update()
// prisma.user.delete()


export { prisma };//This makes the Prisma client available to other files.
