package com.ragchatbot.dtos;

import lombok.Data;

//this is dtos chat request

@Data
public class ChatRequest {
  private String userMsg;
  private boolean newChatThread;
}
