"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

export default function Home() {
  const [initialized, setInitialized] = useState(false);
  const [threadId, setThreadId] = useState(null);
  const [typing, setTyping] = useState(false);
  enum MessageDirection {
    Incoming = "incoming",
    Outgoing = "outgoing",
  }
  enum MessagePosition {
    single = 0,
    first = 1,
    middle = 2,
    last = 3,
  }
  const [messages, setMessages] = useState([
    {
      message:
        "Please tell us which building you would like to go @ what time and what is yor lot permit !",
      sender: "the Amazing U",
      direction: MessageDirection.Incoming,
      position: MessagePosition.single,
      image: null, // Added 'image' property with null value
    },
  ]);

  useEffect(() => {
    if (!initialized) {
      createNewThread();
      setInitialized(true);
    }
  }, [initialized]);

  const createNewThread = async () => {
    await fetch("http://127.0.0.1:8000/create_thread")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setThreadId(data.thread_id);
      });
  };

  const sendQuery = async (message: string) => {
    // Added type annotation for 'message'
    const newMessage = {
      message: message,
      sender: "user",
      direction: MessageDirection.Outgoing,
      position: MessagePosition.single,
      image: null, // Added 'image' property with null value
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setTyping(true);
    await processMessage(newMessages);
  };

  async function processMessage(messages: any[]) {
    // Added type annotation for 'messages'
    if (!threadId) {
      console.error("Thread ID is not set");
      return;
    }
    let message = messages[messages.length - 1];
    console.log(message);
    await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message.message,
        thread_id: threadId,
      }),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...messages,
          {
            message: data.message,
            sender: "the Amazing U",
            direction: "incoming",
            position: "single",
            image: data.image,
          },
        ]);
        setTyping(false);
      });
  }

  return (
    <div className="flex flex-col h-screen items-center px-4">
      <h1 className="mt-8 mb-4 text-3xl font-mono font-semibold">AI Usher</h1>
      <Image
        src="/TT.png"
        alt="Ur Usher"
        width={100}
        height={100}
        className="mb-4 rounded-full shadow-lg border-2"
      />
      <div className="w-1/2 h-screen mb-8">
        <MainContainer className="rounded-lg shadow-lg max-h-[45rem]">
          <ChatContainer>
            <MessageList
              className="my-4"
              scrollBehavior="smooth"
              typingIndicator={
                typing ? (
                  <TypingIndicator content="You personal Usher is pondering your message..." />
                ) : null
              }
            >
              {messages.map((message, i) => {
                return (
                  <Message
                    key={i}
                    model={message}
                  >
                    {message.image && (
                      <Message.ImageContent
                        src={message.image}
                        alt="Image"
                        width={500}
                      />
                    )}
                  </Message>
                );
              })}
            </MessageList>
            <MessageInput
              placeholder="Tell us where and when, I will have a spot for you!"
              onSend={sendQuery}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}
