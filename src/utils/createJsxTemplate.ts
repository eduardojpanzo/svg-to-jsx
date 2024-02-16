import prettier from "prettier";
import { Parser } from "prettier";

interface JsxProps {
  code: string;
  memo: boolean;
  typescript: boolean;
}

export const Jsx = ({ code, memo, typescript }: JsxProps) => {
  const indexOfBrack = code.indexOf(">");

  return `import React from "react"
            function SvgComponent(props${
              typescript ? ": React.SVGProps<SVGSVGElement>" : ""
            }) {
            return (
               ${
                 code.substring(indexOfBrack - 1)[0].includes("/")
                   ? code.replace("/>", "{...props} />")
                   : code.replace(">", "{...props}>")
               }
            )}
            export default ${memo ? "React.memo(SvgComponent)" : "SvgComponent"}
`;
};

const createJsxTemplate = (props: JsxProps, options: prettier.Options = {}) => {
  const data = Jsx(props);

  return prettier.format(data, {
    parser: "babel",
    plugins: [Parser],
    useTabs: false,
    tabWidth: 2,

    ...options,
  });
};

export default createJsxTemplate;
