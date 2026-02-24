"use client";
import KaydedilenlerComponent from "@/app/components/kaydedilenler/kaydedilenlerComponent";
import ProfileComponent from "@/app/components/profile/profileComponent";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

function SettingsPage() {
  const [value, setValue] = useState<number>(0);

  const renderContent = () => {
    switch (value) {
      case 0:
        return (
          <div>
            <ProfileComponent />
          </div>
        );
      case 1:
        return (
          <div>
            <KaydedilenlerComponent />
          </div>
        );
      case 2:
        return <div>Gönderilerim İçeriği</div>;
    }
  };
  return (
    <div className="grid grid-cols-10 min-h-screen  ">
      <div className="col-span-1 flex  ">
        <div className=" flex flex-col gap-1   pt-24 text-xl">
          <Link href="#" onClick={() => setValue(0)}>
            Profil Ayarları
          </Link>
          <Link href="#" onClick={() => setValue(1)}>
            Kaydedilenler
          </Link>
          <Link href="#">Gönderilerim</Link>
          <Link href="#">Takip ve Beğeniler</Link>
          <Link href="#">Resim Ekle Sil</Link>
        </div>
      </div>
      <div className="col-span-9  flex  shadow-sm items-start justify-center pt-24">
        {renderContent()}
      </div>
    </div>
  );
}

export default SettingsPage;
