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
    console.log('Seeding Alarm completed')

    await prisma.calendar.createMany({
        data: [
            { title: "Title 1", start: "2024-05-02T09:00:00.000Z", end: "2024-05-02T18:00:00.000Z" },
            { title: "Title 2", start: "2024-05-03T09:00:00.000Z", end: "2024-05-0318:00:00.000Z" },
            { title: "Title 3", start: "2024-05-04T09:00:00.000Z", end: "2024-05-0418:00:00.000Z" },
        ],
    });
    console.log('Seeding Calendar completed');

    console.log('All Seeding completed');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
