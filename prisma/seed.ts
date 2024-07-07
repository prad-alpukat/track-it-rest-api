// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.alarm.createMany({
        data: [
            {
                name: "Bangun Tidur",
                time: "06:00:00 AM",
                date: "Friday, May 24, 2024",
                createdAt: new Date("2021-05-24T18:00:00.000Z"),
            },
            {
                name: "Sarapan",
                time: "07:00:00 AM",
                date: "Friday, May 24, 2024",
                createdAt: new Date("2021-05-24T18:00:00.000Z"),
            },
            {
                name: "Olahraga",
                time: "08:00:00 AM",
                date: "Friday, May 24, 2024",
                createdAt: new Date("2021-05-24T18:00:00.000Z"),
            },
        ],
    });

    console.log('Seeding Alarm completed');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
