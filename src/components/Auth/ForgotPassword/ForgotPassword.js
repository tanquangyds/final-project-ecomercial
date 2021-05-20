import React from "react";
import FirebaseContext from "../../../firebase/context";
import "./ForgotPassword.scss";
import emailIcon from "../../../assets/images/envelope-regular.svg";
import usersIcon from "../../../assets/images/users-solid.svg";
import questionIcon from "../../../assets/images/question-solid.svg";

function ForgotPassword() {
  const { firebase } = React.useContext(FirebaseContext);
  const [resetPasswordEmail, setResetPasswordEmail] = React.useState("");
  const [isPasswordReset, setIsPasswordReset] = React.useState(false);
  const [passwordResetError, setPasswordResetError] = React.useState(null);

  async function handleResetPassword() {
    try {
      await firebase.resetPassword(resetPasswordEmail);
      setIsPasswordReset(true);
      setPasswordResetError(null);
    } catch (err) {
      console.error("Error sending email", err);
      setPasswordResetError(err.message);
      setIsPasswordReset(false);
    }
  }

  return (
    <div className="forgot__container">
      <div className="forgot__header">
        <div className="forgot__logo">
          <img src={questionIcon} alt="users-icon" />
        </div>
        <div className="forgot__title">Reset your password</div>
      </div>
      <div className="forgot__form">
        <div className="form__group">
          <div className="form__group__icon">
            <img src={emailIcon} alt="user-icon" />
          </div>
          <input
            type="email"
            className="input"
            placeholder="Provide your account email"
            onChange={(event) => setResetPasswordEmail(event.target.value)}
          />
        </div>
        <div className="form__notification">
          {isPasswordReset && <p>Check email to reset password</p>}
          {passwordResetError && (
            <p className="error-text">{passwordResetError}</p>
          )}
        </div>
        <div className="form__submit">
          <button className="reset__button" onClick={handleResetPassword}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
