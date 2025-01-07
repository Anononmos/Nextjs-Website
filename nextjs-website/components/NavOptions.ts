export type PageMetadata = {
    id: number, 
    page: string, 
    href: string, 
};

export const pages: PageMetadata[] = [
    { id: 0, page: 'Ainan Kashif', href: '/' },
    { id: 1, page: 'Home', href: '/' }, 
    { id: 2, page: 'About', href: '/about' }, 
    { id: 3, page: 'Projects', href: '/projects' }, 
    { id: 4, page: 'Posts', href: '/posts' }, 
    { id: 5, page: 'Contact', href: '/contact' }
];