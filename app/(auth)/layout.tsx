import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="absolute flex min-h-screen w-full items-center justify-center ">
        <Image
          src="/assets/images/LockBg.svg"
          alt="profile picture"
          width={1000}
          height={1000}
        />
      </div>
      {children}
      <p className="fixed bottom-4 text-sm opacity-35">
        Copyright Owner &copy; Gurvinder singh
      </p>
    </main>
  );
};

export default Layout;
