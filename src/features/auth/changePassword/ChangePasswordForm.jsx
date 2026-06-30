import "../login//Login.scss";
import loginImage from "../../../assets/videos/login-right-image.png";

import ButtonBox from "../../../components/buttons/Buttons";
import { InputBox } from "../../../components/inputs/UiInputs";

import { loginTexts } from "../../../constants/constant";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import changePasswordSchema from "../../../validation/changePasswordSchema";

function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
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
          Change Password
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>

              {/* Email */}

              <div className="mt-3">

                <label className="label">
                  Password
                  <span className="star">*</span>
                </label>

                <InputBox
                  type="text"
                  placeholder="Enter Your New Password"
                  {...register("email")}
                />

                <p className="error fs-14">
                  {errors.password?.message}
                </p>

              </div>

              {/* Password */}

              <div className="mt-3">

                <label className="label">
                  Confirm Password
                  <span className="star">*</span>
                </label>

                <InputBox
                  type="password"
                  placeholder="Enter Your Comfirm Password"
                  {...register("password")}
                />

                <p className="error fs-14">
                  {errors.confirmPassword?.message}
                </p>

              </div>

              <div className="mt-4">

                <ButtonBox
                  type="submit"
                >
                  Change Password
                </ButtonBox>

              </div>

            </form>

            <div className="center mt-2 grey-text">
              {loginTexts.or}
            </div>

            <div className="center mt-2">

              <span className="blue-text cursor fw-medium">
         Login
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

export default ChangePasswordForm;