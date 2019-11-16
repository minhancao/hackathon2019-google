import React, { Component } from "react";
import { Chat, Channel, ChannelHeader, Window } from "stream-chat-react";
import {
  MessageList,
  MessageInput,
  MessageLivestream
} from "stream-chat-react";
import { MessageInputSmall, Thread } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import axios from "axios";

import "stream-chat-react/dist/css/index.css";

const chatClient = new StreamChat("qk4nn7rpcn75");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicGxhaW4tYnVzaC00In0.MAK11lFbw7tXWRaQSLWb2_WCmSgy3_Px2Sm047qE5Cc";

chatClient.setUser(
  {
    id: "plain-bush-4",
    name: "Plain bush",
    image: "https://getstream.io/random_svg/?id=plain-bush-4&name=Plain+bush"
  },
  userToken
);

const channel = chatClient.channel("livestream", "spacex", {
  image: "https://goo.gl/Zefkbx",
  name: "SpaceX launch discussion"
});

const LiveFeed = () => (
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

class LiveFeedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveFeed: null
    }; //this is how you set up state
    console.log(this.props.userId);
    // this.generateJwtAndLogin();
  }

  // generateJwtAndLogin() {
  //   const chatClient = new StreamChat("h5hfxq4a47sp");
  //   var token = "";
  //   console.log(this.props.userId);
  //   axios.get("/jwt/" + this.props.userId).then(res => {
  //     token = res.data;
  //     console.log(res);
  //     chatClient.setUser(
  //       {
  //         id: this.props.userId
  //       },
  //       token
  //     );

  //     const channel = chatClient.channel("livestream", "spacex", {
  //       image: "https://goo.gl/Zefkbx",
  //       name: "SpaceX launch discussion"
  //     });

  //     const LiveFeed = () => (
  //       <Chat client={chatClient} theme={"livestream dark"}>
  //         <Channel channel={channel} Message={MessageLivestream}>
  //           <Window hideOnThread>
  //             <ChannelHeader live />
  //             <MessageList />
  //             <MessageInput Input={MessageInputSmall} focus />
  //           </Window>
  //           <Thread fullWidth />
  //         </Channel>
  //       </Chat>
  //     );

  //     this.setState({ liveFeed: LiveFeed });
  //   });
  //   console.log(token);
  // }

  render() {
    return (
      <div className="App">
        <LiveFeed></LiveFeed>
      </div>
    );
  }
}

export default LiveFeedPage;
