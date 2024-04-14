type City = {
  admin1_code: string;
  admin2_code: string;
  admin3_code: string;
  admin4_code: string;
  alternate_names: string[];
  ascii_name: string;
  coordinates: {
    lon: number;
    lat: number;
  };
  cou_name_en: string;
  country_code: string;
  country_code_2: string | null;
  dem: number;
  elevation: number | null;
  feature_class: string;
  feature_code: string;
  geoname_id: string;
  label_en: string;
  modification_date: string;
  name: string;
  population: number;
  timezone: string;
};
