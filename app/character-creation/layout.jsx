export default function Layout({
    children,
  }) {
    return (
      <section>
        {children}
        <div className="w-screen lg:hidden h-16 bottom-0 bg-black ring-1 fixed ring-white/15"></div>
      </section>
    );
  }