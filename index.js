const core = require('@actions/core');

try {
  const input1 = core.getInput('id_of_input', { required: true});
  const input2 = core.getInput('id_of_input2', { required: true});

  core.setOutput('id_of_output', input1);
  core.setOutput('id_of_output2', input2);
} catch (error) {
    core.setFailed(error.message);
}    