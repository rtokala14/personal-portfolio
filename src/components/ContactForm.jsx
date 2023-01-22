import { send } from "@emailjs/browser";
import { Component } from "preact";

export default class TodoForm extends Component {
  state = { senderName: "", senderEmail: "", contentBody: "" };

  onSubmit = (e) => {
    // alert(`Submitted a todo, ${this.state.senderName}`);
    e.preventDefault();
    console.log(this.state);
    this.setState({ senderEmail: "", senderName: "", contentBody: "" });
    send(
      "service_gd446je",
      "template_2g0b2rj",
      {
        senderName: this.state.senderName,
        senderEmail: this.state.senderEmail,
        contentBody: this.state.contentBody,
      },
      "cf_Suv06HKXB6mJk5"
    );
    // .then(
    //   function (response) {
    //     console.log("Email sent successfully", response.status, response.text);
    //   },
    //   function (error) {
    //     console.log("Email send failed", error);
    //   }
    // );
  };

  onInputName = (e) => {
    const { value } = e.target;
    this.setState({ senderName: value });
  };

  onInputEmail = (e) => {
    const { value } = e.target;
    this.setState({ senderEmail: value });
  };

  onInputBody = (e) => {
    const { value } = e.target;
    this.setState({ contentBody: value });
  };

  render(_, { senderName, senderEmail, contentBody }) {
    return (
      <form
        className=" h-full flex gap-3 justify-center items-center flex-col"
        onSubmit={this.onSubmit}
      >
        <div className=" flex gap-2 items-center">
          <label className=" text-xl" htmlFor="sender_name">
            Name:{" "}
          </label>
          <input
            className=" bg-transparent p-2 rounded-md border border-tertiary dark:border-Dtertiary"
            name="sender_name"
            type="text"
            value={senderName}
            onInput={this.onInputName}
          />
        </div>
        <div className=" flex gap-2 items-center">
          <label className=" text-xl" htmlFor="sender_email">
            Email:{" "}
          </label>
          <input
            className=" bg-transparent p-2 rounded-md border border-tertiary dark:border-Dtertiary"
            name="sender_email"
            type={"email"}
            value={senderEmail}
            onInput={this.onInputEmail}
          />
        </div>
        <div className=" flex flex-col items-start w-full gap-1">
          <label className=" text-xl" htmlFor="content_body">
            Message:{" "}
          </label>
          <textarea
            className=" bg-transparent h-24 p-2 rounded-md border border-tertiary dark:border-Dtertiary w-full resize-none"
            name="content_body"
            type={"text"}
            value={contentBody}
            onInput={this.onInputBody}
          />
        </div>
        <div className=" w-full flex justify-end px-2">
          <button
            className=" rounded-md p-2 text-lg px-4 bg-tertiary text-tint"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
