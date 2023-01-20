# summarize

a script that handles piped input to generate a summary from chatgpt

install deps:

```
npm i
```

add your [OpenAI Api Key](https://beta.openai.com/account/api-keys) to a .env file

```
OPENAI_API_KEY=
```

run the script against a git diff (make some changes in the repo first)

```
git diff | npm run summarize
```
