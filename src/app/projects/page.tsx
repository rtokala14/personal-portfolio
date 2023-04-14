import ProjectCard from "@/components/ProjectCard";
import RibbitThumb from "../../../public/ribbit-thumb.webp";
import SpredditThumb from "../../../public/spreddit-thumb.webp";
import NoteifyThumb from "../../../public/noteify-thumb.webp";
import NewsThumb from "../../../public/news-thumb.webp";
import PortfolioThumb from "../../../public/portfolio-thumb.webp";

function ProjectsPage() {
  return (
    <div className=" h-fit flex bg-base-300 gap-4 pb-4 flex-col items-center w-full">
      <h1 className=" font-semibold pt-6 text-3xl">
        {"Some of things I've built"}
      </h1>
      <p className=" pb-4 font-light max-w-xl">
        {
          "Check out some of the stuff I've built over the years. I'm always learning and trying new things. If you have any questions or want to chat, feel free to reach out!"
        }
      </p>
      <ul className="grid grid-flow-row items-stretch grid-cols-1 md:grid-flow-col xl:grid-rows-2 md:grid-rows-3 gap-10">
        <ProjectCard
          thumb={RibbitThumb}
          title="Ribbit"
          blurb="A fullstack Twitter-like web app with Auth"
          tags={[
            "Next.js",
            "TailwindCSS",
            "TypeScript",
            "NextAuth",
            "MySQL",
            "tRPC",
          ]}
          gitLink="https://github.com/rtokala14/ribbit"
          liveLink="https://ribbit-sooty.vercel.app/"
        />
        <ProjectCard
          thumb={SpredditThumb}
          title="Spreddit"
          blurb="A fullstack Reddit-like web app with Auth"
          tags={[
            "Next.js",
            "TailwindCSS",
            "TypeScript",
            "NextAuth",
            "PostgreSQL",
            "tRPC",
          ]}
          gitLink="https://github.com/rtokala14/spreddit-t3"
          liveLink="https://spreddit-t3.vercel.app/"
        />
        <ProjectCard
          thumb={PortfolioThumb}
          title="Portfolio"
          blurb="This Website! Built with Next13"
          tags={["Next.js 13", "TailwindCSS", "TypeScript", "DaisyUI"]}
          gitLink="https://github.com/rtokala14/personal-portfolio"
          liveLink="https://tokala.dev"
        />
        <ProjectCard
          thumb={NoteifyThumb}
          title="Note-ify"
          blurb="A fullstack note-taking built using Firebase as a backed"
          tags={[
            "React",
            "TailwindCSS",
            "Vite",
            "Firebase",
            "TypeScript",
            "React Router",
            "ShadcnUI",
          ]}
          gitLink="https://github.com/rtokala14/firebase-notetaking"
          liveLink="https://firebase-notetaking.vercel.app/"
        />
        <ProjectCard
          thumb={NewsThumb}
          title="The Toks News"
          blurb="A fullstack news app built using Next.js and NewsAPI"
          tags={["Next.js", "TailwindCSS", "TypeScript", "GraphQL", "Stepzen"]}
          gitLink="https://github.com/rtokala14/news-app"
          liveLink="http://news-app-chi-sandy.vercel.app/"
        />
      </ul>
    </div>
  );
}

export default ProjectsPage;
