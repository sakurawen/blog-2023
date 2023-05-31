import Link from "next/link"
export const metadata = {
  title: "Wen's Blog",
};

export default function Home() {
  return (
    <div className="mx-auto max-w-xl py-4 px-2">
      <div className="flex gap-2">
        <a target="_blank" href="https://github.com/sakurawen/monado" className="proj-card w-1/2 rounded-md bg-white hover:bg-gray-100 ring-1 ring-gray-200 transition select-none p-2 shadow">
          <h2 className="text-base mb-1 font-bold ">@monado/cli</h2>
          <p className="text-xs text-gray-500">用于创建react应用的脚手架及其打包工具、基于webpack和swc构建。</p>
        </a>
        <a target="_blank" href="https://github.com/sakurawen/monado-react-ts-template" className="proj-card w-1/2 rounded-md bg-white hover:bg-gray-100 ring-1 ring-gray-200 transition select-none p-2 shadow">
          <h2 className="text-base mb-1 font-bold ">@monado/template</h2>
          <p className="text-xs text-gray-500">用于@monado/cli创建的react模板的typescript版本。</p>
        </a>
      </div>
    </div>
  );
}
