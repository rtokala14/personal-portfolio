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
    <div className=" min-h-screen bg-base-200 w-full flex flex-col items-center justify-start md:justify-center pb-16 px-2 md:px-14">
      <div className=" flex flex-col">
        <div className=" flex gap-4 items-center">
          <time className=" text-lg w-20 font-normal">{"Dec 2022"}</time>
          <div className=" h-6 w-6 rounded-full bg-base-content"></div>
          <h2 className=" text-xl font-medium">Purdue University</h2>
        </div>
        <div className=" w-full border-l-4 pb-4 flex flex-col -mt-1 pl-[26px] border-l-base-content min-h-12 ml-[106px]">
          <p className=" font-light text-base">{"B.S. Computer Engineering"}</p>
          <ul className=" pt-2">
            <li className=" flex items-center gap-2">
              <p className=" font-bold text-xl">-</p>
              <p>President of Boiler Baaz</p>
            </li>
            <li className=" flex items-center gap-2">
              <p className=" font-bold text-xl">-</p>
              <p>Team Leader for Boiler Gold Rush</p>
            </li>
            <li className=" flex items-center gap-2">
              <p className=" font-bold text-xl">-</p>
              <p>Teaching Assistant for Digital Systems</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
