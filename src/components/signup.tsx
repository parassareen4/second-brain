import { Link, useNavigate } from "react-router-dom";
import { InputComp } from "./input";
import { Button } from "./ui/button";
import { useRef } from "react";
import axios from "axios";

export const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post("http://localhost:3002/api/v1/signup", {
      username,
      password,
    });
    alert("u have signed up");
    navigate("/signin");
  }

  return (
    <>
      <div className="flex pt-24 justify-center bg-white min-h-screen p-8 bg-pattern">
        <div className="border-gray-200 border bg-white h-custom-h shadow-md rounded-lg w-full max-w-sm p-6">
          <div className="pt-4 flex justify-center">
            <p className="w-full text-3xl font-bold text-center">
              Sign Up and Sync Your Ideas!
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
              onClick={signup}
              size="lg"
              variant="primary"
              center={true}
              width="full"
              text="Sign Up"
            />
          </div>

          <div className="pt-4 flex justify-center">
            <p className="text-sm text-gray-500 text-center">
              Already a member?{" "}
              <span className="text-[#414D5D] cursor-pointer">
                <Link to="/signin">
                  <button>Sign In</button>
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
