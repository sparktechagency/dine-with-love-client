import { InboxContainer } from "@/components/layout/dashboard/inbox/InboxContainer";

const InboxPage = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-3xl font-black text-gray-900">Inbox</h2>
        <p className="text-gray-500 font-medium tracking-tight">
          Manage your conversations and chats
        </p>
      </div>
      <InboxContainer />
    </div>
  );
};

export default InboxPage;
