import Image from "next/image";
import React from "react";

const SyncWithGithub = () => {
  return (
    <section className="relative z-20 overflow-hidden px-36 bg-black pb-[180px] pt-[131px] px-safe lg:pb-[131px] lg:pt-24 md:py-24 sm:py-16">
      <div className="container-narrow px-32">
        <h2 className="max-w-2xl text-80 font-medium leading-[0.9] tracking-snugger text-white text-7xl tracking-tight">
          Sync with GitHub. Both&nbsp;ways.
        </h2>
        <p className="mt-4 max-w-[580px] leading-snug tracking-tight text-gray-400">
          {`Manage your tasks efficiently with Huly's bidirectional GitHub
          synchronization. Use&nbsp;Huly as an advanced front-end for GitHub
          Issues and GitHub Projects.`}
        </p>

        <div className="relative my-20 p-[10px] bg-black rounded-lg animate-moving-glow before:absolute before:inset-0 before:rounded-lg before:blur-md before:content-[''] before:z-[-1] before:bg-gradient-to-r before:from-orange-500 before:via-transparent before:to-blue-500 before:animate-glow">
          <div className="rounded-md overflow-hidden border-4 border-gray-800 shadow-lg">
            <Image src="/huly5.JPG" alt="" className="rounded-md overflow-hidden" width={960} height={554} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyncWithGithub;
