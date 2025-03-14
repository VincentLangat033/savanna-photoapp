*** Settings ***
Library    Browser

*** Keywords ***
Open Application
    [Arguments]    ${url}     
    Open Browser    ${url}    chromium

Login
    [Arguments]    ${username}    ${password}
    Fill Text    id=email    ${email}
    sleep    10
    Input Text    id=password    ${password}
    sleep    10
    Click Button    id=login-button