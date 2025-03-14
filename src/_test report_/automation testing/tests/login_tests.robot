*** Settings ***
Resource    ../resources/common.robot

*** Variables ***
${URL}    http://localhost:3001/login
${EMAIL}     kim@test3.com
${PASSWORD}  123456

*** Test Cases ***
Successful Login
    Open Application    ${URL}
    sleep    10
    Login    ${EMAIL}    ${PASSWORD}
    Close Browser

*** Keywords ***
Login
    [Arguments]    ${email}    ${password}
    Fill Text    id=email    ${email}
    Fill Text    id=password    ${password}
    Click Button    id=login-button
    Wait Until Element Is Visible    id=dashboard    timeout=5s
