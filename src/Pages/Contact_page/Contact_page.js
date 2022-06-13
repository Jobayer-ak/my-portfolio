import React from "react";
import { useForm } from "react-hook-form";
import "./Contact_page.css";

const Contact_page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="contact_page">
      <div className="container mx-auto px-12 text-center py-5">
        <h2 className="text-center text-4xl text-primary font-bold my-7">
          Contact Page
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Your Name"
            {...register("example")}
          />

          <br />
          <br />
          <input
            type="email"
            className="input input-bordered w-full max-w-xs"
            placeholder="Email"
            {...register("exampleRequired", { required: true })}
          />
            <br/>
            <br/>
          <textarea
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Your Message"
            rows={20}
            cols={20}
            {...register("exampleRequired", { required: true })}
          />
          <br />
          <br />

          <p className="text-red-700">
            {errors.exampleRequired && <span>This field is required</span>}
          </p>

          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact_page;
