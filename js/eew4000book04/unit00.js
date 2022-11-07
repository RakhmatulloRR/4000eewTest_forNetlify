// **Question-13**
// *tayyor*
// # 1: Yuqoridagi hammat testlar (jami 460)
'use strick';
// Array of Object;
const quiz = [
  {
    q: `4001_aroma`,
    options: [`xushbo'y hid`, `tanglay`, `qulay`, `axloqiy`],
    answer: 0,
  },
  {
    q: `4002_beverage`,
    options: [`ichimlik`, `xor`, `qoralamoq`, `ayyorlik`],
    answer: 0,
  },
  {
    q: `4003_cluster`,
    options: [`klaster`, `davlat`, `majburlamoq`, `boncuk`],
    answer: 0,
  },
  {
    q: `4004_combine`,
    options: [`aralashtirmoq`, `ahmoq`, `ziddiyat`, `chidamli`],
    answer: 0,
  },
  {
    q: `4005_condensed`,
    options: [`quyuqlashgan`, `ho'llash`, `diqqatli`, `qattiq`],
    answer: 0,
  },
  {
    q: `4006_contemporary`,
    options: [`zamondosh`, `asabiy`, `ta'kidlash`, `to'qimachilik`],
    answer: 0,
  },
  {
    q: `4007_cultivate`,
    options: [`yetishtirish`, `mikroavtobus`, `nola`, `ayyor`],
    answer: 0,
  },
  {
    q: `4008_divine`,
    options: [`ilohiy`, `samarali`, `fon`, `eshitiladigan`],
    answer: 0,
  },
  {
    q: `4009_humid`,
    options: [`nam`, `siklon`, `moderatsiya`, `aralashtirmoq`],
    answer: 0,
  },
  {
    q: `4010_odor`,
    options: [`hid`, `o'tish`, `ahloqiy`, `tinchlantiruvchi`],
    answer: 0,
  },
  {
    q: `4011_palate`,
    options: [`tanglay`, `xayriya`, `to'siq`, `ob'ektiv`],
    answer: 0,
  },
  {
    q: `4012_paradise`,
    options: [`jannat`, `tik`, `asosiy`, `maqtanmoq`],
    answer: 0,
  },
  {
    q: `4013_plantation`,
    options: [`plantatsiya`, `adolatli`, `istisno`, `butun`],
    answer: 0,
  },
  {
    q: `4014_rapid`,
    options: [`tez`, `hamdardlik`, `ishora`, `to'xtatish`],
    answer: 0,
  },
  {
    q: `4015_rate`,
    options: [`darajasi`, `sartarosh`, `tinchlantiruvchi`, `er`],
    answer: 0,
  },
  {
    q: `4016_soothing`,
    options: [`tinchlantiruvchi`, `quyosh`, `qulay`, `vegetarian`],
    answer: 0,
  },
  {
    q: `4017_subtle`,
    options: [`nozik`, `urish`, `genom`, `nozik`],
    answer: 0,
  },
  {
    q: `4018_texture`,
    options: [`tekstura`, `o'tkazish`, `baxtsizlik`, `qo'rquv`],
    answer: 0,
  },
  {
    q: `4019_toxic`,
    options: [`zaharli`, `tasavvur qilish`, `halok bo'lish`, `ulug'vor`],
    answer: 0,
  },
  {
    q: `4020_vary`,
    options: [`farqlanadi`, `inqiroz`, `kibermakon`, `yomonlashadi`],
    answer: 0,
  },
  {
    q: `4021_accident`,
    options: [`baxtsiz hodisa`, `jinoyat`, `pessimistik`, `yozish`],
    answer: 0,
  },
  {
    q: `4022_admiral`,
    options: [`admiral`, `ishlaydi`, `kümülatif`, `xilma-xillik`],
    answer: 0,
  },
  {
    q: `4023_arc`,
    options: [`yoy`, `g'olib`, `davr`, `majburlamoq`],
    answer: 0,
  },
  {
    q: `4024_character`,
    options: [`xarakter`, `hal qilish`, `g'alati`, `yordam berish`],
    answer: 0,
  },
  {
    q: `4025_conscience`,
    options: [`vijdon`, `miting`, `ta'minlash`, `bezovta qilmoq`],
    answer: 0,
  },
  {
    q: `4026_fiery`,
    options: [
      `olovli`,
      `foyda`,
      `jonlantirish`,
      `ishlab chiqish; mashqa qilish`,
    ],
    answer: 0,
  },
  {
    q: `4027_flesh`,
    options: [`go'sht`, `roli`, `shitirlash`, `dahshatga tushgan`],
    answer: 0,
  },
  {
    q: `4028_grapefruit`,
    options: [`greypfrut`, `skript`, `din`, `mobil`],
    answer: 0,
  },
  {
    q: `4029_hay`,
    options: [`pichan`, `ko'rsatish`, `tasma`, `ip`],
    answer: 0,
  },
  {
    q: `4030_horrified`,
    options: [`dahshatga tushgan`, `dahshatli`, `onalik`, `ishora`],
    answer: 0,
  },
  {
    q: `4031_kerosene`,
    options: [`kerosin`, `beton`, `ahamiyatsiz`, `Bosh aylanishi`],
    answer: 0,
  },
  {
    q: `4032_loop`,
    options: [
      `halqa`,
      `ko'karish`,
      `nima bo'lishidan qat'iy nazar`,
      `imperiya`,
    ],
    answer: 0,
  },
  {
    q: `4033_paddle`,
    options: [`eshkak eshish`, `esda qolarli`, `behuda`, `saqlash`],
    answer: 0,
  },
  {
    q: `4034_raft`,
    options: [`sal`, `mashhur`, `muvozanat`, `sutemizuvchi`],
    answer: 0,
  },
  {
    q: `4035_sour`,
    options: [`nordon`, `sutemizuvchi`, `chaqmoqtosh`, `rozi emas`],
    answer: 0,
  },
  {
    q: `4036_stake`,
    options: [`qoziq`, `xushbo'y hid`, `soley`, `shudring`],
    answer: 0,
  },
  {
    q: `4037_steward`,
    options: [`boshqaruvchi`, `genom`, `ifloslantirish`, `zamondosh`],
    answer: 0,
  },
  { q: `4038_string`, options: [`ip`, `nam`, `boshpana`, `guvoh`], answer: 0 },
  {
    q: `4039_thorn`,
    options: [`tikan`, `gimnaziya`, `ta'sir qilish`, `tasniflash`],
    answer: 0,
  },
  {
    q: `4040_wreck`,
    options: [`halokat`, `jumla`, `shkaf`, `rejimi`],
    answer: 0,
  },
  {
    q: `4041_admonish`,
    options: [`nasihat qilish`, `ongsiz`, `kasallik`, `chayqalish`],
    answer: 0,
  },
  {
    q: `4042_audible`,
    options: [`eshitiladigan`, `moslashuvchan`, `tikan`, `qit'a`],
    answer: 0,
  },
  {
    q: `4043_awesome`,
    options: [`ajoyib`, `go'sht`, `samarali`, `na`],
    answer: 0,
  },
  {
    q: `4044_beware`,
    options: [`ehtiyot bo'ling`, `pop`, `Chiqish`, `tartibga solish`],
    answer: 0,
  },
  {
    q: `4045_brag`,
    options: [`maqtanmoq`, `genetik`, `hamdardlik`, `qadrlash`],
    answer: 0,
  },
  {
    q: `4046_conscious`,
    options: [`ongli`, `aralashish`, `joyi jannatda bo'lsin`, `iltimos`],
    answer: 0,
  },
  {
    q: `4047_disagree`,
    options: [
      `rozi emas`,
      `qadrlash`,
      `ko'ngilli`,
      `nima bo'lishidan qat'iy nazar`,
    ],
    answer: 0,
  },
  {
    q: `4048_echo`,
    options: [`aks-sado`, `quvg'in qilish`, `yolg'izlik`, `iqtisodiyot`],
    answer: 0,
  },
  {
    q: `4049_eventual`,
    options: [`yakuniy`, `miniatyura`, `diagramma`, `aqli raso`],
    answer: 0,
  },
  {
    q: `4050_hint`,
    options: [`ishora`, `global`, `baxtsiz`, `ko'rsatish`],
    answer: 0,
  },
  {
    q: `4051_idiot`,
    options: [`ahmoq`, `to'siq`, `saralash`, `quvg'in qilish`],
    answer: 0,
  },
  {
    q: `4052_immense`,
    options: [`ulkan`, `yozish`, `intellektual`, `rad etmoq`],
    answer: 0,
  },
  {
    q: `4053_indirect`,
    options: [`bilvosita`, `kümülatif`, `parrandachilik`, `interval`],
    answer: 0,
  },
  {
    q: `4054_option`,
    options: [`variant`, `tarbiyalash`, `skript`, `maksimallashtirish`],
    answer: 0,
  },
  {
    q: `4055_pastime`,
    options: [`o'yin-kulgi`, `ekzotik`, `tornado`, `avtograf`],
    answer: 0,
  },
  {
    q: `4056_perfect`,
    options: [`mukammal`, `chastota`, `ekzotik`, `xilma-xil`],
    answer: 0,
  },
  {
    q: `4057_pinpoint`,
    options: [
      `aniq belgilash`,
      `e'lon qilish`,
      `izolyatsiya qilish`,
      `deklanşör`,
    ],
    answer: 0,
  },
  {
    q: `4058_switch`,
    options: [`almashtirish`, `ogohlantir`, `tortib olish`, `hamdardlik`],
    answer: 0,
  },
  {
    q: `4059_thorough`,
    options: [`puxta`, `ichimlik`, `iqtisodiyot`, `katlama`],
    answer: 0,
  },
  {
    q: `4060_torment`,
    options: [`azob`, `tartibsizlik`, `avtomobil`, `sog'inish`],
    answer: 0,
  },
  {
    q: `4061_beak`,
    options: [`tumshug'i`, `eshitiladigan`, `aks-sado`, `bilimsiz`],
    answer: 0,
  },
  {
    q: `4062_damp`,
    options: [`nam`, `zarracha`, `dalolatnoma`, `turlari`],
    answer: 0,
  },
  {
    q: `4063_disapprove`,
    options: [
      `rad etmoq`,
      `diskriminatsiya qilish`,
      `o'zaro ta'sir qilish`,
      `zavq`,
    ],
    answer: 0,
  },
  {
    q: `4064_except`,
    options: [`bundan mustasno`, `kislorod`, `rozilik`, `pestitsid`],
    answer: 0,
  },
  {
    q: `4065_flight`,
    options: [`parvoz`, `leksiya`, `qusish`, `parom`],
    answer: 0,
  },
  {
    q: `4066_fond`,
    options: [`yaxshi ko'radi`, `tish`, `butunlay`, `hurmatsizlik`],
    answer: 0,
  },
  {
    q: `4067_immoral`,
    options: [`axloqsiz`, `indeks`, `omil`, `kostyum`],
    answer: 0,
  },
  {
    q: `4068_ivy`,
    options: [`pechak`, `xarakter`, `greypfrut`, `kiritish`],
    answer: 0,
  },
  {
    q: `4069_moan`,
    options: [`nola`, `asteroid`, `qamrab olmoq`, `yarashtirish`],
    answer: 0,
  },
  {
    q: `4070_oblivious`,
    options: [`e'tiborsiz`, `ushlab turish`, `murojaat qiling`, `to'xtash`],
    answer: 0,
  },
  {
    q: `4071_perish`,
    options: [`halok bo'lish`, `taslim bo'lish`, `chuqur`, `hal qiluvchi`],
    answer: 0,
  },
  {
    q: `4072_pit`,
    options: [`chuqur`, `hajviy`, `uchqun`, `ziyoratgoh`],
    answer: 0,
  },
  {
    q: `4073_rim`,
    options: [`jant`, `tarqatish`, `qattiq`, `murakkab`],
    answer: 0,
  },
  {
    q: `4074_roost`,
    options: [`xo'roz`, `zinapoya`, `e'tiborsiz`, `mudofaa`],
    answer: 0,
  },
  {
    q: `4075_slippery`,
    options: [`sirg'anchiq`, `turlari`, `quvg'in qilish`, `mis`],
    answer: 0,
  },
  {
    q: `4076_soar`,
    options: [`uchmoq`, `qorin`, `Bosh aylanishi`, `olovli`],
    answer: 0,
  },
  {
    q: `4077_trivial`,
    options: [`ahamiyatsiz`, `transport`, `janr`, `tahrirlash`],
    answer: 0,
  },
  {
    q: `4078_typical`,
    options: [`tipik`, `kattalashtirish`, `tayfun`, `yashirmoq`],
    answer: 0,
  },
  {
    q: `4079_utterly`,
    options: [`butunlay`, `topildi`, `yakuniy`, `bilvosita`],
    answer: 0,
  },
  {
    q: `4080_weep`,
    options: [`yig'lamoq`, `ko'pchilik`, `oqsil`, `semestr`],
    answer: 0,
  },
  {
    q: `4081_awhile`,
    options: [`bir muddat`, `pishirmoq`, `aralashmasi`, `boshpana`],
    answer: 0,
  },
  {
    q: `4082_cyberspace`,
    options: [`kibermakon`, `keng qamrovli`, `keskin`, `shabada`],
    answer: 0,
  },
  {
    q: `4083_edit`,
    options: [`tahrirlash`, `Elchixona`, `kamaytirish`, `qonun`],
    answer: 0,
  },
  { q: `4084_essay`, options: [`insho`, `engil`, `pop`, `to'siq`], answer: 0 },
  {
    q: `4085_evaluate`,
    options: [`baho bering`, `pasayish`, `tafsilot`, `xronika`],
    answer: 0,
  },
  {
    q: `4086_faint`,
    options: [`holsiz`, `serjant`, `qutqarish`, `ishonchli`],
    answer: 0,
  },
  {
    q: `4087_global`,
    options: [`global`, `imzo`, `halokat`, `sig'im`],
    answer: 0,
  },
  {
    q: `4088_gymnasium`,
    options: [`gimnaziya`, `ish haqi`, `muqobil`, `e'tiborsiz`],
    answer: 0,
  },
  {
    q: `4089_highlight`,
    options: [`ta'kidlash`, `parchalash`, `bo'sh`, `qo'lqop`],
    answer: 0,
  },
  {
    q: `4090_ignorant`,
    options: [`bilimsiz`, `jihozlash`, `tepalik`, `arpa`],
    answer: 0,
  },
  {
    q: `4091_index`,
    options: [`indeks`, `puding`, `adolatli`, `ushlash`],
    answer: 0,
  },
  {
    q: `4092_lecture`,
    options: [`leksiya`, `polkovnik`, `pishirmoq`, `yetishtirish`],
    answer: 0,
  },
  {
    q: `4093_moral`,
    options: [`ahloqiy`, `qonun`, `diskriminatsiya qilish`, `qishloq`],
    answer: 0,
  },
  {
    q: `4094_operate`,
    options: [`ishlaydi`, `jahl`, `nozik`, `aks-sado`],
    answer: 0,
  },
  {
    q: `4095_private`,
    options: [`xususiy`, `behuda`, `zudlik bilan`, `tekstura`],
    answer: 0,
  },
  {
    q: `4096_recent`,
    options: [`yaqinda`, `parallel`, `moslashuvchan`, `snap`],
    answer: 0,
  },
  {
    q: `4097_resolution`,
    options: [`rezolyutsiya`, `munosib`, `bundan mustasno`, `butunlay`],
    answer: 0,
  },
  {
    q: `4098_semester`,
    options: [`semestr`, `ko'ngilli`, `mis`, `puflamoq`],
    answer: 0,
  },
  {
    q: `4099_typewritten`,
    options: [`mashinkada yozilgan`, `talaffuz qilish`, `ko'rsatish`, `nordon`],
    answer: 0,
  },
  {
    q: `4100_weird`,
    options: [`g'alati`, `ziyoratgoh`, `baxtsiz hodisa`, `atmosfera`],
    answer: 0,
  },
  {
    q: `4101_absolute`,
    options: [`mutlaq`, `taxt`, `sehrlash`, `maydalash`],
    answer: 0,
  },
  {
    q: `4102_alas`,
    options: [`afsuski`, `masxara qilish`, `shikastlamoq`, `instituti`],
    answer: 0,
  },
  {
    q: `4103_attentive`,
    options: [`diqqatli`, `jangovar`, `musht`, `ahamiyatsiz`],
    answer: 0,
  },
  {
    q: `4104_cape`,
    options: [`peshtaxta`, `integratsiyalash`, `achinish`, `to'yimli`],
    answer: 0,
  },
  {
    q: `4105_envision`,
    options: [`tasavvur qilish`, `sog'inish`, `jannat`, `halok bo'lish`],
    answer: 0,
  },
  {
    q: `4106_evenly`,
    options: [`teng ravishda`, `ifodalash`, `roli`, `ming yillik`],
    answer: 0,
  },
  {
    q: `4107_folk`,
    options: [`xalq`, `sehrlash`, `tish`, `mustahkamlash`],
    answer: 0,
  },
  {
    q: `4108_melt`,
    options: [`eritish`, `bilvosita`, `keng qamrovli`, `kirish`],
    answer: 0,
  },
  {
    q: `4109_patch`,
    options: [`yamoq`, `saralash`, `deklanşör`, `tepalik`],
    answer: 0,
  },
  {
    q: `4110_pleasure`,
    options: [`zavq`, `izchil`, `to'yimli`, `tamoyili`],
    answer: 0,
  },
  {
    q: `4111_pop`,
    options: [`pop`, `zavq`, `parchalash`, `o'yin-kulgi`],
    answer: 0,
  },
  {
    q: `4112_pudding`,
    options: [`puding`, `xususiy`, `ishonchli`, `qo'rqoq`],
    answer: 0,
  },
  {
    q: `4113_rail`,
    options: [`temir yo'l`, `mish-mish`, `hal qilish`, `qulay`],
    answer: 0,
  },
  {
    q: `4114_recipe`,
    options: [`retsept`, `asosiy`, `qo'rqoq`, `ko'chish`],
    answer: 0,
  },
  {
    q: `4115_role`,
    options: [`roli`, `joriy`, `to'xtatish`, `organik`],
    answer: 0,
  },
  {
    q: `4116_shrink`,
    options: [`qisqarish`, `muqobil`, `ta'sir`, `din`],
    answer: 0,
  },
  {
    q: `4117_soak`,
    options: [`ho'llash`, `qo'rquv`, `pozitsiya`, `tikuv`],
    answer: 0,
  },
  {
    q: `4118_spark`,
    options: [`uchqun`, `yadro`, `tumshug'i`, `qator`],
    answer: 0,
  },
  { q: `4119_spirit`, options: [`ruh`, `halokat`, `tez`, `zaif`], answer: 0 },
  { q: `4120_suit`, options: [`kostyum`, `azob`, `nam`, `ajoyib`], answer: 0 },
  {
    q: `4121_account`,
    options: [`hisob`, `podval`, `aytuvchi`, `tug'ilgan joyi`],
    answer: 0,
  },
  {
    q: `4122_architect`,
    options: [`arxitektor`, `astar`, `jonli`, `birgalikda`],
    answer: 0,
  },
  {
    q: `4123_conceal`,
    options: [`yashirmoq`, `uy`, `shiddat bilan`, `admiral`],
    answer: 0,
  },
  {
    q: `4124_crime`,
    options: [`jinoyat`, `folklor`, `qoqilish`, `diagramma`],
    answer: 0,
  },
  {
    q: `4125_deed`,
    options: [`dalolatnoma`, `interval`, `ayyorlik`, `o'zgartirish`],
    answer: 0,
  },
  {
    q: `4126_gratitude`,
    options: [`minnatdorchilik`, `qurish`, `puflamoq`, `urilgan`],
    answer: 0,
  },
  {
    q: `4127_habitat`,
    options: [`yashash joyi`, `murojaat qiling`, `boncuk`, `bir muddat`],
    answer: 0,
  },
  {
    q: `4128_intervene`,
    options: [`aralashish`, `xronika`, `vakolatli`, `holsiz`],
    answer: 0,
  },
  {
    q: `4129_landmark`,
    options: [`diqqatga sazovor joy`, `Bosh aylanishi`, `garchi`, `hodisa`],
    answer: 0,
  },
  {
    q: `4130_legal`,
    options: [`qonuniy`, `tartibga solish`, `ekvator`, `qirib tashlash`],
    answer: 0,
  },
  {
    q: `4131_memorable`,
    options: [`esda qolarli`, `o'zgartirish`, `kattalashtirish`, `shaffof`],
    answer: 0,
  },
  {
    q: `4132_oblige`,
    options: [`majburlamoq`, `yuvish`, `qishloq`, `qamrab olmoq`],
    answer: 0,
  },
  {
    q: `4133_offence`,
    options: [`jinoyat`, `bo'sh`, `o'chirish`, `quyosh`],
    answer: 0,
  },
  {
    q: `4134_proclaim`,
    options: [`e'lon qilish`, `qoziq`, `qiyosiy`, `eritish`],
    answer: 0,
  },
  {
    q: `4135_rally`,
    options: [`miting`, `qo'lqop`, `eshkak eshish`, `marosim`],
    answer: 0,
  },
  {
    q: `4136_resolve`,
    options: [`hal qilish`, `mobil`, `qichishish`, `federal`],
    answer: 0,
  },
  {
    q: `4137_resource`,
    options: [`manba`, `qator`, `organik`, `roli`],
    answer: 0,
  },
  {
    q: `4138_sentence`,
    options: [`jumla`, `zudlik bilan`, `parom`, `izoh`],
    answer: 0,
  },
  {
    q: `4139_volunteer`,
    options: [`ko'ngilli`, `g'alayon`, `tanglay`, `tomir`],
    answer: 0,
  },
  {
    q: `4140_witness`,
    options: [`guvoh`, `yashash joyi`, `tovarlar`, `garchi`],
    answer: 0,
  },
  {
    q: `4141_access`,
    options: [`kirish`, `rozi emas`, `masxara qilish`, `tipik`],
    answer: 0,
  },
  {
    q: `4142_conduct`,
    options: [`o'tkazish`, `jannat`, `nomzod`, `ozg'in`],
    answer: 0,
  },
  {
    q: `4143_constant`,
    options: [`doimiy`, `arxitektor`, `ming yillik`, `mikroavtobus`],
    answer: 0,
  },
  {
    q: `4144_crack`,
    options: [`yorilish`, `majburlamoq`, `quyosh`, `qopqoq`],
    answer: 0,
  },
  {
    q: `4145_device`,
    options: [`qurilma`, `merosxo'r`, `ushlab turish`, `yirtqich`],
    answer: 0,
  },
  {
    q: `4146_enclose`,
    options: [`qamrab olmoq`, `joyi jannatda bo'lsin`, `kuting`, `puding`],
    answer: 0,
  },
  {
    q: `4147_grip`,
    options: [`ushlash`, `qutqarish`, `parallel`, `mayiz`],
    answer: 0,
  },
  {
    q: `4148_halt`,
    options: [`to'xtash`, `almashtirish`, `dastgoh`, `ko'rib chiqish`],
    answer: 0,
  },
  {
    q: `4149_impending`,
    options: [`yaqinlashib kelayotgan`, `sindirish`, `pasayish`, `vabo`],
    answer: 0,
  },
  {
    q: `4150_influence`,
    options: [`ta'sir qilish`, `halok bo'lish`, `esda qolarli`, `zarracha`],
    answer: 0,
  },
  {
    q: `4151_law`,
    options: [`qonun`, `ekvator`, `qorin`, `afsona`],
    answer: 0,
  },
  {
    q: `4152_mode`,
    options: [`rejimi`, `mulohaza yuritish`, `podval`, `o'lchov`],
    answer: 0,
  },
  {
    q: `4153_perspire`,
    options: [`terlash`, `no'xat`, `xarakter`, `uchmoq`],
    answer: 0,
  },
  {
    q: `4154_replace`,
    options: [`almashtiring`, `tinchlantiruvchi`, `texnik`, `zahar`],
    answer: 0,
  },
  {
    q: `4155_snap`,
    options: [`snap`, `yig'lamoq`, `tushuncha`, `pessimistik`],
    answer: 0,
  },
  {
    q: `4156_sly`,
    options: [`ayyor`, `ajoyib`, `xronika`, `bo'sh`],
    answer: 0,
  },
  {
    q: `4157_tend`,
    options: [`moyil`, `chalkashtirmoq`, `bilaguzuk`, `aniq belgilash`],
    answer: 0,
  },
  {
    q: `4158_valid`,
    options: [`yaroqli`, `ob'ektiv`, `murakkab`, `suruv`],
    answer: 0,
  },
  {
    q: `4159_version`,
    options: [`versiya`, `mayiz`, `jumla`, `adabiyot`],
    answer: 0,
  },
  {
    q: `4160_whatsoever`,
    options: [
      `nima bo'lishidan qat'iy nazar`,
      `hasad`,
      `klaster`,
      `ehtiyot bo'ling`,
    ],
    answer: 0,
  },
  {
    q: `4161_alongside`,
    options: [`yonida`, `rejimi`, `mish-mish`, `yoy`],
    answer: 0,
  },
  {
    q: `4162_appetite`,
    options: [`ishtaha`, `manba`, `xayriya`, `yomg'ir o'rmoni`],
    answer: 0,
  },
  {
    q: `4163_assist`,
    options: [`yordam berish`, `to'xtash`, `foyda`, `engil`],
    answer: 0,
  },
  {
    q: `4164_breeze`,
    options: [`shabada`, `yomonlashadi`, `farqlanadi`, `zoologiya`],
    answer: 0,
  },
  {
    q: `4165_defy`,
    options: [`qarshilik ko'rsatish`, `yaqinda`, `xilma-xillik`, `fuqarolik`],
    answer: 0,
  },
  {
    q: `4166_display`,
    options: [`ko'rsatish`, `dahshatli tush`, `admiral`, `odatiy`],
    answer: 0,
  },
  {
    q: `4167_efficient`,
    options: [`samarali`, `hurmatli`, `ko'rib chiqish`, `taqdir`],
    answer: 0,
  },
  {
    q: `4168_feeble`,
    options: [`zaif`, `o'rtasida`, `bashorat qilish`, `imzo`],
    answer: 0,
  },
  {
    q: `4169_forgive`,
    options: [`kechir`, `nima bo'lishidan qat'iy nazar`, `uy`, `qutqarish`],
    answer: 0,
  },
  {
    q: `4170_lively`,
    options: [`jonli`, `ifloslantirish`, `qopqoq`, `genetik`],
    answer: 0,
  },
  {
    q: `4171_majestic`,
    options: [`ulug'vor`, `yuk`, `qolib ketmoq`, `texnik`],
    answer: 0,
  },
  {
    q: `4172_nor`,
    options: [`na`, `jinoyat`, `almashtirish`, `g'isht`],
    answer: 0,
  },
  {
    q: `4173_outraged`,
    options: [`g'azablangan`, `soley`, `o'lchov`, `keskin`],
    answer: 0,
  },
  {
    q: `4174_pessimistic`,
    options: [`pessimistik`, `tasodifiy`, `maqtanmoq`, `almashtiring`],
    answer: 0,
  },
  {
    q: `4175_rumor`,
    options: [`mish-mish`, `rad etmoq`, `zinapoya`, `hajviy`],
    answer: 0,
  },
  {
    q: `4176_slap`,
    options: [`tarsaki`, `kotib`, `ishtiyoq`, `ahmoq`],
    answer: 0,
  },
  {
    q: `4177_smash`,
    options: [`sindirish`, `fon`, `ozg'in`, `tikan`],
    answer: 0,
  },
  {
    q: `4178_subject`,
    options: [`Mavzu`, `qo'ziqorin`, `urmoq`, `jozibasi`],
    answer: 0,
  },
  {
    q: `4179_wage`,
    options: [`ish haqi`, `aytuvchi`, `aql bovar qilmaydigan`, `qonuniy`],
    answer: 0,
  },
  {
    q: `4180_whereas`,
    options: [`holbuki`, `shikoyat qilish`, `teri`, `quyuqlashgan`],
    answer: 0,
  },
  {
    q: `4181_animate`,
    options: [`jonlantirish`, `manba`, `afsona`, `zaharli`],
    answer: 0,
  },
  {
    q: `4182_classify`,
    options: [`tasniflash`, `instituti`, `serjant`, `keng tarqalgan`],
    answer: 0,
  },
  {
    q: `4183_concede`,
    options: [`tan olish`, `qiynalgan`, `kotib`, `afsuski`],
    answer: 0,
  },
  {
    q: `4184_concept`,
    options: [`tushuncha`, `tikan`, `tasodifiy`, `qichishish`],
    answer: 0,
  },
  {
    q: `4185_construct`,
    options: [`qurish`, `din`, `tikuv`, `gandiraklab`],
    answer: 0,
  },
  {
    q: `4186_decade`,
    options: [`o'n yil`, `temir yo'l`, `botqoq`, `chastota`],
    answer: 0,
  },
  {
    q: `4187_diagram`,
    options: [`diagramma`, `parom`, `arxitektor`, `salbiy`],
    answer: 0,
  },
  {
    q: `4188_ferry`,
    options: [`parom`, `pestitsid`, `leksiya`, `jonli`],
    answer: 0,
  },
  {
    q: `4189_handy`,
    options: [`qulay`, `tayfun`, `shakllanishi`, `xo'roz`],
    answer: 0,
  },
  {
    q: `4190_isolate`,
    options: [
      `izolyatsiya qilish`,
      `yaroqli`,
      `dahshatga tushgan`,
      `madaniyat`,
    ],
    answer: 0,
  },
  {
    q: `4191_longing`,
    options: [`sog'inish`, `baho bering`, `kengaytirish`, `saralash`],
    answer: 0,
  },
  {
    q: `4192_numerous`,
    options: [`ko'p`, `ko'rish`, `ob'ektiv`, `ishlaydi`],
    answer: 0,
  },
  {
    q: `4193_particle`,
    options: [`zarracha`, `imperiya`, `yonida`, `yig'lamoq`],
    answer: 0,
  },
  {
    q: `4194_plea`,
    options: [`iltimos`, `qoralamoq`, `yig'lamoq`, `bir xil`],
    answer: 0,
  },
  {
    q: `4195_refrain`,
    options: [`tiyilmoq`, `dahshatga tushgan`, `instituti`, `izohlash`],
    answer: 0,
  },
  {
    q: `4196_review`,
    options: [`ko'rib chiqish`, `kibermakon`, `tugatmoq`, `hal qilish`],
    answer: 0,
  },
  {
    q: `4197_sophisticated`,
    options: [`murakkab`, `murda`, `yoy`, `halqa`],
    answer: 0,
  },
  {
    q: `4198_surrender`,
    options: [`taslim bo'lish`, `darajasi`, `to'qimachilik`, `hisob`],
    answer: 0,
  },
  {
    q: `4199_upright`,
    options: [`tik`, `ozg'in`, `ta'sir qilish`, `telegraf`],
    answer: 0,
  },
  {
    q: `4200_worthwhile`,
    options: [`munosib`, `holbuki`, `keng tarqalgan`, `izchil`],
    answer: 0,
  },
  {
    q: `4201_alliance`,
    options: [`ittifoq`, `kamaytirish`, `afsuski`, `tasodifiy`],
    answer: 0,
  },
  {
    q: `4202_applause`,
    options: [`qarsaklar`, `rozilik`, `qator`, `ongsiz`],
    answer: 0,
  },
  {
    q: `4203_armed`,
    options: [`qurollangan`, `vorislik`, `xor`, `itoatsiz`],
    answer: 0,
  },
  {
    q: `4204_authoritative`,
    options: [`vakolatli`, `vakolatli`, `aylantirmoq`, `farqlanadi`],
    answer: 0,
  },
  {
    q: `4205_ceremony`,
    options: [`marosim`, `o'chirish`, `birgalikda`, `qarshilik ko'rsatish`],
    answer: 0,
  },
  {
    q: `4206_culture`,
    options: [`madaniyat`, `muvozanat`, `supurish`, `tortib olish`],
    answer: 0,
  },
  {
    q: `4207_defense`,
    options: [`mudofaa`, `bilaguzuk`, `urilgan`, `shakllanishi`],
    answer: 0,
  },
  {
    q: `4208_detail`,
    options: [`tafsilot`, `urilgan`, `axloqsiz`, `chegara`],
    answer: 0,
  },
  {
    q: `4209_diverse`,
    options: [`xilma-xil`, `tahlil qilish`, `manba`, `ilohiy`],
    answer: 0,
  },
  {
    q: `4210_enchant`,
    options: [`sehrlash`, `snap`, `taklif`, `vade`],
    answer: 0,
  },
  {
    q: `4211_equip`,
    options: [`jihozlash`, `kengaytirish`, `miltillash`, `ko'pchilik`],
    answer: 0,
  },
  {
    q: `4212_exception`,
    options: [`istisno`, `hisob`, `qoziq`, `bashorat qilish`],
    answer: 0,
  },
  { q: `4213_genre`, options: [`janr`, `organik`, `snap`, `oldin`], answer: 0 },
  {
    q: `4214_impact`,
    options: [`ta'sir`, `ittifoq`, `shabada`, `indeks`],
    answer: 0,
  },
  {
    q: `4215_lure`,
    options: [`jozibasi`, `tushuncha`, `hurmatli`, `moyil`],
    answer: 0,
  },
  {
    q: `4216_obstacle`,
    options: [`to'siq`, `hodisa`, `yorilish`, `sirg'anchiq`],
    answer: 0,
  },
  {
    q: `4217_shelter`,
    options: [`boshpana`, `ishtiyoq`, `tadqiqot`, `ta'minlash`],
    answer: 0,
  },
  {
    q: `4218_sort`,
    options: [`saralash`, `halqa`, `rezolyutsiya`, `shaharlik`],
    answer: 0,
  },
  {
    q: `4219_supply`,
    options: [`ta'minlash`, `hal qiluvchi`, `mobil`, `davlat`],
    answer: 0,
  },
  {
    q: `4220_vain`,
    options: [`behuda`, `dalolatnoma`, `kostyum`, `iqlim`],
    answer: 0,
  },
  {
    q: `4221_alternative`,
    options: [`muqobil`, `saqlab qolish`, `urish`, `asabiy`],
    answer: 0,
  },
  {
    q: `4222_avenue`,
    options: [`prospekt`, `achinish`, `zamondosh`, `no'xat`],
    answer: 0,
  },
  {
    q: `4223_belly`,
    options: [`qorin`, `targ'ib qilish`, `jonli`, `tanglay`],
    answer: 0,
  },
  {
    q: `4224_bid`,
    options: [`taklif`, `ishtaha`, `baxtsizlik`, `xiyonat`],
    answer: 0,
  },
  {
    q: `4225_blow`,
    options: [`puflamoq`, `kostyum`, `na`, `aniqlash`],
    answer: 0,
  },
  {
    q: `4226_conflict`,
    options: [`ziddiyat`, `maksimallashtirish`, `yadro`, `prospekt`],
    answer: 0,
  },
  {
    q: `4227_continent`,
    options: [`qit'a`, `shabada`, `genetik`, `axloqsiz`],
    answer: 0,
  },
  {
    q: `4228_current`,
    options: [`joriy`, `zo'ravonlik`, `zahar`, `muskul`],
    answer: 0,
  },
  {
    q: `4229_disrespect`,
    options: [`hurmatsizlik`, `portlash`, `mashhur`, `ta'sir`],
    answer: 0,
  },
  {
    q: `4230_enthusiasm`,
    options: [`ishtiyoq`, `plantatsiya`, `o'choq`, `qulay`],
    answer: 0,
  },
  {
    q: `4231_harsh`,
    options: [`qattiq`, `maxfiy`, `versiya`, `seping`],
    answer: 0,
  },
  {
    q: `4232_lean`,
    options: [`ozg'in`, `izolyatsiya qilish`, `rivojlanadi`, `teng ravishda`],
    answer: 0,
  },
  {
    q: `4233_meantime`,
    options: [`shu bilan birga`, `tovarlar`, `hodisa`, `g'alayon`],
    answer: 0,
  },
  {
    q: `4234_mischief`,
    options: [`zarar`, `texnik`, `likopcha`, `tornado`],
    answer: 0,
  },
  {
    q: `4235_muscle`,
    options: [`muskul`, `ta'minlash`, `moyil`, `merosxo'r`],
    answer: 0,
  },
  {
    q: `4236_rescue`,
    options: [`qutqarish`, `ta'kidlash`, `bezovta qilmoq`, `maxfiy`],
    answer: 0,
  },
  {
    q: `4237_succession`,
    options: [`vorislik`, `qichishish`, `madaniyat`, `o'rmonli`],
    answer: 0,
  },
  {
    q: `4238_terrain`,
    options: [`er`, `ta'sir qilish`, `yangilash`, `ta'sir qilish`],
    answer: 0,
  },
  {
    q: `4239_timid`,
    options: [
      `qo'rqoq`,
      `bezovta qilmoq`,
      `vorislik`,
      `yaqinlashib kelayotgan`,
    ],
    answer: 0,
  },
  {
    q: `4240_violence`,
    options: [`zo'ravonlik`, `axloqsiz`, `yarashtirish`, `xor`],
    answer: 0,
  },
  {
    q: `4241_affect`,
    options: [`ta'sir qilish`, `semestr`, `sindirish`, `ongli`],
    answer: 0,
  },
  {
    q: `4242_autograph`,
    options: [`avtograf`, `na`, `miting`, `supurish`],
    answer: 0,
  },
  {
    q: `4243_bead`,
    options: [`boncuk`, `uchmoq`, `ko'pchilik`, `yiqilish`],
    answer: 0,
  },
  {
    q: `4244_brew`,
    options: [`pishirmoq`, `qusish`, `targ'ib qilish`, `tanho`],
    answer: 0,
  },
  {
    q: `4245_charm`,
    options: [`joziba`, `tadqiqot`, `mudofaa`, `iltimos`],
    answer: 0,
  },
  {
    q: `4246_destiny`,
    options: [`taqdir`, `ruh`, `qonuniy`, `greypfrut`],
    answer: 0,
  },
  {
    q: `4247_horn`,
    options: [`shox`, `zamondosh`, `yamoq`, `ta'sir qilish`],
    answer: 0,
  },
  {
    q: `4248_irritable`,
    options: [`asabiy`, `yamoq`, `hozirda`, `vorislik`],
    answer: 0,
  },
  {
    q: `4249_lag`,
    options: [`kechikish`, `tekstura`, `prospekt`, `bo'ronli`],
    answer: 0,
  },
  {
    q: `4250_maximize`,
    options: [`maksimallashtirish`, `halqa`, `zarracha`, `miting`],
    answer: 0,
  },
  {
    q: `4251_nightmare`,
    options: [`dahshatli tush`, `e'tibor bering`, `yuqumli`, `o'lja`],
    answer: 0,
  },
  {
    q: `4252_nutritious`,
    options: [`to'yimli`, `zamon`, `izohlash`, `dalolatnoma`],
    answer: 0,
  },
  {
    q: `4253_protein`,
    options: [`oqsil`, `tornado`, `birlik`, `parvoz`],
    answer: 0,
  },
  {
    q: `4254_signature`,
    options: [`imzo`, `prospekt`, `sal`, `yuqtirish`],
    answer: 0,
  },
  {
    q: `4255_stuff`,
    options: [`narsalar`, `izoh`, `jozibasi`, `leksiya`],
    answer: 0,
  },
  {
    q: `4256_subconscious`,
    options: [`ongsiz`, `almashtiring`, `qit'a`, `joziba`],
    answer: 0,
  },
  {
    q: `4257_van`,
    options: [`mikroavtobus`, `ulug'vor`, `jinoyat`, `korporativ`],
    answer: 0,
  },
  {
    q: `4258_warn`,
    options: [`ogohlantir`, `avtostop`, `terlash`, `qurilma`],
    answer: 0,
  },
  {
    q: `4259_workout`,
    options: [
      `ishlab chiqish; mashqa qilish`,
      `izohlash`,
      `federal`,
      `achinish`,
    ],
    answer: 0,
  },
  {
    q: `4260_zoom`,
    options: [`kattalashtirish`, `aks-sado`, `bilvosita`, `muallif`],
    answer: 0,
  },
  {
    q: `4261_brick`,
    options: [`g'isht`, `yaqinlashib kelayotgan`, `ko'rish`, `tasavvur qilish`],
    answer: 0,
  },
  {
    q: `4262_crumble`,
    options: [`parchalanish`, `pechak`, `hid`, `tovarlar`],
    answer: 0,
  },
  {
    q: `4263_dough`,
    options: [`xamir`, `xilma-xil`, `vade`, `ishtaha`],
    answer: 0,
  },
  {
    q: `4264_express`,
    options: [`ifodalash`, `o'rmonli`, `ogohlantir`, `o'rnatish`],
    answer: 0,
  },
  {
    q: `4265_fist`,
    options: [`musht`, `elakdan o'tkazish`, `darajasi`, `halqa`],
    answer: 0,
  },
  {
    q: `4266_flexible`,
    options: [`moslashuvchan`, `murakkab`, `halqa`, `kotib`],
    answer: 0,
  },
  {
    q: `4267_flush`,
    options: [`yuvish`, `baxtsizlik`, `imperiya`, `transport`],
    answer: 0,
  },
  {
    q: `4268_injure`,
    options: [`shikastlamoq`, `ishonchsizlik`, `qattiq`, `zaxira`],
    answer: 0,
  },
  {
    q: `4269_lump`,
    options: [`bo'lak`, `bo'sh`, `bo'g'moq`, `zarar`],
    answer: 0,
  },
  {
    q: `4270_mixture`,
    options: [`aralashmasi`, `afsuski`, `mustahkamlash`, `puxta`],
    answer: 0,
  },
  {
    q: `4271_reconcile`,
    options: [`yarashtirish`, `kesib o'tish`, `kislorod`, `behuda`],
    answer: 0,
  },
  {
    q: `4272_ruin`,
    options: [`xarob`, `shaffof`, `porlash`, `jonli`],
    answer: 0,
  },
  {
    q: `4273_shatter`,
    options: [`parchalash`, `shitirlash`, `sartarosh`, `pop`],
    answer: 0,
  },
  {
    q: `4274_shutter`,
    options: [`deklanşör`, `ko'chish`, `boshqaruvchi`, `chalkashtirmoq`],
    answer: 0,
  },
  {
    q: `4275_sift`,
    options: [
      `elakdan o'tkazish`,
      `o'zaro ta'sir qilish`,
      `jangovar`,
      `tumshug'i`,
    ],
    answer: 0,
  },
  {
    q: `4276_slight`,
    options: [`engil`, `yorilish`, `bob`, `ziddiyat`],
    answer: 0,
  },
  {
    q: `4277_sparkle`,
    options: [`porlash`, `jant`, `parchalanish`, `tarbiyalovchi`],
    answer: 0,
  },
  {
    q: `4278_sprinkle`,
    options: [`seping`, `etuk`, `sog'inish`, `mish-mish`],
    answer: 0,
  },
  {
    q: `4279_stale`,
    options: [`eskirgan`, `birgalikda`, `qiynalgan`, `so'm`],
    answer: 0,
  },
  {
    q: `4280_utter`,
    options: [`talaffuz qilish`, `yoy`, `xushbo'y hid`, `yo'q bo'lib ketgan`],
    answer: 0,
  },
  {
    q: `4281_although`,
    options: [`garchi`, `qolib ketmoq`, `o'rtasida`, `kamaytirish`],
    answer: 0,
  },
  {
    q: `4282_apply`,
    options: [`murojaat qiling`, `foydali`, `shikoyat qilish`, `avtostop`],
    answer: 0,
  },
  {
    q: `4283_await`,
    options: [`kuting`, `chuqur`, `indeks`, `samarali`],
    answer: 0,
  },
  {
    q: `4284_beloved`,
    options: [`sevgilim`, `tanho`, `zavq`, `yadro`],
    answer: 0,
  },
  {
    q: `4285_bury`,
    options: [`dafn qilmoq`, `vade`, `xilma-xil`, `mashinkada yozilgan`],
    answer: 0,
  },
  {
    q: `4286_climate`,
    options: [`iqlim`, `boshpana`, `sevgilim`, `taklif`],
    answer: 0,
  },
  {
    q: `4287_complain`,
    options: [`shikoyat qilish`, `nozik`, `joriy`, `xamir`],
    answer: 0,
  },
  {
    q: `4288_confuse`,
    options: [`chalkashtirmoq`, `jozibasi`, `yuk`, `bundan mustasno`],
    answer: 0,
  },
  {
    q: `4289_due`,
    options: [`muddati`, `ibodat qiling`, `azob`, `likopcha`],
    answer: 0,
  },
  {
    q: `4290_entire`,
    options: [`butun`, `samolyot`, `eskirgan`, `kuting`],
    answer: 0,
  },
  {
    q: `4291_establish`,
    options: [`o'rnatish`, `axloqiy`, `tug'ilgan joyi`, `shkaf`],
    answer: 0,
  },
  {
    q: `4292_furnace`,
    options: [`o'choq`, `aralashtirmoq`, `yuqtirish`, `global`],
    answer: 0,
  },
  { q: `4293_leash`, options: [`tasma`, `janr`, `uchun`, `fon`], answer: 0 },
  {
    q: `4294_mature`,
    options: [`etuk`, `zohid`, `pichan`, `chuqur`],
    answer: 0,
  },
  {
    q: `4295_measure`,
    options: [`o'lchov`, `xo'roz`, `mutlaq`, `kechikish`],
    answer: 0,
  },
  {
    q: `4296_midst`,
    options: [`o'rtasida`, `ishora`, `chegara`, `mutlaq`],
    answer: 0,
  },
  {
    q: `4297_misery`,
    options: [`baxtsizlik`, `tasniflash`, `yashash joyi`, `eskirgan`],
    answer: 0,
  },
  {
    q: `4298_prior`,
    options: [`oldin`, `yuqumli`, `sirg'anchiq`, `ruh`],
    answer: 0,
  },
  {
    q: `4299_research`,
    options: [`tadqiqot`, `qisqarish`, `hudud`, `urish`],
    answer: 0,
  },
  {
    q: `4300_variety`,
    options: [`xilma-xillik`, `bo'lak`, `axloqiy`, `klaster`],
    answer: 0,
  },
  {
    q: `4301_altogether`,
    options: [`birgalikda`, `shkaf`, `chayqalish`, `arxitektor`],
    answer: 0,
  },
  {
    q: `4302_bind`,
    options: [`bog'lamoq`, `olovli`, `ichimlik`, `ho'llash`],
    answer: 0,
  },
  {
    q: `4303_bruise`,
    options: [`ko'karish`, `kechir`, `tekstura`, `plantatsiya`],
    answer: 0,
  },
  {
    q: `4304_custom`,
    options: [`odatiy`, `korporativ`, `foydali`, `astar`],
    answer: 0,
  },
  {
    q: `4305_disobedient`,
    options: [`itoatsiz`, `atmosfera`, `yomonlashadi`, `qattiq`],
    answer: 0,
  },
  {
    q: `4306_foresee`,
    options: [`bashorat qilish`, `iqlim`, `samolyot`, `oshirish`],
    answer: 0,
  },
  {
    q: `4307_glimpse`,
    options: [`ko'rish`, `intellektual`, `astar`, `urmoq`],
    answer: 0,
  },
  {
    q: `4308_hoop`,
    options: [`halqa`, `o'yin-kulgi`, `saqlab qolish`, `aralashish`],
    answer: 0,
  },
  {
    q: `4309_misfortune`,
    options: [`baxtsizlik`, `ulkan`, `narsalar`, `Elchixona`],
    answer: 0,
  },
  {
    q: `4310_negative`,
    options: [`salbiy`, `pichan`, `tarsaki`, `rozilik`],
    answer: 0,
  },
  {
    q: `4311_per`,
    options: [`boshiga`, `qattiq`, `quyuqlashgan`, `insho`],
    answer: 0,
  },
  {
    q: `4312_plead`,
    options: [`iltimos`, `katlama`, `chidamli`, `esda qolarli`],
    answer: 0,
  },
  {
    q: `4313_rip`,
    options: [
      `joyi jannatda bo'lsin`,
      `ta'sir qilish`,
      `yetishtirish`,
      `xushbo'y hid`,
    ],
    answer: 0,
  },
  {
    q: `4314_sake`,
    options: [`uchun`, `qamrab olmoq`, `tahrirlash`, `boshqaruvchi`],
    answer: 0,
  },
  {
    q: `4315_scrape`,
    options: [`qirib tashlash`, `joziba`, `minnatdorchilik`, `mashhur`],
    answer: 0,
  },
  {
    q: `4316_source`,
    options: [`manba`, `qiyosiy`, `ko'karish`, `qorin`],
    answer: 0,
  },
  {
    q: `4317_stern`,
    options: [`qattiq`, `avtomobil`, `hasad`, `tasma`],
    answer: 0,
  },
  {
    q: `4318_stitch`,
    options: [`tikuv`, `bashorat qilish`, `chalkashtirmoq`, `soley`],
    answer: 0,
  },
  {
    q: `4319_thump`,
    options: [`urish`, `xabar bering`, `zarar`, `vijdon`],
    answer: 0,
  },
  {
    q: `4320_vehement`,
    options: [`shiddat bilan`, `parvoz`, `ishonchsizlik`, `depozit`],
    answer: 0,
  },
  {
    q: `4321_civilization`,
    options: [`sivilizatsiya`, `guvoh`, `asabiy`, `ishonchsizlik`],
    answer: 0,
  },
  {
    q: `4322_convenient`,
    options: [`qulay`, `iltimos`, `qurish`, `strategiya`],
    answer: 0,
  },
  {
    q: `4323_den`,
    options: [`uy`, `hal qiluvchi ahamiyatga ega`, `yiqilish`, `janr`],
    answer: 0,
  },
  {
    q: `4324_dew`,
    options: [`shudring`, `zoologiya`, `faraz`, `polkovnik`],
    answer: 0,
  },
  {
    q: `4325_drastic`,
    options: [`keskin`, `puflamoq`, `ongli`, `massa`],
    answer: 0,
  },
  {
    q: `4326_exit`,
    options: [`Chiqish`, `chaqmoqtosh`, `muallif`, `qarsaklar`],
    answer: 0,
  },
  {
    q: `4327_flock`,
    options: [`suruv`, `teri`, `taqdir`, `jinoyat`],
    answer: 0,
  },
  {
    q: `4328_fold`,
    options: [`katlama`, `tomir`, `murakkablashtirish`, `topshiriq`],
    answer: 0,
  },
  { q: `4329_lid`, options: [`qopqoq`, `xamir`, `kirish`, `omil`], answer: 0 },
  {
    q: `4330_loom`,
    options: [`dastgoh`, `fuqarolik`, `nam`, `topildi`],
    answer: 0,
  },
  {
    q: `4331_mighty`,
    options: [`qudratli`, `ongli`, `puding`, `istisno`],
    answer: 0,
  },
  {
    q: `4332_mushroom`,
    options: [`qo'ziqorin`, `mudofaa`, `g'olib`, `tortmoq`],
    answer: 0,
  },
  {
    q: `4333_native`,
    options: [`onalik`, `suruv`, `maksimallashtirish`, `shikastlamoq`],
    answer: 0,
  },
  {
    q: `4334_poison`,
    options: [`zahar`, `qurilma`, `eshitiladigan`, `doimiy`],
    answer: 0,
  },
  {
    q: `4335_reed`,
    options: [`qamish`, `xiyonat qilish`, `iltimos`, `uchun`],
    answer: 0,
  },
  {
    q: `4336_shield`,
    options: [`qalqon`, `tiyilmoq`, `rad etmoq`, `xalq`],
    answer: 0,
  },
  {
    q: `4337_stormy`,
    options: [`bo'ronli`, `tugatmoq`, `qadrlash`, `tadqiqot`],
    answer: 0,
  },
  {
    q: `4338_sway`,
    options: [
      `chayqalish`,
      `ulanmoq`,
      `hal qiluvchi ahamiyatga ega`,
      `porlash`,
    ],
    answer: 0,
  },
  {
    q: `4339_urban`,
    options: [`shaharlik`, `tikuv`, `aralashtirmoq`, `qiynalgan`],
    answer: 0,
  },
  {
    q: `4340_wade`,
    options: [`vade`, `butunlay`, `qamish`, `samolyot`],
    answer: 0,
  },
  {
    q: `4341_accent`,
    options: [`urg'u`, `nasl`, `rozi emas`, `yaxshi ko'radi`],
    answer: 0,
  },
  {
    q: `4342_barber`,
    options: [`sartarosh`, `puxta`, `topshiriq`, `ifloslantirish`],
    answer: 0,
  },
  {
    q: `4343_basement`,
    options: [`podval`, `adabiyot`, `hayvon`, `saqlab qolish`],
    answer: 0,
  },
  {
    q: `4344_blank`,
    options: [`bo'sh`, `eshkak eshish`, `yashirmoq`, `e'tibor bering`],
    answer: 0,
  },
  {
    q: `4345_blink`,
    options: [`miltillash`, `ko'paytirmoq`, `fuqarolik`, `pishirmoq`],
    answer: 0,
  },
  {
    q: `4346_choir`,
    options: [`xor`, `teng ravishda`, `o'n yil`, `minnatdorchilik`],
    answer: 0,
  },
  {
    q: `4347_comic`,
    options: [`hajviy`, `kuting`, `bo'ronli`, `ko'rish`],
    answer: 0,
  },
  {
    q: `4348_complicate`,
    options: [`murakkablashtirish`, `telegraf`, `hisob`, `parrandachilik`],
    answer: 0,
  },
  {
    q: `4349_decline`,
    options: [`pasayish`, `ko'p`, `ifodalash`, `tarqatish`],
    answer: 0,
  },
  {
    q: `4350_errand`,
    options: [`topshiriq`, `eskirgan`, `qarsaklar`, `diskriminatsiya qilish`],
    answer: 0,
  },
  {
    q: `4351_glove`,
    options: [`qo'lqop`, `hurmatsizlik`, `yomg'ir o'rmoni`, `bog'lamoq`],
    answer: 0,
  },
  {
    q: `4352_hermit`,
    options: [`zohid`, `tipik`, `atmosfera`, `yuk`],
    answer: 0,
  },
  {
    q: `4353_justly`,
    options: [`adolatli`, `pozitsiya`, `jinoyat`, `e'lon qilish`],
    answer: 0,
  },
  {
    q: `4354_leather`,
    options: [`teri`, `tarbiyalovchi`, `arpa`, `gimnaziya`],
    answer: 0,
  },
  {
    q: `4355_ponder`,
    options: [`mulohaza yuritish`, `nasihat qilish`, `butun`, `rezolyutsiya`],
    answer: 0,
  },
  {
    q: `4356_reserve`,
    options: [`zaxira`, `g'azablangan`, `chastota`, `qidirmoq`],
    answer: 0,
  },
  {
    q: `4357_script`,
    options: [`skript`, `tumshug'i`, `zaharli`, `qiyosiy`],
    answer: 0,
  },
  {
    q: `4358_search`,
    options: [`qidirmoq`, `o'choq`, `ibodat qiling`, `aytuvchi`],
    answer: 0,
  },
  {
    q: `4359_slam`,
    options: [`urmoq`, `aniq`, `merosxo'r`, `beton`],
    answer: 0,
  },
  {
    q: `4360_staircase`,
    options: [`zinapoya`, `baxtsizlik`, `rejimi`, `yakuniy`],
    answer: 0,
  },
  {
    q: `4361_afflicted`,
    options: [`qiynalgan`, `tropiklar`, `peshtaxta`, `urg'u`],
    answer: 0,
  },
  {
    q: `4362_aisle`,
    options: [`qator`, `yashirmoq`, `elakdan o'tkazish`, `peshtaxta`],
    answer: 0,
  },
  {
    q: `4363_atmosphere`,
    options: [`atmosfera`, `boncuk`, `zohid`, `hal qiluvchi ahamiyatga ega`],
    answer: 0,
  },
  {
    q: `4364_author`,
    options: [`muallif`, `ahloqiy`, `qal'a`, `talaffuz qilish`],
    answer: 0,
  },
  {
    q: `4365_breakdown`,
    options: [`sindirish`, `arpa`, `o'rmonli`, `qusish`],
    answer: 0,
  },
  {
    q: `4366_cargo`,
    options: [`yuk`, `deformatsiyalangan`, `g'alayon`, `hid`],
    answer: 0,
  },
  {
    q: `4367_chapter`,
    options: [`bob`, `holsiz`, `ehtiyot bo'ling`, `ekvator`],
    answer: 0,
  },
  {
    q: `4368_connect`,
    options: [`ulanmoq`, `turnir`, `davo`, `ta'kidlash`],
    answer: 0,
  },
  {
    q: `4369_etc.`,
    options: [`va boshqalar.`, `yo'q bo'lib ketgan`, `insho`, `qo'ziqorin`],
    answer: 0,
  },
  {
    q: `4370_flip`,
    options: [`aylantirmoq`, `afsona`, `ip`, `jihozlash`],
    answer: 0,
  },
  {
    q: `4371_idle`,
    options: [`bo'sh`, `moderatsiya`, `miniatyura`, `shox`],
    answer: 0,
  },
  {
    q: `4372_notify`,
    options: [`xabar bering`, `yuqtirish`, `yaxshi ko'radi`, `baxtsiz`],
    answer: 0,
  },
  {
    q: `4373_pea`,
    options: [`no'xat`, `yakuniy`, `salbiy`, `tushuncha`],
    answer: 0,
  },
  {
    q: `4374_raisin`,
    options: [`mayiz`, `aylantirmoq`, `yo'q bo'lib ketgan`, `xususiy`],
    answer: 0,
  },
  {
    q: `4375_retain`,
    options: [`saqlab qolish`, `aqli raso`, `tomir`, `o'tkazish`],
    answer: 0,
  },
  {
    q: `4376_state`,
    options: [`davlat`, `bog'lamoq`, `retsept`, `murda`],
    answer: 0,
  },
  {
    q: `4377_tray`,
    options: [`laganda`, `vabo`, `va boshqalar.`, `nasihat qilish`],
    answer: 0,
  },
  {
    q: `4378_unfortunate`,
    options: [`baxtsiz`, `depozit`, `yozish`, `yashash joyi`],
    answer: 0,
  },
  {
    q: `4379_vivid`,
    options: [`jonli`, `bo'g'moq`, `qulay`, `zamon`],
    answer: 0,
  },
  {
    q: `4380_vomit`,
    options: [`qusish`, `nam`, `dahshatli tush`, `taslim bo'lish`],
    answer: 0,
  },
  {
    q: `4381_betray`,
    options: [`xiyonat qilish`, `doimiy`, `adabiyot`, `ahloqiy`],
    answer: 0,
  },
  {
    q: `4382_blast`,
    options: [`portlash`, `iqtisodiyot`, `mayiz`, `jinoyat`],
    answer: 0,
  },
  {
    q: `4383_bracelet`,
    options: [`bilaguzuk`, `ming yillik`, `yig'lamoq`, `baxtsiz hodisa`],
    answer: 0,
  },
  {
    q: `4384_cease`,
    options: [`to'xtatish`, `hisob`, `nasl`, `jumla`],
    answer: 0,
  },
  {
    q: `4385_choke`,
    options: [`bo'g'moq`, `e'tiborsiz`, `talaffuz qilish`, `nola`],
    answer: 0,
  },
  {
    q: `4386_civil`,
    options: [`fuqarolik`, `shu bilan birga`, `massa`, `ekzotik`],
    answer: 0,
  },
  {
    q: `4387_comment`,
    options: [`izoh`, `sindirish`, `marosim`, `targ'ib qilish`],
    answer: 0,
  },
  {
    q: `4388_cross`,
    options: [`kesib o'tish`, `yetishtirish`, `xususiy`, `ishtiyoq`],
    answer: 0,
  },
  {
    q: `4389_dent`,
    options: [`tish`, `muallif`, `yaqinlashib kelayotgan`, `shu bilan birga`],
    answer: 0,
  },
  {
    q: `4390_distrust`,
    options: [`ishonchsizlik`, `qonuniy`, `vabo`, `ulkan`],
    answer: 0,
  },
  {
    q: `4391_fort`,
    options: [`qal'a`, `rivojlanadi`, `itoatsiz`, `irillamoq`],
    answer: 0,
  },
  {
    q: `4392_found`,
    options: [`topildi`, `taklif`, `qo'rquv`, `halokat`],
    answer: 0,
  },
  {
    q: `4393_lining`,
    options: [`astar`, `mashinkada yozilgan`, `tasniflash`, `tayfun`],
    answer: 0,
  },
  {
    q: `4394_mass`,
    options: [`massa`, `qattiq`, `qo'ziqorin`, `baxtsizlik`],
    answer: 0,
  },
  {
    q: `4395_pray`,
    options: [`ibodat qiling`, `Chiqish`, `topildi`, `bob`],
    answer: 0,
  },
  {
    q: `4396_rife`,
    options: [`keng tarqalgan`, `moyil`, `jant`, `sivilizatsiya`],
    answer: 0,
  },
  {
    q: `4397_sole`,
    options: [`soley`, `ilohiy`, `temir yo'l`, `ko'karish`],
    answer: 0,
  },
  {
    q: `4398_sweep`,
    options: [`supurish`, `insho`, `bo'lak`, `ulanmoq`],
    answer: 0,
  },
  {
    q: `4399_treachery`,
    options: [`xiyonat`, `vijdon`, `semestr`, `oqsil`],
    answer: 0,
  },
  {
    q: `4400_tuck`,
    options: [`tortmoq`, `urmoq`, `folklor`, `kesib o'tish`],
    answer: 0,
  },
  {
    q: `4401_background`,
    options: [`fon`, `taqdir`, `telegraf`, `Chiqish`],
    answer: 0,
  },
  {
    q: `4402_bait`,
    options: [`o'lja`, `farqlanadi`, `baho bering`, `manba`],
    answer: 0,
  },
  {
    q: `4403_chronicle`,
    options: [`xronika`, `porlash`, `yordam berish`, `foydali`],
    answer: 0,
  },
  {
    q: `4404_copper`,
    options: [`mis`, `tarsaki`, `bir xil`, `Mavzu`],
    answer: 0,
  },
  {
    q: `4405_disease`,
    options: [`kasallik`, `qalqon`, `zaxira`, `manba`],
    answer: 0,
  },
  {
    q: `4406_folklore`,
    options: [`folklor`, `jonlantirish`, `avtograf`, `neytral`],
    answer: 0,
  },
  {
    q: `4407_infect`,
    options: [`yuqtirish`, `qulay`, `zoologiya`, `dahshatli`],
    answer: 0,
  },
  {
    q: `4408_itch`,
    options: [`qichishish`, `botqoq`, `o'zgartirish`, `yamoq`],
    answer: 0,
  },
  {
    q: `4409_literature`,
    options: [
      `adabiyot`,
      `aniq belgilash`,
      `aniq belgilash`,
      `kattalashtirish`,
    ],
    answer: 0,
  },
  {
    q: `4410_millennium`,
    options: [`ming yillik`, `qo'rqoq`, `ulug'vor`, `o'chirish`],
    answer: 0,
  },
  { q: `4411_myth`, options: [`afsona`, `zahar`, `halqa`, `keng`], answer: 0 },
  {
    q: `4412_promote`,
    options: [
      `targ'ib qilish`,
      `parrandachilik`,
      `almashtiring`,
      `diqqatga sazovor joy`,
    ],
    answer: 0,
  },
  {
    q: `4413_relate`,
    options: [`bog'lash`, `organizm`, `e'tibor bering`, `kasallik`],
    answer: 0,
  },
  {
    q: `4414_religion`,
    options: [`din`, `ishlab chiqish; mashqa qilish`, `ko'rsatma`, `yaqinda`],
    answer: 0,
  },
  { q: `4415_sum`, options: [`so'm`, `tez`, `so'm`, `qal'a`], answer: 0 },
  {
    q: `4416_teller`,
    options: [`aytuvchi`, `chaqirish`, `murda`, `yolg'izlik`],
    answer: 0,
  },
  {
    q: `4417_trustworthy`,
    options: [`ishonchli`, `mutlaq`, `maxfiy`, `elakdan o'tkazish`],
    answer: 0,
  },
  {
    q: `4418_update`,
    options: [`yangilash`, `kasallik`, `tartibga solish`, `qolib ketmoq`],
    answer: 0,
  },
  {
    q: `4419_vein`,
    options: [`tomir`, `marosim`, `variant`, `o'rtasida`],
    answer: 0,
  },
  {
    q: `4420_venom`,
    options: [`zahar`, `maydalash`, `aniqlash`, `organizm`],
    answer: 0,
  },
  {
    q: `4421_charity`,
    options: [`xayriya`, `tortmoq`, `tik`, `diqqatli`],
    answer: 0,
  },
  {
    q: `4422_commerce`,
    options: [`savdo`, `sirg'anchiq`, `ko'paytirmoq`, `avtomobil`],
    answer: 0,
  },
  {
    q: `4423_condemn`,
    options: [`qoralamoq`, `keskin`, `tartibsizlik`, `sindirish`],
    answer: 0,
  },
  {
    q: `4424_cozy`,
    options: [`qulay`, `to'yimli`, `boshiga`, `kechir`],
    answer: 0,
  },
  {
    q: `4425_deplete`,
    options: [`tugatmoq`, `savdo`, `ongsiz`, `tarsaki`],
    answer: 0,
  },
  {
    q: `4426_economy`,
    options: [
      `iqtisodiyot`,
      `diqqatga sazovor joy`,
      `mashinkada yozilgan`,
      `zahar`,
    ],
    answer: 0,
  },
  {
    q: `4427_empire`,
    options: [`imperiya`, `oziqlanish`, `interval`, `nomzod`],
    answer: 0,
  },
  {
    q: `4428_goods`,
    options: [`tovarlar`, `bir xil`, `pechak`, `tiyilmoq`],
    answer: 0,
  },
  {
    q: `4429_heed`,
    options: [`e'tibor bering`, `aralashmasi`, `joziba`, `masxara qilish`],
    answer: 0,
  },
  {
    q: `4430_hitchhike`,
    options: [`avtostop`, `neytral`, `shu bilan birga`, `musht`],
    answer: 0,
  },
  {
    q: `4431_mock`,
    options: [`masxara qilish`, `baxtsiz hodisa`, `bilimsiz`, `tarbiyalash`],
    answer: 0,
  },
  {
    q: `4432_neutral`,
    options: [`neytral`, `admiral`, `kechikish`, `parallel`],
    answer: 0,
  },
  {
    q: `4433_persecute`,
    options: [`quvg'in qilish`, `qurollangan`, `shaharlik`, `qattiq`],
    answer: 0,
  },
  {
    q: `4434_pity`,
    options: [`achinish`, `tan olish`, `ulkan`, `ko'p`],
    answer: 0,
  },
  {
    q: `4435_reduce`,
    options: [`kamaytirish`, `zaharli`, `dafn qilmoq`, `laganda`],
    answer: 0,
  },
  {
    q: `4436_scribe`,
    options: [`kotib`, `klaster`, `qisqarish`, `pasayish`],
    answer: 0,
  },
  {
    q: `4437_temper`,
    options: [`jahl`, `pessimistik`, `qonun`, `birlik`],
    answer: 0,
  },
  {
    q: `4438_throne`,
    options: [`taxt`, `mis`, `avtostop`, `uchqun`],
    answer: 0,
  },
  {
    q: `4439_unity`,
    options: [`birlik`, `masxara qilish`, `tanho`, `kengaytirish`],
    answer: 0,
  },
  {
    q: `4440_victor`,
    options: [`g'olib`, `qishloq`, `seping`, `adolatli`],
    answer: 0,
  },
  {
    q: `4441_accurate`,
    options: [`aniq`, `zahar`, `polkovnik`, `qamish`],
    answer: 0,
  },
  {
    q: `4442_analyze`,
    options: [`tahlil qilish`, `zarar`, `ko'chish`, `variant`],
    answer: 0,
  },
  {
    q: `4443_asteroid`,
    options: [`asteroid`, `ehtiyot bo'ling`, `oldin`, `pozitsiya`],
    answer: 0,
  },
  {
    q: `4444_controversy`,
    options: [`munozara`, `urg'u`, `engil`, `tez`],
    answer: 0,
  },
  {
    q: `4445_evolve`,
    options: [`rivojlanadi`, `federal`, `ushlash`, `inqiroz`],
    answer: 0,
  },
  {
    q: `4446_factor`,
    options: [`omil`, `o'lja`, `parvoz`, `terlash`],
    answer: 0,
  },
  {
    q: `4447_genetic`,
    options: [`genetik`, `dafn qilmoq`, `zahar`, `baho bering`],
    answer: 0,
  },
  {
    q: `4448_genome`,
    options: [`genom`, `narsalar`, `kechir`, `qurish`],
    answer: 0,
  },
  {
    q: `4449_identical`,
    options: [`bir xil`, `sal`, `dahshatli`, `dafn qilmoq`],
    answer: 0,
  },
  {
    q: `4450_intellectual`,
    options: [`intellektual`, `yordam berish`, `chaqirish`, `sindirish`],
    answer: 0,
  },
  {
    q: `4451_majority`,
    options: [`ko'pchilik`, `istisno`, `tortmoq`, `o'zaro ta'sir qilish`],
    answer: 0,
  },
  {
    q: `4452_mammal`,
    options: [`sutemizuvchi`, `oqsil`, `ishtaha`, `tahlil qilish`],
    answer: 0,
  },
  {
    q: `4453_multiply`,
    options: [`ko'paytirmoq`, `va boshqalar.`, `tarbiyalovchi`, `sal`],
    answer: 0,
  },
  {
    q: `4454_offspring`,
    options: [`nasl`, `salbiy`, `qattiq`, `yaroqli`],
    answer: 0,
  },
  {
    q: `4455_pesticide`,
    options: [`pestitsid`, `diagramma`, `diqqatga sazovor joy`, `savdo`],
    answer: 0,
  },
  {
    q: `4456_regulate`,
    options: [`tartibga solish`, `yonida`, `mahkum`, `aylantirmoq`],
    answer: 0,
  },
  {
    q: `4457_reinforce`,
    options: [`mustahkamlash`, `kerosin`, `izoh`, `qulay`],
    answer: 0,
  },
  {
    q: `4458_stricken`,
    options: [`urilgan`, `yaxshi ko'radi`, `kesib o'tish`, `jannat`],
    answer: 0,
  },
  {
    q: `4459_vast`,
    options: [`keng`, `gandiraklab`, `qo'lqop`, `xayriya`],
    answer: 0,
  },
  {
    q: `4460_vegetarian`,
    options: [`vegetarian`, `qoqilish`, `beton`, `kerosin`],
    answer: 0,
  },
  {
    q: `4461_cherish`,
    options: [`qadrlash`, `ko'rib chiqish`, `tarbiyalash`, `shitirlash`],
    answer: 0,
  },
  {
    q: `4462_compassion`,
    options: [`hamdardlik`, `mahkum`, `e'lon qilish`, `ushlab turish`],
    answer: 0,
  },
  {
    q: `4463_consent`,
    options: [`rozilik`, `tepalik`, `irillamoq`, `qalqon`],
    answer: 0,
  },
  {
    q: `4464_core`,
    options: [`yadro`, `zaif`, `taslim bo'lish`, `xabar bering`],
    answer: 0,
  },
  {
    q: `4465_cunning`,
    options: [`ayyorlik`, `irillamoq`, `bog'lamoq`, `yonida`],
    answer: 0,
  },
  {
    q: `4466_dizzy`,
    options: [`Bosh aylanishi`, `tafsilot`, `o'rnatish`, `bo'sh`],
    answer: 0,
  },
  {
    q: `4467_equilibrium`,
    options: [`muvozanat`, `laganda`, `taxt`, `pechak`],
    answer: 0,
  },
  {
    q: `4468_foster`,
    options: [`tarbiyalovchi`, `shikastlamoq`, `oziqlanish`, `ichimlik`],
    answer: 0,
  },
  {
    q: `4469_grind`,
    options: [`maydalash`, `shiddat bilan`, `depozit`, `bilaguzuk`],
    answer: 0,
  },
  {
    q: `4470_growl`,
    options: [`irillamoq`, `mukammal`, `guvoh`, `g'alati`],
    answer: 0,
  },
  {
    q: `4471_moderation`,
    options: [`moderatsiya`, `topshiriq`, `tropiklar`, `hasad`],
    answer: 0,
  },
  {
    q: `4472_predator`,
    options: [`yirtqich`, `miltillash`, `nordon`, `chaqmoqtosh`],
    answer: 0,
  },
  {
    q: `4473_sane`,
    options: [`aqli raso`, `itoatsiz`, `masxara qilish`, `eshkak eshish`],
    answer: 0,
  },
  {
    q: `4474_saucer`,
    options: [`likopcha`, `sig'im`, `global`, `qisqarish`],
    answer: 0,
  },
  {
    q: `4475_snatch`,
    options: [`tortib olish`, `shakllanishi`, `qudratli`, `qoziq`],
    answer: 0,
  },
  {
    q: `4476_stagger`,
    options: [`gandiraklab`, `qulay`, `sig'im`, `almashtirish`],
    answer: 0,
  },
  {
    q: `4477_stumble`,
    options: [`qoqilish`, `hid`, `tamoyili`, `boshiga`],
    answer: 0,
  },
  {
    q: `4478_tense`,
    options: [`zamon`, `seping`, `no'xat`, `asteroid`],
    answer: 0,
  },
  {
    q: `4479_tumble`,
    options: [`yiqilish`, `ko'rsatma`, `qidirmoq`, `go'sht`],
    answer: 0,
  },
  {
    q: `4480_withhold`,
    options: [`ushlab turish`, `shudring`, `tan olish`, `hudud`],
    answer: 0,
  },
  {
    q: `4481_aircraft`,
    options: [`samolyot`, `onalik`, `aralashish`, `xarakter`],
    answer: 0,
  },
  {
    q: `4482_celebrity`,
    options: [`mashhur`, `aql bovar qilmaydigan`, `ish haqi`, `temir yo'l`],
    answer: 0,
  },
  {
    q: `4483_concrete`,
    options: [`beton`, `oshirish`, `kerosin`, `baxtsizlik`],
    answer: 0,
  },
  {
    q: `4484_decisive`,
    options: [`hal qiluvchi`, `jonli`, `xo'roz`, `ogohlantir`],
    answer: 0,
  },
  {
    q: `4485_esteemed`,
    options: [`hurmatli`, `o'rnatish`, `bir muddat`, `murakkablashtirish`],
    answer: 0,
  },
  {
    q: `4486_ethical`,
    options: [`axloqiy`, `muskul`, `shudring`, `hozirda`],
    answer: 0,
  },
  {
    q: `4487_extinct`,
    options: [
      `yo'q bo'lib ketgan`,
      `murakkablashtirish`,
      `mukammal`,
      `tropiklar`,
    ],
    answer: 0,
  },
  {
    q: `4488_hardy`,
    options: [`chidamli`, `likopcha`, `muskul`, `oziqlanish`],
    answer: 0,
  },
  {
    q: `4489_institute`,
    options: [`instituti`, `Mavzu`, `turnir`, `ko'ngilli`],
    answer: 0,
  },
  {
    q: `4490_jealousy`,
    options: [`hasad`, `baxtsiz`, `portlash`, `teri`],
    answer: 0,
  },
  {
    q: `4491_migrate`,
    options: [`ko'chish`, `terlash`, `xarob`, `jonlantirish`],
    answer: 0,
  },
  {
    q: `4492_nurture`,
    options: [`tarbiyalash`, `variant`, `gandiraklab`, `tan olish`],
    answer: 0,
  },
  {
    q: `4493_overhead `,
    options: [`tepalik`, `boshqaruvchi`, `xabar bering`, `mahkum`],
    answer: 0,
  },
  {
    q: `4494_principle`,
    options: [`tamoyili`, `nordon`, `yirtqich`, `sartarosh`],
    answer: 0,
  },
  {
    q: `4495_rural`,
    options: [
      `qishloq`,
      `garchi`,
      `deformatsiyalangan`,
      `joyi jannatda bo'lsin`,
    ],
    answer: 0,
  },
  {
    q: `4496_secluded`,
    options: [`tanho`, `sevgilim`, `hisob`, `tugatmoq`],
    answer: 0,
  },
  {
    q: `4497_species`,
    options: [`turlari`, `qattiq`, `hajviy`, `narsalar`],
    answer: 0,
  },
  {
    q: `4498_swamp`,
    options: [`botqoq`, `to'xtatish`, `xamir`, `uy`],
    answer: 0,
  },
  {
    q: `4499_traverse`,
    options: [`o'tish`, `saqlash`, `suruv`, `aniq`],
    answer: 0,
  },
  {
    q: `4500_zoology`,
    options: [`zoologiya`, `xarob`, `puxta`, `sehrlash`],
    answer: 0,
  },
  {
    q: `4501_assumption`,
    options: [`faraz`, `versiya`, `ko'p`, `jangovar`],
    answer: 0,
  },
  {
    q: `4502_barley`,
    options: [`arpa`, `ahamiyatsiz`, `keng`, `kislorod`],
    answer: 0,
  },
  {
    q: `4503_beast`,
    options: [`hayvon`, `er`, `xiyonat`, `asosiy`],
    answer: 0,
  },
  {
    q: `4504_colonel`,
    options: [`polkovnik`, `iltimos`, `turlari`, `yuqumli`],
    answer: 0,
  },
  {
    q: `4505_contagious`,
    options: [`yuqumli`, `ziddiyat`, `munozara`, `qudratli`],
    answer: 0,
  },
  {
    q: `4506_corpse`,
    options: [
      `murda`,
      `peshtaxta`,
      `ishlab chiqish; mashqa qilish`,
      `moslashuvchan`,
    ],
    answer: 0,
  },
  {
    q: `4507_crisis`,
    options: [`inqiroz`, `tamoyili`, `yuvish`, `ish haqi`],
    answer: 0,
  },
  {
    q: `4508_cure`,
    options: [`davo`, `quyuqlashgan`, `katlama`, `masxara qilish`],
    answer: 0,
  },
  {
    q: `4509_deformed`,
    options: [`deformatsiyalangan`, `yiqilish`, `ayyor`, `kibermakon`],
    answer: 0,
  },
  {
    q: `4510_discriminate`,
    options: [`diskriminatsiya qilish`, `o'n yil`, `uchmoq`, `skript`],
    answer: 0,
  },
  {
    q: `4511_embassy`,
    options: [`Elchixona`, `qal'a`, `hal qiluvchi`, `jant`],
    answer: 0,
  },
  {
    q: `4512_extinguish`,
    options: [`o'chirish`, `ishonchli`, `aqli raso`, `nam`],
    answer: 0,
  },
  {
    q: `4513_flint`,
    options: [`chaqmoqtosh`, `massa`, `jahl`, `parchalanish`],
    answer: 0,
  },
  {
    q: `4514_harass`,
    options: [`bezovta qilmoq`, `oldin`, `munosib`, `ko'paytirmoq`],
    answer: 0,
  },
  {
    q: `4515_integrate`,
    options: [`integratsiyalash`, `jonli`, `sindirish`, `pichan`],
    answer: 0,
  },
  {
    q: `4516_miniature`,
    options: [`miniatyura`, `bob`, `aniq`, `integratsiyalash`],
    answer: 0,
  },
  {
    q: `4517_nutrition`,
    options: [`oziqlanish`, `nomzod`, `ittifoq`, `siklon`],
    answer: 0,
  },
  {
    q: `4518_promptly`,
    options: [`zudlik bilan`, `yirtqich`, `transport`, `joriy`],
    answer: 0,
  },
  {
    q: `4519_technician`,
    options: [`texnik`, `greypfrut`, `izchil`, `hisob`],
    answer: 0,
  },
  {
    q: `4520_tropics`,
    options: [`tropiklar`, `bir muddat`, `tipik`, `kümülatif`],
    answer: 0,
  },
  {
    q: `4521_beneficial`,
    options: [`foydali`, `supurish`, `manba`, `serjant`],
    answer: 0,
  },
  {
    q: `4522_birthplace`,
    options: [`tug'ilgan joyi`, `musht`, `er`, `va boshqalar.`],
    answer: 0,
  },
  {
    q: `4523_capacity`,
    options: [`sig'im`, `butun`, `zo'ravonlik`, `dahshatli tush`],
    answer: 0,
  },
  {
    q: `4524_comparative`,
    options: [`qiyosiy`, `uchun`, `xiyonat qilish`, `podval`],
    answer: 0,
  },
  {
    q: `4525_comprehensive`,
    options: [`keng qamrovli`, `chegara`, `bog'lash`, `azob`],
    answer: 0,
  },
  {
    q: `4526_conserve`,
    options: [`saqlash`, `xiyonat`, `o'yin-kulgi`, `folklor`],
    answer: 0,
  },
  {
    q: `4527_crucial`,
    options: [`hal qiluvchi ahamiyatga ega`, `hudud`, `holbuki`, `muvozanat`],
    answer: 0,
  },
  {
    q: `4528_cumulative`,
    options: [`kümülatif`, `avtograf`, `shox`, `xarob`],
    answer: 0,
  },
  {
    q: `4529_deposit`,
    options: [`depozit`, `keng tarqalgan`, `ahmoq`, `ko'rsatma`],
    answer: 0,
  },
  {
    q: `4530_distribute`,
    options: [`tarqatish`, `shaharlik`, `ziyoratgoh`, `chaqirish`],
    answer: 0,
  },
  {
    q: `4531_equator`,
    options: [`ekvator`, `muddati`, `siklon`, `keng qamrovli`],
    answer: 0,
  },
  {
    q: `4532_exotic`,
    options: [`ekzotik`, `xilma-xillik`, `qalqon`, `qoqilish`],
    answer: 0,
  },
  {
    q: `4533_federal`,
    options: [`federal`, `hozirda`, `yaroqli`, `o'choq`],
    answer: 0,
  },
  {
    q: `4534_formation`,
    options: [`shakllanishi`, `maqtanmoq`, `maydalash`, `genom`],
    answer: 0,
  },
  {
    q: `4535_frequency`,
    options: [`chastota`, `qidirmoq`, `etuk`, `muqobil`],
    answer: 0,
  },
  {
    q: `4536_objective`,
    options: [`ob'ektiv`, `ta'sir`, `shaffof`, `ifodalash`],
    answer: 0,
  },
  {
    q: `4537_oxygen`,
    options: [`kislorod`, `g'alati`, `urg'u`, `qurollangan`],
    answer: 0,
  },
  {
    q: `4538_rainforest`,
    options: [`yomg'ir o'rmoni`, `yig'lamoq`, `korporativ`, `mukammal`],
    answer: 0,
  },
  {
    q: `4539_strategy`,
    options: [`strategiya`, `tasma`, `ishlaydi`, `munozara`],
    answer: 0,
  },
  {
    q: `4540_wooded`,
    options: [`o'rmonli`, `nola`, `ajoyib`, `ibodat qiling`],
    answer: 0,
  },
  {
    q: `4541_avail`,
    options: [`foyda`, `boshiga`, `holsiz`, `zinapoya`],
    answer: 0,
  },
  {
    q: `4542_expand`,
    options: [`kengaytirish`, `eritish`, `teng ravishda`, `yuvish`],
    answer: 0,
  },
  {
    q: `4543_define`,
    options: [`aniqlash`, `yarashtirish`, `xalq`, `yangilash`],
    answer: 0,
  },
  {
    q: `4544_dread`,
    options: [`qo'rquv`, `hayvon`, `organizm`, `tafsilot`],
    answer: 0,
  },
  {
    q: `4545_fundamental`,
    options: [`asosiy`, `ushlash`, `hurmatsizlik`, `o'n yil`],
    answer: 0,
  },
  {
    q: `4546_horrifying`,
    options: [`dahshatli`, `madaniyat`, `imzo`, `etuk`],
    answer: 0,
  },
  {
    q: `4547_incredulous`,
    options: [`aql bovar qilmaydigan`, `qopqoq`, `oshirish`, `davo`],
    answer: 0,
  },
  {
    q: `4548_linger`,
    options: [`qolib ketmoq`, `faraz`, `savdo`, `nam`],
    answer: 0,
  },
  {
    q: `4549_organism`,
    options: [`organizm`, `qamish`, `muddati`, `rivojlanadi`],
    answer: 0,
  },
  {
    q: `4550_paraphrase`,
    options: [`izohlash`, `diqqatli`, `jihozlash`, `ittifoq`],
    answer: 0,
  },
  {
    q: `4551_plague`,
    options: [`vabo`, `xalq`, `vegetarian`, `qoralamoq`],
    answer: 0,
  },
  {
    q: `4552_presently`,
    options: [`hozirda`, `uchqun`, `o'tkazish`, `deformatsiyalangan`],
    answer: 0,
  },
  {
    q: `4553_random`,
    options: [`tasodifiy`, `o'lchov`, `neytral`, `turnir`],
    answer: 0,
  },
  {
    q: `4554_riot`,
    options: [`g'alayon`, `qarshilik ko'rsatish`, `kiritish`, `portlash`],
    answer: 0,
  },
  {
    q: `4555_scribble`,
    options: [`yozish`, `yangilash`, `asteroid`, `zohid`],
    answer: 0,
  },
  {
    q: `4556_shrine`,
    options: [`ziyoratgoh`, `rezolyutsiya`, `sivilizatsiya`, `jahl`],
    answer: 0,
  },
  {
    q: `4557_solitude`,
    options: [`yolg'izlik`, `birlik`, `doimiy`, `bog'lash`],
    answer: 0,
  },
  {
    q: `4558_stark`,
    options: [`qattiq`, `yomg'ir o'rmoni`, `Mavzu`, `sevgilim`],
    answer: 0,
  },
  {
    q: `4559_summon`,
    options: [`chaqirish`, `parchalanish`, `o'lja`, `davr`],
    answer: 0,
  },
  {
    q: `4560_worsen`,
    options: [`yomonlashadi`, `bundan mustasno`, `eritish`, `shiddat bilan`],
    answer: 0,
  },
  {
    q: `4561_automobile`,
    options: [`avtomobil`, `kechikish`, `o'tish`, `vakolatli`],
    answer: 0,
  },
  {
    q: `4562_candidate`,
    options: [`nomzod`, `qulay`, `olovli`, `holbuki`],
    answer: 0,
  },
  {
    q: `4563_confidential`,
    options: [`maxfiy`, `qirib tashlash`, `inqiroz`, `g'olib`],
    answer: 0,
  },
  {
    q: `4564_corporate`,
    options: [`korporativ`, `bo'ronli`, `bo'sh`, `botqoq`],
    answer: 0,
  },
  {
    q: `4565_enhance`,
    options: [`oshirish`, `tahrirlash`, `plantatsiya`, `taxt`],
    answer: 0,
  },
  {
    q: `4566_era`,
    options: [`davr`, `aniqlash`, `gimnaziya`, `tartibsizlik`],
    answer: 0,
  },
  {
    q: `4567_guideline`,
    options: [`ko'rsatma`, `chidamli`, `tahlil qilish`, `moderatsiya`],
    answer: 0,
  },
  {
    q: `4568_incorporate`,
    options: [`kiritish`, `yolg'izlik`, `davlat`, `g'azablangan`],
    answer: 0,
  },
  {
    q: `4569_interact`,
    options: [`o'zaro ta'sir qilish`, `odatiy`, `ruh`, `munosib`],
    answer: 0,
  },
  {
    q: `4570_interval`,
    options: [`interval`, `qarsaklar`, `tiyilmoq`, `bo'g'moq`],
    answer: 0,
  },
  {
    q: `4571_mobile`,
    options: [`mobil`, `sivilizatsiya`, `iqlim`, `yorilish`],
    answer: 0,
  },
  {
    q: `4572_modify`,
    options: [`o'zgartirish`, `omil`, `strategiya`, `parchalash`],
    answer: 0,
  },
  {
    q: `4573_parallel`,
    options: [`parallel`, `tortib olish`, `mulohaza yuritish`, `darajasi`],
    answer: 0,
  },
  {
    q: `4574_phenomenon`,
    options: [`hodisa`, `so'm`, `integratsiyalash`, `tik`],
    answer: 0,
  },
  {
    q: `4575_pollute`,
    options: [`ifloslantirish`, `tug'ilgan joyi`, `sutemizuvchi`, `o'tish`],
    answer: 0,
  },
  {
    q: `4576_ridicule`,
    options: [`masxara qilish`, `munozara`, `saqlash`, `intellektual`],
    answer: 0,
  },
  {
    q: `4577_solar`,
    options: [`quyosh`, `bog'lash`, `go'sht`, `hayvon`],
    answer: 0,
  },
  {
    q: `4578_territory`,
    options: [`hudud`, `kiritish`, `g'azablangan`, `foyda`],
    answer: 0,
  },
  {
    q: `4579_tournament`,
    options: [`turnir`, `ip`, `yaqinda`, `hurmatli`],
    answer: 0,
  },
  {
    q: `4580_transportation`,
    options: [`transport`, `mustahkamlash`, `zaif`, `onalik`],
    answer: 0,
  },
  {
    q: `4581_bill`,
    options: [`hisob`, `shox`, `Elchixona`, `nasl`],
    answer: 0,
  },
  {
    q: `4582_boundary`,
    options: [`chegara`, `minnatdorchilik`, `ilohiy`, `miniatyura`],
    answer: 0,
  },
  {
    q: `4583_chaos`,
    options: [`tartibsizlik`, `ayyor`, `qurilma`, `aralashmasi`],
    answer: 0,
  },
  {
    q: `4584_consistent`,
    options: [`izchil`, `qit'a`, `zamon`, `zudlik bilan`],
    answer: 0,
  },
  {
    q: `4585_cyclone`,
    options: [`siklon`, `davr`, `odatiy`, `mulohaza yuritish`],
    answer: 0,
  },
  {
    q: `4586_doomed`,
    options: [`mahkum`, `qudratli`, `pestitsid`, `izolyatsiya qilish`],
    answer: 0,
  },
  {
    q: `4587_heir`,
    options: [`merosxo'r`, `retsept`, `qurollangan`, `murojaat qiling`],
    answer: 0,
  },
  {
    q: `4588_martial`,
    options: [`jangovar`, `to'qimachilik`, `iltimos`, `aql bovar qilmaydigan`],
    answer: 0,
  },
  {
    q: `4589_organic`,
    options: [`organik`, `vegetarian`, `qirib tashlash`, `versiya`],
    answer: 0,
  },
  {
    q: `4590_poultry`,
    options: [`parrandachilik`, `chayqalish`, `mikroavtobus`, `dastgoh`],
    answer: 0,
  },
  {
    q: `4591_scramble`,
    options: [`shitirlash`, `davo`, `nasihat qilish`, `zo'ravonlik`],
    answer: 0,
  },
  {
    q: `4592_sergeant`,
    options: [`serjant`, `zaxira`, `vijdon`, `miltillash`],
    answer: 0,
  },
  {
    q: `4593_sheer`,
    options: [`shaffof`, `bilimsiz`, `to'xtash`, `tish`],
    answer: 0,
  },
  {
    q: `4594_stance`,
    options: [`pozitsiya`, `keng`, `tasavvur qilish`, `xiyonat qilish`],
    answer: 0,
  },
  {
    q: `4595_telegraph`,
    options: [`telegraf`, `g'isht`, `laganda`, `shikoyat qilish`],
    answer: 0,
  },
  {
    q: `4596_textile`,
    options: [`to'qimachilik`, `dastgoh`, `tarqatish`, `muddati`],
    answer: 0,
  },
  {
    q: `4597_tornado`,
    options: [`tornado`, `deklanşör`, `ho'llash`, `faraz`],
    answer: 0,
  },
  {
    q: `4598_typhoon`,
    options: [`tayfun`, `strategiya`, `ulanmoq`, `bo'lak`],
    answer: 0,
  },
  {
    q: `4599_wail`,
    options: [`yig'lamoq`, `ayyorlik`, `qarshilik ko'rsatish`, `retsept`],
    answer: 0,
  },
  {
    q: `4600_wardrobe`,
    options: [`shkaf`, `kirish`, `g'isht`, `yig'lamoq`],
    answer: 0,
  },
];

console.log(quiz.length); // 55
console.log(quiz.length); // 55

// === in gitBash: ====
// node js/question13.js
