"use client";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { addPost } from "../hooks/post/usePost";
import { Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function Page() {
  const gameId = useSelector((state: RootState) => state.game.gameId);
  const gameName = useSelector((state: RootState) => state.game.gameName);
  //   useEffect(() => {
  //     const storedGameId = localStorage.getItem("gameId");

  //     setGameId(storedGameId ? parseInt(storedGameId) : null);

  //     const storedGameName = localStorage.getItem("gameName");
  //     setGameName(storedGameName || null);
  //   }, []);
  const { mutate } = addPost();
  return (
    <div className="mt-20 flex justify-center">
      <div className="w-1/2 justify-center flex">
        <div className="flex flex-col gap-5 w-1/2">
          <Formik
            initialValues={{ postTitle: "", postText: "" }}
            onSubmit={(values, { resetForm }) => {
              mutate({
                gameId: gameId!,
                gameName: gameName!,
                postTitle: values.postTitle,
                postText: values.postText,
              });
              resetForm();
            }}
          >
            {({ handleChange, values }) => (
              <Form className="flex flex-col gap-5">
                <TextField
                  type="text"
                  name="postTitle"
                  placeholder="Konu Başlığı"
                  value={values.postTitle}
                  onChange={handleChange}
                />
                <TextField
                  type="text"
                  name="postText"
                  placeholder="Konu İçeriği"
                  multiline
                  value={values.postText}
                  onChange={handleChange}
                />
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    variant="contained"
                    className="hover:shadow-none"
                  >
                    Kaydet
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Page;
