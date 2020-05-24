#!/usr/bin/env node
`use strict`

const { options } = require('argumentate')(process.argv.slice(2))
const { subject, message } = options

if (!message) {
    throw new Error('Message is empty!')
}

const Pushover = require('node-pushover')
const push = new Pushover({
    token: process.env.PUSHOVER_APP,
    user: process.env.PUSHOVER_USER,
})

push.send(subject, message, err => {
    if (err) {
        throw err
    }

    console.log("Message sent")
})
