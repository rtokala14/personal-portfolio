import ProjectCard from "@/components/ProjectCard";
import RibbitThumb from "../../../public/ribbit-thumb.webp";
import SpredditThumb from "../../../public/spreddit-thumb.webp";

function ProjectsPage() {
  return (
    <div className="min-h-screen flex pb-14 bg-base-300 gap-4 flex-col md:flex-row items-center justify-evenly w-full">
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
    </div>
  );
}

export default ProjectsPage;
