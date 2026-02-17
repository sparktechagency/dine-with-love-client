import { MyFriend } from "@/components/layout/dashboard/MyFriend";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Friends | Dine With Love",
};

const MyFriendPage = () => {
  return <MyFriend />;
};

export default MyFriendPage;
