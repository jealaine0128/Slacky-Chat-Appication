import { useGlobalContext } from "../Context";

const SideNav = () => {
  const {
    setCreateChannelModal,
    setCreateMessageModal,
    userChannelList,
    userMessagesList,
    logout,
    getData,
    user,
  } = useGlobalContext();
  return (
    <nav className="flex flex-col w-48 items-center border h-screen fixed left-0 top-o bg-white">
      <h1 className="font-black text-4xl w-full my-5 text-center border-b pb-5">
        Slacky
      </h1>
      <ul className="flex flex-col h-full pb-8 w-full items-center pl-7 pr-5 gap-5">
        <li className="flex w-full justify-between text-gray-700 text-xl items-center">
          Channels
          <span>
            <i
              className="fa-solid fa-plus cursor-pointer hover:opacity-70"
              onClick={() => setCreateChannelModal(true)}
            ></i>
          </span> 
        </li>
        <div className="w-full max-h-48 overflow-y-auto">
          {userChannelList && userChannelList.length > 0 ? (
            userChannelList.map((channel) => {
              return (
                <div
                  className="text-gray-500 my-2 cursor-pointer"
                  key={channel.id}
                  onClick={() => {
                    getData("Channel", channel.id, channel.name);
                  }}
                >
                  {channel.name}
                </div>
              );
            })
          ) : (
            <div className="text-gray-500 my-2">No Channels.</div>
          )}
        </div>
        <li className="flex w-full justify-between text-gray-700 text-xl items-center">
          Messages
          <span>
            <i
              className="fa-solid fa-plus cursor-pointer hover:opacity-70"
              onClick={() => setCreateMessageModal(true)}
            ></i>
          </span>
        </li>
        <div className="w-full max-h-48 overflow-y-auto">
          {userMessagesList && userMessagesList.length > 0 ? (
            userMessagesList.map((messages) => {
              return (
                <div
                  className="text-gray-500 my-2 cursor-pointer"
                  key={messages.id}
                  onClick={() => {
                    getData("User", messages.id, messages.name);
                  }}
                >
                  {messages.name}
                </div>
              );
            })
          ) : (
            <div className="text-gray-500 my-2">No messages</div>
          )}
        </div>
        <li className="mt-auto text-center">
          <div>YOUR ID:</div>
          {user.id}
          </li>
        <li
          className="mt-auto cursor-pointer hover:opacity-70"
          onClick={logout}
        >
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
