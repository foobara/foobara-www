export default `$ ./capybaras_agent_script_result_type.rb
To agent: There is a capybara with a bad year of birth. Can you find and fix the bad record? Thanks!
CapyAgent<claude-3-7-sonnet-20250219>: Foobara::Agent::DescribeCommand.run(command_name: "Foobara::Agent::ListCommands")
CapyAgent<claude-3-7-sonnet-20250219>: Foobara::Agent::ListCommands.run
CapyAgent<claude-3-7-sonnet-20250219>: Foobara::Agent::DescribeCommand.run(command_name: "FindAllCapybaras")
CapyAgent<claude-3-7-sonnet-20250219>: FindAllCapybaras.run
CapyAgent<claude-3-7-sonnet-20250219>: Foobara::Agent::DescribeCommand.run(command_name: "UpdateCapybara")
CapyAgent<claude-3-7-sonnet-20250219>: UpdateCapybara.run(id: 14, year_of_birth: 2019)
CapyAgent<claude-3-7-sonnet-20250219>: Foobara::Agent::DescribeCommand.run(command_name: "Foobara::Agent::CapyAgent::NotifyUserThatCurrentGoalHasBeenAccomplished")
CapyAgent<claude-3-7-sonnet-20250219>: Foobara::Agent::CapyAgent::NotifyUserThatCurrentGoalHasBeenAccomplished.run(result: 14, message_to_user: "I found and fixed the bad capybara record. Barbara's year of birth was incorrectly set to 19, which is not a valid year for a living capybara. I updated it to 2019, which is a reasonable year of birth for a capybara.")

Agent returned Barbara who now has a year_of_birth of 2019
Message from agent: I found and fixed the bad capybara record. Barbara's year of birth was incorrectly set to 19, which is not a valid year for a living capybara. I updated it to 2019, which is a reasonable year of birth for a capybara.

To agent: Thank you so much! Can you set it back so that I can do the demo over again? Thanks!
CapyAgent<claude-3-7-sonnet-20250219>: Foobara::Agent::DescribeCommand.run(command_name: "UpdateCapybara")
CapyAgent<claude-3-7-sonnet-20250219>: UpdateCapybara.run(id: 14, year_of_birth: 19)
CapyAgent<claude-3-7-sonnet-20250219>: Foobara::Agent::DescribeCommand.run(command_name: "Foobara::Agent::CapyAgent::NotifyUserThatCurrentGoalHasBeenAccomplished")
CapyAgent<claude-3-7-sonnet-20250219>: Foobara::Agent::CapyAgent::NotifyUserThatCurrentGoalHasBeenAccomplished.run(result: 14, message_to_user: "I've set Barbara's year of birth back to 19 as requested, so you can run your demo again. The capybara record has been restored to its original state with the incorrect year of birth.")

Agent returned Barbara who now has a year_of_birth of 19
Message from agent: I've set Barbara's year of birth back to 19 as requested, so you can run your demo again. The capybara record has been restored to its original state with the incorrect year of birth.`
