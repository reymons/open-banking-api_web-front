import path from "node:path";
import type wp from "webpack";
import HtmlPlugin from "html-webpack-plugin";
import CssExtractPlugin from "mini-css-extract-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { RemoveLicensePlugin } from "./plugin";
import { getCssClass } from "./util";

const isDev = process.env.NODE_ENV === "development";
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");

// TODO: separate dev and prod configs
const cfg: wp.Configuration = {
    entry: path.join(rootDir, "src", "app", "index.tsx"),
    output: {
        path: path.join(rootDir, "dist"),
        clean: true,
        publicPath: isDev ? "/" : "/_static",
        filename: "js/[name].[contenthash].js",
        chunkFilename: "chunks/js/[id].[contenthash].js",
        cssChunkFilename: "chunks/css/[id].[contenthash].css",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "swc-loader",
            },
            {
                test: /\.scss$/,
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
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["postcss-preset-env"],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(svg|png|jpe?g|gif|webp|avif)$/,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new RemoveLicensePlugin(),
        new HtmlPlugin({ template: path.join(publicDir, "index.html") }),
    ],
    mode: isDev ? "development" : "production",
    devtool: isDev ? "inline-source-map" : "source-map",
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        modules: ["node_modules", publicDir],
        plugins: [new TsconfigPathsPlugin({ baseUrl: rootDir })],
    },
    devServer: {
        host: process.env.HOST ?? "localhost",
        port: process.env.PORT ?? 5000,
        static: outputDir,
        historyApiFallback: true,
        compress: true,
    },
};

if (!isDev) {
    cfg.plugins.push(
        new CssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "chunks/css/[id].[contenthash].css",
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
