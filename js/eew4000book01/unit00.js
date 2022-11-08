// **Question-13**
// *tayyor*
// # 1: Yuqoridagi hammat testlar (jami 460)
'use strick';
// Array of Object;
const quiz = [
  {
    q: `4001_afraid`,
    options: [`qo'rqqan`, `hayron bo'lmoq`, `ko'rish`, `urmoq`],
    answer: 0,
  },
  {
    q: `4002_agree`,
    options: [`rozi bo'lmoq`, `odat`, `urmoq`, `osib qo'y`],
    answer: 0,
  },
  {
    q: `4003_angry`,
    options: [`jahli chiqqan`, `tushunmoq`, `imtihon`, `tomoshabin`],
    answer: 0,
  },
  {
    q: `4004_arrive`,
    options: [`yetib kelmoq`, `aloqa qilmoq`, `joylashgan`, `musobaqa`],
    answer: 0,
  },
  {
    q: `4005_attack`,
    options: [`hujum qilmoq`, `diqqat markazi`, `bezovta qilmoq`, `imkoniyat`],
    answer: 0,
  },
  {
    q: `4006_bottom`,
    options: [`tagi,  osti`, `hujum qilmoq`, `muloqot qilmoq`, `qishloq`],
    answer: 0,
  },
  {
    q: `4007_clever`,
    options: [`aqlli`, `a'zo`, `ehtimol`, `qadimiy`],
    answer: 0,
  },
  {
    q: `4008_cruel`,
    options: [`shafqatsiz`, `yorqin`, `xizmatchi`, `katta`],
    answer: 0,
  },
  {
    q: `4009_finally`,
    options: [`nihoyat`, `bosim`, `sehrli`, `yo'lak`],
    answer: 0,
  },
  {
    q: `4010_hide`,
    options: [`yashirmoq`, `bo'sh`, `usta`, `qo'rquv`],
    answer: 0,
  },
  {
    q: `4011_hunt`,
    options: [`ovlamoq`, `loyiha`, `yo'l ko'rsatuvchi`, `oldinga`],
    answer: 0,
  },
  {
    q: `4012_lot`,
    options: [`ko'p`, `anglatmoq`, `sotib olmoq`, `uy hayvoni`],
    answer: 0,
  },
  {
    q: `4013_middle`,
    options: [`o'rta`, `xususiyat`, `erishmoq ega bo'lmoq`, `sabrli`],
    answer: 0,
  },
  {
    q: `4014_moment`,
    options: [`lahza`, `vazifa`, `nonushta`, `olomon`],
    answer: 0,
  },
  {
    q: `4015_pleased`,
    options: [`mamnun`, `xabar`, `mashq qilmoq`, `jurnal`],
    answer: 0,
  },
  {
    q: `4016_promise`,
    options: [`va'da bermoq`, `sovrin`, `olib tashlash`, `tayinlamoq`],
    answer: 0,
  },
  {
    q: `4017_reply`,
    options: [`javob bermoq`, `davomida`, `qabul qilmoq`, `qiymat`],
    answer: 0,
  },
  {
    q: `4018_safe`,
    options: [`xavfsiz`, `o'ldirmoq`, `sovrin`, `sirt`],
    answer: 0,
  },
  {
    q: `4019_trick`,
    options: [`hiyla`, `irq`, `axborot bermoq`, `otmoq`],
    answer: 0,
  },
  {
    q: `4020_well`,
    options: [`yaxshi`, `rag'batlantirmoq`, `tarqalmoq`, `kirmoq`],
    answer: 0,
  },
  {
    q: `4021_adventure`,
    options: [`sarguzasht`, `mavjud`, `jamoa`, `maqola`],
    answer: 0,
  },
  {
    q: `4022_approach`,
    options: [`yaqinlashmoq`, `suzmoq`, `belgi`, `tepalik`],
    answer: 0,
  },
  {
    q: `4023_carefully`,
    options: [`ehtiyotkorlik bilan`, `yonida`, `hech biri`, `usta`],
    answer: 0,
  },
  {
    q: `4024_chemical`,
    options: [`kimyoviy`, `suzmoq`, `mos kelmoq`, `xarajat`],
    answer: 0,
  },
  {
    q: `4025_create`,
    options: [`yaratmoq`, `masala`, `samarali`, `dalillar`],
    answer: 0,
  },
  {
    q: `4026_evil`,
    options: [`yomonlik`, `narx`, `shovqin`, `mavjud`],
    answer: 0,
  },
  {
    q: `4027_experiment`,
    options: [`tajriba, sinov`, `yovvoyi`, `sirt`, `yog'och`],
    answer: 0,
  },
  {
    q: `4028_kill`,
    options: [`o'ldirmoq`, `samimiy`, `yer`, `ofitser`],
    answer: 0,
  },
  {
    q: `4029_laboratory`,
    options: [`laboratoriya`, `aks holda`, `jarohat olmoq`, `o'rganmoq`],
    answer: 0,
  },
  {
    q: `4030_laugh`,
    options: [`kulmoq`, `butun`, `farq`, `xususiyat`],
    answer: 0,
  },
  {
    q: `4031_loud`,
    options: [`baland ovozda`, `pasaytirmoq`, `garchi`, `murakkab`],
    answer: 0,
  },
  {
    q: `4032_nervous`,
    options: [`asabiy`, `ofitser`, `maslahat bermoq`, `sarflamoq`],
    answer: 0,
  },
  {
    q: `4033_noise`,
    options: [`shovqin`, `hid`, `qiymat`, `uslub`],
    answer: 0,
  },
  {
    q: `4034_project`,
    options: [`loyiha`, `kimyoviy`, `erishmoq yetib bormoq`, `tinchlik`],
    answer: 0,
  },
  {
    q: `4035_scare`,
    options: [`qo'rqitmoq`, `takidlamoq`, `sarflamoq`, `to'g'ri`],
    answer: 0,
  },
  {
    q: `4036_secret`,
    options: [`sir`, `zerikarli`, `hayratlanmoq`, `rohatlanmoq`],
    answer: 0,
  },
  {
    q: `4037_shout`,
    options: [`baqirmoq`, `yo'lovchi`, `daraja`, `dum`],
    answer: 0,
  },
  { q: `4038_smell`, options: [`hid`, `maydon`, `biroq`, `xafa`], answer: 0 },
  {
    q: `4039_terrible`,
    options: [`qo'rqinchli`, `xalqaro`, `dolzarb haqiqiy`, `cho'l`],
    answer: 0,
  },
  {
    q: `4040_worse`,
    options: [`yomonroq`, `noto'g'ri`, `maqul ko'rmoq`, `maqsad`],
    answer: 0,
  },
  {
    q: `4041_alien`,
    options: [`begona`, `qolmoq`, `dum`, `tanlamoq`],
    answer: 0,
  },
  {
    q: `4042_among`,
    options: [
      `orasida`,
      `reklama qilmoq`,
      `aks qarama-qarshi`,
      `taxmin qilmoq`,
    ],
    answer: 0,
  },
  {
    q: `4043_chart`,
    options: [`grafik  jadval`, `tayinlamoq`, `yolg'iz`, `funt qoqmoq`],
    answer: 0,
  },
  {
    q: `4044_cloud`,
    options: [`bulut`, `do'kon saqlamoq`, `aslida`, `omon qolmoq`],
    answer: 0,
  },
  {
    q: `4045_comprehend`,
    options: [`tushunmoq`, `lord`, `arvoh`, `haddan tashqari`],
    answer: 0,
  },
  {
    q: `4046_describe`,
    options: [`ta'riflamoq`, `ibora`, `og'riq`, `vazifa`],
    answer: 0,
  },
  {
    q: `4047_ever`,
    options: [`qachon bo'lsa ham`, `bo'lim`, `nishonlamoq`, `na`],
    answer: 0,
  },
  {
    q: `4048_fail`,
    options: [`muvaffaqiyatsizlikka uchramoq`, `axlat`, `xato`, `muvaffaqiyat`],
    answer: 0,
  },
  {
    q: `4049_friendly`,
    options: [
      `do'stona`,
      `boshqaruv`,
      `ulashmoq`,
      `davolamoq munosabatda bo'lmoq`,
    ],
    answer: 0,
  },
  {
    q: `4050_grade`,
    options: [`baho`, `asramoq`, `tavsiya qilmoq`, `to'g'ridan-to'g'ri`],
    answer: 0,
  },
  {
    q: `4051_instead`,
    options: [`o'rniga`, `o'lik`, `to'plamoq`, `go'sht`],
    answer: 0,
  },
  {
    q: `4052_library`,
    options: [`kutubxona`, `markaz`, `keyinchalik`, `ehtimol`],
    answer: 0,
  },
  {
    q: `4053_planet`,
    options: [`sayyora`, `endi qaytib`, `omon qolmoq`, `suzmoq`],
    answer: 0,
  },
  {
    q: `4054_report`,
    options: [`hisobot`, `xulosa`, `halollik`, `ega bo'lmoq`],
    answer: 0,
  },
  {
    q: `4055_several`,
    options: [`bir nechta`, `qadimiy`, `davom etmoq`, `javob bermoq`],
    answer: 0,
  },
  {
    q: `4056_solve`,
    options: [`hal qilmoq`, `sovrin`, `vakillik qilmoq`, `maqsad`],
    answer: 0,
  },
  {
    q: `4057_suddenly`,
    options: [`to'satdan`, `luqma tishlamoq`, `ichida`, `ko'p`],
    answer: 0,
  },
  {
    q: `4058_suppose`,
    options: [
      `faraz qilmoq`,
      `bosib chiqarmoq`,
      `ta'm tatib ko'rmoq`,
      `jamoat`,
    ],
    answer: 0,
  },
  {
    q: `4059_universe`,
    options: [`olam`, `javob bermoq`, `xavfsizlik`, `muloqot qilmoq`],
    answer: 0,
  },
  {
    q: `4060_view`,
    options: [`ko'rinish`, `muddat`, `tushunmoq`, `sifat`],
    answer: 0,
  },
  {
    q: `4061_appropriate`,
    options: [`muvofiq`, `solishtirmoq`, `muvofiq`, `bulut`],
    answer: 0,
  },
  {
    q: `4062_avoid`,
    options: [`oldini olmoq  saqlanmoq`, `lahza`, `xabar`, `noto'g'ri`],
    answer: 0,
  },
  {
    q: `4063_behave`,
    options: [`o'zini tutmoq`, `shama qilmoq`, `e'tiqod`, `o'smoq`],
    answer: 0,
  },
  {
    q: `4064_calm`,
    options: [`sokin`, `masofa`, `chegara`, `jalb qilmoq`],
    answer: 0,
  },
  {
    q: `4065_concern`,
    options: [`tashvishlanmoq`, `bo'lak`, `shoshilmoq`, `bosim`],
    answer: 0,
  },
  {
    q: `4066_content`,
    options: [`mamnun`, `rohatlanmoq`, `otmoq`, `oldini olmoq`],
    answer: 0,
  },
  {
    q: `4067_expect`,
    options: [`kutmoq`, `davr`, `bo'lim`, `bir qator tur`],
    answer: 0,
  },
  {
    q: `4068_frequently`,
    options: [`tez-tez`, `talab`, `orqasida`, `muhim`],
    answer: 0,
  },
  {
    q: `4069_habit`,
    options: [`odat`, `to'plamoq`, `boqmoq`, `mulk`],
    answer: 0,
  },
  {
    q: `4070_instruct`,
    options: [`ko'rsatma bermoq`, `musobaqa`, `yomonlik`, `nutq`],
    answer: 0,
  },
  {
    q: `4071_issue`,
    options: [
      `masala`,
      `raqobatlashmoq`,
      `tanlov`,
      `amal qilmoq ortidan bormoq`,
    ],
    answer: 0,
  },
  {
    q: `4072_none`,
    options: [`hech biri`, `afzallik`, `ko'rinish`, `hayqiriq`],
    answer: 0,
  },
  {
    q: `4073_patient`,
    options: [`sabrli`, `azoblanmoq`, `she'r`, `turmush qurmoq`],
    answer: 0,
  },
  {
    q: `4074_positive`,
    options: [`ijobiy`, `ahamiyat`, `g'alati`, `chiqindi`],
    answer: 0,
  },
  {
    q: `4075_punish`,
    options: [`jazolamoq`, `uzoqroq`, `yo'lak`, `o'rtacha`],
    answer: 0,
  },
  {
    q: `4076_represent`,
    options: [`vakillik qilmoq`, `dog' joy`, `sir`, `xato`],
    answer: 0,
  },
  {
    q: `4077_shake`,
    options: [`silkitmoq`, `jiddiy`, `masala`, `atrof-muhit`],
    answer: 0,
  },
  {
    q: `4078_spread`,
    options: [`tarqalmoq`, `asbob`, `rag'batlantirmoq`, `yoki`],
    answer: 0,
  },
  {
    q: `4079_stroll`,
    options: [`sayrga chiqmoq`, `darhol`, `boshqaruv`, `yonida`],
    answer: 0,
  },
  {
    q: `4080_village`,
    options: [`qishloq`, `yakka`, `tez-tez`, `rozi bo'lmoq`],
    answer: 0,
  },
  {
    q: `4081_aware`,
    options: [`xabardor`, `ko'rish`, `o'ylab ko'rmoq`, `qo'rqinchli`],
    answer: 0,
  },
  {
    q: `4082_badly`,
    options: [`yomon`, `chunki`, `adolatsizlik`, `aniqlash`],
    answer: 0,
  },
  {
    q: `4083_belong`,
    options: [`tegishli bo'lmoq`, `o'smoq`, `asbob`, `aniq`],
    answer: 0,
  },
  {
    q: `4084_continue`,
    options: [`davom etmoq`, `salqin ajoyib`, `qiymat`, `kashf qilmoq`],
    answer: 0,
  },
  {
    q: `4085_error`,
    options: [`xato`, `jumboq`, `kulmoq`, `asosiy`],
    answer: 0,
  },
  {
    q: `4086_experience`,
    options: [`tajriba, sinov`, `graflik`, `hayron bo'lmoq`, `sehrli`],
    answer: 0,
  },
  {
    q: `4087_field`,
    options: [`maydon`, `darvoza`, `tanish`, `zina`],
    answer: 0,
  },
  {
    q: `4088_hurt`,
    options: [`jarohat olmoq`, `siyosat`, `kuymoq`, `tayanch`],
    answer: 0,
  },
  {
    q: `4089_judgment`,
    options: [`hukm  baho`, `to'g'ri`, `nutq`, `o't`],
    answer: 0,
  },
  {
    q: `4090_likely`,
    options: [`ehtimol`, `dum`, `mavjud`, `deb bilmoq`],
    answer: 0,
  },
  {
    q: `4091_normal`,
    options: [`oddiy`, `baho`, `ahmoqona`, `to'plamoq`],
    answer: 0,
  },
  {
    q: `4092_rare`,
    options: [`noyob`, `maqola`, `masofa`, `teshik`],
    answer: 0,
  },
  {
    q: `4093_relax`,
    options: [`rohatlanmoq`, `nutq`, `sportchi`, `orol`],
    answer: 0,
  },
  {
    q: `4094_request`,
    options: [`so'ramoq`, `voqea`, `na`, `munosabat`],
    answer: 0,
  },
  {
    q: `4095_reside`,
    options: [`yashamoq`, `urmoq`, `xato`, `o'ziga xos`],
    answer: 0,
  },
  {
    q: `4096_result`,
    options: [`natija`, `rad qilmoq`, `do'stona`, `turli`],
    answer: 0,
  },
  {
    q: `4097_roll`,
    options: [`dumalamoq`, `prezident`, `baho`, `kuzatmoq`],
    answer: 0,
  },
  {
    q: `4098_since`,
    options: [`chunki`, `kamchilik`, `hissa qo'shmoq`, `yurist`],
    answer: 0,
  },
  {
    q: `4099_visible`,
    options: [`ko'rinadigan`, `paydo bo'ladi`, `sovrin`, `jamiyat`],
    answer: 0,
  },
  {
    q: `4100_wild`,
    options: [`yovvoyi`, `jentleman`, `haqiqat`, `yuz`],
    answer: 0,
  },
  {
    q: `4101_advantage`,
    options: [`afzallik`, `ko'rinish`, `ajoyib`, `qo'rquv`],
    answer: 0,
  },
  {
    q: `4102_cause`,
    options: [`sababi`, `qochmoq`, `jumboq`, `tashvishlanmoq`],
    answer: 0,
  },
  {
    q: `4103_choice`,
    options: [`tanlov`, `suhbat`, `tanimoq`, `yashamoq`],
    answer: 0,
  },
  {
    q: `4104_community`,
    options: [`jamoa`, `axborot bermoq`, `orin`, `xotira`],
    answer: 0,
  },
  { q: `4105_dead`, options: [`o'lik`, `dori`, `zavod`, `chunki`], answer: 0 },
  {
    q: `4106_distance`,
    options: [`masofa`, `orin`, `kamchilik`, `urmoq`],
    answer: 0,
  },
  {
    q: `4107_escape`,
    options: [`qochmoq`, `reja`, `hukm baho`, `hurmat`],
    answer: 0,
  },
  {
    q: `4108_face`,
    options: [`yuz`, `teatr`, `qachon bo'lsa ham`, `so'ramoq`],
    answer: 0,
  },
  {
    q: `4109_follow`,
    options: [
      `amal qilmoq  ortidan bormoq`,
      `mavsum`,
      `boshqarmoq`,
      `qandaydir yo'l bilan`,
    ],
    answer: 0,
  },
  {
    q: `4110_fright`,
    options: [`qo'rquv`, `fikr`, `himoya qilmoq`, `kuch`],
    answer: 0,
  },
  {
    q: `4111_ghost`,
    options: [`arvoh`, `shakl`, `mamnun`, `tajriba, sinov`],
    answer: 0,
  },
  {
    q: `4112_individual`,
    options: [`shaxs`, `sportchi`, `nashr etmoq`, `oldinga`],
    answer: 0,
  },
  {
    q: `4113_pet`,
    options: [
      `uy hayvoni`,
      `yo'l ko'rsatuvchi`,
      `taklif qilmoq`,
      `hatti-harakat`,
    ],
    answer: 0,
  },
  {
    q: `4114_reach`,
    options: [
      `erishmoq  yetib bormoq`,
      `yo'q qilmoq`,
      `bahslashmoq`,
      `taklif qilmoq`,
    ],
    answer: 0,
  },
  {
    q: `4115_return`,
    options: [`qaytmoq`, `taraqqiyot`, `yashamoq`, `tashkillashtirmoq`],
    answer: 0,
  },
  {
    q: `4116_survive`,
    options: [`omon qolmoq`, `laboratoriya`, `mutaxassis`, `foyda`],
    answer: 0,
  },
  {
    q: `4117_upset`,
    options: [`xafa`, `mavjud`, `saqlamoq`, `bog'lamoq`],
    answer: 0,
  },
  {
    q: `4118_voice`,
    options: [`ovoz`, `qadrlamoq`, `yovvoyi`, `zavod`],
    answer: 0,
  },
  {
    q: `4119_weather`,
    options: [
      `ob-havo`,
      `erishmoq ega bo'lmoq`,
      `amal qilmoq ortidan bormoq`,
      `oxirgi`,
    ],
    answer: 0,
  },
  {
    q: `4120_wise`,
    options: [`dono`, `qandaydir yo'l bilan`, `osib qo'y`, `halollik`],
    answer: 0,
  },
  {
    q: `4121_allow`,
    options: [`ruxsat bermoq`, `jadval`, `o'rta`, `tomonga`],
    answer: 0,
  },
  {
    q: `4122_announce`,
    options: [`e'lon qilmoq`, `hukm baho`, `axlat`, `ekin`],
    answer: 0,
  },
  {
    q: `4123_beside`,
    options: [`yonida`, `bezovta qilmoq`, `likop`, `faraz qilmoq`],
    answer: 0,
  },
  {
    q: `4124_challenge`,
    options: [`qiyinchilik`, `yo'nalish kurs`, `vazifa`, `muammo`],
    answer: 0,
  },
  {
    q: `4125_claim`,
    options: [`takidlamoq`, `uzoq`, `bir nechta`, `afzal ko'rmoq`],
    answer: 0,
  },
  {
    q: `4126_condition`,
    options: [`holat`, `zina`, `mamnun`, `sovg'a`],
    answer: 0,
  },
  {
    q: `4127_contribute`,
    options: [`hissa qo'shmoq`, `kesib`, `javob bermoq`, `sayt joy`],
    answer: 0,
  },
  {
    q: `4128_difference`,
    options: [`farq`, `xizmatchi`, `farq`, `qobiliyat`],
    answer: 0,
  },
  {
    q: `4129_divide`,
    options: [`bo'lmoq`, `ehtimol`, `murakkab`, `qahramon`],
    answer: 0,
  },
  {
    q: `4130_expert`,
    options: [`mutaxassis`, `mulk`, `rohatlanmoq`, `teatr`],
    answer: 0,
  },
  {
    q: `4131_famous`,
    options: [`mashhur`, `tomonga`, `qo'rqinchli`, `jazolamoq`],
    answer: 0,
  },
  {
    q: `4132_force`,
    options: [`kuch`, `qo'llab-quvvatlamoq`, `allaqachon`, `dog' joy`],
    answer: 0,
  },
  {
    q: `4133_harm`,
    options: [`zarar`, `asosiy`, `ichida`, `noyob`],
    answer: 0,
  },
  {
    q: `4134_lay`,
    options: [`yoymoq`, `qo'rqinchli`, `sayyora`, `taraqqiyot`],
    answer: 0,
  },
  {
    q: `4135_peace`,
    options: [`tinchlik`, `e'tiqod`, `chiqindi`, `ibora`],
    answer: 0,
  },
  {
    q: `4136_prince`,
    options: [`shahzoda`, `sovg'a`, `xalqaro`, `buyum`],
    answer: 0,
  },
  {
    q: `4137_protect`,
    options: [`himoya qilmoq`, `haddan tashqari`, `zarar`, `tavsiya qilmoq`],
    answer: 0,
  },
  {
    q: `4138_sense`,
    options: [`ma'no`, `dam olmoq qolgan`, `qo'rquv`, `boshqarmoq`],
    answer: 0,
  },
  {
    q: `4139_sudden`,
    options: [`to'satdan`, `kirmoq`, `ovqat`, `o'z ichiga olmoq`],
    answer: 0,
  },
  {
    q: `4140_therefore`,
    options: [`shuning uchun`, `sababi`, `aniq`, `tushunmoq`],
    answer: 0,
  },
  {
    q: `4141_accept`,
    options: [`qabul qilmoq`, `namoyish qilmoq`, `xafa`, `farq`],
    answer: 0,
  },
  {
    q: `4142_arrange`,
    options: [`tartibga solmoq`, `ko'rmoq`, `dam olmoq qolgan`, `qatnashmoq`],
    answer: 0,
  },
  {
    q: `4143_attend`,
    options: [`qatnashmoq`, `orol`, `iste'mol qilmoq`, `xonadon`],
    answer: 0,
  },
  {
    q: `4144_balance`,
    options: [`muvozanat`, `osib qo'y`, `lord`, `shafqatsiz`],
    answer: 0,
  },
  {
    q: `4145_contrast`,
    options: [`farq`, `oldinga`, `dono`, `tez-tez`],
    answer: 0,
  },
  {
    q: `4146_encourage`,
    options: [`rag'batlantirmoq`, `muvozanat`, `lahza`, `qaytmoq`],
    answer: 0,
  },
  {
    q: `4147_familiar`,
    options: [`tanish`, `holat`, `begona`, `raqobatlashmoq`],
    answer: 0,
  },
  {
    q: `4148_grab`,
    options: [`changallamoq`, `go'sht`, `yo'nalish kurs`, `tanqidchi`],
    answer: 0,
  },
  {
    q: `4149_hang`,
    options: [`osib qo'y`, `uy hayvoni`, `sinoat`, `standart`],
    answer: 0,
  },
  {
    q: `4150_huge`,
    options: [`katta`, `bog'lamoq`, `davolamoq munosabatda bo'lmoq`, `tirik`],
    answer: 0,
  },
  {
    q: `4151_necessary`,
    options: [`zarur`, `jarohat olmoq`, `kapitan`, `fikr`],
    answer: 0,
  },
  {
    q: `4152_pattern`,
    options: [`naqsh  tartib`, `mi yoki`, `baxtli`, `nazariya`],
    answer: 0,
  },
  {
    q: `4153_propose`,
    options: [`taklif qilmoq`, `qatnashmoq`, `yo'q qilmoq`, `yaxshi`],
    answer: 0,
  },
  {
    q: `4154_purpose`,
    options: [`maqsad`, `ashyo`, `ta'riflamoq`, `zarur`],
    answer: 0,
  },
  {
    q: `4155_release`,
    options: [`ozod qilmoq`, `foyda`, `yoki`, `hamshira`],
    answer: 0,
  },
  {
    q: `4156_require`,
    options: [`talab qilmoq`, `kulmoq`, `ehtimol`, `taxta`],
    answer: 0,
  },
  {
    q: `4157_single`,
    options: [`yakka`, `murabbiy`, `akademiya`, `uch`],
    answer: 0,
  },
  {
    q: `4158_success`,
    options: [`muvaffaqiyat`, `og'riq`, `mavjud`, `o'rniga`],
    answer: 0,
  },
  {
    q: `4159_tear`,
    options: [
      `ko'z yoshi  yirtmoq`,
      `baqirmoq`,
      `to'g'ri`,
      `aks qarama-qarshi`,
    ],
    answer: 0,
  },
  {
    q: `4160_theory`,
    options: [`nazariya`, `tirik`, `muammo`, `mahalliy`],
    answer: 0,
  },
  {
    q: `4161_against`,
    options: [`qarshi`, `hissa qo'shmoq`, `holat`, `shubha`],
    answer: 0,
  },
  {
    q: `4162_beach`,
    options: [`sohil`, `ijobiy`, `ahamiyat`, `qarzdor`],
    answer: 0,
  },
  {
    q: `4163_damage`,
    options: [`zarar`, `yashirmoq`, `o'rniga`, `shaxsiyat`],
    answer: 0,
  },
  {
    q: `4164_discover`,
    options: [`kashf qilmoq`, `yangi`, `oldini olmoq`, `anglatmoq`],
    answer: 0,
  },
  {
    q: `4165_emotion`,
    options: [`hissiyot`, `qo'rqitmoq`, `salqin ajoyib`, `butun`],
    answer: 0,
  },
  {
    q: `4166_fix`,
    options: [`tuzatmoq`, `tanlamoq`, `butun`, `kulmoq`],
    answer: 0,
  },
  {
    q: `4167_frank`,
    options: [`samimiy`, `sirt`, `reklama qilmoq`, `tasavvur qilmoq`],
    answer: 0,
  },
  {
    q: `4168_identify`,
    options: [`aniqlash`, `aqlli`, `hal qilmoq`, `kelishuv`],
    answer: 0,
  },
  {
    q: `4169_island`,
    options: [`orol`, `g'alati`, `o't`, `uchmoq`],
    answer: 0,
  },
  {
    q: `4170_ocean`,
    options: [`okean`, `ko'p`, `afzallik`, `nafas olmoq`],
    answer: 0,
  },
  {
    q: `4171_perhaps`,
    options: [`ehtimol`, `garchi`, `ovqat`, `yer`],
    answer: 0,
  },
  {
    q: `4172_pleasant`,
    options: [`yoqimli`, `xabardor`, `ovoz`, `taklif qilmoq`],
    answer: 0,
  },
  {
    q: `4173_prevent`,
    options: [`oldini olmoq`, `kuzatmoq`, `bo'shliq`, `qutb asos`],
    answer: 0,
  },
  {
    q: `4174_rock`,
    options: [`tosh`, `xavfsiz`, `mamnun`, `xavfsizlik`],
    answer: 0,
  },
  {
    q: `4175_save`,
    options: [`asramoq`, `talab qilmoq`, `mulk`, `qirg'oq`],
    answer: 0,
  },
  {
    q: `4176_step`,
    options: [`qadam`, `dono`, `qon`, `axborot bermoq`],
    answer: 0,
  },
  {
    q: `4177_still`,
    options: [`hali ham`, `muvofiq`, `anglatmoq`, `ko'tarilmoq`],
    answer: 0,
  },
  {
    q: `4178_taste`,
    options: [`ta'm  tatib ko'rmoq`, `xato`, `maymunjon`, `aks holda`],
    answer: 0,
  },
  {
    q: `4179_throw`,
    options: [`otmoq`, `maymunjon`, `qutb asos`, `joylashgan`],
    answer: 0,
  },
  {
    q: `4180_wave`,
    options: [`to'lqin`, `samarali`, `afzal ko'rmoq`, `ovoz bermoq`],
    answer: 0,
  },
  {
    q: `4181_benefit`,
    options: [`foyda`, `shaxsiyat`, `o'g'irlamoq`, `yetkazib bermoq`],
    answer: 0,
  },
  {
    q: `4182_certain`,
    options: [`aniq`, `o'zini tutmoq`, `safar`, `hayratlantirmoq`],
    answer: 0,
  },
  {
    q: `4183_chance`,
    options: [`imkoniyat`, `kelishuv`, `tegishli bo'lmoq`, `haqiqiy`],
    answer: 0,
  },
  {
    q: `4184_effect`,
    options: [`ta'sir`, `hech biri`, `javob bermoq`, `yovvoyi`],
    answer: 0,
  },
  {
    q: `4185_essential`,
    options: [`muhim`, `rozi bo'lmoq`, `uyg'otmoq`, `biroz ancha`],
    answer: 0,
  },
  {
    q: `4186_far`,
    options: [`uzoq`, `axlat`, `yashamoq`, `ajoyib`],
    answer: 0,
  },
  {
    q: `4187_focus`,
    options: [`diqqat markazi`, `zavod`, `azoblanmoq`, `jonzot`],
    answer: 0,
  },
  {
    q: `4188_function`,
    options: [`vazifa`, `hissiyot`, `aniqlash`, `markaz`],
    answer: 0,
  },
  {
    q: `4189_grass`,
    options: [`o't`, `muvaffaqiyat`, `ishlab chiqarmoq`, `shovqin`],
    answer: 0,
  },
  {
    q: `4190_guard`,
    options: [`qo'riqchi`, `uzunlik`, `diqqat markazi`, `afzallik`],
    answer: 0,
  },
  {
    q: `4191_image`,
    options: [`rasm`, `kuch-quvvat`, `va'da bermoq`, `bo'lak`],
    answer: 0,
  },
  {
    q: `4192_immediate`,
    options: [`darhol`, `sinoat`, `go'sht`, `ko'z yoshi yirtmoq`],
    answer: 0,
  },
  {
    q: `4193_primary`,
    options: [`asosiy`, `to'lqin`, `diqqat`, `dolzarb haqiqiy`],
    answer: 0,
  },
  {
    q: `4194_proud`,
    options: [`mag'rur`, `qahramon`, `ehtiyotkorlik bilan`, `xavfsiz`],
    answer: 0,
  },
  {
    q: `4195_remain`,
    options: [`qolmoq`, `yo'lak`, `mas'ul`, `qo'shimcha ma'lumot`],
    answer: 0,
  },
  {
    q: `4196_rest`,
    options: [`dam olmoq  qolgan`, `sayohat`, `otmoq`, `ovqat`],
    answer: 0,
  },
  {
    q: `4197_separate`,
    options: [`alohida`, `e'lon qilmoq`, `turli`, `shaxs`],
    answer: 0,
  },
  {
    q: `4198_site`,
    options: [`sayt  joy`, `o't`, `hatti-harakat`, `changallamoq`],
    answer: 0,
  },
  {
    q: `4199_tail`,
    options: [`dum`, `muammo`, `ta'sir`, `kimyoviy`],
    answer: 0,
  },
  {
    q: `4200_trouble`,
    options: [`muammo`, `ko'nglini ko'tarmoq`, `dumalamoq`, `ro'yxat`],
    answer: 0,
  },
  {
    q: `4201_anymore`,
    options: [`endi  qaytib`, `alohida`, `qirg'oq`, `mashhur`],
    answer: 0,
  },
  {
    q: `4202_asleep`,
    options: [`uyquda`, `tasavvur qilmoq`, `hiyla`, `orin`],
    answer: 0,
  },
  {
    q: `4203_berry`,
    options: [`maymunjon`, `tekis`, `to'g'ridan-to'g'ri`, `asbob`],
    answer: 0,
  },
  {
    q: `4204_collect`,
    options: [
      `to'plamoq`,
      `ajoyib`,
      `tushuntirish`,
      `muvaffaqiyatsizlikka uchramoq`,
    ],
    answer: 0,
  },
  {
    q: `4205_compete`,
    options: [`raqobatlashmoq`, `hal qilmoq`, `rozi bo'lmoq`, `to'satdan`],
    answer: 0,
  },
  {
    q: `4206_conversation`,
    options: [`suhbat`, `orasida`, `kimyoviy`, `qaror`],
    answer: 0,
  },
  {
    q: `4207_creature`,
    options: [`jonzot`, `qaror`, `natija`, `bo'lak`],
    answer: 0,
  },
  {
    q: `4208_decision`,
    options: [`qaror`, `hayratlanmoq`, `teshik`, `erishmoq ega bo'lmoq`],
    answer: 0,
  },
  {
    q: `4209_either`,
    options: [`yoki`, `olomon`, `murabbiy`, `katta`],
    answer: 0,
  },
  {
    q: `4210_forest`,
    options: [`o'rmon`, `harakat`, `ijtimoiy`, `sovrin`],
    answer: 0,
  },
  {
    q: `4211_ground`,
    options: [`yer`, `oldinga`, `yo'lak`, `she'r`],
    answer: 0,
  },
  {
    q: `4212_introduce`,
    options: [`tanishtirmoq`, `daraja`, `taxmin qilmoq`, `mavjud`],
    answer: 0,
  },
  {
    q: `4213_marry`,
    options: [`turmush qurmoq`, `naqsh tartib`, `uzunlik`, `tegishli bo'lmoq`],
    answer: 0,
  },
  {
    q: `4214_prepare`,
    options: [`tayyorlamoq`, `oqim`, `asosiy`, `ehtimol`],
    answer: 0,
  },
  {
    q: `4215_sail`,
    options: [`suzmoq`, `uslub`, `grafik jadval`, `yakka`],
    answer: 0,
  },
  {
    q: `4216_serious`,
    options: [`jiddiy`, `balki`, `kirmoq`, `ma'no`],
    answer: 0,
  },
  {
    q: `4217_spend`,
    options: [`sarflamoq`, `yoymoq`, `qo'riqchi`, `kutubxona`],
    answer: 0,
  },
  {
    q: `4218_strange`,
    options: [`g'alati`, `shaxs`, `yorqin`, `orqasida`],
    answer: 0,
  },
  {
    q: `4219_truth`,
    options: [`haqiqat`, `aks qarama-qarshi`, `imkoniyat`, `uchramoq`],
    answer: 0,
  },
  {
    q: `4220_wake`,
    options: [`uyg'otmoq`, `do'stlik`, `yo'lovchi`, `kuch-quvvat`],
    answer: 0,
  },
  {
    q: `4221_alone`,
    options: [`yolg'iz`, `zilzila`, `oldinga`, `muntazam`],
    answer: 0,
  },
  {
    q: `4222_apartment`,
    options: [`xonadon`, `o'rtacha`, `dori`, `qo'rqqan`],
    answer: 0,
  },
  {
    q: `4223_article`,
    options: [`maqola`, `tushuntirish`, `urmoq`, `professor`],
    answer: 0,
  },
  {
    q: `4224_artist`,
    options: [`rassom`, `o'rniga`, `munosabat`, `hal qilmoq`],
    answer: 0,
  },
  {
    q: `4225_attitude`,
    options: [`munosabat`, `boshqarmoq`, `birlashtirmoq`, `jahli chiqqan`],
    answer: 0,
  },
  {
    q: `4226_compare`,
    options: [`solishtirmoq`, `o'rganmoq`, `imkoniyat`, `qiyinchilik`],
    answer: 0,
  },
  {
    q: `4227_judge`,
    options: [`hukm qilmoq`, `taxmin qilmoq`, `shaxsiyat`, `ko'rinadigan`],
    answer: 0,
  },
  {
    q: `4228_magazine`,
    options: [`jurnal`, `mutaxassis`, `rad qilmoq`, `ijobiy`],
    answer: 0,
  },
  {
    q: `4229_material`,
    options: [`ashyo`, `begona`, `hali`, `ehtimol`],
    answer: 0,
  },
  {
    q: `4230_meal`,
    options: [`ovqat`, `tegishli bo'lmoq`, `bog'lamoq`, `mustaqil`],
    answer: 0,
  },
  {
    q: `4231_method`,
    options: [`uslub`, `sayt joy`, `shuning uchun`, `foyda`],
    answer: 0,
  },
  {
    q: `4232_neighbor`,
    options: [`qo'shni`, `taklif qilmoq`, `uchramoq`, `vazifa`],
    answer: 0,
  },
  {
    q: `4233_professional`,
    options: [`professional`, `hiyla`, `o'ziga xos`, `balki`],
    answer: 0,
  },
  {
    q: `4234_profit`,
    options: [`foyda`, `rassom`, `maqola`, `bo'lmoq`],
    answer: 0,
  },
  {
    q: `4235_quality`,
    options: [`sifat`, `maqsad`, `ofitser`, `axlat`],
    answer: 0,
  },
  {
    q: `4236_shape`,
    options: [`shakl`, `oldini olmoq`, `ovoz bermoq`, `kapitan`],
    answer: 0,
  },
  {
    q: `4237_space`,
    options: [`bo'shliq`, `dalillar`, `adolatli`, `yolg'iz`],
    answer: 0,
  },
  { q: `4238_stair`, options: [`zina`, `uch`, `cho'l`, `jismoniy`], answer: 0 },
  {
    q: `4239_symbol`,
    options: [`belgi`, `nishonlamoq`, `teatr`, `to'g'ri`],
    answer: 0,
  },
  {
    q: `4240_thin`,
    options: [`oriq`, `xafa`, `tashvishlanmoq`, `xorijiy`],
    answer: 0,
  },
  {
    q: `4241_blood`,
    options: [`qon`, `qo'ymoq o'rnatmoq`, `haddan tashqari`, `va'da bermoq`],
    answer: 0,
  },
  {
    q: `4242_burn`,
    options: [`kuymoq`, `hukm qilmoq`, `shaxs`, `talab`],
    answer: 0,
  },
  {
    q: `4243_cell`,
    options: [`hujayra  panjara`, `lug'at`, `yog'och`, `shoshilmoq`],
    answer: 0,
  },
  {
    q: `4244_contain`,
    options: [`o'z ichiga olmoq`, `ko'rinadigan`, `uch`, `mamnun`],
    answer: 0,
  },
  {
    q: `4245_correct`,
    options: [`to'g'ri`, `ehtiyotkorlik bilan`, `yaratmoq`, `ovoz`],
    answer: 0,
  },
  {
    q: `4246_crop`,
    options: [`ekin`, `orqasida`, `sokin`, `zaryadlash`],
    answer: 0,
  },
  {
    q: `4247_demand`,
    options: [`talab`, `kashf qilmoq`, `aks ettirmoq`, `miqdor`],
    answer: 0,
  },
  {
    q: `4248_equal`,
    options: [`teng`, `otmoq`, `jentleman`, `sir`],
    answer: 0,
  },
  {
    q: `4249_feed`,
    options: [`boqmoq`, `bo'shliq`, `o'rgimchak to'ri`, `suhbat`],
    answer: 0,
  },
  {
    q: `4250_hole`,
    options: [`teshik`, `o'z ichiga olmoq`, `aqlli`, `maqul ko'rmoq`],
    answer: 0,
  },
  {
    q: `4251_increase`,
    options: [`o'smoq`, `asabiy`, `misol`, `yo'qolmoq`],
    answer: 0,
  },
  {
    q: `4252_lord`,
    options: [`lord`, `jalb qilmoq`, `to'g'ri`, `birlashtirmoq`],
    answer: 0,
  },
  {
    q: `4253_owe`,
    options: [`qarzdor`, `imkoniyat`, `ega bo'lmoq`, `luqma tishlamoq`],
    answer: 0,
  },
  {
    q: `4254_position`,
    options: [`orin`, `tajriba, sinov`, `jazolamoq`, `odimlamoq`],
    answer: 0,
  },
  {
    q: `4255_raise`,
    options: [`oshirmoq`, `aniq`, `qo'rqitmoq`, `ovqat`],
    answer: 0,
  },
  {
    q: `4256_responsible`,
    options: [`mas'ul`, `aniqlamoq`, `umumiy`, `paydo bo'ladi`],
    answer: 0,
  },
  {
    q: `4257_sight`,
    options: [`ko'rish`, `ko'tarilmoq`, `yurist`, `bezovta qilmoq`],
    answer: 0,
  },
  {
    q: `4258_spot`,
    options: [`dog'  joy`, `zarar`, `qolmoq`, `maslahat`],
    answer: 0,
  },
  {
    q: `4259_structure`,
    options: [`tuzilish`, `zarar`, `mahalliy`, `a'zo`],
    answer: 0,
  },
  {
    q: `4260_whole`,
    options: [`butun`, `taklif qilmoq`, `qo'llab-quvvatlamoq`, `ichida`],
    answer: 0,
  },
  {
    q: `4261_coach`,
    options: [`murabbiy`, `odimlamoq`, `ma'no`, `ta'm tatib ko'rmoq`],
    answer: 0,
  },
  {
    q: `4262_control`,
    options: [`boshqaruv`, `to'g'ri`, `xizmat qilmoq`, `do'stona`],
    answer: 0,
  },
  {
    q: `4263_description`,
    options: [`tushuntirish`, `aniqlash`, `qadimiy`, `hayron bo'lmoq`],
    answer: 0,
  },
  {
    q: `4264_direct`,
    options: [`to'g'ridan-to'g'ri`, `akademiya`, `loyiha`, `tosh`],
    answer: 0,
  },
  {
    q: `4265_exam`,
    options: [`imtihon`, `oldini olmoq saqlanmoq`, `bosqich`, `hiyla`],
    answer: 0,
  },
  {
    q: `4266_example`,
    options: [`misol`, `yer`, `xorijiy`, `haqiqat`],
    answer: 0,
  },
  {
    q: `4267_limit`,
    options: [`chegara`, `ro'yxat`, `maqsad`, `arvoh`],
    answer: 0,
  },
  {
    q: `4268_local`,
    options: [`mahalliy`, `urmoq`, `to'satdan`, `sokin`],
    answer: 0,
  },
  {
    q: `4269_magical`,
    options: [`sehrli`, `uchmoq`, `shubha`, `e'lon qilmoq`],
    answer: 0,
  },
  {
    q: `4270_mail`,
    options: [`pochta`, `ozod qilmoq`, `javob bermoq`, `tagi, osti`],
    answer: 0,
  },
  {
    q: `4271_novel`,
    options: [`roman`, `zaryadlash`, `yomon`, `boshqaruv`],
    answer: 0,
  },
  {
    q: `4272_outline`,
    options: [`reja`, `pochta`, `tuzatmoq`, `murabbiy`],
    answer: 0,
  },
  {
    q: `4273_poet`,
    options: [`shoir`, `belgi`, `qaytmoq`, `aqlli`],
    answer: 0,
  },
  {
    q: `4274_print`,
    options: [`bosib chiqarmoq`, `ovoz bermoq`, `jahli chiqqan`, `xalqaro`],
    answer: 0,
  },
  {
    q: `4275_scene`,
    options: [`sahna`, `imtihon`, `zarur`, `tekis`],
    answer: 0,
  },
  {
    q: `4276_sheet`,
    options: [`varoq`, `tanqidchi`, `qo'shimcha`, `qarshi`],
    answer: 0,
  },
  {
    q: `4277_silly`,
    options: [`ahmoqona`, `yog'och`, `tajriba, sinov`, `lord`],
    answer: 0,
  },
  {
    q: `4278_store`,
    options: [`do'kon  saqlamoq`, `ko'lmak`, `roman`, `bo'ron`],
    answer: 0,
  },
  {
    q: `4279_suffer`,
    options: [`azoblanmoq`, `qiymat`, `tashlab ketmoq`, `yetib kelmoq`],
    answer: 0,
  },
  {
    q: `4280_technology`,
    options: [`texnologiya`, `ko'z yoshi yirtmoq`, `oldinga`, `o'rmon`],
    answer: 0,
  },
  {
    q: `4281_across`,
    options: [`kesib`, `yomonlik`, `rassom`, `naqsh tartib`],
    answer: 0,
  },
  {
    q: `4282_breathe`,
    options: [`nafas olmoq`, `roman`, `javob`, `pochta`],
    answer: 0,
  },
  {
    q: `4283_characteristic`,
    options: [`xususiyat`, `qiymat`, `ovlamoq`, `yechim`],
    answer: 0,
  },
  {
    q: `4284_consume`,
    options: [
      `iste'mol qilmoq`,
      `ma'no`,
      `taklif qilmoq`,
      `erishmoq yetib bormoq`,
    ],
    answer: 0,
  },
  {
    q: `4285_excite`,
    options: [`hayratlanmoq`, `sabzavot`, `davomida`, `ko'rmoq`],
    answer: 0,
  },
  {
    q: `4286_extreme`,
    options: [`haddan tashqari`, `bo'ron`, `ko'rinadigan`, `hissa qo'shmoq`],
    answer: 0,
  },
  {
    q: `4287_fear`,
    options: [`qo'rquv`, `aslida`, `uy hayvoni`, `holat`],
    answer: 0,
  },
  {
    q: `4288_fortunate`,
    options: [`baxtli`, `oxirgi`, `sodir bo'lmoq`, `dono`],
    answer: 0,
  },
  {
    q: `4289_happen`,
    options: [`sodir bo'lmoq`, `sodir bo'lmoq`, `yangi`, `grafik jadval`],
    answer: 0,
  },
  {
    q: `4290_length`,
    options: [`uzunlik`, `sir`, `bosim`, `o'g'ri`],
    answer: 0,
  },
  {
    q: `4291_mistake`,
    options: [`xato`, `ega bo'lmoq`, `muntazam`, `yomonlik`],
    answer: 0,
  },
  {
    q: `4292_observe`,
    options: [`kuzatmoq`, `tomoshabin`, `qochmoq`, `jiddiy`],
    answer: 0,
  },
  {
    q: `4293_opportunity`,
    options: [`imkoniyat`, `biroq`, `baland ovozda`, `muvofiq`],
    answer: 0,
  },
  {
    q: `4294_prize`,
    options: [`sovrin`, `jurnal`, `suhbat`, `xizmatchi`],
    answer: 0,
  },
  {
    q: `4295_race`,
    options: [`irq`, `shoshilmoq`, `jadval`, `darhol`],
    answer: 0,
  },
  {
    q: `4296_realize`,
    options: [`tushunmoq`, `foyda`, `darhol`, `bo'lim`],
    answer: 0,
  },
  {
    q: `4297_respond`,
    options: [
      `javob bermoq`,
      `qo'shimcha ma'lumot`,
      `paydo bo'ladi`,
      `dam olmoq qolgan`,
    ],
    answer: 0,
  },
  {
    q: `4298_risk`,
    options: [`xavf`, `aqliy`, `texnologiya`, `reja`],
    answer: 0,
  },
  {
    q: `4299_wonder`,
    options: [`hayron bo'lmoq`, `ichida`, `tushunmoq`, `sodir bo'lmoq`],
    answer: 0,
  },
  {
    q: `4300_yet`,
    options: [`hali`, `maslahat bermoq`, `tuzilish`, `o'g'irlamoq`],
    answer: 0,
  },
  {
    q: `4301_academy`,
    options: [`akademiya`, `hujayra panjara`, `hisobot`, `sayohat`],
    answer: 0,
  },
  {
    q: `4302_ancient`,
    options: [`qadimiy`, `sabrli`, `aqliy`, `okean`],
    answer: 0,
  },
  {
    q: `4303_board`,
    options: [`taxta`, `tavsiya qilmoq`, `kutubxona`, `ob-havo`],
    answer: 0,
  },
  {
    q: `4304_century`,
    options: [`asr`, `bo'lmoq`, `yonida`, `aniq`],
    answer: 0,
  },
  {
    q: `4305_clue`,
    options: [`qo'shimcha ma'lumot`, `maslahat`, `e'lon qilmoq`, `asr`],
    answer: 0,
  },
  {
    q: `4306_concert`,
    options: [`kontsert`, `boy`, `endi qaytib`, `aks ettirmoq`],
    answer: 0,
  },
  {
    q: `4307_county`,
    options: [`graflik`, `haqiqat`, `tanlamoq`, `suzmoq`],
    answer: 0,
  },
  {
    q: `4308_dictionary`,
    options: [`lug'at`, `mashg'ul bo'lmoq`, `asbob`, `mavsum`],
    answer: 0,
  },
  {
    q: `4309_exist`,
    options: [`mavjud`, `urush`, `okean`, `masofa`],
    answer: 0,
  },
  {
    q: `4310_flat`,
    options: [`tekis`, `qo'riqchi`, `qadrlamoq`, `alohida`],
    answer: 0,
  },
  {
    q: `4311_gentleman`,
    options: [`jentleman`, `tanlov`, `graflik`, `aloqa qilmoq`],
    answer: 0,
  },
  {
    q: `4312_hidden`,
    options: [`maxfiy`, `yaxshi`, `noyob`, `uzoqroq`],
    answer: 0,
  },
  {
    q: `4313_maybe`,
    options: [`balki`, `uyquda`, `nihoyat`, `mas'ul`],
    answer: 0,
  },
  {
    q: `4314_officer`,
    options: [`ofitser`, `shoshilmoq`, `o'smoq`, `likop`],
    answer: 0,
  },
  {
    q: `4315_original`,
    options: [`original`, `qirg'oq`, `asramoq`, `mashq qilmoq`],
    answer: 0,
  },
  {
    q: `4316_pound`,
    options: [`funt  qoqmoq`, `mag'rur`, `lug'at`, `yo'lovchi`],
    answer: 0,
  },
  {
    q: `4317_process`,
    options: [`jarayon`, `mustaqil`, `orol`, `yo'l ko'rsatuvchi`],
    answer: 0,
  },
  {
    q: `4318_publish`,
    options: [`nashr etmoq`, `katta`, `baqirmoq`, `o'rgimchak to'ri`],
    answer: 0,
  },
  {
    q: `4319_theater`,
    options: [`teatr`, `otmoq`, `talab`, `rad qilmoq`],
    answer: 0,
  },
  {
    q: `4320_wealth`,
    options: [`boylik`, `ovlamoq`, `tirik`, `o'zini tutmoq`],
    answer: 0,
  },
  {
    q: `4321_appreciate`,
    options: [`qadrlamoq`, `yetib kelmoq`, `zaryadlash`, `asramoq`],
    answer: 0,
  },
  {
    q: `4322_available`,
    options: [`mavjud`, `yo'qolmoq`, `taklif qilmoq`, `yaratmoq`],
    answer: 0,
  },
  {
    q: `4323_beat`,
    options: [`urmoq`, `ob-havo`, `sifat`, `nonushta`],
    answer: 0,
  },
  {
    q: `4324_bright`,
    options: [`yorqin`, `ta'sir`, `turmush qurmoq`, `davomida`],
    answer: 0,
  },
  {
    q: `4325_celebrate`,
    options: [`nishonlamoq`, `usta`, `yakka`, `hid`],
    answer: 0,
  },
  {
    q: `4326_determine`,
    options: [`aniqlamoq`, `qarshi`, `maxfiy`, `hujum qilmoq`],
    answer: 0,
  },
  {
    q: `4327_disappear`,
    options: [`yo'qolmoq`, `tuzatmoq`, `ruxsat bermoq`, `darvoza`],
    answer: 0,
  },
  {
    q: `4328_else`,
    options: [`yana boshqa`, `tanishtirmoq`, `foyda`, `qon`],
    answer: 0,
  },
  {
    q: `4329_fair`,
    options: [`adolatli`, `ovoz`, `sohil`, `xususiyat`],
    answer: 0,
  },
  {
    q: `4330_flow`,
    options: [`oqim`, `yolg'on gapirmoq`, `ko'nglini ko'tarmoq`, `muvozanat`],
    answer: 0,
  },
  {
    q: `4331_forward`,
    options: [`oldinga`, `kuch`, `tomonga`, `hech biri`],
    answer: 0,
  },
  {
    q: `4332_hill`,
    options: [`tepalik`, `iste'mol qilmoq`, `qo'rqqan`, `bekor qilmoq`],
    answer: 0,
  },
  {
    q: `4333_level`,
    options: [`daraja`, `sifat`, `belgi`, `suyak`],
    answer: 0,
  },
  {
    q: `4334_lone`,
    options: [`yolg'iz`, `sehrli`, `uchmoq`, `ochlik`],
    answer: 0,
  },
  {
    q: `4335_puddle`,
    options: [`ko'lmak`, `yechim`, `maydon`, `do'kon saqlamoq`],
    answer: 0,
  },
  {
    q: `4336_response`,
    options: [`javob`, `afzal ko'rmoq`, `farovonlik`, `o'rta`],
    answer: 0,
  },
  {
    q: `4337_season`,
    options: [`mavsum`, `o'g'irlamoq`, `sayt joy`, `mahsulot`],
    answer: 0,
  },
  {
    q: `4338_solution`,
    options: [`yechim`, `yoki`, `do'stlik`, `jentleman`],
    answer: 0,
  },
  {
    q: `4339_waste`,
    options: [`chiqindi`, `ko'rsatmoq`, `changallamoq`, `asbob`],
    answer: 0,
  },
  {
    q: `4340_whether`,
    options: [`mi yoki`, `tuzilish`, `shahzoda`, `tayyorlamoq`],
    answer: 0,
  },
  {
    q: `4341_argue`,
    options: [`bahslashmoq`, `bo'lak`, `bilim`, `tomchi`],
    answer: 0,
  },
  {
    q: `4342_communicate`,
    options: [`muloqot qilmoq`, `imkoniyat`, `nazariya`, `yolg'on gapirmoq`],
    answer: 0,
  },
  {
    q: `4343_crowd`,
    options: [`olomon`, `shovqin`, `dog' joy`, `qo'rqitmoq`],
    answer: 0,
  },
  {
    q: `4344_depend`,
    options: [`qaram bo'lmoq`, `xotira`, `takidlamoq`, `otmoq`],
    answer: 0,
  },
  {
    q: `4345_dish`,
    options: [`ovqat`, `o'rgimchak to'ri`, `to'satdan`, `aslida`],
    answer: 0,
  },
  {
    q: `4346_empty`,
    options: [`bo'sh`, `jazolamoq`, `hali ham`, `maymunjon`],
    answer: 0,
  },
  {
    q: `4347_exact`,
    options: [`aniq`, `safar`, `fikr`, `xizmat qilmoq`],
    answer: 0,
  },
  {
    q: `4348_fresh`,
    options: [`yangi`, `jismoniy`, `mag'rur`, `allaqachon`],
    answer: 0,
  },
  {
    q: `4349_gather`,
    options: [`to'plamoq`, `tashkillashtirmoq`, `reja`, `boylik`],
    answer: 0,
  },
  {
    q: `4350_indicate`,
    options: [`ko'rsatmoq`, `ruxsat bermoq`, `ovoz`, `harakat`],
    answer: 0,
  },
  {
    q: `4351_item`,
    options: [`buyum`, `qabul qilmoq`, `silkitmoq`, `sohil`],
    answer: 0,
  },
  {
    q: `4352_offer`,
    options: [`taklif qilmoq`, `baxtli`, `o'zini tutmoq`, `ta'sir`],
    answer: 0,
  },
  {
    q: `4353_price`,
    options: [`narx`, `adolatli`, `yomonroq`, `yangi`],
    answer: 0,
  },
  {
    q: `4354_product`,
    options: [`mahsulot`, `erishmoq`, `yetib kelmoq`, `yoqimli`],
    answer: 0,
  },
  {
    q: `4355_property`,
    options: [`mulk`, `topmoq`, `bekor qilmoq`, `qabul qilmoq`],
    answer: 0,
  },
  {
    q: `4356_purchase`,
    options: [`sotib olmoq`, `original`, `ozod qilmoq`, `tajriba, sinov`],
    answer: 0,
  },
  {
    q: `4357_recommend`,
    options: [`tavsiya qilmoq`, `belgi`, `mashhur`, `shoir`],
    answer: 0,
  },
  {
    q: `4358_select`,
    options: [
      `tanlamoq`,
      `muvaffaqiyatsizlikka uchramoq`,
      `vazifa`,
      `jarohat olmoq`,
    ],
    answer: 0,
  },
  { q: `4359_tool`, options: [`asbob`, `xato`, `asr`, `kesib`], answer: 0 },
  {
    q: `4360_treat`,
    options: [
      `davolamoq  munosabatda bo'lmoq`,
      `qutb asos`,
      `qahramon`,
      `o'ldirmoq`,
    ],
    answer: 0,
  },
  {
    q: `4361_alive`,
    options: [`tirik`, `oriq`, `qarzdor`, `masala`],
    answer: 0,
  },
  {
    q: `4362_bone`,
    options: [`suyak`, `amal qilmoq ortidan bormoq`, `musobaqa`, `yomon`],
    answer: 0,
  },
  {
    q: `4363_bother`,
    options: [`bezovta qilmoq`, `na`, `yuz`, `musiqiy guruh`],
    answer: 0,
  },
  {
    q: `4364_captain`,
    options: [`kapitan`, `shuning uchun`, `varoq`, `nishonlamoq`],
    answer: 0,
  },
  {
    q: `4365_conclusion`,
    options: [`xulosa`, `jamoat`, `o'ldirmoq`, `javob`],
    answer: 0,
  },
  {
    q: `4366_doubt`,
    options: [`shubha`, `bir nechta`, `katta`, `misol`],
    answer: 0,
  },
  {
    q: `4367_explore`,
    options: [
      `kashf qilmoq`,
      `o'ylab ko'rmoq`,
      `qo'shib qo'ymoq`,
      `tanishtirmoq`,
    ],
    answer: 0,
  },
  {
    q: `4368_foreign`,
    options: [`xorijiy`, `ko'rsatma bermoq`, `ehtimol`, `sovrin`],
    answer: 0,
  },
  {
    q: `4369_glad`,
    options: [`mamnun`, `okean`, `xulosa`, `oshirmoq`],
    answer: 0,
  },
  {
    q: `4370_however`,
    options: [`biroq`, `grafik jadval`, `oqim`, `daraja`],
    answer: 0,
  },
  {
    q: `4371_injustice`,
    options: [`adolatsizlik`, `boylik`, `taraqqiyot`, `diqqat`],
    answer: 0,
  },
  {
    q: `4372_international`,
    options: [`xalqaro`, `munosabat`, `yolg'on gapirmoq`, `farovonlik`],
    answer: 0,
  },
  {
    q: `4373_lawyer`,
    options: [`yurist`, `yo'lak`, `ko'lmak`, `voqea`],
    answer: 0,
  },
  {
    q: `4374_mention`,
    options: [`eslatmoq`, `jarayon`, `professional`, `qo'llab-quvvatlamoq`],
    answer: 0,
  },
  {
    q: `4375_policy`,
    options: [`siyosat`, `kutmoq`, `qabul qilmoq`, `yashirmoq`],
    answer: 0,
  },
  {
    q: `4376_social`,
    options: [`ijtimoiy`, `nonushta`, `uzoq`, `ijtimoiy`],
    answer: 0,
  },
  {
    q: `4377_speech`,
    options: [`nutq`, `xarajat`, `sayohat`, `urush`],
    answer: 0,
  },
  {
    q: `4378_staff`,
    options: [`xodimlar`, `mijoz`, `jismoniy`, `uyquda`],
    answer: 0,
  },
  {
    q: `4379_toward`,
    options: [`tomonga`, `farq`, `qo'shimcha ma'lumot`, `shahzoda`],
    answer: 0,
  },
  {
    q: `4380_wood`,
    options: [`yog'och`, `ehtimol`, `yechim`, `teng`],
    answer: 0,
  },
  {
    q: `4381_achieve`,
    options: [`erishmoq`, `teshik`, `biroz ancha`, `hayratlanmoq`],
    answer: 0,
  },
  {
    q: `4382_advise`,
    options: [`maslahat bermoq`, `asbob`, `irq`, `oqim`],
    answer: 0,
  },
  {
    q: `4383_already`,
    options: [`allaqachon`, `qo'rqqan`, `asabiy`, `tanlov`],
    answer: 0,
  },
  {
    q: `4384_basic`,
    options: [`asosiy`, `xizmat qilmoq`, `suyak`, `orasida`],
    answer: 0,
  },
  {
    q: `4385_bit`,
    options: [`bo'lak`, `sayohat`, `naqsh tartib`, `xavf`],
    answer: 0,
  },
  {
    q: `4386_consider`,
    options: [`o'ylab ko'rmoq`, `asr`, `to'plamoq`, `namoyish qilmoq`],
    answer: 0,
  },
  {
    q: `4387_destroy`,
    options: [`yo'q qilmoq`, `to'plamoq`, `aralashtirmoq`, `asabiy`],
    answer: 0,
  },
  {
    q: `4388_entertain`,
    options: [
      `ko'nglini ko'tarmoq`,
      `professional`,
      `namoyish qilmoq`,
      `ahmoqona`,
    ],
    answer: 0,
  },
  {
    q: `4389_extra`,
    options: [`qo'shimcha`, `qaytmoq`, `payqamoq`, `mashg'ul bo'lmoq`],
    answer: 0,
  },
  {
    q: `4390_goal`,
    options: [`maqsad`, `oddiy`, `maslahat`, `ishlab chiqarmoq`],
    answer: 0,
  },
  {
    q: `4391_lie`,
    options: [`yolg'on gapirmoq`, `standart`, `zarar`, `rassom`],
    answer: 0,
  },
  {
    q: `4392_meat`,
    options: [`go'sht`, `ta'riflamoq`, `yaqinlashmoq`, `talab qilmoq`],
    answer: 0,
  },
  {
    q: `4393_opinion`,
    options: [`fikr`, `hamshira`, `original`, `kutmoq`],
    answer: 0,
  },
  {
    q: `4394_real`,
    options: [`haqiqiy`, `sarflamoq`, `markaz`, `an'ana`],
    answer: 0,
  },
  {
    q: `4395_reflect`,
    options: [`aks ettirmoq`, `hali`, `yaxshi`, `imkoniyat`],
    answer: 0,
  },
  {
    q: `4396_regard`,
    options: [`deb bilmoq`, `bosqich`, `sehrli`, `qo'ymoq o'rnatmoq`],
    answer: 0,
  },
  {
    q: `4397_serve`,
    options: [`xizmat qilmoq`, `tashlab ketmoq`, `ro'yxat`, `zo'rg'a`],
    answer: 0,
  },
  {
    q: `4398_vegetable`,
    options: [`sabzavot`, `maqul ko'rmoq`, `tomchi`, `xodimlar`],
    answer: 0,
  },
  {
    q: `4399_war`,
    options: [`urush`, `hurmat`, `hid`, `aralashtirmoq`],
    answer: 0,
  },
  {
    q: `4400_worth`,
    options: [`qiymat`, `ishlab chiqarmoq`, `so'ramoq`, `azoblanmoq`],
    answer: 0,
  },
  {
    q: `4401_appear`,
    options: [`paydo bo'ladi`, `mas'ul`, `odat`, `kamchilik`],
    answer: 0,
  },
  {
    q: `4402_base`,
    options: [`tayanch`, `chiqindi`, `oddiy`, `natija`],
    answer: 0,
  },
  { q: `4403_brain`, options: [`miya`, `natija`, `xavf`, `narx`], answer: 0 },
  {
    q: `4404_career`,
    options: [`martaba`, `mos kelmoq`, `pasaytirmoq`, `uzunlik`],
    answer: 0,
  },
  {
    q: `4405_clerk`,
    options: [`xizmatchi`, `to'g'ridan-to'g'ri`, `o'rtacha`, `hisobot`],
    answer: 0,
  },
  {
    q: `4406_effort`,
    options: [`harakat`, `haqiqiy`, `o'rmon`, `tushuntirish`],
    answer: 0,
  },
  {
    q: `4407_enter`,
    options: [`kirmoq`, `o'yin`, `maqsad`, `yaqinlashmoq`],
    answer: 0,
  },
  {
    q: `4408_excellent`,
    options: [`ajoyib`, `bekor qilmoq`, `kuch-quvvat`, `tanimoq`],
    answer: 0,
  },
  {
    q: `4409_hero`,
    options: [`qahramon`, `shahzoda`, `tagi, osti`, `dori`],
    answer: 0,
  },
  {
    q: `4410_hurry`,
    options: [`shoshilmoq`, `asosiy`, `xotira`, `asosiy`],
    answer: 0,
  },
  {
    q: `4411_inform`,
    options: [`axborot bermoq`, `nihoyat`, `kontsert`, `xulosa`],
    answer: 0,
  },
  {
    q: `4412_later`,
    options: [`keyinchalik`, `sayyora`, `xabardor`, `misol`],
    answer: 0,
  },
  {
    q: `4413_leave`,
    options: [`tashlab ketmoq`, `maxfiy`, `xususiyat`, `roman`],
    answer: 0,
  },
  {
    q: `4414_locate`,
    options: [`topmoq`, `saqlamoq`, `qiyinchilik`, `sarguzasht`],
    answer: 0,
  },
  {
    q: `4415_nurse`,
    options: [`hamshira`, `shafqatsiz`, `o'z ichiga olmoq`, `qo'shimcha`],
    answer: 0,
  },
  {
    q: `4416_operation`,
    options: [`operatsiya`, `tashvishlanmoq`, `a'zo`, `rasm`],
    answer: 0,
  },
  {
    q: `4417_pain`,
    options: [`og'riq`, `davolamoq munosabatda bo'lmoq`, `misol`, `siyosat`],
    answer: 0,
  },
  {
    q: `4418_refuse`,
    options: [`rad qilmoq`, `qo'rquv`, `bo'lak`, `solishtirmoq`],
    answer: 0,
  },
  {
    q: `4419_though`,
    options: [`garchi`, `yashamoq`, `tosh`, `kashf qilmoq`],
    answer: 0,
  },
  {
    q: `4420_various`,
    options: [`turli`, `mamnun`, `jamiyat`, `isbotlamoq`],
    answer: 0,
  },
  {
    q: `4421_actual`,
    options: [`dolzarb  haqiqiy`, `chegara`, `mavsum`, `professional`],
    answer: 0,
  },
  {
    q: `4422_amaze`,
    options: [`hayratlantirmoq`, `likop`, `noto'g'ri`, `adolatsizlik`],
    answer: 0,
  },
  {
    q: `4423_charge`,
    options: [`zaryadlash`, `tagi, osti`, `bo'ron`, `lahza`],
    answer: 0,
  },
  {
    q: `4424_comfort`,
    options: [`farovonlik`, `maqsad`, `olam`, `to'satdan`],
    answer: 0,
  },
  {
    q: `4425_contact`,
    options: [`aloqa qilmoq`, `tinchlik`, `hissiyot`, `bilim`],
    answer: 0,
  },
  {
    q: `4426_customer`,
    options: [`mijoz`, `hisobot`, `boylik`, `sayrga chiqmoq`],
    answer: 0,
  },
  {
    q: `4427_deliver`,
    options: [`yetkazib bermoq`, `xavfsizlik`, `bir qator tur`, `chegara`],
    answer: 0,
  },
  {
    q: `4428_earn`,
    options: [`ishlab topmoq`, `yoqimli`, `mustaqil`, `saqlamoq`],
    answer: 0,
  },
  {
    q: `4429_gate`,
    options: [`darvoza`, `umumiy`, `buyum`, `shuning uchun`],
    answer: 0,
  },
  {
    q: `4430_include`,
    options: [`qo'shib qo'ymoq`, `yolg'iz`, `tajriba, sinov`, `shakl`],
    answer: 0,
  },
  {
    q: `4431_manage`,
    options: [`boshqarmoq`, `yuz`, `ko'tarilmoq`, `tushunmoq`],
    answer: 0,
  },
  {
    q: `4432_mystery`,
    options: [`sinoat`, `operatsiya`, `muhim`, `sotib olmoq`],
    answer: 0,
  },
  {
    q: `4433_occur`,
    options: [`uchramoq`, `misol`, `tanishtirmoq`, `akademiya`],
    answer: 0,
  },
  {
    q: `4434_opposite`,
    options: [`aks  qarama-qarshi`, `sokin`, `qandaydir yo'l bilan`, `oddiy`],
    answer: 0,
  },
  {
    q: `4435_plate`,
    options: [`likop`, `yetkazib bermoq`, `bosib chiqarmoq`, `ko'lmak`],
    answer: 0,
  },
  {
    q: `4436_receive`,
    options: [`qabul qilmoq`, `uyg'otmoq`, `faraz qilmoq`, `belgi`],
    answer: 0,
  },
  {
    q: `4437_reward`,
    options: [`sovrin`, `turli`, `deb bilmoq`, `maxfiy`],
    answer: 0,
  },
  {
    q: `4438_set`,
    options: [`qo'ymoq  o'rnatmoq`, `ishlab topmoq`, `sabzavot`, `martaba`],
    answer: 0,
  },
  {
    q: `4439_steal`,
    options: [`o'g'irlamoq`, `taxta`, `tayinlamoq`, `qadam`],
    answer: 0,
  },
  {
    q: `4440_thief`,
    options: [`o'g'ri`, `ta'm tatib ko'rmoq`, `kashf qilmoq`, `jamoa`],
    answer: 0,
  },
  {
    q: `4441_advance`,
    options: [`odimlamoq`, `hayratlantirmoq`, `ko'z yoshi yirtmoq`, `og'riq`],
    answer: 0,
  },
  {
    q: `4442_athlete`,
    options: [`sportchi`, `oshirmoq`, `katta`, `axlat`],
    answer: 0,
  },
  {
    q: `4443_average`,
    options: [`o'rtacha`, `aniq`, `aniqlamoq`, `mi yoki`],
    answer: 0,
  },
  {
    q: `4444_behavior`,
    options: [`hatti-harakat`, `katta`, `shama qilmoq`, `yorqin`],
    answer: 0,
  },
  {
    q: `4445_behind`,
    options: [`orqasida`, `do'stona`, `pochta`, `ijro etmoq`],
    answer: 0,
  },
  {
    q: `4446_course`,
    options: [`yo'nalish  kurs`, `ovqat`, `standart`, `xato`],
    answer: 0,
  },
  {
    q: `4447_lower`,
    options: [`pasaytirmoq`, `taklif qilmoq`, `talab qilmoq`, `baxtli`],
    answer: 0,
  },
  {
    q: `4448_match`,
    options: [`o'yin`, `xorijiy`, `operatsiya`, `farq`],
    answer: 0,
  },
  {
    q: `4449_member`,
    options: [`a'zo`, `keng`, `qo'shni`, `topmoq`],
    answer: 0,
  },
  {
    q: `4450_mental`,
    options: [`aqliy`, `jamiyat`, `xarajat`, `nihoyat`],
    answer: 0,
  },
  {
    q: `4451_passenger`,
    options: [`yo'lovchi`, `adolatsizlik`, `sayohat`, `boy`],
    answer: 0,
  },
  {
    q: `4452_personality`,
    options: [`shaxsiyat`, `qo'rquv`, `sayrga chiqmoq`, `qadrlamoq`],
    answer: 0,
  },
  {
    q: `4453_poem`,
    options: [`she'r`, `javob bermoq`, `o'rganmoq`, `mamnun`],
    answer: 0,
  },
  {
    q: `4454_pole`,
    options: [`qutb  asos`, `jamoa`, `tinchlik`, `ovoz`],
    answer: 0,
  },
  {
    q: `4455_remove`,
    options: [`olib tashlash`, `nazariya`, `rasm`, `yo'q qilmoq`],
    answer: 0,
  },
  {
    q: `4456_safety`,
    options: [`xavfsizlik`, `aralashtirmoq`, `mi yoki`, `ko'rinish`],
    answer: 0,
  },
  {
    q: `4457_shoot`,
    options: [`otmoq`, `mahalliy`, `tayyorlamoq`, `aqliy`],
    answer: 0,
  },
  {
    q: `4458_sound`,
    options: [`ovoz`, `shoir`, `sahna`, `uyg'otmoq`],
    answer: 0,
  },
  {
    q: `4459_swim`,
    options: [`suzmoq`, `funt qoqmoq`, `siyosat`, `qiymat`],
    answer: 0,
  },
  {
    q: `4460_web`,
    options: [`o'rgimchak to'ri`, `ochlik`, `qo'rquv`, `eslatmoq`],
    answer: 0,
  },
  {
    q: `4461_block`,
    options: [`bo'lak`, `miqdor`, `xonadon`, `qo'shni`],
    answer: 0,
  },
  {
    q: `4462_cheer`,
    options: [`hayqiriq`, `joylashgan`, `hayqiriq`, `ichida`],
    answer: 0,
  },
  {
    q: `4463_complex`,
    options: [`murakkab`, `va'da bermoq`, `qatnashmoq`, `ashyo`],
    answer: 0,
  },
  {
    q: `4464_critic`,
    options: [`tanqidchi`, `bir qator tur`, `hamshira`, `keyinchalik`],
    answer: 0,
  },
  {
    q: `4465_event`,
    options: [`voqea`, `mamnun`, `voqea`, `zilzila`],
    answer: 0,
  },
  {
    q: `4466_exercise`,
    options: [`mashq qilmoq`, `qo'shni`, `o'lik`, `hujayra panjara`],
    answer: 0,
  },
  {
    q: `4467_fit`,
    options: [`mos kelmoq`, `qaram bo'lmoq`, `samimiy`, `ko'rsatma bermoq`],
    answer: 0,
  },
  {
    q: `4468_friendship`,
    options: [`do'stlik`, `yolg'iz`, `boy`, `qabul qilmoq`],
    answer: 0,
  },
  {
    q: `4469_guide`,
    options: [`yo'l ko'rsatuvchi`, `javob bermoq`, `tepalik`, `mijoz`],
    answer: 0,
  },
  {
    q: `4470_lack`,
    options: [`kamchilik`, `kutubxona`, `axlat`, `yashamoq`],
    answer: 0,
  },
  {
    q: `4471_passage`,
    options: [`yo'lak`, `birlashtirmoq`, `bulut`, `takidlamoq`],
    answer: 0,
  },
  {
    q: `4472_perform`,
    options: [`ijro etmoq`, `tartibga solmoq`, `bo'lak`, `sayyora`],
    answer: 0,
  },
  {
    q: `4473_pressure`,
    options: [`bosim`, `noyob`, `nafas olmoq`, `baho`],
    answer: 0,
  },
  {
    q: `4474_probable`,
    options: [`ehtimol`, `miya`, `luqma tishlamoq`, `tarqalmoq`],
    answer: 0,
  },
  {
    q: `4475_public`,
    options: [`jamoat`, `yurist`, `laboratoriya`, `taklif qilmoq`],
    answer: 0,
  },
  {
    q: `4476_strike`,
    options: [`urmoq`, `o'rta`, `foyda`, `olib tashlash`],
    answer: 0,
  },
  {
    q: `4477_support`,
    options: [`qo'llab-quvvatlamoq`, `o'rmon`, `olomon`, `bosib chiqarmoq`],
    answer: 0,
  },
  {
    q: `4478_task`,
    options: [`vazifa`, `farovonlik`, `qaror`, `ozod qilmoq`],
    answer: 0,
  },
  {
    q: `4479_term`,
    options: [`muddat`, `an'ana`, `muvaffaqiyatsizlikka uchramoq`, `zerikarli`],
    answer: 0,
  },
  {
    q: `4480_unite`,
    options: [`birlashtirmoq`, `so'ramoq`, `miya`, `lug'at`],
    answer: 0,
  },
  {
    q: `4481_associate`,
    options: [`bog'lamoq`, `qarzdor`, `solishtirmoq`, `reklama qilmoq`],
    answer: 0,
  },
  {
    q: `4482_environment`,
    options: [`atrof-muhit`, `yomon`, `jamoat`, `oriq`],
    answer: 0,
  },
  {
    q: `4483_factory`,
    options: [`zavod`, `dumalamoq`, `harakat`, `xabardor`],
    answer: 0,
  },
  {
    q: `4484_feature`,
    options: [`xususiyat`, `halollik`, `tomoshabin`, `jarayon`],
    answer: 0,
  },
  {
    q: `4485_instance`,
    options: [`misol`, `tanish`, `raqobatlashmoq`, `ko'rsatmoq`],
    answer: 0,
  },
  {
    q: `4486_involve`,
    options: [`mashg'ul bo'lmoq`, `qabul qilmoq`, `jiddiy`, `yomonroq`],
    answer: 0,
  },
  {
    q: `4487_medicine`,
    options: [`dori`, `diqqat`, `ijobiy`, `uzoq`],
    answer: 0,
  },
  {
    q: `4488_mix`,
    options: [`aralashtirmoq`, `muntazam`, `tekis`, `sahna`],
    answer: 0,
  },
  {
    q: `4489_organize`,
    options: [`tashkillashtirmoq`, `tepalik`, `sabrli`, `erishmoq`],
    answer: 0,
  },
  {
    q: `4490_period`,
    options: [`davr`, `to'satdan`, `o'g'ri`, `qachon bo'lsa ham`],
    answer: 0,
  },
  {
    q: `4491_populate`,
    options: [`yashamoq`, `javob`, `zo'rg'a`, `imtihon`],
    answer: 0,
  },
  {
    q: `4492_produce`,
    options: [`ishlab chiqarmoq`, `kapitan`, `tartibga solmoq`, `hali ham`],
    answer: 0,
  },
  {
    q: `4493_range`,
    options: [`bir qator  tur`, `to'satdan`, `hukm qilmoq`, `baland ovozda`],
    answer: 0,
  },
  {
    q: `4494_recognize`,
    options: [`tanimoq`, `olam`, `tayanch`, `xabar`],
    answer: 0,
  },
  {
    q: `4495_regular`,
    options: [`muntazam`, `qo'shimcha`, `yana boshqa`, `samimiy`],
    answer: 0,
  },
  {
    q: `4496_sign`,
    options: [`belgi`, `jahli chiqqan`, `orasida`, `olam`],
    answer: 0,
  },
  { q: `4497_tip`, options: [`uch`, `sohil`, `ashyo`, `original`], answer: 0 },
  {
    q: `4498_tradition`,
    options: [`an'ana`, `bilim`, `asosiy`, `davr`],
    answer: 0,
  },
  {
    q: `4499_trash`,
    options: [`axlat`, `hayqiriq`, `xususiyat`, `texnologiya`],
    answer: 0,
  },
  {
    q: `4500_wide`,
    options: [`keng`, `tushunmoq`, `ijro etmoq`, `tuzatmoq`],
    answer: 0,
  },
  {
    q: `4501_advice`,
    options: [`maslahat`, `qachon bo'lsa ham`, `uzoqroq`, `odat`],
    answer: 0,
  },
  {
    q: `4502_along`,
    options: [`davomida`, `sehrli`, `ko'rsatmoq`, `qolmoq`],
    answer: 0,
  },
  {
    q: `4503_attention`,
    options: [`diqqat`, `tarqalmoq`, `yoqimli`, `umumiy`],
    answer: 0,
  },
  {
    q: `4504_attract`,
    options: [`jalb qilmoq`, `ahmoqona`, `kutmoq`, `belgi`],
    answer: 0,
  },
  {
    q: `4505_climb`,
    options: [`ko'tarilmoq`, `dolzarb haqiqiy`, `qaram bo'lmoq`, `loyiha`],
    answer: 0,
  },
  {
    q: `4506_drop`,
    options: [`tomchi`, `turmush qurmoq`, `muddat`, `safar`],
    answer: 0,
  },
  {
    q: `4507_final`,
    options: [`oxirgi`, `misol`, `ob-havo`, `sayohat`],
    answer: 0,
  },
  {
    q: `4508_further`,
    options: [`uzoqroq`, `professor`, `kashf qilmoq`, `ovlamoq`],
    answer: 0,
  },
  {
    q: `4509_imply`,
    options: [`shama qilmoq`, `qadam`, `haqiqiy`, `jadval`],
    answer: 0,
  },
  {
    q: `4510_maintain`,
    options: [`saqlamoq`, `allaqachon`, `oldini olmoq saqlanmoq`, `sehrli`],
    answer: 0,
  },
  {
    q: `4511_neither`,
    options: [`na`, `murakkab`, `zilzila`, `diqqat markazi`],
    answer: 0,
  },
  {
    q: `4512_otherwise`,
    options: [`aks holda`, `keyinchalik`, `shoir`, `operatsiya`],
    answer: 0,
  },
  {
    q: `4513_physical`,
    options: [`jismoniy`, `arvoh`, `funt qoqmoq`, `hali`],
    answer: 0,
  },
  {
    q: `4514_prove`,
    options: [`isbotlamoq`, `mashhur`, `hujum qilmoq`, `laboratoriya`],
    answer: 0,
  },
  {
    q: `4515_react`,
    options: [`javob bermoq`, `isbotlamoq`, `balki`, `yolg'iz`],
    answer: 0,
  },
  {
    q: `4516_ride`,
    options: [`uchmoq`, `aks ettirmoq`, `jarayon`, `bahslashmoq`],
    answer: 0,
  },
  {
    q: `4517_situated`,
    options: [`joylashgan`, `yuqorida`, `yuqorida`, `javob bermoq`],
    answer: 0,
  },
  {
    q: `4518_society`,
    options: [`jamiyat`, `ulashmoq`, `musiqiy guruh`, `o'yin`],
    answer: 0,
  },
  {
    q: `4519_standard`,
    options: [`standart`, `vazifa`, `mahsulot`, `ta'riflamoq`],
    answer: 0,
  },
  {
    q: `4520_suggest`,
    options: [`taklif qilmoq`, `davom etmoq`, `ibora`, `tuzilish`],
    answer: 0,
  },
  {
    q: `4521_actually`,
    options: [`aslida`, `hatti-harakat`, `alohida`, `silkitmoq`],
    answer: 0,
  },
  {
    q: `4522_bite`,
    options: [`luqma  tishlamoq`, `sahna`, `narx`, `bo'sh`],
    answer: 0,
  },
  {
    q: `4523_coast`,
    options: [`qirg'oq`, `ijtimoiy`, `kuch`, `zarar`],
    answer: 0,
  },
  {
    q: `4524_deal`,
    options: [`kelishuv`, `ekin`, `tanqidchi`, `ulashmoq`],
    answer: 0,
  },
  {
    q: `4525_desert`,
    options: [`cho'l`, `yashamoq`, `aniq`, `mag'rur`],
    answer: 0,
  },
  {
    q: `4526_earthquake`,
    options: [`zilzila`, `ehtimol`, `oshirmoq`, `ko'nglini ko'tarmoq`],
    answer: 0,
  },
  {
    q: `4527_effective`,
    options: [`samarali`, `bulut`, `aloqa qilmoq`, `o'lik`],
    answer: 0,
  },
  {
    q: `4528_examine`,
    options: [`o'rganmoq`, `suyak`, `kesib`, `bosqich`],
    answer: 0,
  },
  {
    q: `4529_false`,
    options: [`noto'g'ri`, `muhim`, `jonzot`, `mutaxassis`],
    answer: 0,
  },
  {
    q: `4530_gift`,
    options: [`sovg'a`, `ovoz`, `muvozanat`, `graflik`],
    answer: 0,
  },
  {
    q: `4531_hunger`,
    options: [`ochlik`, `musiqiy guruh`, `zina`, `dumalamoq`],
    answer: 0,
  },
  {
    q: `4532_imagine`,
    options: [`tasavvur qilmoq`, `payqamoq`, `shakl`, `ehtiyotkorlik bilan`],
    answer: 0,
  },
  {
    q: `4533_journey`,
    options: [`sayohat`, `sayrga chiqmoq`, `hujayra panjara`, `ishlab topmoq`],
    answer: 0,
  },
  {
    q: `4534_puzzle`,
    options: [`jumboq`, `kontsert`, `yoymoq`, `bo'shliq`],
    answer: 0,
  },
  {
    q: `4535_quite`,
    options: [`biroz  ancha`, `eslatmoq`, `tasavvur qilmoq`, `sabzavot`],
    answer: 0,
  },
  {
    q: `4536_rather`,
    options: [`maqul ko'rmoq`, `xodimlar`, `qo'ymoq o'rnatmoq`, `kontsert`],
    answer: 0,
  },
  {
    q: `4537_specific`,
    options: [`o'ziga xos`, `ovqat`, `to'lqin`, `baqirmoq`],
    answer: 0,
  },
  {
    q: `4538_tour`,
    options: [`sayohat`, `yaratmoq`, `qarshi`, `sinoat`],
    answer: 0,
  },
  {
    q: `4539_trip`,
    options: [`safar`, `tez-tez`, `qadam`, `adolatli`],
    answer: 0,
  },
  {
    q: `4540_value`,
    options: [`qiymat`, `texnologiya`, `ekin`, `shoshilmoq`],
    answer: 0,
  },
  {
    q: `4541_band`,
    options: [`musiqiy guruh`, `yana boshqa`, `topmoq`, `yuqorida`],
    answer: 0,
  },
  {
    q: `4542_barely`,
    options: [`zo'rg'a`, `olib tashlash`, `darvoza`, `sababi`],
    answer: 0,
  },
  {
    q: `4543_boring`,
    options: [`zerikarli`, `qiyinchilik`, `mijoz`, `yo'nalish kurs`],
    answer: 0,
  },
  {
    q: `4544_cancel`,
    options: [
      `bekor qilmoq`,
      `mashq qilmoq`,
      `yo'qolmoq`,
      `oldini olmoq saqlanmoq`,
    ],
    answer: 0,
  },
  {
    q: `4545_driveway`,
    options: [`yo'lak`, `qon`, `sovg'a`, `tanish`],
    answer: 0,
  },
  {
    q: `4546_garbage`,
    options: [`axlat`, `cho'l`, `ishlab topmoq`, `begona`],
    answer: 0,
  },
  {
    q: `4547_instrument`,
    options: [`asbob`, `tayyorlamoq`, `aks holda`, `ruxsat bermoq`],
    answer: 0,
  },
  {
    q: `4548_list`,
    options: [`ro'yxat`, `tajriba, sinov`, `sarguzasht`, `do'stlik`],
    answer: 0,
  },
  {
    q: `4549_magic`,
    options: [`sehrli`, `kuymoq`, `qishloq`, `g'alati`],
    answer: 0,
  },
  {
    q: `4550_message`,
    options: [`xabar`, `silkitmoq`, `teng`, `to'lqin`],
    answer: 0,
  },
  {
    q: `4551_notice`,
    options: [`payqamoq`, `kashf qilmoq`, `odimlamoq`, `irq`],
    answer: 0,
  },
  {
    q: `4552_own`,
    options: [`ega bo'lmoq`, `o'g'ri`, `ko'rsatma bermoq`, `ko'rish`],
    answer: 0,
  },
  {
    q: `4553_predict`,
    options: [`taxmin qilmoq`, `tomchi`, `prezident`, `shama qilmoq`],
    answer: 0,
  },
  {
    q: `4554_professor`,
    options: [`professor`, `tosh`, `o'yin`, `e'tiqod`],
    answer: 0,
  },
  {
    q: `4555_rush`,
    options: [`shoshilmoq`, `zarur`, `yolg'iz`, `himoya qilmoq`],
    answer: 0,
  },
  {
    q: `4556_schedule`,
    options: [`jadval`, `qo'shib qo'ymoq`, `suzmoq`, `bir nechta`],
    answer: 0,
  },
  {
    q: `4557_share`,
    options: [`ulashmoq`, `nashr etmoq`, `an'ana`, `mos kelmoq`],
    answer: 0,
  },
  {
    q: `4558_stage`,
    options: [`bosqich`, `biroz ancha`, `miqdor`, `endi qaytib`],
    answer: 0,
  },
  {
    q: `4559_storm`,
    options: [`bo'ron`, `qobiliyat`, `yashirmoq`, `yoymoq`],
    answer: 0,
  },
  {
    q: `4560_within`,
    options: [`ichida`, `uchramoq`, `chunki`, `varoq`],
    answer: 0,
  },
  {
    q: `4561_advertise`,
    options: [`reklama qilmoq`, `jonzot`, `qobiliyat`, `tashlab ketmoq`],
    answer: 0,
  },
  {
    q: `4562_assign`,
    options: [`tayinlamoq`, `ijro etmoq`, `kelishuv`, `keng`],
    answer: 0,
  },
  {
    q: `4563_audience`,
    options: [`tomoshabin`, `changallamoq`, `eslatmoq`, `to'plamoq`],
    answer: 0,
  },
  {
    q: `4564_breakfast`,
    options: [`nonushta`, `xonadon`, `uyquda`, `qaram bo'lmoq`],
    answer: 0,
  },
  {
    q: `4565_competition`,
    options: [`musobaqa`, `yomonroq`, `yetkazib bermoq`, `tartibga solmoq`],
    answer: 0,
  },
  {
    q: `4566_cool`,
    options: [`salqin  ajoyib`, `tanimoq`, `ko'p`, `rag'batlantirmoq`],
    answer: 0,
  },
  {
    q: `4567_gain`,
    options: [
      `erishmoq  ega bo'lmoq`,
      `ichida`,
      `muvaffaqiyat`,
      `salqin ajoyib`,
    ],
    answer: 0,
  },
  {
    q: `4568_importance`,
    options: [`ahamiyat`, `tayanch`, `hayratlantirmoq`, `qo'shib qo'ymoq`],
    answer: 0,
  },
  {
    q: `4569_knowledge`,
    options: [`bilim`, `rasm`, `mashg'ul bo'lmoq`, `turli`],
    answer: 0,
  },
  {
    q: `4570_major`,
    options: [`katta`, `yaqinlashmoq`, `do'kon saqlamoq`, `yo'lak`],
    answer: 0,
  },
  {
    q: `4571_mean`,
    options: [`anglatmoq`, `sotib olmoq`, `dalillar`, `garchi`],
    answer: 0,
  },
  {
    q: `4572_prefer`,
    options: [`afzal ko'rmoq`, `teng`, `tashkillashtirmoq`, `nashr etmoq`],
    answer: 0,
  },
  {
    q: `4573_president`,
    options: [`prezident`, `himoya qilmoq`, `sababi`, `hissiyot`],
    answer: 0,
  },
  {
    q: `4574_progress`,
    options: [`taraqqiyot`, `erishmoq yetib bormoq`, `suzmoq`, `muddat`],
    answer: 0,
  },
  {
    q: `4575_respect`,
    options: [`hurmat`, `bahslashmoq`, `bo'sh`, `maslahat bermoq`],
    answer: 0,
  },
  {
    q: `4576_rich`,
    options: [`boy`, `deb bilmoq`, `martaba`, `yana boshqa`],
    answer: 0,
  },
  {
    q: `4577_skill`,
    options: [`qobiliyat`, `buyum`, `ochlik`, `sportchi`],
    answer: 0,
  },
  {
    q: `4578_somehow`,
    options: [`qandaydir yo'l bilan`, `muloqot qilmoq`, `turli`, `ahamiyat`],
    answer: 0,
  },
  {
    q: `4579_strength`,
    options: [`kuch-quvvat`, `mamnun`, `shoshilmoq`, `biroq`],
    answer: 0,
  },
  {
    q: `4580_vote`,
    options: [`ovoz bermoq`, `nafas olmoq`, `xavfsiz`, `iste'mol qilmoq`],
    answer: 0,
  },
  {
    q: `4581_above`,
    options: [`yuqorida`, `varoq`, `zerikarli`, `vakillik qilmoq`],
    answer: 0,
  },
  {
    q: `4582_ahead`,
    options: [`oldinga`, `faraz qilmoq`, `atrof-muhit`, `pasaytirmoq`],
    answer: 0,
  },
  {
    q: `4583_amount`,
    options: [`miqdor`, `vakillik qilmoq`, `uslub`, `javob bermoq`],
    answer: 0,
  },
  {
    q: `4584_belief`,
    options: [`e'tiqod`, `omon qolmoq`, `hurmat`, `miya`],
    answer: 0,
  },
  {
    q: `4585_center`,
    options: [`markaz`, `martaba`, `keng`, `boqmoq`],
    answer: 0,
  },
  {
    q: `4586_common`,
    options: [`umumiy`, `o'ziga xos`, `ko'rmoq`, `qochmoq`],
    answer: 0,
  },
  {
    q: `4587_cost`,
    options: [`xarajat`, `sarguzasht`, `jurnal`, `jumboq`],
    answer: 0,
  },
  {
    q: `4588_demonstrate`,
    options: [`namoyish qilmoq`, `mahsulot`, `jalb qilmoq`, `kuymoq`],
    answer: 0,
  },
  {
    q: `4589_different`,
    options: [`turli`, `boqmoq`, `oriq`, `maydon`],
    answer: 0,
  },
  {
    q: `4590_evidence`,
    options: [`dalillar`, `baland ovozda`, `isbotlamoq`, `o'ylab ko'rmoq`],
    answer: 0,
  },
  {
    q: `4591_honesty`,
    options: [`halollik`, `hali ham`, `taxta`, `qo'riqchi`],
    answer: 0,
  },
  {
    q: `4592_idiom`,
    options: [`ibora`, `shubha`, `davr`, `hukm baho`],
    answer: 0,
  },
  {
    q: `4593_independent`,
    options: [`mustaqil`, `she'r`, `urush`, `mamnun`],
    answer: 0,
  },
  {
    q: `4594_inside`,
    options: [`ichida`, `zo'rg'a`, `kuzatmoq`, `samarali`],
    answer: 0,
  },
  {
    q: `4595_master`,
    options: [`usta`, `atrof-muhit`, `shafqatsiz`, `aniqlamoq`],
    answer: 0,
  },
  {
    q: `4596_memory`,
    options: [`xotira`, `xususiyat`, `oxirgi`, `prezident`],
    answer: 0,
  },
  {
    q: `4597_proper`,
    options: [`to'g'ri`, `xavf`, `professor`, `davom etmoq`],
    answer: 0,
  },
  {
    q: `4598_scan`,
    options: [`ko'rmoq`, `qishloq`, `erishmoq`, `zarar`],
    answer: 0,
  },
  {
    q: `4599_section`,
    options: [`bo'lim`, `turli`, `bo'lmoq`, `payqamoq`],
    answer: 0,
  },
  {
    q: `4600_surface`,
    options: [`sirt`, `farq`, `xodimlar`, `hukm qilmoq`],
    answer: 0,
  },
];

console.log(quiz.length); // 55
console.log(quiz.length); // 55

// === in gitBash: ====
// node js/question13.js
