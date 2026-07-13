import "./Login.scss";
import loginImage from "../../../assets/videos/login-right-image.png";
import ButtonBox from "../../../components/buttons/Buttons";
import { InputBox } from "../../../components/inputs/UiInputs";
import { loginTexts } from "../../../constants/constant";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../../../validation/loginSchema";
import { loginUser } from "../../../redux/actions/LoginAction";
import HOC from "../../../utils/hoc/HOC";
function LoginForm(props) {
  const {dispatch}=props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data) => {
    dispatch(loginUser(data,props.navigate));
  };
  return (
    <div className="login-section">
      <div className="login-inside">
        <div className="login-left">
          <div className="login-left-middle">

            <h2 className="fw-bold center fs-2">
              {loginTexts.login}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  Login
                </ButtonBox>

              </div>

            </form>

            <div className="center mt-2 grey-text">
              {loginTexts.or}
            </div>

            <div className="center mt-2">
              {loginTexts.Donthaveanaccount}

              <span className="blue-text cursor fw-medium">
                {loginTexts.SignUp}
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

export default HOC(LoginForm);