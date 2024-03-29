import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300",
  {
    variants: {
      variant: {
        primary:
          "bg-main_color text-white shadow hover:bg-main_color/90",
        default:
          "bg-bg-dark-normal text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
        destructive:
          "bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",
        outline:
          "border border-zinc-200 bg-transparent shadow-sm hover:text-zinc-900 hover:brightness-90 dark:hover:brightness-110 dark:border-zinc-500 dark:hover:text-zinc-50",
        secondary:
          "bg-bg-light-soft text-zinc-900 shadow-sm hover:bg-bg-light-soft/80 dark:bg-bg-dark-soft dark:text-zinc-50 dark:hover:bg-bg-dark-soft/80",
        ghost: "hover:bg-bg-light-soft hover:text-zinc-900 dark:hover:bg-bg-dark-soft dark:hover:text-zinc-50",
        link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      round: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      fullWidth: {
        true: "w-full",
        false: "w-max",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      round: "md",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, round, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, round, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
