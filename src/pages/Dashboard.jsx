import { useGlobalContext } from "../Context";
import ChannelModal from "../components/ChannelModal";
import MessageModal from "../components/MessageModal";
import SideNav from "../components/SideNav";
import AddMemberModal from "../components/AddMemberModal";
import Home from "../components/Home";
import MessageLayout from "../components/MessageLayout";

const Dashboard = () => {
  const { createChannelModal, createMessageModal, addChannelMember, messagePage } =
    useGlobalContext();

  return (
    <>
      {addChannelMember && <AddMemberModal />}
      {createChannelModal && <ChannelModal />}
      {createMessageModal && <MessageModal />}
      <SideNav />
      {messagePage ? <MessageLayout /> : <Home />}
    </>
  );
};

export default Dashboard;
