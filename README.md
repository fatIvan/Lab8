# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter) 
    Option 1.
2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    I would not, because the "message" feature as a whole includes many different parts that can have many potential problems, for instance, it might have problem with word limit or image processing. Therefore, I would not use a unit test for the "message" feature because it is too broad.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
    I would use a unit test to test the "max message length" feature of a messaging application, because this test is quite simple only involving if the "max message length" feature can prevent the user from typing more than 80 character.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

