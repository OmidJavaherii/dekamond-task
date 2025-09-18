import * as React from "react";
import { cn } from "@/lib/utils";


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:pointer-events-none",
                className
            )}
            {...props}
        />
    );
});
Button.displayName = "Button";


export { Button };