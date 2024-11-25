import { Link, useNavigate } from "react-router-dom";
import { InputComp } from "./input";
import { Button } from "./ui/button";
import { useRef } from "react";
import axios from "axios";

export const SignIn = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const response: any = await axios.post(
      "http://localhost:3002/api/v1/signin",
      {
        username,
        password,
      }
    );
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    alert("u have signed In");
    navigate("/sidebar");
  }

  return (
    <>
      <div className="flex pt-24 justify-center bg-white min-h-screen p-8 bg-pattern">
        <div className="border-gray-200 border bg-white h-custom-h shadow-md rounded-lg w-full max-w-sm p-6">
          <div className="pt-4 flex justify-center">
            <p className="w-full text-3xl font-bold text-center">
              Welcome to Second Brain!
            </p>
          </div>

          <div className="pt-5 flex justify-center">
            <InputComp reference={usernameRef} placeholder="username" />
          </div>

          <div className="pt-4 flex justify-center">
            <InputComp reference={passwordRef} placeholder="password" />
          </div>

          <div className="pt-6 flex justify-center">
            <Button
              onClick={signin}
              size="lg"
              variant="primary"
              center={true}
              width="full"
              text="Sign In"
            />
          </div>

          <div className="pt-4 flex justify-center">
            <p className="text-sm text-gray-500 text-center">
              Haven't registered yet?{" "}
              <span className="text-[#414D5D] cursor-pointer">
                <Link to={"/"}>
                  <button>Sign Up</button>
                </Link>
              </span>
            </p>
          </div>
          <div className="pt-4 flex justify-center">
            <p className="text-sm text-gray-500 text-center">
              Before registering, read and agree with our{" "}
              <span className="text-[#414D5D]">
                Terms of Service and Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
