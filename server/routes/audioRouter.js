const audioRouter = require('express').Router()
const express = require('express')
// const fs = require('fs')
const path = require('path')

audioRouter.use(express.static(path.join(__dirname, '../audio')))

module.exports = audioRouter
