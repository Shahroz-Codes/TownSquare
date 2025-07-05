const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-purple-500 border-solid"></div>
    </div>
  );
};

export default Loader;
