#!/bin/bash
set -e
IFS='|'

AWSCLOUDFORMATIONCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":false,\
\"profileName\":\"default\",\
\"accessKeyId\":\"$AWS_ACCESS_KEY_ID\",\
\"secretAccessKey\":\"$AWS_SECRET_ACCESS_KEY\",\
\"region\":\"sa-east-1\",\
}"
AMPLIFY="{\
\"projectName\":\"kiziwebapp\",\
\"appId\":\"d36s91gt346jee\",\
\"envName\":\"prod\"\
}"
PROVIDERS="{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
}"

amplify init \
--amplify $AMPLIFY \
--providers $PROVIDERS \
--yes

amplify push \
--yes

amplify pull \
--yes
