import "../login/Login.scss";
import loginImage from "../../../assets/videos/login-right-image.png";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupSchema from "../../../validation/signupSchema";
import { loginTexts } from "../../../constants/constant";
import { InputBox } from "../../../components/inputs/UiInputs";
import ButtonBox from "../../../components/buttons/Buttons";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login-section">
      <div className="login-inside">
        <div className="login-left">
          <div className="login-left-middle">

            <h2 className="fw-bold center fs-2">
           Signup
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                   <div className="mt-3">

                <label className="label">
                  Name
                  <span className="star">*</span>
                </label>

                <InputBox
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name")}
                />

                <p className="error fs-14">
                  {errors.name?.message}
                </p>

              </div>

              {/* Email */}

              <div className="mt-3">

                <label className="label">
                  {loginTexts.EmailID}
                  <span className="star">*</span>
                </label>

                <InputBox
                  type="text"
                  placeholder="Enter Your Email ID"
                  {...register("email")}
                />

                <p className="error fs-14">
                  {errors.email?.message}
                </p>

              </div>

              {/* Password */}

              <div className="mt-3">

                <label className="label">
                  {loginTexts.Password}
                  <span className="star">*</span>
                </label>

                <InputBox
                  type="password"
                  placeholder="Enter Your Password"
                  {...register("password")}
                />

                <p className="error fs-14">
                  {errors.password?.message}
                </p>

              </div>

              <div className="mt-4">

                <ButtonBox
                  type="submit"
                >
                  Signup
                </ButtonBox>

              </div>

            </form>

            <div className="center mt-2 grey-text">
              {loginTexts.or}
            </div>

            <div className="center mt-2">
              Already have an account? 

              <span className="blue-text cursor fw-medium">
                {loginTexts.login}
              </span>

            </div>

          </div>
        </div>

        <div className="login-right">

          <img
            src={loginImage}
            alt="Login"
            className="cover-img"
          />

        </div>

      </div>
    </div>
  );
}

export default SignupForm;