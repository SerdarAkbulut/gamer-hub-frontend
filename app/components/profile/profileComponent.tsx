import { Button, TextField } from "@mui/material";
import React from "react";

function ProfileComponent() {
  return (
    <div className="w-full max-w-2xl  p-12 rounded-xl shadow-lg border-2 border-black bg-white ">
      <h2 className="text-lg font-semibold mb-4">Hesap Bilgilerini Güncelle</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField fullWidth label="Kullanıcı Adı" variant="outlined" />
        <TextField fullWidth label="E-posta" variant="outlined" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <TextField
          fullWidth
          label="Yeni Şifre"
          variant="outlined"
          type="password"
        />
        <TextField
          fullWidth
          label="Yeni Şifre Tekrar"
          variant="outlined"
          type="password"
        />
      </div>
      <h1 className="p-4 text-2xl">
        Bilgilerinizin Güncellenmesi İçin Mevcut Şifrenizi Giriniz
      </h1>
      <div className="flex  mt-4 gap-2 justify-end">
        <div>
          <TextField
            fullWidth
            label="Mevcut Şifre (zorunlu)"
            variant="outlined"
            type="password"
          />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <Button variant="contained">Kaydet</Button>
      </div>
    </div>
  );
}

export default ProfileComponent;
