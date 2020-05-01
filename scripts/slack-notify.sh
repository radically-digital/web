#! /usr/bin/env sh
# SLACK_URL needs to be set in the env - slack will revoke it if it manages to find it
SLACK_CHANNEL="#project-rad-website"
SLACK_DEPLOY_BOT_NAME="Oh Ship!"
ARTIFACTS_URL="https://app.circleci.com/jobs/github/radically-digital/web"

RAND_MOJI_PASS=$(sort -R ./scripts/rand-moji-pass.txt | head -n1)
RAND_MOJI_FAIL=$(sort -R ./scripts/rand-moji-fail.txt | head -n1)

function func_deploy_fail() {
  curl -X POST \
    --data-urlencode "payload={
    \"channel\": \"$SLACK_CHANNEL\",
    \"username\": \"$SLACK_DEPLOY_BOT_NAME\",
    \"text\": \"Looks like something got in the way of shipping it\n\nView the pipeline here: $CIRCLE_BUILD_URL\n\n*Please list the findings of this failure in a :thread: below*\",
    \"icon_emoji\": \"$RAND_MOJI_FAIL\"}" \
    "$SLACK_URL"
}

function func_deploy_pass() {
  curl -X POST \
    --data-urlencode "payload={
    \"channel\": \"$SLACK_CHANNEL\",
    \"username\": \"$SLACK_DEPLOY_BOT_NAME\",
    \"text\": \"Deployed!\",
    \"icon_emoji\": \"$RAND_MOJI_PASS\"}" \
    "$SLACK_URL"
}

if [ -z "$SLACK_URL" ]; then
  echo "You'll need to specify a SLACK_URL in your env"
  exit 1
fi

if [ -z "$1" ]; then
  echo "You'll need to specify a PASS or FAIL argument"
  exit 1
fi

if [ ! -z "$2" ]; then
  SLACK_CHANNEL=$2
fi

if [ "$1" = "DEPLOY_FAIL" ]; then
  func_deploy_fail
fi

if [ "$1" = "DEPLOY_PASS" ]; then
  func_deploy_pass
fi
