import { Button } from "@/components/button";
import { signIn } from "@junobuild/core-peer";

export const Login = () => {
    return (
        <Button
            className={
                "flex items-center gap-2 border-black dark:border-lavender-blue-500 border-[3px] transition-all rounded-sm py-1 px-8 my-2 font-semibold dark:text-white text-black bg-lavender-blue-500 dark:bg-black shadow-[5px_5px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_#6366f1] hover:bg-lavender-blue-600 dark:hover:bg-lavender-blue-300 hover:text-black dark:hover:text-gray-200 active:bg-lavender-blue-400 dark:active:bg-lavender-blue-500 active:shadow-none active:translate-x-[5px] active:translate-y-[5px]"
            }
            onClick={() => signIn()}
        >
            Sign in
        </Button>
    );
};
