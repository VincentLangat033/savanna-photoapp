*** Settings ***
Library    Browser
Resource    ../resources/common.robot

*** Variables ***
${URL}    https://savanna-info-photoapp.vercel.app/login
${EMAIL}     kim@test3.com
${PASSWORD}  123456
${SEARCH_TERM}    Ervin Howell

*** Test Cases ***
Successful Login and Perform a Search
    Open Application    ${URL}
    sleep    3
    Login    ${EMAIL}    ${PASSWORD}
    Close Browser

*** Keywords ***
Login
    [Arguments]    ${email}    ${password}
    Fill Text    id=email    ${email}
    Fill Text    id=password    ${password}
    Browser.Click    id=login-button
    sleep    5
    Browser.Wait For Elements State    id=view-users    visible    10s
    Browser.Click    id=view-users
    Sleep    5
    Fill Text    id=search-users    ${SEARCH_TERM}
    Sleep    5
    Browser.Click    id=search-btn
    Sleep    5  
Validate Search Results
    [Arguments]    ${expected_result}

    # Wait for the table rows to be visible
    Browser.Wait For Elements State    xpath=//tr[contains(@class, 'user-row')]    visible    10s

    # Get all text from the search results table
    ${results}=    Browser.Get Text    xpath=//tr[contains(@class, 'user-row')]

    # Validate that the expected search term appears in the results
    Should Contain    ${results}    ${expected_result}    Search term '${expected_result}' not found in results!


    Sleep    10
    Close Browser

