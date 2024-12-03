"use client";

// React Imports
import { useState } from "react";

// Next Imports
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";

// MUI Imports
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";

// Third-party Imports
import { confirmSignIn, signIn } from "aws-amplify/auth";
import { Controller, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, minLength, string, email, pipe, nonEmpty } from "valibot";
import type { SubmitHandler } from "react-hook-form";
import type { InferInput } from "valibot";
import classnames from "classnames";

// Type Imports
import type { Mode } from "@core/types";

// Component Imports
import Logo from "@components/layout/shared/Logo";

// Config Imports
import themeConfig from "@configs/themeConfig";

// Hook Imports
import { useImageVariant } from "@core/hooks/useImageVariant";
import { useSettings } from "@core/hooks/useSettings";

import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

type ErrorType = {
  message: string[];
};

type FormData = InferInput<typeof schema>;

const schema = object({
  email: pipe(
    string(),
    minLength(1, "This field is required"),
    email("Please enter a valid email address")
  ),
  password: pipe(
    string(),
    nonEmpty("This field is required"),
    minLength(5, "Password must be at least 5 characters long")
  ),
});

const Login = ({ mode }: { mode: Mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [errorState, setErrorState] = useState<ErrorType | null>(null);

  // Vars
  const darkImg = "/images/pages/auth-v2-mask-1-dark.png";
  const lightImg = "/images/pages/auth-v2-mask-1-light.png";
  const darkIllustration = "/images/illustrations/auth/v2-login-dark.png";
  const lightIllustration = "/images/illustrations/auth/v2-login-light.png";
  const borderedDarkIllustration =
    "/images/illustrations/auth/v2-login-dark-border.png";
  const borderedLightIllustration =
    "/images/illustrations/auth/v2-login-light-border.png";

  // Hooks
  const router = useRouter();
  const searchParams = useSearchParams();
  const { lang: locale } = useParams();
  const { settings } = useSettings();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: valibotResolver(schema),
    defaultValues: {
      email: "admin@materialize.com",
      password: "admin",
    },
  });

  const authBackground = useImageVariant(mode, lightImg, darkImg);

  const characterIllustration = useImageVariant(
    mode,
    lightIllustration,
    darkIllustration,
    borderedLightIllustration,
    borderedDarkIllustration
  );

  const handleClickShowPassword = () => setIsPasswordShown((show) => !show);

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    console.log(data.email);

    const createUser = await client.models.User.create({
      email: data.email,
    });

    console.log(createUser);

    const { nextStep: signInNextStep } = await signIn({
      username: data.email,
      password: data.password,
    });

    if (signInNextStep.signInStep === "CONFIRM_SIGN_IN_WITH_EMAIL_CODE") {
      // prompt user for otp code delivered via email
      const { nextStep: confirmSignInNextStep } = await confirmSignIn({
        challengeResponse: "123456",
      });

      if (confirmSignInNextStep.signInStep === "DONE") {
        console.log("Sign in successful!");
      }
    }
    /** 
    const res = await signIn({
      username: data.email,
      password: data.password,
    });

    if (res && res.isSignedIn) {
      // Vars
      const redirectURL = searchParams.get('redirectTo') ?? '/'

      router.replace(redirectURL)
    } else {
      if (res?.nextStep) {
        const error = null

        setErrorState(error)
      }
    }
    */
  };

  return (
    <div className="flex bs-full justify-center">
      <div
        className={classnames(
          "flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden",
          {
            "border-ie": settings.skin === "bordered",
          }
        )}
      >
        <div className="pli-6 max-lg:mbs-40 lg:mbe-24">
          <img
            src={characterIllustration}
            alt="character-illustration"
            className="max-bs-[673px] max-is-full bs-auto"
          />
        </div>
        <img
          src={authBackground}
          className="absolute bottom-[4%] z-[-1] is-full max-md:hidden"
        />
      </div>
      <div className="flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]">
        <div className="absolute block-start-5 sm:block-start-[38px] inline-start-6 sm:inline-start-[38px]">
          <Logo />
        </div>
        <div className="flex flex-col gap-5 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]">
          <div>
            <Typography variant="h4">{`Welcome to ${themeConfig.templateName}!👋🏻`}</Typography>
            <Typography>
              Please sign-in to your account and start the adventure
            </Typography>
          </div>
          <Alert
            icon={false}
            className="bg-[var(--mui-palette-primary-lightOpacity)]"
          >
            <Typography variant="body2" color="primary">
              Email: <span className="font-medium">admin@materialize.com</span>{" "}
              / Pass: <span className="font-medium">admin</span>
            </Typography>
          </Alert>

          <form
            noValidate
            action={() => {}}
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  autoFocus
                  type="email"
                  label="Email"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    errorState !== null && setErrorState(null);
                  }}
                  {...((errors.email || errorState !== null) && {
                    error: true,
                    helperText:
                      errors?.email?.message || errorState?.message[0],
                  })}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Password"
                  id="login-password"
                  type={isPasswordShown ? "text" : "password"}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    errorState !== null && setErrorState(null);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={handleClickShowPassword}
                          onMouseDown={(e) => e.preventDefault()}
                          aria-label="toggle password visibility"
                        >
                          <i
                            className={
                              isPasswordShown
                                ? "ri-eye-off-line"
                                : "ri-eye-line"
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...(errors.password && {
                    error: true,
                    helperText: errors.password.message,
                  })}
                />
              )}
            />

            <div className="flex justify-between items-center flex-wrap gap-x-3 gap-y-1">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
              <Typography
                className="text-end"
                color="primary"
                component={Link}
                href={"/forgot-password"}
              >
                Forgot password?
              </Typography>
            </div>
            <Button fullWidth variant="contained" type="submit">
              Log In
            </Button>
            <div className="flex justify-center items-center flex-wrap gap-2">
              <Typography>New on our platform?</Typography>
              <Typography component={Link} href={"/register"} color="primary">
                Create an account
              </Typography>
            </div>
          </form>
          <Divider className="gap-3">or</Divider>
          <Button
            color="secondary"
            className="self-center text-textPrimary"
            startIcon={
              <img src="/images/logos/google.png" alt="Google" width={22} />
            }
            sx={{ "& .MuiButton-startIcon": { marginInlineEnd: 3 } }}
            onClick={() => ""}
          >
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
