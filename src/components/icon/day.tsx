export default function Day({ className }: { className?: string }) {
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
            <path fill="#88C9F9" d="M32 0H4a4 4 0 0 0-4 4v22h36V4a4 4 0 0 0-4-4z"></path>
            <path fill="#66757F" d="M10 36V7l4-4h2l4 4v29zm23-25c0-1-1-1-1-1h-7s-1 0-1 1v25h9V11z"></path>
            <path
                fill="#292F33"
                d="M28 17c0-1-1-1-1-1h-8c-1 0-1 1-1 1v19h10V17zm-17 2H6v-5s0-1-1-1H0v19a4 4 0 0 0 4 4h8V20s0-1-1-1zm21 6c-1 0-1 1-1 1v10h1a4 4 0 0 0 4-4v-7h-4z"
            ></path>
            <path
                d="M8 29h2v2H8zm0-8h2v2H8zm-2 4h2v2H6zM16 9h2v2h-2zm0 4h2v2h-2zm-2 4h2v2h-2zm10 1h2v2h-2zm-2 4h2v2h-2zm-2 6h2v2h-2zm9-16h2v2h-2zm0 4h2v2h-2z"
                fill="#fff"
            ></path>
        </svg>
    );
}
