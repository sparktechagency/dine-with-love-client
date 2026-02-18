export const UserManagementContent = () => {
  return (
    <div className="bg-white rounded-md border border-gray-100 p-10 min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4 shadow-sm animate-in fade-in duration-500">
      <div className="size-20 rounded-full bg-pink-50 flex items-center justify-center">
        <svg
          className="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
      <h2 className="text-3xl font-black text-gray-900">User Management</h2>
      <p className="text-gray-400 font-bold max-w-md uppercase tracking-widest text-xs">
        This feature is coming soon to the admin panel
      </p>
    </div>
  );
};
