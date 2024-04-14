function setBackgroundColor(weather: any) {
  switch (weather) {
    case "Clouds":
      // returnnn "#234364";
      return "  bg-[#234364]";
    case "Rain":
      return "  bg-[#234364]";
    // returnnn "#234355";
    case "Sunny":
      return "  bg-[#234364]";
    // returnnn "#ffdd33";
    case "Clear":
      return "  bg-[#9badbe]";

    case "Drizzle":
      return "  bg-[#234364]";
    // returnnn "#b0c4de";

    case "Thunderstorm":
      return "  bg-[#234364]";
    // returnnn "#00008b";
    case "Snowy":
      return "  bg-[#234364]";
    // returnnn "#000099";

    default:
      // returnnn "#234364";
      return "  bg-[#234364]";
  }
}

export default setBackgroundColor;
