import wp from "webpack";

export class RemoveLicensePlugin {
    apply(compiler: wp.Compiler) {
        compiler.hooks.compilation.tap("RemoveLicensePlugin", compilation => {
            compilation.hooks.afterProcessAssets.tap("RemoveLicensePlugin", () => {
                Object.keys(compilation.assets).forEach(name => {
                    if (name.includes("LICENSE")) {
                        delete compilation.assets[name];
                    }
                });
            });
        });
    }
}
