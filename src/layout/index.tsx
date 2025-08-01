export default function Layout({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <section className={`relative mx-auto flex pt-[var(--total-header-height)] ${className}`}>{children}</section>
    );
}
