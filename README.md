# polert
PushOver Alerter from CLI

Tool for linux (and may be Windows) console for sending push alerts over PushOver service.

## Using
`polert --message="Test message" --subject="Test subj"`

## Installation
`npm i polert -g`

In your `.bashrc` need to add lines:
```
export PUSHOVER_APP="<application token>"
export PUSHOVER_USER="<user token>"
```
After you need re-login in bash.
