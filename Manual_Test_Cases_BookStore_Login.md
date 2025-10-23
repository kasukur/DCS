# Manual Test Cases - Book Store Login Screen

Hey there! 👋 This document contains all the test cases we need to run on the Book Store login page to make sure everything works perfectly for our users.

## Test Environment Setup

Before we start testing, let's make sure we have everything set up properly:

- **What we're testing**: Book Store Login Page
- **Browser**: [Please specify which browser and version you'll be using]
- **Screen size**: [What resolution will you be testing on?]
- **Date**: [When are you running these tests?]

---

## 1. The Happy Path Tests 🎉

_These are the tests that should work perfectly when everything is set up correctly_

### TC001: Let's Try a Normal Login

**What we're checking**: Can a user log in with their actual username and password?
**Before we start**: Make sure you have a real user account ready to test with

**Here's what to do**:

1. Go to the Book Store login page
2. Type in a real username in the "UserName" field
3. Type in the matching password in the "Password" field
4. Click that blue "Login" button

**What should happen**: You should get logged in successfully and see the main page of the book store
**How important is this**: Very important! (High priority)

### TC002: What About Different Capital Letters?

**What we're checking**: Does the system care if someone types their username in ALL CAPS or lowercase?
**Before we start**: Have a real user account ready

**Here's what to do**:

1. Go to the Book Store login page
2. Type your username in a different way (like "ADMIN" instead of "admin")
3. Type in your normal password
4. Click the "Login" button

**What should happen**: It should still let you log in, even with different capital letters
**How important is this**: Pretty important (Medium priority)

### TC003: Oops, I Added Extra Spaces

**What we're checking**: What happens if someone accidentally adds spaces before or after their username?
**Before we start**: Have a real user account ready

**Here's what to do**:

1. Go to the Book Store login page
2. Type your username with extra spaces (like " admin " with spaces at the beginning and end)
3. Type in your normal password
4. Click the "Login" button

**What should happen**: It should still work! The system should ignore those extra spaces
**How important is this**: Pretty important (Medium priority)

---

## 2. The "What If Something Goes Wrong?" Tests 🚨

_These tests make sure our system handles mistakes gracefully and doesn't break_

### TC004: Wrong Username

**What we're checking**: What happens when someone tries to log in with a username that doesn't exist?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Type in a username that definitely doesn't exist (like "totallyfakeuser123")
3. Type in any password
4. Click the "Login" button

**What should happen**: The system should show you a nice error message saying something like "Invalid username" or "User not found"
**How important is this**: Very important! (High priority)

### TC005: Wrong Password

**What we're checking**: What happens when someone uses the right username but wrong password?
**Before we start**: Have a real username ready, but we'll use a wrong password

**Here's what to do**:

1. Go to the Book Store login page
2. Type in a real username
3. Type in a password that's definitely wrong (like "wrongpassword123")
4. Click the "Login" button

**What should happen**: The system should show an error message like "Invalid password" or "Incorrect credentials"
**How important is this**: Very important! (High priority)

### TC006: Forgot to Type Username

**What we're checking**: What happens when someone tries to log in without typing a username?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Leave the username field completely empty
3. Type in any password
4. Click the "Login" button

**What should happen**: The system should tell you that you need to enter a username
**How important is this**: Very important! (High priority)

### TC007: Forgot to Type Password

**What we're checking**: What happens when someone tries to log in without typing a password?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Type in any username
3. Leave the password field completely empty
4. Click the "Login" button

**What should happen**: The system should tell you that you need to enter a password
**How important is this**: Very important! (High priority)

### TC008: Oops, Forgot Everything!

**What we're checking**: What happens when someone clicks login without typing anything at all?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Don't type anything in either field
3. Click the "Login" button

**What should happen**: The system should tell you that you need to enter both username and password
**How important is this**: Very important! (High priority)

### TC009: Security Test - Trying to Break the System

**What we're checking**: Can someone try to hack the system by typing special code in the username field?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Type this weird code in the username field: `admin'; DROP TABLE users; --`
3. Type any password
4. Click the "Login" button

**What should happen**: The system should safely reject this and not break anything
**How important is this**: Very important! (High priority)

### TC010: Security Test - Trying to Run Scripts

**What we're checking**: Can someone try to run malicious scripts through the login form?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Type this in the username field: `<script>alert('XSS')</script>`
3. Type any password
4. Click the "Login" button

**What should happen**: The system should safely block this and not run any scripts
**How important is this**: Very important! (High priority)

---

## 3. The "Does It Look Good?" Tests 👀

_These tests make sure the page looks right and is easy to use_

### TC011: Can You See the Labels?

**What we're checking**: Are the field labels visible and in the right place?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Look at the page and check if you can see the labels

**What should happen**:

- You should see "UserName :" next to the username field
- You should see "Password :" next to the password field
- Both labels should be clearly visible and in the right spots
  **How important is this**: Pretty important (Medium priority)

### TC012: Are the Placeholder Texts There?

**What we're checking**: Do the input fields show helpful placeholder text?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Look at the input fields before typing anything

**What should happen**:

- The username field should show "UserName" as placeholder text
- The password field should show "Password" as placeholder text
  **How important is this**: Pretty important (Medium priority)

### TC013: Can You See the Buttons?

**What we're checking**: Are the buttons visible and do they look right?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Look at the buttons on the page

**What should happen**:

- You should see a blue "Login" button with white text
- You should see a blue "New User" button with white text
- Both buttons should be clearly visible
  **How important is this**: Pretty important (Medium priority)

### TC014: Does the Page Look Professional?

**What we're checking**: Does the page have a proper title and welcome message?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Look at the top of the page

**What should happen**:

- You should see "Login" as the main title
- You should see "Welcome, Login in Book Store" message
- Both should be clearly visible and well-positioned
  **How important is this**: Pretty important (Medium priority)

### TC015: Does It Work on Different Screen Sizes?

**What we're checking**: Does the page look good when you resize your browser window?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Try making your browser window smaller and bigger
3. Check if everything still looks good

**What should happen**: All the elements should still be visible and in the right places, no matter what size your screen is
**How important is this**: Pretty important (Medium priority)

---

## 4. The "What If Someone Does Something Weird?" Tests 🤔

_These tests check what happens when users try unusual things_

### TC016: Super Long Username

**What we're checking**: What happens if someone types a really, really long username?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Type a username that's really long (like 50+ characters: "thisisareallylongusernamethatkeepsgoingandgoing")
3. Type any password
4. Click the "Login" button

**What should happen**: The system should handle this gracefully - either accept it or give a clear message about username length
**How important is this**: Pretty important (Medium priority)

### TC017: Super Long Password

**What we're checking**: What happens if someone types a really, really long password?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Type any username
3. Type a password that's really long (like 50+ characters: "thisisareallylongpasswordthatkeepsgoingandgoing")
4. Click the "Login" button

**What should happen**: The system should handle this gracefully - either accept it or give a clear message about password length
**How important is this**: Pretty important (Medium priority)

### TC018: Username with Special Characters

**What we're checking**: What happens if someone uses special characters in their username?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Type a username with special characters (like "user@domain.com" or "user_name")
3. Type any password
4. Click the "Login" button

**What should happen**: The system should handle special characters properly - either accept them or give a clear message
**How important is this**: Pretty important (Medium priority)

### TC019: Password with Special Characters

**What we're checking**: What happens if someone uses special characters in their password?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Type any username
3. Type a password with special characters (like "pass@word123" or "pass_word")
4. Click the "Login" button

**What should happen**: The system should handle special characters properly - either accept them or give a clear message
**How important is this**: Pretty important (Medium priority)

### TC020: International Characters

**What we're checking**: What happens if someone uses characters from other languages?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Type a username with international characters (like "用户" or "مستخدم")
3. Type a password with international characters
4. Click the "Login" button

**What should happen**: The system should handle international characters properly
**How important is this**: Not super important, but nice to have (Low priority)

---

## 5. The "Is It Easy to Use?" Tests ⌨️

_These tests make sure the page is accessible and user-friendly_

### TC021: Can You Navigate with Just the Keyboard?

**What we're checking**: Can someone use the page without a mouse, just using the Tab key?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Press the Tab key several times to move through the page
3. Watch where the focus goes

**What should happen**:

- First Tab should go to the username field
- Second Tab should go to the password field
- Third Tab should go to the Login button
- Fourth Tab should go to the New User button
- You should be able to see which element is currently selected
  **How important is this**: Pretty important (Medium priority)

### TC022: Does the Enter Key Work?

**What we're checking**: Can someone press Enter to log in instead of clicking the button?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Type in some username and password
3. Press the Enter key while you're in the password field

**What should happen**: It should try to log you in, just like clicking the Login button
**How important is this**: Pretty important (Medium priority)

### TC023: Do the Fields Work When You Click Them?

**What we're checking**: Do the input fields respond properly when you click on them?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Click on the username field
3. Click on the password field

**What should happen**:

- When you click on a field, you should see a cursor appear there
- The field should be highlighted or selected
  **How important is this**: Not super important, but nice to have (Low priority)

### TC024: Do the Buttons Change When You Hover?

**What we're checking**: Do the buttons give visual feedback when you hover over them?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Move your mouse over the Login button
3. Move your mouse over the New User button

**What should happen**: The buttons should change color or show some visual effect when you hover over them
**How important is this**: Not super important, but nice to have (Low priority)

---

## 6. The "Do the Buttons Actually Work?" Tests 🔘

_These tests make sure all the buttons and features work as expected_

### TC025: Does the "New User" Button Work?

**What we're checking**: Does the "New User" button take you to a registration page?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Click the "New User" button

**What should happen**: You should be taken to a page where new users can sign up or register
**How important is this**: Very important! (High priority)

### TC026: What Happens When You Refresh the Page?

**What we're checking**: Do the form fields get cleared when you refresh the page?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Type some text in both the username and password fields
3. Refresh the page (press F5 or Ctrl+R)

**What should happen**: All the fields should be empty again after the refresh
**How important is this**: Not super important, but nice to have (Low priority)

### TC027: Does the Back Button Work?

**What we're checking**: Can you use the browser's back button to leave the login page?
**Before we start**: Navigate to the login page from another page first

**Here's what to do**:

1. Go to some other page first, then navigate to the Book Store login page
2. Click the browser's back button

**What should happen**: You should go back to the previous page you were on
**How important is this**: Not super important, but nice to have (Low priority)

---

## 7. The "Is It Fast Enough?" Tests ⚡

_These tests make sure the page loads quickly and responds fast_

### TC028: How Fast Does the Page Load?

**What we're checking**: Does the login page load quickly enough?
**Before we start**: Clear your browser cache first

**Here's what to do**:

1. Clear your browser cache (or use incognito/private mode)
2. Go to the Book Store login page
3. Time how long it takes to fully load

**What should happen**: The page should load completely within 3 seconds
**How important is this**: Pretty important (Medium priority)

### TC029: How Fast Does Login Work?

**What we're checking**: Does the login process complete quickly?
**Before we start**: Have a real user account ready

**Here's what to do**:

1. Go to the Book Store login page
2. Type in real username and password
3. Click the Login button
4. Time how long it takes to complete the login

**What should happen**: The login should finish within 5 seconds
**How important is this**: Pretty important (Medium priority)

---

## 8. The "Is It Secure?" Tests 🔒

_These tests make sure the login system is secure and protects user data_

### TC030: Is the Password Hidden?

**What we're checking**: When someone types a password, can other people see what they're typing?
**Before we start**: No special setup needed

**Here's what to do**:

1. Go to the Book Store login page
2. Type a password in the password field
3. Look at what appears on the screen

**What should happen**: Instead of seeing the actual letters, you should see dots (•) or asterisks (\*) to hide the password
**How important is this**: Very important! (High priority)

### TC031: Does the Session Time Out?

**What we're checking**: If someone logs in and then leaves their computer alone, do they get logged out automatically?
**Before we start**: You need to be able to log in successfully first

**Here's what to do**:

1. Log in with valid credentials
2. Leave the page open and don't do anything for a long time (like 30 minutes)
3. Try to do something on the site

**What should happen**: You should be logged out and taken back to the login page
**How important is this**: Pretty important (Medium priority)

---

## Your Testing Checklist 📋

_Use this table to keep track of which tests you've run and what happened_

| Test # | What You're Testing                      | How Important       | Did It Work? | Notes |
| ------ | ---------------------------------------- | ------------------- | ------------ | ----- |
| TC001  | Normal login with real credentials       | Very Important      |              |       |
| TC002  | Login with different capital letters     | Pretty Important    |              |       |
| TC003  | Login with extra spaces in username      | Pretty Important    |              |       |
| TC004  | Wrong username                           | Very Important      |              |       |
| TC005  | Wrong password                           | Very Important      |              |       |
| TC006  | Empty username field                     | Very Important      |              |       |
| TC007  | Empty password field                     | Very Important      |              |       |
| TC008  | Both fields empty                        | Very Important      |              |       |
| TC009  | Security test - trying to hack with code | Very Important      |              |       |
| TC010  | Security test - trying to run scripts    | Very Important      |              |       |
| TC011  | Can you see the field labels?            | Pretty Important    |              |       |
| TC012  | Can you see the placeholder text?        | Pretty Important    |              |       |
| TC013  | Can you see the buttons?                 | Pretty Important    |              |       |
| TC014  | Does the page look professional?         | Pretty Important    |              |       |
| TC015  | Does it work on different screen sizes?  | Pretty Important    |              |       |
| TC016  | Super long username                      | Pretty Important    |              |       |
| TC017  | Super long password                      | Pretty Important    |              |       |
| TC018  | Username with special characters         | Pretty Important    |              |       |
| TC019  | Password with special characters         | Pretty Important    |              |       |
| TC020  | International characters                 | Not super important |              |       |
| TC021  | Can you navigate with just the keyboard? | Pretty Important    |              |       |
| TC022  | Does the Enter key work?                 | Pretty Important    |              |       |
| TC023  | Do the fields work when you click them?  | Not super important |              |       |
| TC024  | Do the buttons change when you hover?    | Not super important |              |       |
| TC025  | Does the "New User" button work?         | Very Important      |              |       |
| TC026  | What happens when you refresh?           | Not super important |              |       |
| TC027  | Does the back button work?               | Not super important |              |       |
| TC028  | How fast does the page load?             | Pretty Important    |              |       |
| TC029  | How fast does login work?                | Pretty Important    |              |       |
| TC030  | Is the password hidden?                  | Very Important      |              |       |
| TC031  | Does the session time out?               | Pretty Important    |              |       |

---

## What You'll Need for Testing 🛠️

### Good Test Data (Stuff That Should Work)

- **Usernames**: admin, testuser, user123
- **Passwords**: password123, testpass, admin123

### Bad Test Data (Stuff That Shouldn't Work)

- **Fake Usernames**: invaliduser, nonexistent, wronguser
- **Wrong Passwords**: wrongpass, incorrect, invalid

### Weird Test Data (Special Characters)

- **Usernames**: user@domain.com, user_name, user-name
- **Passwords**: pass@word123, pass_word, pass-word

---

## A Few Important Notes 📝

- **Test in a safe environment**: Don't test on the live website if you can help it!
- **Get your test data ready**: Make sure you have real usernames and passwords before you start
- **Take screenshots**: If something goes wrong, take a picture so you can show the developers
- **Write down what happened**: Keep notes about what worked and what didn't
- **Don't worry if some tests fail**: That's why we're testing - to find problems before users do!

**Happy Testing! 🎉**
