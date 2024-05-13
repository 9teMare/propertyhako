"use client";

import ThemeToggle from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRightIcon, BookLockIcon, BookOpenIcon, KeyIcon, ScaleIcon } from "lucide-react";
import Link from "next/link";
import { SVGProps } from "react";

export default function Page() {
    return (
        <div className="relative flex min-h-[100dvh] snap-mandatory overflow-y-scroll flex-col overflow-hidden bg-gradient-to-br dark:from-[#0D1117] dark:to-[#0E1218] from-[#ffffff] to-[#dddddd] dark:text-white stoke-black text-[#373737]">
            <section className="container min-h-screen snap-start mx-auto flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="z-10 max-w-3xl text-center">
                    <div className="flex-col w-full text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl header-1 items-center justify-center flex">
                        <span className="flex flex-col md:flex-row items-center">
                            <h1 className="leading-[3rem]">Your&nbsp;</h1>
                            <span className="sm:flex sm:w-fit">
                                <h1 className="w-full drop-shadow-lg text-center text-4xl leading-[3rem] font-bold tracking-tight sm:text-5xl sm:leading-[4rem] lg:text-6xl lg:leading-[5rem] brand animate-gradient-x">
                                    PropertyHako
                                </h1>
                                <ThemeToggle />
                            </span>
                        </span>

                        <h1 className="leading-[3rem]">Start Here</h1>
                    </div>
                    <p className="max-w-2xl mt-6 text-lg leading-8 dark:text-gray-300 text-[#1c1c1c] text-center body-1">
                        Revolutionize Property Renting experience with our blockchain-powered, AI-driven platform. One second rent, lightning fast.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            className="rounded-md drop-shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            href="/dashboard"
                        >
                            Get Started
                        </Link>
                        <Link
                            className="text-sm font-semibold leading-6 flex justify-center items-center gap-1 dark:text-gray-300 text-[#1c1c1c] dark:hover:text-gray-200 hover:text-[#363636]"
                            href="#features"
                        >
                            Learn more
                            <ArrowRightIcon className="size-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section
                id="features"
                className="snap-start dark:from-[#0D1117] dark:to-[#0E1218] from-[#ffffff] to-[#dddddd] dark:text-gray-300 stoke-black text-[#373737] flex justify-center items-center min-h-screen py-12 sm:py-16 lg:py-20"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Key Features</h2>
                        <p className="mt-4 text-lg leading-8 ">
                            Discover how our PropertyHako platform can revolutionize your property-renting experience.
                        </p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-indigo-500 p-2 text-white">
                                <KeyIcon className="h-full w-full" />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold">Blockchain Secured Transactions</h3>
                            <p className="mt-2 text-base leading-7 text-center">
                                All property transactions are secured and verified on the blockchain, ensuring transparency and trust.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-indigo-500 p-2 text-white">
                                <DatabaseIcon className="h-full w-full" />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold">Decentralized Property Listings</h3>
                            <p className="mt-2 text-base leading-7 text-center">
                                Property listings are stored on a decentralized network, ensuring privacy and accessibility.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-indigo-500 p-2 text-white">
                                <CpuIcon className="h-full w-full" />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold">AI-Powered Property Matching</h3>
                            <p className="mt-2 text-base leading-7 text-center">
                                Our AI assistant helps match you with the perfect property based on your preferences and needs.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-indigo-500 p-2 text-white">
                                <ScaleIcon className="h-full w-full" />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold">Transparent Pricing</h3>
                            <p className="mt-2 text-base leading-7 text-center">
                                Blockchain technology ensures transparent and fair pricing, eliminating hidden fees and charges.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-indigo-500 p-2 text-white">
                                <BookLockIcon className="h-full w-full" />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold">Secure Lease Agreements</h3>
                            <p className="mt-2 text-base leading-7 text-center">
                                Lease agreements are securely stored on the blockchain, providing a tamper-proof record of the contract.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-indigo-500 p-2 text-white">
                                <BookOpenIcon className="h-full w-full" />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold">Smart Contracts</h3>
                            <p className="mt-2 text-base leading-7 text-center">
                                Utilize smart contracts for automated, self-executing agreements with clear rules and penalties.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dark:from-[#0D1117] dark:to-[#0E1218] from-[#ffffff] to-[#dddddd] dark:text-gray-300 stoke-black text-[#373737] min-h-screen flex justify-center items-center py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Powered by the best</h2>
                        <p className="mt-4 text-lg leading-8">Discover how we built the PropertyHako.</p>
                    </div>

                    <div className="mt-32 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center">
                            <svg
                                className="scale-[200%] h-20"
                                id="Layer_2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1000 220.39"
                                width="80"
                                fill="currentColor"
                            >
                                <g>
                                    <path d="m238.29,0h220.39v110.19c0,60.82-49.38,110.19-110.19,110.19h0c-60.82,0-110.19-49.38-110.19-110.19V0h0Z"></path>
                                    <path d="m487.36,214.99h220.39v-104.8c0-60.86-49.34-110.19-110.19-110.19h-110.19s0,214.99,0,214.99Z"></path>
                                    <rect x="725.65" y="0" width="220.39" height="220.39" rx="110.19" ry="110.19"></rect>
                                    <path d="m101.31,0c0,55.96-45.36,101.32-101.31,101.32v119.07C121.72,220.39,220.39,121.72,220.39,0h0s-119.07,0-119.07,0Z"></path>
                                    <circle className="cls-1" cx="931.86" cy="68.14" r="68.14" fill="#7888ff"></circle>
                                </g>
                            </svg>
                            <h3 className="mt-6 text-lg font-semibold">Juno</h3>
                            <p className="mt-2 text-base leading-7 text-center">
                                An open-source Blockchain-as-a-Service platform, empowers the Backbone of PropertyHako.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <svg className="h-20" width="219" height="40" viewBox="0 0 219 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_8683_62477)">
                                    <path
                                        d="M69.5606 33.234C63.7777 33.234 57.6722 29.4534 54.6754 26.711C51.3977 23.7104 42.3941 13.9438 42.3543 13.9002C36.4499 7.31258 28.511 0 20.5911 0C11.0523 0 2.73196 6.60657 0.568359 15.3578C0.733476 14.7808 3.76631 6.76409 15.1499 6.76409C20.9328 6.76409 27.0383 10.5447 30.035 13.2872C33.3127 16.2877 42.3163 26.0543 42.3562 26.0979C48.2605 32.6855 56.1994 39.9981 64.1212 39.9981C73.66 39.9981 81.9785 33.3915 84.144 24.6404C83.9789 25.2173 80.946 33.234 69.5625 33.234H69.5606Z"
                                        fill="#29AAE1"
                                    />
                                    <path
                                        d="M42.3534 26.0998C42.3326 26.0752 39.74 23.2644 36.8325 20.1974C35.261 22.063 32.9968 24.6043 30.3948 26.8837C25.5438 31.1349 22.3914 32.027 20.5884 32.027C13.7864 32.027 8.23691 26.6312 8.23691 20C8.23691 13.3688 13.7788 8.01481 20.5884 7.97306C20.8351 7.97306 21.135 7.99773 21.4956 8.06226C19.4497 7.27653 17.2766 6.7641 15.1471 6.7641C3.76737 6.7641 0.73454 14.777 0.567525 15.3578C0.199334 16.8495 0.00195312 18.402 0.00195312 20C0.00195312 31.0287 9.09855 40 20.4423 40C25.1718 40 30.4688 37.5764 35.9234 32.7937C38.5026 30.5333 40.7383 28.1154 42.418 26.172C42.3971 26.1473 42.3743 26.1245 42.3534 26.0998Z"
                                        fill="url(#paint0_linear_8683_62477)"
                                    />
                                    <path
                                        d="M42.3536 13.9002C42.3745 13.9248 44.967 16.7356 47.8746 19.8026C49.446 17.937 51.7102 15.3957 54.3122 13.1163C59.1632 8.86506 62.3156 7.97305 64.1186 7.97305C70.9207 7.97305 76.4701 13.3688 76.4701 20C76.4701 26.5933 70.9283 31.9852 64.1186 32.027C63.8719 32.027 63.572 32.0023 63.2114 31.9377C65.2574 32.7235 67.4305 33.2359 69.5599 33.2359C80.9416 33.2359 83.9744 25.223 84.1414 24.6422C84.5096 23.1505 84.707 21.598 84.707 20C84.707 8.97134 75.4623 0 64.1186 0C59.3891 0 54.2401 2.42361 48.7837 7.2063C46.2044 9.46669 43.9687 11.8846 42.2891 13.8281C42.3099 13.8527 42.3327 13.8755 42.3536 13.9002Z"
                                        fill="url(#paint1_linear_8683_62477)"
                                    />
                                    <path d="M93.9102 17.5973V0.516235H98.5125V17.5973H93.9102Z" className="dark:fill-white fill-black" />
                                    <path
                                        d="M111.256 17.5973L105.329 7.45493V17.5973H100.873V0.516235H106.077L111.401 9.79124V0.516235H115.882V17.5973H111.256Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        d="M126.29 4.7808V17.5973H121.761V4.7808H116.846V0.516235H131.228V4.7808H126.29Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        d="M132.193 17.5973V0.516235H143.131V4.4183H136.674V7.11711H142.552V10.8749H136.674V13.6212H143.178V17.5954H132.193V17.5973Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        d="M144.937 17.5973V0.516235H152.14C155.609 0.516235 157.873 2.82977 157.873 6.00874C157.873 8.32227 156.596 10.0323 154.717 10.7781L157.946 17.5954H153.055L150.356 11.4045H149.416V17.5954H144.936L144.937 17.5973ZM151.297 7.937C152.647 7.937 153.345 7.16645 153.345 6.08276C153.345 4.99906 152.647 4.25129 151.297 4.25129H149.418V7.937H151.297Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        d="M169.559 17.5973L163.632 7.45493V17.5973H159.176V0.516235H164.38L169.703 9.79124V0.516235H174.184V17.5973H169.559Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        d="M176.156 17.5973V0.516235H187.094V4.4183H180.637V7.11711H186.515V10.8749H180.637V13.6212H187.141V17.5954H176.156V17.5973Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        d="M197.336 4.7808V17.5973H192.808V4.7808H187.893V0.516235H202.275V4.7808H197.336Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        d="M96.8855 30.6984C96.8855 33.5415 98.9087 35.1794 100.981 35.1794C103.342 35.1794 104.354 33.7104 104.716 32.5052L108.956 33.7332C108.282 36.2631 106.016 39.5882 100.958 39.5882C96.2118 39.5882 92.2129 36.1435 92.2129 30.7231C92.2129 25.3027 96.2839 21.7859 100.911 21.7859C105.826 21.7859 108.066 24.7732 108.764 27.3278L104.597 28.7493C104.283 27.6162 103.369 26.1226 100.958 26.1226C99.0301 26.1226 96.8874 27.5916 96.8874 30.7003L96.8855 30.6984Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        d="M117.725 21.7859C122.423 21.7859 126.495 25.1585 126.495 30.7003C126.495 36.2422 122.424 39.6147 117.725 39.6147C113.026 39.6147 108.955 36.2422 108.955 30.7003C108.955 25.1585 113.026 21.7859 117.725 21.7859ZM117.725 35.2534C119.726 35.2534 121.846 33.8318 121.846 30.6757C121.846 27.5195 119.726 26.1473 117.725 26.1473C115.725 26.1473 113.605 27.5688 113.605 30.6757C113.605 33.7825 115.725 35.2534 117.725 35.2534Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        d="M143.02 39.2276V28.6506L139.285 39.2276H135.718L132.008 28.7721V39.2276H127.719V22.1465H133.718L137.548 32.5546L141.209 22.1465H147.377V39.2276H143.016H143.02Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        d="M153.834 33.3972V39.2276H149.354V22.1465H156.171C159.737 22.1465 162.17 24.4828 162.17 27.7833C162.17 31.0837 159.737 33.3972 156.171 33.3972H153.834ZM155.594 29.6622C156.774 29.6622 157.642 28.9637 157.642 27.8079C157.642 26.6521 156.774 25.929 155.594 25.929H153.859V29.6641H155.594V29.6622Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        d="M163.062 32.9645V22.1465H167.568V32.8184C167.568 34.5056 168.435 35.3957 169.929 35.3957C171.423 35.3957 172.265 34.5037 172.265 32.8184V22.1465H176.771V32.9645C176.771 37.2518 173.903 39.6147 169.929 39.6147C165.955 39.6147 163.062 37.2537 163.062 32.9645Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        d="M187.01 26.4111V39.2276H182.482V26.4111H177.566V22.1465H191.949V26.4111H187.01Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        d="M192.912 39.2276V22.1465H203.85V26.0486H197.393V28.7474H203.271V32.5052H197.393V35.2515H203.897V39.2257H192.912V39.2276Z"
                                        className="dark:fill-white fill-black"
                                    />
                                    <path
                                        d="M205.658 39.2276V22.1465H212.861C216.33 22.1465 218.594 24.46 218.594 27.639C218.594 29.9526 217.317 31.6626 215.438 32.4084L218.666 39.2257H213.775L211.077 33.0347H210.137V39.2257H205.656L205.658 39.2276ZM212.018 29.5673C213.367 29.5673 214.066 28.7967 214.066 27.713C214.066 26.6293 213.367 25.8816 212.018 25.8816H210.139V29.5673H212.018Z"
                                        className="dark:fill-white fill-black"
                                    />
                                </g>
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_8683_62477"
                                        x1="31.2622"
                                        y1="37.3828"
                                        x2="3.40487"
                                        y2="8.53484"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0.22" stopColor="#EC1E79" />
                                        <stop offset="0.89" stopColor="#522784" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear_8683_62477"
                                        x1="53.4278"
                                        y1="2.63428"
                                        x2="81.2851"
                                        y2="31.4823"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0.21" stopColor="#F05A24" />
                                        <stop offset="0.68" stopColor="#FAAF3B" />
                                    </linearGradient>
                                    <clipPath id="clip0_8683_62477">
                                        <rect width="218.666" height="40" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <h3 className="mt-6 text-lg font-semibold">ICP</h3>
                            <p className="mt-2 text-base leading-7  text-center">
                                The Internet Computer reinvents compute on blockchain, providing a secure and scalable platform for PropertyHako.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <svg className="scale-[60%] h-20 dark:block hidden" viewBox="0 0 1180 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_10145_290550)">
                                    <path
                                        d="M367.44 153.84C367.44 206.16 401.04 242.64 447.6 242.64C494.16 242.64 527.76 206.16 527.76 153.84C527.76 101.52 494.16 65.04 447.6 65.04C401.04 65.04 367.44 101.52 367.44 153.84ZM497.04 153.84C497.04 191.28 476.64 215.52 447.6 215.52C418.56 215.52 398.16 191.28 398.16 153.84C398.16 116.4 418.56 92.16 447.6 92.16C476.64 92.16 497.04 116.4 497.04 153.84Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M614.27 242.64C649.55 242.64 669.71 212.88 669.71 177.12C669.71 141.36 649.55 111.6 614.27 111.6C597.95 111.6 585.95 118.08 578.03 127.44V114H549.23V283.2H578.03V226.8C585.95 236.16 597.95 242.64 614.27 242.64ZM577.31 173.52C577.31 149.76 590.75 136.8 608.51 136.8C629.39 136.8 640.67 153.12 640.67 177.12C640.67 201.12 629.39 217.44 608.51 217.44C590.75 217.44 577.31 204.24 577.31 180.96V173.52Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M747.65 242.64C772.85 242.64 792.77 229.44 801.65 207.36L776.93 198C773.09 210.96 761.81 218.16 747.65 218.16C729.17 218.16 716.21 204.96 714.05 183.36H802.37V173.76C802.37 139.2 782.93 111.6 746.45 111.6C709.97 111.6 686.45 140.16 686.45 177.12C686.45 216 711.65 242.64 747.65 242.64ZM746.21 135.84C764.45 135.84 773.09 147.84 773.33 161.76H715.49C719.81 144.72 731.33 135.84 746.21 135.84Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M823.98 240H852.78V166.08C852.78 148.08 865.98 138.48 878.94 138.48C894.78 138.48 901.02 149.76 901.02 165.36V240H929.82V156.96C929.82 129.84 913.98 111.6 887.58 111.6C871.26 111.6 859.98 119.04 852.78 127.44V114H823.98V240Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M1014.17 67.6801L948.89 240H979.37L994.01 200.64H1068.41L1083.29 240H1114.25L1048.97 67.6801H1014.17ZM1030.97 101.76L1058.33 173.76H1004.09L1030.97 101.76Z"
                                        fill="white"
                                    />
                                    <path d="M1163.69 68.1801H1132.97V240.5H1163.69V68.1801Z" fill="white" />
                                    <path
                                        d="M297.06 130.97C304.32 109.18 301.82 85.31 290.21 65.49C272.75 35.09 237.65 19.45 203.37 26.81C188.12 9.63002 166.21 -0.139981 143.24 1.93887e-05C108.2 -0.0799806 77.11 22.48 66.33 55.82C43.82 60.43 24.39 74.52 13.02 94.49C-4.57001 124.81 -0.560007 163.03 22.94 189.03C15.68 210.82 18.18 234.69 29.79 254.51C47.25 284.91 82.35 300.55 116.63 293.19C131.87 310.37 153.79 320.14 176.76 319.99C211.82 320.08 242.92 297.5 253.7 264.13C276.21 259.52 295.64 245.43 307.01 225.46C324.58 195.14 320.56 156.95 297.07 130.95L297.06 130.97ZM176.78 299.08C162.75 299.1 149.16 294.19 138.39 285.2C138.88 284.94 139.73 284.47 140.28 284.13L204 247.33C207.26 245.48 209.26 242.01 209.24 238.26V148.43L236.17 163.98C236.46 164.12 236.65 164.4 236.69 164.72V239.11C236.65 272.19 209.86 299.01 176.78 299.08ZM47.94 244.05C40.91 231.91 38.38 217.68 40.79 203.87C41.26 204.15 42.09 204.66 42.68 205L106.4 241.8C109.63 243.69 113.63 243.69 116.87 241.8L194.66 196.88V227.98C194.68 228.3 194.53 228.61 194.28 228.81L129.87 266C101.18 282.52 64.54 272.7 47.95 244.05H47.94ZM31.17 104.96C38.17 92.8 49.22 83.5 62.38 78.67C62.38 79.22 62.35 80.19 62.35 80.87V154.48C62.33 158.22 64.33 161.69 67.58 163.54L145.37 208.45L118.44 224C118.17 224.18 117.83 224.21 117.53 224.08L53.11 186.86C24.48 170.28 14.66 133.65 31.16 104.97L31.17 104.96ZM252.43 156.45L174.64 111.53L201.57 95.99C201.84 95.81 202.18 95.78 202.48 95.91L266.9 133.1C295.58 149.67 305.41 186.36 288.84 215.04C281.83 227.18 270.79 236.48 257.64 241.32V165.51C257.67 161.77 255.68 158.31 252.44 156.45H252.43ZM279.23 116.11C278.76 115.82 277.93 115.32 277.34 114.98L213.62 78.18C210.39 76.29 206.39 76.29 203.15 78.18L125.36 123.1V92C125.34 91.68 125.49 91.37 125.74 91.17L190.15 54.01C218.84 37.46 255.52 47.31 272.06 76.01C279.05 88.13 281.58 102.32 279.21 116.11H279.23ZM110.72 171.54L83.78 155.99C83.49 155.85 83.3 155.57 83.26 155.25V80.86C83.28 47.74 110.15 20.9 143.27 20.92C157.28 20.92 170.84 25.84 181.61 34.8C181.12 35.06 180.28 35.53 179.72 35.87L116 72.67C112.74 74.52 110.74 77.98 110.76 81.73L110.72 171.52V171.54ZM125.35 140L160 119.99L194.65 139.99V180L160 200L125.35 180V140Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_10145_290550">
                                        <rect width="1180" height="320" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <svg className="scale-[60%] h-20 dark:hidden block" viewBox="0 0 1180 320" xmlns="http://www.w3.org/2000/svg">
                                <path d="m367.44 153.84c0 52.32 33.6 88.8 80.16 88.8s80.16-36.48 80.16-88.8-33.6-88.8-80.16-88.8-80.16 36.48-80.16 88.8zm129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68z" />
                                <path d="m614.27 242.64c35.28 0 55.44-29.76 55.44-65.52s-20.16-65.52-55.44-65.52c-16.32 0-28.32 6.48-36.24 15.84v-13.44h-28.8v169.2h28.8v-56.4c7.92 9.36 19.92 15.84 36.24 15.84zm-36.96-69.12c0-23.76 13.44-36.72 31.2-36.72 20.88 0 32.16 16.32 32.16 40.32s-11.28 40.32-32.16 40.32c-17.76 0-31.2-13.2-31.2-36.48z" />
                                <path d="m747.65 242.64c25.2 0 45.12-13.2 54-35.28l-24.72-9.36c-3.84 12.96-15.12 20.16-29.28 20.16-18.48 0-31.44-13.2-33.6-34.8h88.32v-9.6c0-34.56-19.44-62.16-55.92-62.16s-60 28.56-60 65.52c0 38.88 25.2 65.52 61.2 65.52zm-1.44-106.8c18.24 0 26.88 12 27.12 25.92h-57.84c4.32-17.04 15.84-25.92 30.72-25.92z" />
                                <path d="m823.98 240h28.8v-73.92c0-18 13.2-27.6 26.16-27.6 15.84 0 22.08 11.28 22.08 26.88v74.64h28.8v-83.04c0-27.12-15.84-45.36-42.24-45.36-16.32 0-27.6 7.44-34.8 15.84v-13.44h-28.8z" />
                                <path d="m1014.17 67.68-65.28 172.32h30.48l14.64-39.36h74.4l14.88 39.36h30.96l-65.28-172.32zm16.8 34.08 27.36 72h-54.24z" />
                                <path d="m1163.69 68.18h-30.72v172.32h30.72z" />
                                <path d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z" />
                            </svg>

                            <h3 className="mt-6 text-lg font-semibold">Open AI</h3>
                            <p className="mt-2 text-base leading-7 text-center">
                                The goto AI platform, powers Chain of Thought&apos;s Academic Integrity Detection and Note Summarization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dark:from-[#0D1117] dark:to-[#0E1218] from-[#ffffff] to-[#dddddd] dark:text-gray-300 stoke-black text-[#373737] py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What our users say</h2>
                        <p className="mt-4 text-lg leading-8">Hear from our satisfied users about their experience with the PropertyHako.</p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col rounded-lg dark:bg-[#0E1218] bg-white p-6 shadow-lg">
                            <blockquote className="flex-1">
                                <p className="text-lg font-semibold leading-8 dark:text-white">
                                    &quot;The PropertyChain platform has revolutionized the way I rent properties. The blockchain security and
                                    AI-powered matching have made my property search so much more efficient.&quot;
                                </p>
                            </blockquote>
                            <div className="mt-6 flex items-center gap-x-4">
                                <Avatar>
                                    <AvatarFallback className="dark:bg-slate-500">EM</AvatarFallback>
                                </Avatar>
                                <div className="text-sm leading-6">
                                    <p className="font-semibold dark:text-white">em-li.icp</p>
                                    <p className="dark:text-gray-300">Tenant, Singapore</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg dark:bg-[#0E1218] bg-white p-6 shadow-lg">
                            <blockquote className="flex-1">
                                <p className="text-lg font-semibold leading-8 dark:text-white">
                                    &quot;I was skeptical at first, but PropertyChain has completely transformed the way I manage my property
                                    portfolio. The decentralized listings and AI features are simply amazing.&quot;
                                </p>
                            </blockquote>
                            <div className="mt-6 flex items-center gap-x-4">
                                <Avatar>
                                    <AvatarFallback className="dark:bg-slate-500">MI</AvatarFallback>
                                </Avatar>
                                <div className="text-sm leading-6">
                                    <p className="font-semibold dark:text-white">michael.icp</p>
                                    <p className="dark:text-gray-300">Landlord, Singapore</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg dark:bg-[#0E1218] bg-white p-6 shadow-lg">
                            <blockquote className="flex-1">
                                <p className="text-lg font-semibold leading-8 dark:text-white">
                                    &quot;I love how PropertyChain makes it easy to find and secure properties. The blockchain-based contracts give me
                                    peace of mind.&quot;
                                </p>
                            </blockquote>
                            <div className="mt-6 flex items-center gap-x-4">
                                <Avatar>
                                    <AvatarFallback className="dark:bg-slate-500">SL</AvatarFallback>
                                </Avatar>
                                <div className="text-sm leading-6">
                                    <p className="font-semibold dark:text-white">s-lee.icp</p>
                                    <p className="dark:text-gray-300">Tenant, United States</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="dark:from-[#0D1117] dark:to-[#0E1218] from-[#ffffff] to-[#dddddd] dark:text-gray-300 stoke-black text-[#373737] py-8 sm:py-10 lg:py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link className="text-sm font-medium dark:text-gray-400 dark:hover:text-gray-300" href="#">
                                            Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-sm font-medium dark:text-gray-400 dark:hover:text-gray-300" href="#">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-sm font-medium dark:text-gray-400 dark:hover:text-gray-300" href="#">
                                            Documentation
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link className="text-sm font-medium dark:text-gray-400 dark:hover:text-gray-300" href="#">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-sm font-medium dark:text-gray-400 dark:hover:text-gray-300" href="#">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-sm font-medium dark:text-gray-400 dark:hover:text-gray-300" href="#">
                                            Careers
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link className="text-sm font-medium dark:text-gray-400 dark:hover:text-gray-300" href="#">
                                            Help Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-sm font-medium dark:text-gray-400 dark:hover:text-gray-300" href="#">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-sm font-medium dark:text-gray-400 dark:hover:text-gray-300" href="#">
                                            Security
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wider">Follow Us</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link className="text-sm font-medium dark:text-gray-400 dark:hover:text-gray-300" href="#">
                                            Twitter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-sm font-medium dark:text-gray-400 dark:hover:text-gray-300" href="#">
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-sm font-medium dark:text-gray-400 dark:hover:text-gray-300" href="#">
                                            LinkedIn
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-10 border-t border-gray-700 pt-8 sm:mt-16 sm:pt-10">
                            <p className="text-sm leading-6 text-gray-400">© 2024 PropertyHako. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function CpuIcon(props: SVGProps<any>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="16" height="16" x="4" y="4" rx="2" />
            <rect width="6" height="6" x="9" y="9" rx="1" />
            <path d="M15 2v2" />
            <path d="M15 20v2" />
            <path d="M2 15h2" />
            <path d="M2 9h2" />
            <path d="M20 15h2" />
            <path d="M20 9h2" />
            <path d="M9 2v2" />
            <path d="M9 20v2" />
        </svg>
    );
}

function DatabaseIcon(props: SVGProps<any>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    );
}
