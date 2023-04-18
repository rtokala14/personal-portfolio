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
    <div className=" h-screen bg-base-200 pb-16 w-full flex items-center justify-center">
      <FormBox />
    </div>
  );
}

export default ContactPage;
