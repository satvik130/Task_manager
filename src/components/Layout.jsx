const Layout = ({ children }) => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-6">
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </main>
  );
};

export default Layout;