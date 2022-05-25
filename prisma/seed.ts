import { PrismaClient } from "@prisma/client";

const clinet = new PrismaClient();

async function main() {
  return;
  [...Array.from(Array(500).keys())].forEach(async (item) => {
    const stream = await clinet.stream.create({
      data: {
        name: String(item),
        descrpition: String(item),
        price: item,
        user: {
          connect: {
            id: 1,
          },
        },
      },
    });
    console.log(`${item}/500`);
  });
}

main()
  .catch((e) => console.log(e))
  .finally(() => clinet.$disconnect());
