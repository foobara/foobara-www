export default `$ claude
> Hi! There's a Capybara whose birth year was entered incorrectly. Can you
  find which one and fix it? Thanks!
● I'll help find and fix the capybara with the incorrect birth year. Let me
  search for the capybaras first.
● mcp-test:FindAllCapybaras (MCP)()…
  ⎿  [
       {
         "name": "Fumiko",
         "year_of_birth": 2020,
         "id": 1

     … +7 lines (ctrl+r to expand)

         "name": "Basil",
         "year_of_birth": 2021,
         "id": 3
       }
     ]
● It looks like Barbara (id 2) has an incorrect birth year of 19, which is
  too low. Let me fix that to 2019.
● mcp-test:UpdateCapybara (MCP)(id: 2, year_of_birth: 2019)…
  ⎿  {
       "name": "Barbara",
       "year_of_birth": 2019,
       "id": 2
     }
● Fixed! Barbara's birth year has been updated from 19 to 2019.
> Great! Thanks!
● You're welcome!`
