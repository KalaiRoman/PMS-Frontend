import ButtonBox from "../../../components/buttons/Buttons";
import { InputBox } from "../../../components/inputs/UiInputs";
import { loginTexts } from "../../../constants/constant";
import "./Login.scss";
function LoginForm() {
  return (
    <div className="login-section">
      <div className="login-inside">
        <div className="login-left">
          <div className="login-left-middle">
            <div className="fw-bold center fs-2">
              {loginTexts.login}
            </div>
            <div className="mt-3">
              <label className="label">
                Email ID <span className="star">*</span>
              </label>
              <InputBox placeholder={"Enter Your Email ID"} />
            </div>
            <div className="mt-3">
              <label className="label">
                Password <span className="star">*</span>
              </label>
              <InputBox placeholder={"Enter Your Password"} />
            </div>

            <div className="mt-3">
              <ButtonBox>Login</ButtonBox>
            </div>
            <div className="center mt-2 grey-text ">
              or
            </div>

            <div className="center mt-2">
              Don't have an account?. <span className="blue-text cursor fw-medium">SignUp</span>
            </div>
          </div>
        </div>
        <div className="login-right">right</div>
      </div>
    </div>
  );
}

export default LoginForm;
