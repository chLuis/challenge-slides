export default function ButtonGetStarted() {
    return (
        <button className="flex justify-center w-full h-14 py-4 rounded-lg font-semibold items-center gap-1 text-sm flex-nowrap bg-black text-white hover:bg-yellow-300 hover:text-black duration-300">
            <span>Get started</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
            </svg>
        </button>
    );
}
