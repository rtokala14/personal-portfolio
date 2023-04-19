import FormBox from "@/components/FormBox";

export const metadata = {
  title: "Contact | Rohit Tokala",
  description: "Rohit Tokala's Contact page",
  openGraph: {
    type: "website",
    url: "https://tokala.dev/contact",
    title: "Contact | Rohit Tokala",
    description: "Rohit Tokala's contact page",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Rohit Tokala",
    description: "Rohit Tokala's contact page",
    site: "@TokalaRohit",
  },
};

function ContactPage() {
  return (
    <div className=" h-screen bg-base-200 pb-16 w-full flex flex-col gap-4 items-center justify-center">
      <h2 className=" text-4xl font-medium">{"Contact Me"}</h2>
      <p className=" text-lg text-center mb-8">
        {
          "If you have any questions or would like to get in touch, please fill out the form below."
        }
      </p>
      <FormBox />
    </div>
  );
}

export default ContactPage;
