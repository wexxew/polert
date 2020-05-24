# polert
PushOver Alerter from CLI

Tool for linux (and may be Windows) console for sending push alerts over PushOver service.

Using is simple: `polert --message="Test message" --subject="Test subj"`

In your `.bashrc` need to add lines:
```
export PUSHOVER_APP="<application token>"
export PUSHOVER_USER="<user token>"
```
