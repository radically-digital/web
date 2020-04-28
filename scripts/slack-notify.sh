#! /usr/bin/env sh
SLACK_URL="https://hooks.slack.com/services/TKCGD1A1Z/BPA7E3A7K"
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

if [ "$1" = "DEPLOY_FAIL" ]; then
  func_deploy_fail
fi

if [ "$1" = "DEPLOY_PASS" ]; then
  func_deploy_pass
fi

if [ -z "$1" ]; then
  echo "You'll need to specify a PASS or FAIL argument"
  exit 1
fi
