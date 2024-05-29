import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-button-gradient text-white rounded-full hover:scale-105 transition-transform duration-200 ease",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "text-[16px] text-white leading-[20px] font-bold rounded-full button-gradient hover:scale-105 transition-transform duration-200 ease",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        round:
          "text-white bg-[#1d1d1d]  hover:scale-105 transition-transform duration-200 ease",
        play: "text-white bg-play-button-gradient",
        gray: "bg-[#f2f2f2] rounded-full hover:scale-105 transition-transform duration-200 ease text-[15px] font-bold",
        roundGray:
          "bg-[#f2f2f2] rounded-full hover:scale-105 transition-transform duration-200 ease",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "py-[8px] px-[16px] rounded-full",
        lg: "h-[52] rounded-full py-[14px] px-[28px]",
        icon: "h-10 w-10",
        roundSm: "w-[54px] h-[54px] rounded-full",
        full: "w-full h-[50px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
