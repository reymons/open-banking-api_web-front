import path from "node:path";
import type wp from "webpack";
import HtmlPlugin from "html-webpack-plugin";
import CssExtractPlugin from "mini-css-extract-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { Configuration as DevServerCfg } from "webpack-dev-server";
import { getCssClass } from "./util";
import { PreloadAssetsPlugin } from "./plugins/preload-assets-plugin";
import { RemoveLicensePlugin } from "./plugins/remove-license-plugin";
import { CriticalPathPlugin } from "./plugins/critical-path-plugin";

const isDev = process.env.NODE_ENV === "development";
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "dist");

const cssBaseLoaders = [
    isDev
        ? undefined
        : {
              loader: "postcss-loader",
              options: {
                  postcssOptions: {
                      plugins: [
                          [
                              "postcss-preset-env",
                              {
                                  features: {
                                      "custom-properties": false, // disable CSS variable polyfill
                                  },
                              },
                          ],
                      ],
                  },
              },
          },
    "sass-loader",
].filter(Boolean);

const htmlFilename = isDev ? "index.dev.html" : "index.html";

// TODO: separate dev and prod configs
const cfg: wp.Configuration & { devServer: DevServerCfg } = {
    entry: path.join(rootDir, "src", "app", "index.tsx"),
    output: {
        path: outputDir,
        clean: true,
        publicPath: isDev ? "/" : "/_static/",
        filename: "js/[name].[contenthash].js",
        chunkFilename: "chunks/js/[id].[contenthash].js",
        cssChunkFilename: "chunks/css/[id].[contenthash].css",
        assetModuleFilename: "assets/[hash][ext][query]",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                sideEffects: false,
                use: ["thread-loader", "swc-loader"],
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                sideEffects: true,
                use: [
                    isDev ? "style-loader" : CssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { importLoaders: 2 },
                    },
                    ...cssBaseLoaders,
                ],
            },
            {
                test: /\.module\.scss$/,
                use: [
                    isDev ? "style-loader" : CssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            modules: {
                                namedExport: false,
                                auto: true,
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                getLocalIdent(ctx: any, _: any, name: string) {
                                    return getCssClass(name, ctx.resourcePath, isDev);
                                },
                            },
                        },
                    },
                    ...cssBaseLoaders,
                ],
            },
            {
                test: /\.(svg|png|jpe?g|gif|webp|avif|woff2)$/,
                type: "asset/resource",
                sideEffects: true,
            },
        ],
    },
    plugins: [
        new HtmlPlugin({
            template: path.join(rootDir, htmlFilename),
        }),
    ],
    mode: isDev ? "development" : "production",
    devtool: isDev ? "inline-source-map" : false,
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        modules: ["node_modules"],
        plugins: [new TsconfigPathsPlugin({ baseUrl: rootDir })],
    },
    devServer: {
        host: process.env.HOST ?? "0.0.0.0",
        port: process.env.PORT ?? 7000,
        static: outputDir,
        historyApiFallback: true,
        compress: true,
    },
    experiments: {
        lazyCompilation: isDev,
    },
};

if (!isDev) {
    cfg.plugins!.push(
        new CssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "chunks/css/[id].[contenthash].css",
        }),
        new RemoveLicensePlugin(),
        new CriticalPathPlugin({
            cssDir: "css",
            htmlFilename,
        }),
        new PreloadAssetsPlugin({
            preloadedAssetsDir: path.join(rootDir, "src", "assets", "preloaded"),
        })
    );

    cfg.optimization = {
        runtimeChunk: "single",
        minimize: true,
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: "react",
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    name: "vendor",
                    priority: -20,
                    minChunks: 2,
                    reuseExistingChunk: true,
                },
            },
        },
    };
}

export default cfg;
