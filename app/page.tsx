import Image from "next/image";
import ButtonGetStarted from "@/components/ButtonGetStarted";

export default function Home() {
  return (
    <main className="flex gap-0 sm:gap-2 flex-col items-center p-2 sm:p-6 sm:max-w-[1440px] mx-auto animate-fadein duration-200">
      <div className="flex justify-end items-end w-full">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 10C23.6536 10 33 10 33 10M7 19.75H33M13.5 29.5H33" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <section className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <article className="flex flex-col sm:w-[594px] sm:h-72 gap-2 sm:gap-8">
        <header>
          <h4 className="uppercase px-[2px] py-[6px] font-normal text-sm leading-5 tracking-widest text-center sm:text-start">ABOUT—PERSONAL</h4>
          <h2 className="text-3xl sm:text-5xl text-center sm:text-start"><span className="font-normal">¡Hello! </span><span className="font-semibold">{"I'm Angela Smith"}</span></h2>
        </header>
        <p className="font-light text-pretty pe-2 line-clamp-2 truncate sm:line-clamp-none overflow-clip sm:max-w-full text-center sm:text-start mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<span className="hidden sm:inline"> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
        <div className="hidden sm:inline w-40 min-w-40 max-w-40">
          <ButtonGetStarted />
        </div>
        
      </article>
      <article className="max-w-[320px] sm:max-w-full">
        <Image src="/images/image-slides.webp" alt="images slides" width={680} height={800} />
      </article>
      <div className="sm:hidden w-full max-w-[370px] mx-10">
          <ButtonGetStarted />
        </div>
      </section>
      <div className="mt-2 sm:mt-0 scale-75 sm:scale-100">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.1161 23.8839C26.6043 24.372 27.3957 24.372 27.8839 23.8839C28.372 23.3957 28.372 22.6043 27.8839 22.1161L26.1161 23.8839ZM20 16L20.8839 15.1161C20.3957 14.6279 19.6043 14.6279 19.1161 15.1161L20 16ZM12.1161 22.1161C11.628 22.6043 11.628 23.3957 12.1161 23.8839C12.6043 24.372 13.3957 24.372 13.8839 23.8839L12.1161 22.1161ZM34.75 20C34.75 28.1462 28.1462 34.75 20 34.75V37.25C29.5269 37.25 37.25 29.5269 37.25 20H34.75ZM20 34.75C11.8538 34.75 5.25 28.1462 5.25 20H2.75C2.75 29.5269 10.4731 37.25 20 37.25V34.75ZM5.25 20C5.25 11.8538 11.8538 5.25 20 5.25V2.75C10.4731 2.75 2.75 10.4731 2.75 20H5.25ZM20 5.25C28.1462 5.25 34.75 11.8538 34.75 20H37.25C37.25 10.4731 29.5269 2.75 20 2.75V5.25ZM27.8839 22.1161L20.8839 15.1161L19.1161 16.8839L26.1161 23.8839L27.8839 22.1161ZM19.1161 15.1161L12.1161 22.1161L13.8839 23.8839L20.8839 16.8839L19.1161 15.1161Z" fill="black"/>
        </svg>
      </div>
    </main>
  );
}
