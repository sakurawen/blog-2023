export const metadata = {
  title: "Wen's Blog",
};

export default function Home() {
  return (
    <div className="mx-auto max-w-xl px-2 py-4">
      <div className="flex gap-2">
        <a
          target="_blank"
          href="https://github.com/sakurawen/monado"
          className="proj-card w-1/2 select-none rounded-md bg-white p-2 shadow ring-1 ring-gray-200 transition hover:bg-gray-100"
        >
          <h2 className="mb-1 text-base font-bold ">@monado/cli</h2>
          <p className="text-xs text-gray-500">用于创建react应用的脚手架及其打包工具、基于webpack和swc构建。</p>
        </a>
        <a
          target="_blank"
          href="https://github.com/sakurawen/monado-react-ts-template"
          className="proj-card w-1/2 select-none rounded-md bg-white p-2 shadow ring-1 ring-gray-200 transition hover:bg-gray-100"
        >
          <h2 className="mb-1 text-base font-bold ">@monado/template</h2>
          <p className="text-xs text-gray-500">用于@monado/cli创建的react模板的typescript版本。</p>
        </a>
      </div>
    </div>
  );
}
