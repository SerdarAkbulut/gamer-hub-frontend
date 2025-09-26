import request from "@/app/api/request";
import { useMutation, useQuery } from "@tanstack/react-query";
import { error } from "console";
import { toast } from "react-toastify";

export const Register = () => {
  return useMutation({
    mutationFn: (values: {
      email: string;
      userName: string;
      password: string;
    }) => request.Auth.register(values.email, values.userName, values.password),
    onError: (error: any) => {
      return toast.error(error.response.data.message);
    },
  });
};
export const Login = () => {
  return useMutation({
    mutationFn: (values: { email: string; password: string }) =>
      request.Auth.login(values.email, values.password),
    onSuccess: (res) => {
      localStorage.setItem("token", res.token);
      
    },
    onError: (error: any) => {
      return toast.error(error.response.data.message);
    },
  });
};

export const UserDetails = (userId: number) => {
  return useQuery({
    queryKey: ["userDetails", userId],
    queryFn: () => request.Auth.userDetails(userId),
  });
};

export const updateProfile = () => {
  return useMutation({
    mutationFn: (values: {
      userName: string;
      email: string;
      currentPassword: string;
      password: string;
    }) =>
      request.Auth.updateProfile(
        values.userName,
        values.email,
        values.currentPassword,
        values.password
      ),
  });
};

export const forgotPassword = () => {
  return useMutation({
    mutationFn: (email: string) => request.Auth.forgotPassword(email),
  });
};

export const resetPassword = () => {
  return useMutation({
    mutationFn: (values: { token: string; newPassword: string }) =>
      request.Auth.resetPassword(values.token, values.newPassword),
  });
};

export const checkResetToken = (token: string) => {
  return useQuery({
    queryKey: ["checkResetToken", token],
    queryFn: () => request.Auth.checkResetToken(token),
  });
};
