const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-3xl font-bold text-gray-500">{process.env.BLOG_TITLE}</div>
      </div>
    </header>
  );
};

export default Header;