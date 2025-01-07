import NavItem from "./NavItem";

type Page = {
    id: number, 
    page: string, 
    href: string
}

type NavBarProps = {
    pages: Page[]
};

export default function NavSection( { pages }: NavBarProps ) {
    return (
        <section className="flex space-x-6">
            {
                pages.map( ( {id, page, href} ) => (
                    <NavItem href={href}>
                        {page}
                    </NavItem>
                ))
            }
        </section>
    );
}