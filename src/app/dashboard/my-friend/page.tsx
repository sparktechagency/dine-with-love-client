import { MyFriendContent } from "@/components/layout/dashboard/my-friend/MyFriendContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Friends | Dine With Love",
};

const MyFriendPage = () => {
  return <MyFriendContent />;
};

export default MyFriendPage;
