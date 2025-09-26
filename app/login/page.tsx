"use client";
import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { Login } from "../hooks/auth/useAuth";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

function Page() {
  const { mutate, isSuccess } = Login();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Geçerli bir e-posta giriniz")
        .required("E-posta zorunludur"),
      password: Yup.string().required("Şifre zorunludur"),
    }),
    onSubmit: (values) => {
      mutate(values);
    },
  });
  useEffect(() => {
    if (isSuccess) {
      router.push("/");
    }
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="flex-col border-[1px] border-gray-500 p-8 rounded-md shadow-lg w-80"
      >
        <div className="my-5">
          <h1 className="text-2xl font-bold">Giriş Yap</h1>
        </div>

        <div className="flex flex-col gap-5">
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            variant="filled"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
          />

          <TextField
            id="password"
            name="password"
            type="password"
            placeholder="Şifre"
            variant="filled"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
          />
        </div>

        <div className="my-5 border-b-2 border-black pb-2">
          <Button
            type="submit"
            variant="contained"
            className="text-white text-md font-bold bg-black"
            fullWidth
          >
            Giriş
          </Button>
        </div>

        <div className="flex justify-center">
          <a href="/forgot-password">Şifremi unuttum</a>
        </div>
      </form>
    </div>
  );
}

export default Page;
