*** Settings ***
Library    RequestsLibrary
Library    Collections

*** Variables ***
${FIREBASE_API_KEY}    YOUR_FIREBASE_API_KEY
${FIREBASE_AUTH_URL}    https://identitytoolkit.googleapis.com/v1/accounts

*** Test Cases ***
Sign Up New User
    [Documentation]    Create a new user and verify the response.
    ${headers}=    Create Dictionary    Content-Type=application/json
    ${body}=    Create Dictionary    email=testuser@example.com    password=password123    returnSecureToken=true
    ${response}=    POST    ${FIREBASE_AUTH_URL}:signUp?key=${FIREBASE_API_KEY}    json=${body}    headers=${headers}
    Should Be Equal As Numbers    ${response.status_code}    200
    ${user}=    Set Variable    ${response.json()}
    Should Contain    ${user}    idToken
    Set Suite Variable    ${ID_TOKEN}    ${user["idToken"]}

Sign In Existing User
    [Documentation]    Authenticate an existing user and verify the response.
    ${headers}=    Create Dictionary    Content-Type=application/json
    ${body}=    Create Dictionary    email=testuser@example.com    password=password123    returnSecureToken=true
    ${response}=    POST    ${FIREBASE_AUTH_URL}:signInWithPassword?key=${FIREBASE_API_KEY}    json=${body}    headers=${headers}
    Should Be Equal As Numbers    ${response.status_code}    200
    ${user}=    Set Variable    ${response.json()}
    Should Contain    ${user}    idToken
    Set Suite Variable    ${ID_TOKEN}    ${user["idToken"]}

Get User Info
    [Documentation]    Fetch user details using the ID token.
    ${headers}=    Create Dictionary    Content-Type=application/json
    ${body}=    Create Dictionary    idToken=${ID_TOKEN}
    ${response}=    POST    ${FIREBASE_AUTH_URL}:lookup?key=${FIREBASE_API_KEY}    json=${body}    headers=${headers}
    Should Be Equal As Numbers    ${response.status_code}    200
    ${user_info}=    Set Variable    ${response.json()}
    Should Be Equal As Strings    ${user_info["users"][0]["email"]}    testuser@example.com