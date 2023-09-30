### Conceptual Exercise

Answer the following questions below:

1. **What is a JWT?**
   JWT stands for JSON Web Token. It's a compact, URL-safe means of representing claims between two parties. It's commonly used for securely transmitting information between a client and a server as a JSON object. JWTs consist of three parts: Header, Payload, and Signature. They are often used for authentication and authorization purposes.

2. **What is the signature portion of the JWT? What does it do?**
   The signature in a JWT is used to verify the authenticity of the token. It's created by combining the encoded header, encoded payload, and a secret key using a specific algorithm. When the receiving party gets the JWT, it can use the same algorithm and the shared secret key to recompute the signature and verify if the token has been tampered with.

3. **If a JWT is intercepted, can the attacker see what's inside the payload?**
   Yes, the payload of a JWT is base64-encoded, not encrypted. If a JWT is intercepted, an attacker can decode the payload and see its contents. However, they cannot modify the payload without changing the signature, which would then be invalidated.

4. **How can you implement authentication with a JWT? Describe how it works at a high level.**
   To implement authentication with JWT, a user logs in with their credentials. Upon successful authentication, the server generates a JWT containing user-specific information (payload) and signs it with a secret key. The JWT is sent to the client, which includes it in subsequent requests' headers. The server then validates the JWT's signature and extracts the user information from the payload to identify the user.

5. **Compare and contrast unit, integration, and end-to-end tests.**
   - **Unit tests** focus on testing individual components or functions in isolation.
   - **Integration tests** verify interactions between different components or systems.
   - **End-to-end tests** simulate user scenarios across the entire application.

6. **What is a mock? What are some things you would mock?**
   A mock is a simulated object or component used to mimic the behavior of real objects or components. It's used to isolate the unit of code being tested. Examples of things to mock are external APIs, database connections, and other modules.

7. **What is continuous integration?**
   Continuous Integration (CI) is a development practice where code changes are automatically integrated into a shared repository multiple times a day. After integration, automated tests and builds are run to catch bugs and ensure the codebase remains functional.

8. **What is an environment variable and what are they used for?**
   An environment variable is a variable outside the program that stores configuration settings or system-wide parameters. They are used to provide dynamic configuration, such as database URLs, API keys, or application-specific settings, without hardcoding them into the code.

9. **What is TDD? What are some benefits and drawbacks?**
   Test-Driven Development (TDD) is a software development process where tests are written before writing the actual code. Benefits include better code quality, documentation, and easier refactoring. Drawbacks can include time consumption and potential over-emphasis on testing over functionality.

10. **What is the value of using JSONSchema for validation?**
    JSONSchema is used to define the structure and constraints of JSON data. Using JSONSchema for validation ensures that the data adheres to the expected format, helping prevent errors and inconsistencies.

11. **What are some ways to decide which code to test?**
    - Critical business logic.
    - Complex algorithms.
    - Components with multiple dependencies.
    - Error-prone or high-risk code.
    - Code that handles user input.

12. **What does `RETURNING` do in SQL? When would you use it?**
    `RETURNING` is used in SQL queries to retrieve values from rows affected by data modification statements (e.g., `INSERT`, `UPDATE`, `DELETE`). It's especially useful when you want to get the values of generated columns or to confirm the effects of an action.

13. **What are some differences between Web Sockets and HTTP?**
    - **HTTP**: Request-response model, stateless, suitable for traditional web interactions.
    - **Web Sockets**: Full-duplex communication, long-lived connections, suitable for real-time applications.

14. **Did you prefer using Flask over Express? Why or why not?**
    I don't have personal preferences or experiences as I'm an AI model, but some reasons one might prefer Flask over Express or vice versa could include familiarity with the language (Python vs. JavaScript), the specific requirements of the project, the size of the community, and the available libraries and tools. Both Flask and Express have their strengths and are popular choices in their respective ecosystems.