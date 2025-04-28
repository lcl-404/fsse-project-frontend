import {SyntheticEvent, useLayoutEffect, useState} from "react";
import * as FirebaseAuthService from "../../../../../authService/FirebaseAuthService.ts"
import {useNavigate, useRouter} from "@tanstack/react-router";
import {useAuthStore} from "../../../../../store/useAuthStore.ts";

export default function LoginContainer() {
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false);
  const router = useRouter();
  const loginUser = useAuthStore((state) => state.loginUser);
  const navigate = useNavigate({from:"/login"});

  const handleSigninWithEmailAndPassword = async (e: SyntheticEvent) => {
    e.preventDefault();

    setIsSigningIn(true);
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value; // typechecks!
    const password = target.password.value; // typechecks!

    const loginResult = await FirebaseAuthService.signInWithEmailAndPassword(email, password);

    setIsSigningIn(false);

    if(!loginResult){
      setIsLoginFailed(true);
    } else {
      router.history.back();
    }// etc...
  }

  useLayoutEffect(() => {
    if (loginUser){
      navigate({to:"/"})
    }
  }, []);

  return (
  <>
    {isLoginFailed && (
      <div className="fixed top-0 left-0 w-full z-50 rounded-none">
        <div role="alert" className="alert alert-error shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Login Failed!</span>
        </div>
      </div>
    )}

    <div className="hero min-h-4/5 bg-[url('/assets/img/blue.jpg')] relative">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="hero-content flex-col lg:flex-row-reverse gap-20 relative z-10">
        <div className="text-center lg:text-left text-base-100">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 w-6/7">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSigninWithEmailAndPassword}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input name="email" type="email" className="input no-focus-ring" placeholder="Email" required />
                <label className="label">Password</label>
                <input name="password" type="password" className="input no-focus-ring" placeholder="Password" required />
                <button type="submit" className="btn mt-4 bg-babyblue text-newblue" disabled={isSigningIn}>Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}