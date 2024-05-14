####################################################
Author Shikha Rani
Date 14/05/2024
###################################################



# Building RAG Chatbot in Java with Langchain4j and Qdrant DB
This project is a boilerplate and example of an RAG chatbot built in Java using the LangChain4j library, utilizing Qdrant as its vector store. It includes implementations for both a Basic RAG chatbot and an Advanced RAG chatbot.

# Technology and Dependencies
1. Java
2. Spring Boot (Maven)
3. Langchain4j
4. Qdrant DB
5. OpenAI

# Prerequisites
Ensure you have the following prerequisites installed before starting this project:

- ### Operating System:
    -  Windows, macOS, or Linux support.

- ### Hardware:
    - A system with at least 4GB RAM and a dual-core processor.

- ### Java Development Kit (JDK):
    - Install Java 17 or a compatible version.

- ### Integrated Development Environment (IDE):
     - (Optional) Choose a Java IDE of your preference:
       - Eclipse 
       - IntelliJ IDEA

- ### Vector Store
  - [Setup Qdrant Cloud free cluster](https://qdrant.tech/documentation/cloud/quickstart-cloud/) 

- ### Build Tool:
    - Apache Maven for building and managing dependencies.

- ### API Testing Tool:
    - Postman for testing APIs.


# Project Setup in IntelliJ IDEA
- First download the project using the git clone command. `git clone 
- Launch IntelliJ IDEA on your machine.
- Open the project in IntelliJ. [Importing project in IntelliJ doc.](https://www.jetbrains.com/help/idea/maven-support.html#maven_import_project_start)
- Since its a Maven project IntelliJ IDEA will detect the pom.xml file and automatically download the dependencies.
- In the `ChatConstants` file I have declared the variables `QDRANT_GRPC_HOST`, `QDRANT_API_KEY` and `OPENAI_API_KEY` which read their values from the environment.
- Set all the 3 values in the IntelliJ environment. [Environment variable setup doc.](https://education.launchcode.org/gis-devops/configurations/02-environment-variables-intellij/index.html)

# Running the Chatbot Application
- Locate the main class of your Spring Boot application, which is `RagChatbotApplication`.
- Right-click on the main class file and select `Run RagChatbotApplication` to initiate the Spring Boot application.
- Check the console output for any errors. Upon successful startup, you should observe messages indicating that the application has started on port 8080.
- Open a web browser and navigate to `http://localhost:8080/chat`. You should receive the message `Welcome to Chat Bot`, confirming the successful launch of your application.