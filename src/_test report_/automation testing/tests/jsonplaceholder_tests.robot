*** Settings ***
Library    RequestsLibrary
Library    Collections
Library    Browser
Resource    ../resources/common.robot

*** Variables ***
${BASE_URL}    https://jsonplaceholder.typicode.com

*** Test Cases ***
Get All Posts
    [Documentation]    Fetch all posts and verify the response.
    Open Application    ${BASE_URL}
    ${response}=    GET    ${BASE_URL}/posts
    Should Be Equal As Numbers    ${response.status_code}    200
    ${posts}=    Set Variable    ${response.json()}
    Length Should Be    ${posts}    100

Get Specific Post
    [Documentation]    Fetch a specific post and verify the response.
    ${response}=    GET    ${BASE_URL}/posts/1
    Should Be Equal As Numbers    ${response.status_code}    200
    ${post}=    Set Variable    ${response.json()}
    Should Be Equal As Strings    ${post["title"]}    sunt aut facere repellat provident occaecati excepturi optio reprehenderit

Create New Post
    [Documentation]    Create a new post and verify the response.
    ${headers}=    Create Dictionary    Content-Type=application/json
    ${body}=    Create Dictionary    title=foo    body=bar    userId=1
    ${response}=    POST    ${BASE_URL}/posts    json=${body}    headers=${headers}
    Should Be Equal As Numbers    ${response.status_code}    201
    ${post}=    Set Variable    ${response.json()}
    Should Be Equal As Strings    ${post["title"]}    foo
    Should Be Equal As Strings    ${post["body"]}    bar

Update Post
    [Documentation]    Update an existing post and verify the response.
    ${headers}=    Create Dictionary    Content-Type=application/json
    ${body}=    Create Dictionary    title=updated title    body=updated body
    ${response}=    PUT    ${BASE_URL}/posts/1    json=${body}    headers=${headers}
    Should Be Equal As Numbers    ${response.status_code}    200
    ${post}=    Set Variable    ${response.json()}
    Should Be Equal As Strings    ${post["title"]}    updated title
    Should Be Equal As Strings    ${post["body"]}    updated body

Delete Post
    [Documentation]    Delete a post and verify the response.
    ${response}=    DELETE    ${BASE_URL}/posts/1
    Should Be Equal As Numbers    ${response.status_code}    200