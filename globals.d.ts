declare module "*.svg" {
    export default React.FC<React.SVGAttributes<React.ReactSVGElement>>;
}

declare module "*.module.scss" {
    const styles: Record<string, string | undefined>;
    export default styles;
}
