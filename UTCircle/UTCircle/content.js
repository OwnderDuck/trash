// Copyright (c) 2025 OwnderDuck
// SPDX-License-Identifier: MIT
const tzOptionsData = [{"continent":"Africa","zones":[{"label":"Africa/Abidjan (UTC)","value":"Africa/Abidjan"},{"label":"Africa/Accra (UTC)","value":"Africa/Accra"},{"label":"Africa/Addis_Ababa (UTC+3)","value":"Africa/Addis_Ababa"},{"label":"Africa/Algiers (UTC+1)","value":"Africa/Algiers"},{"label":"Africa/Asmera (UTC+3)","value":"Africa/Asmera"},{"label":"Africa/Bamako (UTC)","value":"Africa/Bamako"},{"label":"Africa/Bangui (UTC+1)","value":"Africa/Bangui"},{"label":"Africa/Banjul (UTC)","value":"Africa/Banjul"},{"label":"Africa/Bissau (UTC)","value":"Africa/Bissau"},{"label":"Africa/Blantyre (UTC+2)","value":"Africa/Blantyre"},{"label":"Africa/Brazzaville (UTC+1)","value":"Africa/Brazzaville"},{"label":"Africa/Bujumbura (UTC+2)","value":"Africa/Bujumbura"},{"label":"Africa/Cairo (UTC+3)","value":"Africa/Cairo"},{"label":"Africa/Casablanca (UTC+1)","value":"Africa/Casablanca"},{"label":"Africa/Ceuta (UTC+2)","value":"Africa/Ceuta"},{"label":"Africa/Conakry (UTC)","value":"Africa/Conakry"},{"label":"Africa/Dakar (UTC)","value":"Africa/Dakar"},{"label":"Africa/Dar_es_Salaam (UTC+3)","value":"Africa/Dar_es_Salaam"},{"label":"Africa/Djibouti (UTC+3)","value":"Africa/Djibouti"},{"label":"Africa/Douala (UTC+1)","value":"Africa/Douala"},{"label":"Africa/El_Aaiun (UTC+1)","value":"Africa/El_Aaiun"},{"label":"Africa/Freetown (UTC)","value":"Africa/Freetown"},{"label":"Africa/Gaborone (UTC+2)","value":"Africa/Gaborone"},{"label":"Africa/Harare (UTC+2)","value":"Africa/Harare"},{"label":"Africa/Johannesburg (UTC+2)","value":"Africa/Johannesburg"},{"label":"Africa/Juba (UTC+2)","value":"Africa/Juba"},{"label":"Africa/Kampala (UTC+3)","value":"Africa/Kampala"},{"label":"Africa/Khartoum (UTC+2)","value":"Africa/Khartoum"},{"label":"Africa/Kigali (UTC+2)","value":"Africa/Kigali"},{"label":"Africa/Kinshasa (UTC+1)","value":"Africa/Kinshasa"},{"label":"Africa/Lagos (UTC+1)","value":"Africa/Lagos"},{"label":"Africa/Libreville (UTC+1)","value":"Africa/Libreville"},{"label":"Africa/Lome (UTC)","value":"Africa/Lome"},{"label":"Africa/Luanda (UTC+1)","value":"Africa/Luanda"},{"label":"Africa/Lubumbashi (UTC+2)","value":"Africa/Lubumbashi"},{"label":"Africa/Lusaka (UTC+2)","value":"Africa/Lusaka"},{"label":"Africa/Malabo (UTC+1)","value":"Africa/Malabo"},{"label":"Africa/Maputo (UTC+2)","value":"Africa/Maputo"},{"label":"Africa/Maseru (UTC+2)","value":"Africa/Maseru"},{"label":"Africa/Mbabane (UTC+2)","value":"Africa/Mbabane"},{"label":"Africa/Mogadishu (UTC+3)","value":"Africa/Mogadishu"},{"label":"Africa/Monrovia (UTC)","value":"Africa/Monrovia"},{"label":"Africa/Nairobi (UTC+3)","value":"Africa/Nairobi"},{"label":"Africa/Ndjamena (UTC+1)","value":"Africa/Ndjamena"},{"label":"Africa/Niamey (UTC+1)","value":"Africa/Niamey"},{"label":"Africa/Nouakchott (UTC)","value":"Africa/Nouakchott"},{"label":"Africa/Ouagadougou (UTC)","value":"Africa/Ouagadougou"},{"label":"Africa/Porto-Novo (UTC+1)","value":"Africa/Porto-Novo"},{"label":"Africa/Sao_Tome (UTC)","value":"Africa/Sao_Tome"},{"label":"Africa/Tripoli (UTC+2)","value":"Africa/Tripoli"},{"label":"Africa/Tunis (UTC+1)","value":"Africa/Tunis"},{"label":"Africa/Windhoek (UTC+2)","value":"Africa/Windhoek"}]},{"continent":"America","zones":[{"label":"America/Adak (HADT)","value":"America/Adak"},{"label":"America/Anchorage (AKDT)","value":"America/Anchorage"},{"label":"America/Anguilla (AST)","value":"America/Anguilla"},{"label":"America/Antigua (AST)","value":"America/Antigua"},{"label":"America/Araguaina (UTC-3)","value":"America/Araguaina"},{"label":"America/Argentina/La_Rioja (UTC-3)","value":"America/Argentina/La_Rioja"},{"label":"America/Argentina/Rio_Gallegos (UTC-3)","value":"America/Argentina/Rio_Gallegos"},{"label":"America/Argentina/Salta (UTC-3)","value":"America/Argentina/Salta"},{"label":"America/Argentina/San_Juan (UTC-3)","value":"America/Argentina/San_Juan"},{"label":"America/Argentina/San_Luis (UTC-3)","value":"America/Argentina/San_Luis"},{"label":"America/Argentina/Tucuman (UTC-3)","value":"America/Argentina/Tucuman"},{"label":"America/Argentina/Ushuaia (UTC-3)","value":"America/Argentina/Ushuaia"},{"label":"America/Aruba (AST)","value":"America/Aruba"},{"label":"America/Asuncion (UTC-3)","value":"America/Asuncion"},{"label":"America/Bahia (UTC-3)","value":"America/Bahia"},{"label":"America/Bahia_Banderas (CST)","value":"America/Bahia_Banderas"},{"label":"America/Barbados (AST)","value":"America/Barbados"},{"label":"America/Belem (UTC-3)","value":"America/Belem"},{"label":"America/Belize (CST)","value":"America/Belize"},{"label":"America/Blanc-Sablon (AST)","value":"America/Blanc-Sablon"},{"label":"America/Boa_Vista (UTC-4)","value":"America/Boa_Vista"},{"label":"America/Bogota (UTC-5)","value":"America/Bogota"},{"label":"America/Boise (MDT)","value":"America/Boise"},{"label":"America/Buenos_Aires (UTC-3)","value":"America/Buenos_Aires"},{"label":"America/Cambridge_Bay (MDT)","value":"America/Cambridge_Bay"},{"label":"America/Campo_Grande (UTC-4)","value":"America/Campo_Grande"},{"label":"America/Cancun (EST)","value":"America/Cancun"},{"label":"America/Caracas (UTC-4)","value":"America/Caracas"},{"label":"America/Catamarca (UTC-3)","value":"America/Catamarca"},{"label":"America/Cayenne (UTC-3)","value":"America/Cayenne"},{"label":"America/Cayman (EST)","value":"America/Cayman"},{"label":"America/Chicago (CDT)","value":"America/Chicago"},{"label":"America/Chihuahua (CST)","value":"America/Chihuahua"},{"label":"America/Ciudad_Juarez (MDT)","value":"America/Ciudad_Juarez"},{"label":"America/Coral_Harbour (EST)","value":"America/Coral_Harbour"},{"label":"America/Cordoba (UTC-3)","value":"America/Cordoba"},{"label":"America/Costa_Rica (CST)","value":"America/Costa_Rica"},{"label":"America/Creston (MST)","value":"America/Creston"},{"label":"America/Cuiaba (UTC-4)","value":"America/Cuiaba"},{"label":"America/Curacao (AST)","value":"America/Curacao"},{"label":"America/Danmarkshavn (UTC)","value":"America/Danmarkshavn"},{"label":"America/Dawson (UTC-7)","value":"America/Dawson"},{"label":"America/Dawson_Creek (MST)","value":"America/Dawson_Creek"},{"label":"America/Denver (MDT)","value":"America/Denver"},{"label":"America/Detroit (EDT)","value":"America/Detroit"},{"label":"America/Dominica (AST)","value":"America/Dominica"},{"label":"America/Edmonton (MDT)","value":"America/Edmonton"},{"label":"America/Eirunepe (UTC-5)","value":"America/Eirunepe"},{"label":"America/El_Salvador (CST)","value":"America/El_Salvador"},{"label":"America/Fort_Nelson (MST)","value":"America/Fort_Nelson"},{"label":"America/Fortaleza (UTC-3)","value":"America/Fortaleza"},{"label":"America/Glace_Bay (ADT)","value":"America/Glace_Bay"},{"label":"America/Godthab (UTC-1)","value":"America/Godthab"},{"label":"America/Goose_Bay (ADT)","value":"America/Goose_Bay"},{"label":"America/Grand_Turk (EDT)","value":"America/Grand_Turk"},{"label":"America/Grenada (AST)","value":"America/Grenada"},{"label":"America/Guadeloupe (AST)","value":"America/Guadeloupe"},{"label":"America/Guatemala (CST)","value":"America/Guatemala"},{"label":"America/Guayaquil (UTC-5)","value":"America/Guayaquil"},{"label":"America/Guyana (UTC-4)","value":"America/Guyana"},{"label":"America/Halifax (ADT)","value":"America/Halifax"},{"label":"America/Havana (UTC-4)","value":"America/Havana"},{"label":"America/Hermosillo (UTC-7)","value":"America/Hermosillo"},{"label":"America/Indiana/Knox (CDT)","value":"America/Indiana/Knox"},{"label":"America/Indiana/Marengo (EDT)","value":"America/Indiana/Marengo"},{"label":"America/Indiana/Petersburg (EDT)","value":"America/Indiana/Petersburg"},{"label":"America/Indiana/Tell_City (CDT)","value":"America/Indiana/Tell_City"},{"label":"America/Indiana/Vevay (EDT)","value":"America/Indiana/Vevay"},{"label":"America/Indiana/Vincennes (EDT)","value":"America/Indiana/Vincennes"},{"label":"America/Indiana/Winamac (EDT)","value":"America/Indiana/Winamac"},{"label":"America/Indianapolis (EDT)","value":"America/Indianapolis"},{"label":"America/Inuvik (MDT)","value":"America/Inuvik"},{"label":"America/Iqaluit (EDT)","value":"America/Iqaluit"},{"label":"America/Jamaica (EST)","value":"America/Jamaica"},{"label":"America/Jujuy (UTC-3)","value":"America/Jujuy"},{"label":"America/Juneau (AKDT)","value":"America/Juneau"},{"label":"America/Kentucky/Monticello (EDT)","value":"America/Kentucky/Monticello"},{"label":"America/Kralendijk (AST)","value":"America/Kralendijk"},{"label":"America/La_Paz (UTC-4)","value":"America/La_Paz"},{"label":"America/Lima (UTC-5)","value":"America/Lima"},{"label":"America/Los_Angeles (PDT)","value":"America/Los_Angeles"},{"label":"America/Louisville (EDT)","value":"America/Louisville"},{"label":"America/Lower_Princes (AST)","value":"America/Lower_Princes"},{"label":"America/Maceio (UTC-3)","value":"America/Maceio"},{"label":"America/Managua (CST)","value":"America/Managua"},{"label":"America/Manaus (UTC-4)","value":"America/Manaus"},{"label":"America/Marigot (AST)","value":"America/Marigot"},{"label":"America/Martinique (AST)","value":"America/Martinique"},{"label":"America/Matamoros (CDT)","value":"America/Matamoros"},{"label":"America/Mazatlan (UTC-7)","value":"America/Mazatlan"},{"label":"America/Mendoza (UTC-3)","value":"America/Mendoza"},{"label":"America/Menominee (CDT)","value":"America/Menominee"},{"label":"America/Merida (CST)","value":"America/Merida"},{"label":"America/Metlakatla (AKDT)","value":"America/Metlakatla"},{"label":"America/Mexico_City (CST)","value":"America/Mexico_City"},{"label":"America/Miquelon (UTC-2)","value":"America/Miquelon"},{"label":"America/Moncton (ADT)","value":"America/Moncton"},{"label":"America/Monterrey (CST)","value":"America/Monterrey"},{"label":"America/Montevideo (UTC-3)","value":"America/Montevideo"},{"label":"America/Montserrat (AST)","value":"America/Montserrat"},{"label":"America/Nassau (EDT)","value":"America/Nassau"},{"label":"America/New_York (EDT)","value":"America/New_York"},{"label":"America/Nome (AKDT)","value":"America/Nome"},{"label":"America/Noronha (UTC-2)","value":"America/Noronha"},{"label":"America/North_Dakota/Beulah (CDT)","value":"America/North_Dakota/Beulah"},{"label":"America/North_Dakota/Center (CDT)","value":"America/North_Dakota/Center"},{"label":"America/North_Dakota/New_Salem (CDT)","value":"America/North_Dakota/New_Salem"},{"label":"America/Ojinaga (CDT)","value":"America/Ojinaga"},{"label":"America/Panama (EST)","value":"America/Panama"},{"label":"America/Paramaribo (UTC-3)","value":"America/Paramaribo"},{"label":"America/Phoenix (MST)","value":"America/Phoenix"},{"label":"America/Port-au-Prince (EDT)","value":"America/Port-au-Prince"},{"label":"America/Port_of_Spain (AST)","value":"America/Port_of_Spain"},{"label":"America/Porto_Velho (UTC-4)","value":"America/Porto_Velho"},{"label":"America/Puerto_Rico (AST)","value":"America/Puerto_Rico"},{"label":"America/Punta_Arenas (UTC-3)","value":"America/Punta_Arenas"},{"label":"America/Rankin_Inlet (CDT)","value":"America/Rankin_Inlet"},{"label":"America/Recife (UTC-3)","value":"America/Recife"},{"label":"America/Regina (CST)","value":"America/Regina"},{"label":"America/Resolute (CDT)","value":"America/Resolute"},{"label":"America/Rio_Branco (UTC-5)","value":"America/Rio_Branco"},{"label":"America/Santarem (UTC-3)","value":"America/Santarem"},{"label":"America/Santiago (UTC-4)","value":"America/Santiago"},{"label":"America/Santo_Domingo (AST)","value":"America/Santo_Domingo"},{"label":"America/Sao_Paulo (UTC-3)","value":"America/Sao_Paulo"},{"label":"America/Scoresbysund (UTC-1)","value":"America/Scoresbysund"},{"label":"America/Sitka (AKDT)","value":"America/Sitka"},{"label":"America/St_Barthelemy (AST)","value":"America/St_Barthelemy"},{"label":"America/St_Johns (UTC-2:30)","value":"America/St_Johns"},{"label":"America/St_Kitts (AST)","value":"America/St_Kitts"},{"label":"America/St_Lucia (AST)","value":"America/St_Lucia"},{"label":"America/St_Thomas (AST)","value":"America/St_Thomas"},{"label":"America/St_Vincent (AST)","value":"America/St_Vincent"},{"label":"America/Swift_Current (CST)","value":"America/Swift_Current"},{"label":"America/Tegucigalpa (CST)","value":"America/Tegucigalpa"},{"label":"America/Thule (ADT)","value":"America/Thule"},{"label":"America/Tijuana (PDT)","value":"America/Tijuana"},{"label":"America/Toronto (EDT)","value":"America/Toronto"},{"label":"America/Tortola (AST)","value":"America/Tortola"},{"label":"America/Vancouver (PDT)","value":"America/Vancouver"},{"label":"America/Whitehorse (UTC-7)","value":"America/Whitehorse"},{"label":"America/Winnipeg (CDT)","value":"America/Winnipeg"},{"label":"America/Yakutat (AKDT)","value":"America/Yakutat"}]},{"continent":"Antarctica","zones":[{"label":"Antarctica/Casey (UTC+8)","value":"Antarctica/Casey"},{"label":"Antarctica/Davis (UTC+7)","value":"Antarctica/Davis"},{"label":"Antarctica/DumontDUrville (UTC+10)","value":"Antarctica/DumontDUrville"},{"label":"Antarctica/Macquarie (UTC+10)","value":"Antarctica/Macquarie"},{"label":"Antarctica/Mawson (UTC+5)","value":"Antarctica/Mawson"},{"label":"Antarctica/McMurdo (UTC+12)","value":"Antarctica/McMurdo"},{"label":"Antarctica/Palmer (UTC-3)","value":"Antarctica/Palmer"},{"label":"Antarctica/Rothera (UTC-3)","value":"Antarctica/Rothera"},{"label":"Antarctica/Syowa (UTC+3)","value":"Antarctica/Syowa"},{"label":"Antarctica/Troll (UTC+2)","value":"Antarctica/Troll"},{"label":"Antarctica/Vostok (UTC+5)","value":"Antarctica/Vostok"}]},{"continent":"Arctic","zones":[{"label":"Arctic/Longyearbyen (UTC+2)","value":"Arctic/Longyearbyen"}]},{"continent":"Asia","zones":[{"label":"Asia/Aden (UTC+3)","value":"Asia/Aden"},{"label":"Asia/Almaty (UTC+5)","value":"Asia/Almaty"},{"label":"Asia/Amman (UTC+3)","value":"Asia/Amman"},{"label":"Asia/Anadyr (UTC+12)","value":"Asia/Anadyr"},{"label":"Asia/Aqtau (UTC+5)","value":"Asia/Aqtau"},{"label":"Asia/Aqtobe (UTC+5)","value":"Asia/Aqtobe"},{"label":"Asia/Ashgabat (UTC+5)","value":"Asia/Ashgabat"},{"label":"Asia/Atyrau (UTC+5)","value":"Asia/Atyrau"},{"label":"Asia/Baghdad (UTC+3)","value":"Asia/Baghdad"},{"label":"Asia/Bahrain (UTC+3)","value":"Asia/Bahrain"},{"label":"Asia/Baku (UTC+4)","value":"Asia/Baku"},{"label":"Asia/Bangkok (UTC+7)","value":"Asia/Bangkok"},{"label":"Asia/Barnaul (UTC+7)","value":"Asia/Barnaul"},{"label":"Asia/Beirut (UTC+3)","value":"Asia/Beirut"},{"label":"Asia/Bishkek (UTC+6)","value":"Asia/Bishkek"},{"label":"Asia/Brunei (UTC+8)","value":"Asia/Brunei"},{"label":"Asia/Calcutta (UTC+5:30)","value":"Asia/Calcutta"},{"label":"Asia/Chita (UTC+9)","value":"Asia/Chita"},{"label":"Asia/Colombo (UTC+5:30)","value":"Asia/Colombo"},{"label":"Asia/Damascus (UTC+3)","value":"Asia/Damascus"},{"label":"Asia/Dhaka (UTC+6)","value":"Asia/Dhaka"},{"label":"Asia/Dili (UTC+9)","value":"Asia/Dili"},{"label":"Asia/Dubai (UTC+4)","value":"Asia/Dubai"},{"label":"Asia/Dushanbe (UTC+5)","value":"Asia/Dushanbe"},{"label":"Asia/Famagusta (UTC+3)","value":"Asia/Famagusta"},{"label":"Asia/Gaza (UTC+3)","value":"Asia/Gaza"},{"label":"Asia/Hebron (UTC+3)","value":"Asia/Hebron"},{"label":"Asia/Hong_Kong (UTC+8)","value":"Asia/Hong_Kong"},{"label":"Asia/Hovd (UTC+7)","value":"Asia/Hovd"},{"label":"Asia/Irkutsk (UTC+8)","value":"Asia/Irkutsk"},{"label":"Asia/Jakarta (UTC+7)","value":"Asia/Jakarta"},{"label":"Asia/Jayapura (UTC+9)","value":"Asia/Jayapura"},{"label":"Asia/Jerusalem (UTC+3)","value":"Asia/Jerusalem"},{"label":"Asia/Kabul (UTC+4:30)","value":"Asia/Kabul"},{"label":"Asia/Kamchatka (UTC+12)","value":"Asia/Kamchatka"},{"label":"Asia/Karachi (UTC+5)","value":"Asia/Karachi"},{"label":"Asia/Katmandu (UTC+5:45)","value":"Asia/Katmandu"},{"label":"Asia/Khandyga (UTC+9)","value":"Asia/Khandyga"},{"label":"Asia/Krasnoyarsk (UTC+7)","value":"Asia/Krasnoyarsk"},{"label":"Asia/Kuala_Lumpur (UTC+8)","value":"Asia/Kuala_Lumpur"},{"label":"Asia/Kuching (UTC+8)","value":"Asia/Kuching"},{"label":"Asia/Kuwait (UTC+3)","value":"Asia/Kuwait"},{"label":"Asia/Macau (UTC+8)","value":"Asia/Macau"},{"label":"Asia/Magadan (UTC+11)","value":"Asia/Magadan"},{"label":"Asia/Makassar (UTC+8)","value":"Asia/Makassar"},{"label":"Asia/Manila (UTC+8)","value":"Asia/Manila"},{"label":"Asia/Muscat (UTC+4)","value":"Asia/Muscat"},{"label":"Asia/Nicosia (UTC+3)","value":"Asia/Nicosia"},{"label":"Asia/Novokuznetsk (UTC+7)","value":"Asia/Novokuznetsk"},{"label":"Asia/Novosibirsk (UTC+7)","value":"Asia/Novosibirsk"},{"label":"Asia/Omsk (UTC+6)","value":"Asia/Omsk"},{"label":"Asia/Oral (UTC+5)","value":"Asia/Oral"},{"label":"Asia/Phnom_Penh (UTC+7)","value":"Asia/Phnom_Penh"},{"label":"Asia/Pontianak (UTC+7)","value":"Asia/Pontianak"},{"label":"Asia/Pyongyang (UTC+9)","value":"Asia/Pyongyang"},{"label":"Asia/Qatar (UTC+3)","value":"Asia/Qatar"},{"label":"Asia/Qostanay (UTC+5)","value":"Asia/Qostanay"},{"label":"Asia/Qyzylorda (UTC+5)","value":"Asia/Qyzylorda"},{"label":"Asia/Rangoon (UTC+6:30)","value":"Asia/Rangoon"},{"label":"Asia/Riyadh (UTC+3)","value":"Asia/Riyadh"},{"label":"Asia/Saigon (UTC+7)","value":"Asia/Saigon"},{"label":"Asia/Sakhalin (UTC+11)","value":"Asia/Sakhalin"},{"label":"Asia/Samarkand (UTC+5)","value":"Asia/Samarkand"},{"label":"Asia/Seoul (UTC+9)","value":"Asia/Seoul"},{"label":"Asia/Shanghai (UTC+8)","value":"Asia/Shanghai"},{"label":"Asia/Singapore (UTC+8)","value":"Asia/Singapore"},{"label":"Asia/Srednekolymsk (UTC+11)","value":"Asia/Srednekolymsk"},{"label":"Asia/Taipei (UTC+8)","value":"Asia/Taipei"},{"label":"Asia/Tashkent (UTC+5)","value":"Asia/Tashkent"},{"label":"Asia/Tbilisi (UTC+4)","value":"Asia/Tbilisi"},{"label":"Asia/Tehran (UTC+3:30)","value":"Asia/Tehran"},{"label":"Asia/Thimphu (UTC+6)","value":"Asia/Thimphu"},{"label":"Asia/Tokyo (UTC+9)","value":"Asia/Tokyo"},{"label":"Asia/Tomsk (UTC+7)","value":"Asia/Tomsk"},{"label":"Asia/Ulaanbaatar (UTC+8)","value":"Asia/Ulaanbaatar"},{"label":"Asia/Urumqi (UTC+6)","value":"Asia/Urumqi"},{"label":"Asia/Ust-Nera (UTC+10)","value":"Asia/Ust-Nera"},{"label":"Asia/Vientiane (UTC+7)","value":"Asia/Vientiane"},{"label":"Asia/Vladivostok (UTC+10)","value":"Asia/Vladivostok"},{"label":"Asia/Yakutsk (UTC+9)","value":"Asia/Yakutsk"},{"label":"Asia/Yekaterinburg (UTC+5)","value":"Asia/Yekaterinburg"},{"label":"Asia/Yerevan (UTC+4)","value":"Asia/Yerevan"}]},{"continent":"Atlantic","zones":[{"label":"Atlantic/Azores (UTC)","value":"Atlantic/Azores"},{"label":"Atlantic/Bermuda (ADT)","value":"Atlantic/Bermuda"},{"label":"Atlantic/Canary (UTC+1)","value":"Atlantic/Canary"},{"label":"Atlantic/Cape_Verde (UTC-1)","value":"Atlantic/Cape_Verde"},{"label":"Atlantic/Faeroe (UTC+1)","value":"Atlantic/Faeroe"},{"label":"Atlantic/Madeira (UTC+1)","value":"Atlantic/Madeira"},{"label":"Atlantic/Reykjavik (UTC)","value":"Atlantic/Reykjavik"},{"label":"Atlantic/South_Georgia (UTC-2)","value":"Atlantic/South_Georgia"},{"label":"Atlantic/St_Helena (UTC)","value":"Atlantic/St_Helena"},{"label":"Atlantic/Stanley (UTC-3)","value":"Atlantic/Stanley"}]},{"continent":"Australia","zones":[{"label":"Australia/Adelaide (UTC+9:30)","value":"Australia/Adelaide"},{"label":"Australia/Brisbane (UTC+10)","value":"Australia/Brisbane"},{"label":"Australia/Broken_Hill (UTC+9:30)","value":"Australia/Broken_Hill"},{"label":"Australia/Darwin (UTC+9:30)","value":"Australia/Darwin"},{"label":"Australia/Eucla (UTC+8:45)","value":"Australia/Eucla"},{"label":"Australia/Hobart (UTC+10)","value":"Australia/Hobart"},{"label":"Australia/Lindeman (UTC+10)","value":"Australia/Lindeman"},{"label":"Australia/Lord_Howe (UTC+10:30)","value":"Australia/Lord_Howe"},{"label":"Australia/Melbourne (UTC+10)","value":"Australia/Melbourne"},{"label":"Australia/Perth (UTC+8)","value":"Australia/Perth"},{"label":"Australia/Sydney (UTC+10)","value":"Australia/Sydney"}]},{"continent":"Europe","zones":[{"label":"Europe/Amsterdam (UTC+2)","value":"Europe/Amsterdam"},{"label":"Europe/Andorra (UTC+2)","value":"Europe/Andorra"},{"label":"Europe/Astrakhan (UTC+4)","value":"Europe/Astrakhan"},{"label":"Europe/Athens (UTC+3)","value":"Europe/Athens"},{"label":"Europe/Belgrade (UTC+2)","value":"Europe/Belgrade"},{"label":"Europe/Berlin (UTC+2)","value":"Europe/Berlin"},{"label":"Europe/Bratislava (UTC+2)","value":"Europe/Bratislava"},{"label":"Europe/Brussels (UTC+2)","value":"Europe/Brussels"},{"label":"Europe/Bucharest (UTC+3)","value":"Europe/Bucharest"},{"label":"Europe/Budapest (UTC+2)","value":"Europe/Budapest"},{"label":"Europe/Busingen (UTC+2)","value":"Europe/Busingen"},{"label":"Europe/Chisinau (UTC+3)","value":"Europe/Chisinau"},{"label":"Europe/Copenhagen (UTC+2)","value":"Europe/Copenhagen"},{"label":"Europe/Dublin (UTC+1)","value":"Europe/Dublin"},{"label":"Europe/Gibraltar (UTC+2)","value":"Europe/Gibraltar"},{"label":"Europe/Guernsey (UTC+1)","value":"Europe/Guernsey"},{"label":"Europe/Helsinki (UTC+3)","value":"Europe/Helsinki"},{"label":"Europe/Isle_of_Man (UTC+1)","value":"Europe/Isle_of_Man"},{"label":"Europe/Istanbul (UTC+3)","value":"Europe/Istanbul"},{"label":"Europe/Jersey (UTC+1)","value":"Europe/Jersey"},{"label":"Europe/Kaliningrad (UTC+2)","value":"Europe/Kaliningrad"},{"label":"Europe/Kiev (UTC+3)","value":"Europe/Kiev"},{"label":"Europe/Kirov (UTC+3)","value":"Europe/Kirov"},{"label":"Europe/Lisbon (UTC+1)","value":"Europe/Lisbon"},{"label":"Europe/Ljubljana (UTC+2)","value":"Europe/Ljubljana"},{"label":"Europe/London (UTC+1)","value":"Europe/London"},{"label":"Europe/Luxembourg (UTC+2)","value":"Europe/Luxembourg"},{"label":"Europe/Madrid (UTC+2)","value":"Europe/Madrid"},{"label":"Europe/Malta (UTC+2)","value":"Europe/Malta"},{"label":"Europe/Mariehamn (UTC+3)","value":"Europe/Mariehamn"},{"label":"Europe/Minsk (UTC+3)","value":"Europe/Minsk"},{"label":"Europe/Monaco (UTC+2)","value":"Europe/Monaco"},{"label":"Europe/Moscow (UTC+3)","value":"Europe/Moscow"},{"label":"Europe/Oslo (UTC+2)","value":"Europe/Oslo"},{"label":"Europe/Paris (UTC+2)","value":"Europe/Paris"},{"label":"Europe/Podgorica (UTC+2)","value":"Europe/Podgorica"},{"label":"Europe/Prague (UTC+2)","value":"Europe/Prague"},{"label":"Europe/Riga (UTC+3)","value":"Europe/Riga"},{"label":"Europe/Rome (UTC+2)","value":"Europe/Rome"},{"label":"Europe/Samara (UTC+4)","value":"Europe/Samara"},{"label":"Europe/San_Marino (UTC+2)","value":"Europe/San_Marino"},{"label":"Europe/Sarajevo (UTC+2)","value":"Europe/Sarajevo"},{"label":"Europe/Saratov (UTC+4)","value":"Europe/Saratov"},{"label":"Europe/Simferopol (UTC+3)","value":"Europe/Simferopol"},{"label":"Europe/Skopje (UTC+2)","value":"Europe/Skopje"},{"label":"Europe/Sofia (UTC+3)","value":"Europe/Sofia"},{"label":"Europe/Stockholm (UTC+2)","value":"Europe/Stockholm"},{"label":"Europe/Tallinn (UTC+3)","value":"Europe/Tallinn"},{"label":"Europe/Tirane (UTC+2)","value":"Europe/Tirane"},{"label":"Europe/Ulyanovsk (UTC+4)","value":"Europe/Ulyanovsk"},{"label":"Europe/Vaduz (UTC+2)","value":"Europe/Vaduz"},{"label":"Europe/Vatican (UTC+2)","value":"Europe/Vatican"},{"label":"Europe/Vienna (UTC+2)","value":"Europe/Vienna"},{"label":"Europe/Vilnius (UTC+3)","value":"Europe/Vilnius"},{"label":"Europe/Volgograd (UTC+3)","value":"Europe/Volgograd"},{"label":"Europe/Warsaw (UTC+2)","value":"Europe/Warsaw"},{"label":"Europe/Zagreb (UTC+2)","value":"Europe/Zagreb"},{"label":"Europe/Zurich (UTC+2)","value":"Europe/Zurich"}]},{"continent":"Indian","zones":[{"label":"Indian/Antananarivo (UTC+3)","value":"Indian/Antananarivo"},{"label":"Indian/Chagos (UTC+6)","value":"Indian/Chagos"},{"label":"Indian/Christmas (UTC+7)","value":"Indian/Christmas"},{"label":"Indian/Cocos (UTC+6:30)","value":"Indian/Cocos"},{"label":"Indian/Comoro (UTC+3)","value":"Indian/Comoro"},{"label":"Indian/Kerguelen (UTC+5)","value":"Indian/Kerguelen"},{"label":"Indian/Mahe (UTC+4)","value":"Indian/Mahe"},{"label":"Indian/Maldives (UTC+5)","value":"Indian/Maldives"},{"label":"Indian/Mauritius (UTC+4)","value":"Indian/Mauritius"},{"label":"Indian/Mayotte (UTC+3)","value":"Indian/Mayotte"},{"label":"Indian/Reunion (UTC+4)","value":"Indian/Reunion"}]},{"continent":"Pacific","zones":[{"label":"Pacific/Apia (UTC+13)","value":"Pacific/Apia"},{"label":"Pacific/Auckland (UTC+12)","value":"Pacific/Auckland"},{"label":"Pacific/Bougainville (UTC+11)","value":"Pacific/Bougainville"},{"label":"Pacific/Chatham (UTC+12:45)","value":"Pacific/Chatham"},{"label":"Pacific/Easter (UTC-6)","value":"Pacific/Easter"},{"label":"Pacific/Efate (UTC+11)","value":"Pacific/Efate"},{"label":"Pacific/Enderbury (UTC+13)","value":"Pacific/Enderbury"},{"label":"Pacific/Fakaofo (UTC+13)","value":"Pacific/Fakaofo"},{"label":"Pacific/Fiji (UTC+12)","value":"Pacific/Fiji"},{"label":"Pacific/Funafuti (UTC+12)","value":"Pacific/Funafuti"},{"label":"Pacific/Galapagos (UTC-6)","value":"Pacific/Galapagos"},{"label":"Pacific/Gambier (UTC-9)","value":"Pacific/Gambier"},{"label":"Pacific/Guadalcanal (UTC+11)","value":"Pacific/Guadalcanal"},{"label":"Pacific/Guam (UTC+10)","value":"Pacific/Guam"},{"label":"Pacific/Honolulu (HST)","value":"Pacific/Honolulu"},{"label":"Pacific/Kiritimati (UTC+14)","value":"Pacific/Kiritimati"},{"label":"Pacific/Kosrae (UTC+11)","value":"Pacific/Kosrae"},{"label":"Pacific/Kwajalein (UTC+12)","value":"Pacific/Kwajalein"},{"label":"Pacific/Majuro (UTC+12)","value":"Pacific/Majuro"},{"label":"Pacific/Marquesas (UTC-9:30)","value":"Pacific/Marquesas"},{"label":"Pacific/Midway (UTC-11)","value":"Pacific/Midway"},{"label":"Pacific/Nauru (UTC+12)","value":"Pacific/Nauru"},{"label":"Pacific/Niue (UTC-11)","value":"Pacific/Niue"},{"label":"Pacific/Norfolk (UTC+11)","value":"Pacific/Norfolk"},{"label":"Pacific/Noumea (UTC+11)","value":"Pacific/Noumea"},{"label":"Pacific/Pago_Pago (UTC-11)","value":"Pacific/Pago_Pago"},{"label":"Pacific/Palau (UTC+9)","value":"Pacific/Palau"},{"label":"Pacific/Pitcairn (UTC-8)","value":"Pacific/Pitcairn"},{"label":"Pacific/Ponape (UTC+11)","value":"Pacific/Ponape"},{"label":"Pacific/Port_Moresby (UTC+10)","value":"Pacific/Port_Moresby"},{"label":"Pacific/Rarotonga (UTC-10)","value":"Pacific/Rarotonga"},{"label":"Pacific/Saipan (UTC+10)","value":"Pacific/Saipan"},{"label":"Pacific/Tahiti (UTC-10)","value":"Pacific/Tahiti"},{"label":"Pacific/Tarawa (UTC+12)","value":"Pacific/Tarawa"},{"label":"Pacific/Tongatapu (UTC+13)","value":"Pacific/Tongatapu"},{"label":"Pacific/Truk (UTC+10)","value":"Pacific/Truk"},{"label":"Pacific/Wake (UTC+12)","value":"Pacific/Wake"},{"label":"Pacific/Wallis (UTC+12)","value":"Pacific/Wallis"}]}]

// 异步加载 tzOptions.json
function loadTzOptions() {
	return Promise.resolve(tzOptionsData);
}


// 渲染时区下拉框
function fillTzSelect(select, data) {
	select.innerHTML = '';

	const placeholder = document.createElement('option');
	placeholder.value = '';
	placeholder.textContent = 'Select Timezone';
	select.appendChild(placeholder);

	data.forEach(group => {
		const og = document.createElement('optgroup');
		og.label = group.continent;
		group.zones.forEach(z => {
			const opt = document.createElement('option');
			opt.value = z.value;
			opt.textContent = z.label;
			og.appendChild(opt);
		});
		select.appendChild(og);
	});

}

// =====================
// 配置：联系人列表（IANA 时区）
// =====================
const defaultContacts = [

];
const bc = new BroadcastChannel('tz_sync');

// 接收来自其他标签页的更新
bc.onmessage = (event) => {
	const {
		type,
		payload
	} = event.data;
	if(type === 'updateContacts') {
		contacts = payload;
		localStorage.setItem('tz_contacts', JSON.stringify(contacts));
		if(menuEl) {
			menuEl.remove();
			createContactMenu();
		}
		updateClock();
		updateMenuTimes();
	}
	if(type === 'updatePosition') {
		localStorage.setItem('clock_position', JSON.stringify(payload));
		// 直接应用到界面
		clock.style.left = `${payload.left}px`;
		clock.style.top = `${payload.top}px`;
		clock.style.width = `${payload.width}px`;
		clock.style.height = `${payload.height}px`;
		updateClock();
	}
};

let contacts = JSON.parse(localStorage.getItem('tz_contacts') || 'null') || defaultContacts;

function saveContacts() {
	localStorage.setItem('tz_contacts', JSON.stringify(contacts));
	bc.postMessage({
		type: 'updateContacts',
		payload: contacts
	}); // 🔔 通知其他标签页
}

function isValidTimeZone(tz) {
	try {
		new Intl.DateTimeFormat('en-US', {
				timeZone: tz
			})
			.format();
		return true;
	} catch {
		return false;
	}
}


// =====================
// 工具函数
// =====================
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// 使用 Intl 获取某时区当前时间的分解字段
function getZonedParts(now, timeZone) {
	// 先处理自定义 UTC±X 偏移
	if(timeZone === 'UTC') {
		const d = new Date(now.getTime());
		return {
			year: d.getUTCFullYear(),
			month: d.getUTCMonth() + 1,
			day: d.getUTCDate(),
			hour: d.getUTCHours(),
			minute: d.getUTCMinutes(),
			second: d.getUTCSeconds(),
			weekdayShort: weekdayNames[d.getUTCDay()]
		};
	}

	if(timeZone.startsWith('UTC')) {
		const offset = parseFloat(timeZone.substring(3));
		const utc = now.getTime() + offset * 60 * 60 * 1000;
		const d = new Date(utc);
		return {
			year: d.getUTCFullYear(),
			month: d.getUTCMonth() + 1,
			day: d.getUTCDate(),
			hour: d.getUTCHours(),
			minute: d.getUTCMinutes(),
			second: d.getUTCSeconds(),
			weekdayShort: weekdayNames[d.getUTCDay()]
		};
	}

	// 否则按原来的 IANA 时区处理
	const dtf = new Intl.DateTimeFormat('en-US', {
		timeZone,
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
		weekday: 'short'
	});
	const parts = Object.fromEntries(dtf.formatToParts(now)
		.map(p => [p.type, p.value]));
	return {
		year: Number(parts.year),
		month: Number(parts.month), // 1-12
		day: Number(parts.day),
		hour: Number(parts.hour),
		minute: Number(parts.minute),
		second: Number(parts.second),
		weekdayShort: parts.weekday // 'Mon'...
	};
}

// 计算“本地日历日”与“目标时区日历日”的相差天数（本地 - 目标）
function dayDiffLocalMinusZone(localNow, zoneParts) {
	const localY = localNow.getFullYear();
	const localM = localNow.getMonth() + 1; // 1-12
	const localD = localNow.getDate();
	const utcLocalMid = Date.UTC(localY, localM - 1, localD);
	const utcZoneMid = Date.UTC(zoneParts.year, zoneParts.month - 1, zoneParts.day);
	const diffDays = Math.round((utcLocalMid - utcZoneMid) / 86400000);
	return diffDays; // >0 表示本地日期比对方“更晚一天”
}

function pad(n) {
	return n.toString()
		.padStart(2, '0');
}

// =====================
// 主时钟（可显示 UTC 或某联系人时区）
// =====================
let currentMode = {
	type: 'UTC'
}; // 或 { type: 'TZ', label: 'Tom (New York)', timeZone: 'America/New_York' }

const clock = document.createElement('div');
clock.id = 'utc-clock';
Object.assign(clock.style, {
	position: 'fixed',
	left: '24px',
	top: '24px',
	width: '360px',
	height: '120px',
	color: '#fff',
	borderRadius: '12px',
	padding: '12px 16px',
	boxSizing: 'border-box',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'flex-start',
	fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
	cursor: 'grab',
	userSelect: 'none',
	zIndex: 9999
});
document.body.appendChild(clock);
const savedPos = JSON.parse(localStorage.getItem('clock_position'));
if(savedPos) {
	if(typeof savedPos.left === 'number') clock.style.left = `${savedPos.left}px`;
	if(typeof savedPos.top === 'number') clock.style.top = `${savedPos.top}px`;
	if(typeof savedPos.width === 'number') clock.style.width = `${savedPos.width}px`;
	if(typeof savedPos.height === 'number') clock.style.height = `${savedPos.height}px`;
}


// 标题（显示“UTC”或“联系人名（城市）”）
const titleDiv = document.createElement('div');
titleDiv.id = 'clock-title';
titleDiv.style.fontSize = '0.9em';
titleDiv.style.opacity = '0.9';
titleDiv.style.marginBottom = '4px';
clock.appendChild(titleDiv);

// 大时间
const timeDiv = document.createElement('div');
timeDiv.id = 'clock-time';
timeDiv.style.lineHeight = '1';
clock.appendChild(timeDiv);

// 日期
const dateDiv = document.createElement('div');
dateDiv.id = 'utc-date';
dateDiv.style.fontSize = '0.8em';
dateDiv.style.marginTop = '2px';
dateDiv.style.opacity = '0.9';
clock.appendChild(dateDiv);

// 双击恢复 UTC
clock.addEventListener('dblclick', () => {
	currentMode = {
		type: 'UTC'
	};
	updateClock();
});

// 字号自适应
function autoResizeFont() {
	const clockHeight = clock.clientHeight;
	const clockWidth = clock.clientWidth;
	const sizeByHeight = clockHeight * 0.40;
	const sizeByWidth = clockWidth / 8; // 约等于 8 个字符宽
	const fontSize = Math.min(sizeByHeight, sizeByWidth);
	timeDiv.style.fontSize = fontSize + 'px';
}
new ResizeObserver(() => {
		const rect = clock.getBoundingClientRect();
		const saved = JSON.parse(localStorage.getItem('clock_position')) || {};
		saved.width = rect.width;
		saved.height = rect.height;
		localStorage.setItem('clock_position', JSON.stringify(saved));
	})
	.observe(clock);


// 拖拽（保留你的原始逻辑）
let isDragging = false,
	offsetX, offsetY;
clock.addEventListener('mousedown', (e) => {
	const inResizeZone = e.offsetX > clock.clientWidth - 16 && e.offsetY > clock.clientHeight - 16;
	if(inResizeZone) return;
	e.preventDefault();
	isDragging = true;
	const rect = clock.getBoundingClientRect();
	offsetX = e.clientX - rect.left;
	offsetY = e.clientY - rect.top;
	clock.style.cursor = 'grabbing';
});
document.addEventListener('mousemove', (e) => {
	if(isDragging) {
		const left = e.clientX - offsetX;
		const top = e.clientY - offsetY;
		clock.style.left = `${left}px`;
		clock.style.top = `${top}px`;
		clock.style.right = 'auto';
		clock.style.bottom = 'auto';

		// ✅ 保存位置和大小
		const width = clock.offsetWidth;
		const height = clock.offsetHeight;
		const posData = {
			left,
			top,
			width,
			height
		};
		localStorage.setItem('clock_position', JSON.stringify(posData));
		bc.postMessage({
			type: 'updatePosition',
			payload: posData
		});


		const rect = clock.getBoundingClientRect();
		if(menuEl) {
			menuEl.style.left = `${rect.right + 10}px`;
			menuEl.style.top = `${rect.top}px`;
		}
	}
});


document.addEventListener('mouseup', () => {
	isDragging = false;
	clock.style.cursor = 'grab';
});

// 核心更新：根据 currentMode 渲染主时钟
function updateClock() {
	const nowLocal = new Date();
	let label = 'UTC';
	let zone = 'UTC';

	if(currentMode.type === 'TZ') {
		label = currentMode.label;
		zone = currentMode.timeZone;
	}

	const zp = getZonedParts(nowLocal, zone);

	// Time
	const hh = pad(zp.hour),
		mm = pad(zp.minute),
		ss = pad(zp.second);
	timeDiv.textContent = `${hh}:${mm}:${ss}`;

	// Title
	titleDiv.textContent = label;

	// Date line
	const monthName = monthNames[zp.month - 1];
	const weekday = zp.weekdayShort; // 'Mon'...
	const diffDays = dayDiffLocalMinusZone(nowLocal, zp);

	if(diffDays === 0) {
		dateDiv.textContent = `${monthName} ${zp.day} (${weekday})`;
	} else {
		const sign = diffDays > 0 ? '-' : '+';
		const abs = Math.abs(diffDays);
		const dayLabel = abs === 1 ? 'day' : 'days';
		dateDiv.textContent = `${monthName} ${zp.day} (${weekday}, ${sign}${abs} ${dayLabel})`;
	}

	autoResizeFont();
}

// =====================
// 联系人菜单（右上角）
// =====================
const menu = document.createElement('div');
menu.id = 'contact-menu';
Object.assign(menu.style, {
	position: 'fixed',
	right: '20px',
	top: '20px',
	width: '240px',
	maxHeight: '60vh',
	overflowY: 'auto',
	color: '#fff',
	padding: '10px',
	borderRadius: '10px',
	fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
	zIndex: 10000,
});
//document.body.appendChild(menu);

// 菜单标题与“恢复 UTC”项
const header = document.createElement('div');
header.style.display = 'flex';
header.style.alignItems = 'center';
header.style.justifyContent = 'space-between';
header.style.marginBottom = '8px';
header.innerHTML = '<strong>Contacts</strong>';
menu.appendChild(header);
const utcItem = document.createElement('div');
utcItem.textContent = 'UTC';
utcItem.style.padding = '6px 8px';
utcItem.style.borderRadius = '6px';
utcItem.style.cursor = 'pointer';
utcItem.style.background = 'rgba(255,255,255,0.08)';
utcItem.addEventListener('click', () => {
	currentMode = {
		type: 'UTC'
	};
	updateClock();
});
menu.appendChild(utcItem);

// 联系人列表容器
const list = document.createElement('div');
menu.appendChild(list);

// 渲染联系人行
const rowRefs = []; // { timeEl, diffEl, rowEl, contact }
list.innerHTML = ''; // 每次重新清空列表
contacts.forEach(contact => {
	const row = document.createElement('div');
	row.style.display = 'flex';
	row.style.alignItems = 'baseline';
	row.style.justifyContent = 'space-between';
	row.style.padding = '6px 8px';
	row.style.borderRadius = '6px';
	row.style.cursor = 'pointer';
	row.style.gap = '10px';

	row.addEventListener('mouseenter', () => row.style.background = 'rgba(255,255,255,0.06)');
	row.addEventListener('mouseleave', () => row.style.background = 'transparent');
	row.addEventListener('click', () => {
		currentMode = {
			type: 'TZ',
			label: `${contact.name} (${contact.city})`,
			timeZone: contact.timeZone
		};
		updateClock();
	});

	const left = document.createElement('div');
	left.style.display = 'flex';
	left.style.flexDirection = 'column';
	left.style.gap = '2px';
	left.style.flex = '1 1 auto';
	left.innerHTML = `<div style="font-weight:600">${contact.name}</div><div style="opacity:0.85;font-size:12px">${contact.city}</div>`;

	const right = document.createElement('div');
	right.style.display = 'flex';
	right.style.flexDirection = 'column';
	right.style.alignItems = 'flex-end';
	const timeEl = document.createElement('div');
	timeEl.style.fontVariantNumeric = 'tabular-nums';
	const diffEl = document.createElement('div');
	diffEl.style.opacity = '0.7';
	diffEl.style.fontSize = '12px';

	right.appendChild(timeEl);
	right.appendChild(diffEl);
	row.appendChild(left);
	row.appendChild(right);
	list.appendChild(row);

	rowRefs.push({
		timeEl,
		diffEl,
		rowEl: row,
		contact
	});
});

// 更新联系人时间显示
function updateMenuTimes() {
	const nowLocal = new Date();
	rowRefs.forEach(({
		timeEl,
		diffEl,
		contact
	}) => {
		const zp = getZonedParts(nowLocal, contact.timeZone);
		const hhmm = `${pad(zp.hour)}:${pad(zp.minute)}`;
		timeEl.textContent = hhmm;

		const d = dayDiffLocalMinusZone(nowLocal, zp);
		if(d === 0) {
			diffEl.textContent = ''; // 同一天不显示
		} else {
			const sign = d > 0 ? '+' : '-';
			const abs = Math.abs(d);
			const dayLabel = abs === 1 ? 'day' : 'days';
			diffEl.textContent = `${sign}${abs} ${dayLabel}`;
		}
	});
}

// =====================
// 启动定时刷新
// =====================
function tick() {
	updateClock();
	updateMenuTimes();
}
tick();
setInterval(tick, 1000);
// =====================
// 菜单开关按钮
// =====================
const toggleBtn = document.createElement('button');
toggleBtn.id = 'toggle-btn';
toggleBtn.textContent = '🕑';
Object.assign(toggleBtn.style, {
	position: 'absolute',
	top: '6px',
	right: '6px',
	padding: '2px 6px',
	borderRadius: '6px',
	border: 'none',
	background: '#4A90E2',
	color: '#fff',
	fontSize: '14px',
	cursor: 'pointer',
	zIndex: 10001
});
clock.appendChild(toggleBtn);


let menuVisible = false;
let menuEl = null;

toggleBtn.addEventListener('click', () => {
	if(!menuVisible) {
		createContactMenu();
		menuVisible = true;
	} else {
		if(menuEl) {
			menuEl.remove();
			menuEl = null; // ✅ 清除引用
		}
		menuVisible = false;
	}
});


// =====================
// 联系人菜单创建函数
// =====================
function createContactMenu() {
	if(menuEl) return; // 如果菜单已存在，则不重复创建

	menuEl = document.createElement('div');
	menuEl.id = 'contact-menu';
	Object.assign(menuEl.style, {
		position: 'fixed',
		right: '20px',
		top: '60px',
		width: '240px',
		maxHeight: '60vh',
		overflowY: 'auto',
		color: '#fff',
		padding: '10px',
		borderRadius: '10px',
		fontFamily: 'sans-serif',
		zIndex: 10000,
	});
	document.body.appendChild(menuEl);

	const header = document.createElement('div');
	header.style.display = 'flex';
	header.style.justifyContent = 'space-between';
	header.style.alignItems = 'center';
	header.innerHTML = '<strong>Contacts</strong>';

	const addBtn = document.createElement('button');
	addBtn.textContent = '＋ Add';
	addBtn.style.fontSize = '12px';
	addBtn.style.padding = '2px 6px';
	addBtn.style.cursor = 'pointer';
	addBtn.style.background = '#4A90E2';
	addBtn.style.color = '#fff';
	addBtn.style.border = 'none';
	addBtn.style.borderRadius = '4px';

	header.appendChild(addBtn);
	menuEl.appendChild(header);

	addBtn.onclick = () => {
		if(menuEl.querySelector('.add-form')) return;
		// 创建一个表单容器
		const formWrap = document.createElement('div');
		formWrap.className = 'add-form'; // ✅ 添加类名用于识别

		const nameInput = document.createElement('input');
		nameInput.placeholder = 'Name';
		const cityInput = document.createElement('input');
		cityInput.placeholder = 'Location';
		const continentSelect = document.createElement('select');
		continentSelect.innerHTML = '<option value="">Select Continent</option>';
		loadTzOptions()
			.then(data => {
				const continents = [...new Set(data.map(group => group.continent))];
				continents.forEach(continent => {
					const opt = document.createElement('option');
					opt.value = continent;
					opt.textContent = continent;
					continentSelect.appendChild(opt);
				});
			});
		continentSelect.onchange = () => {
			const selected = continentSelect.value;
			loadTzOptions()
				.then(data => {
					const filtered = selected ? data.filter(group => group.continent === selected) : data;
					fillTzSelect(tzSelect, filtered);
				});
		};


		const tzSelect = document.createElement('select');


		// 异步加载时区数据并填充
		loadTzOptions()
			.then(data => {
				fillTzSelect(tzSelect, data);
			});


		const offsetInput = document.createElement('input');
		offsetInput.placeholder = '偏移小时（例 +8 或 -5.5）';
		offsetInput.style.display = 'none';
		tzSelect.onchange = () => {
			offsetInput.style.display = tzSelect.value === 'custom' ? 'block' : 'none';
		};

		const saveBtn = document.createElement('button');
		saveBtn.textContent = 'Save';
		saveBtn.onclick = () => {
			const name = nameInput.value.trim();
			const city = cityInput.value.trim();
			let tz = tzSelect.value;

			if(!name || !city || !tz) {
				alert('Please complete all fields');
				return;
			}
			if(tz === 'custom') {
				const offset = parseFloat(offsetInput.value.replace(',', '.'));
				if(isNaN(offset) || offset < -12 || offset > 14) {
					alert('偏移无效');
					return;
				}
				tz = `UTC${offset >= 0 ? '+' : ''}${offset}`;
			} else if(!isValidTimeZone(tz)) {
				alert('Invalid timezone');
				return;
			}

			contacts.push({
				name,
				city,
				timeZone: tz
			});
			saveContacts();
			if(menuEl) menuEl.remove();
			createContactMenu();
		};
		formWrap.appendChild(nameInput);
		formWrap.appendChild(cityInput);
		formWrap.appendChild(continentSelect);
		formWrap.appendChild(tzSelect);
		formWrap.appendChild(offsetInput);
		formWrap.appendChild(saveBtn);
		menuEl.appendChild(formWrap);
	};



	const utcItem = document.createElement('div');
	utcItem.textContent = 'UTC';
	utcItem.style.cssText = 'padding:6px 8px;border-radius:6px;cursor:pointer;background:rgba(255,255,255,0.08)';
	utcItem.onclick = () => {
		currentMode = {
			type: 'UTC'
		};
		updateClock();
	};
	menuEl.appendChild(utcItem);

	contacts.forEach(contact => {

		const row = document.createElement('div');
		row.className = 'contact-row';
		row.onclick = () => {
			currentMode = {
				type: 'TZ',
				label: `${contact.name} (${contact.city})`,
				timeZone: contact.timeZone
			};
			updateClock();
		};

		const left = document.createElement('div');
		left.className = 'contact-left';
		left.innerHTML = `<div class="name">${contact.name}</div><div class="city">${contact.city}</div>`;

		const right = document.createElement('div');
		right.className = 'contact-right';

		const timeEl = document.createElement('div');
		timeEl.className = 'time';
		const diffEl = document.createElement('div');
		diffEl.className = 'diff';

		right.appendChild(timeEl);
		right.appendChild(diffEl);

		// 这里插入删除按钮
		const delBtn = document.createElement('button');
		delBtn.className = 'del-btn'; // ✅ 这行是关键
		delBtn.textContent = '❌';
		delBtn.style.fontSize = '12px';
		delBtn.style.marginTop = '4px';
		delBtn.style.cursor = 'pointer';
		delBtn.style.background = 'transparent';
		delBtn.style.border = 'none';
		delBtn.style.color = '#fff';


		delBtn.onclick = (e) => {
			e.stopPropagation(); // 防止触发 row.onclick
			if(confirm(`Delete ${contact.name} (${contact.city}) ?`)) {
				contacts = contacts.filter(c => c !== contact);
				saveContacts();
				if(menuEl) menuEl.remove();
				createContactMenu(); // 重新刷新菜单
			}
		};

		right.appendChild(delBtn); // ✅ 就加在这里

		// 然后再把 right 拼到 row 上
		row.appendChild(left);
		row.appendChild(right);
		menuEl.appendChild(row);

		const nowLocal = new Date();
		const zp = getZonedParts(nowLocal, contact.timeZone);
		timeEl.textContent = `${pad(zp.hour)}:${pad(zp.minute)}`;
		const d = dayDiffLocalMinusZone(nowLocal, zp);
		diffEl.textContent = d === 0 ? '' : `${d > 0 ? '+' : '-'}${Math.abs(d)} ${Math.abs(d) === 1 ? 'day' : 'days'}`;

		// 每秒更新联系人时间
		setInterval(() => {
			const nowLocal = new Date();
			const zp = getZonedParts(nowLocal, contact.timeZone);
			timeEl.textContent = `${pad(zp.hour)}:${pad(zp.minute)}`;
			const d = dayDiffLocalMinusZone(nowLocal, zp);
			diffEl.textContent = d === 0 ? '' : `${d > 0 ? '+' : '-'}${Math.abs(d)} ${Math.abs(d) === 1 ? 'day' : 'days'}`;
		}, 1000);
	});
	menuEl.style.left = `${clock.getBoundingClientRect().right + 10}px`;
	menuEl.style.top = `${clock.getBoundingClientRect().top}px`;
	updateMenuTimes();
}