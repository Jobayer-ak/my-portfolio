import {
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import image from "../../Images/my-bg-with-pic.png";
import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div id="contact" className="container mx-auto mt-12 px-12">
      <h2 className="text-center text-5xl font-bold my-3">Contact Me</h2>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-7 my-10">
        <div className="text-center lg:w-96 shadow-2xl py-7">
          <div className="flex flex-col justify-center items-center icon_parent">
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
          </div>
          <h4 className="text-xl font-bold my-5">Address</h4>
          <p className="text-secondary px-5">
            Tarakanda, Mymensingh, Bangladesh
          </p>
        </div>
        <div className="text-center lg:w-96 shadow-2xl p-9">
          <div className="flex flex-col justify-center items-center icon_parent">
            <FontAwesomeIcon className="icon" icon={faPhone} />
          </div>
          <h4 className="text-xl font-bold my-5">Phone Number</h4>
          <a className="text-secondary" href="tel://8801725008757">
            +880 1725 008757
          </a>
        </div>
        <div className="text-center lg:w-96 shadow-2xl p-9">
          <div className="flex flex-col justify-center items-center icon_parent">
            <FontAwesomeIcon className="icon" icon={faPaperPlane} />
          </div>
          <h4 className="text-xl font-bold my-5">E-mail</h4>
          <a href="https://www.gmail.com" target="_blank">
            <p className="text-primary">jobayer.ak@gmail.com</p>
          </a>
        </div>
      </div>

      {/* Form */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 items-center bg-slate-100">
        <div className="p-3 md:pr-10 lg:p-8">
          <img src={image} className="image"></img>
        </div>

        <div className="text-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="border p-3 rounded-md md:w-50 lg:w-96 max-w-md"
              placeholder="Your Name"
              {...register("example")}
            />
            <br />
            <br />

            <input
              type="email"
              className="p-3 border rounded-md md:w-50 lg:w-96 max-w-md"
              placeholder="Email"
              {...register("exampleRequired", { required: true })}
            />
            <br />
            <br />

            <input
              type="text"
              className="border p-3 rounded-md md:w-50 lg:w-96  max-w-md"
              placeholder="Subject"
              {...register("example")}
            />

            <br />
            <br />

            <textarea
              type="text"
              className="border p-3 rounded-md md:w-50 lg:w-96"
              placeholder="Your Message"
              rows={4}
              cols={24}
              {...register("exampleRequired", { required: true })}
            />
            <br />
            <br />

            <p className="text-red-700">
              {errors.exampleRequired && <span>This field is required</span>}
            </p>

            <input className="btn btn-primary mb-5" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
