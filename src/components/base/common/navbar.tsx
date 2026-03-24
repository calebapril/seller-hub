import { cn } from "#/lib/utils";
import { Link } from "@tanstack/react-router";

interface NavItem {
  label: string;
  to: string;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
}


export default function Navbar({
  items,
  className = "hidden items-center gap-4 text-sm @5xl:flex",
  linkClassName = "",
  activeLinkClassName = "",
}: NavBarProps) {
  return (
    <nav className={cn(className)}>
      {items.map((item) => (
        <Link key={item.to}
        to={item.to}
        //NOTE - change this from @7xl:h-16 to @7xl:h-12 to reduce the nav-link size
        className={cn("flex @7xl:h-12 items-center justify-center rounded-xl border border-dashed bg-transparent px-[30px] text-lg transition-all hover:border-transparent hover:bg-primary hover:text-background dark:text-body-70 dark:hover:text-background", linkClassName)}
        activeProps={{
          className: cn(
            "@7xl:h-12 h-12 rounded-xl text-lg px-[30px] bg-foreground! text-background border-transparent dark:bg-body-10! hover:dark:text-foreground",
            activeLinkClassName
          )
        }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
