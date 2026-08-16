export default function IconBubble({ IconImage = null, IconText = null }) {
  return (
    <>
      <div className="flex flex-col gap-2 items-center">
        <div className="bg-slate-100 rounded-full w-16 p-3">
          <img src={IconImage} alt="" />
        </div>
        <div>{IconText}</div>
      </div>
    </>
  );
}
