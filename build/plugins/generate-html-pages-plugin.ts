import type { Compiler } from "webpack";
import path from "node:path";
import fs from "node:fs/promises";

type Config = {
    htmlFilename: string;
    outDir: string;
    pages: string[];
};

export class GenerateHtmlPagesPlugin {
    constructor(private readonly cfg: Config) {
        if (!path.isAbsolute(cfg.htmlFilename)) {
            throw new Error(`htmlFilename should be an absolute path, got ${cfg.htmlFilename}`);
        }
        if (!path.isAbsolute(cfg.outDir)) {
            throw new Error(`outDir should be an absolute path, got ${cfg.outDir}`);
        }
    }

    apply(compiler: Compiler) {
        compiler.hooks.afterDone.tap("GenerateHtmlPagesPlugin", async () => {
            const promises = this.cfg.pages.map(page => {
                page = page[0] == "/" ? page.substring(1) : page;
                return fs.cp(this.cfg.htmlFilename, path.join(this.cfg.outDir, `${page}.html`));
            });
            await Promise.all(promises);
        });
    }
}
