const cloudImg = "https://a.hecdn.net/img/common/icon/202106d/153.png";
const thunderstormImg =
  "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const rainImg =
  "https://img.freepik.com/free-vector/cloud-with-falling-rain-background_1017-32364.jpg?w=740&t=st=1713101249~exp=1713101849~hmac=141da21220c4751343229dd60f06feb69133383bb0b5f0f0a7c2522b52a1d20d";

const clearSkyImg =
  "https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const sunnyImg =
  "https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg?auto=compress&cs=tinysrgb&w=600";
function setWeatherImage(weather: string) {
  switch (weather) {
    case "Clouds":
      return cloudImg;
    case "Rain":
      return rainImg;

    case "Sunny":
      return sunnyImg;
    case "Clear":
      return clearSkyImg;

    case "Thunderstorm":
      return thunderstormImg;

    default:
      return clearSkyImg;
  }
}

export default setWeatherImage;
