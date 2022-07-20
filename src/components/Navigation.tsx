// import { useEffect, useState } from "react";
import Link from "next/link";
import { useStore } from "../store";

export const Navigation = () => {
  const { authStore } = useStore();

  return (
    <div className="flex flex-row m-100 content-center justify-center">
      <Link href="/">
        <div style={{ cursor: "pointer", margin: 20 }}>HOME</div>
      </Link>
      <Link href="/upload">
        <div style={{ cursor: "pointer", margin: 20 }}>UPLOAD</div>
      </Link>
      <div
        onClick={() => authStore.logout()}
        style={{ cursor: "pointer", margin: 20 }}
      >
        LOGOUT
      </div>
    </div>
  );
};
