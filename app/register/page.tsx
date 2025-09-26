"use client";

import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Register } from "../hooks/auth/useAuth";

function Page() {
  const router = useRouter();
  const { mutate, isSuccess } = Register();

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required("Kullanıcı adı zorunludur")
        .min(3, "En az 3 karakter olmalı"),
      email: Yup.string()
        .email("Geçerli bir e-posta giriniz")
        .required("E-posta zorunludur"),
      password: Yup.string()
        .required("Şifre zorunludur")
        .min(6, "Şifre en az 6 karakter olmalı")
        .max(20, "Şifre en fazla 20 karakter olabilir"),
    }),
    onSubmit: (values) => {
      mutate(values);
    },
  });

  if (isSuccess) {
    router.push("/login");
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="flex-col border-[1px] border-gray-500 p-8 rounded-md shadow-lg w-80"
      >
        <div className="my-5">
          <h1 className="text-2xl font-bold">Sign up</h1>
        </div>

        <div className="flex flex-col gap-5">
          <TextField
            id="userName"
            name="userName"
            type="text"
            placeholder="User name"
            variant="filled"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
            fullWidth
          />

          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
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
            placeholder="Password"
            variant="filled"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
          />
        </div>

        <div className="mt-5">
          <Button
            type="submit"
            variant="contained"
            className="text-white text-md font-bold bg-black"
            fullWidth
          >
            Kaydol
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Page;
