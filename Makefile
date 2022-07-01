RUNNER:=yarn
INSTALL_CMD=$(RUNNER) install
RUN_CMD=$(RUNNER) run
RUN=$(INSTALL_CMD) && $(RUN_CMD)

BUILD_TARGET:=$(REACT_APP_BUILD_TARGET)

start:
  $(RUN) start
start-mock:
  $(RUN) start:mock
test:
  $(RUN) test -- --watchAll=false
test-watch:
  $(RUN) test
test-coverage:
  $(RUN) test -- --coverage --watchAll=false
test-watch-coverage:
  $(RUN) test -- --coverage
lint:
  $(RUN) lint
build-prod:
  $(RUN) build
