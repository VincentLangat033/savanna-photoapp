## **Test Plan**

### **1. Introduction**
This document outlines the test plan for the Savannah QA web application. The application includes features such as user authentication, user profiles, albums, photos, posts, and comments. The goal of this test plan is to ensure the application meets functional, usability, and performance requirements.

### **2. Test Objectives**
- Verify that all functional requirements are met.
- Ensure the application is user-friendly and intuitive.
- Validate that the application performs well under normal and extreme conditions.
- Confirm that the application is free from critical bugs.

### **3. Scope**
- **In Scope**:
  - User authentication (login, logout).
  - User profile display (name, email, address, company, etc.).
  - Album and photo management.
  - Post and comment functionality.
  - Navigation and routing.
- **Out of Scope**:
  - Third-party integrations (e.g., payment gateways).
  - Mobile-specific testing (unless specified).

### **4. Test Approach**
- **Manual Testing**: For functional and usability testing.
- **Automated Testing**: For regression and performance testing (if applicable).
- **Tools**: Postman (API testing), Selenium (automation), JMeter (performance testing).

### **5. Test Environment**
- **Browser**: Chrome, Firefox, Safari.
- **OS**: Windows, macOS, Linux.
- **Devices**: Desktop, Tablet, Mobile (if applicable).

### **6. Test Deliverables**
- Test cases.
- Test execution report.
- Bug report.
- Test summary report.

---

## **Test Objectives**

1. **Authentication**:
   - Verify that users can log in and log out successfully.
   - Ensure unauthorized users cannot access protected routes.

2. **User Profile**:
   - Validate that user details (name, email, address, company) are displayed correctly.
   - Verify that posts and albums are linked to the correct user.

3. **Albums and Photos**:
   - Confirm that albums are displayed for the selected user.
   - Ensure photos are displayed correctly for each album.

4. **Posts and Comments**:
   - Verify that posts are displayed for the selected user.
   - Ensure comments are displayed for each post.

5. **Navigation**:
   - Validate that all links and buttons work as expected.
   - Ensure the "Go Back" button functions correctly.

6. **Performance**:
   - Verify that the application handles a large number of users, albums, photos, and posts without performance degradation.

---

## **Manual Test Cases**

### **Test Case Format**
- **Test Case ID**: Unique identifier for the test case.
- **Test Case Description**: Brief description of the test case.
- **Preconditions**: Conditions that must be met before executing the test.
- **Test Steps**: Step-by-step instructions to execute the test.
- **Expected Result**: Expected outcome of the test.
- **Actual Result**: Actual outcome of the test (to be filled during execution).
- **Status**: Pass/Fail.

---

### **Test Cases**

#### **Authentication**
| Test Case ID | Test Case Description          | Preconditions    | Test Steps | Expected Result | Actual Result | Status |
|-------------|-------------------------------|-----------------|------------|----------------|---------------|--------|
| TC-AUTH-01  | Verify successful login       | User is registered | 1. Navigate to login page.<br>2. Enter valid credentials.<br>3. Click "Login". | User is redirected to home page |PASS |PASS|
| TC-AUTH-02  | Verify logout functionality   | User is logged in  | 1. Click "Logout" button. | User is redirected to login page |PASS |PASS |
| TC-AUTH-03  | Verify session persistence on refresh | User is logged in | 1. Navigate to home page.<br>2. Refresh the browser. | User remains logged in | FAIL | FAIL |

**Bug Report:** [Session Persistence Issue](bug-report.md)

#### **User Profile**
| Test Case ID | Test Case Description         | Preconditions   | Test Steps | Expected Result | Actual Result | Status |
|-------------|------------------------------|---------------|------------|----------------|---------------|--------|
| TC-UP-01    | Verify user details displayed | User is logged in | 1. Navigate to user profile page. | User details (name, email, etc.) are displayed correctly |PASS |PASS|
| TC-UP-02    | Verify posts linked to user   | User has posts | 1. Navigate to user profile page.<br>2. Click on a post. | Post details are displayed correctly |PASS |PASS |

#### **Albums and Photos**
| Test Case ID | Test Case Description        | Preconditions  | Test Steps | Expected Result | Actual Result | Status |
|-------------|-----------------------------|--------------|------------|----------------|---------------|--------|
| TC-ALB-01   | Verify albums are displayed  | User has albums | 1. Navigate to albums page.<br>2. Select a user. | Albums for the selected user are displayed |PASS |PASS |
| TC-ALB-02   | Verify photos are displayed  | Album has photos | 1. Navigate to albums page.<br>2. Select an album. | Photos for the selected album are displayed |PASS |PASS |

#### **Posts and Comments**
| Test Case ID | Test Case Description       | Preconditions  | Test Steps | Expected Result | Actual Result | Status |
|-------------|----------------------------|--------------|------------|----------------|---------------|--------|
| TC-POST-01  | Verify posts are displayed | User has posts | 1. Navigate to posts page.<br>2. Select a user. | Posts for the selected user are displayed |PASS | PASS|
| TC-POST-02  | Verify comments are displayed | Post has comments | 1. Navigate to posts page.<br>2. Click on a post. | Comments for the selected post are displayed |PASS | PASS|

#### **Navigation**
| Test Case ID | Test Case Description          | Preconditions  | Test Steps | Expected Result | Actual Result | Status |
|-------------|------------------------------|--------------|------------|----------------|---------------|--------|
| TC-NAV-01   | Verify "Go Back" button functionality | User is on a sub-page | 1. Click "Go Back" button. | User is redirected to the previous page |PASS |PASS |
| TC-NAV-02   | Verify all links work        | User is logged in | 1. Click on all navigation links. | User is redirected to the correct pages |PASS |PASS |

---

