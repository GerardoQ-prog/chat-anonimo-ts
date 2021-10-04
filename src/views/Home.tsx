import React from "react";
import ChatForm from "../components/containers/ChatForm";
import ChatList from "../components/containers/ChatList";
import ContainerChat from "../components/containers/Container";

const Home: React.FC = () => {
  return (
    <ContainerChat
      renderList={() => <ChatList />}
      renderChat={() => <ChatForm />}
    />
  );
};

export default Home;
