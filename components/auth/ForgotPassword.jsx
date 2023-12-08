import { useUI } from "@components/ui";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { Oval } from "react-loader-spinner";

const ForgotPassword = () => {
  const [messageView, setMessageView] = useState(false);
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUIView } = useUI()
  const handleEmailSubmit = (e) => {
    setError("");
    setLoading(true);
    e.preventDefault();

    if (!email.trim() == "") {
      // forgotPassword(email)
      //   .then((res) => {
      //     setError("Please, Check your email");
      //     setMessageView(true);
      //     setLoading(false);
      //   })
      //   .catch((err) => {
      //     console.error(err.message);
      //     setError("email is not registered");
      //     setLoading(false);
      //   });
    } else {
      // setError("Please add your email");
      // setLoading(false);
    }
  };

  return (
    <div className="my-10">
      {messageView ? (
        <>
          <div className="flex flex-col items-center justify-center text-center">
            <Image
              src="/icons/check-your-email.png"
              width={65}
              height={65}
              alt="Email"
            />
            <p className="text-2xl font-semibold">Check your email</p>
            <p>
              We sent a password resent link to <br /> {email}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="border-2 p-5">
            <p className="mb-5 text-lg font-bold">Forgot password?</p>
            <form onSubmit={handleEmailSubmit}>
              <label htmlFor="" className="">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="mb-2 mt-2 w-full rounded-md border-2 px-2 py-2 focus:outline-none"
                placeholder="Enter Email Address"
              />
              {error && <p className="my-2 text-red-500">{error}</p>}

              <button
                disabled={loading}
                className="flex w-full items-center justify-center rounded bg-[#B20310] py-2 font-bold text-white"
              >
                {loading ? (
                  <>
                    <Oval
                      height={22}
                      width={22}
                      color="#313C66"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="oval-loading"
                      secondaryColor="#ffffff"
                      strokeWidth={2}
                      strokeWidthSecondary={2}
                    />
                  </>
                ) : (
                  "Create"
                )}
              </button>
            </form>
            <p className="my-2">
              Remembered your password?
              <span
                className="ml-1 cursor-pointer font-semibold text-[#B20310]"
                onClick={() => setUIView("SIGN_IN_VIEW")}
              >
                Sign in
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
