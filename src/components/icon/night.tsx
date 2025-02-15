export default function Night({ className }: { className?: string }) {
    return (
        <svg
            width="800px"
            height="800px"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            className={className}
        >
            <path
                fill="#269"
                // d="M32 0H4a4 4 0 0 0-4 4v22h36V4a4 4 0 0 0-4-4z"
                d="M32 0H4a4 4 0 0 0-4 4v22h36V4a4 4 0 0 0-4-4z"
            ></path>

            <path
                fill="#3F484C"
                // d="M10 36V7l4-4h2l4 4v29zm23-25c0-1-1-1-1-1h-7s-1 0-1 1v25h9V11z"
                d="M10 36V7l4-4h2l4 4v29zm23-25c0-1-1-1-1-1h-7s-1 0-1 1v25h9V11z"
            ></path>

            <path
                fill="#292F33"
                // d="M28 19c0-1-1-1-1-1h-8c-1 0-1 1-1 1v17h10V19zm-17 2H6v-7s0-1-1-1H0v19a4 4 0 0 0 4 4h8V22s0-1-1-1zm21 4c-1 0-1 1-1 1v10h1a4 4 0 0 0 4-4v-7h-4z"
                d="M28 17c0-1-1-1-1-1h-8c-1 0-1 1-1 1v19h10V17zm-17 2H6v-5s0-1-1-1H0v19a4 4 0 0 0 4 4h8V20s0-1-1-1zm21 6c-1 0-1 1-1 1v10h1a4 4 0 0 0 4-4v-7h-4z"
            ></path>

            <path
                // d="M8 31h2v2H8zm0-8h2v2H8zm-2 4h2v2H6zM16 9h2v2h-2zm0 4h2v2h-2zm-2 4h2v2h-2zm10 3h2v2h-2zm-2 4h2v2h-2zm-2 6h2v2h-2zm9-18h2v2h-2zm0 4h2v2h-2z"
                d="M8 29h2v2H8zm0-8h2v2H8zm-2 4h2v2H6zM16 9h2v2h-2zm0 4h2v2h-2zm-2 4h2v2h-2zm10 1h2v2h-2zm-2 4h2v2h-2zm-2 6h2v2h-2zm9-16h2v2h-2zm0 4h2v2h-2z"
                fill="#FFCC4D"
            ></path>

            <g fill="#FFF">
                <circle cx="10.5" cy="2.5" r=".5"></circle>

                <circle cx="7.5" cy="11.5" r=".5"></circle>

                <circle cx="22" cy="5" r="1"></circle>

                <circle cx="26.5" cy="5.5" r=".5"></circle>

                <circle cx="31" cy="3" r="1"></circle>

                <circle cx="31.5" cy="7.5" r=".5"></circle>

                <path d="M6.5 7A2.5 2.5 0 0 1 4 4.5c0-1.13.755-2.074 1.784-2.383A2.943 2.943 0 0 0 5 2a3 3 0 1 0 0 6c.959 0 1.803-.458 2.353-1.159A2.493 2.493 0 0 1 6.5 7z"></path>
            </g>
        </svg>
    );
}
