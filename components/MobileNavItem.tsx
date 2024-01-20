import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface MobileNavItemProps {
    icon: IconType
    label?: string
    active?: boolean
    href: string 
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({
    icon: Icon,
    label,
    active,
    href
}) => {
    return ( 
        <Link
        href={href}
        className={twMerge(`
        flex flex-col h-auto items-center w-full gap-y-1 gap-x-4 text-md font-medium cursor-pointer
        hover-text-white transition text-neutral-600 py-1`,
        active && "text-neutral-200")}>
            <Icon size={27} className={twMerge(`text-neutral-600`,
            active && "text-neutral-200" )} />
            <p className="truncate text-xs text-center w-full">
                {label}</p>
        </Link>
     );
}
 
export default MobileNavItem;