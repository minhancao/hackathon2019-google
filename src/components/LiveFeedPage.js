import React from "react";
import { Chat, Channel, ChannelHeader, Window } from "stream-chat-react";
import {
  MessageList,
  MessageInput,
  MessageLivestream
} from "stream-chat-react";
import { MessageInputSmall, Thread } from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "stream-chat-react/dist/css/index.css";

const chatClient = new StreamChat("qk4nn7rpcn75");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmFuY3ktbWF0aC03In0.h77C0vYnaWNYVG_1BhYN71UPZxm_O7SGKWU1Pi5ci8Q";

chatClient.setUser(
  {
    id: "fancy-math-7",
    name: "Fancy math",
    image: "https://getstream.io/random_svg/?id=fancy-math-7&name=Fancy+math"
  },
  userToken
);

const channel = chatClient.channel("livestream", "spacex", {
  image: "https://goo.gl/Zefkbx",
  name: "SpaceX launch discussion"
});

const LiveFeedPage = () => (
  <Chat client={chatClient} theme={"livestream dark"}>
    <Channel channel={channel} Message={MessageLivestream}>
      <Window hideOnThread>
        <ChannelHeader live />
        <MessageList />
        <MessageInput Input={MessageInputSmall} focus />
      </Window>
      <Thread fullWidth />
    </Channel>
  </Chat>
);
export default LiveFeedPage;
