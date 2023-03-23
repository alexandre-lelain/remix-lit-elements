# Project to reproduce bug in issue https://github.com/remix-run/remix/issues/5888

## Steps to reproduce

1. Run `npm i`
2. Run `npm run dev`
3. Open your browser at http://localhost:3000/
4. You should see "Hello, Alex !"
5. Reload the page or make a change in the source code
6. The application crashes with the following error :

```
Error: Failed to execute 'define' on 'CustomElementRegistry': the name "my-lit-element" has already been used with this registry
```
