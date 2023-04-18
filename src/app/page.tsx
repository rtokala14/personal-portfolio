import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className=" min-h-screen snap-proximity snap-y">
      <div className="h-full snap-center pb-14 bg-base-200 flex flex-col w-full items-center">
        <div className=" px-4 w-full md:w-2/3 xl:w-1/2 flex flex-col items-start gap-1 my-auto">
          <h1 className=" text-4xl font-medium">{"Hi, I'm Rohit Tokala."}</h1>
          <p className=" text-sm italic">An aspiring full stack developer...</p>
          <p className=" pt-2 break-words text-lg">
            {
              "Recently Graduated from Purdue with a degree in Computer Engineering, I have been learning web development for a little over a year and am looking for a postition where I can contribute to the success of the company."
            }
          </p>
          <Link className="pt-4" href={"/contact"}>
            <button className="btn rounded-md btn-primary capitalize">
              Contact Me
            </button>
          </Link>
        </div>
        <div className=" mb-4 animate-bounce align-bottom ">
          <ChevronDown className=" h-8 w-8" />
        </div>
      </div>
      <div className="h-full snap-center bg-base-300 w-full"></div>
    </div>
  );
}
