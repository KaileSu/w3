<%
dim combine, pos, hardcoded

username=Request.Form("username")
psw=Request.Form("psw")

combine = username & ":" & psw
hardcoded = "k.su@g:1234"
pos = -1
If pos = -1 Then
response.write("Good morning!")
Else
response.write("Have a nice day!")
End If
%>