# npmjstogithub

## Installing and Running

### Procedures

1. Check if your [Node.js](https://nodejs.org/) version is >= **14**.
2. Clone this repository.
3. Change the package's `your name`, `description`, and `repository` fields in `package.json`.
4. Change the name of your extension on `src/manifest.js`.
5. Run `pnpm install` to install the dependencies.
6. Run `pnpm build`

## Packing

After the development of your extension run the command

```shell
$ pnpm build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

---

Power by create-chrome-ext | [Github](https://github.com/guocaoyi/create-chrome-ext)
