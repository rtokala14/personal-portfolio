"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { send } from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(30, "Name is too long"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(300, "Message is too long"),
});

type formSchemaType = z.infer<typeof formSchema>;

function FormBox() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
    reset,
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<formSchemaType> = (data) => {
    if (isValid) {
      send(
        "service_gd446je",
        "template_2g0b2rj",
        {
          senderName: data.name,
          senderEmail: data.email,
          contentBody: data.message,
        },
        "cf_Suv06HKXB6mJk5"
      );
    }
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" form-control max-w-xl w-full px-2"
    >
      <label className="label">
        <span className="label-text">Your Name</span>
      </label>
      <input
        className="input input-bordered"
        type="text"
        {...register("name")}
      />
      <p className="text-error mt-1">{errors.name?.message}</p>
      <label className="label">
        <span className="label-text">Your Email</span>
      </label>
      <input
        className="input input-bordered"
        type="email"
        {...register("email")}
      />
      <p className="text-error mt-1">{errors.email?.message}</p>
      <label className="label">
        <span className="label-text">Your Message</span>
      </label>
      <textarea
        className="textarea textarea-bordered"
        {...register("message")}
      />
      <p className="text-error mt-1">{errors.message?.message}</p>
      <button
        className="btn btn-primary mt-4 justify-start w-fit"
        type="submit"
      >
        <Send className="h-5 w-5" />
        <span className=" capitalize ml-2">Send</span>
      </button>

      {isSubmitSuccessful && (
        <div className=" toast toast-start">
          <div className=" alert alert-success">
            <div>
              <span>Message Sent!</span>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}

export default FormBox;
