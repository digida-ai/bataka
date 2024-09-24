import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
const prisma = new PrismaClient();

const bugandaClans = [
    { name: "Mamba", headTitle: "Ggabunga" }, { name: "Nsenene", headTitle: "CleanTitle2" },
    { name: "Nkula", headTitle: "CleanTitle3" }, { name: "Nkima", headTitle: "CleanTitle4" },
    { name: "Nkerebwe", headTitle: "CleanTitle5" }, { name: "Ndiga", headTitle: "CleanTitle6" },
    { name: "Ngonge", headTitle: "CleanTitle7" }, { name: "Ngeye", headTitle: "CleanTitle8" },
    { name: "Njaza", headTitle: "CleanTitle9" }, { name: "Fumbe", headTitle: "CleanTitle10" },
    { name: "Lugave", headTitle: "CleanTitle11" }, { name: "Mpologoma", headTitle: "CleanTitle12" },
    { name: "Kasimba", headTitle: "CleanTitle13" }, { name: "Mpeewo", headTitle: "CleanTitle14" },
    { name: "Nvuma", headTitle: "CleanTitle15" }, { name: "Nvubu", headTitle: "CleanTitle16" },
    { name: "Ngo", headTitle: "CleanTitle17" }, { name: "Kkobe", headTitle: "CleanTitle18" },
    { name: "Mmamba-Kakoboza", headTitle: "CleanTitle19" }, { name: "Mpeewo", headTitle: "CleanTitle20" },
    { name: "Kibe", headTitle: "CleanTitle21" }, { name: "Katinvuma", headTitle: "CleanTitle22" },
    { name: "Nnyonyi", headTitle: "CleanTitle23" }, { name: "Mbogo", headTitle: "CleanTitle24" },
    { name: "Ngabi", headTitle: "CleanTitle25" }, { name: "Ntalaganya", headTitle: "CleanTitle26" },
    { name: "Mpindi", headTitle: "CleanTitle27" }, { name: "Kayozi", headTitle: "CleanTitle28" },
    { name: "Musu", headTitle: "CleanTitle29" }, { name: "Njovu", headTitle: "CleanTitle30" },
    { name: "Mutima", headTitle: "CleanTitle31" }, { name: "Abalangira-Ssanje", headTitle: "CleanTitle32" },
    { name: "Nsumba", headTitle: "CleanTitle33" }, { name: "Abalangira-Kibulala", headTitle: "CleanTitle34" },
    { name: "Mbwa", headTitle: "CleanTitle35" }, { name: "Nte", headTitle: "CleanTitle36" },
    { name: "Nswaswa", headTitle: "CleanTitle37" }, { name: "Lukato", headTitle: "CleanTitle38" },
    { name: "Nkebuka", headTitle: "CleanTitle39" }, { name: "Nvubu", headTitle: "CleanTitle40" },
    { name: "Butiko", headTitle: "CleanTitle41" }, { name: "Mazzi-Kisaasi", headTitle: "CleanTitle42" }
  // ... Add all 52 clans with placeholder head titles
];

async function main() {
  console.log('Start seeding...');

  // Create an admin user
  const adminUser = await prisma.user.upsert({
    where: { username: 'admin' },
  update: {},
  create: {
    username: 'admin',
    password: await hash('adminpassword', 10),
    role: 'ADMIN'
  }
  });

  // Create clans
  for (const clan of bugandaClans) {
    const createdClan = await prisma.kika.create({
      data: {
        name: clan.name,
        headTitle: clan.headTitle,
        description: `Description of ${clan.name} clan`,
        history: `History of ${clan.name} clan`,
        traditions: `Traditions of ${clan.name} clan`,
        updatedBy: { connect: { id: adminUser.id } }
      }
    });

    // If it's the Mamba clan, create the detailed structure
    if (clan.name === 'Mamba') {
      for (let i = 1; i <= 11; i++) {
        const mutuba = await prisma.mutuba.create({
          data: {
            name: `Mutuba ${i}`,
            headTitle: `MutubaHead${i}Title`,
            kika: { connect: { id: createdClan.id } }
          }
        });

        for (let j = 1; j <= 5; j++) {
          const ssiga = await prisma.ssiga.create({
            data: {
              name: `Ssiga ${j}`,
              headTitle: `SsigaHead${j}Title`,
              mutuba: { connect: { id: mutuba.id } }
            }
          });

          for (let k = 1; k <= 7; k++) {
            const lunyiriri = await prisma.lunyiriri.create({
              data: {
                name: `Lunyiriri ${k}`,
                headTitle: `LunyiririHead${k}Title`,
                ssiga: { connect: { id: ssiga.id } }
              }
            });

            for (let l = 1; l <= 3; l++) {
              const luggya = await prisma.luggya.create({
                data: {
                  name: `Luggya ${l}`,
                  headTitle: `LuggyaHead${l}Title`,
                  lunyiriri: { connect: { id: lunyiriri.id } }
                }
              });

              for (let m = 1; m <= 2; m++) {
                await prisma.enju.create({
                  data: {
                    name: `Enju ${m}`,
                    headTitle: `EnjuHead${m}Title`,
                    luggya: { connect: { id: luggya.id } }
                  }
                });
              }
            }
          }
        }
      }
    }
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
