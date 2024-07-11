import CV from "react-cv";
import landingPhoto from "../../resources/landingPhoto.png";

export const ArthurCurriculum = () => {
  return (
    <CV
      personalData={{
        name: "Arthur Illa",
        title: "Desenvolvedor Fullstack Júnior",
        image: landingPhoto,
        contacts: [
          { type: "email", value: "arthur-illa@hotmail.com" },
          { type: "phone", value: "(21) 97144-6787" },
          { type: "location", value: "Petrópolis/RJ" },
          { type: "website", value: "bit.ly/arthurCurriculo" },
          {
            type: "linkedin",
            value: "linkedin.com/in/arthurIlla",
          },
          { type: "github", value: "github.com/OkuraCB" },
        ],
      }}
      sections={[
        {
          type: "text",
          title: "Perfil",
          icon: "usertie",
          content: `Muito prazer! Eu sou o Arthur.<br />
                    Eu não sei exatamente o motivo de eu ter começado a programar, mas desde então eu fiz minha própria TV, um site pra minha mãe gerenciar rifas, 
                    esse currículo (que está rodando na minha dita TV) e várias outras coisas!<br />
                    Sou fluente em inglês e tenho experiência trabalhando com **Typescript**, **Javascript**, **Python**, **ReactJS** e **NestJS** (projetos abaixo). 
                    Atualmente faço faculdade de engenharia da computação e estou me especializando em **RUST**.`,
        },
        {
          type: "common-list",
          title: "Experiência",
          icon: "rocket",
          items: [
            {
              title: "Programção Competitiva",
              authority: "OBI - Maratona de Programação",
              authorityMeta: "Competidor",
              authorityWebSite: "https://maratona.sbc.org.br/",
              rightSide: "2019 - 2023",
            },
            {
              title: "Eficiência em Pedra, Papel ou Tesoura.",
              authority: "RPSContest",
              authorityMeta: "Pesquisador",
              authorityWebSite: "http://www.rpscontest.com/",
              rightSide: "2021 - 2022",
            },
            {
              title: "Orange Business Services",
              authority: "Desenvolvedor Full Stack",
              authorityWebSite: "https://www.orange-business.com/br",
              rightSide: "2022 - Atualmente",
            },
          ],
        },
        {
          type: "projects-list",
          title: "Projetos",
          icon: "tasks",
          groups: [
            {
              sectionHeader: "Pessoais",
              description: "Alguns dos meus projetos pessoais.",
              items: [
                {
                  title: "Rifas Illa",
                  projectUrl: "https://bit.ly/rifailla",
                  description:
                    "Um sistema para gerenciar as rifas da minha mãe. <br />_email: guest@guest.com_<br />_password: guest_",
                },
                {
                  title: "Spindafy",
                  //projectUrl: "Em breve...",
                  description:
                    "Implementação de um algoritmo genético pra transformar fotos em combinações do Pokémon Spinda.",
                },
              ],
            },
            {
              sectionHeader: "Orange Business Services",
              description: "Projetos feitos para a empresa.",
              items: [
                {
                  title: "IT Room Inventory",
                  description:
                    "Um sistema para automatizar o processo de administrar os equipamentos de cada funcionário da empresa.",
                },
                {
                  title: "BookingsAPI",
                  projectUrl: "https://github.com/OkuraCB/Bookings",
                  description:
                    "Uma API para gerenciar as reuniões marcadas em cada sala da empresa.",
                },
                {
                  title: "Juan/Ruan",
                  projectUrl: "https://github.com/OkuraCB/JuanRuan",
                  description: "Um conversor de fuso horário.",
                },
                {
                  title: "Oceano",
                  projectUrl: "https://github.com/OkuraCB/Oceano",
                  description:
                    "Um tradutor com funcionalidade de voz e histórico de traduções.",
                },
              ],
            },
          ],
        },
        {
          type: "common-list",
          title: "Educação",
          icon: "graduation",
          items: [
            {
              title: "Ensino Médio Técnico Integrado em Telecomunicações",
              authority: "CEFET/RJ",
              authorityMeta: "Concluído",
              authorityWebSite: "https://www.cefet-rj.br/index.php/petropolis",
              rightSide: "2019 - 2022",
            },
            {
              title: "Engenharia da Computação",
              authority: "CEFET/RJ",
              authorityMeta: "Cursando",
              authorityWebSite: "https://e-computacao.com.br/",
              rightSide: "2022 - 2024",
            },
            {
              title: "Análise do Discurso",
              authority: "CEFET/RJ",
              authorityMeta: "Pesquisador",
              authorityWebSite: "https://www.cefet-rj.br/index.php/petropolis",
              rightSide: "2021 - Atualmente",
            },
          ],
        },
        {
          type: "tag-list",
          title: "Habilidades",
          icon: "cubes",
          items: [
            "Typescript",
            "Javascript",
            "Python",
            "RUST",
            "ReactJS",
            "NestJS",
            "Linux",
            "Git",
            "Redes",
          ],
        },
      ]}
      branding={false}
    />
  );
};
