export const metadata = {
  title: "Wen's Blog",
};

const projectList = [
  {
    name: '@monado/cli',
    href: 'https://github.com/sakurawen/monado',
    desc: '用于创建react应用的脚手架及其打包工具、基于webpack和swc构建。',
  },
  {
    name: '@monado/template',
    href: 'https://github.com/sakurawen/monado-react-ts-template',
    desc: '用于@monado/cli创建的react模板的typescript版本。',
  },
];

export default function Home() {
  return (
    <div className="mx-auto">
      <div className="flex gap-2">
        {projectList.map((proj) => {
          return (
            <a
              key={proj.name}
              target="_blank"
              href={proj.href}
              className="proj-card w-1/2 cursor-default select-none rounded-md bg-white p-2 shadow ring-1 ring-gray-100 transition hover:bg-gray-100 hover:ring-gray-200"
            >
              <h2 className="mb-1 text-base font-bold ">{proj.name}</h2>
              <p className="text-xs text-gray-500">{proj.desc}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
