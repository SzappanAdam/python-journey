━━━━━━━━━━━━━━━━━━
🐍 Python Journey
Lesson 3 — Input & Output (Interactivity)
━━━━━━━━━━━━━━━━━━

📚 Lesson 3: Input & Output
🎯 Goals

By the end of this lesson, you will:

Get input from the user
Display dynamic output
Combine input() and print()
Build your first interactive program
📖 Introduction

So far, your programs were one-way:

👉 Python prints something
👉 You just watch

Now we change that.

We will make programs that can talk to the user.

This is called interaction.

💻 Example
name = input("What is your name? ")

print("Hello", name)
Example interaction:
What is your name? Anna
Hello Anna
🧠 How it works
input() waits for user input
The result is stored in a variable
print() shows the result
▶ Try it yourself

Modify the code:

name = input("Enter your name: ")

print("Nice to meet you,", name)

👉 Try changing the message.

🧪 Exercise

Create a program that:

asks for the user’s name
asks for their favorite color
prints a full sentence

Example:

What is your name? Anna  
What is your favorite color? blue  

Anna likes blue.
🧠 Quiz

1. What does input() do?

A) Prints text
B) Waits for user input
C) Deletes variables

2. What type is the result of input()?

A) Number
B) Text
C) Function

3. What will this print?

name = "Anna"
print(name)

4. What is wrong here?

print(input)
⚠ Common mistakes
❌ Forgetting input assignment
input("Your name: ")
print(name)

Fix:

name = input("Your name: ")
print(name)
❌ Thinking input returns a number
age = input("Age: ")
print(age + 1)

(This will error later — we’ll fix it in a later lesson)

💡 Tip

Everything from input() is always text (string).

We will learn conversion later:

int("25")
🚀 Challenge

Create a program that:

asks for name
asks for age
prints:
Hello Anna!
Next year you will be 21.
📌 Summary

You learned:

How to get user input
How to store it in variables
How to build interactive programs
Basic structure of user-driven apps
➡ Next lesson

Progress: 🟢 Beginner track (3 / 18 lessons)

👉 Data Types in Python