const getBackgroundColor = (weather: any) => {
  switch (weather) {
    case "Clouds":
      return "  bg-[#234364]";
    case "Rain":
      return "  bg-[#234364]";

    case "Sunny":
      return "  bg-[#234364]";

    case "Clear":
      return "  bg-[#184169]";

    case "Drizzle":
      return "  bg-[#234364]";

    case "Thunderstorm":
      return "  bg-[#234364]";

    case "Snowy":
      return "  bg-[#234364]";

    default:
      return "  bg-[#234364]";
  }
};

export default getBackgroundColor;
