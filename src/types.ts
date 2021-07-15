export type TTheme = 'vs-dark' | 'light';
export type TMode = 'javascript' | 'typescript' | 'html' | 'css' | 'less' | 'java' | 'python' | 'php' ;

export interface IOptions  {
    [key: string]: string | number | boolean;
}
export interface ITheme  {
    [key: string]: TTheme;
}
export interface IMode  {
    [key: string]: TMode;
}

export interface IMonacoEditorProps {
    theme: TTheme;
    mode: TMode;
    code: string;
    className?: string;
    options: IOptions;
    onMount?:()=>void;
    beforeMount?:()=>void;
}