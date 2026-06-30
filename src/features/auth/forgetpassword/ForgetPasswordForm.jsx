import "../login/Login.scss";
import loginImage from "../../../assets/videos/login-right-image.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginTexts } from "../../../constants/constant";
import { InputBox } from "../../../components/inputs/UiInputs";
import ButtonBox from "../../../components/buttons/Buttons";
import forgetpasswordSchema from "../../../validation/forgetpasswordSchema";
function ForgetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgetpasswordSchema),
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
           Forget Password
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>

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

            

              <div className="mt-4">

                <ButtonBox
                  type="submit"
                >
                  Forget Password
                </ButtonBox>

              </div>

            </form>

            <div className="center mt-2 grey-text">
              {loginTexts.or}
            </div>

            <div className="center mt-2">
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

export default ForgetPasswordForm;