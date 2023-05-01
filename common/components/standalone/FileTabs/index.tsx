import FileIcon from "@/ui/FileIcon";

export type Props = {
  files?: File[];
};

export type File = {
  name: string;
  isActive?: boolean;
};

const FileTabs = ({ files }: Props) => {
  if (!files) return <></>;

  return (
    <ol className="flex text-sm">
      {files.map((file, index) => (
        <li
          key={file.name}
          className={`border-r border-r-neutral-700 border-t-blue-400 ${
            file.isActive
              ? "border-t-2 text-white"
              : "bg-neutral-800 text-neutral-400"
          } ${index === files.length - 1 ? "border-r-0" : ""}`}
        >
          <button className="flex items-center gap-2 px-4 py-1">
            <FileIcon filename={file.name} className="w-4 shrink-0" />
            {file.name}
          </button>
        </li>
      ))}
    </ol>
  );
};

export default FileTabs;
