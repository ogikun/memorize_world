'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1d5f64ce2d8123c05ff8bdc4ea8236cf",
"version.json": "d566700ba6c505513d95d9d0981bf1b3",
"index.html": "4ddfc6db4fb430d7cbbf8d4842e7b01e",
"/": "4ddfc6db4fb430d7cbbf8d4842e7b01e",
"main.dart.js": "8afe2e3130ca9c4e099dc38c4f4fb888",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0475198208bcc87e98c64178f3c64f5b",
"assets/AssetManifest.json": "add02e620a7fd4758fac2cffa083304c",
"assets/NOTICES": "9f6ab3ccb38716545120bd1431d1e2f5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b3720e7e7e10633a5994a348f50f4318",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c45ace381047cb27af88edc30f07bc6b",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/maps/republic_of_cabo_verde_map.gif": "da9dad4c3ff597e0fb7066c632e71629",
"assets/assets/maps/republic_of_guinea-bissau_map.gif": "d2c13c1740126d8f24225317e2b45f82",
"assets/assets/maps/canada_map.gif": "3d27ebf3c24dcb73c96d0be1b94e7a33",
"assets/assets/maps/kingdom_of_thailand_map.gif": "86d27dc54ebc6ed7593ff77d8ddfdadb",
"assets/assets/maps/republic_of_chile_map.gif": "d8bab542ab6f0ff890a114b45a4e1daa",
"assets/assets/maps/republic_of_ghana_map.gif": "420857affefc75cf7afb843627270dc2",
"assets/assets/maps/kingdom_of_sweden_map.gif": "fdfded04a51f45067e3c46dcf1c57c54",
"assets/assets/maps/republic_of_albania_map.gif": "60862aa4a5e66ed263f7d18e68c0a99d",
"assets/assets/maps/republic_of_san_marino_map.gif": "31859423f7d87da26a46aad583100bd2",
"assets/assets/maps/republic_of_seychelles_map.gif": "8a505c263ace4194bdd4c9195177d6b9",
"assets/assets/maps/plurinational_state_of_bolivia_map.gif": "75fc38fbe9eb0ee1a2b4ca2a09dae480",
"assets/assets/maps/republic_of_kiribati_map.gif": "9a0d765b2fb66d2c96481961b0e41d64",
"assets/assets/maps/kingdom_of_eswatini_map.gif": "b84eadb2ad5353721c9ae13e6663f47b",
"assets/assets/maps/sultanate_of_oman_map.gif": "46c9caf28b8e07570fc4c55054dea929",
"assets/assets/maps/republic_of_chad_map.gif": "e5e389bba90cbeaeda145f8c48d85f83",
"assets/assets/maps/arab_republic_of_egypt_map.gif": "1ab816905ba20503993ca3021e9e7c80",
"assets/assets/maps/hungary_map.gif": "0a0522423edcce444faa3dc2e3aa56ec",
"assets/assets/maps/republic_of_cyprus_map.gif": "a55a22b36ee9fbfd9f916604f14313bc",
"assets/assets/maps/federal_republic_of_somalia_map.gif": "d0f7f79b503bb470769089126d590629",
"assets/assets/maps/slovak_republic_map.gif": "9b87abaf9845d685a5f0c6350dc8a9a8",
"assets/assets/maps/tuvalu_map.gif": "196b1635b766bb2bb09705b4c767ecd2",
"assets/assets/maps/republic_of_madagascar_map.gif": "59d66d12dbe2f735604641b90ffe9a70",
"assets/assets/maps/republic_of_malta_map.gif": "32e531b61e115adca2849f5534abbdb0",
"assets/assets/maps/federative_republic_of_brazil_map.gif": "198ae0b372d9fe612e89391e20ac762d",
"assets/assets/maps/kingdom_of_spain_map.gif": "71c957e0cc17b5418fd6e2e36271c90d",
"assets/assets/maps/kingdom_of_norway_map.gif": "25ba75a52eaeac879b4b6a3236450a24",
"assets/assets/maps/state_of_eritrea_map.gif": "d0450e357e37bdd3c57ea71a496c1622",
"assets/assets/maps/argentine_republic_map.gif": "9f4496a9f4abc48e7b1b4b6307b121e2",
"assets/assets/maps/dominican_republic_map.gif": "750924462998dd94f2be3051f34826d2",
"assets/assets/maps/swiss_confederation_map.gif": "cb5cd685e498c2c87b67ccd7ceb9d743",
"assets/assets/maps/republic_of_zimbabwe_map.gif": "714a2ae7f10e7e383895208edcbdecf2",
"assets/assets/maps/republic_of_kosovo_map.gif": "dc88f02864f659ae88a791578db6b49f",
"assets/assets/maps/republic_of_indonesia_map.gif": "0817e08bd2c5d54aea66d85be7b36f7c",
"assets/assets/maps/kingdom_of_bahrain_map.gif": "b020b4ba1d48005a4bb101ab775083da",
"assets/assets/maps/united_mexican_states_map.gif": "70f7575df5c82c2493610c38a07eb840",
"assets/assets/maps/democratic_socialist_republic_of_sri_lanka_map.gif": "d84e5257bb7ab329eeefcfddb7542bf7",
"assets/assets/maps/republic_of_the_marshall_islands_map.gif": "be64e9ae13b177eeefa59ea5025e2fb4",
"assets/assets/maps/republic_of_niger_map.gif": "a86b04f11e9a161696e614faaa6c2947",
"assets/assets/maps/bosnia_and_herzegovina_map.gif": "60862aa4a5e66ed263f7d18e68c0a99d",
"assets/assets/maps/nepal_map.gif": "b767db05a194c081a088dd2f59c3ebec",
"assets/assets/maps/republic_of_maldives_map.gif": "d026fed0c748c3aeae37d3cd6615ee61",
"assets/assets/maps/republic_of_sierra_leone_map.gif": "108634018e552225bdf3b2648cdd592d",
"assets/assets/maps/brunei_darussalam_map.gif": "b5fa8e6e8765fdeebb005f9d7f6c8392",
"assets/assets/maps/democratic_republic_of_the_congo_map.gif": "a378a826ea5204e0f2fc5c929a6b32fb",
"assets/assets/maps/republic_of_malawi_map.gif": "7a861626f82c676d5729077eb0bdda43",
"assets/assets/maps/bolivarian_republic_of_venezuela_map.gif": "ff42b901ced477f5affadfe3d702b918",
"assets/assets/maps/solomon_islands_map.gif": "121af4e6afc223cd146754caf8eb8546",
"assets/assets/maps/oriental_republic_of_uruguay_map.gif": "b36ec8b94d7c34215a2f40c61c253e6a",
"assets/assets/maps/the_republic_of_the_sudan_map.gif": "149dafd120006e2ced60b2e8d038b47a",
"assets/assets/maps/republic_of_kenya_map.gif": "22649f0cced7fcbabb7b460187e0c9bd",
"assets/assets/maps/republic_of_panama_map.gif": "f53dfe23cbe2a12b28bae8997949f1ff",
"assets/assets/maps/union_of_comoros_map.gif": "a02ce9eb15fde63eea33d5b2c5e43b6c",
"assets/assets/maps/republic_of_equatorial_guinea_map.gif": "3556acf93547f1529aba303dbc87ce7d",
"assets/assets/maps/republic_of_paraguay_map.gif": "8170b02c6a447a1c0f300ac266831e6b",
"assets/assets/maps/state_of_qatar_map.gif": "11bd9ad6c1cce875840738dbe5a9e6aa",
"assets/assets/maps/syrian_arab_republic_map.gif": "4a97bfaaf906f1079727f4d9743b7e59",
"assets/assets/maps/federated_states_of_micronesia_map.gif": "0420049702f0f844240915f7159c6911",
"assets/assets/maps/republic_of_tajikistan_map.gif": "3c305babeff40769f1a68568600ca670",
"assets/assets/maps/federal_republic_of_nigeria_map.gif": "9bd801982f63a379ae7b29b07b3e2e6c",
"assets/assets/maps/republic_of_congo_map.gif": "84c7cda3cc48094b321722ed10b02b8e",
"assets/assets/maps/ireland_map.gif": "602301ad182edeaf53c77b8702113c0c",
"assets/assets/maps/islamic_republic_of_pakistan_map.gif": "7d60074ebd52c92033f8272aae80f046",
"assets/assets/maps/ukraine_map.gif": "a2b82018bead40f73b176750fd8702bc",
"assets/assets/maps/independent_state_of_papua_new_guinea_map.gif": "a5b31d42e5973eda05141051ef88d396",
"assets/assets/maps/japan_map.gif": "8b452f4b565a1ecda87cddeb11e7209d",
"assets/assets/maps/republic_of_guinea_map.gif": "108634018e552225bdf3b2648cdd592d",
"assets/assets/maps/republic_of_latvia_map.gif": "9c5f71b95b55141380364ae5c633d721",
"assets/assets/maps/republic_of_cote_divoire_map.gif": "e003350ee483e73950390555d47423f9",
"assets/assets/maps/malaysia_map.gif": "379768365e4909a1099b2ccbe8f57c57",
"assets/assets/maps/republic_of_yemen_map.gif": "866fac6b43097d3c9018e46c2837e112",
"assets/assets/maps/republic_of_costa_rica_map.gif": "1dfc14c29688e56e6c3ac51cf8b98ac1",
"assets/assets/maps/united_republic_of_tanzania_map.gif": "fc118ef72084517069fa35f3ffd8744a",
"assets/assets/maps/people_s_democratic_republic_of_algeria_map.gif": "878bdcd8b5e834b3fbc11bfe9ecb0e1a",
"assets/assets/maps/principality_of_liechtenstein_map.gif": "ab39f4a91b4850bb7a7fee4980e90091",
"assets/assets/maps/republic_of_serbia_map.gif": "35278f1f7acf3410c784123485861568",
"assets/assets/maps/republic_of_mozambique_map.gif": "7f348b85222c0390a5a5439a265d77ad",
"assets/assets/maps/democratic_republic_of_sao_tome_and_principe_map.gif": "f9b0abf5f4025d7d6ae69e952742a13e",
"assets/assets/maps/czech_republic_map.gif": "354d8ed5e31ec0fb75b1d8984e3bbf29",
"assets/assets/maps/new_zealand_map.gif": "21e98137a4e57f901382d6a8f6c84cf2",
"assets/assets/maps/co-operative_republic_of_guyana_map.gif": "9b3d4ca2dff369470287d27629f632ac",
"assets/assets/maps/republic_of_burundi_map.gif": "3dbc4e026b018620d859341cb04a0dbf",
"assets/assets/maps/united_states_of_america_map.gif": "3a8c1ec2773a00dacb1f1cd881bab8d3",
"assets/assets/maps/republic_of_korea_map.gif": "338e4c06bf66c0bc47fc9cbb88c45ce2",
"assets/assets/maps/georgia_map.gif": "31e35054568750761fb26134fb9bae13",
"assets/assets/maps/turkmenistan_map.gif": "a7b78233b3a4bdaf499cb3b71d8c7a9b",
"assets/assets/maps/republic_of_mauritius_map.gif": "4dbbf1244adc1e8151398e2b04e43533",
"assets/assets/maps/kingdom_of_bhutan_map.gif": "1a59e53df96b012a6a1b9d9811d1d12b",
"assets/assets/maps/republic_of_benin_map.gif": "1e4618824f189cf7436c21cdf6e68ed2",
"assets/assets/maps/romania_map.gif": "1b3f25903e45c51fe7b7c43fd8941510",
"assets/assets/maps/republic_of_north_macedonia_map.gif": "37a5227782e5432c3aaf77a4024678ca",
"assets/assets/maps/republic_of_nauru_map.gif": "a3371e6417d6806338a42ae390a90bea",
"assets/assets/maps/republic_of_el_salvador_map.gif": "41e12f49d1a10dec9583dbda087fc3f6",
"assets/assets/maps/grand_duchy_of_luxembourg_map.gif": "d86eb3212bcce6b80f2848bebfa48a79",
"assets/assets/maps/kingdom_of_saudi_arabia_map.gif": "2f4d12d8bb847c90028a3dfd313f64fb",
"assets/assets/maps/republic_of_djibouti_map.gif": "87ef3ddf191a495788e409a8334868c7",
"assets/assets/maps/republic_of_south_africa_map.gif": "c7bc15987b16cf7ab187a428189fc66b",
"assets/assets/maps/peoples_republic_of_china_map.gif": "b657df0e422498ff257541fe6f6bd5d4",
"assets/assets/maps/the_democratic_republic_of_timor-leste_map.gif": "8f93805e427c0425fe04d3d06df85b12",
"assets/assets/maps/republic_of_the_union_of_myanmar_map.gif": "d19656d0cfbb86b0ac9ab62578e27038",
"assets/assets/maps/commonwealth_of_dominica_map.gif": "6490ef187153e3680c94e2d5ac317820",
"assets/assets/maps/french_republic_map.gif": "49c40c4b4ebfbab1bc8912dcfee24555",
"assets/assets/maps/kingdom_of_morocco_map.gif": "1bf02c11d5448e3a4bd02914d23abd65",
"assets/assets/maps/republic_of_liberia_map.gif": "911cab94e1da2acfa4a698dae0ffbeb1",
"assets/assets/maps/vatican_city_state_map.gif": "1681d4f05b6b14321192e7e83b94d055",
"assets/assets/maps/federal_democratic_republic_of_ethiopia_map.gif": "eaa7c7a31a307fe992e58eafe6dd3509",
"assets/assets/maps/federal_republic_of_germany_map.gif": "112e3ae380d315f6d669de8f7565bb90",
"assets/assets/maps/kingdom_of_belgium_map.gif": "b38609f77eedd7634a366b5c912368e5",
"assets/assets/maps/republic_of_uganda_map.gif": "3662bf61440b6466b4f4b2486b6e5a3e",
"assets/assets/maps/republic_of_ecuador_map.gif": "982631e26cd0032045ce611581f94b7b",
"assets/assets/maps/central_african_republic_map.gif": "19beab0108fb1d717df38dc1a0ed2a43",
"assets/assets/maps/grenada_map.gif": "6efc4da601af8f4bfc2eb6d78b40beea",
"assets/assets/maps/republic_of_peru_map.gif": "0cb2a36817b347d6bec42b58cf35b2db",
"assets/assets/maps/jordan_map.gif": "2c0717cedef40f23f754417851139050",
"assets/assets/maps/republic_of_colombia_map.gif": "8e6b4c4a585d6d88c796912db489f95e",
"assets/assets/maps/principality_of_monaco_map.gif": "782b8bb33adcd85b540841832b39574e",
"assets/assets/maps/niue_map.gif": "2c4a2637ed9431a4ded742deba099828",
"assets/assets/maps/state_of_libya_map.gif": "e1f0029898637235c32a0fc64aff43bd",
"assets/assets/maps/montenegro_map.gif": "35278f1f7acf3410c784123485861568",
"assets/assets/maps/republic_of_austria_map.gif": "e14617ae4e87ddd1cc3d4dfdb27b4267",
"assets/assets/maps/republic_of_poland_map.gif": "a725d432339fe292ab6acb29ae49644c",
"assets/assets/maps/republic_of_cuba_map.gif": "2238f07e52cfa63117d87229c4673b61",
"assets/assets/maps/antigua_and_barbuda_map.gif": "c6a0281e163b04f18bd0fdb469f78c14",
"assets/assets/maps/kingdom_of_tonga_map.gif": "30607dfc8c421420db56a28f7fc07964",
"assets/assets/maps/barbados_map.gif": "843fdfdc5da7df4dc08ccc4ec57b9a25",
"assets/assets/maps/republic_of_nicaragua_map.gif": "871e7e2550d192f793bbadc7634eb19f",
"assets/assets/maps/saint_lucia_map.gif": "5913125f0bf3e1320ddd1b1c8e43110e",
"assets/assets/maps/republic_of_fiji_map.gif": "8dbe41a66b12bed645900aaedc5cfd61",
"assets/assets/maps/gabonese_republic_map.gif": "e2ad47ac0509b9941cc757b42e7d2602",
"assets/assets/maps/saint_christopher_and_nevis_map.gif": "2e5f1a64b37d1c2687d2fff63d6fa529",
"assets/assets/maps/russian_federation_map.gif": "24a6552d17d5b803ed2e67fd891eaa9b",
"assets/assets/maps/republic_of_india_map.gif": "6a60aea396f714b12398655f020bb6eb",
"assets/assets/maps/hellenic_republic_map.gif": "e663d8301a324ce90df2c8802d3f91b2",
"assets/assets/maps/kingdom_of_the_netherlands_map.gif": "b38609f77eedd7634a366b5c912368e5",
"assets/assets/maps/republic_of_azerbaijan_map.gif": "07fc14c2051f2cbd0fe1d2d4cd7fec25",
"assets/assets/maps/republic_of_trinidad_and_tobago_map.gif": "161718fbf9b6cb69abaa6e9b426b3a9a",
"assets/assets/maps/italian_republic_map.gif": "3eec7f2225d7bfa8c2566c18ecd5e6e7",
"assets/assets/maps/republic_of_belarus_map.gif": "f0dc26d3c68e835364e3ba4044f6a830",
"assets/assets/maps/republic_of_namibia_map.gif": "c7b7c280e07b50127efe6225affea57d",
"assets/assets/maps/kingdom_of_lesotho_map.gif": "f15538bf886d60bbcd9d8282759867a6",
"assets/assets/maps/republic_of_singapore_map.gif": "868b4ac476a2fe9b6c33ff4224f42854",
"assets/assets/maps/republic_of_moldova_map.gif": "4cf71f86d648d3efc8869757b7e87841",
"assets/assets/maps/republic_of_zambia_map.gif": "f429cea37f9134218a301af7f9f012c3",
"assets/assets/maps/republic_of_cameroon_map.gif": "7bc5a85b3041e48c2ec13a03ec58ebfc",
"assets/assets/maps/state_of_kuwait_map.gif": "43146a6fb0a1eeae3f2fa04efeee3b93",
"assets/assets/maps/independent_state_of_samoa_map.gif": "be422040a4cfa5eb6872b7803ae56a4c",
"assets/assets/maps/republic_of_guatemala_map.gif": "b075da520b857cda88185a5564cae9e7",
"assets/assets/maps/desktop.ini": "f95db2b60f4e2dc21da19b795c7a0495",
"assets/assets/maps/islamic_republic_of_iran_map.gif": "5f0ecfd3e80a338acc57256be9744217",
"assets/assets/maps/republic_of_the_philippines_map.gif": "a3f328455a78ef70dfa01b1ecf59f345",
"assets/assets/maps/kingdom_of_denmark_map.gif": "47eef341320699ece727fff84304de84",
"assets/assets/maps/republic_of_palau_map.gif": "89b0ed49971ae9f8252b9eba5071e8fd",
"assets/assets/maps/mongolia_map.gif": "9af75912b17c86da4fc7839f90595319",
"assets/assets/maps/republic_of_tunisia_map.gif": "1007731012907dc38d87eda2e436347a",
"assets/assets/maps/burkina_faso_map.gif": "aaa305a99f352fcf55e6b16fb45a03e8",
"assets/assets/maps/republic_of_vanuatu_map.gif": "481c0ea58626872bb48920734b29fcc5",
"assets/assets/maps/united_kingdom_of_great_britain_and_northern_ireland_map.gif": "4986927f4c9c33c1537c5c409857219d",
"assets/assets/maps/republic_of_bulgaria_map.gif": "c4b47314169fe09f73e4773836bdfb5c",
"assets/assets/maps/republic_of_lithuania_map.gif": "e3cfce349e72bc4fe29e9464a7f47ab7",
"assets/assets/maps/republic_of_t%25C3%25BCrkiye_map.gif": "4aeab34cd0b4edd6ad706c8eb51091c5",
"assets/assets/maps/islamic_republic_of_mauritania_map.gif": "b56c0cba3533863c3487ab80b316a3ef",
"assets/assets/maps/republic_of_uzbekistan_map.gif": "51a6e066ddae97b689ef3c350a9c813a",
"assets/assets/maps/republic_of_rwanda_map.gif": "1ec0ef01c056def67b5ab152483212dc",
"assets/assets/maps/republic_of_angola_map.gif": "0482f878193fadddfa36faee58836147",
"assets/assets/maps/portuguese_republic_map.gif": "b1529a119021ba682dea8086204b71dc",
"assets/assets/maps/commonwealth_of_australia_map.gif": "6e971f3007693a64ae413f441f6c88fd",
"assets/assets/maps/republic_of_finland_map.gif": "5313693728937c28b93074636e9e41e0",
"assets/assets/maps/lao_peoples_democratic_republic_map.gif": "818ae07863a4a0afdfd8dbf2440812eb",
"assets/assets/maps/republic_of_croatia_map.gif": "c538d5112a2ce7dd4448a6d0c9e05fe6",
"assets/assets/maps/cook_islands_map.gif": "4b69e6b3deddd34d2fce86eecaac7b68",
"assets/assets/maps/kyrgyz_republic_map.gif": "34400ba1c6b722e20a22d994211f31c8",
"assets/assets/maps/republic_of_kazakhstan_map.gif": "47304e2f7d1f636febc02d6f39b1d169",
"assets/assets/maps/kingdom_of_cambodia_map.gif": "997799839eca3042581cf5743ca82954",
"assets/assets/maps/republic_of_senegal_map.gif": "e1589a65c232def06d0abdb37a71709a",
"assets/assets/maps/lebanese_republic_map.gif": "a55a22b36ee9fbfd9f916604f14313bc",
"assets/assets/maps/republic_of_the_gambia_map.gif": "22a78be61680bbabcabea9789de1b761",
"assets/assets/maps/republic_of_togo_map.gif": "a65f34a1c1228a31febaca4963ad7b3c",
"assets/assets/maps/the_republic_of_south_sudan_map.gif": "c4b4e92264219c523aaef5f132b3c484",
"assets/assets/maps/peoples_republic_of_bangladesh_map.gif": "e504a560cd0cf640dcea5db305d24002",
"assets/assets/maps/principality_of_andorra_map.gif": "bb9205f55952b8664cb0d10334c70695",
"assets/assets/maps/islamic_republic_of_afghanistan_map.gif": "7a9eb36db820c6ed4672492dcc7f362b",
"assets/assets/maps/republic_of_honduras_map.gif": "ccd29dd8abdfea40f9149b796100cdff",
"assets/assets/maps/commonwealth_of_the_bahamas_map.gif": "1f49f9523d83f53668fae262a8c1a6c1",
"assets/assets/maps/iceland_map.gif": "bd77190c637ad7437eece7662970b28b",
"assets/assets/maps/republic_of_iraq_map.gif": "56f929d54ae50272e04a461d650822a8",
"assets/assets/maps/republic_of_haiti_map.gif": "750924462998dd94f2be3051f34826d2",
"assets/assets/maps/belize_map.gif": "7bf5cd6d0c46bd40234c975000aeadd0",
"assets/assets/maps/republic_of_estonia_map.gif": "e9cdaa47a7bad9f82648fa84c21c2b0b",
"assets/assets/maps/republic_of_mali_map.gif": "6589e481f01443eefcf2784f5a961d4c",
"assets/assets/maps/united_arab_emirates_uae_map.gif": "b74d60ad42ad171799bdbf19178760bb",
"assets/assets/maps/socialist_republic_of_viet_nam_map.gif": "c67f30a58eb9d4a1e44b8ec69078d376",
"assets/assets/maps/republic_of_botswana_map.gif": "37611ec598f885bc7883e6fc8e24ed7d",
"assets/assets/maps/saint_vincent_and_the_grenadines_map.gif": "5913125f0bf3e1320ddd1b1c8e43110e",
"assets/assets/maps/republic_of_slovenia_map.gif": "37d69411b35a7890fa90248c7392a6fd",
"assets/assets/maps/republic_of_armenia_map.gif": "79c294c9c6acdedd6f7dce2ea3374846",
"assets/assets/maps/republic_of_suriname_map.gif": "9b3d4ca2dff369470287d27629f632ac",
"assets/assets/maps/jamaica_map.gif": "1b6b196c944ae3b7db155ed16798afe2",
"assets/assets/maps/state_of_israel_map.gif": "86be609a27644997f6bdad80549b83a0",
"assets/assets/flags/republic_of_albania.gif": "e84b07786cc6b9ffbc299661d8e9ad17",
"assets/assets/flags/united_mexican_states.gif": "cb03b714ce32fb4dd704bb7596df2fe1",
"assets/assets/flags/principality_of_liechtenstein.gif": "661af48e3d37b71811ce077f1541c81f",
"assets/assets/flags/federal_democratic_republic_of_ethiopia.gif": "59113331d28d7a4d13f1ed3a7865aa18",
"assets/assets/flags/arab_republic_of_egypt.gif": "9ca6804f8f0f314baac021c8e9d97f4e",
"assets/assets/flags/republic_of_cameroon.gif": "ca3235b83f3486ffd1a13d9d19821628",
"assets/assets/flags/republic_of_rwanda.gif": "b66788a47dc60312e2888e4d49345668",
"assets/assets/flags/canada.gif": "c20e2bd4eda23f55ed5ae34c31afd4cd",
"assets/assets/flags/republic_of_tajikistan.gif": "d73c254a0bfd46415e272f8d9c54e838",
"assets/assets/flags/republic_of_guinea-bissau.gif": "8898ba63bb4b86255e70131a7de971e4",
"assets/assets/flags/independent_state_of_papua_new_guinea.gif": "8b65e585ed8bd4963518d9987d6676b7",
"assets/assets/flags/republic_of_kosovo.gif": "fd315b6973e283c2a11f4c0e830bca29",
"assets/assets/flags/republic_of_trinidad_and_tobago.gif": "0f1850a512f2b2b82b4a983e01cefa97",
"assets/assets/flags/czech_republic.gif": "326180e9a8c8db0ca8fe81e795e0dec5",
"assets/assets/flags/saint_lucia.gif": "ba72496488395f0f868d9fd0849bed1c",
"assets/assets/flags/republic_of_guatemala.gif": "e102e4c3690fbace8645b4fe870bdea5",
"assets/assets/flags/syrian_arab_republic.gif": "905fb22dfeba35b676bc610fde086186",
"assets/assets/flags/republic_of_guinea.gif": "72515277bafe15f5af07fe1cfa46c242",
"assets/assets/flags/republic_of_belarus.gif": "a18f17b208c04491ae551b6977bcf9d6",
"assets/assets/flags/republic_of_haiti.gif": "6ff5f7983ee0eb679603a4e92ccb5f2e",
"assets/assets/flags/republic_of_angola.gif": "796247a54b239e7d00be3d6f09215791",
"assets/assets/flags/people_s_democratic_republic_of_algeria.gif": "a99c5f85927328975741f1570e47b5ea",
"assets/assets/flags/republic_of_korea.gif": "9481fad0054fb749900c8faabe3d0031",
"assets/assets/flags/republic_of_finland.gif": "5efcb69e6f7330c672e8656ec4e79aee",
"assets/assets/flags/democratic_republic_of_sao_tome_and_principe.gif": "8a2ffe09cb0998fc8b34e24fce942484",
"assets/assets/flags/republic_of_zambia.gif": "f9ef047ced69219d63cf38f36e73e179",
"assets/assets/flags/turkmenistan.gif": "48821c15acf4c83e0e499e92739d8e7d",
"assets/assets/flags/portuguese_republic.gif": "97c1187e5340455611a6af32b33670c0",
"assets/assets/flags/gabonese_republic.gif": "bdd64650c78c703add4a1a3d04c01a6e",
"assets/assets/flags/republic_of_cote_divoire.gif": "99472fbd2275dcb4c5779ec69b903658",
"assets/assets/flags/republic_of_kazakhstan.gif": "a050747e5c9c6002e6d14f86510a5cea",
"assets/assets/flags/islamic_republic_of_afghanistan.gif": "b88e79f937f971bbfc95f00b9d63b0e7",
"assets/assets/flags/grand_duchy_of_luxembourg.gif": "bf3e615abe3341537da3bf958f96c1da",
"assets/assets/flags/kingdom_of_belgium.gif": "0cd4acc2113f57cde57343fd3b7cd8ac",
"assets/assets/flags/tuvalu.gif": "5a669994237fbdfe002044b9eab1be88",
"assets/assets/flags/republic_of_vanuatu.gif": "c0c5c961c24204b287d77843fa275272",
"assets/assets/flags/mongolia.gif": "36b2e80180e7fa2c050754f8cd59035c",
"assets/assets/flags/kingdom_of_norway.gif": "d10c638b3d0b96571b78891595275117",
"assets/assets/flags/republic_of_poland.gif": "456517c6cb44e7893f8dee780a61abb9",
"assets/assets/flags/independent_state_of_samoa.gif": "3d93117719de4237f27832541c18a222",
"assets/assets/flags/kingdom_of_spain.gif": "a8cb969308a65cca5a3f4a43c0064c6a",
"assets/assets/flags/republic_of_yemen.gif": "759d660b7b66d0353083c22523a82cac",
"assets/assets/flags/dominican_republic.gif": "aa55098200173a47b38d12527cba1ec7",
"assets/assets/flags/islamic_republic_of_mauritania.gif": "ba08f45c8661a11217df155e96f06463",
"assets/assets/flags/republic_of_croatia.gif": "3232225ec1f7b5b6dc33692f780498b3",
"assets/assets/flags/antigua_and_barbuda.gif": "a09c4e689426e7a061e9ddd4fc115629",
"assets/assets/flags/republic_of_equatorial_guinea.gif": "936a36ad4cfdc7fa8474a622d877544d",
"assets/assets/flags/united_states_of_america.gif": "d69924765e8519d4eb132d27715b2d0d",
"assets/assets/flags/kingdom_of_thailand.gif": "6faf0372ddb9ae366799b21ac27157fd",
"assets/assets/flags/republic_of_malta.gif": "4452a6a2222a980c24babe81d682a419",
"assets/assets/flags/republic_of_madagascar.gif": "126a26476841720170cad34cf746ae5e",
"assets/assets/flags/republic_of_panama.gif": "1907d0f42cdc04271004773dbaf3b4db",
"assets/assets/flags/bosnia_and_herzegovina.gif": "967ed2db0deda1a90d6970612dfbeb23",
"assets/assets/flags/the_republic_of_south_sudan.gif": "418bdb82bf12be58b99a0393d9d85aec",
"assets/assets/flags/saint_vincent_and_the_grenadines.gif": "a263a8dbba1c436051be8d5523ea87a2",
"assets/assets/flags/kingdom_of_eswatini.gif": "2b526332feb4857ceeaca10684464968",
"assets/assets/flags/republic_of_nauru.gif": "8d0c2532355ad5b572cc5b4617d1d8fd",
"assets/assets/flags/republic_of_colombia.gif": "c47743cc831b8fc7c812f76702058a40",
"assets/assets/flags/republic_of_chile.gif": "4d5d68415c3eb8ae6574764f22ce354d",
"assets/assets/flags/cook_islands.gif": "71f0dc8bc399910bab4ab233239fa709",
"assets/assets/flags/barbados.gif": "1eb04fac0796b48667f304a501430589",
"assets/assets/flags/republic_of_congo.gif": "1af66e72731c49b120908e56b091541a",
"assets/assets/flags/kingdom_of_bhutan.gif": "2ebfb65d2f81087a874f49c93200e8a2",
"assets/assets/flags/plurinational_state_of_bolivia.gif": "1f93f0f450734fc46e4c145cb27108cf",
"assets/assets/flags/republic_of_sierra_leone.gif": "c017c5c93529b40969a095e6bc5ebfbc",
"assets/assets/flags/georgia.gif": "cea2a1143435e36ba1db6e48a7dc5c07",
"assets/assets/flags/republic_of_niger.gif": "55788cecde643d99c6cb5f91af2e76b0",
"assets/assets/flags/united_kingdom_of_great_britain_and_northern_ireland.gif": "b9c913344172a8377dfc1464dd27af77",
"assets/assets/flags/republic_of_djibouti.gif": "3850fd2dda987cca7f7fdde78c1bfe21",
"assets/assets/flags/sultanate_of_oman.gif": "788e738e69971a539aeaf6564194a668",
"assets/assets/flags/republic_of_cyprus.gif": "992c40b5189e82b34c7e48c47e3eedea",
"assets/assets/flags/federal_republic_of_somalia.gif": "07c7290274ebda8fb65879f8fbd24cb4",
"assets/assets/flags/republic_of_india.gif": "7b39089b0f1c8cf5f8f3f3d54858462f",
"assets/assets/flags/republic_of_the_union_of_myanmar.gif": "9fbdcdd173a4ea29610971a96bc62a5a",
"assets/assets/flags/federal_republic_of_germany.gif": "7052d477ee193b117d368fdad5a82310",
"assets/assets/flags/peoples_republic_of_china.gif": "d28d56f141740163c3aa726a51cc37e0",
"assets/assets/flags/state_of_libya.gif": "c21ea9c21e350d63f02620a826a4b866",
"assets/assets/flags/united_republic_of_tanzania.gif": "bd7934e57fcdec3b584edbb17c7bf06f",
"assets/assets/flags/jordan.gif": "c199c335e1d2b7b1a29292a31a101884",
"assets/assets/flags/co-operative_republic_of_guyana.gif": "ab62fd3b02ba4754df4ca1ce01c6fcd6",
"assets/assets/flags/democratic_republic_of_the_congo.gif": "f547f1c8a08807afe9eb43b944568e74",
"assets/assets/flags/socialist_republic_of_viet_nam.gif": "9f91c77fdf8ec759370b2fafdb061920",
"assets/assets/flags/federated_states_of_micronesia.gif": "d541c908c8c3721a3328a08135a06880",
"assets/assets/flags/japan.gif": "5a2e1ee50bd39ba31b8191a4013d0ef0",
"assets/assets/flags/republic_of_cuba.gif": "12cdf61566fe237d0ff9b5c242448a05",
"assets/assets/flags/bolivarian_republic_of_venezuela.gif": "fd0908a389a74a80d97c18b134b65944",
"assets/assets/flags/republic_of_seychelles.gif": "9f571d81c2181e93ad4ded7482b9231a",
"assets/assets/flags/republic_of_north_macedonia.gif": "c6669f2c164e9ebed7e0f72982f49730",
"assets/assets/flags/ireland.gif": "0736ecc0cbcf52b5c39151858dbedbb1",
"assets/assets/flags/burkina_faso.gif": "ac224bf53298e987f344d3ae151a8ac8",
"assets/assets/flags/the_democratic_republic_of_timor-leste.gif": "fa7c16026981da9a0f9f744e156caaed",
"assets/assets/flags/the_republic_of_the_sudan.gif": "8778dae0fcccbe1aff1938a967e03e21",
"assets/assets/flags/republic_of_austria.gif": "10e43ef1538b839384caed61732dc7e6",
"assets/assets/flags/romania.gif": "ebef46de8c1dfb43fde4faa1ea4ee3bb",
"assets/assets/flags/republic_of_palau.gif": "a262336e0ee0b8a56935a5eff3820775",
"assets/assets/flags/union_of_comoros.gif": "83c9abb4b1d322a42f886aaf573e6887",
"assets/assets/flags/kingdom_of_lesotho.gif": "d73f49724439876c4b1bad7e41b91e4a",
"assets/assets/flags/kingdom_of_the_netherlands.gif": "036bbb8cedca990262fbcd99212b8810",
"assets/assets/flags/commonwealth_of_dominica.gif": "c6ce2c962814eddd6b998fd51d1562b1",
"assets/assets/flags/french_republic.gif": "fcb14bd2d3a7e54baa494c16cca3c024",
"assets/assets/flags/republic_of_kiribati.gif": "8efe102310a26fb6b24d24770e2b24d1",
"assets/assets/flags/state_of_eritrea.gif": "a621a15ceb580046013b4a16fd78a526",
"assets/assets/flags/republic_of_mozambique.gif": "c55e4672f02cad2bf99862e049fceed6",
"assets/assets/flags/republic_of_honduras.gif": "2b76513e947b1048c6ebaed52246484a",
"assets/assets/flags/belize.gif": "0cbc3808185d9607f1899503ec8c2a05",
"assets/assets/flags/republic_of_moldova.gif": "ba92d0e24ae9512bd49a06f447d5d16a",
"assets/assets/flags/republic_of_iraq.gif": "d7d021b25e5e8115abc115f1463398da",
"assets/assets/flags/federative_republic_of_brazil.gif": "749c854cb165026ab13f1c2e09e921c6",
"assets/assets/flags/federal_republic_of_nigeria.gif": "7152e69c05cee5ecb619885a10f2014e",
"assets/assets/flags/republic_of_zimbabwe.gif": "a6710658301322546c649343e3826c2e",
"assets/assets/flags/republic_of_burundi.gif": "e97bb7599a6f0dc0ccb06011d0125cca",
"assets/assets/flags/peoples_republic_of_bangladesh.gif": "46f4c244d8edb48cf47a928c3246ccac",
"assets/assets/flags/saint_christopher_and_nevis.gif": "9d3b3260e44e6b6812dda30c5ced59e1",
"assets/assets/flags/vatican_city_state.gif": "84ee48289f6b08f1e17a00d18a422b73",
"assets/assets/flags/republic_of_el_salvador.gif": "c7a8f90b4485180f2c5e1713efdf2561",
"assets/assets/flags/republic_of_serbia.gif": "c381a93fd180620e74932c03830f6d98",
"assets/assets/flags/iceland.gif": "e0c1e3816448aa955412c6b7b8eb492f",
"assets/assets/flags/hungary.gif": "41b075de4e61c1778f08277cf6011565",
"assets/assets/flags/republic_of_peru.gif": "0d9b8bf2f78c8869a313579060a11009",
"assets/assets/flags/united_arab_emirates_uae.gif": "f92338a1b63ae7af677f4e193a99ef1b",
"assets/assets/flags/republic_of_the_marshall_islands.gif": "9dd3e521325323ea4460a202e1c69877",
"assets/assets/flags/republic_of_the_philippines.gif": "90ddf4095f3eb1d33f83c9a59ef0f7e3",
"assets/assets/flags/commonwealth_of_australia.gif": "aec6735ea73bcd36ea69d97f61481ea0",
"assets/assets/flags/brunei_darussalam.gif": "44ea1cb24d804f7b554223151b42a29e",
"assets/assets/flags/republic_of_san_marino.gif": "91a23290d7d47c15c23a4b325a322597",
"assets/assets/flags/commonwealth_of_the_bahamas.gif": "7b50cd0683c5cd8331973529ba999c19",
"assets/assets/flags/state_of_qatar.gif": "233d8848a0c14a77589f51ab2dc87cd0",
"assets/assets/flags/republic_of_south_africa.gif": "79b153e71e8a3470f08808b6e22a85e4",
"assets/assets/flags/jamaica.gif": "2af6efa5398dc6c6c614d351984ae053",
"assets/assets/flags/republic_of_chad.gif": "e271a45b6959e8054d6bd65e3f6f565a",
"assets/assets/flags/principality_of_monaco.gif": "44bbfbc36a797f0ef938608d3a623305",
"assets/assets/flags/central_african_republic.gif": "4b3539629378dbc9e8abde77b1abd3bc",
"assets/assets/flags/kingdom_of_sweden.gif": "c3e10499f6c09bc387eb5a561d21c499",
"assets/assets/flags/republic_of_uganda.gif": "db80f391dad1470fcf331c4693434102",
"assets/assets/flags/principality_of_andorra.gif": "7e21fc0c0bdb56cf686bfb0b4390d641",
"assets/assets/flags/republic_of_the_gambia.gif": "ab6916b861e647b227861172f8c627fa",
"assets/assets/flags/republic_of_latvia.gif": "881206cd93dae0a524a485be01983ebc",
"assets/assets/flags/kingdom_of_morocco.gif": "3828dbaede92cb4afc7e042f4b4104a8",
"assets/assets/flags/republic_of_mauritius.gif": "09ed26d508d70b296f2506e6642d45d6",
"assets/assets/flags/republic_of_senegal.gif": "1622a5d0f360ccdd8cf121a5d7bbd224",
"assets/assets/flags/ukraine.gif": "18caa97994cd9cc5c17e6a029e6066e2",
"assets/assets/flags/swiss_confederation.gif": "7fd2fe3ef05448ca817f694c3fbac6e3",
"assets/assets/flags/kingdom_of_denmark.gif": "1dc6e17d29f283c88b14a62474e9429b",
"assets/assets/flags/lebanese_republic.gif": "6a6061d79750e63fdfe88cbdc04c871f",
"assets/assets/flags/argentine_republic.gif": "9edcb4c763dc19477b1c2ef22ba97853",
"assets/assets/flags/new_zealand.gif": "9e8692100a5369548cc72b9f577ca612",
"assets/assets/flags/republic_of_ghana.gif": "f862c27ae90ae7129c9c435b2c8a13dd",
"assets/assets/flags/republic_of_ecuador.gif": "b2e32f9b5bf180fe64a3c3d0cacdd88e",
"assets/assets/flags/islamic_republic_of_pakistan.gif": "6c787ae8c6d8110678e7d40b67fd2707",
"assets/assets/flags/kyrgyz_republic.gif": "6befe41bc6bc9fb6a5d639058bbfcdb4",
"assets/assets/flags/republic_of_fiji.gif": "16ff2734e7f878b20c5d5955007c68f2",
"assets/assets/flags/republic_of_kenya.gif": "e7a7a4642bd34f3481fcc03766b4f337",
"assets/assets/flags/republic_of_nicaragua.gif": "75bd19300dc8fe671a562fbc95f6bdf1",
"assets/assets/flags/republic_of_slovenia.gif": "fd3460583b7fb725db015152daece50c",
"assets/assets/flags/republic_of_azerbaijan.gif": "4615826592c15f7d06aa55675e1d5ba4",
"assets/assets/flags/niue.gif": "ff2a6ebe66e1041eb677186409d7bcd8",
"assets/assets/flags/republic_of_botswana.gif": "421be849fd79bcbf49556476bc3877aa",
"assets/assets/flags/republic_of_costa_rica.gif": "190244bc110d211ceed4daa1d0bcea56",
"assets/assets/flags/republic_of_namibia.gif": "ae93f9080662b52f1ba1f581880ec2d5",
"assets/assets/flags/republic_of_singapore.gif": "4a7202cbcd5b887be0eba094a0897ccd",
"assets/assets/flags/slovak_republic.gif": "e862beb1a499cbd5d654bafe8ba3f3f9",
"assets/assets/flags/nepal.gif": "cbda355ba481c664760a1a6bd274656a",
"assets/assets/flags/state_of_israel.gif": "28fb8745e7b67b03ebe3218ae95d99b6",
"assets/assets/flags/republic_of_cabo_verde.gif": "d14acbfd86bcac2be5d7b583f8c56867",
"assets/assets/flags/republic_of_togo.gif": "1724fcb91c2003d9983e595d25af7b25",
"assets/assets/flags/kingdom_of_bahrain.gif": "ac0770c46bf268bd5f269eeb2d6672f9",
"assets/assets/flags/republic_of_uzbekistan.gif": "a6222c3e08c4aa764df44ac7af6f4be9",
"assets/assets/flags/state_of_kuwait.gif": "2c9fccf98168479403fe513ea3743658",
"assets/assets/flags/republic_of_malawi.gif": "6bf191099e7d73d571c729fd9e045af5",
"assets/assets/flags/republic_of_bulgaria.gif": "254da07da2aaf51b766f93075589b3b1",
"assets/assets/flags/republic_of_liberia.gif": "43f30c3385e440cafcd8b68d368257c1",
"assets/assets/flags/kingdom_of_tonga.gif": "bb980791474b4dd0da79dc41a3f58101",
"assets/assets/flags/republic_of_maldives.gif": "b00c07f87ae6e6e6c8617e0a4ab60b61",
"assets/assets/flags/lao_peoples_democratic_republic.gif": "57f102736885364ea9a10da5a6a7bc34",
"assets/assets/flags/kingdom_of_cambodia.gif": "ce73b7b8d504492f26f7556011809483",
"assets/assets/flags/republic_of_mali.gif": "8912a9965ec0b2b01e4b29c0dc86e9e0",
"assets/assets/flags/republic_of_t%25C3%25BCrkiye.gif": "cc11fe9a7b387154be5edc10b3178303",
"assets/assets/flags/russian_federation.gif": "ea63b3b14a53c7579a4862d0a524ae40",
"assets/assets/flags/republic_of_indonesia.gif": "b92090bb02104eaac3175c065b089953",
"assets/assets/flags/republic_of_lithuania.gif": "72302a8b983273454d58ab4d6a48eff7",
"assets/assets/flags/montenegro.gif": "c853737ae4d879e507428a4eebc51b52",
"assets/assets/flags/democratic_socialist_republic_of_sri_lanka.gif": "c127e08645dc14e4666bf248e49e98ad",
"assets/assets/flags/grenada.gif": "fa688eae4de103f7bf3c0b355357a3de",
"assets/assets/flags/republic_of_benin.gif": "2a5629326a114b43249c6bd3b17c8cec",
"assets/assets/flags/republic_of_armenia.gif": "f2b7c5919afa89d8cf6de101279e97ff",
"assets/assets/flags/malaysia.gif": "8a82abe4267ea026c566a7c16ae96824",
"assets/assets/flags/islamic_republic_of_iran.gif": "038ff7cc26ce85b0b81f85179336865e",
"assets/assets/flags/republic_of_tunisia.gif": "2b12f9ebfaab65322fc9a81ea61410f2",
"assets/assets/flags/republic_of_paraguay.gif": "653ca67dbabf8e0cc22342e5f1901de5",
"assets/assets/flags/hellenic_republic.gif": "365e154120a3580eef5f7d91a87b1c41",
"assets/assets/flags/oriental_republic_of_uruguay.gif": "05f9f68b280ea9875ee76069b7ee3c9c",
"assets/assets/flags/republic_of_estonia.gif": "551b1aa3e519b8c3318eb17e5d779a22",
"assets/assets/flags/republic_of_suriname.gif": "5ffa9caaec0d044aa2e341da7438a8d4",
"assets/assets/flags/solomon_islands.gif": "65f7fc33c1e5abefd500428d817f9633",
"assets/assets/flags/italian_republic.gif": "c90a380aefa6d4426c8608d178491057",
"assets/assets/flags/kingdom_of_saudi_arabia.gif": "d4a446a4731ff7449998f654df9e2308",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
