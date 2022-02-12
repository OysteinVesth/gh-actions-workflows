import core from '@actions/core'
import { context, getOctokit } from '@actions/github'

const owner = context.payload.repository.owner
const repo = context.payload.repository.name
const run_id = context.runId

const run = async () => {
    console.log(core.getInput('title'))
    console.log('THE CONTEXT')
    console.log(JSON.stringify(context, undefined, 2))
    console.log('')
    console.log('=====================')
    console.log('')
}

run()