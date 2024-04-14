function CurrentWeatherDetailCardColumn({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 ">
      <p className="font-semibold">{value}</p>
      <p className="text-[#ffffff8c] text-sm">{title}</p>
    </div>
  );
}

export default CurrentWeatherDetailCardColumn;
