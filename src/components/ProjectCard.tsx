import { ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";

function ProjectCard({
  thumb,
  title,
  blurb,
  tags,
  gitLink,
  liveLink,
}: {
  thumb: StaticImageData;
  title: string;
  blurb: string;
  tags: string[];
  gitLink: string;
  liveLink: string;
}) {
  return (
    <div className="card static card-bordered rounded-md w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={thumb}
          priority
          placeholder="blur"
          alt="Project Thumbnail"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{blurb}</p>
        <div className="card-actions justify-start">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-outline rounded-sm">
              {tag}
            </div>
          ))}
        </div>
        <div className=" card-actions flex w-full justify-between items-center pt-2">
          <a
            target="_blank"
            rel="noreferrer"
            href={gitLink}
            className="btn btn-outline flex items-center gap-2 capitalize rounded-md"
          >
            <span>Source Code</span>
            <ExternalLink className="h-5 w-5" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={liveLink}
            className="btn btn-primary flex items-center gap-2 capitalize rounded-md"
          >
            <span>Live Preview</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
