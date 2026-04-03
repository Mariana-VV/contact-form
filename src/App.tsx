import { useState, type FormEvent } from "react";
import classNames from "classnames";
import "./App.scss";
import { CustomCheckbox } from "./ui/CustomCheckbox";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [isFirstNameError, setIsFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [isLastNameError, setIsLastNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [queryType, setQueryType] = useState("");
  const [isQueryTypeError, setIsQueryTypeError] = useState(false);
  const [message, setMessage] = useState("");
  const [isMessageError, setIsMessageError] = useState(false);
  const [agree, setAgree] = useState(false);
  const [isAgreeError, setIsAgreeError] = useState(false);
  const [isSupport, setIsSupport] = useState(false);
  const [isGeneral, setIsGeneral] = useState(false);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (firstName === "") {
      setIsFirstNameError(true);
    }
    if (lastName === "") {
      setIsLastNameError(true);
    }
    if (email === "") {
      setIsEmailError(true);
    }
    // if (!isSupport || !isGeneral) {
    //   setIsQueryTypeError(true);
    // }
    if (queryType === "") {
      setIsQueryTypeError(true);
    }
    if (message === "") {
      setIsMessageError(true);
    }
    if (agree === false) {
      setIsAgreeError(true);
    }

    if (firstName && lastName && email && queryType && message && agree) {
      setIsSuccess(true);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setQueryType("");
    setMessage("");
    setAgree(false);
    setIsSupport(false);
    setIsGeneral(false);
    setIsQueryTypeError(false);
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      {isSuccess && (
        <div className="form__success">
          <p className="form__sent">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2806 9.21937C16.3504 9.28903 16.4057 9.37175 16.4434 9.46279C16.4812 9.55384 16.5006 9.65144 16.5006 9.75C16.5006 9.84856 16.4812 9.94616 16.4434 10.0372C16.4057 10.1283 16.3504 10.211 16.2806 10.2806L11.0306 15.5306C10.961 15.6004 10.8783 15.6557 10.7872 15.6934C10.6962 15.7312 10.5986 15.7506 10.5 15.7506C10.4014 15.7506 10.3038 15.7312 10.2128 15.6934C10.1218 15.6557 10.039 15.6004 9.96938 15.5306L7.71938 13.2806C7.57865 13.1399 7.49959 12.949 7.49959 12.75C7.49959 12.551 7.57865 12.3601 7.71938 12.2194C7.86011 12.0786 8.05098 11.9996 8.25 11.9996C8.44903 11.9996 8.6399 12.0786 8.78063 12.2194L10.5 13.9397L15.2194 9.21937C15.289 9.14964 15.3718 9.09432 15.4628 9.05658C15.5538 9.01884 15.6514 8.99941 15.75 8.99941C15.8486 8.99941 15.9462 9.01884 16.0372 9.05658C16.1283 9.09432 16.211 9.14964 16.2806 9.21937ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96451 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7661 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z"
                fill="white"
              />
            </svg>
            Message Sent!
          </p>
          <p className="form__info">
            Thanks for completing the form. We’ll be in touch soon!
          </p>
        </div>
      )}
      <h2 className="form__title">Contact Us</h2>
      <div className="form__flex">
        <div className="form__group">
          <label className="form__label">
            <span className="form__span">
              First Name
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.432004 4.112L1.872 2.704L3.93391e-06 2.048L0.384004 1.2L2.08 2.048L1.936 0H2.896L2.752 2.048L4.448 1.184L4.832 2.048L2.976 2.688L4.416 4.112L3.696 4.736L2.432 3.072L1.152 4.736L0.432004 4.112Z"
                  fill="#0C7D69"
                />
              </svg>
            </span>
            <input
              type="text"
              value={firstName}
              className={classNames(
                {
                  error: isFirstNameError,
                },
                "form__input",
              )}
              onChange={(event) => (
                setFirstName(event.target.value),
                setIsFirstNameError(false)
              )}
            />
            {isFirstNameError && (
              <p className="form__error">This field is required</p>
            )}
          </label>
        </div>

        <div className="form__group">
          <label htmlFor="" className="form__label">
            <span className="form__span">
              Last Name
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.432004 4.112L1.872 2.704L3.93391e-06 2.048L0.384004 1.2L2.08 2.048L1.936 0H2.896L2.752 2.048L4.448 1.184L4.832 2.048L2.976 2.688L4.416 4.112L3.696 4.736L2.432 3.072L1.152 4.736L0.432004 4.112Z"
                  fill="#0C7D69"
                />
              </svg>
            </span>
            <input
              type="text"
              value={lastName}
              className={classNames(
                {
                  error: isLastNameError,
                },
                "form__input",
              )}
              onChange={(event) => (
                setLastName(event.target.value),
                setIsLastNameError(false)
              )}
            />
            {isLastNameError && (
              <p className="form__error">This field is required</p>
            )}
          </label>
        </div>
      </div>

      <div className="form__group">
        <label className="form__label">
          <span className="form__span">
            Email Address
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.432004 4.112L1.872 2.704L3.93391e-06 2.048L0.384004 1.2L2.08 2.048L1.936 0H2.896L2.752 2.048L4.448 1.184L4.832 2.048L2.976 2.688L4.416 4.112L3.696 4.736L2.432 3.072L1.152 4.736L0.432004 4.112Z"
                fill="#0C7D69"
              />
            </svg>
          </span>
          <input
            type="text"
            value={email}
            className={classNames(
              {
                error: isEmailError,
              },
              "form__input",
              "form__width",
            )}
            onChange={(event) => (
              setEmail(event.target.value),
              setIsEmailError(false)
            )}
          />
          {isEmailError && (
            <p className="form__error">Please enter a valid email address</p>
          )}
        </label>
      </div>

      <div className="form__flex">
        <div className="form__group">
          <label className="form__label form__radio">
            <span className="form__span">
              General Enquiry
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.432004 4.112L1.872 2.704L3.93391e-06 2.048L0.384004 1.2L2.08 2.048L1.936 0H2.896L2.752 2.048L4.448 1.184L4.832 2.048L2.976 2.688L4.416 4.112L3.696 4.736L2.432 3.072L1.152 4.736L0.432004 4.112Z"
                  fill="#0C7D69"
                />
              </svg>
            </span>
            <input
              type="radio"
              checked={isGeneral}
              value={queryType}
              className={classNames(
                {
                  error: isQueryTypeError,
                },
                "form__input",
              )}
              name="query"
              onChange={(event) => (
                setIsGeneral(true),
                setIsSupport(false),
                setQueryType(event.target.value)
              )}
            />
          </label>
        </div>
        <div className="form__group">
          <label className="form__label form__radio">
            <span className="form__span">
              Support Request
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.432004 4.112L1.872 2.704L3.93391e-06 2.048L0.384004 1.2L2.08 2.048L1.936 0H2.896L2.752 2.048L4.448 1.184L4.832 2.048L2.976 2.688L4.416 4.112L3.696 4.736L2.432 3.072L1.152 4.736L0.432004 4.112Z"
                  fill="#0C7D69"
                />
              </svg>
            </span>
            <input
              type="radio"
              value={queryType}
              checked={isSupport}
              className="form__input"
              name="query"
              onChange={(event) => (
                setIsSupport(true),
                setIsGeneral(false),
                setQueryType(event.target.value)
              )}
            />
          </label>
        </div>
      </div>
      {isQueryTypeError && (
        <p className="form__error">Please select a query type</p>
      )}

      <div className="form__group">
        <label className="form__label">
          <span className="form__span">
            Message
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.432004 4.112L1.872 2.704L3.93391e-06 2.048L0.384004 1.2L2.08 2.048L1.936 0H2.896L2.752 2.048L4.448 1.184L4.832 2.048L2.976 2.688L4.416 4.112L3.696 4.736L2.432 3.072L1.152 4.736L0.432004 4.112Z"
                fill="#0C7D69"
              />
            </svg>
          </span>
          <textarea
            value={message}
            className={classNames(
              {
                error: isFirstNameError,
              },
              "form__input",
              "form__width",
            )}
            onChange={(event) => (
              setMessage(event.target.value),
              setIsMessageError(false)
            )}
          />

          {isMessageError && (
            <p className="form__error">This field is required</p>
          )}
        </label>
      </div>

      <div className="form__start">
        <label className="form__checkbox">
          <CustomCheckbox
            isAgree={agree}
            setAgree={setAgree}
            setIsAgreeError={setIsAgreeError}
          />
          I consent to being contacted by the team
          <svg
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.432004 4.112L1.872 2.704L3.93391e-06 2.048L0.384004 1.2L2.08 2.048L1.936 0H2.896L2.752 2.048L4.448 1.184L4.832 2.048L2.976 2.688L4.416 4.112L3.696 4.736L2.432 3.072L1.152 4.736L0.432004 4.112Z"
              fill="#0C7D69"
            />
          </svg>
        </label>
      </div>
      {isAgreeError && (
        <p className="form__error">
          To submit this form, please consent to being contacted
        </p>
      )}

      <button type="submit" className="form__btn">
        Submit
      </button>
    </form>

    // <CustomCheckbox />
  );
}

export default App;
