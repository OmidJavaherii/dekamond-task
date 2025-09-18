// utility for classes
export function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(" ");
}