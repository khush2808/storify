import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5 ">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12 ">
          <div className="flex items-center gap-4 ">
          <Image
            src="/logo.png"
            alt="logo"
            width={64}
            height={64}
            className="h-auto"
          />
          <h1 className="text-white text-4xl font-semibold">Storify</h1>
          </div>
          
          <div className="space-y-5 text-white">
            <h1 className="h1">Manage your files the best way</h1>
            <p className="body-1">
              This is a place where you can store all your documents
            </p>
            <Image
              src="/assets/images/files.png"
              alt="files"
              width={342}
              height={342}
              className="transition-all hover:rotate-2 hover:scale-105 "
            />
          </div>
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={24}
            height={24}
            className="h-auto w-[70px] lg:w-[70px] bg-red rounded-[10%] "
          />
          <h1 className="text-3xl font-semibold text-red">Storify</h1>

          </div>
          
        </div>
        {children}
      </section>
      
    </div>
  );
};

export default Layout;
