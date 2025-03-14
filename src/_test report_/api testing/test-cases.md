**API Test Plan**  

## **1. Introduction**  
This document outlines the test cases for the API endpoints of the system. The goal is to verify the functionality, performance, security, and reliability of the APIs by ensuring that all endpoints work as expected under various conditions.

## **2. Scope**  
This test plan covers the following API modules:
- **User Management** (`/users`)
- **Album Management** (`/albums`)
- **Photo Management** (`/photos`)
- **Authentication** (`/login`, `/logout`)

## **3. Testing Approach**  
The APIs will be tested using:
- **Manual Testing** (via Postman)
- **Automated Testing** (via robot framework (Python))
- **Security Testing** (SQL Injection, unauthorized access attempts)
- **Performance Testing** (stress testing with multiple requests)

## **4. Test Cases**  

### **4.1 User API Tests (`/users`)**
#### **GET /users**  
✅ **Positive Test Cases**  
- Fetch all users → **Response:** `200 OK`
- Fetch a user by valid ID → **Response:** `200 OK`, returns user details  

❌ **Negative Test Cases**  
- Fetch a user with an invalid ID → **Response:** `404 Not Found`
- Unauthorized request (if authentication is required) → **Response:** `401 Unauthorized`

#### **POST /users**  
✅ **Positive Test Cases**  
- Create a new user with valid data → **Response:** `201 Created`, user details returned  

❌ **Negative Test Cases**  
- Missing required fields (e.g., name, email) → **Response:** `400 Bad Request`
- Invalid email format → **Response:** `400 Bad Request`
- Duplicate email → **Response:** `409 Conflict`

### **4.2 Album API Tests (`/albums`)**
#### **GET /albums**  
✅ **Positive Test Cases**  
- Fetch all albums → **Response:** `200 OK`
- Fetch an album by valid ID → **Response:** `200 OK`, returns album details  

❌ **Negative Test Cases**  
- Fetch an album with a non-existing ID → **Response:** `404 Not Found`

#### **POST /albums**  
✅ **Positive Test Cases**  
- Create an album with a valid user ID → **Response:** `201 Created`, album details returned  

❌ **Negative Test Cases**  
- Missing required fields (`userId`, `title`) → **Response:** `400 Bad Request`
- Non-existing user ID → **Response:** `400 Bad Request`

### **4.3 Photo API Tests (`/photos`)**
#### **GET /photos**  
✅ **Positive Test Cases**  
- Fetch all photos → **Response:** `200 OK`
- Fetch a photo by valid ID → **Response:** `200 OK`, returns photo details  

❌ **Negative Test Cases**  
- Fetch a photo with an invalid ID → **Response:** `404 Not Found`

#### **POST /photos**  
✅ **Positive Test Cases**  
- Create a photo with a valid album ID → **Response:** `201 Created`, photo details returned  

❌ **Negative Test Cases**  
- Missing required fields (`albumId`, `title`, `url`) → **Response:** `400 Bad Request`
- Invalid `url` format → **Response:** `400 Bad Request`
- Non-existing album ID → **Response:** `400 Bad Request`

### **4.4 Authentication API Tests (`/login`, `/logout`)**
#### **POST /login**  
✅ **Positive Test Cases**  
- Login with valid credentials → **Response:** `200 OK`, returns token  

❌ **Negative Test Cases**  
- Invalid credentials → **Response:** `401 Unauthorized`
- Missing email or password → **Response:** `400 Bad Request`

#### **POST /logout**  
✅ **Positive Test Cases**  
- Logout with a valid session → **Response:** `200 OK`  

❌ **Negative Test Cases**  
- Logout without a valid session → **Response:** `401 Unauthorized`

## **5. Common Test Scenarios**
✅ **Security Tests**  
- Attempt SQL Injection (`id=1' OR '1'='1`) → **Expected:** `400 Bad Request`
- Try unauthorized access → **Expected:** `401 Unauthorized`

✅ **Performance Tests**  
- Stress test with 100+ requests → **Expected:** System should maintain response times under acceptable limits.

✅ **Edge Case Tests**  
- Empty request body for `POST` → **Expected:** `400 Bad Request`
- Extremely long input values → **Expected:** `400 Bad Request`

## **6. Test Execution**  
| Test Case ID | API Endpoint | Test Type | Expected Result | Status |
|-------------|-------------|----------|----------------|--------|
| TC001 | GET /users | Positive | 200 OK | PASS |
| TC002 | GET /users/{id} | Negative | 404 Not Found | PASS |
| TC003 | POST /users | Positive | 201 Created | PASS |
| TC004 | POST /users | Negative | 400 Bad Request | PASS |
| TC005 | GET /albums | Positive | 200 OK | PASS |
| TC006 | GET /photos | Positive | 200 OK | PASS |
| TC007 | POST /login | Positive | 200 OK | PASS |
| TC008 | POST /login | Negative | 401 Unauthorized | PASS |
| TC009 | POST /logout | Positive | 200 OK | PASS |

## **7. Tools for Testing**  
- **Postman** (Manual API Testing)
- **Robot Framework(Python)** (Automated Testing)
- **Apache JMeter** (Performance Testing)
- **OWASP ZAP** (Security Testing)

## **8. Conclusion**  
Execution of these test cases will help improve API reliability, security, and performance.

