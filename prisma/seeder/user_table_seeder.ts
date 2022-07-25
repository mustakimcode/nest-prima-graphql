import { PrismaClient, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin', 10);
  // const user = {
  const fakerUser = (): any => ({
    username: faker.internet.userName(),
    name: faker.name.findName(),
    address: faker.address.streetAddress(),
    phone_number: faker.phone.number(),
    password: hashedPassword,
  });

  const fakerRounds = 1000;

  console.log('=== START SEEDING DATA ===\r\n');
  for (let i = 0; i < fakerRounds; i++) {
    const fakeDatas = fakerUser();
    const isUserExist = await prisma.user.findUnique({
      where: {
        username: fakeDatas.username,
      },
    });
    if (!isUserExist) {
      await prisma.user.create({ data: fakeDatas });
    }
  }
  console.log('=== DONE SEEDING DATA ===\r\n');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
