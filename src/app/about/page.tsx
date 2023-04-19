export const metadata = {
  title: "About | Rohit Tokala",
  description: "Rohit Tokala's About page",
  openGraph: {
    type: "website",
    url: "https://tokala.dev/about",
    title: "About | Rohit Tokala",
    description: "Rohit Tokala's about page",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Rohit Tokala",
    description: "Rohit Tokala's about page",
    site: "@TokalaRohit",
  },
};

function AboutPage() {
  return (
    <div className=" min-h-screen bg-base-200 w-full flex flex-col items-center justify-start md:justify-center pb-16 ">
      <div className=" flex flex-col max-w-3xl pl-1 pr-3 md:px-14">
        <TimeSet
          timeStr="Dec 2022"
          subTime="Aug 2018 - Dec 2022"
          title="Purdue University"
          subtitle="B.S. Computer Engineering"
          sublines={[
            "President of Boiler Baaz",
            "Team Leader for Boiler Gold Rush",
            "Student Associate for Pappy's",
          ]}
        />
        <TimeSet
          timeStr="Jun 2021"
          title="Applied Materials"
          subtitle="Software Engineer Intern"
          sublines={[
            "Contributed ot the SW Tools automation and DevOps for the Display Flexible Technologies",
            "Plugins and microservices development for Jira and Conﬂuence",
            "Compiled data for internal customers for scheduled reports and analyses on eazyBI",
          ]}
          subTime="June 2021 - November 2021"
        />
        <TimeSet
          timeStr="Aug 2021"
          title="CV for Forest Inventory Analysis"
          subtitle="Researcher"
          sublines={[
            "Worked with Dr. Guofan Shao and the CVFIA team to create an algorithm to process stereo video footage from cameras equipped with motion sensors to acquire and analyze tree data.",
          ]}
          subTime="Aug 2021 - May 2022"
        />
        <TimeSet
          timeStr="Aug 2020"
          title="Purdue University"
          subtitle="Teaching Assistant"
          sublines={[
            "Teaching Assistant to Rick Kennell for the Digital Systems Design course",
            "Managed and provided educational support to 40 students in a classroom setting",
            "Created and Graded labs and exams for the lab sessions",
          ]}
          subTime="Aug 2020 - May 2021"
        />
        <TimeSet
          timeStr="Aug 2020"
          title="Image Processing Analysis Lab"
          subtitle="Researcher"
          sublines={[
            "Worked with Edward Delp and a team of 5 students to develop a faster lane detection and tracking system to work with autonomous driving vehicles",
          ]}
          subTime="Aug 2020 - May 2021"
        />
      </div>
    </div>
  );
}

function TimeSet({
  timeStr,
  title,
  subtitle,
  sublines,
  subTime,
}: {
  timeStr?: string;
  title?: string;
  subtitle?: string;
  sublines?: string[];
  subTime?: string;
}) {
  return (
    <>
      <div className=" flex gap-2 md:gap-4 items-center -mt-1">
        <time className=" text-lg hidden md:block w-20 font-normal">
          {timeStr}
        </time>
        <div className=" h-6 w-6 rounded-full bg-base-content"></div>
        <h2 className=" text-xl font-medium">{title}</h2>
      </div>
      <div className=" w-full border-l-4 pb-4 flex flex-col -mt-1 pl-[16px] md:pl-[26px] border-l-base-content min-h-12 ml-[10px] md:ml-[106px]">
        <p className=" font-light text-base">{subtitle}</p>
        <p className=" font-extralight -mt-1 text-base">{subTime}</p>
        <ul className=" pt-2">
          {sublines?.map((line) => (
            <li key={line} className=" flex items-start gap-2">
              <p className=" font-bold text-xl">-</p>
              <p className=" break-words">{line}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AboutPage;
