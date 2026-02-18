"use client";

const INTERESTS = ["Coffee", "Movies", "Road restaurants", "Nature"];

export const UserInterests = () => {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Common Interests</h4>
      <div className="flex flex-wrap gap-3">
        {INTERESTS.map((interest) => (
          <div
            key={interest}
            className="px-4 py-2 rounded-md border border-gray-200 text-xs font-bold text-gray-500 bg-gray-50/30"
          >
            {interest}
          </div>
        ))}
      </div>
    </div>
  );
};
