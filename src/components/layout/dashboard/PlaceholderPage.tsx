"use client";

const PlaceholderPage = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
      <h2 className="text-3xl font-black text-gray-900">{title}</h2>
      <p className="text-gray-500 font-medium">This page is coming soon...</p>
    </div>
  );
};

export default PlaceholderPage;
