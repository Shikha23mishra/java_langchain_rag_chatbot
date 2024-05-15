package com.ragchatbot.dtos;

//this is for response

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatResponse {
  private String aiMsg;
}
